import { Link } from "react-router-dom"

const HomeNavbar = () => {
    return (
        <>
            <div className="fixed z-50 top-0 navbar bg-base-100 shadow-md lg:px-16">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href="#home">Beranda</a></li>
                            <li><a href="#about">Tentang</a></li>
                            <li><a href="#program">Program</a></li>
                            <li><a href="#scholarship">Beasiswa</a></li>
                            <li><a href="#alumni">Alumni</a></li>
                            <li><a href="#gallery">Galeri</a></li>
                            <li><a href="#contact">Kontak</a></li>
                        </ul>
                    </div>
                    <a href="/" className="btn btn-ghost text-xl"><img src="/img/logo.png" className="w-12" alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="#home">Beranda</a></li>
                        <li><a href="#about">Tentang</a></li>
                        <li><a href="#program">Program</a></li>
                        <li><a href="#scholarship">Beasiswa</a></li>
                        <li><a href="#alumni">Alumni</a></li>
                        <li><a href="#gallery">Galeri</a></li>
                        <li><a href="#contact">Kontak</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-1 mr-5">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <Link className="btn btn-accent" to="/login">Login</Link>
                </div>
            </div>
        </>
    )
}

export default HomeNavbar