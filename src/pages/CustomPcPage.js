import React, { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { Steps, useSteps, StepsProvider } from "react-step-builder";
import MotherBoardChoice from "./Buildpages/MotherBoardChoice";
import ProcessorChoice from "./Buildpages/ProcessorChoice";
import api, { baseURL } from "../api/";
import { useParams } from "react-router-dom";
import GraphicCardChoice from "./Buildpages/GraphicCardChoice";
import RamChoice from "./Buildpages/RamChoice";
import PrimaryStorageChoice from "./Buildpages/PrimaryStorageChoice";
import SecondaryStorageChoice from "./Buildpages/SecondaryStorageChoice";
import PowerSupplyChoice from "./Buildpages/PowerSupplyChoice";
import CabinetChoice from "./Buildpages/CabinetChoice";

const CustomPcPage = (props) => {
    const slug = useParams();
    const [itemvalue, setitemvalue] = useState(null);
    const [selectedBuild, setselectedBuild] = useState(null);
    const [loading, setloading] = useState(true);
    const formValueFixer = (e) => {
        setitemvalue(e.target.value);
    };

    const PcSpecsUpdate = () => {
        api.get(`${baseURL}custompc/${slug.slug}`)
            .then((response) => {
                console.log(response.data);
                setselectedBuild(response.data);
                setloading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        PcSpecsUpdate();
        return () => {};
    }, []);

    if (loading) {
        return <div>loading...</div>;
    } else {
        return (
            <section id="CustomPcPage">
                <div className="grid md:grid-cols-4 ">
                    <div className="components-list border-r ">
                        <h1 className="font-bold text-xl px-3 text-center py-6 border-b">
                            Your Build Specs
                        </h1>
                        <div className="componentsdetails h-96 overflow-y-scroll">
                            <div className="component border-b  px-3 flex items-center py-3 ">
                                <div className="component-icon px-3">
                                    <i className="bx bx-chip"></i>
                                </div>
                                <div className="text-detail">
                                    <h4 className="font-bold ">Processor</h4>
                                    <h5 className="">
                                        {selectedBuild &&
                                        selectedBuild.processor &&
                                        selectedBuild.processor.name
                                            ? selectedBuild.processor.name
                                            : "Not Specified"}
                                    </h5>
                                    <p className="text-sm text-gray-500">
                                        {" "}
                                        {selectedBuild &&
                                        selectedBuild.processor &&
                                        selectedBuild.processor.name
                                            ? `₹${selectedBuild.processor.price}`
                                            : "₹0"}
                                    </p>
                                </div>
                            </div>
                            <div className="component border-b  px-3 flex items-center py-3">
                                <div className="component-icon px-3">
                                    <i className="bx bx-chip"></i>
                                </div>
                                <div className="text-detail">
                                    <h4 className="font-bold ">Motherboard</h4>
                                    <h5 className="">
                                        {" "}
                                        {selectedBuild &&
                                        selectedBuild.motherBoard &&
                                        selectedBuild.motherBoard.name
                                            ? selectedBuild.motherBoard.name
                                            : "Not Specified"}
                                    </h5>
                                    <p className="text-sm text-gray-500">
                                        {" "}
                                        {selectedBuild &&
                                        selectedBuild.motherBoard &&
                                        selectedBuild.motherBoard.name
                                            ? `₹${selectedBuild.motherBoard.price}`
                                            : "Not Specified"}
                                    </p>
                                </div>
                            </div>
                            <div className="component border-b  px-3 flex items-center py-3">
                                <div className="component-icon px-3">
                                    <i className="bx bx-chip"></i>
                                </div>
                                <div className="text-detail">
                                    <h4 className="font-bold ">Graphic Card</h4>
                                    <h5 className="">
                                        {" "}
                                        {selectedBuild &&
                                        selectedBuild.graphic_Card &&
                                        selectedBuild.graphic_Card.name
                                            ? selectedBuild.graphic_Card.name
                                            : "Not Specified"}
                                    </h5>
                                    <p className="text-sm text-gray-500">
                                        {selectedBuild &&
                                        selectedBuild.graphic_Card &&
                                        selectedBuild.graphic_Card.name
                                            ? `₹${selectedBuild.graphic_Card.price}`
                                            : "₹0"}
                                    </p>
                                </div>
                            </div>

                            <div className="component border-b  px-3 flex items-center py-3">
                                <div className="component-icon px-3">
                                    <i className="bx bx-chip"></i>
                                </div>
                                <div className="text-detail">
                                    <h4 className="font-bold ">Ram</h4>
                                    <h5 className="">
                                        {" "}
                                        {selectedBuild &&
                                        selectedBuild.ram &&
                                        selectedBuild.ram.name
                                            ? selectedBuild.ram.name
                                            : "Not Specified"}
                                    </h5>
                                    <p className="text-sm text-gray-500">
                                        {selectedBuild &&
                                        selectedBuild.ram &&
                                        selectedBuild.ram.name
                                            ? `₹${selectedBuild.ram.price}`
                                            : "₹0"}
                                    </p>
                                </div>
                            </div>
                            <div className="component border-b  px-3 flex items-center py-3">
                                <div className="component-icon px-3">
                                    <i className="bx bx-chip"></i>
                                </div>
                                <div className="text-detail">
                                    <h4 className="font-bold ">
                                        Primary Storage
                                    </h4>
                                    <h5 className="">
                                        {" "}
                                        {selectedBuild &&
                                        selectedBuild.primary_Storage &&
                                        selectedBuild.primary_Storage.name
                                            ? selectedBuild.primary_Storage.name
                                            : "Not Specified"}
                                    </h5>
                                    <p className="text-sm text-gray-500">
                                        {selectedBuild &&
                                        selectedBuild.primary_Storage &&
                                        selectedBuild.primary_Storage.name
                                            ? `₹${selectedBuild.primary_Storage.price}`
                                            : "₹0"}
                                    </p>
                                </div>
                            </div>
                            <div className="component border-b  px-3 flex items-center py-3">
                                <div className="component-icon px-3">
                                    <i className="bx bx-chip"></i>
                                </div>
                                <div className="text-detail">
                                    <h4 className="font-bold ">
                                        Secondary Storage
                                    </h4>
                                    <h5 className="">
                                        {" "}
                                        {selectedBuild &&
                                        selectedBuild.secondary_Storage &&
                                        selectedBuild.secondary_Storage.name
                                            ? selectedBuild.secondary_Storage
                                                  .name
                                            : "Not Specified"}
                                    </h5>
                                    <p className="text-sm text-gray-500">
                                        {selectedBuild &&
                                        selectedBuild.secondary_Storage &&
                                        selectedBuild.secondary_Storage.name
                                            ? `₹${selectedBuild.secondary_Storage.price}`
                                            : "₹0"}
                                    </p>
                                </div>
                            </div>
                            <div className="component border-b  px-3 flex items-center py-3">
                                <div className="component-icon px-3">
                                    <i className="bx bx-chip"></i>
                                </div>
                                <div className="text-detail">
                                    <h4 className="font-bold ">Power Supply</h4>
                                    <h5 className="">
                                        {" "}
                                        {selectedBuild &&
                                        selectedBuild.power_Supply &&
                                        selectedBuild.power_Supply.name
                                            ? selectedBuild.power_Supply.name
                                            : "Not Specified"}
                                    </h5>
                                    <p className="text-sm text-gray-500">
                                        {selectedBuild &&
                                        selectedBuild.power_Supply &&
                                        selectedBuild.power_Supply.name
                                            ? `₹${selectedBuild.power_Supply.price}`
                                            : "₹0"}
                                    </p>
                                </div>
                            </div>

                            <div className="component border-b  px-3 flex items-center py-3">
                                <div className="component-icon px-3">
                                    <i className="bx bx-chip"></i>
                                </div>
                                <div className="text-detail">
                                    <h4 className="font-bold ">Cabinet</h4>
                                    <h5 className="">
                                        {" "}
                                        {selectedBuild &&
                                        selectedBuild.cabinet &&
                                        selectedBuild.cabinet.name
                                            ? selectedBuild.cabinet.name
                                            : "Not Specified"}
                                    </h5>
                                    <p className="text-sm text-gray-500">
                                        {selectedBuild &&
                                        selectedBuild.cabinet &&
                                        selectedBuild.cabinet.name
                                            ? `₹${selectedBuild.cabinet.price}`
                                            : "₹0"}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h1 className="font-bold text-lg py-4 text-right px-5">
                            Total:
                            {selectedBuild.total_price
                                ? selectedBuild.total_price
                                : 0}
                        </h1>
                        <div className="w-full px-4">
                            {selectedBuild.build_status}
                            {selectedBuild.build_status ? (
                                <button
                                    className="final_rig bg-orange-500 text-white font-bold w-full rounded-md py-2 hover:bg-orange-700 duration-300"
                                    onClick={() =>
                                        console.log(selectedBuild.build_status)
                                    }
                                >
                                    Submit for Review
                                </button>
                            ) : (
                                <p className="text-center text-sm">
                                    Complete your Build
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="componenets  col-span-3">
                        <h1 className="font-bold text-xl px-3 py-6 text-center border-b ">
                            Select Your Components
                        </h1>
                        <div className="detail-component flex items-center h-full justify-center ">
                            <StepsProvider>
                                <StepWiseRender
                                    PcSpecsUpdate={PcSpecsUpdate}
                                    selectedBuild={selectedBuild}
                                />
                            </StepsProvider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

const StepWiseRender = ({ PcSpecsUpdate, selectedBuild }) => {
    const { next, prev } = useSteps();

    return (
        <Steps>
            <ProcessorChoice
                next={next}
                prev={prev}
                PcSpecsUpdate={PcSpecsUpdate}
                selectedBuild={selectedBuild}
            />
            <MotherBoardChoice
                next={next}
                prev={prev}
                PcSpecsUpdate={PcSpecsUpdate}
                selectedBuild={selectedBuild}
            />
            <GraphicCardChoice
                next={next}
                prev={prev}
                PcSpecsUpdate={PcSpecsUpdate}
                selectedBuild={selectedBuild}
            />
            <RamChoice
                next={next}
                prev={prev}
                PcSpecsUpdate={PcSpecsUpdate}
                selectedBuild={selectedBuild}
            />
            <PrimaryStorageChoice
                next={next}
                prev={prev}
                PcSpecsUpdate={PcSpecsUpdate}
                selectedBuild={selectedBuild}
            />
            <SecondaryStorageChoice
                next={next}
                prev={prev}
                PcSpecsUpdate={PcSpecsUpdate}
                selectedBuild={selectedBuild}
            />
            <PowerSupplyChoice
                next={next}
                prev={prev}
                PcSpecsUpdate={PcSpecsUpdate}
                selectedBuild={selectedBuild}
            />
            <CabinetChoice
                next={next}
                prev={prev}
                PcSpecsUpdate={PcSpecsUpdate}
                selectedBuild={selectedBuild}
            />
        </Steps>
    );
};

export default CustomPcPage;
