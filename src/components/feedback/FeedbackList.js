import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'
import { useNavigate } from 'react-router-dom'
import { FeedbackApi } from '../../api/feedbackApi'
import { ApiQueryKeys } from '../../constants/api.constants'
import AddButton from '../common/buttons/AddButton'
import FeedbackItem from './FeedbackItem'


const FeedbackList = ({ activeBtn, setActiveBtn }) => {
    const navigate = useNavigate()

    const { data } = useQuery({
        queryKey: [ApiQueryKeys.feedbacks],
        queryFn: () => FeedbackApi.getAll(),
        keepPreviousData: true
    })
    const feedbacksData = data?.filter(item => item.status === 'Suggestion') || []
    const [feedbacks, setFeedbacks] = useState(feedbacksData)
    console.log(feedbacksData)

    useEffect(() => {
        if (activeBtn !== 'All') {
            setFeedbacks(feedbacksData.filter(item => item.category === activeBtn))
        } else {
            setFeedbacks(feedbacksData)
        }
    }, [data, activeBtn])

    const handleNavigate = () => {
        navigate('/add-feedback')
    }
    return (
        <div>
            <div className='bg-[#373F68] text-white p-6 rounded-lg flex items-center mb-6'>
                <div className='flex-1'>
                    <p className='font-bold text-lg'>{feedbacks.length} Suggestions</p>
                </div>
                {/* <select></select> */}
                <AddButton handleNavigate={handleNavigate} />
            </div>
            {feedbacks.map((item) => {
                return (
                    <Fade bottom>
                        <FeedbackItem feedback={item} />
                    </Fade>
                )
            })}

        </div>

    )
}

export default FeedbackList