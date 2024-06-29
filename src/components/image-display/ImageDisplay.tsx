import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import { ImageContainer } from "./image-display.style";

export const ImageDisplay = () => {
    const { images } = useContext(AppContext);

    return (
        <>
            <ImageContainer>
                {
                    images.length > 0 ? <img src={'data:image/png;base64,' + images[0]} />
                        : null
                }
            </ImageContainer>
        </>
    );
};