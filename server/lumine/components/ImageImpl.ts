import { ImageProps } from "../@types";
import { Image } from "./types";

class ImageImpl implements Image {
    type?: string;
    id?: string | number;
    imageProps?: ImageProps;

    constructor(image: Image) {
        this.type = "Image";
        this.id = image.id;
        this.imageProps = image.imageProps;
    }
}

export default ImageImpl;
