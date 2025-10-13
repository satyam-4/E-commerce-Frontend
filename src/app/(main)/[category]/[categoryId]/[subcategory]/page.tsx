"use client";

import { ProductCardDetailed, ProductCardDetailedSkeleton } from "@/features/product/components";
import ProductSidebarSkeleton from "@/features/product/components/ProductSidebar/ProductSidebarSkeleton";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface Params {
    subcategory: string;
}

interface SellerVariant {
    id: number;
    sellerId: string;
    price: number;
    stock: number;
}

interface ProductVariant {
    id: number;
    sku: string;
    attributes: { [key: string]: string };
    sellerVariants: SellerVariant[];
}

interface Product {
    id: number;
    name: string;
    createdAt: Date;
    productVariants: ProductVariant[];
}

export default function SubcategoryPage({ params }: { params: Promise<Params> }) {
    const { subcategory } = React.use(params);
    const [products, setProducts]= useState<Product[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<string | null>(null);

    const fetchProducts = async () => {
        try {
            setIsLoading(true);
            setErrors(null);
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/products?subcategory=${subcategory}`);
            setProducts(res?.data?.data);
        } catch (err: any) {
            setIsLoading(false);
            setErrors(err?.response?.data?.message);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log(products);

    if (errors) {
        return (
            <section className="px-5">
                <h1 className="my-3 text-3xl font-semibold">
                    {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
                </h1>
                <div className="py-10 space-y-2 text-center">
                    <h2 className="text-xl font-semibold">{errors}</h2>
                    <button 
                    onClick={fetchProducts}
                    className="px-4 py-2 rounded-md bg-black font-semibold text-white cursor-pointer">
                        Retry
                    </button>
                </div>
            </section>
        )
    }

    if (isLoading) {
        return (
            <section className="px-5">
                <h1 className="my-3 text-3xl font-semibold">
                    {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
                </h1>
                <ProductCardDetailedSkeleton />
            </section>
        )
    }

    return (
        <section className="px-5">
            <h1 className="my-3 text-3xl font-semibold">
                {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
            </h1>
            <div className="flex gap-4">
                <ProductSidebarSkeleton />
                <ul className="grow flex flex-col gap-5">
                    {
                        products?.map((prod, i) => (
                            <ProductCardDetailed 
                            key={i}
                            productId={prod.id}
                            productName={prod.name}
                            productPrice={Math.trunc(prod?.productVariants[0]?.sellerVariants[0]?.price)}
                            productStock={prod.productVariants[0]?.sellerVariants[0]?.stock}
                            />
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}