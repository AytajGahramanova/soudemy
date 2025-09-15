import React from "react";
import { TextField, Button, Box } from "@mui/material";
import { useFormik } from "formik";
import { ContactSchema } from "../../components/ContactSchema/ContactSchema";

const Contact = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      userName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    validationSchema: ContactSchema,
    onSubmit: () => {
      resetForm();
    },
  });

  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: 500,
        mx: "auto",
        mt: 4,
      }}
    >
      <form onSubmit={handleSubmit} className="mt-[60px]">
        <TextField
          fullWidth
          margin="normal"
          label="Adınız"
          name="userName"
          value={values.userName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.userName && Boolean(errors.userName)}
          helperText={touched.userName && errors.userName}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Soyadınız"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.lastName && Boolean(errors.lastName)}
          helperText={touched.lastName && errors.lastName}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Telefon"
          placeholder="+994501234567"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.phone && Boolean(errors.phone)}
          helperText={touched.phone && errors.phone}
        />

        <Button
          type="submit"
          variant="contained"
          className="bg-amber-800!"
          fullWidth
          sx={{ mt: 2 }}
        >
          Göndər
        </Button>
      </form>
    </Box>
  );
};

export default Contact;
