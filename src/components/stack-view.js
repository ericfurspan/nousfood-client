import React from 'react';
import { connect } from 'react-redux';
import Modal from './modal';
import ModalContainer from './modal-container';
import {fetchStack} from '../actions/user';
import Spinner from '../assets/images/spinner.gif';

class StackView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            loading: true
        }
    }
    componentWillMount() {
        this.props.dispatch(fetchStack(this.props.match.params.code, this.props.match.params.username))
        .then(data => {
            this.setState({loading: false, data: data})
        })
    }

    render() {
        if(this.state.loading) {
            return <img src={Spinner} id="spinner" alt="spinner"/>
        }
        return (
            <Modal 
                show={true}
                modalLevel="1"
            >
                <ModalContainer
                    header={<div className="modal-header">{this.props.stack.name}</div>}
                    type={"stack"}
                    data={this.props.stack}
                />
            </Modal>
        )
    }
}

const mapStateToProps = (state, props) => ({
    stack: state.user.shared.stack
})

export default connect(mapStateToProps)(StackView);

