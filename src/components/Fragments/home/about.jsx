const About = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col py-20 px-5 lg:px-20 items-center justify-center bg-base-200" id="about">
                <div className="flex flex-col w-full items-center space-y-5">
                    <span className="badge badge-accent p-4 font-bold">TENTANG</span>
                    <h1 className="text-3xl lg:text-4xl font-bold text-center drop-shadow-lg">Cari Tahu Lebih Lanjut <span className="text-accent">Tentang Kami</span></h1>
                </div>
                <div className="flex flex-col w-full lg:flex-row mt-10">
                    <div className="basis-1/2 rounded-box place-items-center">
                        <img src="/img/hero.jpg" alt="" className="object-cover" />
                    </div>
                    <div className="divider lg:divider-horizontal"></div>
                    <div className="basis-1/2 rounded-box place-items-center">
                        <div className="flex flex-col space-y-5">
                            <h1 className="font-bold text-2xl">PKBM BELA WARGA</h1>
                            <p className="text-justify lg:text-base">PKBM Bela Warga adalah lembaga pendidikan nonformal yang berkomitmen untuk merintis perubahan positif dalam masyarakat melalui visi <i>"Terwujudnya masyarakat cendikia, berakhlak mulia, serta cakap berketerampilan"</i>. Dengan menggabungkan nilai-nilai pendidikan, etika, dan keterampilan praktis, lembaga ini menghadirkan pendekatan holistik untuk mencapai tujuan visinya...</p>
                            <button className="btn btn-accent font-semibold w-1/2 lg:w-1/3">Baca Selengkapnya</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About