import React, { useState } from 'react'

const tabButtons = [
    {
        id: 0,
        label: "All"
    },
    {
        id: 1,
        label: "UI"
    },
    {
        id: 2,
        label: "UX"
    },
    {
        id: 3,
        label: "Enhancement"
    },

    {
        id: 4,
        label: "Bug"
    },
    {
        id: 5,
        label: "Feature"
    },

]

const FilterTabs = ({ activeBtn, setActiveBtn }) => {

    return (
        <div className='bg-white rounded-lg flex flex-wrap gap-4 p-6 my-6'>
            {/* <button onClick={() => setActiveBtn('All')} className={` ${'All' === activeBtn ? 'bg-[#4661e6] text-white' : 'bg-[#f2f4fe]  text-[#4661E6] '} rounded-lg py-1 px-4 font-semibold`}>All</button> */}
            {tabButtons.map((item) => (
                <button onClick={() => setActiveBtn(item.label)} className={` ${item.label === activeBtn ? 'bg-[#4661e6] text-white' : 'bg-[#f2f4fe]  text-[#4661E6] '} rounded-lg py-1 px-4 font-semibold`} key={item.id}>{item.label}</button>
            ))}

        </div>
    )
}

export default FilterTabs