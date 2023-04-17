/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { FaHandshake } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Register = () => {
    const [password, setPassword] = useState("");
    const [showPassword, setshowPassword] = useState(false);

    const [resumeFile, setResumeFile] = useState(false);

    const [edit, setEdit] = useState(false);

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    return (
        <>
            {" "}
            <Head>
                <title>Register- Job Portal</title>
            </Head>
            {/* {redirectTo ? <Redirect to="/login" /> : <></>} */}
            <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                <div className="d-flex justify-content-center align-items-center">
                    <form className="border border-2 p-4 rounded-4 shadow ">
                        <FaHandshake  
                            className="d-flex mx-auto p-2 pt-0 border"
                            style={{
                                height: "10vw",
                                width: "10vw",
                                borderRadius: "50%",
                                backgroundColor: "#5fd4f6",
                            }}
                        />{" "}
                        <h4 className="my-3 me-2 text-center text-uppercase fw-bold">
                            Create Job
                        </h4>
                        <div className="row mb-3">
                            <div className="col">
                                <div className="">
                                    <label
                                        htmlFor="input_n"
                                        className="form-label"
                                    >
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        ref={inputRef}
                                        name="company-name"
                                        placeholder="Company"
                                        className="form-control"
                                        id="input_n"
                                        aria-describedby=""
                                    />
                                </div>{" "}
                            </div>
                            <div className="col">
                                <div className="">
                                    <label
                                        htmlFor="input_rn"
                                        className="form-label"
                                    >
                                        Company Category
                                    </label>
                                    <input
                                        type="text"
                                        name="company-category"
                                        placeholder="Category"
                                        className="form-control"
                                        id="input_rn"
                                        aria-describedby=""
                                    />
                                </div>{" "}
                            </div>
                            <div className="col">
                                <div className="">
                                    <label
                                        htmlFor="input_location"
                                        className="form-label"
                                    >
                                        Job Location
                                    </label>
                                    <input
                                        type="text"
                                        name="job-location"
                                        placeholder="Location"
                                        className="form-control"
                                        id="input_location"
                                        aria-describedby=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Company Website
                            </label>
                            <input
                                type="url"
                                name="website"
                                className="form-control"
                                id="url"
                                placeholder="Your website URL"
                                aria-describedby=""
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                About Company
                            </label>
                            <textarea
                                type="text"
                                name="about"
                                className="form-control"
                                placeholder="Company Description"
                                rows={5}
                            />
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor="skills" className="form-label">
                                        Desired Skills
                                    </label>
                                    <textarea
                                        type="text"
                                        name="skills"
                                        className="form-control"
                                        placeholder="Skills"
                                        rows={3}
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="">
                                    <label
                                        htmlFor="input_dob"
                                        className="form-label"
                                    >
                                        Apply Last Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        className="form-control"
                                        id="input_Dob"
                                        aria-describedby=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <div className="">
                                    <label
                                        htmlFor="input_program"
                                        className="form-label"
                                    >
                                        Program/Stream
                                    </label>
                                    <input
                                        type="text"
                                        name="program"
                                        placeholder="Program"
                                        className="form-control"
                                        id="input_program"
                                        aria-describedby=""
                                    />
                                </div>{" "}
                            </div>
                            <div className="col">
                                <div className="">
                                    <label
                                        htmlFor="input_b"
                                        className="form-label"
                                    >
                                        Eligible Batch
                                    </label>
                                    <input
                                        type="text"
                                        name="Branch"
                                        placeholder="Branch"
                                        className="form-control"
                                        id="input_b"
                                        aria-describedby=""
                                    />
                                </div>{" "}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <div className="">
                                    <label
                                        htmlFor="input_mn"
                                        className="form-label"
                                    >
                                        Position Offered
                                    </label>
                                    <input
                                        type="text"
                                        name="role"
                                        placeholder="Job role"
                                        className="form-control"
                                        id="input_mn"
                                        aria-describedby=""
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-3">
                                    <label
                                        htmlFor="input_package"
                                        className="form-label"
                                    >
                                        Package Offered
                                    </label>
                                    <input
                                        type="text"
                                        name="package"
                                        placeholder="CTC"
                                        className="form-control"
                                        id="input_package"
                                        aria-describedby=""
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-success-theme form-control  btn-warning fw-bold text-uppercase"
                        >
                            Submit
                        </button>
                        <div className="mt-4">
                            <div className="text-center">
                                If you already have an account
                            </div>
                            <div className="text-center">
                                <Link href="/login">Login here</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
