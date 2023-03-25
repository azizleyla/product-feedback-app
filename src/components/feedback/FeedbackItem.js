import React from 'react'
import { FaComment } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { findCountComments } from '../../utils/helpers'

const FeedbackItem = ({ feedback }) => {

    const navigate = useNavigate();

    const handleNavigate = (feedback) => {
        navigate(`/feedback/${feedback.id}/detail`, {
            state: feedback
        })
    }
    return (
        <div className='bg-white rounded-lg p-7  mb-10'>
            <div className='flex'>
                <div className='flex flex-col  items-center justify-center bg-[#f2f4fe]  rounded-lg w-10 h-12'>
                    <MdKeyboardArrowDown />
                    <p className='text-[#3a4374] font-bold'>{feedback?.vote}</p>
                </div>

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