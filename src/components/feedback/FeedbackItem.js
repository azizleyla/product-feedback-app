import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { FaComment } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { FeedbackApi } from '../../api/feedbackApi'
import { ApiQueryKeys } from '../../constants/api.constants'
import { findCountComments } from '../../utils/helpers'

const FeedbackItem = ({ feedback }) => {

    const navigate = useNavigate();

    const handleNavigate = (feedback) => {
        navigate(`/feedback/${feedback.id}/detail`, {
            state: feedback
        })
    }
    const queryClient = useQueryClient()
    const updateMutation = useMutation(FeedbackApi.updateComments, {
        onSuccess: () => {
            queryClient.invalidateQueries([ApiQueryKeys.feedbacks])
        }
    })

    const handleUpvote = (id) => {

        const data = {
            ...feedback,
            isUpvoted: !feedback?.isUpvoted,
            vote: feedback?.isUpvoted ? feedback?.vote - 1 : feedback?.vote + 1
        }
        updateMutation.mutate(data)
    }

    return (
        <div className='bg-white rounded-lg p-7  mb-10'>
            <div className='flex'>
                <button onClick={() => handleUpvote(feedback?.id)} className={`flex flex-col font-bold  items-center justify-center ${feedback?.isUpvoted ? "bg-[#4661E6] text-white" : "bg-[#f2f4fe] text-[#3a4374]"}  rounded-lg w-10 h-12`}>
                    <MdKeyboardArrowDown />
                    <p className=''>{feedback?.vote}</p>
                </button>

                <div className='flex flex-col ml-10'>
                    <p onClick={() => handleNavigate(feedback)} className='cursor-pointer hover:text-[#4661E6] text-[#3a4374] font-bold text-lg'>{feedback?.title}</p>
                    <p className='text-[#647196] font-normal text-base'>{feedback?.desc}</p>
                    <div className='bg-[#f2f4fe] text-[#4661e6] font-semibold w-28 flex items-center justify-center rounded-lg mt-3'>{feedback?.category}</div>
                </div>
                <div className='flex items-center ml-auto gap-1'>
                    <FaComment className='text-[#cdd2ee]' />
                    <span>{findCountComments(feedback?.comments)}</span>
                </div>
            </div>
        </div >
    )
}

export default FeedbackItem