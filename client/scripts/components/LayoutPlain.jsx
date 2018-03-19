import React, { Component } from "react";
class LayoutPlain extends Component {
    componentWillMount() {
        if (!Auth.check()) {
            hashHistory.push('/')
        }
    }
    render() {  
        return (            
            <div className="layout plain">
                <main>
                {this.props.children}
                </main>
            </div>
			
        );
    }
}

export default LayoutPlain;
