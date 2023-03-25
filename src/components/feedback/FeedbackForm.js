import React from 'react'
import { FaPlus } from 'react-icons/fa'

import { useFormik } from 'formik';
import AddButton from '../common/buttons/AddButton';
import { Link } from 'react-router-dom';
import GoBackBtn from '../common/buttons/GoBackBtn';

const FeedbackForm = () => {
    const formik = useFormik({
        initialValues: {
            title: '',
            desc: ""
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className='container mx-auto max-w-[600px] py-6  '>
            <GoBackBtn />
            <div className='relative mt-12 bg-white rounded-lg p-6'>
                <button className='rounded-full h-14 w-14 text-white -top-6 left-7 flex items-center justify-center radical-bg absolute'>
                    <FaPlus />
                </button>
                <h4 className='text-[#3a4374] font-bold text-xl mt-6'>Create New Feedback</h4>
                <form onSubmit={formik.handleSubmit} className="mt-10">
                    <div>
                        <label htmlFor="title">
                            <span className='text-[#3A4374] font-bold text-sm'>Feedback Title</span>
                            <br />
                            <span className='text-[#647196] text-sm'>Add a short, descriptive headline</span>
                        </label>
                        <input
                            className='bg-[#F7F8FD] rounded-md h-12 w-full outline-none mt-4 pl-4'
                            id="title"
                            name="title"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.title}
                        />
                    </div>
                    <div className='my-6'>
                        <label htmlFor="title">
                            <span className='text-[#3A4374] font-bold text-sm'>Category</span>
                            <br />
                            <span className='text-[#647196] text-sm'>Choose a category for your feedback</span>
                        </label>

                        <select
                            className='bg-[#F7F8FD] rounded-md h-12 w-full outline-none mt-4 pl-4 cursor-pointer text-[#3A4374] text-base font-normal'
                            id="category"
                            name="category"
                            onChange={formik.handleChange}
                            value={formik.values.category}
                        >
                            <option value="Feature">Feature</option>
                            <option value="Feature">UI</option>
                            <option value="Feature">UX</option>
                            <option value="Feature">Enhancement</option>
                            <option value="Feature">Bug</option>
                        </select>
                    </div>
                    <div>

                        <label htmlFor="title">
                            <span className='text-[#3A4374] font-bold text-sm'>Feedback Detail</span>
                            <br />
                            <span className='text-[#647196] text-sm'> Include any specific comments on what should be improved, added, etc.</span>
                        </label>
                        <textarea
                            className='bg-[#F7F8FD] rounded-md h-24 resize-none p-4 w-full outline-none mt-4 pl-4'
                            id="desc"
                            name="desc"

                            onChange={formik.handleChange}
                            value={formik.values.desc}
                        />
                    </div>
                    <div className='flex justify-end mt-8 gap-4'>
                        <Link to="/" className='bg-[#3a4374] text-white rounded-md  py-3 px-6 font-bold'>Cancel</Link>
                        <AddButton />
                    </div>
                </form>


            </div>
        </div>
    )
}

export default FeedbackForm