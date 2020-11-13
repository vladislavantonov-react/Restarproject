import React from "react";
import hero from  '../../assets/image/Hero.svg'
import styles from "../Navbar/navbar.module.scss";

const Header = () => {
    console.log('Header')
    return(
        <div>
            <h1>
                <img
                    src={hero}
                    alt=""
                    style={{
                        width: '575px',
                        height:'107px',
                        marginTop:'20px',
                        marginBottom:'20px',
                    }}
                />
            </h1>
        </div>
    )
}

export default Header