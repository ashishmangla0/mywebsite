import React from 'react';
const Logo = (props) =>{
    return(
        <>
        { props.logoLink ? <img src={props.logoLink}  alt={props.text}/>  : <span>{props.text}</span> 

}
           
        </>
    )


}
export default Logo;