import React from "react";
import styles from "./Announcement.module.scss";
import Image from "~/Base/Images"
import classNames from "classnames/bind";

import ViewMore from "~/Components/ViewMore";

const cx = classNames.bind(styles)
const lists = [
    { 
        img: Image.markgroup1,
        titleItem: "New Learning System Is Live",
        contentItem: "New Wellness Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo d ea rebum.",
        dateTime: '05/Jan/2021'
    },
    { 
        img: Image.markgroup_4,
        titleItem: "IT Maintenance",
        contentItem: "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo",
        dateTime: '02/Jan/2021'
    },
    { 
        img: Image.markgroup_5,
        titleItem: "IT Maintenance",
        contentItem: "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo",
        dateTime: '02/Jan/2021'
    },
    { 
        img: Image.markgroup_6,
        titleItem: "IT Maintenance",
        contentItem: "Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et accusam et justo duo",
        dateTime: '02/Jan/2021'
    }
]

function Announcement() {
    return (
        <div className={cx("Announcement")}>
                <h1 className={cx('title')}>
                    Announcement
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
                                            <button className={cx('btn')}>Human Resource</button>
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

export default Announcement