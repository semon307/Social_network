import React from "react";
import s from "./FormsControls.module.css"
export const TextArea = ({input, meta, ...restProps}: any) => {
    console.log(restProps)
    console.log(input)
    console.log(meta)
    const hasError = meta.touched && meta.error
    const style = hasError ? `${s.formControl} ${s.error}` : `${s.formControl}`
    return (
        <div className={style}>
            <div>
                <textarea {...input} {...restProps}/>
            </div>
            <div>
                <span>{hasError || null}</span>
            </div>
        </div>
    )
}
export const Input = ({input, meta, ...restProps}: any) => {
    const hasError = meta.touched && meta.error
    const style = hasError ? `${s.formControl} ${s.error}` : `${s.formControl}`
    return (
        <div className={style}>
            <div>
                <input{...input} {...restProps}/>
            </div>
            <div>
                <span>{hasError || null}</span>
            </div>
        </div>
    )
}