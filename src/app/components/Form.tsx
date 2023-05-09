"use client"
import { useForm } from 'react-hook-form';
import { json } from 'stream/consumers';

const Form = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    console.log("Errors:", errors)
    const formHandler = async (data: any) => {
        console.log(data)
        await fetch("/api/formHandler", {
            method: "POST",
            body: JSON.stringify(data)
        });

    };
    console.dir(register)

    return (
        <div>
            <form onSubmit={handleSubmit(formHandler)} className="w-full max-w-md mx-auto mt-8">
                <div className="flex flex-wrap justify-between items-center">
                    <label htmlFor="" className="block text-sm font-medium text-gray-700">Email</label>
                    <input required {...register("email", { required: true })} type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Email" />
                </div>
                <div className="flex flex-wrap justify-between items-center">
                    <label htmlFor="" className="block text-sm font-medium text-gray-700">Password</label>
                    <input {...register("password", { required: true, minLength: 8 })} type="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Password" />
                    {errors.password && errors.password.type === "required" && (<p className="errorMsg text-red-500 font-bold italic">Password is required.</p>)}
                </div>
                <div className="flex justify-between items-center">
                    <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-500">Forgot Password?</a>
                    <button
                        className="mt-4 rounded-xl shadow-xl shadow-black 
                    hover:shadow-pink-400  transition-all hover:rounded-full 
                    border-2 hover:border-4 border-red-400 p-3 bg-green-300 
                    hover:bg-blue-300" type="submit">Submit</button>
                </div>
            </form>
            <br /><br />
        </div>

    )
}

export default Form
