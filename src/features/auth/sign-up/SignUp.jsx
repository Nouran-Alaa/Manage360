import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Loader from '../../../ui/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';


// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      // Simulate a signup request
      setTimeout(() => {
        setIsLoading(false);
        navigate('/dashboard');
      }, 3000);
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex h-screen bg-white justify-center">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
        <div className="mx-auto w-[400px] p-4">
          {/* Form */}
          <form onSubmit={formik.handleSubmit}>
            <img className="mb-4 w-[130px]" src="/Asset7.png" alt="Logo" />
            <p className="mb-8 text-2xl font-bold">Create a new account</p>
            <div className="mb-3 flex flex-col gap-3">
              <label className="text-sm font-semibold">Email</label>
              <input
                className="text-sm w-full outline-none border-blue-500 border h-9 px-2 rounded-md focus:border-blue-800"
                type="email"
                placeholder="Email@company.com"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div className="mb-3 flex flex-col gap-3">
              <label className="text-sm font-semibold">Username</label>
              <input
                className="text-sm w-full outline-none border-blue-500 border h-9 px-2 rounded-md focus:border-blue-800"
                type="text"
                placeholder="Username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.username}
                </div>
              ) : null}
            </div>
            <div className="mb-3 flex flex-col gap-3">
              <label className="text-sm font-semibold">Password</label>
              <input
                className="text-sm w-full outline-none border-blue-500 border h-9 px-2 rounded-md focus:border-blue-800"
                type="password"
                placeholder="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
            <button
              type="submit"
              className="mt-5 inline-block w-full rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold tracking-wide text-stone-100 outline-none transition-colors duration-300 hover:bg-blue-500 focus:bg-blue-500 focus:ring disabled:cursor-not-allowed md:px-6 md:py-3"
            >
              Sign up for Manage360
            </button>
          </form>
          <div className="mt-2">
            <Link to="/sign-in" className="text-sm text-blue-600">
              Already have an account? Log in
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className="my-4 flex items-center gap-1">
              <div className="flex-grow border-t border-gray-200"></div>
              <h1 className="my-5 text-center text-stone-400">
                or sign up with
              </h1>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>
            <button
              onClick={() => alert('Sign up with Google')}
              className="flex w-full items-center justify-center space-x-2 rounded-md border border-blue-600 px-4 py-2 text-center text-sm font-semibold tracking-wide text-blue-600 outline-none transition-colors duration-300 disabled:cursor-not-allowed md:px-6 md:py-3"
            >
              <FontAwesomeIcon icon={faGoogle} />
              <span>Sign up with Google</span>
            </button>
            <button
              onClick={() => alert('Sign up with Apple')}
              className="flex w-full items-center justify-center space-x-2 rounded-md border border-stone-300 px-4 py-2 text-center text-sm font-semibold tracking-wide text-stone-800 outline-none transition-colors duration-300 disabled:cursor-not-allowed md:px-6 md:py-3"
            >
              <FontAwesomeIcon icon={faApple} style={{ fontSize: '20px' }} />
              <span>Sign up with Apple</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className="hidden lg:flex lg:h-screen lg:flex-col lg:w-1/2 bg-cover"
        style={{
          backgroundImage: "url('/Asset6.png')",
          backgroundSize: '65%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
    </div>
  );
}

export default SignUp;
