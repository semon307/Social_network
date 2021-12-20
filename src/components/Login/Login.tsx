import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {logInTC} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {maxLengthCreator, required} from "../../Utils/Validators/Validator";
import {Input} from "../common/FormsControls/FormsControls";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import s from "./Login.module.css"

type MapDispatchToPropsType = {
    logInTC: (email: string, password: string, rememberMe: boolean) => void
}
type mapStateToPropsType = {
    isAuth: boolean
}
type LoginPropsType = mapStateToPropsType & MapDispatchToPropsType
const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        // console.log(formData)
        props.logInTC(formData.login, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}
type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
const maxLength = maxLengthCreator(30)
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Login"} component={Input} name={"login"} validate={[required, maxLength]}/></div>
            <div><Field placeholder={"Password"} component={Input} name={"password"} validate={[required, maxLength]}/>
            </div>
            <div><Field component={"input"} type={"checkbox"} name={"rememberMe"}/>Remember me</div>
            {props.error ?
                <div className={s.formError}>{props.error}</div>
                : null}
            <div>
                <button>Submit</button>
            </div>

        </form>
    )
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
let LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm);
export default connect(mapStateToProps, {logInTC})(Login)
