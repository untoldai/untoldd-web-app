import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import PrimaryButton from './PrimaryButton'
import { UntloddLogo } from "../assets"

const Navigation = () => {



   return (
      <NavigationStyled>
         <div className="logo">
            <img src={UntloddLogo} alt="" className='h-20' />
         </div>
         <ul>
            <li>
               <Link to="header" spy={true} smooth={true} className='text-white font-bold text-xl'>Home </Link>
            </li>
            <li>
               <Link to="/app" spy={true} smooth={true} className='text-white font-bold text-xl'>Explore us </Link>
            </li>
            <li>
               <Link to="/" spy={true} smooth={true} className='text-white font-bold text-xl'>Partner with us </Link>
            </li>
         </ul>
         
      </NavigationStyled>
   )
}

const NavigationStyled = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;
   
   ul{
      display: flex;
      justify-content: space-between;
      width: 40%;
      li{
         cursor: pointer;
      }
   }
`

export default Navigation
