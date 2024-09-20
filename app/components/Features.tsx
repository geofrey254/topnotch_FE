import React from "react";

function Features() {
  return (
    <section className="features flex justify-center items-center w-full p-0 md:p-8">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 p-8 md:p-0">
        <div className="relative bg-black h-[30vh] md:h-[20vh] md:rounded-2xl p-12 text-white">
          <h5>Bestsellers</h5>
          <h4 className="text-xl">Top Picks</h4>
          <p>Explore the most popular items everyone{"'"}s loving.</p>
        </div>
        <div className="relative bg-black h-[30vh] md:h-[20vh] md:rounded-2xl p-12 text-white">
          <h5>Discounted Products</h5>
          <h4 className="text-xl">Today{"'"}s Savings</h4>
          <p>Grab limited-time offers on select products.</p>
        </div>
        <div className="relative bg-black h-[30vh] md:h-[20vh] md:rounded-2xl p-12 text-white">
          <h5>New Arrivals</h5>
          <h4 className="text-xl">Just In</h4>
          <p> Check out the latest additions to our collection.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
