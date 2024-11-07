import React from 'react';
import newstyle from "../../assets/newseason.avif"
import first from "../../assets/newstyle1.avif"
import secound from "../../assets/newstyle2.avif"
import third from "../../assets/newstyle4.avif"
import four from "../../assets/newstyle5.avif"


const demoProducts = [
  {
    id: 1,
    name: 'Nike Air Max 90',
    description: 'Comfortable and stylish running shoes.',
    price: '$120',
    rating: 4.5,
    image: 'https://via.placeholder.com/150?text=Nike+Air+Max+90',
  },
  {
    id: 2,
    name: 'Adidas Ultraboost',
    description: 'Boost your performance with these running shoes.',
    price: '$150',
    rating: 4.7,
    image: 'https://via.placeholder.com/150?text=Adidas+Ultraboost',
  },
  {
    id: 3,
    name: 'Puma RS-X',
    description: 'Classic design with modern cushioning.',
    price: '$130',
    rating: 4.3,
    image: 'https://via.placeholder.com/150?text=Puma+RS-X',
  },
  {
    id: 4,
    name: 'Reebok Zig Kinetica',
    description: 'Sporty and comfortable with zig-zag sole.',
    price: '$110',
    rating: 4.2,
    image: 'https://via.placeholder.com/150?text=Reebok+Zig+Kinetica',
  },
  {
    id: 5,
    name: 'New Balance 990v5',
    description: 'American-made running shoes with classic design.',
    price: '$175',
    rating: 4.8,
    image: 'https://via.placeholder.com/150?text=New+Balance+990v5',
  },
  {
    id: 6,
    name: 'Under Armour HOVR Phantom',
    description: 'Tech-enhanced shoes with responsive cushioning.',
    price: '$140',
    rating: 4.6,
    image: 'https://via.placeholder.com/150?text=Under+Armour+HOVR+Phantom',
  },
  {
    id: 7,
    name: 'ASICS Gel-Kayano 27',
    description: 'Reliable and durable for long-distance runs.',
    price: '$160',
    rating: 4.4,
    image: 'https://via.placeholder.com/150?text=ASICS+Gel+Kayano+27',
  },
  {
    id: 8,
    name: 'Saucony Endorphin Speed',
    description: 'Lightweight and responsive for racing.',
    price: '$140',
    rating: 4.6,
    image: 'https://via.placeholder.com/150?text=Saucony+Endorphin+Speed',
  },
  {
    id: 9,
    name: 'Nike React Element 55',
    description: 'Minimalistic and sleek with great comfort.',
    price: '$130',
    rating: 4.5,
    image: 'https://via.placeholder.com/150?text=Nike+React+Element+55',
  },
  {
    id: 10,
    name: 'Adidas NMD R1',
    description: 'Stylish sneakers with adaptive boost.',
    price: '$120',
    rating: 4.3,
    image: 'https://via.placeholder.com/150?text=Adidas+NMD+R1',
  },
  {
    id: 11,
    name: 'Puma Future Rider',
    description: 'Retro design meets modern comfort.',
    price: '$110',
    rating: 4.1,
    image: 'https://via.placeholder.com/150?text=Puma+Future+Rider',
  },
  {
    id: 12,
    name: 'Reebok Nano X2',
    description: 'Perfect for cross-training and everyday wear.',
    price: '$125',
    rating: 4.4,
    image: 'https://via.placeholder.com/150?text=Reebok+Nano+X2',
  },
];

const Products = () => {
  return (
    <>
    <div className='px-8'>

      <h1 className='text-center text-[#c79d43] text-4xl font-bold pt-9 pb-5'  style={{
        
        fontFamily: " Faculty Glyphic, Mona Sans, Roboto, sans-serif" 
       }}>Collections</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {demoProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col">
            <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
            <div className="flex flex-col justify-between p-4 flex-grow">
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-semibold text-gray-800">{product.price}</span>
                <span className="text-yellow-500 text-sm">{`⭐ ${product.rating}`}</span>
              </div>
            </div>
          
       
          </div>
        ))}
      </div>
      </div>
<div className='flex p-10'>
<div
  className="min-h-screen w-1/2 bg-cover bg-center relative overflow-hidden transition-transform duration-500 ease-in-out"
  style={{
    backgroundImage: `url(${newstyle})`,
    fontFamily: " Faculty Glyphic , Mona Sans, Roboto, sans-serif",
  }}
>
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out hover:scale-110" style={{ backgroundImage: `url(${newstyle})` }}>
  <div className="absolute inset-0 flex flex-col items-start justify-end m-10 text-white px-4">
    <h3 className="text-2xl font-semibold">New Season, New Styles</h3>
    <p className="mt-4 text-lg">The latest shoes to start winter on the right foot.</p>
    <button className="mt-6 px-6 py-2 bg-white text-black  transition-colors">
      Shop Now
    </button>
  </div>
  </div>
