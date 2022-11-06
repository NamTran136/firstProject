import React from "react";
import styles from "./Layouts.module.scss";
import classNames from "classnames/bind";

import Navigation from "~/Components/Navigation";
import Announcement from "~/Components/Announcement";
import News from "~/Components/News";
import ImageGallery from "~/Components/ImageGallery";
import VideoGallery from "~/Components/VideoGallery";
import DocumentGallery from "~/Components/DocumentGallery";
import QuickLinks from "~/Components/QuickLinks";
import Events from "~/Components/Events";

import Clear from "~/Components/Clear";

const cx = classNames.bind(styles)

function Layouts() {
    return (
        <div className={cx("portal-homepage")}>
            <div className="wrap">
                <div className="header">
                    <Navigation></Navigation>
                </div>
                <div className={cx("content")}>
                    <div className={cx('main-content', 'col-8', 'col-s-6')}>
                        <Announcement />
                        <News />
                        <ImageGallery />
                        <VideoGallery />
                        <DocumentGallery />
                    </div>
                    
                    <div className={cx('extra-content', 'col-4', 'col-s-6')}>
                        <QuickLinks />
                        <Events />
                        <div id="how-do-i">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layouts