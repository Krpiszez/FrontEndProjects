import React from 'react';
import { validCheck } from '../../../utils';
import { FloatingLabel, Form } from 'react-bootstrap';
import ReactInputMask from 'react-input-mask-next';

const FormTypes = (props) => {
    const {
        formik,
        label,
        name,
        type = "text",
        placeholder,
        disabled = false,
        asGroup,
        asForm,
        mask,
        floating = false,
        itemsArr = []
    } = props;

    const properties = {
        as: asForm === "ReactInputMask" ? ReactInputMask : asForm,
        mask: mask,
        type: type,
        ...formik.getFieldProps(name),
        ...validCheck(name, formik),
        disabled: disabled,
        placeholder: placeholder,
    };

    const propertiesSelect = {
        ...formik.getFieldProps(name),
        ...validCheck(name, formik),
        disabled,
    };
    
    switch (type) {
        case "text":
        case "date":
        case "time":
        case "number":
        case "email":
            return floating ?
                (
                    <FloatingLabel label={label} className='mb-3'>
                        <Form.Control
                            {...properties}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors[name]}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                )
                : (
                    <Form.Group as={asGroup} className='mb-3'>
                        <Form.Label>{label}</Form.Label>
                        <Form.Control
                            {...properties}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors[name]}
                        </Form.Control.Feedback>
                    </Form.Group>
                )
        case "userName":
          return(
            <Form.Group as={asGroup} className='mb-3'>
                <Form.Label>User name</Form.Label>
                <Form.Control
                    {...properties}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.userName}
                </Form.Control.Feedback>
            </Form.Group>
          )
        case "select":
            return (
                <Form.Group as={asGroup} className='mb-3'>
                    <Form.Label>{label}</Form.Label>
                    <Form.Select
                        {...propertiesSelect}
                    >
                        {
                            itemsArr.map((item) => (
                                <option key={item.id} value={item.value}>{item.name}</option>
                            ))
                        }
                    </Form.Select>
                </Form.Group>
            )
        case "checkbox":
            return (
                <Form.Group as={asGroup} className='mb-3'>
                    <Form.Label>{label}</Form.Label>
                    {
                        itemsArr.map((item) => (
                            <Form.Check
                                key={item.id}
                                label={item.name}
                                type='checkbox'
                                name={name}
                                value={item.value}
                                onChange={formik.handleChange}
                                checked={formik.values[name].includes(item.value)}
                                {...validCheck(name, formik)}
                            />
                        ))
                    }
                </Form.Group>
            )
        case "radio":
            return (<>RADIO</>)
        case "textarea":
            return (<>TEXTAREA</>)
        case "file":
            return (<>FILE</>)
        default:
            break;
    }


}

export default FormTypes;