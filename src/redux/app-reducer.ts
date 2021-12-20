type initialStateType = {
    initialized: boolean
}
const appReducerInitialState = {
    initialized: false
}
type ActionsType = ReturnType<typeof initializedSuccess>
export const appReducer = (state: initialStateType = appReducerInitialState, action: ActionsType) => {
    switch(action.type){
        case "app/INITIALIZED-SUCCESS":
            return {...state, initialized: true}
        default:
            return state;
    }
}
export const initializedSuccess = () => {
    return {
        type: "app/INITIALIZED-SUCCESS",
    } as const
}
