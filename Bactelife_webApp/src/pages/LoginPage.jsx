import { useForm } from 'react-hook-form'
import { useAdmin } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import "./admin/css/tabla.css"

export default function LoginPage() {
  const {register, handleSubmit,} = useForm()

  const {signin, isAuthenticated} = useAdmin()
  const navigate = useNavigate()

  const onSubmit = handleSubmit(data => {signin(data)})

  useEffect(()=>{
    if(isAuthenticated) navigate("/admin")
  },[isAuthenticated])

  return (
    <div>
      <div className='formulario'>
        <h1>Login</h1>
        <form onSubmit={onSubmit} >
          <div className="username">
            <input type="text" {...register("user", {required: true})} placeholder='user'/>
            <label></label>
          </div>
          
          <div className="password">
            <input type="password" {...register("password", {required: true})} placeholder='password'/>
          </div>
        
          <button className='loginButton' type='submit'>Login</button>
        </form>


      </div>
    </div>
  )
}
