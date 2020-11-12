import React from "react";
import hero from  '../../assets/image/Hero.svg'

const Header = () => {
    console.log('Header')
    return(
        <div>
            <h1>
                <img
                    src={hero}
                    alt=""
                    style={{
                        width: '100%',
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