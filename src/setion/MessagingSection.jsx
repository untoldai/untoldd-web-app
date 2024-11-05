import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../style/layout'
import avatar1 from '../assets/img/avatar1.svg'
import avatar2 from '../assets/img/avatar2.svg'
import avatar3 from '../assets/img/avatar3.svg'
import avatar4 from '../assets/img/avatar4.svg'
import avatar5 from '../assets/img/avatar5.svg'
import messaging from '../assets/img/conversation.svg'
import bgCircles from '../assets/img/circleBg.svg'

const MessagingSection = () => {
   return (
      <MessageStyle>
         <InnerLayout>
            <div className='message-con'>
               <div className="left-items">
                  <h2 data-aos='fade-right' className="secondary-heading">
                     We Support Influencers in 5 Different Languages
                  </h2>
                  <p className='left-para'>
                     Our platform provides seamless communication and customer support in multiple languages, allowing you to connect with your global audience. Expand your reach and manage your sales effectively across different regions with ease.
                  </p>
                  <div className='images-con'>
                     <img src={avatar1} alt="Influencer 1" className='image-1' />
                     <img src={avatar2} alt="Influencer 2" className='image-2' />
                     <img src={avatar3} alt="Influencer 3" className='image-3' />
                     <img src={avatar4} alt="Influencer 4" className='image-4' />
                     <img src={avatar5} alt="Influencer 5" className='image-5' />
                     <p>&nbsp; +23</p>
                  </div>
                  <img src={bgCircles} className="bgCircle" alt="Decorative Circles" />
               </div>
               <div className="right-items">
                  <img src={messaging} alt="Messaging" />
                  <img src={bgCircles} alt="Decorative Circles" className="bgCircle" />
               </div>
            </div>
         </InnerLayout>
      </MessageStyle>
   )
}

const MessageStyle = styled.section`
   padding: 4rem 2rem;
   

   .message-con {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;

      @media screen and (max-width: 1347px) {
         grid-template-columns: repeat(1, 1fr);
      }

      .left-items {
         position: relative;
         padding-right: 2rem;
         text-align: left;
         .left-para {
            padding: 1.6rem 0;
            color: #555;
            font-size: 1.1rem;
            line-height: 1.7rem;
         }

         .images-con {
            display: flex;
            align-items: center;
            margin-top: 1.2rem;

            .image-2,
            .image-3,
            .image-4,
            .image-5 {
               margin-left: -18px;
            }

            p {
               font-size: 1.2rem;
               color: #333;
               font-weight: 600;
            }
         }

         .bgCircle {
            position: absolute;
            top: -7%;
            left: -10%;
            z-index: -1;
            max-width: 100%;
         }
      }

      .right-items {
         position: relative;
         img {
            width: 100%;
            padding-left: 2rem;
         }

         .bgCircle {
            position: absolute;
            bottom: -7%;
            right: 0;
            z-index: -1;
            max-width: 100%;
         }
      }
   }
`

export default MessagingSection;
