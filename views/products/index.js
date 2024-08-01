import React from "react";
import About from "@/components/about";
import Range from "@/components/range";

const Index = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center sm:flex-col lg:items-start  lg:flex-row justify-center gap-4 pt-[60px]">
        <Range />
        <About />
      </div>
    </div>
  );
};

export default Index;
