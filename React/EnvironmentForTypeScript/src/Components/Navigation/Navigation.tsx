import React from "react";
import "./index.scss";
import Image from "../../Base/Image";
interface NavProps {

}
interface NavState {
    nav: any[];
}
export default class Navigation extends React.Component<NavProps,NavState> {
    constructor(props:NavProps) {
        super(props)
        this.state = {
            nav: [
                { name: 'About' },
                { name: 'Services' },
                { name: 'Products' },
                { name: 'List' },
                { name: 'Support' },
            ]
        }
    }
    render() {
        return (
            <div className="nav">
                <div className="nav-logo">
                    <img src={Image.logo} alt='logo' />
                </div>
                <div className="nav-items">
                    {
                        this.state.nav.map((item, index) => {
                            return (
                                <div key={index} className="nav-item">{item.name}</div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}