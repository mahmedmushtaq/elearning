import {makeStyles} from "@material-ui/styles";

export default makeStyles(theme=>({
   listBtn:{
       width:"30em",
       padding:"1rem",
       margin:"1rem",
       [theme.breakpoints.down("sm")]:{
           width: "70vw"
       }
   }
}))