import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import Playground from "../components/game/playground";

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const hash = window.location.hash;
        return (
            <div className="container-fluid">
                {hash == "#/playgound" ? (
                    <Playground {...this.props} />
                ) : null}
            </div>

        );
    }
}

export function mapStateToProps(state) {
    return {
        game: state.game
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
