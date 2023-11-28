import UserContent from "../Fragments/user/Content"
import UserSidebar from "../Fragments/user/Sidebar"

const UserLayout = (props) => {
    const { children } = props
    return (
        <>
            <div className="bg-base-200">
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <UserContent>{children}</UserContent>
                    <UserSidebar />
                </div>
            </div>
        </>
    )
}

export default UserLayout