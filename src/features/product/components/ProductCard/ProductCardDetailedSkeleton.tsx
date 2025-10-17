import { Skeleton } from "@/components/ui/skeleton";

export default function ProductCardDetailedSkeleton() {
    return (
        <ul className="grow space-y-5">
            {
                Array.from({ length: 20 }).map((_, i) => (
                    <li key={i} className="p-3 border border-zinc-200 shadow-md w-full flex items-center gap-8">
                        <Skeleton className="w-[250px] h-[250px]" />
                        <div className="grow space-y-2 h-[250px]">
                            <Skeleton className="w-3/4 h-[20px]" />
                            <Skeleton className="w-1/2 h-[20px]" />
                            <Skeleton className="w-1/4 h-[20px]" />
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}