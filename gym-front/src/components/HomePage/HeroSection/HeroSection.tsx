export const HeroSection = () => { 
    return (
        <section className="relative font-sans w-full sm:w-screen sm:h-full md:h-screen">
            <img
                src="/images/barra.png"
                alt="hero"
                className="w-screen h-full object-cover blur-sm"
            />
            <div className="absolute w-screen inset-0 flex flex-col justify-center text-white font-bold text-4xl sm:text-2xl space-y-4 px-4 sm:px-1 md:px-2 lg:px-40 ">
                <div className="text-left text-2xl lg:text-4xl">DISCIPLINE</div>
                <div className="text-center text-2xl lg:text-4xl">GROWTH</div>
                <div className="text-right text-2xl lg:text-4xl">POWER</div>
            </div>
        </section>
    );
}
