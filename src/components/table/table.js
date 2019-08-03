import React from "react"

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: {}
        }
    }

    fileChange(e) {
        var target = e.target.files[0]
        var dataFiles = this.state.file
        dataFiles[target.name] = target
        this.setState({
            file: dataFiles
        })
    }

    validationImage() {
        var file = this.state.file
        if (file.length != "") {
            for (var i = 0; i < file.length; i++) {

            }
        }
    }

    render() {
        return (
            <div className="row">
                <table>
                    <thead>
                        <th>

                        </th>
                    </thead>
                    <tbody>
                        {this.state.tableData.map((data, key) => (
                            <tr key={key}>
                                <td>
                                    <label>{data}</label>
                                </td>
                            </tr>))}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default Table