import React from "react";
import {connect} from "react-redux";
import {signOut} from "../redux/registration/registration.actions";
import {withRouter} from "react-router-dom";

class SignoutComponent extends React.Component{
    componentDidMount() {
        this.props.signOut();
        this.props.history.push("/");
    }
    render(){
        return(
            <div>
                Please wait we are signing you out
            </div>
        )
    }
}

export default withRouter(connect(null,{signOut})(SignoutComponent));