import { useForm } from 'react-hook-form'
import { useAdmin } from '../context/AdminContext'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


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
      <div>
        <h1>Login</h1>
        <form onSubmit={onSubmit} >
          <input type="text" {...register("user", {required: true})} placeholder='user'/>
          
          <input type="password" {...register("password", {required: true})} placeholder='password'/>

          <button type='submit'>Login</button>
        </form>

        <p>
          Don't have an account? <Link to="/register">Sing up</Link>
        </p>

      </div>
    </div>
  )
}
