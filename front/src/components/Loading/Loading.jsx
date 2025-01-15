import React from 'react';

const Loading = () => {
  return (
    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-transparent to-yellow-400 animate-spin-glow">
      <div className="absolute inset-1 bg-gray-900 rounded-full z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-yellow-400 rounded-full blur-lg"></div>
    </div>
  );
};

export default Loading;
