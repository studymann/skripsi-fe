import HomeFooter from "../Fragments/home/footer"
import HomeNavbar from "../Fragments/home/navbar"

const HomeLayout = (props) => {
    const { children } = props
    return (
        <>
            <div className="bg-base-300">
            <HomeNavbar />
            {children}
            <HomeFooter />
            </div>
        </>
    )
}

export default HomeLayout