import Image from "~/Base/Images"
import React from "react";
import styles from './HowDoI.module.scss'
import classNames from 'classnames/bind'

import Item from "./Item";
import ViewMore from "~/Components/ViewMore";

const cx = classNames.bind(styles)

function HowDoI() {
    return(
        <div className={cx("how-do-i")}>
            <h1 className={cx('title')}>
                How Do I
            </h1>

            <div className={cx('search')}>
                <div className={cx('search-icon')}>
                    <img src={Image.search} alt=""/>
                </div>
                <input type={"text"} className={cx('input')} placeholder="Find Questions"/>
            </div>

            <Item />
            <Item />
            <Item />

            <ViewMore />
        </div>
    )
}

export default HowDoI