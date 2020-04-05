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
        borderRadius:"50%",
    },
    drawerItem:{
        padding:"0.4rem 2rem",
        fontFamily:"Montserrat",

        "&:hover":{
            backgroundColor:"transparent"
        },
        "&:selected":{
            backgroundColor:"transparent"
        }


    },
    drawer: {
        backgroundColor: theme.palette.common.yellow,
    },
    divider:{
        backgroundColor:"white"
    },
    tabItem:{
        "&:focus .MuiTouchRipple-root":{

        }
    }





}))

export default styles;