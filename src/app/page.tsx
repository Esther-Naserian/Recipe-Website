
import Navbar from "./Navbar";
export default function Home() {


  return (
    <main>
      <Navbar/>
      <div className="text-1xl">
      <div className="flex bg-[#FFF9EF] items-center justify-between p-10">
  <div className="mx-[50px] mt-[10%] text-left">
    <h1 className="font-bold text-5xl mb-2">Enjoy Delicious</h1>
    <h1 className="font-bold text-5xl mb-4">
      Food in <b className="text-[#FFC624]">Healthy Life</b>
    </h1>
    <p className="w-5/12 text-gray-700 mb-6 leading-relaxed">
      Tandoori masala is an Indian spice blend consisting of a variety of spices. Tandoori masala is an Indian spice blend consisting of a variety of spices.
    </p>
    <button className="bg-yellow-500 text-neutral-100 min-w-[200px] min-h-[65px] text-[20px] rounded-lg hover:bg-yellow-600 transition duration-300">
      ORDER NOW
    </button>
  </div>
  <div className="flex justify-center">
    <img src="/images/foodone.png" className="w-[600px] h-auto rounded-lg shadow-lg" />
  </div>
</div>
      <br></br><br></br>
      <div className="text-center font-bold">
        <p>Online store</p>
        <h3 className="font-bold text-4xl  ">Popular Foods</h3>
      </div>
      <div className="flex flex-wrap justify-center mx-[50px] mt-[50px]">
  <div className="bg-white shadow-lg rounded-lg p-4 m-4 max-w-xs text-center">
    <img src="/images/foodtwo.png" className="rounded-lg mb-2" />
    <h1 className="text-lg font-semibold mb-1">Fruit dish</h1>
    <p className="text-gray-600 mb-1">Dinko Food</p>
    <p className="text-yellow-500 mb-2">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
    <button className="bg-yellow-500 text-neutral-100 min-w-[140px] min-h-[40px] text-[15px] rounded-lg hover:bg-yellow-600 transition duration-300">
      Add to Cart $696
    </button>
  </div>

  <div className="bg-white shadow-lg rounded-lg p-4 m-4 max-w-xs text-center">
    <img src="/images/foodthree.png" className="rounded-lg mb-2" />
    <h1 className="text-lg font-semibold mb-1">Fruit dish</h1>
    <p className="text-gray-600 mb-1">Dinko Food</p>
    <p className="text-yellow-500 mb-2">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
    <button className="bg-yellow-500 text-neutral-100 min-w-[140px] min-h-[40px] text-[15px] rounded-lg hover:bg-yellow-600 transition duration-300">
      Add to Cart $696
    </button>
  </div>

  <div className="bg-white shadow-lg rounded-lg p-4 m-4 max-w-xs text-center">
    <img src="/images/fourfive.png" className="rounded-lg mb-2" />
    <h1 className="text-lg font-semibold mb-1">Sea fish dish</h1>
    <p className="text-gray-600 mb-1">Dinko Food</p>
    <p className="text-yellow-500 mb-2">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
    <button className="bg-yellow-500 text-neutral-100 min-w-[140px] min-h-[40px] text-[15px] rounded-lg hover:bg-yellow-600 transition duration-300">
      Add to Cart $696
    </button>
  </div>

  <div className="bg-white shadow-lg rounded-lg p-4 m-4 max-w-xs text-center">
    <img src="/images/foodfour.png" className="rounded-lg mb-2" />
    <h1 className="text-lg font-semibold mb-1">Sea fish dish</h1>
    <p className="text-gray-600 mb-1">Dinko Food</p>
    <p className="text-yellow-500 mb-2">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
    <button className="bg-yellow-500 text-neutral-100 min-w-[140px] min-h-[40px] text-[15px] rounded-xl hover:bg-yellow-600 transition duration-300">
    Add to Cart $696
</button>


  </div>
</div>
       <div className="bg-[#FFF9EF]">
      <div className="flex mx-[100px] mt-[10%] ]">
        <div>
          <h1 className="font-bold text-4xl ">Our special Offer</h1>
          <p className="w-5/12">Best cooks and best delivery guys all at your service.Hot tastyfood will reach you in 60 minutes</p>
          <button className=" ml-32 bg-yellow-500 text-neutral-100 min-w-[140px] text-amber-500 min-h-[40px] text-[15px] rounded-lg mr-[30px]">See All Menu</button>
        </div>
        <div>
          <img src="/images/healthydelicious.png"/>
        </div>
      </div>
      </div>
      <div className="text-center bg-[#FFF9EF] p-10 rounded-lg">
  <p className="text-lg font-semibold text-gray-700 mb-2">Quality Food</p>
  <h1 className="font-bold text-5xl mb-4 text-[#180606]">Get The Best Offers</h1>
  <p className="text-gray-600 leading-relaxed">
    The food at your doorstep. Why starve when you have us? Your hunger partner. Straight out of the oven to your doorstep.
  </p>
</div>
<div className="flex ml-60 gap-20 p-10 bg-[#FFF9EF] rounded-lg">
  <div className="flex flex-col items-center">
    <div>
      <h1 className="font-bold text-2xl mb-1">Any Day Offer</h1>
      <p className="text-gray-700 mb-1">New Phenomena Burger Taste</p>
      <p className="text-[#FFC624] text-xl font-semibold">$12.90</p>
    </div>
    <div className="text-center">
      <img src="/images/phenomental.png" className="w-48 h-auto rounded-lg shadow-md transition-transform transform hover:scale-105" />
    </div>
  </div>
  
  <div className="flex ml-60 gap-60">
    <div>
      <h1 className="font-bold text-2xl mb-1">Other Flavors</h1>
      <p>Save room. We made salads.</p>
      <p className="text-[#FFC624] text-xl font-semibold">$12.90</p>
    </div>
    <div>
      <img src="/images/hamberger.png" />
    </div>
  </div>
  
  <div className="flex flex-col items-center">
    <div>
      <h1 className="font-bold text-2xl mb-1">Find a Poco Store Near You</h1>
    </div>
    <div>
      <img src="/images/colar.png" className="w-48 h-auto rounded-lg shadow-md transition-transform transform hover:scale-105" />
    </div>
  </div>
</div>
      <div>
        <h1 className="text-center  font-bold text-4xl">Our Service</h1>
      </div>
      <div className="flex ml-60 gap-60">
        <div>
          <img src="/images/resturant.png"/>
          <h1>55+Restaurants</h1>
        </div>
        <div>
          <img src="/images/goodquality.png"/>
          <h1>Good Quality</h1>
        </div>
        <div>
          <img src="/images/discount.png"/>
          <h1>Discount System</h1>
        </div>
        <div>
          <img src="/images/fastdelivery.png"/>
          <h1>Fast Delivery</h1>
        </div>
      </div>
      <div className="text-center">
        <p>Testimonials</p>
        <h1 className="font-bold text-4xl">What Our Clients Say</h1>
        
        <p className="w-8/12 pl-80">Lorem ipsum dolor sit amaet,consecteur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,quis nostrud exercitation uliamco laboris nisi ut aliquip ex ea commodo</p>
      </div>
      <div className="flex pl-80 gap-10">
      <div>
        <img src="/images/manone.png"className="w-40 "/>
      </div>
      <div>
        <img src="/images/mantwo.png" className="w-40"/>
      </div>
      <div>
        <img src="/images/manthree.png"/>
      </div>
      <div>
        <img src="/images/manfour.png"/>
      </div>
      <div>
        <img src="/images/manfive.png" className="w-40"/>
      </div>
      </div>
      <div className="text-center">
        <p className="font-bold text-4xl">Mitchell Marsh</p>
        <p>CEO,Bexon Agency</p>
        <div className="flex ml-96">
          <div>
           
          </div>
          <div>
            
          </div>
        </div>
      </div>
      <div className="flex pl-60 gap-60 bg-[#FFF9EF]">
        <div>
          <img src="/images/phone.png"/>
        </div>
        <div>
        <div className="flex flex-col items-center justify-center bg-[#FFF9EF] py-20">
  <p className="font-bold text-2xl text-[#FFC624] mb-2">Download Our App</p>
  <h1 className="font-bold text-5xl mb-2">It's all here</h1>
  <h1 className="font-bold text-5xl mb-4">All in one app.</h1>
  <p className="text-gray-700 mb-6 leading-relaxed text-center">
    Discover local, on-demand delivery or pickup from restaurants, nearby grocery and convenience stores, and more.
  </p>
  <div className="flex gap-4">
    <button className="bg-black text-white min-w-[200px] min-h-[65px] text-[20px] rounded-lg hover:bg-gray-800 transition duration-300">
      App Store
    </button>
    <button className="bg-black text-white min-w-[200px] min-h-[65px] text-[20px] rounded-lg hover:bg-gray-800 transition duration-300">
      Google Play
    </button>
  </div>
</div>
        </div>
      </div>
      <div className="flex pl-60 bg-[#FFF9EF]">
        <div>
          <p className="font-bold text-4xl">Subscribe Our Newsletter</p>
          <p>Subscribe on  our newsletter to get our news</p>
        </div>
        <div>
<input 
    type="email" 
    placeholder="Your Email Address" 
    className="ml-32 bg-white text-black min-w-[400px] min-h-[40px] text-[15px] rounded-lg mr-[30px]" 
/>          <button className=" ml-20 bg-yellow-500 text-neutral-100 min-w-[140px] text-amber-500 min-h-[40px] text-[15px] rounded-lg mr-[30px]">Subscribe</button>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 bg-[#180606] text-white p-10">
  <div className="flex-1">
    <h1 className="font-bold text-5xl mb-2">FoodHouse</h1>
    <p className="w-60 text-gray-300 leading-relaxed">
      Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
    </p>
  </div>
  <div className="flex-1">
    <p className="font-bold text-4xl mb-2">Company</p>
    <p className="text-gray-300">Career</p>
    <p className="text-gray-300">About us</p>
    <p className="text-gray-300">Blog</p>
    <p className="text-gray-300">Press Info</p>
    <p className="text-gray-300">Features</p>
  </div>
  <div className="flex-1">
    <p className="font-bold text-4xl mb-2">Fudo</p>
    <p className="text-gray-300">Why Fudo</p>
    <p className="text-gray-300">How it works</p>
    <p className="text-gray-300">Why choose Us</p>
    <p className="text-gray-300">Client stories</p>
    <p className="text-gray-300">Gallery</p>
  </div>
  <div className="flex-1">
    <p className="font-bold text-4xl mb-2">Menu</p>
    <p className="text-gray-300">Breakfast</p>
    <p className="text-gray-300">Lunch</p>
    <p className="text-gray-300">Dinner</p>
    <p className="text-gray-300">Fast Foods</p>
    <p className="text-gray-300">Drinks</p>
  </div>
</div>
        </div>
     
    </main>
  );
}
