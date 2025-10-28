"use client";

import { useState } from "react";
import ProductCardCompact from "@/features/product/components/ProductCard/ProductCardCompact";
import Link from "next/link";
import { ProductCardCompactSkeleton, ProductCardDetailed } from "@/features/product/components";

export default function FeaturedProduct() {
    const [isLoading, setIsLoading] = useState(false);

	if (isLoading) {
        return (
			<section className="flex flex-wrap gap-4">
				{
					Array.from({ length: 10 }).map((_, i) => (
						<ProductCardCompactSkeleton key={i} />
					))
				}
			</section>
        )
    }

    return (
        <section className="px-5 flex flex-col gap-5">
            <h1 className="text-2xl font-bold tracking-wide">Featured Products</h1>

			<ul className="flex flex-wrap gap-4">
				{
					Array.from({ length: 10 }).map((card, i) => (
						<li key={i}>
							<Link href="/">
								<ProductCardCompact
								id={i}
								name="Samsung Galaxy Series"
								thumbnail=""
								startingPrice={399}
								/>
							</Link>
						</li>
					))
				}
			</ul>

			<div className="bg-neutral-200 w-full h-[280px]" />

            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-5">
				<li>
					<Link href={"/"}>
                		<ProductCardDetailed productId={1} productPrice={453} productName="Samsung S3 Essential Monitor 27 inches" productStock={45} />
					</Link>
				</li>
				<li>
					<Link href={"/"}>
                		<ProductCardDetailed productId={1} productPrice={453} productName="Samsung S3 Essential Monitor 27 inches" productStock={45} />
					</Link>
				</li>
				<li>
					<Link href={"/"}>
                		<ProductCardDetailed productId={1} productPrice={453} productName="Samsung S3 Essential Monitor 27 inches" productStock={45} />
					</Link>
				</li>
				<li>
					<Link href={"/"}>
                		<ProductCardDetailed productId={1} productPrice={453} productName="Samsung S3 Essential Monitor 27 inches" productStock={45} />
					</Link>
				</li>
            </ul>

			<ul className="list-none justify-items-center flex gap-5">
				{
					Array.from({ length: 5 }).map((card, i) => (
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

			<div className="bg-neutral-200 w-full h-[280px]" />
        </section>
    )
}