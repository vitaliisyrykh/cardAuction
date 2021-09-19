import {Field, ErrorMessage} from "formik";


const FormInput = fieldProps => {

    const {name, type, ...rest} = fieldProps;

    return (

        <label>
            <span>{name}</span>
            <Field name={name}>
                {({field}) => {
                    return (
                        <input type={type} {...field} {...rest}/>
                    )
                }
                }

            </Field>
            <ErrorMessage name={name} component="span"/>
        </label>

    )
}
export default FormInput;