import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button className='inline-block duration-200 hover:bg-blue-100 text-white font-bold py-2 px-6 rounded-full'>
        LogOut
    </button>
  )
}

export default LogoutBtn
