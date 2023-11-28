const UserSidebar = () => {
    return (
        <>
            <div className="drawer-side shadow-md">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
                    {/* Sidebar content here */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                    <li><a>Sidebar Item 2</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </>
    )
}

export default UserSidebar