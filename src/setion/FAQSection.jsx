import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../style/layout'
import lines from '../assets/img/lines.svg'

import Questions from './Questions'

const questions = [
   {
     id: 1,
     title: "How can I start selling products as an influencer?",
     description:
       "To start selling products, simply register on our platform, choose the products you want to promote, and share your unique referral link with your followers. You earn commission every time a sale is made through your link.",
   },
   {
     id: 2,
     title: "How do I track my earnings?",
     description:
       "You can easily track your earnings in your influencer dashboard. We provide real-time analytics and reports so you can monitor your sales and commission at any time.",
   },
   {
     id: 3,
     title: "How much commission do I earn for each sale?",
     description:
       "The commission you earn depends on the product and promotion you're involved in. Our standard commission rate is 10%, but you can earn more with higher-tier products or special campaigns.",
   },
   {
     id: 4,
     title: "Can I promote multiple products at once?",
     description:
       "Yes, you can promote as many products as you like! We recommend focusing on the products that best align with your audience's interests to maximize sales.",
   },
   {
     id: 5,
     title: "What happens if I don't meet my sales target?",
     description:
       "If you don't meet your sales target, don't worry. We offer continuous support and training to help you succeed. You'll also get access to promotional materials to boost your sales.",
   },
 ];

const FAQSection = () => {
   return (
      <FaqStyled id='faq'>
         <InnerLayout>
            <div  data-aos='fade-right'>
               <h3 className="small-heading">Frequently <span>Asked Questions</span></h3>
               <p className='c-para'>
                  Got questions about working with us as an influencer? Here are some answers to help you get started and make the most out of our platform.
               </p>
            </div>
         
            <div className="questions-con">
               {
                  questions.map(q => (
                     <Questions key={q.id} {...q} />
                  ))
               }
            </div>
         </InnerLayout>
      </FaqStyled>
   )
}

const FaqStyled = styled.section`
   padding: 4rem 2rem;
   
   .small-heading {
      font-size: 2.5rem;
      font-weight: 600;
      color: #333;
      margin-bottom: 1rem;
      span {
         color: #ff6f61; /* Accent color */
      }
   }
   .c-para {
      width: 70%;
      margin: 0 auto;
      font-size: 1.1rem;
      color: #555;
      text-align: center;
      line-height: 1.8rem;
   }
   .lines {
      position: relative;
      margin-top: 3rem;
      img {
         width: 100%;
         opacity: 0.1;
      }
   }
   .questions-con {
      padding-top: 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;

      @media screen and (max-width: 768px) {
         grid-template-columns: 1fr;
      }

      .question-item {
         background-color: #fff;
         border-radius: 8px;
         padding: 1.5rem;
         box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
         cursor: pointer;
         transition: all 0.3s ease;

         &:hover {
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
            transform: translateY(-5px);
         }

         h4 {
            font-size: 1.3rem;
            font-weight: 600;
            color: #333;
         }

         p {
            margin-top: 1rem;
            font-size: 1rem;
            color: #777;
         }
      }
   }
`

export default FAQSection;
