import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate()

    if (user) {
        console.log(user)
    }


    let signinError;
    if (loading || gloading || updating) {
        return <Loading></Loading>
    }


    if (error || gerror || updateError) {
        signinError = <p>{error?.message || gerror.message || updateError.message}</p>
    }

    const onSubmit = async (data) => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        console.log('update done')
        navigate('/appointment')
        reset();
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className='shadow-2xl p-6'>
                <h1 className='text-center font-medium'>SignUp</h1>
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
                        <label className="label-text my-2 text-gray-700">password</label>
                        <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border rounded border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none mb-2" {...register("password", {
                            required: {
                                value: true,
                                message: "password is Require"
                            },
                            minLength: {
                                value: 6,
                                message: 'Must be 6 characters or longer'
                            }
                        })} />
                        {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                    </div>

                    <p className='text-red-500'><small>{signinError}</small></p>
                    <button type="submit" className="btn btn-sm w-full mt-3">SignUp</button>
                </form>

                <p className='text-xs my-2'>Already have an account? <Link className='text-green-600' to="/login">Please Login</Link></p>

                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className="btn btn-sm btn-outline">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Signup;