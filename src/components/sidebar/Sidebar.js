import React from 'react'
import FilterTabs from './tabs/FilterTabs'
import Roadmap from './Roadmap'

const Sidebar = ({ activeBtn, setActiveBtn }) => {



    return (
        <div className='flex-none w-64'>
            <div className='radical-bg flex flex-col justify-end text-white pb-5 pl-4 rounded-xl h-32'>
                <p className='text-lg font-bold'>Frontend Mentor</p>
                <p className='text-base font-medium'>Feedback Board</p>
            </div>
            <FilterTabs activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
            <Roadmap />
        </div>
    )
}

export default Sidebar