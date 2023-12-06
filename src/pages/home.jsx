import Hero from "../components/Fragments/home/hero"
import SectionHome from "../components/Fragments/home/section"
import HomeLayout from "../components/Layouts/HomeLayout"

import { AcademicCapIcon } from '@heroicons/react/24/outline'

const HomePage = () => {
    return (
        <>
            <HomeLayout>
                <Hero />
                <SectionHome bgColor="bg-base-200" id="about" title="TENTANG" subTitle="Cari Tahu Lebih Lanjut" subTitleSpan="Tentang Kami">
                    <About />
                </SectionHome>
                <SectionHome bgColor="bg-base-100" id="program" title="PROGRAM" subTitle="Berikut Daftar" subTitleSpan="Program Kami">
                    <Program />
                </SectionHome>
                <SectionHome bgColor="bg-base-200" id="scholarship" title="BEASISWA" subTitle="Solusi Sempurna" subTitleSpan="Selesaikan Sekolah">
                    <Scholarship />
                </SectionHome>
            </HomeLayout>
        </>
    )
}

const About = () => {
    return (
        <>
            <div className="flex flex-col w-full lg:flex-row mt-10">
                <div className="basis-1/2 rounded-box place-items-center">
                    <img src="/img/hero.jpg" alt="" className="object-cover" />
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="basis-1/2 rounded-box place-items-center">
                    <div className="flex flex-col">
                        <h1 className="font-bold text-2xl">PKBM BELA WARGA</h1>
                        <p className="text-justify lg:text-base">PKBM Bela Warga adalah lembaga pendidikan nonformal yang berkomitmen untuk merintis perubahan positif dalam masyarakat dengan menggabungkan nilai-nilai pendidikan, etika, dan keterampilan praktis, lembaga ini menghadirkan pendekatan holistik untuk mencapai tujuan.</p>
                        <div className="join join-vertical w-full">
                            <div className="collapse collapse-arrow join-item">
                                <input type="radio" name="my-accordion-1" checked="checked" />
                                <div className="collapse-title text-xl font-bold">
                                    VISI
                                </div>
                                <div className="collapse-content">
                                    <p className="italic text-center">"Terwujudnya masyarakat cendikia, berakhlak mulia, serta cakap berketerampilan"</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item text-justify">
                                <input type="radio" name="my-accordion-1" />
                                <div className="collapse-title text-xl font-bold">
                                    MISI
                                </div>
                                <div className="collapse-content">
                                    <ul className="list-disc list-outside pl-4">
                                        <li>Mewujudkan masyarakat kompetitif melalui layanan Paket A, Paket B, Paket C dan Taman Bacaan masyarakat</li>
                                        <li>Mewujudkan masyarakat yang berakhlak mulia melalui layanan pembimbingan agama, pendidikan karakter, pendidikan keluarga dan bimbingan konseling</li>
                                        <li>Mewujudkan masyarakat yang mampu bersaing dalam dunia kerja dan usaha melalui layanan pendidikan life skill / keterampilan</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item text-justify">
                                <input type="radio" name="my-accordion-1" />
                                <div className="collapse-title text-xl font-bold">
                                    TUJUAN
                                </div>
                                <div className="collapse-content">
                                    <ol className="list-decimal list-outside pl-4">
                                        <li>Mewujudkan masyarakat yang berilmu pengetahuan agar mampu berkompetisi</li>
                                        <li>Mewujudkan masyarakat yang berkepribadian baik / berakhlak mulia</li>
                                        <li>Menjalin kerja sama yang baik dengan orang tua / keluarga agar dapat menemukan solusi dalam pembinaan anak didik / warga belajar melalui pendidikan keluarga</li>
                                        <li>Meningkatkan keterampilan warga belajar dibidan IT untuk dapat diterima di dunia kerja</li>
                                        <li>Meningkatkan keterampilan / life skill masyarakat agar dapat berkreasi, berinovasi dan bersaing dalam dunia usaha</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Program = () => {
    return (
        <>
            <div className="flex flex-col w-full lg:flex-row mt-8 gap-3">
                <div className="card w-full lg:w-1/3 bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:outline hover:outline-2 hover:outline-accent duration-200">
                    <figure className="px-10 pt-10">
                        <div className="mask mask-squircle bg-base-200 hover:bg-accent p-5 transition-all">
                            <AcademicCapIcon className="w-16 h-16" />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">PAKET A</h2>
                        <p className="lg:text-sm">Program pendidikan non formal setingkat SD/MI yang diselenggarakan dalam bentuk Kelompok Belajar (KEJAR).</p>
                    </div>
                </div>
                <div className="card w-full lg:w-1/3 bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:outline hover:outline-2 hover:outline-accent duration-300">
                    <figure className="px-10 pt-10">
                        <div className="mask mask-squircle bg-base-200 hover:bg-accent p-5 transition-all">
                            <AcademicCapIcon className="w-16 h-16" />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">PAKET B</h2>
                        <p className="lg:text-sm">Program pendidikan non formal setingkat SMP/MTs yang diselenggarakan dalam bentuk Kelompok Belajar (KEJAR).</p>
                    </div>
                </div>
                <div className="card w-full lg:w-1/3 bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:outline hover:outline-2 hover:outline-accent duration-300">
                    <figure className="px-10 pt-10">
                        <div className="mask mask-squircle bg-base-200 hover:bg-accent p-5 transition-all">
                            <AcademicCapIcon className="w-16 h-16" />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">PAKET C</h2>
                        <p className="lg:text-sm">Program pendidikan non formal setingkat SMA/MA yang diselenggarakan dalam bentuk Kelompok Belajar (KEJAR).</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const Scholarship = () => {
    return (
        <>
            <div className="flex flex-col w-full lg:flex-row mt-10">
                <div className="basis-1/2 rounded-box place-items-center">
                    <div className="flex flex-col">
                        <div className="join join-vertical w-full">
                            <div className="collapse collapse-arrow join-item">
                                <input type="radio" name="my-accordion-2" checked="checked" />
                                <div className="collapse-title text-xl font-bold">
                                    PERSYARATAN
                                </div>
                                <div className="collapse-content">
                                    <ul className="list-disc list-outside pl-4">
                                        <li>Mewujudkan masyarakat kompetitif melalui layanan Paket A, Paket B, Paket C dan Taman Bacaan masyarakat</li>
                                        <li>Mewujudkan masyarakat yang berakhlak mulia melalui layanan pembimbingan agama, pendidikan karakter, pendidikan keluarga dan bimbingan konseling</li>
                                        <li>Mewujudkan masyarakat yang mampu bersaing dalam dunia kerja dan usaha melalui layanan pendidikan life skill / keterampilan</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item text-justify">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-bold">
                                    KEBUTUHAN PRIBADI YANG HARUS DIPENUHI
                                </div>
                                <div className="collapse-content">
                                    <ul className="list-disc list-outside pl-4">
                                        <li>Mewujudkan masyarakat kompetitif melalui layanan Paket A, Paket B, Paket C dan Taman Bacaan masyarakat</li>
                                        <li>Mewujudkan masyarakat yang berakhlak mulia melalui layanan pembimbingan agama, pendidikan karakter, pendidikan keluarga dan bimbingan konseling</li>
                                        <li>Mewujudkan masyarakat yang mampu bersaing dalam dunia kerja dan usaha melalui layanan pendidikan life skill / keterampilan</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="basis-1/2 rounded-box place-items-center">
                    <img src="/img/logo.png" alt="" className="object-cover object-center mx-auto" />
                </div>
            </div>
        </>
    )
}

export default HomePage