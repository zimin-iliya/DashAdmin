import React from "react";
import { Box, TextField } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from '@mui/material/Button';

const Registration = () => {
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const userSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),
    email: Yup.string().email("Invalid Email").required("Email is Required"),
    password: Yup.string().required("Password is Required"),
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(values);
  }

  return (
    <div>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleFormSubmit,
        }) => (
          <form onSubmit={handleFormSubmit}>
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="First Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName}
              name="firstName"
              error={!!touched.firstName && !!errors.firstName} //give example of what this is doing
              helperText={touched.firstName && errors.firstName}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Last Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
              name="lastName"
              error={!!touched.lastName && !!errors.lastName}
              helperText={touched.lastName && errors.lastName}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={!!touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="password"
              label="Password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              error={!!touched.password && !!errors.password}
              helperText={touched.password && errors.password}
              sx={{ gridColumn: "span 2" }}
            />
            <Button color="secondary">Submit</Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
