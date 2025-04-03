
import { Link } from "react-router"
import { useForm } from "react-hook-form"

const Register = () => {
    
      const {register,handleSubmit,formState: { errors },} = useForm()
    
      const onSubmit = (data) => {
        console.log(data)
      }
  return (
    <section className="h-screen flex items-center justify-center p-2">
    <div className="bg-white shadow p-8 max-w-sm">
      <h2 className="text-2xl font-semibold pt-5">Please Register!</h2>
      <form  onSubmit={handleSubmit(onSubmit)} className="max-w-sm space-y-3 mx-auto pt-6">
      <input
        {...register("username", { required: true })} 
         type="text" placeholder="User name" required className="w-full bg-gray-100 focus:outline-none px-5  py-3"/>
         {errors.username && <p className="text-red-500 text-sm">username  is required</p>}
        <input
        {...register("email", { required: true })} 
         type="email" placeholder="Email" required className="w-full bg-gray-100 focus:outline-none px-5  py-3"/>
         {errors.email && <p className="text-red-500 text-sm">Email  is required</p>}
        <input
        {...register("password", { required: true })} 
         type="password" placeholder="Password" required className="w-full bg-gray-100 focus:outline-none px-5  py-3"/>
         {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
        
        
        <button className="w-full mt-2 text-white bg-[#ed3849] hover:bg-[#ed3849]/90 font-medium py-3 rounded-md ">Register</button>
      </form>
      <div className="my-5 text-center italic text-sm"> Have an account? Please <Link to={'/login'} className="text-red-700 px-1 cursor-pointer underline">Login</Link>here.</div>
    </div>
  </section>
  )
}

export default Register