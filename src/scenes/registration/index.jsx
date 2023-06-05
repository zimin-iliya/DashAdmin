import React, { useContext } from "react";
import { Box, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import axios from "axios";
import { UserContext } from "../../authorization/UserContext";

const Registration = () => {
  // const {setUsername,setId} = useContext(UserContext); 
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: "",
  });


  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  async function handleRegister(event) {
    console.log(values);
    event.preventDefault();
    const responce = await axios.post("/register", values);
    console.log(responce);
  }

  function handleChange2(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setValues((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  }
  return (
    <div>
      <form onSubmit={handleRegister}>
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="username"
          onChange={handleChange2}
          value={values.username}
          name="username"
          sx={{ gridColumn: "span 2" }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Email"
          onChange={handleChange2}
          value={values.email}
          name="email"
          sx={{ gridColumn: "span 2" }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="password"
          label="Password"
          onChange={handleChange2}
          value={values.password}
          name="password"
          sx={{ gridColumn: "span 2" }}
        />
        <Button
          variant="contained"
          onClick={handleRegister}
          color="secondary"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Registration;
