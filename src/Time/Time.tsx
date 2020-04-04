import React, {Component} from 'react';
import {connect} from "react-redux";
import {RouteComponentProps} from "react-router";
import {withRouter} from "react-router-dom";
import {AppStateType} from "../store";
import moment from "moment"

type MatchParams = {

}
type MapStateType = {

}
type MapDispatchType = {

}
type PropsType = MapDispatchType & MapStateType & RouteComponentProps<MatchParams>

class Time extends Component<PropsType> {
    now = moment().format('HH:mm:ss');
    render() {
        return (
            <div>
                Time
                {this.now}
            </div>
        );
    }
}

const mstp = (state: AppStateType): MapStateType => ({
})


let WithRouterNewPassContainer = withRouter(Time);
export default connect(mstp, {})(WithRouterNewPassContainer)