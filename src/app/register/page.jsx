'use client'
import { RegisterAction } from '@/util/Actions/RegisterAction';
import { Button } from 'keep-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from "react-hook-form"
const Register = () => {
    const router= useRouter()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit = async(data) => {
        const user={
         name:data.name,
         email:data.email,
         photo:data.photo,
         password:data.password
        }
        const res = await RegisterAction(user)
          if (res.status===true) {
            router.push('/login')
            alert('registation complete please login')
          }
        console.log(user);
        
      }
    return (
        <div>
            <div>
                <div>
                    <div className="flex flex-col justify-center items-center bg-white h-[100vh]">
                        <div
                            className="mx-auto flex w-full flex-col justify-center px-5 pt-0 md:h-[unset] md:max-w-[50%] lg:h-[100vh] min-h-[100vh] lg:max-w-[50%] lg:px-6">

                            <div
                                className="my-auto mb-auto mt-8 flex flex-col md:mt-[70px] w-[350px] max-w-[450px] mx-auto md:max-w-[450px] lg:mt-[130px] lg:max-w-[450px]">
                                <p className="text-[32px] font-bold text-zinc-950 dark:text-white">Register</p>
                                <p className="mb-2.5 mt-2.5 font-normal text-zinc-950 dark:text-zinc-400">Enter your email and password
                                    to Register!</p>
                                <div className="relative my-4">
                                    <div className="relative flex items-center py-1">
                                        <div className="grow border-t border-zinc-200 dark:border-zinc-700"></div>
                                        <div className="grow border-t border-zinc-200 dark:border-zinc-700"></div>
                                    </div>
                                </div>
                                <div>
                                    <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
                                        <div className="grid gap-2">
                                            <div className="grid gap-1">
                                                <label className="text-zinc-950 dark:text-white">Name</label>
                                                <input {...register("name", { required: true })}
                                                className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                                                id="name" placeholder="Name" type="text" name="name" />
                                                <label className="text-zinc-950 dark:text-white">PhotoUrl</label>
                                                <input {...register("photo", { required: true })}
                                                className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                                                id="photo" placeholder="PhotoUrl" type="url" name="photo" />
                                                
                                                <label className="text-zinc-950 dark:text-white">Email</label>
                                                <input {...register("email", { required: true })}
                                                className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                                                id="email" placeholder="name@example.com" type="email" name="email" />
                                                
                                                <label
                                                    className="text-zinc-950 mt-2 dark:text-white" >Password</label><input {...register("password", { required: true })}
                                                    id="password" placeholder="Password" type="password"
                                                    className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                                                    name="password" /></div> <Button color="secondary">Register</Button>
                                        </div>
                                    </form>
                                    <p>You Have  Any Account <Link href='/login'>Login</Link></p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;