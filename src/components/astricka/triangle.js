import React from "react"

export default class Triangle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bodyarray :[{ "body": "arm" }, { "body": "shl" }, { "body": "arm" }, { "body": "shl" }, { "body": "arm" },
            { "body": "shl" },]
        }
    }

    componentWillMount() {
        var val = []
        let bodyarray = this.state.bodyarray
        for (var i = 0; i < bodyarray.length; i++) {
            var keyget = (_.invert(bodyarray[i]));
            var valueget = Object.assign(val, { [Object.keys(keyget)]: [bodyarray[i]] })
            console.log(valueget);
        }
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

