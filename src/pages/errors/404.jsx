import { useRouteError } from "react-router-dom"

const NotFoundPage = () => {
    const error = useRouteError()
    return (
        <>
            <div id="error-page" className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 space-y-5">
                <h1 className="font-bold text-4xl">Oops!</h1>
                <p className="font-medium text-xl">Sorry, an unexpected error has occurred.</p>
                <p className="italic text-xl">
                    {error.statusText || error.message}
                </p>
            </div>
        </>
    )
}

export default NotFoundPage