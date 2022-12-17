import React from "react";
import type { PresentationData } from "./types";
import Presentation from "./Presentation";

const defaultData : PresentationData = {
    components: [],
}

const ScreenImpl: React.FC<any> = ({route}) => {
    const {url} = route.params;
    const [presentationData, setPresentationData] = React.useState<PresentationData>(defaultData);

    React.useEffect(() => {
        async function init() {
            try {
                if(url) {
                    const response = await fetch(url);
                    const data = await response.json();
                    setPresentationData(data);
                }
            } catch (error) {
                console.error(error);
            }
        }
        init();
    }, [url]);

    return <Presentation {...presentationData} />;
};

export default ScreenImpl;