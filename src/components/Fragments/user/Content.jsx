import UserNavbar from "./Navbar"

const UserContent = (props) => {
    const { children } = props
    return (
        <>
            <div className="drawer-content flex flex-col">
                <UserNavbar />
                {children}
            </div>
        </>
    )
}

export default UserContent