import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";
// import Loader from "../../ui/Loader";

export default function Signup() {
  // const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  //  validation
  let validationSchema = Yup.object({
    firstName: Yup.string()
      .required("First name is required")
      .matches(/^[a-zA-Z]{3,15}[ ]?[a-zA-Z]*$/, "Enter valid name"),
    lastName: Yup.string()
      .required("Last name is required")
      .matches(/^[a-zA-Z]{3,15}[ ]?[a-zA-Z]*$/, "Enter valid name"),
    email: Yup.string()
      .required("Email is required")
      .email("Enter valid email"),
    phone: Yup.string()
      .required("phone Required")
      .matches(/^01[1250][0-9]{8}$/, "Phone not Valid"),
    password: Yup.string()
      .required("Password is required")
      .matches(/^[a-z0-9]{6,16}$/, "Enter Valid Passowrd"),
    rePassword: Yup.string()
      .required("Repassword is required")
      .oneOf([Yup.ref("password")], "Enter matched Password"),
    bio: Yup.string().required("Bio is required"),
    country: Yup.string()
      .required("Country is required")
      .matches(/^[a-zA-Z]{3,15}[ ]?[a-zA-Z]*$/, "Enter valid country"),
    city: Yup.string()
      .required("City is required")
      .matches(/^[a-zA-Z]{3,15}[ ]?[a-zA-Z]*$/, "Enter valid city"),
    postalCode: Yup.string()
      .required("Postal code is required")
      .matches(/^[0-9]{5}$/, "Postal Code not Valid"),
  });
  // formik
  let forms = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
      bio: "",
      country: "",
      city: "",
      postalCode: "",
    },
    onSubmit: sendData,
    validationSchema,
  });
  function sendData(values) {
    localStorage.setItem("firstName", values.firstName.toLowerCase());
    localStorage.setItem("lastName", values.lastName.toLowerCase());
    localStorage.setItem("password", values.password.toLowerCase());
    localStorage.setItem("email", values.email.toLowerCase());
    localStorage.setItem("phone", values.phone);
    localStorage.setItem("bio", values.bio);
    localStorage.setItem("country", values.country.toLowerCase());
    localStorage.setItem("city", values.city.toLowerCase());
    localStorage.setItem("postalCode", values.postalCode);
    // setIsLoading(true);
    setTimeout(() => {
      // setIsLoading(false);
      navigate("/login"); // Navigate to the AppLayout route
    }, 3000);
  }

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <div className="absolute inset-0 flex items-center justify-between bg-white">
      <div className="mx-auto h-full w-[300px] p-4 py-10 md:p-6 lg:mx-auto lg:w-2/5">
        {/* Form */}
        <form onSubmit={forms.handleSubmit}>
          <img className="mb-4 w-[130px]" src="./images/logo.png" alt="Logo" />
          <p className="mb-8 text-2xl font-bold">Sign Up</p>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="mb-3 flex flex-col gap-3">
              <label className="text-sm font-semibold">First Name</label>
              <input
                onBlur={forms.handleBlur}
                onChange={forms.handleChange}
                type="text"
                placeholder="Enter First Name"
                className="input w-full"
                name="firstName"
                id="firstName"
              />
              {forms.touched.firstName ? (
                <p className="text-red-600">{forms.errors.firstName}</p>
              ) : (
                ""
              )}
            </div>

            <div className="mb-3 flex flex-col gap-3">
              <label className="text-sm font-semibold">Last Name</label>
              <input
                onBlur={forms.handleBlur}
                onChange={forms.handleChange}
                type="text"
                placeholder="Enter Last Name"
                className="input w-full"
                name="lastName"
                id="lastName"
              />
              {forms.touched.lastName ? (
                <p className="text-red-600">{forms.errors.lastName}</p>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="mb-3 flex flex-col gap-3">
              <label className="text-sm font-semibold">Email</label>
              <input
                onBlur={forms.handleBlur}
                onChange={forms.handleChange}
                type="email"
                placeholder="Enter email"
                className="input w-full"
                name="email"
                id="email"
              />
              {forms.touched.email ? (
                <p className="text-red-600">{forms.errors.email}</p>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3 flex flex-col gap-3">
              <label className="text-sm font-semibold">Phone Number</label>
              <input
                onBlur={forms.handleBlur}
                onChange={forms.handleChange}
                type="tel"
                placeholder="Enter phone number"
                className="input w-full"
                name="phone"
                id="phone"
              />
              {forms.touched.phone ? (
                <p className="text-red-600">{forms.errors.phone}</p>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="mb-3 flex flex-col gap-3">
              <label className="text-sm font-semibold">Password</label>
              <input
                onBlur={forms.handleBlur}
                onChange={forms.handleChange}
                type="password"
                placeholder="Enter password"
                className="input w-full"
                name="password"
                id="password"
              />
              {forms.touched.password ? (
                <p className="text-red-600">{forms.errors.password}</p>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3 flex flex-col gap-3">
              <label className="text-sm font-semibold">Confirm Password</label>
              <input
                onBlur={forms.handleBlur}
                onChange={forms.handleChange}
                type="password"
                placeholder="Confirm password"
                className="input w-full"
                name="rePassword"
                id="rePassword"
              />
              {forms.touched.rePassword ? (
                <p className="text-red-600">{forms.errors.rePassword}</p>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="mb-3 flex flex-col gap-3">
            <label className="text-sm font-semibold">Bio</label>
            <input
              type="text"
              placeholder="Enter your Bio"
              className="input w-full"
              name="bio"
              id="bio"
            />
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <div className="mb-3 flex flex-col gap-3">
              <label className="text-sm font-semibold">Country</label>
              <input
                onBlur={forms.handleBlur}
                onChange={forms.handleChange}
                type="text"
                placeholder="Enter country"
                className="input w-full"
                name="country"
                id="country"
              />
              {forms.touched.country ? (
                <p className="text-red-600">{forms.errors.country}</p>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3 flex flex-col gap-3">
              <label className="text-sm font-semibold">City/State</label>
              <input
                onBlur={forms.handleBlur}
                onChange={forms.handleChange}
                type="text"
                placeholder="Enter city"
                className="input w-full"
                name="city"
                id="city"
              />
              {forms.touched.city ? (
                <p className="text-red-600">{forms.errors.city}</p>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3 flex flex-col gap-3">
              <label className="text-sm font-semibold">Postal Code</label>
              <input
                onBlur={forms.handleBlur}
                onChange={forms.handleChange}
                type="text"
                placeholder="Enter postal code"
                className="input w-full"
                name="postalCode"
                id="postalCode"
              />
              {forms.touched.postalCode ? (
                <p className="text-red-600">{forms.errors.postalCode}</p>
              ) : (
                ""
              )}
            </div>
          </div>

          <button
            disabled={!(forms.isValid && forms.dirty)}
            type="submit"
            className="mt-5 inline-block w-full cursor-pointer rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold tracking-wide text-stone-100 outline-none transition-colors duration-300 hover:bg-blue-500 focus:bg-blue-500 focus:ring disabled:cursor-not-allowed md:px-6 md:py-3"
          >
            <Link to="/profile">Log in to Taskify</Link>
          </button>
        </form>
        <div className="mt-2">
          <Link to="/login" className="text-sm text-blue-600">
            Already have an account?
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <div className="my-4 flex items-center gap-1">
            <div className="flex-grow border-t border-gray-200"></div>
            <h1 className="my-5 text-center text-stone-400">
              or continue with
            </h1>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>
          <a
            href="#"
            className="flex w-full items-center justify-center space-x-2 rounded-full border border-red-500 px-4 py-2 text-center text-sm font-semibold tracking-wide text-red-700 outline-none transition-colors duration-300 hover:border-transparent hover:bg-red-700 hover:text-white disabled:cursor-not-allowed md:px-6 md:py-3"
          >
            <FontAwesomeIcon icon={faGoogle} />
            <span>Log in with Google</span>
          </a>
          <a
            href="#"
            className="flex w-full items-center justify-center space-x-2 rounded-full border border-stone-300 px-4 py-2 text-center text-sm font-semibold tracking-wide text-stone-800 outline-none transition-colors duration-300 hover:bg-stone-800 hover:text-white disabled:cursor-not-allowed md:px-6 md:py-3"
          >
            <FontAwesomeIcon icon={faApple} style={{ fontSize: "20px" }} />
            <span>Log in with Apple</span>
          </a>
        </div>
      </div>
      {/* CTA */}
      <div className="hidden w-auto items-center justify-center bg-[url('../images/background.png')] bg-cover p-4 lg:flex lg:h-dvh lg:w-3/6 lg:flex-col lg:gap-14 lg:p-5">
        <div className="flex flex-col items-center justify-center gap-5 md:w-2/3">
          <h2 className="mb-4 font-ubuntu text-3xl font-semibold text-blue-500 md:text-5xl">
            Collaborate Seamlessly with Your Team
          </h2>
          <p className="mb-4 text-2xl text-gray-600">
            Whether you’re managing a small team or a large organization, our
            tool is designed to keep everyone on the same page. Set priorities,
            monitor deadlines, and ensure that everyone knows what needs to be
            done.
          </p>
          <button className="rounded-full bg-blue-600 px-7 py-5 text-xl font-semibold text-stone-100 shadow transition duration-300 hover:bg-blue-500">
            Start Collaborating
          </button>
        </div>
      </div>
    </div>
  );
}
