import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import AddButton from '../common/buttons/AddButton';
import { Link, useNavigate, useParams } from 'react-router-dom';
import GoBackBtn from '../common/buttons/GoBackBtn';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { FeedbackApi } from '../../api/feedbackApi';
import { ApiQueryKeys } from "../../constants/api.constants"

const FeedbackForm = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { id } = useParams()


    const isEdit = !!id
    const { data } = useQuery({
        queryKey: [ApiQueryKeys.feedbacks],
        queryFn: () => FeedbackApi.getAll(),
        keepPreviousData: true
    })

    const selectedFeedback = data?.find(item => item.id === Number(id))


    const formik = useFormik({
        initialValues: {
            title: '',
            desc: "",
            category: "Feature",
            status: "Suggestion",

        },
        validationSchema: Yup.object({
            title: Yup.string().required("Can't be empty"),
            desc: Yup.string().required("Can't be empty"),


        }),
        onSubmit: values => {
            const data = {
                ...values,
                id: Number(id),
                vote: selectedFeedback?.vote ? selectedFeedback?.vote : 10,
                comments: selectedFeedback?.comments ? selectedFeedback.comments : [],


            }
            if (isEdit) {
                updateFeedbackMutation.mutate(data)
            } else {
                addFeedbackMutation.mutate(data)
            }


        },
    });


    const addFeedbackMutation = useMutation(FeedbackApi.addFeedback, {
        onSuccess: (data) => {
            navigate('/')
            queryClient.invalidateQueries([ApiQueryKeys.feedbacks])
        }
    })

    useEffect(() => {
        if (isEdit) {
            formik.setFieldValue('title', selectedFeedback?.title)
            formik.setFieldValue('desc', selectedFeedback?.desc)
            formik.setFieldValue("category", selectedFeedback?.category)
            formik.setFieldValue("status", selectedFeedback?.status)
        }
    }, [id, data])

    const updateFeedbackMutation = useMutation(FeedbackApi.updateComments, {
        onSuccess: () => {
            navigate('/')
            queryClient.invalidateQueries([ApiQueryKeys.feedbacks])
        }
    })

    const deleteFeedbackMutation = useMutation(FeedbackApi.deleteFeedback, {
        onSuccess: () => {
            queryClient.resetQueries([ApiQueryKeys.feedbacks]);
            navigate('/')
        }
    })
    const handleDelete = (id) => {
        deleteFeedbackMutation.mutate(id)
    }


    return (
        <div className='container mx-auto max-w-[600px] py-6  '>
            <GoBackBtn />
            <div className='relative mt-12 bg-white rounded-lg p-6'>
                <button className='rounded-full h-14 w-14 text-white -top-6 left-7 flex items-center justify-center radical-bg absolute'>
                    <FaPlus />
                </button>
                <h4 className='text-[#3a4374] font-bold text-xl mt-6'>
                    {isEdit ? `Editing "${selectedFeedback?.title}"` : 'Create New Feedback'}
                </h4>
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
                        {formik.touched.title && <span className='text-red-600 text-sm'>{formik.errors.title}</span>}

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
                            <option value="UI">UI</option>
                            <option value="UX">UX</option>
                            <option value="Enhancement">Enhancement</option>
                            <option value="Bug">Bug</option>
                        </select>

                    </div>
                    {isEdit && <div className='my-6'>
                        <label htmlFor="title">
                            <span className='text-[#3A4374] font-bold text-sm'>Update Status</span>
                            <br />
                            <span className='text-[#647196] text-sm'>Change feature state</span>
                        </label>

                        <select
                            className='bg-[#F7F8FD] rounded-md h-12 w-full outline-none mt-4 pl-4 cursor-pointer text-[#3A4374] text-base font-normal'
                            id="status"
                            name="status"

                            onChange={formik.handleChange}
                            value={formik.values.status}
                        >
                            <option value="Suggestion">Suggestion</option>
                            <option value="Planned">Planned</option>
                            <option value="In-Progress">In-Progress</option>
                            <option value="Live">Live</option>

                        </select>

                    </div>}

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
                        {formik.touched.desc && <span className='text-red-600 text-sm'>{formik.errors.desc}</span>}


                    </div>
                    <div className='flex justify-end mt-8 gap-4'>
                        {isEdit && <button onClick={() => handleDelete(id)} className='mr-auto text-white bg-[#D73737] rounded-md py-2 px-4'>Delete</button>}
                        <Link to="/" className='bg-[#3a4374] text-white rounded-md  py-3 px-6 font-bold'>Cancel</Link>
                        <AddButton isEdit={isEdit} />
                    </div>
                </form>


            </div>
        </div>
    )
}

export default FeedbackForm