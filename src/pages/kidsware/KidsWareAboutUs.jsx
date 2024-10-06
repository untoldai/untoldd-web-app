import React from 'react';

const BeautyAboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800 p-8 md:p-16">
      <h1 className="text-5xl font-bold text-sky-500 mb-4">Welcome to Baby Beluga 🐳</h1>
      <p className="text-lg md:text-xl mb-8 leading-relaxed">
        At Baby Beluga, we cherish the laughter, joy, and endless curiosity of childhood. Inspired by the playful and gentle nature of beluga whales, we aim to create clothing that mirrors the innocence and wonder of your little ones. 
        Our mission is to celebrate your child’s early years with clothing that’s as unique and special as they are.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <img src="https://img.freepik.com/free-vector/colored-baby-shower-clothes_23-2147522088.jpg?w=740&t=st=1727977100~exp=1727977700~hmac=e6f83eb31baac4dbd4975375ac7b967d1db90d7ddabe94486c5afd187958d7a8" alt="Cute baby clothing" className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105" />
        <img src="https://img.freepik.com/free-photo/active-friends-playground_1098-4015.jpg?t=st=1727977176~exp=1727980776~hmac=5f1c0422ec12397b8a9809279a263b66ba56d7c915a4ad859d9fbfcf0a449adf&w=996" alt="Playful children" className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105" />
      </div>

      <h2 className="text-4xl font-semibold text-pink-500 mb-4">Our Collection</h2>
      <p className="text-lg md:text-xl mb-6 leading-relaxed">
        We offer an adorable collection of occasion wear for toddlers aged 0 months to 5 years. Each piece, from cozy onesies to fun t-shirts, is crafted with love to make your child’s memorable moments even brighter.
      </p>

      <h2 className="text-4xl font-semibold text-yellow-500 mb-4">Our Mission</h2>
      <p className="text-lg md:text-xl mb-6 leading-relaxed">
        In a world where fast fashion often harms the environment, Baby Beluga is committed to making a change. We prioritize sustainable production practices to reduce waste, ensuring that every piece of clothing we create is eco-friendly.
      </p>

      <h2 className="text-4xl font-semibold text-sky-400 mb-4">Why Choose Baby Beluga?</h2>
      <ul className="list-disc list-inside text-left mx-auto max-w-lg text-lg mb-12 leading-relaxed">
        <li>🌱 Eco-friendly materials for a sustainable future.</li>
        <li>❤️ Handcrafted with love and attention to detail.</li>
        <li>👶 Designed to be comfortable for little ones.</li>
        <li>🌈 Vibrant colors and fun designs that inspire creativity.</li>
        <li>🧵 High-quality fabrics that withstand the playful spirit of childhood.</li>
        <li>📦 Thoughtful packaging that minimizes waste.</li>
        <li>🌍 A commitment to ethical manufacturing practices.</li>
        <li>👩‍👧‍👦 Inclusive designs for all children, celebrating diversity.</li>
        <li>🎉 Perfect for memorable occasions and everyday adventures.</li>
        <li>💖 Community-driven: We support local artisans and initiatives.</li>
      </ul>

      <h2 className="text-4xl font-semibold text-pink-500 mb-4">Join the Baby Beluga Family</h2>
      <p className="text-lg md:text-xl mb-6 leading-relaxed">
        We invite you to explore our collection and join us in celebrating the beauty of childhood. Together, let’s create a brighter, more sustainable future for our little ones.
      </p>

      <div className="flex justify-center">
        <img src="https://img.freepik.com/free-vector/baby-clothes-set_74855-202.jpg?t=st=1727977263~exp=1727980863~hmac=8264fce8c47776db8d6ffa92c6f49358385d9ca5c4f1fd9c8a2e853ae86c14fb&w=900" alt="Baby Beluga collection" className="w-full md:w-2/3 lg:w-1/2 h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105" />
      </div>
    </div>
  );
}

export default BeautyAboutUs;
