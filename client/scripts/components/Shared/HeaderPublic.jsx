import React, { Component } from "react";

import {APP_TITLE} from '../../Constant'
class HeaderPublic extends Component {


    render() {

        return (
            <div className="headerPublic">
         		<div className="logo">
         			{APP_TITLE}
         		</div>
            </div>
        );
    }
}

export default HeaderPublic;
