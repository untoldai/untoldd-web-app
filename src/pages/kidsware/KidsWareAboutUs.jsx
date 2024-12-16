import React from 'react';
import BreadCrum from '../../comoponent/shared/BreadCrum';
import Button from '../../comoponent/specific/form/Button';

const BeautyAboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800 p-0 mt-12 sm:mt-0">
      <BreadCrum heading={'About us'} text={''} />

      <div className='my-10 px-2 sm:px-10 flex flex-col-reverse sm:flex-row justify-center items-start gap-x-4'>
        <div>

          <img
            className='h-[500px] w-96'
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWJvdXQlMjB1cyUyMGNvbXBhbnl8ZW58MHx8MHx8fDA%3D" alt="" />


        </div>
        <div className='max-w-xl'>
          <h3 className='text-3xl font-bold '></h3>
          <p className="text-slate-600 text-lg my-4 max-w-3xl font-medium tracking-wide leading-relaxed">
             Our mission is to empower creators by transforming their unique visions into thriving, sustainable brands. We believe that every creator has an untold story, a brand waiting to be born. Our goal is to make brand creation accessible, seamless, and impactful by providing end-to-end support—from manufacturing and packaging to marketing and distribution.
            We are committed to redefining the traditional model of brand building by partnering with influencers, giving them the tools and resources they need to succeed. We aim to democratize entrepreneurship, allowing creators to turn their passions into profitable businesses, and bring innovative, high-quality products to consumers worldwide.
            Untoldd is more than just a business; it’s a platform for creators to share their stories, build legacies, and inspire others. Our mission is to make these untold stories a reality, one brand at a time.</p>
        </div>
      </div>
      <div className='flex justify-center items-center my-4'>
        <Button text='Contact us' handlClick={() => location.href = "/app/contact-us"} className={'py-3 px-5'} />
      </div>

      <section className='px-0 md:px-20 my-10'>
        <h3 className='text-center text-3xl font-bold my-5'>Our Features</h3>
        <div className='flex flex-col sm:flex-row justify-center gap-20 my-3'>
          <div className='text-center p-2 flex flex-col justify-center items-center gap-3 bg-white shadow hover:bg-gray-200 rounded'>
            <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.5 56.5834C44.4577 56.5834 56.5834 44.4577 56.5834 29.5C56.5834 14.5423 44.4577 2.41669 29.5 2.41669C14.5423 2.41669 2.41669 14.5423 2.41669 29.5C2.41669 44.4577 14.5423 56.5834 29.5 56.5834Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M29.5 45.75C38.4746 45.75 45.75 38.4746 45.75 29.5C45.75 20.5254 38.4746 13.25 29.5 13.25C20.5254 13.25 13.25 20.5254 13.25 29.5C13.25 38.4746 20.5254 45.75 29.5 45.75Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M29.5 34.9167C32.4916 34.9167 34.9167 32.4916 34.9167 29.5C34.9167 26.5085 32.4916 24.0834 29.5 24.0834C26.5085 24.0834 24.0834 26.5085 24.0834 29.5C24.0834 32.4916 26.5085 34.9167 29.5 34.9167Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p className='text-xl font-bold '>Mission</p>
            <span>Our mission is to empower creators by transforming their unique visions into thriving, sustainable brands.</span>
          </div>
          <div className='text-center p-2 flex flex-col justify-center items-center gap-3 bg-white shadow hover:bg-gray-200 rounded'>
            <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_810_2944)">
                <path d="M64.6517 24.2826C64.4096 24.0226 64.0607 23.8885 63.7055 23.8885H59.8065C58.232 17.373 54.5504 11.4686 49.3506 7.16219C43.7775 2.54706 36.7175 0.00380859 29.4693 0C29.3499 0 29.2294 0.0255176 29.1277 0.0881055C28.8534 0.25708 28.755 0.580811 28.8587 0.857568L32.3393 10.1463C32.4321 10.3943 32.669 10.5584 32.9337 10.5584C41.1644 10.5584 48.3763 16.0847 50.5995 23.8885H47.2517C46.8964 23.8885 46.5476 24.0226 46.3055 24.2826C45.8493 24.7726 45.8515 25.4909 46.2513 25.9707L54.5033 35.873C54.7445 36.1625 55.1019 36.3299 55.4787 36.3299C55.8555 36.3299 56.2127 36.1626 56.454 35.873L64.706 25.9707C65.1057 25.4909 65.1078 24.7726 64.6517 24.2826Z" fill="#507BE9" />
                <path d="M28.8184 29.834C36.5309 29.834 42.7832 23.5817 42.7832 15.8691C42.7832 8.15657 36.5309 1.9043 28.8184 1.9043C21.1058 1.9043 14.8535 8.15657 14.8535 15.8691C14.8535 23.5817 21.1058 29.834 28.8184 29.834Z" fill="#FFEE78" />
                <path d="M42.7832 15.8691C42.7832 8.15661 36.5309 1.9043 28.8184 1.9043V29.834C36.5309 29.834 42.7832 23.5817 42.7832 15.8691Z" fill="#FCD232" />
                <path d="M28.8184 31.7383C20.0681 31.7383 12.9492 24.6194 12.9492 15.8691C12.9492 7.1189 20.0681 0 28.8184 0C37.5686 0 44.6875 7.1189 44.6875 15.8691C44.6875 24.6194 37.5686 31.7383 28.8184 31.7383ZM28.8184 3.80859C22.1682 3.80859 16.7578 9.21896 16.7578 15.8691C16.7578 22.5193 22.1682 27.9297 28.8184 27.9297C35.4685 27.9297 40.8789 22.5193 40.8789 15.8691C40.8789 9.21896 35.4685 3.80859 28.8184 3.80859Z" fill="#FCD232" />
                <path d="M40.8789 15.8691C40.8789 22.5193 35.4685 27.9297 28.8184 27.9297V31.7383C37.5686 31.7383 44.6875 24.6194 44.6875 15.8691C44.6875 7.1189 37.5686 0 28.8184 0V3.80859C35.4685 3.80859 40.8789 9.21896 40.8789 15.8691Z" fill="#F7B90F" />
                <path d="M33.8965 19.043C33.8965 16.2429 31.6184 13.9648 28.8184 13.9648C28.1183 13.9648 27.5488 13.3953 27.5488 12.6953C27.5488 11.9953 28.1183 11.4258 28.8184 11.4258C29.4196 11.4258 29.9427 11.8521 30.062 12.4395C30.2712 13.4701 31.2771 14.136 32.3073 13.9268C33.3379 13.7174 34.0038 12.7122 33.7945 11.6815C33.4491 9.9808 32.2616 8.61732 30.7227 7.99068V7.61719C30.7227 6.56551 29.87 5.71289 28.8184 5.71289C27.7667 5.71289 26.9141 6.56551 26.9141 7.61719V7.98903C25.0551 8.74402 23.7402 10.5685 23.7402 12.6953C23.7402 15.4954 26.0183 17.7734 28.8184 17.7734C29.5184 17.7734 30.0879 18.3429 30.0879 19.043C30.0879 19.743 29.5184 20.3125 28.8184 20.3125C28.2171 20.3125 27.6941 19.8862 27.5747 19.2988C27.3655 18.2682 26.3604 17.6026 25.3294 17.8115C24.2987 18.0209 23.633 19.0261 23.8422 20.0568C24.1876 21.7575 25.3751 23.1211 26.9139 23.7477V24.1211C26.9139 25.1728 27.7666 26.0254 28.8182 26.0254C29.8699 26.0254 30.7225 25.1728 30.7225 24.1211V23.7492C32.5816 22.9943 33.8965 21.1697 33.8965 19.043Z" fill="#FCD232" />
                <path d="M28.8184 13.9648V17.7734C29.5184 17.7734 30.0879 18.3429 30.0879 19.043C30.0879 19.743 29.5184 20.3125 28.8184 20.3125V26.0254C29.87 26.0254 30.7227 25.1728 30.7227 24.1211V23.7492C32.5816 22.9943 33.8965 21.1698 33.8965 19.043C33.8965 16.2429 31.6184 13.9648 28.8184 13.9648Z" fill="#F7B90F" />
                <path d="M30.062 12.4395C30.2712 13.4701 31.2771 14.136 32.3073 13.9268C33.3379 13.7174 34.0038 12.7122 33.7945 11.6815C33.4491 9.9808 32.2616 8.61732 30.7227 7.99068V7.61719C30.7227 6.56551 29.87 5.71289 28.8184 5.71289V11.4258C29.4196 11.4258 29.9427 11.8521 30.062 12.4395Z" fill="#F7B90F" />
                <path d="M64.196 44.5536C62.7885 42.5434 60.0178 42.0549 58.0077 43.4624L44.3864 53.0002C43.8528 53.3738 43.2173 53.5741 42.566 53.5741H32.5V62.4609H43.3664C45.3205 62.4609 47.2271 61.8597 48.8277 60.7389L63.1047 50.7419C65.115 49.3344 65.6037 46.5638 64.196 44.5536Z" fill="#FABE8C" />
                <path d="M44.3864 53.0005C43.8528 53.3741 43.2173 53.5744 42.566 53.5744L32.5 52.7939V57.383H42.7832C47.3333 57.383 51.0352 53.6812 51.0352 49.1311C51.0352 48.8745 51.0217 48.6211 50.9987 48.3705L44.3864 53.0005Z" fill="#E6A578" />
                <path d="M64.196 44.5537C62.7885 42.5435 60.0178 42.055 58.0077 43.4625L46.5518 51.4841C46.9789 50.8014 47.2266 49.9953 47.2266 49.1309C47.2266 46.6769 45.2372 44.6875 42.7832 44.6875H31.9922L30.7501 43.7559C28.2764 41.9006 25.2112 40.8789 22.119 40.8789C19.5123 40.8789 16.9532 41.5877 14.7181 42.9288C14.7181 42.9288 12.6004 44.1995 11.3345 44.9589C10.7609 45.3031 10.4102 45.9229 10.4102 46.5918V60.5566C10.4102 61.6083 11.2628 62.4609 12.3145 62.4609H43.3664C45.3205 62.4609 47.2271 61.8598 48.8277 60.7389L63.1047 50.742C65.115 49.3345 65.6037 46.5639 64.196 44.5537Z" fill="#FFD2AA" />
                <path d="M32.5 62.4609H43.3664C45.3205 62.4609 47.2271 61.8597 48.8277 60.7389L63.1047 50.7419C65.1149 49.3344 65.6034 46.5638 64.1959 44.5536C62.7883 42.5434 60.0177 42.0549 58.0075 43.4624L46.5517 51.484C46.9789 50.8014 47.2266 49.9952 47.2266 49.1308C47.2266 46.6768 45.2372 44.6874 42.7832 44.6874H32.5V62.4609Z" fill="#FABE8C" />
                <path d="M50.9987 48.3705L46.5518 51.4843C46.5243 51.5283 46.4967 51.5725 46.4676 51.6154C45.6692 52.7973 44.3169 53.5744 42.7832 53.5744H29.4531C28.4014 53.5744 27.5488 54.427 27.5488 55.4787C27.5488 56.5304 28.4014 57.383 29.4531 57.383H42.7832C47.3333 57.383 51.0352 53.6812 51.0352 49.1311C51.0352 48.8745 51.0217 48.6211 50.9987 48.3705Z" fill="#FABE8C" />
                <path d="M12.3145 65H1.9043C0.852617 65 0 64.1474 0 63.0957V41.5137C0 40.462 0.852617 39.6094 1.9043 39.6094H12.3145C13.3661 39.6094 14.2188 40.462 14.2188 41.5137V63.0957C14.2188 64.1474 13.3661 65 12.3145 65Z" fill="#6496F7" />
                <path d="M50.9987 48.3705L46.5518 51.4843C46.5243 51.5283 46.4967 51.5725 46.4676 51.6154C45.6692 52.7973 44.3169 53.5744 42.7832 53.5744H32.5V57.383H42.7832C47.3333 57.383 51.0352 53.6812 51.0352 49.1311C51.0352 48.8745 51.0217 48.6211 50.9987 48.3705Z" fill="#E6A578" />
              </g>
              <defs>
                <clipPath id="clip0_810_2944">
                  <rect width="65" height="65" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className='text-xl font-bold '>AIM</p>
            <span>We aim to democratize entrepreneurship, allowing creators to turn their passions into profitable businesses, and bring innovative, high-quality products to consumers worldwide.
            </span>
          </div>
          <div className='text-center p-2 flex flex-col justify-center items-center gap-3 bg-white shadow hover:bg-gray-200 rounded'>
            <svg width="49" height="65" viewBox="0 0 49 65" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.94471 36.5387L0.104004 58.7718L7.99251 58.6951L17.7211 36.5387H7.94471Z" fill="#80AAFF" />
              <path d="M17.7207 36.5387L11.5985 59.9338L17.7645 65.0003L24.4997 45.2937V36.5387H17.7207Z" fill="#80AAFF" />
              <path d="M15.592 36.5387L7.99292 58.6951L10.0672 58.675L11.5993 59.9338L19.6233 36.5387H15.592Z" fill="#EAF1FF" />
              <path d="M41.056 36.5387L48.8967 58.7718L41.0082 58.6951L31.2795 36.5387H41.056Z" fill="#6680FF" />
              <path d="M31.2795 36.5387L37.4017 59.9338L31.2358 65.0003L24.5005 45.2937V36.5387H31.2795Z" fill="#6680FF" />
              <path d="M33.4086 36.5387L41.0077 58.6951L38.9335 58.675L37.4013 59.9338L29.3773 36.5387H33.4086Z" fill="#B3CCFF" />
              <path d="M24.4994 1.90625L23.1436 23.0483L24.4994 43.3854C35.9536 43.3854 45.239 34.1 45.239 22.6459C45.239 11.1917 35.9536 1.90625 24.4994 1.90625Z" fill="#EAF1FF" />
              <path d="M3.75989 22.6459C3.75989 34.1 13.0453 43.3854 24.4995 43.3854V1.90625C13.0453 1.90625 3.75989 11.1917 3.75989 22.6459Z" fill="#F9F9F9" />
              <path d="M47.1457 22.6462C47.1457 10.159 36.9865 0 24.4994 0L23.1436 1.35585L24.4994 3.8132C34.8839 3.8132 43.3324 12.2616 43.3324 22.6462C43.3324 33.0307 34.8839 41.4791 24.4994 41.4791L23.1436 43.3857L24.4994 45.2923C36.9865 45.2923 47.1457 35.1333 47.1457 22.6462Z" fill="#FDAE02" />
              <path d="M24.4997 41.4791C14.1152 41.4791 5.66684 33.0307 5.66684 22.6462C5.66684 12.2616 14.1152 3.8132 24.4997 3.8132V0C12.0126 0 1.85364 10.159 1.85364 22.6462C1.85364 35.1333 12.0126 45.2923 24.4997 45.2923V41.4791Z" fill="#FDCB02" />
              <path d="M35.8975 15.0947L29.9611 17.0357L24.5003 12.4161L23.1445 21.6925L24.5003 31.2679H35.8975V15.0947Z" fill="#FD9002" />
              <path d="M24.5003 12.4161L19.0395 17.0357L13.1031 15.0947V31.2679H24.5003V12.4161Z" fill="#FDAE02" />
            </svg>

            <p className='text-xl font-bold '>Vission</p>
            <span>We are committed to redefining the traditional model of brand building by partnering with influencers, giving them the tools and resources they need to succeed.</span>
          </div>
          <div className='text-center p-2 flex flex-col justify-center items-center gap-3 bg-white shadow hover:bg-gray-200 rounded'>
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M61.2561 24.0856L62.2284 22.3315C62.4872 21.8645 62.3185 21.276 61.8514 21.0173C61.4625 20.8016 60.9905 20.8835 60.6936 21.1859C56.4562 8.60566 44.6238 0.00299072 31.1635 0.00299072C22.8394 0.00299072 15.0135 3.24451 9.12758 9.13057C3.24152 15.0166 0 22.8424 0 31.1665C0 38.2514 2.31725 44.9279 6.70102 50.474C10.9528 55.8532 16.9363 59.7303 23.5494 61.3911C24.9691 61.7477 26.4398 61.9685 28.0457 62.0661C28.0657 62.0672 28.0856 62.0679 28.1053 62.0679C28.6125 62.0679 29.0382 61.6728 29.0694 61.1597C29.1017 60.6267 28.6961 60.1686 28.163 60.1361C26.6779 60.0458 25.3228 59.8429 24.0204 59.5158C11.0161 56.2496 1.93362 44.5921 1.93362 31.1665C1.93362 15.0491 15.0461 1.93661 31.1635 1.93661C43.7494 1.93661 54.818 9.95455 58.824 21.693C58.4289 21.6234 58.0163 21.8054 57.8109 22.1758C57.5521 22.6427 57.7208 23.2313 58.1877 23.49L59.9146 24.4473C59.966 24.478 60.3008 24.6702 60.7052 24.5409C61.0583 24.4283 61.2216 24.1483 61.2561 24.0856Z" fill="#D3CDBF" />
              <path d="M47.6088 10.0999L10.2256 47.4832C9.84799 47.8609 9.84799 48.473 10.2256 48.8506C10.4143 49.0393 10.6618 49.1336 10.9092 49.1336C11.1565 49.1336 11.404 49.0393 11.5928 48.8506L48.976 11.4673C49.3536 11.0896 49.3536 10.4775 48.976 10.0999C48.5985 9.72263 47.9863 9.72263 47.6088 10.0999Z" fill="#D3CDBF" />
            </svg>


            <p className='text-xl font-bold '>Support</p>
            <span>
            We are dedicated to transforming the conventional approach to brand development by collaborating with influencers, providing them with the support and resources essential for their growth and success.</span>
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center my-10 px-4 md:px-10">
  <h3 className="text-center text-4xl font-extrabold text-gray-900 my-6">Our Story</h3>

  <p className="text-slate-600 text-lg my-4 max-w-3xl font-medium tracking-wide leading-relaxed">
    Untoldd is built for creators who dream of turning their influence into meaningful brands. We simplify the brand-building journey by managing everything—product design, manufacturing, packaging, logistics, payments, and sales. Our mission is to empower influencers to focus on their craft while we handle the complexities behind the scenes.  

From launching unique products to creating impactful brands, we are dedicated to helping influencers connect with their audience in innovative ways. At Untoldd, we believe in fostering creativity, providing seamless support, and building a future where every creator can see their ideas come to life as a successful brand.
  </p>

  <p className="text-slate-600 text-lg my-4 max-w-3xl font-medium tracking-wide leading-relaxed">
    This realization sparked the idea for Untoldd. We wanted to bridge the gap between creativity and commerce by offering a comprehensive solution that would make brand creation accessible to all influencers, regardless of their size or resources. Our team combined its deep knowledge of e-commerce, product development, and digital marketing to build a platform that takes care of everything from manufacturing to sales, allowing influencers to focus on what truly matters—connecting with their audience and building their personal brand.
  </p>

  <p className="text-slate-600 text-lg my-4 max-w-3xl font-medium tracking-wide leading-relaxed">
    Untoldd is more than just a business; it's a movement to empower creators and bring untold stories to life. By partnering with influencers to create unique, high-quality products, we're not just launching brands—we're helping to write the next chapter in the story of influencer commerce.
  </p>
D
  
</div>

    </div>
  );
}

export default BeautyAboutUs;
