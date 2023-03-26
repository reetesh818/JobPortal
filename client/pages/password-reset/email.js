/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FcManager } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";

const Email = () => {
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
                            Forget password?
                        </h5>
                        <h6 id="emailHelp" className="form-text text-center">
                            Reset password in two quick steps
                        </h6>
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
                                className="form-control ps-5 mb-2"
                                id="input1"
                                required
                                placeholder="Email Address"
                                aria-describedby="emailHelp"
                            />
                            <div id="emailHelp" className="form-text mb-4">
                                We'll email you OTP to reset the password.
                            </div>
                        </div>

                        {/* submit button */}
                        <Link href={"/password-reset/otpvs"}>
                            <button
                                type="submit"
                                className="btn btn-success-theme form-control mb-2  btn-warning fw-bold text-uppercase mb-3"
                            >
                                Reset Password
                            </button>
                        </Link>
                        <span className="text-center d-flex justify-content-center">
                            Return To Login{" "}
                            <Link href="/login" className="ms-2">
                                Login here.{" "}
                            </Link>
                        </span>
                        <br />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Email;
