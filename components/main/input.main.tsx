import { FunctionComponent, HTMLAttributes } from "react";
import TextArea from "../../core/inputs/textarea.core";
import CardFooter from "./input/footer.input";
import CardHeader from "./input/header.input";

const CardMain: FunctionComponent<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div className="absolute w-full h-full flex justify-center items-center">
            <div className="relative lg:w-[55vw] w-[75vw] lg:h-[35vw] md:h-[40vw] h-[60vw] rounded-[2vw] flex flex-col bg-white duration-500">
                <CardHeader />
                <div className="h-4/5 flex justify-center items-center p-6">
                    <TextArea className="w-full text-center lg:text-[1vw] text-[2vw] font-inter outline-0 focus:outline-none resize-none" placeholder="WRITE YOUR ENTRY HERE..." />
                </div>
                <CardFooter />
            </div>
        </div>
    );
}

export default CardMain;