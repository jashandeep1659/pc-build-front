import React, { useEffect, useState } from "react";
import api, { baseURL } from "../../api";
import { Form, Field } from "react-final-form";
import { useParams } from "react-router-dom";

const SecondaryStorageChoice = (props) => {
    const selectedBuild = props.selectedBuild;
    const currentslug = useParams();
    const [formValueHolder, setformValueHolder] = useState("");
    const [proccesorsList, setproccesorsList] = useState([]);
    useEffect(() => {
        api.get(`${baseURL}secondarystorages/`)
            .then((response) => {
                if (response.status === 200) {
                    setproccesorsList(response.data);
                }
            })
            .catch((error) => {});
        return () => {};
    }, []);

    const OptionRender = proccesorsList.map((item, index) => {
        try {
            if (item.slug == selectedBuild.secondary_Storage.slug) {
                return null;
            }
        } catch (e) {}
        return (
            <option value={item.slug} key={index}>
                {item.name}
            </option>
        );
    });

    const valueUpdater = (value) => {
        const updatedValues = { secondarystorage: value };
        api.patch(`${baseURL}custompc/${currentslug.slug}/`, updatedValues)
            .then((response) => {
                props.PcSpecsUpdate();
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div>
            <div className="text-center">
                <p className="text-gray-500">Please select</p>
                <h1 className="font-bold text-4xl px-3 text-center">
                    Secondary Storage
                </h1>
                <div className="my-8">
                    <form>
                        <select
                            name="processors"
                            className="border w-96 focus:outline-none py-2"
                            onChange={(e) => valueUpdater(e.target.value)}
                        >
                            {selectedBuild &&
                            selectedBuild.secondary_Storage &&
                            selectedBuild.secondary_Storage.name ? (
                                <option
                                    value={selectedBuild.secondary_Storage.slug}
                                >
                                    {selectedBuild.secondary_Storage.name}
                                </option>
                            ) : (
                                <option value="">
                                    Select Secondary Storage
                                </option>
                            )}
                            {OptionRender}
                        </select>
                    </form>
                </div>
                <div className="flex  justify-center mt-8">
                    <button
                        className="cancel mx-3 my-y text-bluecolor w-20 py-1 rounded border-bluecolor border duration-300 hover:border-hoverbluecolor hover:text-hoverbluecolor"
                        onClick={() => props.prev()}
                    >
                        Previous
                    </button>
                    <button
                        type="submit"
                        className="submit mx-3 my-y bg-bluecolor hover:bg-hoverbluecolor duration-300 text-white w-20 py-1 rounded"
                        onClick={() => props.next()}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SecondaryStorageChoice;
