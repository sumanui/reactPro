import { React } from "react";

class TwoDArray extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes:new Array(10)
        }
    }

    render() {
        return (
            <div>
                {this.state.boxes.map((data, key) => (
                    <div className="noBox" id="noBox" key={key} >
                        {data == null ? '?' : data}
                    </div>

                ))}
            </div>
        )
    }
}
export default TwoDArray;