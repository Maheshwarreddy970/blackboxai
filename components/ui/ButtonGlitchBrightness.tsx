
export function TextGlitch({ text }: { text: string }) {
    return (
        <div className="relative overflow-hidden">
            <span className="invisible">{text}</span>
            <span className="absolute hover:underline  left-0 top-0 font-semibold transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full">
                {text}
            </span>
        </div>
    );
}
