import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const GoBackBtn = () => {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate(-1)} className='font-bold text-[#647196] flex items-center gap-1'>
            <FaAngleLeft />
            Go Back</button>
    )
}

export default GoBackBtn