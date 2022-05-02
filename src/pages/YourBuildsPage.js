import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api, { baseURL } from "../api";

const YourBuildsPage = () => {
    const [loading, setloading] = useState(true);
    const [loadedbuilds, setloadedbuilds] = useState([]);
    useEffect(() => {
        api.get(`${baseURL}custompc/`).then((response) => {
            setloadedbuilds(response.data);
            setloading(false);
        });
        return () => {
            setloadedbuilds([]);
            setloading(true);
        };
    }, []);
    const BuildsRender = loadedbuilds.map((item, index) => {
        let image_url =
            "https://m.media-amazon.com/images/I/71OxPxfeSXL._SL1500_.jpg";
        try {
            if (item.cabinet.cover_image) {
                let newUrl = item.cabinet.cover_image;
                newUrl = newUrl.substring(1);
                image_url = `${baseURL}${newUrl}`;
            }
        } catch (e) {}
        return (
            <div
                key={index}
                className="build-card border py-4 px-2 rounded-md hover:bg-gray-100 duration-300 hover:shadow-lg"
            >
                <Link to={`/build/${item.slug}`}>
                    <div className="image-section px-5 py-4">
                        <img src={image_url} />
                    </div>
                    <div className="text-area">
                        <h5 className="font-bold">{item.name}</h5>
                        <h6 className="font-italic font-light">
                            ₹{item.total_price}
                        </h6>
                    </div>
                    {item.build_status ? (
                        <div className="px-2 mt-4">
                            <button className="bg-green-500 w-full text-center rounded-md  text-white font-medium hover:bg-green-700 duration-300">
                                Checkout
                            </button>
                        </div>
                    ) : (
                        <div className="px-2 mt-4">
                            <button className="bg-orange-500 w-full text-center rounded-md  text-white font-medium hover:bg-orange-700 duration-300">
                                Make Changes
                            </button>
                        </div>
                    )}
                </Link>
            </div>
        );
    });
    if (!loading) {
        return (
            <div>
                <div className="grid md:grid-cols-6 md:mx-6 md:pt-6 md:gap-x-3 md:gap-y-6 grid-cols-2 gap-x-2 gap-y-2 mx-3 my-3 ">
                    {BuildsRender}
                    <div className="build-card border py-4 px-2 rounded-md hover:bg-gray-100 duration-300 hover:shadow-lg ">
                        <Link
                            to="/create-new-build"
                            className="h-full w-full flex justify-center items-center"
                        >
                            <div>
                                <div className="text-8xl font-bold bg-blue-100 rounded-full px-6">
                                    +
                                </div>
                                <h5 className="text-center mt-3 ">
                                    Create New
                                </h5>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    } else {
        return <div>Loading...</div>;
    }
};

export default YourBuildsPage;
