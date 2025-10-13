import { Icons } from "../icons";

type RatingProps = {
    value: number;
    reviews: number;
}

export default function Rating({ value, reviews }: RatingProps) {
    const stars = [];
    const max = 5;

    for(let i = 1; i <= max; i++) {
        if(value >= i) {
            stars.push(<Icons.star key={i} className="text-black fill-black" />)
        } else if(value >= i - 0.5) {
            stars.push(
                <div key={i} className="relative">
                    <Icons.starHalf className="absolute text-black fill-black" />
                    <Icons.star className="text-black" />
                </div>
            )
        } else {
            stars.push(<Icons.star key={i} className="text-zinc-400" />)
        }
    }

    return (
        <div className="flex items-center gap-1">
            <div className="flex">{stars}</div>
            <p className="text-lg text-zinc-500 font-semibold">({ reviews >= 1000 ? (reviews/1000).toFixed(1) + 'K' : reviews })</p>
        </div>
    )
}