</div>

<div className='flex w-1/2'> 
<div className="flex flex-wrap justify-center gap-4">
  {/* Card 1 */}
  <div className="w-64 h-80 bg-white rounded-lg shadow-md overflow-hidden group relative">
    {/* Image */}
    <img src={first} alt="Product" className="w-full h-40 object-cover" />

    {/* Card Content */}
    <div className="p-4">
      <h3 className="text-xl font-semibold text-gray-800">Product Name</h3>
      <p className="text-gray-600 text-sm my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt.</p>
      <div className="flex items-center justify-between text-sm text-gray-700">
        <span>$19.99</span>
        <div className="flex text-yellow-500">
          {/* Rating stars */}
          {[...Array(5)].map((_, index) => (
            <svg key={index} xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${index < 4 ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 17.5l-6.5 3.5 1.25-7.25L2 8.5h7.5L12 2l2.5 6.5h7.5l-4.75 5.25L18.25 21z"/>
            </svg>
          ))}
        </div>
      </div>
    </div>

    {/* Hover Button */}
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center">
      <button className="text-black bg-white px-4 py-2">Shop Now</button>
    </div>
  </div>

  {/* Card 2 */}
  <div className="w-64 h-80 bg-white rounded-lg shadow-md overflow-hidden group relative">
    {/* Image */}
    <img src={secound} alt="Product" className="w-full h-40 object-cover" />

    {/* Card Content */}
    <div className="p-4">
      <h3 className="text-xl font-semibold text-gray-800">Product Name 2</h3>
      <p className="text-gray-600 text-sm my-2">This is a sample description of another product. Sed do eiusmod tempor incididunt.</p>
      <div className="flex items-center justify-between text-sm text-gray-700">
        <span>$29.99</span>
        <div className="flex text-yellow-500">
          {/* Rating stars */}
          {[...Array(5)].map((_, index) => (
            <svg key={index} xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${index < 3 ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 17.5l-6.5 3.5 1.25-7.25L2 8.5h7.5L12 2l2.5 6.5h7.5l-4.75 5.25L18.25 21z"/>
            </svg>
          ))}
        </div>
      </div>
    </div>

    {/* Hover Button */}
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center">
      <button className="text-black bg-white px-4 py-2">Shop Now</button>
    </div>
  </div>

  {/* Card 3 */}
  <div className="w-64 h-80 bg-white rounded-lg shadow-md overflow-hidden group relative">
    {/* Image */}
    <img src={third} alt="Product" className="w-full h-40 object-cover" />

    {/* Card Content */}
    <div className="p-4">
      <h3 className="text-xl font-semibold text-gray-800">Product Name 3</h3>
      <p className="text-gray-600 text-sm my-2">Detailed description of this product. Donec tincidunt, orci vel volutpat.</p>
      <div className="flex items-center justify-between text-sm text-gray-700">
        <span>$15.99</span>
        <div className="flex text-yellow-500">
          {/* Rating stars */}
          {[...Array(5)].map((_, index) => (
            <svg key={index} xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${index < 5 ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 17.5l-6.5 3.5 1.25-7.25L2 8.5h7.5L12 2l2.5 6.5h7.5l-4.75 5.25L18.25 21z"/>
            </svg>
          ))}
        </div>
      </div>
    </div>

    {/* Hover Button */}
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center">
      <button className="text-black bg-white px-4 py-2">Shop Now</button>
    </div>
  </div>
    {/* Card 3 */}
    <div className="w-64 h-80 bg-white rounded-lg shadow-md overflow-hidden group relative">
    {/* Image */}
    <img src={four} alt="Product" className="w-full h-40 object-cover" />

    {/* Card Content */}
    <div className="p-4">
      <h3 className="text-xl font-semibold text-gray-800">Product Name 3</h3>
      <p className="text-gray-600 text-sm my-2">Detailed description of this product. Donec tincidunt, orci vel volutpat.</p>
      <div className="flex items-center justify-between text-sm text-gray-700">
        <span>$15.99</span>
        <div className="flex text-yellow-500">
          {/* Rating stars */}
          {[...Array(5)].map((_, index) => (
            <svg key={index} xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${index < 5 ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 17.5l-6.5 3.5 1.25-7.25L2 8.5h7.5L12 2l2.5 6.5h7.5l-4.75 5.25L18.25 21z"/>
            </svg>
          ))}
        </div>
      </div>
    </div>

    {/* Hover Button */}
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center">
      <button className="text-black bg-white px-4 py-2 ">Shop Now</button>
    </div>
  </div>
</div>


 </div>
</div>
    </>
  );
};

export default Products;
