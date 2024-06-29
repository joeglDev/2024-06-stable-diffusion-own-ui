import { PropsWithChildren, createContext, useState } from "react";


interface defaultValueInterface {
    images: string[];
    setImages: (value: string[]) => void;
}

const defaultValue: defaultValueInterface = {
    images: [],
    setImages: () => { },
};

export const AppContext = createContext(defaultValue);

export const AppContextProvider = (props: PropsWithChildren) => {
    const [images, setImages] = useState(defaultValue.images);

    return (
        <AppContext.Provider
            value={{
                images,
                setImages
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};