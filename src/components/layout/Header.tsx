"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Icons } from "../icons";

export default function Header() {
    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleLoginClick = () => {
        router.push("/login");
    }

    return (
        <header className="px-5 h-[60px] border-b border-zinc-400 shadow-md flex items-center justify-between">
            <h1 className="text-xl font-semibold">Amazon</h1>
            <div className="relative border-2 w-[500px] h-[40px] flex items-center rounded-md overflow-hidden">
                <input 
                type="search" 
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoComplete="new-password" 
                spellCheck="false" 
                autoCorrect="off" 
                autoCapitalize="off" 
                className="pl-2 pr-24 outline-none flex-grow font-semibold text-zinc-800 tracking-wide"
                />
                {
                    query && (
                        <button 
                        onClick={() => setQuery("")}
                        className="absolute right-15 cursor-pointer"
                        >
                            <Icons.clear />
                        </button>
                    )
                }
                <button className="absolute right-0 px-4 h-full bg-black text-white">
                    <Icons.search />
                </button>
            </div>
            <div className="flex items-center gap-8">
                <button className="relative cursor-pointer">
                    <Icons.cart className="size-7" />
                    <span className="absolute -top-2 -right-2 border-2 w-6 h-6 flex justify-center items-center rounded-full bg-black font-bold text-white">
                        5
                    </span>
                </button>
                <button 
                onClick={handleLoginClick}
                className="px-4 py-2 bg-black text-white font-semibold rounded-md cursor-pointer"
                >
                    Login
                </button>
            </div>
        </header>
    )
}