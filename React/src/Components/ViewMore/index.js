import React from "react";
import styles from "./ViewMore.module.scss";
import Image from "~/Base/Images"
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function ViewMore() {
    return (
        <div className={cx("view-more")}>
            <a href="#" className={cx('link')}>View More</a>
            <div>
                <img src={Image.arrowicon}/>
            </div>
        </div>
    )
}

export default ViewMore