import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../style/layout';

import { fadeInLeft } from 'react-animations';

const CardSection = () => {
   return (
      <CardSectionStyled id="card">
         <InnerLayout>
            <div className="card-container">
               <div className="card-left">
                  <h2 data-aos="fade-right" data-aos-duration="3000" className="secondary-heading">
                     Simplify Your Payments and Earnings
                  </h2>
                  <p>
                     With our all-in-one payment solution, influencers and entrepreneurs can streamline their payments
                     and earnings. Whether you're receiving commissions, payouts, or making purchases, our platform is
                     designed to make your financial transactions effortless and secure.
                  </p>
                  <p>
                     Say goodbye to managing multiple payment systems. Our payment card is accepted everywhere, making it
                     easier for you to focus on growing your business.
                  </p>
                  <ul>
                     <li>Fast and secure transactions</li>
                     <li>Track your earnings in real-time</li>
                     <li>One card for all your payments and purchases</li>
                     <li>Exclusive offers for influencers</li>
                  </ul>
               </div>
               <div className="card-right">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="200" height="200" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

                     <rect x="8" y="12" width="48" height="24" rx="4" ry="4" fill="#4CAF50" />
                     <line x1="8" y1="18" x2="56" y2="18" stroke="#fff" stroke-width="1" />
                     <line x1="8" y1="22" x2="56" y2="22" stroke="#fff" stroke-width="1" />
                     <line x1="8" y1="26" x2="56" y2="26" stroke="#fff" stroke-width="1" />


                     <path d="M16 12v-4c0-2 2-4 4-4h20c2 0 4 2 4 4v4" fill="none" stroke="#fff" stroke-width="2" />
                     <line x1="24" y1="12" x2="24" y2="6" stroke="#fff" stroke-width="2" />
                     <line x1="40" y1="12" x2="40" y2="6" stroke="#fff" stroke-width="2" />
                     <path d="M16 12h32c1 0 1.5 1 1.5 2v18c0 1-1.5 2-1.5 2H16c-1 0-1.5-1-1.5-2v-18c0-1 1.5-2 1.5-2z" fill="none" stroke="#fff" stroke-width="2" />


                     <path d="M20 32l8 8 16-16" fill="none" stroke="#fff" stroke-width="4" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                     <rect x="4" y="4" width="24" height="24" rx="4" ry="4"></rect>
                     <line x1="4" y1="10" x2="28" y2="10"></line>
                     <line x1="4" y1="14" x2="28" y2="14"></line>
                     <line x1="4" y1="18" x2="28" y2="18"></line>
                  </svg>

               </div>
            </div>
         </InnerLayout>
      </CardSectionStyled>
   );
};

const CardSectionStyled = styled.section`
  padding: 4rem 0;
  
  
  .card-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media screen and (max-width: 845px) {
      grid-template-columns: 1fr;
    }

    .card-right {
      display: flex;
      justify-content: center;
      align-items: center;

      .card-image {
        width: 100%;
        max-width: 400px;
        height: auto;
      }
    }

    .card-left {
      max-width: 600px;
      margin-right: 2rem;

      h2 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: #333;
      }

      p {
        font-size: 1.1rem;
        color: #555;
        line-height: 1.8;
        margin-bottom: 1.5rem;
      }

      ul {
        list-style-type: none;
        padding-left: 0;
        margin-top: 1.5rem;
        
        li {
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 0.5rem;
          position: relative;
          padding-left: 25px;
          
          &::before {
            content: '✔';
            position: absolute;
            left: 0;
            top: 0;
            color: #4caf50; /* Green checkmark */
            font-weight: bold;
          }
        }
      }
    }
  }
`;

export default CardSection;
