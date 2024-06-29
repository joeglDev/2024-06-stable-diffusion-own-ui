import { Txt2ImgResponse } from "./api.interfaces";

const BASE_URL = "http://127.0.0.1:7860";


export const postTxt2Img = async (requestBody: string): Promise<Txt2ImgResponse | undefined> => {
    try {
        const response = await fetch(`${BASE_URL}/sdapi/v1/txt2img`, {
            method: "POST",
            body: requestBody,
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Access-Control-Allow-Origin": "*"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`);
        }

        const data: Txt2ImgResponse = await response.json();
        return data
    } catch (error) {
        console.error('There was a problem with the fetch operation: ', error);
    }
};