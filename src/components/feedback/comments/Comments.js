import React from 'react'
import { findCountComments } from '../../../utils/helpers'
import { Img } from "../../Data/Img"
import AddComment from './AddComment'
import CommentItem from './CommentItem'

const Comments = ({ comments, selectedFeedback }) => {

    return (
        <>
            <div className='bg-white rounded-lg p-7 my-8 container mx-auto'>
                <p className='text-[#3A4374] font-bold text-lg'>{findCountComments(comments)} Comments</p>
                {comments?.map((item) => (
                    <CommentItem key={item.id} comment={item} />
                ))
                }
            </div >
            <AddComment selectedFeedback={selectedFeedback} />
        </>
    )
}

export default Comments