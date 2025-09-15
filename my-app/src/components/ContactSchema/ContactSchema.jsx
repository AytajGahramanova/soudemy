import * as yup from "yup";

export const ContactSchema = yup.object().shape({
  userName: yup
    .string()
    .min(3, "Minimum 3 hərf daxil etməlisiniz")
    .required("Boş daxil etmək olmaz"),
  lastName: yup
    .string()
    .min(5, "Minimum 5 hərf daxil etməlisiniz")
    .required("Boş daxil etmək olmaz"),
  email: yup
    .string()
    .email("Email strukturu düzgün deyil")
    .required("Boş daxil etmək olmaz"),
  phone: yup
    .string()
    .matches(
      /^\+994\d{9}$/,
      "Telefon nömrəsi +994 ilə başlamalı və 12 rəqəmli olmalıdır"
    )
    .required("Telefon nömrəsi daxil etmək vacibdir"),
});
