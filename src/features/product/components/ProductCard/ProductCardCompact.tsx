type ProductInfo = {
    id: number;
    name: string;
    thumbnail: string;
    startingPrice: number;
}

export default function ProductCardCompact({ 
    id, 
    name, 
    thumbnail, 
    startingPrice
}: ProductInfo) {
    return (
        <div className="relative p-2 border border-zinc-300 shadow-md w-[280px] h-[400px] flex flex-col justify-between items-center">
            <div className="relative text-center w-full aspect-square cursor-pointer bg-zinc-300 rounded-lg flex items-center justify-center">
                <h1 className="text-2xl font-bold text-zinc-500">Product Image</h1>
            </div>
            <span className="w-full block text-center h-[3.3rem] break-words line-clamp-2 text-lg text-neutral-500 hover:underline cursor-pointer">
                {name}
            </span>
            <p className="text-2xl text-black">
                From ${startingPrice}
            </p>
        </div>
    )
}