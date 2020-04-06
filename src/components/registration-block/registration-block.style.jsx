import {makeStyles} from "@material-ui/styles";

const styles = makeStyles(theme=>({
    registrationTv:{
        color:"white",
        marginBottom:"1rem",

    },



    signInBtn:{
        ...theme.typography.h6,
        backgroundColor:"white",

    },
    formGrid:{
        padding:"2rem",

        backgroundColor:theme.palette.common.yellow,


    },

}));


export default styles;