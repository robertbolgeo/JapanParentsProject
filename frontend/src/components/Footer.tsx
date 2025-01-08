function Footer() {
 return (
  <footer className="px-4 py-16 sm:py-20 md:px-8 md:py-24 bg-primary-800 text-white mt-24">
   <div className="max-w[1200px] mx-auto grid w-full grid-cols-1 gap-8 text-base sm:grid-cols-2 md:grid-cols-5">
    <div className="flex flex-col gap-4 md:col-span-2">
     <h1 className="font-semibold text-primary-900">
      JP <span className="text-primary-300">arents</span>
     </h1>
     <p>©2024 JPARENTS ltd. All rights reserved</p>
    </div>
    <div className="flex flex-col gap-4">
     <p className="text-base font-bold sm:text-lg">Support</p>
     <a
      href=""
      target="_blank"
      className="cursor-pointer duration-150 hover:text-blue-300">
      Contact Us
     </a>
    </div>
    <div className="flex flex-col gap-4">
     <p className="text-base font-bold sm:text-lg">About us</p>
     <a
      href=""
      target="_blank"
      className="cursor-pointer duration-150 hover:text-blue-300">
      Find out more about our mission
     </a>
    </div>
    <div className="flex flex-col gap-4">
     <p className="text-base font-bold sm:text-lg">Follow Us</p>
     <a
      href=""
      target="_blank"
      className="cursor-pointer duration-150 hover:text-blue-300">
      <i className="fa-brands fa-facebook pr-2" />
      Facebook
     </a>
     <a
      href=""
      target="_blank"
      className="cursor-pointer duration-150 hover:text-blue-300">
      <i className="fa-brands fa-instagram pr-2" />
      Instagram
     </a>
     <a
      href=""
      target="_blank"
      className="cursor-pointer duration-150 hover:text-blue-300">
      <i className="fa-brands fa-x-twitter pr-2" />
      Twitter
     </a>
    </div>
   </div>
  </footer>
 );
}

export default Footer;
