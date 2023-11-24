/* eslint-disable react/prop-types */
const AuthLayout = (props) => {
    const { title, subTitle, children, width } = props
    return (
        <>
            <div className={`w-full ${width} p-4 bg-white border border-gray-200 rounded-lg drop-shadow-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700`}>
                <form className="" action="#">
                    <div className="mb-6">
                        <h5 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{title}</h5>
                        <h5 className="text-md font-medium text-slate-500">{subTitle}</h5>
                    </div>
                    {children}
                </form>
            </div>
        </>
    )
}

export default AuthLayout