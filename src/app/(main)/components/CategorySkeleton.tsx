import { Skeleton } from "@/components/ui/skeleton";

export default function CategorySkeleton() {
    return (
        <div className="px-5 my-4 grid justify-items-center grid-cols-8 gap-5">
            {
                Array.from({ length: 8 }).map((_, i) => (
                    <Skeleton key={i} className="w-[180px] h-[180px] rounded-xl" />
                ))
            }
        </div>
    );
}