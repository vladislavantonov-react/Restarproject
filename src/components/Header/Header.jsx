import React from "react";
import styles from './header.module.scss';
import hero from '../../assets/image/Hero.svg';

const Header = () => {
    return (
        <div className={styles.header}>
            <h1>
                <img
                    src={hero}
                    alt=""
                    className={styles.img}
                />
            </h1>
        </div>
    )
}

export default Header
