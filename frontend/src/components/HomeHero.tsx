function HomeHero() {
 return (
  <section className="bg-primary-800">
   <div className="flex flex-col gap-10 flex-1 items-center justify-center pb-10 md:pb-14">
    <h2 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-[1200px] mx-auto w-full text-center font-semibold">
     Find your <span className="text-blue-300">Village </span>
     <br />
     <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
      Community Support for <span className="text-blue-300">Parenting</span> in
      Japan.
     </span>
    </h2>
   </div>
  </section>
 );
}

export default HomeHero;
