import {createMuiTheme} from "@material-ui/core/styles";

const yellowColor = "#f5d76e";

export default createMuiTheme({
   palette:{
      common:{
         yellow:yellowColor
      },
       primary:{
            main:yellowColor
       }
   },

   typography:{
       h3:{
          fontFamily:'Montserrat',
           fontWeight:700,
           fontSize:"2rem",

       },
       h6:{
           fontFamily:'Montserrat',
           fontWeight:700,
           fontSize:"1rem",

       },
       
   }
})



