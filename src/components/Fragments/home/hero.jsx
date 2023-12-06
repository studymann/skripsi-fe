import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url("/img/hero.jpg")' }} id="home">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl">
                        <h1 className="mb-2 text-2xl md:text-4xl font-bold drop-shadow-lg">Selamat Datang di Website</h1>
                        <h1 className="mb-5 text-4xl md:text-6xl font-bold drop-shadow-lg">PKBM BELA WARGA</h1>
                        <p className="mb-5 text-base md:text-2xl italic font-semibold drop-shadow-lg">"Saatnya kembali merajut asa yang tertunda"</p>
                        <a href="#about" className="btn btn-accent px-7 text-base lg:text-xl font-semibold">Lihat Selengkapnya</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero