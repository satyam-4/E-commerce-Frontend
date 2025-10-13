export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-screen h-screen bg-zinc-200">
            { children }
        </div>
    )
}