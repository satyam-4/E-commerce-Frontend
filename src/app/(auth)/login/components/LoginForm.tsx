"use client";
 
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    const router = useRouter();

    const handleLoginUser = async () => {
        try {
            setIsLoading(true)
            const res = await axios({
                method: 'post',
                url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/signin`,
                data: {
                    email: email,
                    password: password
                },
                withCredentials: true
            });

            if (res.data.success) {
                toast.success("Login successful", {
                    description: `Welcome back, ${res?.data.data.fullName}`
                });
            }
            return res; 
        } catch (error) {
            console.log(error)
            toast.error("Login failed", {
                description: "Invalid credentials."
            });
        } finally {
            setIsLoading(false);
        }

    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await handleLoginUser()
        if (res?.data.success) {
            router.push("/");
            console.log("res:", res)
        }
    }

    return (
        <form 
            onSubmit={handleSubmit}
            className="px-8 py-5 w-1/4 border rounded-md border-zinc-400 flex flex-col justify-center items-start gap-5 bg-white"
        >
            <h1 className="mb-5 text-3xl font-semibold tracking-wide">Welcome Back,</h1>
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
            <div className="w-full flex items-center justify-end">
                <button 
                type="submit"
                disabled={isLoading}
                className="w-20 h-10 flex items-center justify-center bg-black text-white rounded-md font-semibold cursor-pointer"
                >
                    {
                        isLoading
                        ? (
                            <Spinner />
                        )
                        : (
                            <p>Login</p>
                        )
                    }
                </button>
            </div>
            <p className="mt-5 mx-auto text-sm">
                Don't have an Account? <Link href={"/register"}><strong>Create new Account.</strong></Link> 
            </p>
        </form>
    )
}