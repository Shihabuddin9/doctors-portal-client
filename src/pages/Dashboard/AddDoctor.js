import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import { toast } from 'react-toastify';


const AddDoctor = () => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/services').then(res => res.json()))


    const imageStorageKey = 'eea98a93a5fbc1386b006cb47c7310e7'


    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }
                    // send to your database 
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log(inserted)
                            if (inserted.insertedId) {
                                toast.success('Doctor added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the doctor');
                            }
                        })
                }

            })

    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-3/5'>
                <h1 className='text-2xl'>Add a new Doctor</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Name</label>
                        <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border rounded border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none mb-2" {...register("name", {
                            required: {
                                value: true,
                                message: "name is Require"
                            }

                        })} />
                        {errors.name?.type === 'required' && <span className='label-text-alt text-red-500 inline-block'>{errors.name.message}</span>}
                    </div>

                    <div>
                        <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Email</label>
                        <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border rounded border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none mb-2" {...register("email", {
                            required: {
                                value: true,
                                message: "Email is Require"
                            },
                            pattern: {
                                value: /[A-Za-z]{3}/,
                                message: 'Provider a valid Email'
                            }
                        })} />
                        {errors.email?.type === 'required' && <span className='label-text-alt text-red-500 inline-block'>{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500 inline-block'>{errors.email.message}</span>}
                    </div>

                    <div>

                        <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Specialty</label>

                        <select {...register("specialty")} class="select form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border rounded border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none mb-2">
                            {
                                services.map(service => <option
                                    key={service._id}
                                    value={service.name}
                                >{service.name}</option>)
                            }
                        </select>
                    </div>

                    <div>
                        <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Photo</label>
                        <input type="file" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border rounded border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none mb-2 cursor-pointer" {...register("image", {
                            required: {
                                value: true,
                                message: "image is Require"
                            }

                        })} />
                        {errors.name?.type === 'required' && <span className='label-text-alt text-red-500 inline-block'>{errors.name.message}</span>}
                    </div>


                    <button type="submit" className="btn btn-sm w-full mt-3">ADD</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;