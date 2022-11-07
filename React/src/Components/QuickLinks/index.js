import React from "react";
import styles from "./QuickLinks.module.scss";
import classNames from "classnames/bind";

import Clear from "~/Components/Clear";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function QuickLinks() {
    return (
        <div className={cx("QuickLinks")}>
                <h1 className={cx('title')}>
                    Quick Links
                </h1>

                <div className={cx('list-items')}>
                    <div className={cx('item', 'col-4', 'col-s-12')}>
                        <div className={cx('wrapper')}><FontAwesomeIcon icon={faDroplet} className={cx('icon')}/>
                        <span className={cx('job')}>Training</span></div>
                    </div>
                    <div className={cx('item', 'col-4', 'col-s-12')}>
                        <div className={cx('wrapper')}><FontAwesomeIcon icon={faDroplet} className={cx('icon')}/>
                        <span className={cx('job')}>Training</span></div>
                    </div>
                    <div className={cx('item', 'col-4', 'col-s-12')}>
                        <div className={cx('wrapper')}><FontAwesomeIcon icon={faDroplet} className={cx('icon')}/>
                        <span className={cx('job')}>Training</span></div>
                    </div>
                    <div className={cx('item', 'col-4', 'col-s-12')}>
                        <div className={cx('wrapper')}><FontAwesomeIcon icon={faDroplet} className={cx('icon')}/>
                        <span className={cx('job')}>Training</span></div>
                    </div>
                    <div className={cx('item', 'col-4', 'col-s-12')}>
                        <div className={cx('wrapper')}><FontAwesomeIcon icon={faDroplet} className={cx('icon')}/>
                        <span className={cx('job')}>Training</span></div>
                    </div>
                    <div className={cx('item', 'col-4', 'col-s-12')}>
                        <div className={cx('wrapper')}><FontAwesomeIcon icon={faDroplet} className={cx('icon')}/>
                        <span className={cx('job')}>Training</span></div>
                    </div>
                    <div className={cx('item', 'col-4', 'col-s-12')}>
                        <div className={cx('wrapper')}><FontAwesomeIcon icon={faDroplet} className={cx('icon')}/>
                        <span className={cx('job')}>Training</span></div>
                    </div>
                    <div className={cx('item', 'col-4', 'col-s-12')}>
                        <div className={cx('wrapper')}><FontAwesomeIcon icon={faDroplet} className={cx('icon')}/>
                        <span className={cx('job')}>Training</span></div>
                    </div>
                    <div className={cx('item', 'col-4', 'col-s-12')}>
                        <div className={cx('wrapper')}><FontAwesomeIcon icon={faDroplet} className={cx('icon')}/>
                        <span className={cx('job')}>Training</span></div>
                    </div>
                </div>
                <Clear />
            </div>
    )
}

export default QuickLinks