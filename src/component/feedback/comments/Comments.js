import React from 'react'
import { Img } from "../../../Data/Img"
import AddComment from './AddComment'
import CommentItem from './CommentItem'

const Comments = ({ comments, selectedFeedback }) => {
    const repliesData = comments?.filter(item => item.replies)
    const repliesCount = repliesData?.reduce((a, c) => a + c?.replies.length, 0)
    const totalCount = (comments ? comments.length + repliesCount : 0)
    return (
        <>
            <div className='bg-white rounded-lg p-7 my-8 container mx-auto'>
                <p className='text-[#3A4374] font-bold text-lg'>{totalCount} Comments</p>
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