import React from "react"

export default class Triangle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bodyarray: [{ "body": "arm" }, { "body": "shl" }, { "body": "arm" }, { "body": "shl" }, { "body": "arm" },
            { "body": "shl" }],
            arrayState: 4
        }
    }
    componentWillMount() {
        var val = []
        let bodyarray = this.state.bodyarray
        for (var i = 0; i < bodyarray.length; i++) {
            var keyget = (_.invert(bodyarray[i]));
            console.log(keyget);
            var valueget = Object.assign(val, { [Object.keys(keyget)]: [bodyarray[i]] })
            console.log(valueget);
        }
    }
    // _______________________FACTORIAL CODE__________________________
    getFactorial() {
        var fac = 1
        for (var i = 0; i < 5; i++) {
            fac = fac * (5 - i)
        }
    }
    // __________________TRIANGLE CODE_____________________
    getTriangle() {
        for (let i = 1; i <= 5; i++) {
            for (let j = 1; j <= i; j++) {
                console.log("*");
                // document.write("*")
            }
            // document.write("\n")
        }
        for (i = 5; i >= 1; i--) {
            for (j = 1; j <= i; j++) {
                console.log("*");
                // document.write("*")
            }
            // document.write("\n")
        }
    }
    getValue(no){
        console.log(no);
    }
    render() {
        return (
            <div>
                <button onClick={(e) => this.getFactorial(e)}>Get Factorial</button>
                <button onClick={(e) => this.getTriangle(e)}>get triangls</button>
                {/* ________________SINGLE STRING AND NUMERIC VALUE CONVERT INTO ARRAY______________________ */}
                {/* {new Array(this.state.arrayState).fill([...Array(this.state.arrayState).keys()]).map(no =>
                    <button onClick={()=>this.getValue(no)}>Hello</button>
                )} */}
            </div>
        )
    }
}

