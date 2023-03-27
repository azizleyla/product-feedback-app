import React, { useState } from 'react'
import { Img } from '../../Data/Img'
import PostReply from './PostReply'

const CommentItem = ({ comment }) => {
    const { content, user, replies, img, id } = comment
    console.log(comment)
    const [isShowReplyBox, setIsShowReplyBox] = useState(false)
    const [isShowCommentBox, setIsShowCommentBox] = useState(false)
    const [selectedCommentId, setSelectedCommentId] = useState('')
    const [selectedReplyId, setSelectedReplyId] = useState('')

    return (
        <div>
            <div className='flex mt-9 items-start'>
                <img className='w-12 h-12 object-cover mr-7 rounded-full' src={user?.img} alt="" />
                <div className='flex flex-col'>
                    <h4 className='font-bold text-[#3a4374] text-md'>{user.name}</h4>
                    <p className='text-[#647196]'>{user.username}</p>
                    <p>{content}</p>
                    {isShowCommentBox && id === selectedCommentId && <PostReply commentId={selectedCommentId} />}

                </div>
                <button onClick={() => {
                    setIsShowCommentBox(!isShowCommentBox)
                    setSelectedCommentId(id)
                }
                } className='ml-auto font-bold text-[#4661e6]'>Reply</button>
            </div>
            {replies && replies?.map((reply) => (
                <>
                <div className='ml-20'>
                    <div className='flex  mt-9 items-start'>
                        <img className='w-12 h-12 object-cover mr-7' src={reply.user?.img} alt="" />
                        <div className='flex flex-col'>
                            <h4 className='font-bold text-[#3a4374] text-md'>{reply?.user?.name}</h4>
                            <p className='text-[#647196]'>{reply?.user?.username}</p>
                            <p>{reply?.content}</p>
                            {isShowReplyBox && reply?.id === selectedReplyId && <PostReply commentID={reply?.commentId} replyId={reply?.id} />}
                        </div>
                        <button onClick={() => {

                            setIsShowReplyBox(!isShowReplyBox);
                            setSelectedReplyId(reply?.id)

                        }} className='ml-auto font-bold text-[#4661e6]'>Reply</button>

                    </div>

                </div>
             {reply?.replies && reply?.replies.map((item) =>(
        <div className='ml-28'>
                    <div className='flex  mt-9 items-start'>
                        <img className='w-12 h-12 object-cover mr-7' src={item.user?.img} alt="" />
                        <div className='flex flex-col'>
                            <h4 className='font-bold text-[#3a4374] text-md'>{item?.user?.name}</h4>
                            <p className='text-[#647196]'>{item?.user?.username}</p>
                            <p>{item?.content}</p>
                            {isShowReplyBox && reply?.id === selectedReplyId && <PostReply commentID={item?.commentId} replyId={item?.id} />}
                        </div>
                        <button onClick={() => {

                            setIsShowReplyBox(!isShowReplyBox);
                            setSelectedReplyId(reply?.id)

                        }} className='ml-auto font-bold text-[#4661e6]'>Reply</button>

                    </div>

                </div>
    ))}
              
                </>
            ))}

        </div>
    )
}

export default CommentItem