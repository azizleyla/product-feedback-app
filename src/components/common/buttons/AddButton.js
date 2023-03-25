import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const AddButton = ({ handleNavigate }) => {

    return (

        <button onClick={handleNavigate} className='bg-[#AD1FEA] text-white  font-semibold flex gap-1 items-center py-3 px-6 rounded-lg'>
            <FaPlus />
            Add Feedback</button>

    )
}

export default AddButton