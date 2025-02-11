// This is created by Libarray : Formik.
import { Formik, Form, TextField, Field } from "formik";
import { object, string } from "yup";

import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";

const validationSchema = object({
    userName: string("Enter your Username/Email.")
        .required("Email is required.")
        .email("Invalid email format."),
    password: string("Enter your password.")
        .required("Password is required.")
        .min("Password must be at least 5 character."),
});

const LogInForm = () => {
    function handleFromSubmit(values) {
        // Alert the input values of the form that we filled
        alert(values);
        // setTimeout for navigate from login page to home page
        setTimeout((data) => {
            console.log("Form Data", data);
        }, 0);
    }
    return (
        <div className='centerOfScreen' style={{ height: "94vh" }}>
            <Formik
                validationSchema={validationSchema}
                initialValues={{ userName: "", password: "" }}
                onSubmit={(values) => {
                    handleFromSubmit(JSON.stringify(values));
                }}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <div className='container card col col-sm-4 col-md-4 col-lg-4 col-4 col-xl-4'>
                        <h5 className='mt-2 mb-1 ms-1'>Login</h5>
                        <hr />
                        {/* Passing handleSubmit parameter to html form onSubmit property */}
                        <form
                            noValidate
                            onSubmit={handleSubmit}
                            className='conatiner'
                        >
                            <div className='mt-2'>
                                <TextField
                                    label='Email Address'
                                    name='password'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.userName}
                                    placeholder='Enter Email'
                                    className='form-control'
                                />
                                <p className='mt-1' style={{ color: "red" }}>
                                    {errors.userName &&
                                        touched.userName &&
                                        errors.userName}
                                </p>
                            </div>
                            <div className='mt-4'>
                                <TextField
                                    label='Password'
                                    name='password'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder='Enter Password'
                                    className='form-control'
                                />
                                <p className='mt-1' style={{ color: "red" }}>
                                    {errors.password &&
                                        touched.password &&
                                        errors.password}
                                </p>
                            </div>

                            <Button
                                type='submit'
                                fullWidth
                                variant='contained'
                                sx={{ mt: 2, mb: 2 }}
                            >
                                Sign In
                            </Button>
                        </form>
                    </div>
                )}
            </Formik>
        </div>
    );
};

export default LogInForm;
