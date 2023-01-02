import { faShare, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FunctionComponent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardFooter: FunctionComponent = () => {
    return (
        // body of footer
        <div className="w-full lg:h-[5vw] h-[7vw] border-t-2 border-secondary rounded-b-[2vw] grid grid-cols-5">
            <div className="col-span-1 flex justify-center items-center">
                <FontAwesomeIcon className="text-[3vw] text-secondary" icon={faShareNodes} />
            </div>

            <div className="col-span-3 flex justify-center items-center">

                <button className="
                lg:rounded-[0.8vw] rounded-[1.6vw] 
                font-montserrat font-bold text-white 
                lg:text-[1.2vw] text-[2.3vw] 
                lg:px-[2.8vw] px-[4vw] 
                lg:py-[0.8vw] py-[1.2vw] 
                bg-gradient-to-r from-[#865B86] via-[#B55DB5] to-[#B55DB5] 
                bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all"> SUBMIT</button>

            </div>

            <div className="col-span-1">

            </div>
        </div>
    )
}

export default CardFooter;