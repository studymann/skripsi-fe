/* eslint-disable react/prop-types */
const Input = (props) => {
    const { type, name, placeholder } = props
    return (
        <>
            <input type={type} name={name} id={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg placeholder:opacity-70 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={placeholder} required />
        </>
    )
}

export default Input