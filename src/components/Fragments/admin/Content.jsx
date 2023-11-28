import AdminNavbar from "./Navbar"

const AdminContent = (props) => {
    const { children } = props
    return (
        <>
            <div className="drawer-content flex flex-col">
                <AdminNavbar />
                {children}
            </div>
        </>
    )
}

export default AdminContent