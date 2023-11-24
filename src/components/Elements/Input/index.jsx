import Input from "./Input"
import Label from "./Label"

/* eslint-disable react/prop-types */
const InputForm = (props) => {
    const { type, name, placeholder, children } = props
    return (
        <>
            <div className="mb-6">
                <Label htmlFor={name}>{children}</Label>
                <Input type={type} name={name} placeholder={placeholder} />
            </div>
        </>
    )
}

export default InputForm