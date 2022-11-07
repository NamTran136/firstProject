import React from "react";
import styles from "./Events.module.scss";
import Image from "~/Base/Images"
import classNames from "classnames/bind";

import ViewMore from "~/Components/ViewMore";

const cx = classNames.bind(styles)

function Events() {
    return (
        <div className={cx("Events")}>
            <h1 className={cx('title')}>
                Events
            </h1>

            <div className={cx('list-items')}>
            <div className={cx('wrapper')}>
                <div className={cx('item', 'col-12')}>
                        <div className={cx('container', 'col-3')}>
                            <div className={cx('dateTime')}>
                                <h2>01</h2>
                                <span>Jan</span>
                            </div>
                        </div>

                        <div className={cx('container', 'col-9')}>
                            <div className={cx('work')}>
                                <h3>Register Portal</h3>
                                <span className={cx('time')}>
                                    <div className={cx('clock-icon')}>
                                        <img src={Image.clock} className={cx('img')} />
                                    </div>
                                    <div className={cx('content')}>
                                    09:00 AM - 09:30 AM
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('wrapper')}>
                    <div className={cx('item', 'col-12')}>
                        <div className={cx('container', 'col-3')}>
                            <div className={cx('dateTime')}>
                                <h2>02</h2>
                                <span>Jan</span>
                            </div>
                        </div>

                        <div className={cx('container', 'col-9')}>
                            <div className={cx('work')}>
                                <h3>IT Maintenance</h3>
                                <span className={cx('time')}>
                                    <div className={cx('clock-icon')}>
                                        <img src={Image.clock} className={cx('img')} />
                                    </div>
                                    <div className={cx('content')}>
                                    09:00 AM - 09:30 AM
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('wrapper')}>
                    <div className={cx('item', 'col-12')}>
                        <div className={cx('container', 'col-3')}>
                            <div className={cx('dateTime')}>
                                <h2>03</h2>
                                <span>Jan</span>
                            </div>
                        </div>

                        <div className={cx('container', 'col-9')}>
                            <div className={cx('work')}>
                                <h3>IT Maintenance</h3>
                                <span className={cx('time')}>
                                    <div className={cx('clock-icon')}>
                                        <img src={Image.clock} className={cx('img')} />
                                    </div>
                                    <div className={cx('content')}>
                                    09:00 AM - 09:30 AM
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('wrapper')}>
                    <div className={cx('item', 'col-12')}>
                        <div className={cx('container', 'col-3')}>
                            <div className={cx('dateTime')}>
                                <h2>04</h2>
                                <span>Jan</span>
                            </div>
                        </div>

                        <div className={cx('container', 'col-9')}>
                            <div className={cx('work')}>
                                <h3>IT Maintenance</h3>
                                <span className={cx('time')}>
                                    <div className={cx('clock-icon')}>
                                        <img src={Image.clock} className={cx('img')} />
                                    </div>
                                    <div className={cx('content')}>
                                    09:00 AM - 09:30 AM
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ViewMore />
        </div>
    )
}

export default Events