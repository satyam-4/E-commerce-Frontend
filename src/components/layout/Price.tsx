type Price = {
    originalPrice: number;
    discountedPrice: number;
}

export default function Price({ originalPrice, discountedPrice }: Price) {
    return (
        <div className="my-2 flex items-center gap-5">
            <p className="text-xl font-semibold text-zinc-500 line-through">${originalPrice}</p>
            <p className="text-xl font-semibold">${discountedPrice}</p>
        </div>
    )
}