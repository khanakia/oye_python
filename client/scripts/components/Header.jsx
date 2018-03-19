import React from 'react'
import { Link } from 'react-router-dom'

import Auth from '../helpers/auth.js'

class Header extends React.Component {
    constructor(props) {
        super(props);        
    }


    componentDidMount() {
        
    }


    logout = (e) => {
        e.preventDefault()
        Auth.logout()
        hashHistory.push('/')
    }

    render() {        
        const currentUser = Auth.getTokenDecoded()
        return (
            
                <header className="layout-header">
                    <div className="layout-header_inner">
                        <div className="header-right">
                            <div className="dropdown">
                              <a  href="#" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-user"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                {/*<a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>*/}
                                <a className="dropdown-item" href="#" onClick={this.logout}>Sign Out</a>
                              </div>
                            </div>
                        </div>
                    </div>
                </header>
            
        );
    }
}

export default Header;
