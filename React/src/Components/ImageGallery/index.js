import React from "react";
import styles from "./ImageGallery.module.scss";
import Image from "~/Base/Images"
import classNames from "classnames/bind";

import ViewMore from "~/Components/ViewMore";

const cx = classNames.bind(styles)
const lists = [
    { 
        img: Image.image_gallery
    },
    { 
        img: Image.image_gallery_1
    },
    { 
        img: Image.image_gallery_2
    },
    { 
        img: Image.image_gallery_3
    }
]

function ImageGallery() {
    return (
        <div className={cx("ImageGallery")}>
                <h1 className={cx('title')}>
                    ImageGallery
                </h1>

                <div className={cx('items')}>
                    {
                        lists.map((item, index) => {
                            return (
                                <div key={index} class={cx("item-img", 'col-3', 'col-s-6')}>
                                        <img src={item.img} alt='Gallery' class={cx("img")} />
                                </div>
                            )
                        })
                    }
                </div>

                <ViewMore />
            </div>
    )
}

export default ImageGallery