import React, { useState, useEffect } from "react";
import { Field, Form } from "react-final-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import api, { baseURL } from "../api";
const CreateCustomPage = () => {
    const [submitingForm, setsubmitingForm] = useState(false);
    const [formSubmitError, setformSubmitError] = useState(null);
    const navigation = useNavigate();
    const onSubmit = (value) => {
        setsubmitingForm(true);
        setformSubmitError(false);
        api.post(`${baseURL}custompc/`, value)
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    navigation(`/build/${response.data.slug}`);
                }
                setsubmitingForm(false);
            })
            .catch((error) => {
                console.log(error.response.status);
                if (error && error.response && error.response.status === 409) {
                    setformSubmitError("Please Provide unique name");
                }
            });
        setsubmitingForm(false);
    };
    useEffect(() => {
        return () => {
            setsubmitingForm(false);
            setformSubmitError(null);
        };
    }, []);

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
                            Name of Your Beast
                        </h2>
                    </div>
                    <Form
                        onSubmit={onSubmit}
                        validate={(values) => {
                            const errors = {};
                            if (!values.name) {
                                errors.name = "Required";
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
                                <label className="font-bold">
                                    Name:{" "}
                                    <small className="ml-3 font-medium text-red-500">
                                        Name should be unique
                                    </small>
                                </label>
                                <Field name="name">
                                    {({ input, meta }) => (
                                        <>
                                            <input
                                                {...input}
                                                type="text"
                                                autoComplete="text"
                                                required
                                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                placeholder="My Hulk"
                                            />
                                            {meta.error && meta.touched ? (
                                                <p className="text-sm text-red-400">
                                                    {meta.error}
                                                </p>
                                            ) : null}
                                        </>
                                    )}
                                </Field>
                                <p className="text-red-500 font-bold my-2">
                                    {formSubmitError}
                                </p>
                                <div className="mt-8">
                                    {submitingForm ? (
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
                                            <i className=" animate-spin bx bx-loader"></i>
                                        </button>
                                    ) : (
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
                                            Create Build
                                        </button>
                                    )}
                                </div>
                            </form>
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default CreateCustomPage;
