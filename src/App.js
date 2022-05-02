import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CustomPcPage from "./pages/CustomPcPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import TermsAndCondPage from "./pages/TermsAndCondPage";
import { UserLoginChecker } from "./actions";
import { connect } from "react-redux";
import MotherBoardChoice from "./pages/Buildpages/MotherBoardChoice";
import CreateCustomPage from "./pages/CreateCustomPage";
import YourBuildsPage from "./pages/YourBuildsPage";

const App = (props) => {
    const [marginTop, setmarginTop] = useState("0");
    useEffect(() => {
        if (document.querySelector("#Navbar")) {
            setmarginTop(document.querySelector("#Navbar").clientHeight);
        }
    }, []);

    useEffect(() => {
        props.UserLoginChecker();
    }, []);

    return (
        <BrowserRouter>
            <Navbar />
            <div style={{ marginTop: marginTop + "px" }}>
                <Routes>
                    <Route path="/" element={<HomePage />} exact />
                    <Route path="/login" element={<LoginPage />} exact />
                    <Route path="/signup" element={<SignUpPage />} exact />
                    <Route
                        path="/custompc"
                        element={
                            props.userStatus ? (
                                <YourBuildsPage />
                            ) : (
                                <LoginPage />
                            )
                        }
                        exact
                    />
                    <Route
                        path="/build/:slug"
                        element={<CustomPcPage />}
                        exact
                    />
                    <Route
                        path="/create-new-build"
                        element={<CreateCustomPage />}
                        exact
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
};
const mapStateToProps = (state) => {
    return {
        userStatus: state.UserStatusProvider,
    };
};
export default connect(mapStateToProps, { UserLoginChecker })(App);
