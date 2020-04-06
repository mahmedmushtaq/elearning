import {makeStyles} from "@material-ui/styles";
import bg1 from "../../assets/images/bg1.jpg";
import bg2 from "../../assets/images/bg2.jpg";

const styles = makeStyles(theme=>({
    header:{
        position:"relative",

    },
    headerImage:{
        background: `url(${bg1})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        width:"100vw",
        overflow:"hidden",
        height:"100vh",

        animation:`$slider 80s infinite`


    },
    headerImageSrc:{
        transition:"all 1s"

    },
    headerContainer:{
        position:"relative",
        overflow:"hidden"
    },
    headerOverlay:{
        position:"absolute",
        backgroundColor:`rgba(28, 65, 106, .7)`,
        top:0,
        left:0,
        width:"100vw",
        height:"100vh"
    },
    headerNav:{
        position:"absolute",
        top:0,
        left:0,
        padding:"1rem 0",
        width:"100%",

    },
    "@keyframes slider":{
        "0":{
            background: `url(${bg1})`,
        },
        "50%":{
            background: `url(${bg2})`,
        },



    },





}));



export default styles;