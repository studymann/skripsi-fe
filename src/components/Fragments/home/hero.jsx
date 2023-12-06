const Hero = () => {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url("/img/hero.jpg")' }} id="home">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl">
                        <h1 className="mb-1 text-3xl md:text-4xl font-bold shadow-lg">Selamat Datang di Website</h1>
                        <h1 className="mb-5 text-5xl md:text-6xl font-bold">PKBM BELA WARGA</h1>
                        <p className="mb-5 text-xl md:text-2xl italic font-semibold">"Saatnya kembali merajut asa yang tertunda"</p>
                        <button className="btn btn-accent px-7 text-xl">Lihat Selengkapnya</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero