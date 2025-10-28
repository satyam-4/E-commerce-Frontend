import Rating from "@/components/layout/Rating";
import { Badge } from "@/components/ui/badge";
import { BadgeCheckIcon, Leaf, Truck } from "lucide-react";
import Link from "next/link";

interface ProductCardDetailedProps {
    productId: number;
    productName: string;
    productPrice: number;
    productStock: number;
}

export default function ProductCardDetailed({ productId, productName, productPrice, productStock }: ProductCardDetailedProps) {
    return (
        <div className="relative p-3 border border-zinc-200 shadow-md w-full flex items-center gap-8">
            <div className="relative h-full">
                <div className="w-[300px] h-[300px] bg-neutral-200 rounded-xl flex items-center justify-center text-center text-2xl font-bold text-zinc-500">
                    300 x 300
                </div>
                <Badge variant="bestseller" />
                {/* <Badge variant="new">
                    New
                </Badge> */}
            </div>
            <div className="grow flex flex-col justify-between h-[300px]">
                <div className="space-y-1 mb-2">
                    <h1 className="text-3xl">
                        {productName}
                    </h1>
                    
                    <Rating value={4.5} reviews={45600} />
                    <h3 className="text-2xl font-semibold">
                        <div className="flex items-center gap-2">
                            <p className="text-black">
                                From
                            </p>
                            <p className="text-green-600 font-bold">
                                ${productPrice}
                            </p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <Badge variant="deal-of-the-day" />
                            <p className="font-normal text-red-700">
                                20% off
                            </p>

                        </div>

                        {
                            productStock <= 5 && (
                                <p className="text-lg font-semibold text-red-700">
                                    Only {productStock} Left
                                </p>
                            )
                        }
                    </h3>

                    <div className="my-2 flex items-center gap-2">
                        <Badge variant="verified" />
                        <Badge variant="eco-friendly" />
                        <Badge variant="free-delivery" />
                    </div>
                    {
                        productStock <= 0 && (
                            <h3 className="text-2xl font-semibold text-red-600">
                                Out of stock
                            </h3>
                        )
                    }
                </div>
                {/* <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloribus fuga eum? Assumenda voluptatem excepturi quas harum, incidunt consectetur quibusdam?
                </p> */}
                <div className="grow flex items-end justify-end">
                    <button className="px-4 py-3 rounded-md text-white bg-black font-semibold">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}