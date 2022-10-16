import React from "react";
import "./layout.scss";
import Navigation from "../Components/Navigation/Navigation";

export default class Layout extends React.Component {
    render() {
        return (
            <div className="portal-homepage">
                <div className="wrap">
                    <div className="header">
                        <Navigation></Navigation>
                    </div>
                    <div className="content">
                       
                    </div>
                </div>
            </div>
        )
    }
}