import React from 'react';
import Welcome from './Welcome';

const Hi = (props) => {
    const { name, age } = props;
    return (
        <>
            <h1>Welcome {name} with {age}</h1>
            <h4>{props.children}</h4>
            <Welcome street={"Irugur"} city={"Coimbatore"} />
        </>
    )
}

export default Hi;













































































































