"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import CategorySkeleton from "./CategorySkeleton";
import { Category } from "../types/category";

export default function CategoryGrid() {
    const [categories, setCategories] = useState<Category[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchCategories = async () => {
        try {
            setError(null);
            setIsLoading(true);
            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/categories`, 
                { withCredentials: true }
            );
            setCategories(res.data.data);
        } catch (err: any) {
            console.error("Error while fetching categories:", err);
            setError(err?.response?.data?.message || "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    if (isLoading) {
        return (
            <>
                <h1 className="mt-8 mb-3 px-5 text-2xl font-bold tracking-wide">Shop by Catagory</h1>            
                <CategorySkeleton />
            </>
        )
    }

    if (error) {
        return (
            <>
                <h1 className="mt-8 mb-3 px-5 text-2xl font-bold tracking-wide">Shop by Catagory</h1>
                <div className="text-center space-y-2">
                    <h1 className="text-xl font-semibold">{error}</h1>
                    <button 
                    onClick={fetchCategories}
                    className="px-4 py-2 bg-black text-white font-semibold rounded-lg cursor-pointer"
                    >
                        Retry
                    </button>
                </div>
            </>
        )
    }

    return (
        <>
            <h1 className="mt-8 mb-3 px-5 text-2xl font-bold tracking-wide">Shop by Catagory</h1>
            <ul className="px-5 my-4 grid justify-items-center grid-cols-8 gap-5">
                {
                    categories?.map((cat) => (
                        <Link key={cat.id} href={`/${cat.slug}/${cat.id}`}>
                            <li className="w-[180px] h-[180px] shadow-sm rounded-xl flex justify-center items-center border-2 border-zinc-300">
                                <h2 className="text-xl font-semibold text-center">{cat.name}</h2>
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </>
    )
}