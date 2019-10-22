import React from 'react';
const NavbarBrand = (props) => {
    return (
        <>
            <a href={ (props.href) ? props.href : ''} className={props.className}>
                { props.children }
         </a>
            </>
    )


}
export default NavbarBrand;