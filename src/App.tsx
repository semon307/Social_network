import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {setAuthUserDataTC} from "./redux/auth-reducer";
import {Preloader} from "./components/common/preloader/Preloader";

const DialogsContainer = React.lazy(() => import ("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))

const App: React.FC = () => {
    const dispatch = useDispatch();
    const initialized = useSelector<AppStateType, boolean>(state => state.app.initialized)
    useEffect(() => {
        dispatch(setAuthUserDataTC())
    }, [])
    return (
        initialized
            ? <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">

                    <Route path="/profile/:userId?"
                           render={() => {
                               return <React.Suspense fallback={<Preloader/>}>
                                   <ProfileContainer/>
                               </React.Suspense>
                           }}/>
                    <Route path="/dialogs" render={() => {
                        return <React.Suspense fallback={<Preloader/>}> <DialogsContainer/>
                        </React.Suspense>
                    }}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route exact path="/news" component={News}/>
                    <Route exact path="/music" component={Music}/>
                    <Route exact path="/login" component={Login}/>
                </div>
            </div>
            : <Preloader/>
    );
}


export default App;
