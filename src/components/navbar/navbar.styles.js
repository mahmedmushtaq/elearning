import {makeStyles} from "@material-ui/styles";

const styles = makeStyles(theme=>({
    tabs:{

    },
    icon:{
        width:"3rem",
        height:'3rem',
        textAlign:"center",
        marginRight:".6rem",
        fontSize:"3rem",
        backgroundColor:theme.palette.common.yellow,
        color:theme.palette.common.purple,
        borderRadius:"50%",
        [theme.breakpoints.down('xs')]:{
            marginRight:0
        }
    },
    drawerItem:{
        padding:"0.4rem 2rem",
        fontFamily:"Montserrat",




    },
    drawer: {
        backgroundColor: theme.palette.common.yellow,
    },
    divider:{
        backgroundColor:"white"
    },

    header:{
        color:"white"
    }





}))

export default styles;