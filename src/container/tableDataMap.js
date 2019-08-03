import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import Table from "../components/table/table";

class tableDataMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const hash = window.location.hash;
        return (
            <div className="container-fluid">
                {hash == "#/table" ? (
                    <Table {...this.props} />
                ) : null}
            </div>

        );
    }
}

export function mapStateToProps(state) {
    return {
        tableDataMap: state.tableDataMap
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(tableDataMap);
