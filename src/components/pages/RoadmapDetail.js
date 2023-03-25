import React from 'react'
import AddButton from '../common/buttons/AddButton'
import { FaAngleLeft, FaComment } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { useQuery } from '@tanstack/react-query'
import { ApiQueryKeys } from '../../constants/api.constants'
import { FeedbackApi } from '../../api/feedbackApi'
import PlannedFeedback from '../feedback/PlannedFeedback'
import LiveFeedback from '../feedback/LiveFeedback'
import ProgressFeedbacks from '../feedback/ProgressFeedback'

const RoadmapDetail = () => {
    const navigate = useNavigate()
    const { data } = useQuery({
        queryKey: [ApiQueryKeys.feedbacks],
        queryFn: () => FeedbackApi.getAll(),
        keepPreviousData: true
    })
    const handleNavigate = () => {
        navigate('/add-feedback')
    }
    const plannedFeedbacks = data?.filter(item => item.status === 'Planned')
    const liveFeedbacks = data?.filter(item => item.status === 'Live');
    const progressFeedbacks = data?.filter(item => item.status === 'In-Progress');

    return (
        <div className='container mx-auto'>
            <div className='bg-[#373F68] h-28 p-7 rounded-lg mt-10'>

                <div className='flex justify-between items-center'>
                    <div className='flex flex-col'>
                        <button onClick={() => navigate(-1)} className='text-white flex gap-1 items-center'>
                            <FaAngleLeft />
                            Go Back</button>
                        <h4 className='text-white text-xl font-bold mt-2'>Roadmap</h4>
                    </div>
                    <AddButton handleNavigate={handleNavigate} />
                </div>
            </div>


            <div className='flex justify-between text-left mt-10'>
                <PlannedFeedback feedbacks={plannedFeedbacks} />
                <ProgressFeedbacks feedbacks={progressFeedbacks} />
                <LiveFeedback feedbacks={liveFeedbacks} />



            </div>


        </div>
    )
}

export default RoadmapDetail