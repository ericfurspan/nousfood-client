import React from 'react';
import { followNootropic, unFollowNootropic } from '../actions/user';
import { connect } from 'react-redux';
import Tooltip from './tooltip';
import { NLMContainer } from './nlm-container';

export class Nootropic extends React.Component {
    deSelectNoop = (code) => {
        this.props.onDeSelectNoop(this.props.data.code)
        this.props.exit()
    }
    selectNoop = (code) => {
        this.props.onSelectNoop(this.props.data.code)
        this.props.exit()
    }
    toggleFollow = (newNootropic) => {
        if(this.isNootropicFollowed(newNootropic.code)) {
            this.props.dispatch(unFollowNootropic(newNootropic))
        } else {
            this.props.dispatch(followNootropic(newNootropic))
        }
    }
    isNootropicFollowed = (code) => {
        let isFollowing = false;
        if(this.props.followedNootropics) {
            isFollowing = this.props.followedNootropics.find( nootropic => nootropic.code === code);
        }
        return isFollowing ? true : false
    }
    render() {
        let selectBtn, deselectBtn, toggleFollowButton, abstractContainer;
        if(this.props.selectable) {
            if(this.props.isSelected) {
                deselectBtn = <div onClick={() => this.deSelectNoop(this.props.data.code)} className="pointer red-hover"><i className="material-icons noop-select">remove_circle_outline</i></div>   
            } else {
                selectBtn = <div onClick={() => this.selectNoop(this.props.data.code)} className="pointer green-hover"><i className="material-icons noop-select">add_circle_outline</i></div>   
            }
        } else {    
            // if nootropic is already being followed, render followButton as highlighted
            if(this.isNootropicFollowed(this.props.data.code)) {
                toggleFollowButton = 
                <Tooltip
                    position={'top'}
                    message={'Unfollow'}
                >
                    <div onClick={() => this.toggleFollow(this.props.data)} className="pointer gold gray-hover"><i className="material-icons">star</i></div>    
                </Tooltip>

                abstractContainer =
                    <NLMContainer
                        data={this.props.nlmData}
                        name={this.props.data.name}
                    />
            } else {
                toggleFollowButton = 
                <Tooltip
                    position={'top'}
                    message={'Follow'}
                >
                    <div onClick={() => this.toggleFollow(this.props.data)} className="pointer gold-hover align-center"><i className="material-icons">star</i></div>   
                </Tooltip>
            }
        }

        return (
            <div className="nootropic align-left">
                <div className="how-to-take">
                    <h2>How to take:</h2>
                    <p>{this.props.data.how_to_take}</p>
                </div><br/>
                <div className="supports">
                    <h2>Supports:</h2>
                    <ul>
                        {this.props.data.supports.map( (element, index) => 
                            <li key={index}>{element}</li>
                        )}
                    </ul>
                </div><br/>
                <div className="notes">
                    <h2>Notes:</h2>
                    <ul>
                        {this.props.data.notes.map( (element, index) => 
                            <li key={index}>{element}</li>
                        )}
                    </ul>
                </div><br/>
                {abstractContainer}
                <div className="modal-btn-container">
                    {selectBtn}
                    {deselectBtn}
                    {toggleFollowButton}
                </div>
            </div>
        )
    }
}
  

const mapStateToProps = (state, props) => ({
    followedNootropics: state.user.followedNootropics,
    nlmData: state.nlm
})

export default connect(mapStateToProps)(Nootropic);

