import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const AddButton = ({ handleNavigate, isEdit }) => {

    return (

        <button type="submit" onClick={handleNavigate} className='bg-[#AD1FEA] text-white  font-semibold flex gap-1 items-center py-3 px-6 rounded-lg'>
            {!isEdit && <FaPlus />}

            {isEdit ? "Save Changes" : "Add Feedback"}

        </button>

    )
}

export default AddButton