import React from 'react';
const Logo = (props) =>{
    return(
        <>
        { props.logoLink ? <img src={props.logoLink}  alt={props.text} className={props.className}/>  : <span className={props.className}>{props.text}</span> 

}
           
        </>
    )


}
export default Logo;