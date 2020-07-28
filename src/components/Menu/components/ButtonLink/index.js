import React, { Children } from 'react';

function ButtonLink(props) {
    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}

export default ButtonLink;