import Price from "@/components/layout/Price";
import Rating from "@/components/layout/Rating";
import Link from "next/link";
import Image from "next/image";

type ProductInfo = {
    id: number;
    name: string;
    slug: string;
    thumbnail: string;
    rating: number;
    reviews: number;
    originalPrice: number;
    discountedPrice: number;
    attributes: Record<string, string> | undefined;
}

export default function ProductCardCompact({ 
    id, 
    name, 
    slug,
    thumbnail, 
    rating, 
    reviews, 
    originalPrice, 
    discountedPrice,
    attributes }: ProductInfo) {
    return (
        <div className="p-2 border border-zinc-300 shadow-lg w-[360px] h-[450px] rounded-md flex flex-col justify-center items-center gap-2">
            <div className="relative text-center w-full h-1/2 cursor-pointer bg-zinc-300 rounded-lg flex items-center justify-center">
                {/* <Image fill src={thumbnail} alt={name} className="object-contain" /> */}
                <h1 className="text-2xl font-bold text-zinc-500">Product Image</h1>
            </div>
            <h2 className="text-lg text-center font-semibold hover:underline cursor-pointer">{name}</h2>
            <Rating value={rating} reviews={reviews} />
            <Price originalPrice={originalPrice} discountedPrice={discountedPrice} />
            <div className="w-full flex items-center justify-between">
                <button className="border-2 border-black px-4 py-2 rounded-md font-semibold cursor-pointer">
                    Add to Cart
                </button>
                <Link href={`/products/${id}-${slug}`} target="_blank" rel="noopener noreferrer">
                    <button className="border-2 border-black px-4 py-2 bg-black text-white rounded-md font-semibold cursor-pointer">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    )
}