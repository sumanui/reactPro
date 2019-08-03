import React from 'react'

class Playground extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: Array(6).fill(null),
            total: 0,
            result: [],
            success: "",
            inputVal:''
        }
    }

    randomNo() {
        var copy = [];
        var boxes = this.state.boxes
        for (var i = 0; i < boxes.length; i++) {
            var random = Math.floor(Math.random() * 10);
            copy[i] = random
            boxes[i] = random
            this.setState({
                boxes
            })
        }
        var x = 0;
        for (var j = 0; j < 4; j++) {
            var total = copy[Math.floor(Math.random() * copy.length)]
            copy.splice(copy.indexOf(total), 1)
            x += total
        }

        this.setState({
            total: x
        })
    }

    valueArray(value) {
        var res = 0
        this.state.result.push(value)
        for (var i = 0; i < this.state.result.length; i++) {
            if (isNaN(this.state.result[i])) {
                continue;
            }
            res += Number(this.state.result[i]);

        }
        if (this.state.result.length == 4 && res == this.state.total) {
            this.setState({
                success: "success" +res
            })

        } else if (this.state.result.length == 4 && res != this.state.total) {
            this.setState({
                success: "try again" +res
            })
        }
        return res;
    }

    Reset(){
        this.setState({
            boxes: Array(6).fill(null),
            total: 0,
            result: [],
            success: "",
        })
    }

    postApi(){
        let payload ={
            employee_name : this.state.inputVal
        }
        this.props.postApiRequest(payload)
    }
    handleChange(e){
        this.setState({
            inputVal:e.target.value
        })
    }

    render() {
        
        const{inputVal}=this.state
        return (
            <div className="conatiner">
                <div className="totalCountDiv">
                    <div className="total">
                        {this.state.total == "" ? '?' : this.state.total}
                    </div>
                    {this.state.boxes.map((data, key) => (
                        <div className="noBox" id="noBox" key={key} value={data} onClick={() => { this.state.result.length == 4 ? "" : this.valueArray(data) }}>
                            {data == null ? '?' : data}
                        </div>

                    ))}
                    <button onClick={() => this.randomNo()}>
                        Start
                    </button>
                    <button onClick={()=> this.Reset()}>
                        Reset
                    </button>
                    <div>
                        result : {this.state.success}
                    </div>
                </div>
                        <input type="text" value={inputVal} onChange={(e)=> this.handleChange(e)} />
                <button className="" onClick={()=> this.postApi()}>
                    Api
                </button>
            </div>
        )
    }
}

export default Playground