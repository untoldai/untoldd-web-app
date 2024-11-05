import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../style/layout';
import ChartStats from './ChartStats';
import chart from '../assets/img/chart.svg'; // Replace with relevant SVG image
import AnimatedButton from './AnimatedButton';

const ChartSection = () => {
  return (
    <ChartStyled id="features">
      <InnerLayout>
        <div className="chart-con">
          <div className="chart-left">
            <div className="stats">
              <div className="stats-money">
                <ChartStats name={'Your Earnings'} amount={'$250'} />
                <ChartStats name={'Total Sales'} amount={'200+ Products'} />
              </div>
              <img src={chart} alt="Sales chart" />
            </div>
          </div>
          <div className="chart-right">
            <h2 data-aos="fade-right" className="secondary-heading">
              Maximize Your Earnings as an Influencer
            </h2>
            <p>
              Join our platform to effortlessly sell trending products and earn commissions with each sale. Our easy-to-use interface allows you to manage
              your product offerings, track your sales, and boost your earnings—all in one place.
            </p>
            <p>
              With our analytics tools, you can monitor your performance, optimize your campaigns, and grow your income. Start making money by simply promoting
              products to your audience.
            </p>
            <p>
              Whether you’re a social media influencer or an entrepreneur, our platform gives you the tools to succeed. Get paid for every sale you generate!
            </p>
            <AnimatedButton text="Start Selling Now" />
          </div>
        </div>
      </InnerLayout>
    </ChartStyled>
  );
};

const ChartStyled = styled.section`
  padding: 4rem 2rem;
  

  .chart-con {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;

    @media screen and (max-width: 900px) {
      grid-template-columns: 1fr;
    }

    .chart-left {
      position: relative;
      width: 80%;

      @media screen and (max-width: 900px) {
        width: 100%;
      }

      .stats {
        img {
          box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.1);
          border-radius: 12px;
          width: 100%;
          max-width: 100%;
          transition: all 0.3s ease-in-out;

          &:hover {
            transform: scale(1.05);
          }
        }

        .stats-money {
          display: flex;
          justify-content: space-between;
          padding-bottom: 1.5rem;
          font-size: 1.2rem;
          color: #333;
          font-weight: 600;
        }
      }
    }

    .chart-right {
      padding-left: 2rem;
      text-align: left;
      max-width: 650px;
      margin: 0 auto;

      h2 {
        font-size: 2.8rem;
        color: #333;
        font-weight: 700;
        margin-bottom: 1.5rem;
        line-height: 1.2;
        text-align: left;
        transition: all 0.3s ease;
      }

      p {
        padding: 1rem 0;
        font-size: 1.1rem;
        color: #555;
        line-height: 1.7rem;
        max-width: 600px;
        text-align: left;
      }

      button {
        margin-top: 2rem;
        padding: 0.8rem 2rem;
        font-size: 1.2rem;
        background-color: #4caf50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        display: inline-block;

        &:hover {
          background-color: #45a049;
          transform: scale(1.05);
        }
      }
    }
  }
`;

export default ChartSection;
