import React from 'react'
import { FaComment } from 'react-icons/fa'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { findCountComments } from '../../utils/helpers'

const ProgressFeedbacks = ({ feedbacks }) => {
    return (
        <div>
            <h4 className='font-bold text-[#3A4374] text-md'>In-Progress ({feedbacks?.length})</h4>
            <p className='text-sm text-[#647196]'>Currently being developed</p>
            {feedbacks?.map((item) => (
                <div className='bg-white min-h-[250px] rounded-lg p-6 w-[350px] mt-8 border-t-[6px] border-[#ad1fea]'>
                    <div className='flex items-center gap-4 mb-2'>
                        <div className="w-2 h-2 rounded-full  bg-[#ad1fea]"> </div>
                        <p className='text-[#647196]'>{item.status}</p>
                    </div>
                    <Link to={`/feedback/${item.id}/detail`} className="text-[#3A4374] font-bold hover:text-[#4661e6]">
                        {item.title}</Link>
                    <p className='text-[#647196] text-sm'>{item.desc}</p>
                    <div className='bg-[#f2f4fe] text-[#4661e6] font-semibold w-28 flex items-center text-sm py-1 justify-center rounded-[10px] mt-3'>{item.category}</div>
                    <div className='flex justify-between mt-6 items-center'>
                        <div className='flex  gap-2 items-center justify-center bg-[#f2f4fe]  rounded-lg w-[70px] h-10'>
                            <MdKeyboardArrowUp className='text-[#4661E6] font-bold' />
                            <p className='text-[#3a4374] font-bold'>{item.vote}</p>
                        </div>
                        <div className='flex items-center ml-auto gap-1'>
                            <FaComment className='text-[#cdd2ee]' />
                            <span>{findCountComments(item?.comments)}</span>
                        </div>


                    </div>

                </div>
            ))}

        </div>
    )
}

export default ProgressFeedbacks