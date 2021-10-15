import React, { Component } from "react";
import withCounter from './withCounter'

class LikeCounter extends Component {
    render() {
        const { count, incrementCount } = this.props
        return (
            <h2 onMouseUp = { incrementCount }>
                MouseUp { count } times
            </h2>
        )
    }
}

export default withCounter(LikeCounter)