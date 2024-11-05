import React from 'react'
import styled from 'styled-components'
import arrow from '../assets/img/arrow.svg'

const AnimatedButton = ({ text }) => {
   return (
      <AnimatedButtonStyled>
         {text}
         <img src={arrow} alt="Arrow Icon" />
      </AnimatedButtonStyled>
   )
}

const AnimatedButtonStyled = styled.button`
   padding: 0.9rem 2rem;
   background-image: linear-gradient(to right, #ff7e5f, #feb47b); /* Example gradient */
   border: none;
   outline: none;
   border-radius: 18px;
   color: inherit;
   font-size: 1rem;
   font-family: inherit;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: space-around;

   img {
      margin-left: 1rem;
      padding-left: inherit;
   }

   /* Optional: Add a hover effect to enhance the gradient transition */
   &:hover {
      background-image: linear-gradient(to right, #feb47b, #ff7e5f); /* Reversed gradient on hover */
   }
`

export default AnimatedButton
