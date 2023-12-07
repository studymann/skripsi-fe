/* eslint-disable react/prop-types */
const SectionHome = (props) => {
    const { id, bgColor, title, subTitle, subTitleSpan, children } = props
    return (
        <>
            <div className={`min-h-screen flex flex-col py-20 px-5 lg:px-20 items-center justify-center ${bgColor}`} id={id}>
                <div className="flex flex-col w-full items-center space-y-2">
                    <span className="badge badge-accent p-4 font-bold">{title}</span>
                    <h1 className="text-3xl lg:text-4xl font-bold text-center drop-shadow-lg">{subTitle} <span className="text-accent">{subTitleSpan}</span></h1>
                </div>
                {children}
            </div>
        </>
    )
}

export default SectionHome