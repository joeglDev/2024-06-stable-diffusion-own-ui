import { Txt2ImgResponse } from "./api.interfaces";
import { postTxt2Img } from "./models";

export const generateTxt2Img = async (positivePrompt: string, steps: number): Promise<Txt2ImgResponse | undefined> => {
    const requestBody = JSON.stringify({
        prompt: positivePrompt,
        steps: steps,
    })

    const response = await postTxt2Img(requestBody);
    return response
};