import {makeStyles} from "@material-ui/styles";

const styles = makeStyles(theme=>({
    featuresContainer:{
        width:"80vw",
        margin:"auto"
    },
    divider:{
        width:'.7rem',
        height:'10rem',
        marginTop:"1rem",

        backgroundColor:theme.palette.common.yellow
    },
    featuresHeading:{
        color:theme.palette.common.wetAsphalt
    },
    featureItem:{
        maxWidth:"30rem",
        margin:"1rem 0"

    },
    featureItemContainer:{
        marginTop:"1rem"
    }
}));


export default styles;