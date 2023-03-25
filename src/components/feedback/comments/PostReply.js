import React from 'react'

const PostReply = () => {
    return (
        <div className='flex justify-between w-full items-start my-6 '>
            <textarea className='bg-[##F7F8FD]  min-w-[400px]  rounded-md border-2 bg-[#f7f8fd] focus:border-2 focus:border-[#4661e6] resize-none outline-none w-[80%] h-20 p-4 '></textarea>
            <button className='bg-[#AD1FEA] text-white rounded-lg py-3 px-6'>Post Reply</button>
        </div >
    )
}

export default PostReply