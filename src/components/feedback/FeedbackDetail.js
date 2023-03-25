import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { FaAngleLeft } from 'react-icons/fa';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { FeedbackApi } from '../../api/feedbackApi';
import { ApiQueryKeys } from '../../constants/api.constants';
import GoBackBtn from '../common/buttons/GoBackBtn';
import Comments from './comments/Comments';
import FeedbackItem from './FeedbackItem';

const FeedbackDetail = () => {
    const { id } = useParams()


    const { data: selectedFeedback } = useQuery({
        queryKey: [ApiQueryKeys.feedbacks, id],
        queryFn: () => FeedbackApi.getById(id)
    })


    const navigate = useNavigate()
    return (
        <div className='container mx-auto mt-7 max-w-[1000px]'>
            <div className='flex justify-between mb-6'>
                <GoBackBtn />
                <Link to={`/edit/feedback/${id}`} className='rounded-lg bg-[#4661E6] text-white py-3 px-6 hover:bg-[#7C91F9]'>Edit Feedback</Link>
            </div>

            <FeedbackItem feedback={selectedFeedback} />
            <Comments selectedFeedback={selectedFeedback} comments={selectedFeedback?.comments} />
        </div>
    )
}

export default FeedbackDetail