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
        <li>
            <Link 
            href={`/products/${productId}-${productName}`}
            className="relative p-3 border border-zinc-200 shadow-md w-full flex items-center gap-8"
            >
                <div className="relative h-full">
                    <div className="w-[300px] h-[300px] bg-neutral-200 rounded-xl flex items-center justify-center text-center text-2xl font-bold text-zinc-500">
                        300 x 300
                    </div>
                    {/* <Badge className="absolute top-0 px-3 py-1.5 text-sm bg-amber-600">
                        Bestseller
                    </Badge> */}
                    <Badge className="absolute top-0 px-3 py-1.5 text-sm bg-red-600">
                        New
                    </Badge>
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
                            {/* <Badge className="px-2 py-1 bg-red-700">
                                Deal of the Day
                            </Badge> */}

                            {
                                productStock <= 5 && (
                                    <p className="text-lg font-semibold text-red-700">
                                        Only {productStock} Left
                                    </p>
                                )
                            }
                        </h3>

                        <div className="my-2 flex items-center gap-2">
                            <Badge className="px-3 py-1.5 bg-blue-500">
                                <BadgeCheckIcon style={{ width: "1.2rem", height: "1.2rem" }} />
                                Verified
                            </Badge>

                            <Badge className="px-3 py-1.5 bg-green-600">
                                <Leaf style={{ width: "1.2rem", height: "1.2rem" }} />
                                Eco-Friendly
                            </Badge>

                            <Badge className="px-3 py-1.5 text-green-300">
                                <Truck style={{ width: "1.2rem", height: "1.2rem" }} />
                                Free Delivery
                            </Badge>
                        </div>
                        {
                            productStock <= 0 && (
                                <h3 className="text-2xl font-semibold text-red-600">
                                    Out of stock
                                </h3>
                            )
                        }
                    </div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloribus fuga eum? Assumenda voluptatem excepturi quas harum, incidunt consectetur quibusdam?
                    </p>
                    <div className="grow flex items-end justify-end">
                        <button className="px-4 py-3 rounded-md text-white bg-black font-semibold">
                            Add to cart
                        </button>
                    </div>
                </div>
            </Link>
        </li>
    )
}