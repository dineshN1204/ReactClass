import React, { useState } from "react";

class Welcome extends React.Component {
    render(props) {
        const { street, city } = this.props
        return (
            <div>
                <h1>Dinesh is in {street} and in {city}</h1>
            </div>
        );
    }
}

export default Welcome;