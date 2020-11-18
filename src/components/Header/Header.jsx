import React from "react";
import hero from  '../../assets/image/Hero.svg'
import styles from './header.module.scss'

const Header = () => {
    console.log('Header')
    return(
        <div  className={styles.header}>
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