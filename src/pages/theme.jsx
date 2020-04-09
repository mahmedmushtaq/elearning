import {createMuiTheme} from "@material-ui/core/styles";

const yellowColor = "#f5d76e";
const darkPurple = "#1c416a";
const wetAsphalt = "#34495e";
export default createMuiTheme({
   palette:{
      common:{
         yellow:yellowColor,
         purple:darkPurple,
         wetAsphalt:wetAsphalt
      },
       primary:{
            main:yellowColor,

       }
   },

   typography:{
       h3:{
           fontFamily:'Montserrat',
           fontWeight:700,
           fontSize:"3rem",

       },
       h4:{
          fontFamily:'Montserrat',
           fontWeight:700,
           fontSize:"2rem",

       },
       h5:{
           fontFamily:'Montserrat',
           fontWeight:700,
           fontSize:"2rem",

       },
       h6:{
           fontFamily:'Montserrat',
           fontWeight:700,
           fontSize:"1rem",

       },
       subtitle1:{
           fontFamily:'\'Roboto\',sans-serif',
           fontWeight:700,
           fontSize:".7rem",
       }
       
   },
   overrides:{
       MuiButton: {
           containedPrimary:{
              color:"white"
          }
       },
       MuiLink:{
           root:{
               underline:"none"
           }
       }
   }
})



