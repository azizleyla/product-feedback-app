import React from 'react'

const roadmaps = [
    {
        id: 1,
        status: "Planned",
        count: 2
    },
    {
        id: 2,
        status: "In Progress",
        count: 3
    },
    {
        id: 3,
        status: "Live",
        count: 1
    }
]

const Roadmap = () => {
    return (
        <div className='bg-white rounded-lg py-5 px-6'>
            <div className='flex justify-between mb-6'>
                <h4 className='font-bold text-[#3a4374] text-lg'>Roadmap</h4>
                <button className='underline text-[#4661e6] opacity-25 hover:opacity-100'>View</button>
            </div>
            {roadmaps.map((item) => (
                <div key={item.id} className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <div className={`w-2 h-2 rounded-full ${item.id == 1 ? "bg-[#f49f85]" : item.id === 2 ? "bg-[#ad1fea]" : "bg-[#62bcfa]"} `}> </div>
                        <p className='text-[#647196]'>{item.status}</p>
                    </div>
                    <p className='text-[#617496] font-bold text-base'>{item.count}</p>
                </div>
            ))
            }


        </div >
    )
}

export default Roadmap