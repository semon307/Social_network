import React, {Component, ComponentType} from "react";
import {AppStateType} from "../redux/redux-store";
import {ProfileType} from "../redux/profile-reducer";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

type mapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
export function withAuthRedirect <T>(Component: ComponentType<T>){
    function RedirectComponent(props: mapStateToPropsType) {
        let {isAuth, ...restProps} = props;
        if (!props.isAuth) return <Redirect to={"/login"}/>;
        return <Component {...restProps as T}/>
    }

    let RedirectedComponent = connect(mapStateToProps)(RedirectComponent)
    return RedirectedComponent

}