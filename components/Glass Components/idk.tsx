import React from "react";

const GlassEffectComponent: React.FC = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg border border-white border-opacity-20 shadow-lg">
    </div>
  );
};

export default GlassEffectComponent;