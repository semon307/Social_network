import {AppStateType} from "./redux-store";

export const getUsersPage = (state: AppStateType) => {
    return state.usersPage
}