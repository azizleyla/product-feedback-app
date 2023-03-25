import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'
import { FeedbackApi } from '../../api/feedbackApi'
import { ApiQueryKeys } from '../../constants/api.constants'

const roadmaps = [
    {
        id: 1,
        status: "Planned",

    },
    {
        id: 2,
        status: "In Progress",

    },
    {
        id: 3,
        status: "Live",

    }
]

const Roadmap = () => {

    const { data } = useQuery({
        queryKey: [ApiQueryKeys.feedbacks],
        queryFn: () => FeedbackApi.getAll(),
        keepPreviousData: true
    })
    const plannedCount = data?.filter(item => item.status === 'Planned').length;
    const inProgressCount = data?.filter(item => item.status === 'In-Progress').length;
    const liveCount = data?.filter(item => item.status === 'Live').length

    return (
        <div className='bg-white rounded-lg py-5 px-6'>
            <div className='flex justify-between mb-6'>
                <h4 className='font-bold text-[#3a4374] text-lg'>Roadmap</h4>
                <Link to="/roadmap" className='underline text-[#4661e6] opacity-25 hover:opacity-100'>View</Link>
            </div>
            {roadmaps.map((item) => (
                <div key={item.id} className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <div className={`w-2 h-2 rounded-full ${item.id === 1 ? "bg-[#f49f85]" : item.id === 2 ? "bg-[#ad1fea]" : "bg-[#62bcfa]"} `}> </div>
                        <p className='text-[#647196]'>{item.status}</p>
                    </div>
                    <p className='text-[#617496] font-bold text-base'>
                        {item.id === 1 ? plannedCount : item.id === 2 ? inProgressCount : liveCount}

                    </p>
                </div>
            ))
            }


        </div >
    )
}

export default Roadmap