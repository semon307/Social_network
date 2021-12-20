import React, {ChangeEvent, useEffect} from "react";
import {useState} from "react";
import {ProfileType} from "../../../redux/profile-reducer";
type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}
export const ProfileStatus = (props: ProfileStatusPropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [title, setTitle] = useState<string>(props.status)
    useEffect(() => setTitle(props.status), [props.status])
    const onDoubleClickCallback = () => {
        setEditMode(true)
    }
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onBlurCallBack = () => {
        editMode && setEditMode(false)
        props.updateStatus(title)
    }
    return editMode
            ? <div><input title={title} onChange={onChangeCallback} onBlur={onBlurCallBack}/></div>
            : <div><span onDoubleClick={onDoubleClickCallback}>{title || "NO STATUS"}</span></div>

}