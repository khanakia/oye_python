import React, { Component } from "react";
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom'
import Header from './Header'

class Layout extends Component {
    componentWillMount() {
        if (!Auth.check()) {
            hashHistory.push('/')
        }
    }

    componentDidMount() {
        
    }

    componentDidUpdate() {
        
    }

    render() {  
        return (
            <div className="layout layout-has-sider">
                <div className="layout-sider">
                    <div className="leftmenu-block">
                        <div className="logo">  
                        </div>
                        <div className="menu">
                            <ul>
                                <li><Link to="/dashboard"><i className="ion-grid"></i></Link></li>
                                {/*<li><a href="#"><i className="ion-ios-people-outline"></i></a></li>
                                <li><a href="#"><i className="ion-ios-chatboxes-outline"></i></a></li>
                                <li><a href="#"><i className="icon ion-ios-gear-outline"></i></a></li>*/}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="layout">
                    <Header />
                    <main className="layout-content">
                        {this.props.children}
                    </main>
                </div>
            </div>
        );
    }
}

export default Layout;
