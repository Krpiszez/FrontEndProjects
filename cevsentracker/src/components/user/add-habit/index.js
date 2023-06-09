import React, { useState } from 'react'
import { createHabit } from '../../../api';
import { useFormik } from 'formik';
import { habitFormValidationSchema, swalToast } from '../../../utils';
import { Button, Form, Spinner } from 'react-bootstrap';
import { addHabitToUserByHabitName } from '../../../api/user-services';

const AddHabit = () => {
    const [loading, setLoading] = useState(false);

    const onSubmit = async (values) => {
        setLoading(true);
        const dto = {
            name: values.name,
        };
        try {
            await createHabit(dto);
            swalToast("Habit successfully created!", "success");
            formik.resetForm();
        } catch (error) {
            swalToast(error.response.data.message, 'error');
        } finally {
            setLoading(false);
        }
        try {
            await addHabitToUserByHabitName(values.name);
            swalToast("Habit successfully added!", "success");
        } catch (error) {
            swalToast(error.response.data.message, 'error');
        }
    };

    const initialValues = {
        name: "",
    }

    const formik = useFormik({
        initialValues,
        validationSchema: habitFormValidationSchema,
        onSubmit
    })

    return (
        <Form noValidate onSubmit={formik.handleSubmit}>
            <fieldset>
                <Form.Group controlId="name">
                    <Form.Label className="floating">Habit Name</Form.Label>
                        <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter habit name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.touched.name && formik.errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                        {formik.errors.name}
                        </Form.Control.Feedback>
                </Form.Group>
                <Button
                    type='submit'
                    disabled={!(formik.isValid && formik.dirty) || loading}
                    className='mt-3 text-uppercase w-100'
                >
                    {loading && <Spinner animation='border' size='sm' />} Create an Habit
                </Button>
            </fieldset>
        </Form>
    )
}

export default AddHabit