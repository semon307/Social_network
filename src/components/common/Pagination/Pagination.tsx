import React from "react";
import s from "../../Users/Users.module.css";
import {setCurrentPage} from "../../../redux/users-reducer";
type PaginationPropsType = {
    totalCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
}
export const Pagination: React.FC<PaginationPropsType> = (props) => {
    const onNextPageCallback = () => {
        props.onPageChanged(props.currentPage + 1)
    }
    const onPreviousPageCallback = () => {
        props.onPageChanged(props.currentPage - 1)
    }
    let pagesCount = Math.ceil(props.totalCount /props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let pagesForRender = [1];
    for (let i = props.currentPage; i <= props.currentPage + 5; i++){
        if (pagesForRender[0] === i) continue;
        if ( i > pagesCount) break;
        pagesForRender.push(i)
    }
    // if (props.currentPage === props.totalCount - 1){
    //     // pagesForRender.push(props.totalCount)
    // } else if (props.currentPage === props.totalCount){
    //
    // }
    if (props.currentPage !== pagesCount - 1 && props.currentPage !== pagesCount) {
        pagesForRender = [...pagesForRender, pagesCount - 1, pagesCount];
    }

    return (
        <div>
            {1 !== props.currentPage ? <button onClick={onPreviousPageCallback}>Previous</button> : null}
            {pagesForRender.map(p => {
                return <span
                    onClick={() => {
                        props.onPageChanged(p)
                    }}
                    className={props.currentPage === p ? s.selectedPage : s.page}>
                            {p}
                        </span>
            })}
            {props.currentPage !== pagesCount ? <button onClick={onNextPageCallback}>Next</button> : null}
        </div>
    )
}