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


                                {/* -----------------------------------Template Created Successfully CREATE TEMPLATE-------------------------------- */}

                                {/* <div className="uploadTemlateDiv templateCreatedSuccessfully">
                                    <div className="top displayInline width100">
                                        <div className="col-md-12">
                                            <h6>Template created successfully</h6>
                                            <p>Do you Want to upload template now ?</p>
                                            <button type="button" className="downTempBtn displayBlock m-top-40"><span>Download Template</span><img src={download} className="imgHeight" /></button>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="col-md-12 pad-0">
                                            <div className="piImageModalMain">
                                                <div className="col-md-5 pad-0">
                                                    <div className="chooseFileBtn width_88" id="chooseImage">
                                                        <div>
                                                            <input type="file" className="imageChooser" multiple="multiple" size="5" />
                                                            <label className="chosenImage" >
                                                                Choose Image
                                                    </label>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20">
                                                                <path fill="#6629DB" fill-rule="evenodd" d="M10.502.472a5.736 5.736 0 0 0-4.485 2.817L.986 11.861a.667.667 0 1 0 1.15.675l5.031-8.572c1.216-2.071 3.824-2.787 5.864-1.628 2.04 1.158 2.707 3.713 1.491 5.784l-5.03 8.572-.378.643a2.747 2.747 0 0 1-3.74.982c-1.322-.751-1.757-2.358-.998-3.651l4.533-7.723.944-1.61a1.226 1.226 0 0 1 1.675-.437c.598.34.787 1.04.446 1.621l-5.1 8.688a.667.667 0 1 0 1.15.675l5.1-8.688c.706-1.203.278-2.765-.936-3.455-1.215-.69-2.78-.28-3.485.922l-.945 1.609-4.532 7.723c-1.125 1.916-.45 4.384 1.49 5.485 1.94 1.102 4.424.45 5.548-1.466l.378-.644 5.03-8.572c1.573-2.678.69-6.1-1.982-7.618a5.535 5.535 0 0 0-3.188-.704z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-7 pad-0">
                                                    <div className="uploadFile displayInline">
                                                        <label className="m0">Site master.xls</label>
                                                        <p>Note : Max upload size allowed <span>50mb</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="footerRight m-top-40">
                                                <button type="button" className="cancel">Upload Later</button>
                                                <button type="button" className="next">Upload & Sync</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>  */}

                                {/* -----------------------------------Template Created Successfully End-------------------------------- */}

            </div>
        );
    }

}

export default ProfileModal