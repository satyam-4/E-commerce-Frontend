import ProductCardCompact from "@/features/product/components/ProductCard/ProductCardCompact";
import Link from "next/link";

export default function FeaturedProduct() {


    return (
        <section className="flex flex-col gap-3">
            <h1 className="px-5 text-2xl font-bold tracking-wide">Featured Products</h1>
            <div className="flex">
                <ul className="px-5 grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {
                        Array.from({ length: 8 }).map((card, i) => (
                            <li key={i}>
                                <Link href="/">
                                    <ProductCardCompact
                                    id={i}
                                    name="Samsung Galaxy Series fjlkfjalfkjlakjflafalfkjalfjlakjkfjlkajlkjflakj"
                                    thumbnail=""
                                    startingPrice={399}
                                    />
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="w-[280px] border border-zinc-300 shadow-md bg-neutral-100" />
            </div>
        </section>
    )
}