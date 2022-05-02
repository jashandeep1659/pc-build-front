import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Field, Form } from "react-final-form";
import api from "../api/index";

const SignUpPage = () => {
    const onSubmit = (values) => {
        // console.log(values);
        api.post("user/", values)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Create your account
                        </h2>
                    </div>
                    <Form
                        onSubmit={onSubmit}
                        validate={(values) => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = "Required";
                            }
                            if (!values.password) {
                                errors.password = "Required";
                            }
                            if (!values.full_name) {
                                errors.full_name = "Required";
                            }
                            return errors;
                        }}
                        render={({
                            handleSubmit,
                            form,
                            submitting,
                            pristine,
                            values,
                        }) => (
                            <form className="mt-8 " onSubmit={handleSubmit}>
                                <label className="font-bold">Email: </label>
                                <Field name="email">
                                    {({ input, meta }) => (
                                        <>
                                            <input
                                                {...input}
                                                type="email"
                                                autoComplete="email"
                                                required
                                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                placeholder="Email address"
                                            />
                                            {meta.error && meta.touched ? (
                                                <p className="text-sm text-red-400">
                                                    {meta.error}
                                                </p>
                                            ) : null}
                                        </>
                                    )}
                                </Field>
                                <label className="font-bold mt-3 block">
                                    Full Name:{" "}
                                </label>
                                <Field name="full_name">
                                    {({ input, meta }) => (
                                        <>
                                            <input
                                                type="text"
                                                {...input}
                                                required
                                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                placeholder="John"
                                            />
                                            {meta.error && meta.touched ? (
                                                <p className="text-sm text-red-400">
                                                    {meta.error}
                                                </p>
                                            ) : null}
                                        </>
                                    )}
                                </Field>
                                <label className="font-bold mt-3 block">
                                    Password:{" "}
                                </label>
                                <Field name="password">
                                    {({ input, meta }) => (
                                        <>
                                            <input
                                                type="password"
                                                {...input}
                                                required
                                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                placeholder="Password"
                                            />
                                            {meta.error && meta.touched ? (
                                                <p className="text-sm text-red-400">
                                                    {meta.error}
                                                </p>
                                            ) : null}
                                        </>
                                    )}
                                </Field>
                                <div className="flex items-center justify-between mt-3">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        />
                                        <label
                                            htmlFor="remember-me"
                                            className="ml-2 block text-sm text-gray-900"
                                        >
                                            {" "}
                                            Agree{" "}
                                            <Link
                                                to="/terms-conditions"
                                                className="text-indigo-600 underline"
                                            >
                                                Terms and Conditions
                                            </Link>{" "}
                                        </label>
                                    </div>
                                    <div className="text-sm">
                                        <Link
                                            to="/login"
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                            Already have account?
                                        </Link>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                            <svg
                                                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
