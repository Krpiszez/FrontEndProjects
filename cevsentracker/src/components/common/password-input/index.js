import React, { useState } from 'react'
import { validCheck } from '../../../utils';
import { Form, InputGroup } from 'react-bootstrap';
import { Visibility, VisibilityOff } from "@mui/icons-material";

const PasswordInput = ({
    formik,
    label,
    name,
    disabled,
    asProp,
    placeholder
}) => {

    const [type, setType] = useState("password");

    const togglePassword = () => {
        const newType = type === "password" ? "text" : "password";
        setType(newType);
    };

    const properties = {
        type,
        disabled,
        placeholder,
        ...formik.getFieldProps(name),
        ...validCheck(name, formik),
    }

    return (
        <Form.Group className='mb-3'>
            <Form.Label>{label}</Form.Label>
            <InputGroup>
                <Form.Control
                    {...properties}
                />
                <InputGroup.Text onClick={togglePassword}>
                    {type === "password" ? <Visibility /> : <VisibilityOff />}
                </InputGroup.Text>
                <Form.Control.Feedback type="invalid">
                    {formik.errors[name]}
                </Form.Control.Feedback>
            </InputGroup>
        </Form.Group>
    )
}

export default PasswordInput