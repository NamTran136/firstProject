import React from "react";
import styles from "./DocumentGallery.module.scss";
import Image from "~/Base/Images"
import classNames from "classnames/bind";

import ViewMore from "~/Components/ViewMore";

const cx = classNames.bind(styles)

function DocumentGallery() {
    return (
        <div className={cx("DocumentGallery")}>
                <h1 className={cx('title')}>
                    Document Gallery
                </h1>

                <div className={cx('menu')}>
                    <div className={cx('list')}>
                        <h4 className={cx('title-list')}>Policy</h4>
                        <ul className={cx('wrapper')}>
                            <li className={cx('item')}>
                                <img src={Image.word}/>
                                Policy 1
                            </li>
                            <li className={cx('item')}>
                                <img src={Image.word}/>
                                Policy 2
                            </li>
                            <li className={cx('item')}>
                                <img src={Image.word}/>
                                Policy 3
                            </li>
                            <li className={cx('item')}>
                                <img src={Image.word}/>
                                Policy 4
                            </li>
                        </ul>
                        <ViewMore />
                    </div>
                    <div className={cx('list')}>
                        <h4 className={cx('title-list')}>SOP</h4>
                        <ul className={cx('wrapper')}>
                            <li className={cx('item')}>
                                <img src={Image.word}/>
                                Demo Script
                            </li>
                            <li className={cx('item')}>
                                <img src={Image.word}/>
                                App Introduction
                            </li>
                            <li className={cx('item')}>
                                <img src={Image.word}/>
                                Index
                            </li>
                            <li className={cx('item')}>
                                <img src={Image.word}/>
                                Training
                            </li>
                        </ul>
                        <ViewMore />
                    </div>
                    <div className={cx('list')}>
                        <h4 className={cx('title-list')}>Corporate Template</h4>
                        <ul className={cx('wrapper')}>
                            <li className={cx('item')}>
                                <img src={Image.word}/>
                                Template 1
                            </li>
                            <li className={cx('item')}>
                                <img src={Image.word}/>
                                Template 2
                            </li>
                            <li className={cx('item')}>
                                <img src={Image.word}/>
                                Template 3
                            </li>
                        </ul>
                        <h4 className={cx('title-list')}>Slide</h4>
                        <ul className={cx('wrapper')}>
                            <li className={cx('item')}>
                                <img src={Image.powerpoint}/>
                                Template 1
                            </li>
                            <li className={cx('item')}>
                                <img src={Image.powerpoint}/>
                                Template 2
                            </li>
                            <li className={cx('item')}>
                                <img src={Image.powerpoint}/>
                                Template 3
                            </li>
                        </ul>
                    </div>
                    <div className={cx('list')}>
                        <h4 className={cx('title-list')}>Report</h4>
                        <ul className={cx('wrapper')}>
                            <li className={cx('item')}>
                                <img src={Image.vsdx} />
                                Report 1
                            </li>
                            <li className={cx('item')}>
                                <img src={Image.vsdx} />
                                Report 2
                            </li>
                            <li className={cx('item')}>
                                <img src={Image.vsdx} />
                                Report 3
                            </li>
                            <li className={cx('item')}>
                                <img src={Image.vsdx} />
                                Report 4
                            </li>
                        </ul>
                        <ViewMore />
                    </div>
                </div>
            </div>
    )
}

export default DocumentGallery