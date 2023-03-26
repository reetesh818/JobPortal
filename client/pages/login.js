/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { FcBusinessman } from "react-icons/fc";
import {
    AiOutlineMail,
    AiOutlineEye,
    AiOutlineEyeInvisible,
} from "react-icons/ai";
import { BiLock } from "react-icons/bi";

const Login = () => {
    const [password, setPassword] = useState("");
    const [showPassword, setshowPassword] = useState(false);
    const [edit, setEdit] = useState(false);

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    return (
        <>
            <Head>
                <title>Login- Job Portal</title>
            </Head>
            <div
            // style={{ height: "80vh" }}
            >
                <div className="d-flex justify-content-center align-items-center mt-5 ">
                    <form className="border border-2 p-4 rounded-4 shadow ">
                        <FcBusinessman
                            className="d-flex mx-auto p-2 pt-0 border"
                            style={{
                                height: "10vw",
                                width: "10vw",
                                borderRadius: "50%",
                                backgroundColor: "#2D2727"
                            }}
                        />
                        <h4 className="mb-0 me-2 text-center mt-3 text-uppercase fw-bold">
                            LOGIN
                        </h4>
                        {/* email */}
                        <div className=" ">
                            <AiOutlineMail
                                className="position-relative"
                                style={{
                                    left: "7",
                                    top: "30",
                                    height: "7%",
                                    width: "7%",
                                }}
                            />

                            <input
                                type="email"
                                name="email"
                                className="form-control-plaintext ps-5 border-bottom inputBox"
                                id="input1"
                                ref={inputRef}
                                required
                                requiredTxt
                                placeholder="Email Address"
                                aria-describedby="emailHelp"
                            />
                            <div id="emailHelp" className="form-text">
                                We never share your email with anyone else.
                            </div>
                        </div>
                        {/* password */}
                        <div className="mb-4">
                            <BiLock
                                className="position-relative"
                                style={{
                                    left: "5",
                                    top: "30",
                                    height: "7.5%",
                                    width: "7.5%",
                                }}
                            />

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                required
                                requiredTxt
                                minLength={8}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control-plaintext px-5  border-bottom inputBox"
                                placeholder="Password"
                                id="password"
                                aria-describedby=""
                            />
                            {showPassword ? (
                                <AiOutlineEye
                                    onClick={() => setshowPassword(false)}
                                    className="position-relative"
                                    style={{
                                        left: "300",
                                        bottom: "32",
                                        height: "7.5%",
                                        width: "7.5%",
                                    }}
                                />
                            ) : (
                                <AiOutlineEyeInvisible
                                    onClick={() => setshowPassword(true)}
                                    className="position-relative"
                                    style={{
                                        left: "300",
                                        bottom: "32",
                                        height: "7.5%",
                                        width: "7.5%",
                                    }}
                                />
                            )}
                        </div>
                        {/* submit button */}
                        <Link href={"/register"}>
                            <button
                                type="submit"
                                className="btn btn-success-theme form-control mb-2  btn-warning fw-bold text-uppercase   mb-3"
                            >
                                Login
                            </button>
                        </Link>
                        <span className="ms-1">
                            Don't have an account?{" "}
                            <Link href="/register">Register here. </Link>
                        </span>
                        <br />
                        <div className="mt-1 mb-1 ms-1">
                            Forgot Password?{" "}
                            <Link
                                href="/password-reset/email"
                                className="for-pass"
                            >
                                Click here
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
