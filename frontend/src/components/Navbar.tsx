function Nav() {
 return (
  <header className="flex flex-col relative z-20 bg-primary-800">
   <div className="max-w-[1400] mx-auto w-full flex items-center justify-between p-4 py-6">
    <a href="/">
     <h1 className="font-semibold text-primary-900">
      JP <span className="text-primary-300">arents</span>
     </h1>
    </a>
    <button className="md:hidden grid place-items-center">
     <i className="fa-solid fa-bars"></i>
    </button>
    <nav className="hidden md:flex items-center gap-4 lg:gap-6">
     <a
      href="#control-center"
      className="duration-200 hover:underline text-primary-300 cursor-pointer">
      Control Center
     </a>
     <a
      href="#topics"
      className="duration-200 hover:underline text-primary-300 cursor-pointer">
      Latest News
     </a>
     <a href="/topics/new">
      <button className="btn-custom">
       <p>Start a conversation!</p>
      </button>
     </a>
    </nav>
   </div>
  </header>
 );
}

export default Nav;
