import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <section id="HomePage">
            <section className="banner md:px-12 px-6 md:py-24 py-12 shadow-lg">
                <div className="grid md:grid-cols-2">
                    <div className="text flex flex-col justify-center order-2 md:order-1 md:pt-0 pt-20">
                        <h1 className="md:text-6xl text-2xl font-bold ">
                            Get your Custom PC with Tech Nation.
                        </h1>
                        <h5 className="text-xl my-3">Configure your pc now.</h5>
                        <div>
                            <Link to="/custompc">
                                <button className="bg-bluecolor px-4 py-3 text-white font-bold rounded hover:bg-hoverbluecolor duration-300">
                                    Create Now
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="image flex flex-col justify-center items-center order-1 md:order-2">
                        <img src="./images/pc1.png" />
                    </div>
                </div>
            </section>

            <section className="gaming-pcs mt-12 md:mx-12 mx-6">
                <h1 className="text-2xl font-bold">Gaming Rigs</h1>
                <div className="rig-cards grid md:grid-cols-6 grid-cols-2 gap-x-4 gap-y-4 my-4">
                    <div className="rig-card border rounded py-3 px-2 hover:bg-gray-100 duration-300 hover:shadow-xl bg-white hover:scale-105">
                        <div>
                            <img src="./images/pc1.png" />
                        </div>
                        <div className="text text-center mt-3">
                            <h2 className="font-bold text-xl">Rig 01</h2>
                            <div className="text-sm">
                                <p>Ryzen 5 3500h</p>
                                <p>Navida 1650</p>
                            </div>
                        </div>
                    </div>

                    <div className="rig-card border rounded py-3 px-2 hover:bg-gray-100 duration-300 hover:shadow-xl bg-white hover:scale-105">
                        <div>
                            <img src="./images/pc1.png" />
                        </div>
                        <div className="text text-center mt-3">
                            <h2 className="font-bold text-xl">Rig 01</h2>
                            <div className="text-sm">
                                <p>Ryzen 5 3500h</p>
                                <p>Navida 1650</p>
                            </div>
                        </div>
                    </div>
                    <div className="rig-card border rounded py-3 px-2 hover:bg-gray-100 duration-300 hover:shadow-xl bg-white hover:scale-105">
                        <div>
                            <img src="./images/pc1.png" />
                        </div>
                        <div className="text text-center mt-3">
                            <h2 className="font-bold text-xl">Rig 01</h2>
                            <div className="text-sm">
                                <p>Ryzen 5 3500h</p>
                                <p>Navida 1650</p>
                            </div>
                        </div>
                    </div>
                    <div className="rig-card border rounded py-3 px-2 hover:bg-gray-100 duration-300 hover:shadow-xl bg-white hover:scale-105">
                        <div>
                            <img src="./images/pc1.png" />
                        </div>
                        <div className="text text-center mt-3">
                            <h2 className="font-bold text-xl">Rig 01</h2>
                            <div className="text-sm">
                                <p>Ryzen 5 3500h</p>
                                <p>Navida 1650</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default HomePage;
