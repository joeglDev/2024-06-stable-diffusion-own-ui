import { useContext, useState } from "react";
import { FlexColumnContainer, PromptInput } from "./user-input.style";
import { generateTxt2Img } from "@/api/controllers";
import { AppContext } from "@/context/AppContext";

export const UserInputForm = () => {
    const [prompPositive, setPromptPositive] = useState("");
    const { setImages } = useContext(AppContext);

    const onSubmit = async () => {
        const image = await generateTxt2Img(prompPositive, 5)
        if (image) {
            setImages(image.images)
        }
    };

    //buttons container

    return (
        <>
            <FlexColumnContainer>
                <h2>{"Input"}</h2>
                <PromptInput onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPromptPositive(e.target.value)} />
                <button onClick={() => onSubmit()}>Submit</button>
            </FlexColumnContainer>
        </>
    );
};