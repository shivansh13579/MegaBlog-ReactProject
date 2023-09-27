import React from 'react'
import { Container,Logo,LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { useNavigate } from 'react-router-dom'
function Header() {
     const authStatus = useSelector((state)=>state.auth.status)
     const navigate = useNavigate();
  return (
    <div>
      
    </div>
  )
}

export default Header
