import AdminContent from "../Fragments/admin/Content"
import AdminSidebar from "../Fragments/admin/Sidebar"

const AdminLayout = (props) => {
    const { children } = props
    return (
        <>
            <div className="bg-base-200">
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <AdminContent>{children}</AdminContent>
                    <AdminSidebar />
                </div>
            </div>
        </>
    )
}

export default AdminLayout