import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { UserLoginChecker } from "../actions";

const Navbar = (props) => {
    const UserActionButton = () => {
        if (window.location.pathname === "/login") {
            return (
                <Link to="/signup">
                    <button className="bg-bluecolor px-2 py-1 rounded text-white hover:bg-hoverbluecolor duration-300">
                        Sign Up
                    </button>
                </Link>
            );
        } else {
            return (
                <Link to="/login">
                    <button className="bg-bluecolor px-2 py-1 rounded text-white hover:bg-hoverbluecolor duration-300">
                        Login
                    </button>
                </Link>
            );
        }
    };
    const LogoutUser = () => {
        localStorage.removeItem("token");
        props.UserLoginChecker();
    };
    useEffect(() => {
        // UserActionButton();
    }, [useLocation()]);

    return (
        <section id="Navbar">
            <div className="pc-nav border-b">
                <div className="logo">
                    <Link to="/">My Builds</Link>
                </div>
                <div className="urls">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/custompc">Custom Build</Link>
                        </li>
                        <li>
                            <Link to="/custompc">Gaming PCs</Link>
                        </li>
                        <li>
                            <a href="#">Workstations</a>
                        </li>
                        <li>
                            <a href="#">Parts</a>
                        </li>
                        {!props.userStatus ? (
                            <li>
                                <UserActionButton />{" "}
                            </li>
                        ) : (
                            <li>
                                <button
                                    className="bg-bluecolor px-2 py-1 rounded text-white hover:bg-hoverbluecolor duration-300 mx-3"
                                    onClick={() => LogoutUser()}
                                >
                                    Logout
                                </button>
                            </li>
                        )}
                    </ul>
                    <div className="cart">
                        <i className="bx bx-cart"></i>
                    </div>
                </div>
            </div>
        </section>
    );
};
const mapStateToProps = (state) => {
    return {
        userStatus: state.UserStatusProvider,
    };
};

export default connect(mapStateToProps, { UserLoginChecker })(Navbar);
