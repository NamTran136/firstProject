import React from "react";
import styles from "./VideoGallery.module.scss";
import Image from "~/Base/Images"
import classNames from "classnames/bind";

import ViewMore from "~/Components/ViewMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles)
const lists = [
    { 
        img: Image.video
    },
    { 
        img: Image.video_1
    },
    { 
        img: Image.video_2
    },
    { 
        img: Image.video_3
    }
]

function VideoGallery() {
    return (
        <div className={cx("VideoGallery")}>
                <h1 className={cx('title')}>
                    Video Gallery
                </h1>

                <div className={cx('items')}>
                    {
                        lists.map((item, index) => {
                            return (
                                <div key={index} class={cx("item-img", 'col-3', 'col-s-6')}>
                                        <img src={item.img} alt='Gallery' class={cx("img")} />
                                        <div className={cx('play')}>
                                            <FontAwesomeIcon icon={faCirclePlay} />
                                        </div>
                                </div>
                            )
                        })
                    }
                </div>

                <ViewMore />
            </div>
    )
}

export default VideoGallery