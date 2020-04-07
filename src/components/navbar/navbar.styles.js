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
            marginRight:".7rem"
        }
    },
    iconScroll:{
        width:"3rem",
        height:'3rem',
        textAlign:"center",
        marginRight:".6rem",
        fontSize:"3rem",
        backgroundColor:"white",
        color:theme.palette.common.purple,
        borderRadius:"50%",
        [theme.breakpoints.down('xs')]:{
            marginRight:".7rem"
        }

    },
    drawerItem:{
        padding:"0.4rem 2rem",
        fontFamily:"Montserrat",




    },
    drawer: {
        backgroundColor: theme.palette.common.yellow,


    },drawerScroll: {
        backgroundColor: theme.palette.common.yellow,
        marginTop:"4rem"

    },
    divider:{
        backgroundColor:"white"
    },

    navBarContainer:{
        color:"white",
        position:"fixed",

    },
    navBarContainerScroll:{
        color:"black",
        backgroundColor:theme.palette.common.yellow,
        position:"fixed",

        marginTop:"-16px",
        width:"100vw",
        zIndex:13333,


    },
    indicator:{
        backgroundColor:"transparent"
    }





}))

export default styles;