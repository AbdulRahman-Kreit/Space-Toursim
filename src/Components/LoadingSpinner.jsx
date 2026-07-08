
export default function LoadingSpinner() {
    return (
        <div className="flex flex-col items-center justify-center min-h-100 w-full gap-4">
        <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-white/10 border-t-white animate-spin"></div>
            <div className="absolute inset-3 rounded-full bg-white/20 animate-pulse"></div>
        </div>
        <p className="text-white text-sm uppercase tracking-[0.25em] subheading opacity-60 animate-pulse mt-2">
            Loading System...
        </p>
        </div>
    )
}