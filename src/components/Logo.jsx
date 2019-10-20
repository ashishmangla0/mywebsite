import React from 'react';
const Logo = (props) =>{
    return(
        <>
        { props.logoLink ? <img />  : <span>{props.text}</span> 

}
           
        </>
    )


}
export default Logo;