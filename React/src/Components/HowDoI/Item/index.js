import Image from "~/Base/Images"
import styles from './Item.module.scss'
import classNames from 'classnames/bind'
import { useState } from "react"

const cx = classNames.bind(styles)


function Item() {
    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(!show);
      };
    return(
        <div className={cx('list-items')}>
            <div className={cx('item')} style={
                {backgroundColor: show ? '#4ac49a' : '#636363'} 
            } onClick={handleClick} >
                <div className={cx('collapse-icon')}>
                    <img src={show ? Image.expand : Image.collapse} alt="" className={cx('icon-img')}/>
                </div>
                <div className={cx('title')}>Lorem ipsum dolor sit amet</div>
            </div>
            {
            show && (
                    <div className={cx('comment')}>
                        <div className={cx('commenter')}>
                            A:
                        </div>
                        <div className={cx('comment-content')}>
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisiut aliquip ex ea commodo consequat. Duis uis nostrud exercitation
                        </div>
                    </div>
                )
                }

        </div>
    )
}

export default Item