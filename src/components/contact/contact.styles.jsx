import {makeStyles} from "@material-ui/styles";

const styles = makeStyles(theme=>({
    contactContainer: {
        width: "88vw",
        margin: "auto",
        [theme.breakpoints.down("md")]:{
            width:"90vw"
        },
        [theme.breakpoints.down("sm")]:{
            width:"95vw"
        }



    },
    divider:{
        width:'.7rem',
        height:'10rem',
        marginTop:"1rem",

        backgroundColor:theme.palette.common.yellow
    },
    hrDivider:{
        width:'17rem',
        height:'.7rem',
        marginTop:"1rem",

        backgroundColor:theme.palette.common.yellow
    },



}));


export default styles;