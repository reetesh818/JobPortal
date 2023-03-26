/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { FcManager } from "react-icons/fc";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Password = () => {
    const [password, setPassword] = useState("");
    const [showPassword, setshowPassword] = useState(false);
    return (
        <>
            <Head>
                <title>Forget Password</title>
            </Head>
            <div
            // style={{ height: "80vh" }}
            >
                <div className="d-flex justify-content-center align-items-center mt-5 ">
                    <form
                        className="border border-2 p-4 rounded-4 shadow "
                        style={{ width: "350px" }}
                    >
                        <FcManager
                            className="d-flex mx-auto p-2 pt-0 border"
                            style={{
                                height: "10vw",
                                width: "10vw",
                                borderRadius: "50%",
                                backgroundColor: "#635985",
                            }}
                        />
                        <h5 className="mb-0 fs-5 me-2 text-center mt-3 text-capitalize fw-bold">
                        Choose a new password
                        </h5>
                        {/* email */}
                        <div
                            id="emailHelp"
                            className="form-text mt-2 text-center"
                        >
                            Create a new password that is at least 8 characters
                            long include numbers, letters, and punctuation
                            marks.
                        </div>
                        <div className=" " style={{ height: "10vh" }}>
                            <BsFillPatchCheckFill
                                className="position-relative"
                                style={{
                                    right: "30",
                                    top: "30",
                                    height: "35%",
                                    width: "35%",
                                }}
                            />

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                required
                                minLength={8}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control px-5"
                                placeholder="Password"
                                id="password"
                                aria-describedby=""
                            />
                            {showPassword ? (
                                <AiOutlineEye
                                    onClick={() => setshowPassword(false)}
                                    className="position-relative"
                                    style={{
                                        left: "225",
                                        bottom: "33",
                                        height: "35%",
                                        width: "35%",
                                    }}
                                />
                            ) : (
                                <AiOutlineEyeInvisible
                                    onClick={() => setshowPassword(true)}
                                    className="position-relative"
                                    style={{
                                        left: "225",
                                        bottom: "33",
                                        height: "35%",
                                        width: "35%",
                                    }}
                                />
                            )}
                        </div>
                        <div className=" mb-4"  style={{ height: "10vh" }}>
                            <BsFillPatchCheckFill
                                className="position-relative"
                                style={{
                                    right: "30",
                                    top: "30",
                                    height: "35%",
                                    width: "35%",
                                }}
                            />

                            <input
                                type="repassword"
                                name="repassword"
                                className="form-control ps-5 mb-4"
                                id="repassword"
                                required
                                placeholder="Re-Enter New Password"
                                aria-describedby="emailHelp"
                            />
                        </div>

                        {/* submit button */}
                        <Link href={"/password-reset/otpvs"}>
                            <button
                                type="submit"
                                className="btn btn-success-theme form-control mb-2 btn-warning fw-bold text-uppercase mb-3"
                            >
                                Submit
                            </button>
                        </Link>
                        {/* <span className="text-center d-flex justify-content-center">
                            Return To Login{" "}
                            <Link href="/login" className="ms-2">
                                Login here.{" "}
                            </Link>
                        </span> */}
                        <br />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Password;
