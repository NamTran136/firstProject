import React from "react";
import styles from "./News.module.scss";
import Image from "~/Base/Images"
import classNames from "classnames/bind";

import ViewMore from "~/Components/ViewMore";

const cx = classNames.bind(styles)
const lists = [
    { 
        img: Image.markgroup2,
        titleItem: "Tomorrow Healthy Check",
        contentItem: "New Wellness Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo d ea rebum.",
        dateTime: '05/Jan/2021'
    },
    { 
        img: Image.markgroup_1,
        titleItem: "Air-conditioning is broken",
        contentItem: "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo",
        dateTime: '02/Jan/2021'
    },
    { 
        img: Image.markgroup_2,
        titleItem: "Keep Running",
        contentItem: "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo",
        dateTime: '02/Jan/2021'
    },
    { 
        img: Image.markgroup_3,
        titleItem: "Temperature above 37.3℃ need to report",
        contentItem: "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo",
        dateTime: '02/Jan/2021'
    }
]

function News() {
    return (
        <div className={cx("News")}>
                <h1 className={cx('title')}>
                    News
                </h1>

                <div className={cx('items')}>
                    {
                        lists.map((item, index) => {
                            return (
                                <div key={index} class={cx("item")}>
                                    <div className={cx('item-img', 'col-3', 'col-s-12')}>
                                        <img src={item.img} alt='Gallery' className={cx('img')}/>
                                    </div>
                                    <div className={cx("wrapper-item", 'col-9', 'col-s-12')}>
                                        <h3 className={cx("item-title")}>{item.titleItem}</h3>
                                        <p className={cx("item-content")}>
                                            {item.contentItem}
                                        </p>
                                        <div className={cx("wrapper-action")}>
                                            <div className={cx('date-logo')}>
                                                <img src={Image.date} alt='date' />
                                            </div>
                                            <p className={cx('date-time')}>{item.dateTime}</p>
                                        </div>
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

export default News