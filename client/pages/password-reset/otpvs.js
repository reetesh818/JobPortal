/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FcManager } from "react-icons/fc";
import { BsCheck2Circle } from "react-icons/bs";

const Otpv = () => {
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
                            className="d-flex mx-auto p-2 pt-0  border"
                            style={{
                                height: "10vw",
                                width: "10vw",
                                borderRadius: "50%",
                                backgroundColor: "#635985",
                            }}
                        />
                        <h5
                            htmlFor="otpv"
                            style={{ height: "0px" }}
                            className="mb-0 me-2 text-black text-center mt-3 mb-4 fs-5 text-uppercase fw-bold"
                        >
                            OTP
                        </h5>
                        <h6
                            id="emailHelp"
                            className="form-text text-center mb-0"
                        >
                            Enter the 6-digit verification code
                        </h6>
                        {/* email */}
                        <div className=" ">
                            <BsCheck2Circle
                                className="position-relative"
                                style={{
                                    left: "7",
                                    top: "30",
                                    height: "8%",
                                    width: "8%",
                                }}
                            />

                            <input
                                type="text"
                                name="otpv"
                                className="form-control ps-5"
                                id="otpv"
                                required
                                requiredTxt
                                placeholder="Enter OTP"
                                aria-describedby=""
                            />
                        </div>
                        <div id="emailHelp" className="form-text ms-1">
                            <Link
                                href="/"
                                className="text-decoration-none text-black"
                            >
                                Didn't receive a code?
                            </Link>
                        </div>

                        {/* submit button */}
                        <Link href={"/password-reset/password"}>
                            <button
                                type="submit"
                                className="btn btn-success-theme form-control  mt-3  btn-warning fw-bold text-uppercase mb-3"
                            >
                                Verify OTP
                            </button>
                        </Link>
                        <div id="emailHelp" className="form-text mb-4">
                            If you don't see the email in your inbox, check your
                            spam folder.
                        </div>
                        <span className=" d-flex justify-content-center">
                            Return To Login{" "}
                            <Link className="ms-2" href="/login">
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

export default Otpv;
