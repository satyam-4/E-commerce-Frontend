"use client";
 
import Link from "next/link";
import { useState } from "react";

export default function RegisterForm() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("fullname:", fullName);
        console.log("email:", email);
        console.log("password:", password);
        console.log("phone:", phone);
        console.log("address:", address);
    }

    return (
        <form 
            onSubmit={handleSubmit}
            className="px-8 py-5 w-1/4 border rounded-md border-zinc-400 flex flex-col justify-center items-start gap-5 bg-white"
        >
            <h1 className="mb-5 text-3xl font-semibold tracking-wide">Hello,</h1>
            <input 
                type="text" 
                placeholder="Full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="border border-zinc-400 p-2 w-full"
            />
            <input 
                type="email" 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-zinc-400 p-2 w-full"
            />
            <input 
                type="password" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-zinc-400 p-2 w-full"
            />
            <input 
                type="tel" 
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border border-zinc-400 p-2 w-full"
            />
            <input 
                type="textarea" 
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border border-zinc-400 p-2 w-full"
            />
            <div className="w-full flex items-center justify-end">
                <button 
                    className="bg-black text-white rounded-md font-semibold px-4 py-2 cursor-pointer"
                    type="submit"
                >
                    Create Account
                </button>
            </div>
            <p className="mt-5 mx-auto text-sm">
                {"Already have an Account?"} <Link href={"/login"}><strong>Login.</strong></Link> 
            </p>
        </form>
    )
}