import React from "react"

class ProfileModal extends React.Component {
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
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1>{this.props.valueProps}</h1>
                        </div>
                        <div className="modal-body">
                            <div className="col-md-12">
                                <input type="file" onChange={(e) => this.fileChange(e)} />
                            </div>
                            <div className="col-md-12 col-xs-12">
                                {Object.values(this.state.file).map((data, key) => (
                                    <div key={key} className="col-md-4 imageMap">
                                        <img src={URL.createObjectURL(data)} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="footer">
                            <div className="">
                                <button type="button" onClick={() => this.props.closeProModal()}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ProfileModal