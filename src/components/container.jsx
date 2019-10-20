import React from 'react';
const Container = (props) => {
    return (
        <>
        <div className={props.fluid === true ? 'container-fluid' : 'container'}>
            {props.children}
        </div>
        </>
    )
}
export default Container;