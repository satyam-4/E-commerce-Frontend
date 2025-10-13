"use client";

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

interface Subcategory {
    id: number;
    name: string;
    slug: string;
    desctiption?: string;
    createdAt: Date;
    updatedAt: Date
};

interface Params {
    category: string,
    categoryId: number
};

export default function CategoryPage({ params } : { params: Promise<Params> }) {
    const { category, categoryId } = React.use(params);
    const [subcategories, setSubcategories] = useState<null | Subcategory[] >(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    console.log("id:", categoryId);
    console.log("category:", category);

    const fetchSubcategories = async () => {
        try {
            setError(null);
            setIsLoading(true);
            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/categories/${categoryId}/subcategory`,
                { withCredentials: true }
            );
            setSubcategories(res.data.data);
            return
        } catch (err: any) {
            setIsLoading(false);
            setError(err?.response?.data?.message);
            console.log(err)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchSubcategories();
    }, []);

    if (isLoading) {
        return (
            <section>
                <h1 className="px-5 my-3 text-3xl font-semibold">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </h1>
                <div className="px-5 grid justify-items-center grid-cols-6 gap-5">
                    {
                        Array.from({ length: 12 }).map((_, i) => (
                            <Skeleton key={i} className="w-[240px] h-[240px]" />
                        ))
                    }
                </div>
            </section>
        )
    }

    if (error) {
        return (
            <section>
                <h1 className="px-5 my-3 text-3xl font-semibold">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </h1>
                <div className="text-center space-y-2">
                    <h1 className="text-xl font-semibold">{error}</h1>
                    <button 
                    onClick={fetchSubcategories}
                    className="px-4 py-2 bg-black text-white font-semibold rounded-lg cursor-pointer"
                    >
                        Retry
                    </button>
                </div>
            </section>
        )
    }

    return (
        <section>
            <h1 className="px-5 my-3 text-3xl font-semibold">
                {category.charAt(0).toUpperCase() + category.slice(1)}
            </h1>
            <ul className="px-5 grid justify-items-center grid-cols-6 gap-5">
                {
                    subcategories?.map((subcat, i) => (
                        <Link key={i} href={`/${category}/${categoryId}/${subcat.name}`} >
                            <li className="w-[240px] h-[240px] flex justify-center items-center shadow-md border border-zinc-300 rounded-xl">
                                {subcat.name}
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </section>
    )
}