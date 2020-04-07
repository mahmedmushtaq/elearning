import {makeStyles} from "@material-ui/styles"

const styles = makeStyles(theme=>({
    container:{
        width:"70vw",
        margin:"5rem auto 0 auto",
        textAlign:"center",
        [theme.breakpoints.down("md")]:{
            width:"80vw"
        }

    },
}));


export default styles;