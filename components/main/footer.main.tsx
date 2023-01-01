import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FunctionComponent } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const MainFooter: FunctionComponent = () => {
    return (
        <>
            <div className="border-t-2 border-white w-full h-full grid grid-cols-2 flex px-6 py-2">
                <section className="col-span-1 h-full py-2 text-white">
                    <div className="col-span-1 grid lg:grid-cols-2 md:grid-cols-2 grid-rows-3 gap-1 h-full w-full">
                        <div className="lg:col-span-1 md:col-span-1 row-span-1 flex flex-row items-center gap-4">
                            <FontAwesomeIcon icon={faFacebook} />
                            <span className="font-bold text-sm">officialumakpss</span>
                        </div>

                        <div className="lg:col-span-1 md:col-span-1 row-span-1 flex flex-row items-center gap-4">
                            <FontAwesomeIcon icon={faInstagram} />
                            <span className="font-bold text-sm">@cgpp_pssofficial</span>
                        </div>

                        <div className="lg:col-span-1 md:col-span-1 row-span-1 flex flex-row items-center gap-4">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span className="font-bold text-sm">umakpssofficial@gmail.com</span>
                        </div>
                    </div>

                </section>

                <section className="col-span-1 text-white w-full flex justify-end">
                    <div className="flex flex-col items-end justify-center">
                        {/* Title */}
                        <div className="flex flex-col font-montserrat items-center">
                            
                        </div>

                        <div className="">

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default MainFooter;