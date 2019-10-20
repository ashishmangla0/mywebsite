import React from 'react';
const NavbarBrand = (props) =>{
    return(
        <>
        { props.href ? <a href={props.href}>
            {props.children}
        </a> : <span> {props.children} </span> }


            
        </>
    )


}
export default NavbarBrand;