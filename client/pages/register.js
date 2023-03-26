/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { FcManager } from "react-icons/fc";
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
                        <FcManager
                            className="d-flex mx-auto p-2 pt-0 border"
                            style={{
                                height: "10vw",
                                width: "10vw",
                                borderRadius: "50%",
                                backgroundColor: "#18122B",
                            }}
                        />{" "}
                        <h4 className="my-3 me-2 text-center text-uppercase fw-bold">
                            REGISTER
                        </h4>
                        <div className="row mb-3">
                            <div className="col">
                                <div className="">
                                    <label
                                        htmlFor="input_n"
                                        className="form-label"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        ref={inputRef}
                                        name="fullname"
                                        placeholder="What's your name"
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
                                        Roll Number
                                    </label>
                                    <input
                                        type="text"
                                        name="rollnumber"
                                        placeholder="Roll Number"
                                        className="form-control"
                                        id="input_rn"
                                        aria-describedby=""
                                    />
                                </div>{" "}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <div className="">
                                    <label
                                        htmlFor="input_dob"
                                        className="form-label"
                                    >
                                        Date Of Birth
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
                            <div className="col ">
                                <label
                                    // htmlFor="input_"
                                    className="form-label"
                                >
                                    Gender
                                </label>
                                <div className="row">
                                    <div className="form-check col ms-lg-4 ms-3 ">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadio"
                                            id="male"
                                            defaultChecked
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="male"
                                        >
                                            Male
                                        </label>
                                    </div>
                                    <div className="form-check col ms-lg-0 ms-3 ">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadio"
                                            id="female"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="female"
                                        >
                                            Female
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                id="email"
                                placeholder="Tell us your Email Address"
                                aria-describedby=""
                            />
                            <div id="email" className="form-text">
                                We never share your email with anyone else.
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <div className="">
                                    <label
                                        htmlFor="input_c"
                                        className="form-label"
                                    >
                                        Course
                                    </label>
                                    <input
                                        type="text"
                                        name="course"
                                        placeholder="Course"
                                        className="form-control"
                                        id="input_c"
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
                                        Branch
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
                                        Mobile Number
                                    </label>
                                    <input
                                        type="text"
                                        name="mobileNumber"
                                        placeholder="Your Mobile Number"
                                        className="form-control"
                                        id="input_mn"
                                        aria-describedby=""
                                    />
                                </div>
                                <div id="emailHelp" className="form-text">
                                    We never share with anyone else.
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-3">
                                    <label
                                        htmlFor="input_yop"
                                        className="form-label"
                                    >
                                        Year of Passing
                                    </label>
                                    <input
                                        type="text"
                                        name="yourofpassing"
                                        placeholder="Passing Year"
                                        className="form-control"
                                        id="input_yop"
                                        aria-describedby=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="" style={{ height: "90px" }}>
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                required
                                requiredTxt
                                minLength={8}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control pe-5"
                                id="password"
                                placeholder="Create a Password for your account "
                                aria-describedby=""
                            />
                            {showPassword ? (
                                <AiOutlineEye
                                    onClick={() => setshowPassword(false)}
                                    className="position-relative"
                                    style={{
                                        left: "350",
                                        bottom: "33",
                                        height: "30%",
                                        width: "30%",
                                    }}
                                />
                            ) : (
                                <AiOutlineEyeInvisible
                                    onClick={() => setshowPassword(true)}
                                    className="position-relative"
                                    style={{
                                        left: "350",
                                        bottom: "33",
                                        height: "30%",
                                        width: "30%",
                                    }}
                                />
                            )}
                            {/* <div className="d-flex flex-row-reverse">
                                <div
                                    onClick={() =>
                                        setshowPassword(!showPassword)
                                    }
                                    style={{
                                        color: " var(--primary_color)",
                                        cursor: "pointer",
                                    }}
                                >
                                    show
                                </div>
                            </div> */}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Resume
                            </label>
                            <input
                                type="file"
                                onChange={(e) => setResumeFile(e.target.value)}
                                name="resume"
                                className="form-control"
                                id="resume"
                                aria-describedby=""
                            />
                            <div id="resume" className="form-text">
                                {resumeFile}
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
