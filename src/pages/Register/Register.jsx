import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import registerSchema from "./schemas/register-schemas"

export const Register = () => {

  const {
    register, 
    handleSubmit, 
    formState: {errors}
  } = useForm({
    resolver : zodResolver(registerSchema)
  })

  return <div className="flex w-full items-center justify-center">
        <div className="card card-border card-m" min-w-md>
          <div className="card-body">
            <h2 className="card-title">Selamat Cihuy</h2>
            <p>Silahkan lengkapi form dibawah ini</p>

            <form onSubmit={handleSubmit(console.log)} className="space-y-5">
              <label className="floating-label">
               <span>Full Name</span>
               <input 
               type="text" 
               placeholder="Masukan nama anda" className="input input-md" 
               {...register('name')}/>
                </label>
                <label className="floating-label">
               <span>Email</span>
               <input type="text" placeholder="Masukan email anda" className="input input-md" />
                </label>
                <label className="floating-label">
               <span>Password</span>
               <input type="text" placeholder="Masukan password anda" className="input input-md" />
                </label>

                <button type="submit" className="btn btn-primary">
                  GAS
                </button>
            </form>
          </div>
        </div>
    </div>
}

export default Register