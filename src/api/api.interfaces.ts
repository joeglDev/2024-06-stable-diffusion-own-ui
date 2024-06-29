interface Parameters<T> {
    [key: string]: unknown;
}

export interface Txt2ImgResponse {
    images: string[];
    parameters: Parameters<unknown>;
    info: string;
}