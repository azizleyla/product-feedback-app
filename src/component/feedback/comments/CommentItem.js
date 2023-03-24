import React from 'react'
import { Img } from '../../../Data/Img'

const CommentItem = ({ comment }) => {
    const { content, user, replies, img } = comment
    return (
        <div>
            <div className='flex mt-9 items-start'>
                <img className='w-12 h-12 object-cover mr-7 rounded-full' src={user?.img} alt="" />
                <div className='flex flex-col'>
                    <h4 className='font-bold text-[#3a4374] text-md'>{user.name}</h4>
                    <p className='text-[#647196]'>{user.username}</p>
                    <p>{content}</p>
                </div>
                <button className='ml-auto font-bold text-[#4661e6]'>Reply</button>
            </div>
            {replies && replies.map((reply) => (
                <div className='flex ml-20 mt-9 items-start'>
                    <img className='w-12 h-12 object-cover mr-7' src={reply.user?.img} alt="" />
                    <div className='flex flex-col'>
                        <h4 className='font-bold text-[#3a4374] text-md'>{reply.user.name}</h4>
                        <p className='text-[#647196]'>{reply.user.username}</p>
                        <p>{reply.content}</p>
                    </div>
                    <button className='ml-auto font-bold text-[#4661e6]'>Reply</button>
                </div>
            ))}

        </div>
    )
}

export default CommentItem