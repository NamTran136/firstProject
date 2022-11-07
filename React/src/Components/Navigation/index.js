import React from "react";
import styles from "./Navigation.scss";
import Image from "~/Base/Images"
import classNames from "classnames/bind";

const cx = classNames.bind(styles)
const nav = [
    { name: 'About' },
    { name: 'Services' },
    { name: 'Products' },
    { name: 'List' },
    { name: 'Support' },
]

function Navigation() {
    return (
        <div className="nav">
                <div className={cx("nav-logo")}>
                    <img src={Image.logo} alt='logo' />
                </div>
                <div className="nav-items">
                    {
                        nav.map((item, index) => {
                            return (
                                <div key={index} class="nav-item">{item.name}</div>
                            )
                        })
                    }
                </div>
            </div>
    )
}

export default Navigation