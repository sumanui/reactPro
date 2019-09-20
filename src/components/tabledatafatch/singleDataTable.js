import React from 'react'

class SingleDataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="container">
                <div className="backButton">
                    <button onClick={()=> this.props.backLink()}>Back</button>
                </div>
                {this.props.nextPageData.map((data, key) => (
                    <ul key={key}>
                        <li>
                            {data.id}
                        </li>
                        <li>
                            {data.title}
                        </li>
                        <li>
                            {data.userId}
                        </li>
                    </ul>
                ))}
            </div>
        )
    }
}
export default SingleDataTable;