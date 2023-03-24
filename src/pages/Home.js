import React, { useState } from 'react'
import FeedbackList from '../component/feedback/FeedbackList'
import Sidebar from '../component/sidebar/Sidebar'

const Home = () => {
    const [activeBtn, setActiveBtn] = useState('All')
    return (
        <div className='flex container gap-10 mt-4'>
            <Sidebar setActiveBtn={setActiveBtn} activeBtn={activeBtn} />
            <div className='flex-1 max-w-[825px]'>
                <FeedbackList setActiveBtn={setActiveBtn} activeBtn={activeBtn} />
            </div>

        </div>
    )
}

export default Home