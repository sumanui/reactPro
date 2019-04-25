import React from "react"

class ProfileModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

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
                            <div className="">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="footer">
                            <div className="">
                                <button type="button" onClick={()=> this.props.closeProModal()}>
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