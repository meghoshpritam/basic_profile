import React, {useState} from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {red, blue, green} from "@material-ui/core/colors";
import {AutoRotatingCarousel, Slide} from "material-auto-rotating-carousel";

export default () => {
    const [handleOpen, setHandleOpen] = useState({open: true});
    const isMobile = useMediaQuery("(max-width:600px)");
    const [label, setLabel] = useState('MyGovIndia');

    console.log(isMobile);
    return (
        <div>
            <AutoRotatingCarousel
                label={label}
                onChange={e => {
                    if (e === 0) {
                        setLabel("MyGovIndia");
                    } else if (e === 1) {
                        setLabel("WHO")
                    } else {
                        setLabel("Skip")
                    }
                }}
                open={handleOpen.open}
                onStart={() => {
                    if (label === "MyGovIndia") {
                        window.open("https://twitter.com/mygovindia/status/1242799628677861376/photo/1", "_blank");
                    } else if (label === "WHO") {
                        window.open("https://twitter.com/WHO/status/1242765071966711808/photo/1", "_blank");
                    } else {
                        setHandleOpen({open: false});
                    }
                }}
                autoplay={false}
                mobile={isMobile}
                style={{position: "absolute"}}
            >
                <Slide
                    media={
                        <div>
                            <img src="https://pbs.twimg.com/media/ET9PoIAUwAANYtD?format=jpg&name=medium"
                                 style={isMobile ? ({width: '100%'}) : ({width: '70%', marginTop: '5px'})} alt="img1"/>
                        </div>
                    }
                    mediaBackgroundStyle={{backgroundColor: red[400]}}
                    style={{backgroundColor: red[400]}}
                    title=""
                    subtitle=""
                />

                <Slide
                    media={
                        <div>
                            <img src="https://pbs.twimg.com/media/ET8wPjZWAAAbFik?format=jpg&name=large"
                                 style={isMobile ? ({width: '100%'}) : ({width: '98%', marginTop: '18px'})}
                                 alt={"img2"}/>
                        </div>
                    }
                    mediaBackgroundStyle={{backgroundColor: green[400]}}
                    style={{backgroundColor: green[400]}}
                    title="World Health Organization (WHO)"
                    subtitle=""
                />

                <Slide
                    media={
                        <div>
                            <img src="https://pbs.twimg.com/profile_banners/2686834802/1584358184/1500x500"
                                 style={isMobile ? ({width: '100%'}) : ({width: '98%', marginTop: '18px'})}
                                 alt={"img3"}/>
                        </div>
                    }
                    mediaBackgroundStyle={{backgroundColor: blue[400]}}
                    style={{backgroundColor: blue[400]}}
                    title="#stayHome #staySafe"
                    subtitle=""
                />
            </AutoRotatingCarousel>
        </div>
    );
};