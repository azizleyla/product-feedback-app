import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { FeedbackApi } from '../../../api/feedbackApi'
import { ApiQueryKeys } from '../../../constants/api.constants'

const AddComment = ({ selectedFeedback }) => {
    const [content, setContent] = useState("")
    let limit = 250
    const queryClient = useQueryClient()

    const updateCommentMutation = useMutation(FeedbackApi.updateComments, {
        onSuccess: (data) => {
            queryClient.resetQueries([ApiQueryKeys.feedbacks])
            setContent("")
        }
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        const commentObj = {
            id: crypto.randomUUID(),
            user: {
                name: "Leyla Aziz",
                username: "@leylaziz",
                img: ""
            },
            content: content

        }
        const a = selectedFeedback.comments.push(commentObj)
        console.log(commentObj)
        const data = {
            ...selectedFeedback, comments: selectedFeedback.comments
        }

        updateCommentMutation.mutate(data)
    }


    // updateCommentMutation({id,data})




    return (
        <div className='bg-white p-6 rounded-lg'>
            <h4 className='font-bold text-[#3a4374]'>Add Comment</h4>
            <form onSubmit={handleSubmit}>
                <textarea value={content} onChange={(e) => setContent(e.target.value.slice(0, limit))} className='bg-[##F7F8FD]  rounded-md border-2 bg-[#f7f8fd] focus:border-2 focus:border-[#4661e6] resize-none outline-none w-full h-20 p-4 my-6' placeholder='Enter your comment here..' />
                <div className='flex justify-between items-center'>
                    <span className={`${content.length > 220 ? "text-red-700" : "text-[#647196]"} text-md`} >{limit - content.length} characters left</span>
                    <button type='submit' className='bg-[#ad1fea] hover:bg-[#C75AF6] text-white py-3 px-6 font-bold rounded-xl'>Post Comment</button>
                </div>
            </form>
        </div >
    )
}

export default AddComment