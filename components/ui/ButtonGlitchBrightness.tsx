import { cn } from "@/lib/utils";

export function TextGlitch({ text }: { text: string }) {
    return (
        <div className="relative overflow-hidden">
            <span className="invisible">{text}</span>
            <span className="absolute left-0 top-0 font-semibold transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full">
                {text}
            </span>
            <span className="absolute left-0 top-0 translate-y-full font-semibold transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0">
                {text}
            </span>
        </div>
    );
}

export function Brightness({ className}: { className?: string }) {
    return (
        <div className="absolute inset-0 flex h-full w-full animate-brightness justify-center">
            <div className={cn("relative h-full w-8 blur", className)} />
        </div>
    );
}