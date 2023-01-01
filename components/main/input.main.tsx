import { FunctionComponent, HTMLAttributes } from "react";
import CardFooter from "./input/footer.input";
import CardHeader from "./input/header.input";

const CardMain: FunctionComponent<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div className="absolute w-full h-full flex justify-center items-center">
            <div className="relative lg:w-[55vw] w-[75vw] lg:h-[35vw] h-[60vw] rounded-[2vw] flex flex-col bg-white">
                <CardHeader />
                <div className="h-4/5 flex justify-center items-center p-6">
                    <textarea className="w-full h-full text-center lg:text-[1vw] text-[2vw]" placeholder="WRITE YOUR ENTRY HERE..." />
                </div>
                <CardFooter />
            </div>
        </div>
    );
}

export default CardMain;