import { ChangeEventHandler, createRef, FormEventHandler, FunctionComponent, HTMLAttributes, useEffect, useRef } from "react";

const TextArea: FunctionComponent<HTMLAttributes<HTMLTextAreaElement>> = (props) => {

    const textAreaRef = createRef<HTMLTextAreaElement>();

    const resize: FormEventHandler<HTMLTextAreaElement> = (event) => {
        textAreaRef.current?.setAttribute("style", `overflow-y:hidden;`)
        textAreaRef.current!.style.height = textAreaRef.current?.scrollHeight + "px";

        if (textAreaRef.current?.value == "" || textAreaRef.current?.value == null) {
            textAreaRef.current!.style.fontWeight = "bold";
            textAreaRef.current!.style.fontFamily = "Montserrat";
        }

        textAreaRef.current!.style.fontWeight = "regular";
        textAreaRef.current!.style.fontFamily = "Inter";
    }

    return <textarea onInput={resize} {...props} ref={textAreaRef} />
}

export default TextArea;