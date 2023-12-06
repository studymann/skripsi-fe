import About from "../components/Fragments/home/about"
import Hero from "../components/Fragments/home/hero"
import Program from "../components/Fragments/home/program"
import HomeLayout from "../components/Layouts/HomeLayout"

const HomePage = () => {
    return (
        <>
            <HomeLayout>
                <Hero />
                <About />
                <Program />
            </HomeLayout>
        </>
    )
}

export default HomePage