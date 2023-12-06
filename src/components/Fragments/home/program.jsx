const Program = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col py-20 px-5 lg:px-20 items-center justify-center bg-base-100" id="program">
                <div className="flex flex-col w-full items-center space-y-5">
                    <span className="badge badge-accent p-4 font-bold">PROGRAM</span>
                    <h1 className="text-3xl lg:text-4xl font-bold text-center drop-shadow-lg">Berikut Daftar <span className="text-accent">Program</span></h1>
                </div>
                <div className="flex flex-col w-full lg:flex-row mt-8 gap-3">
                    <div className="card w-full lg:w-1/3 bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:outline hover:outline-2 hover:outline-accent duration-200">
                        <figure className="px-10 pt-10">
                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-bold">PAKET A</h2>
                            <p className="lg:text-sm">Program pendidikan non formal setingkat SD/MI yang diselenggarakan dalam bentuk Kelompok Belajar (KEJAR).</p>
                        </div>
                    </div>
                    <div className="card w-full lg:w-1/3 bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:outline hover:outline-2 hover:outline-accent duration-300">
                        <figure className="px-10 pt-10">
                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-bold">PAKET B</h2>
                            <p className="lg:text-sm">Program pendidikan non formal setingkat SMP/MTs yang diselenggarakan dalam bentuk Kelompok Belajar (KEJAR).</p>
                        </div>
                    </div>
                    <div className="card w-full lg:w-1/3 bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:outline hover:outline-2 hover:outline-accent duration-300">
                        <figure className="px-10 pt-10">
                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-bold">PAKET C</h2>
                            <p className="lg:text-sm">Program pendidikan non formal setingkat SMA/MA yang diselenggarakan dalam bentuk Kelompok Belajar (KEJAR).</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Program