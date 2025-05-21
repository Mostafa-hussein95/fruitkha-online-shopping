


import React, { useState, useEffect } from 'react';

const StylishCountdown = () => {
  const targetDate = new Date('2024-01-01T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      return {
        d: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
        h: Math.max(0, Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
        m: Math.max(0, Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))),
        s: Math.max(0, Math.floor((diff % (1000 * 60)) / 1000)),
      };
    };

    // Update immediately on mount
    setTimeLeft(calculateTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const TimeUnit = ({ value, label }) => (
    <div className="text-center flex-1">
      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F28123] 
                     bg-white/20 px-2 py-1 rounded-lg transition-all duration-200 
                     group-hover:bg-white/30 mx-1 min-w-[60px]">
        {String(value).padStart(2, '0')}
      </div>
      <span className="text-xs sm:text-sm text-[#F28123]/80 mt-1 block">
        {label}
      </span>
    </div>
  );

  return (
    <div className="group relative bg-transparent p-1 rounded-xl shadow-xl 
                   hover:shadow-2xl transition-shadow duration-300 w-full max-w-[500px] 
                   mx-auto">
      <div className="backdrop-blur-lg bg-white/10 rounded-lg p-3 sm:p-4 
                     border border-white/20">
        <div className="flex justify-between items-center gap-1 sm:gap-3 flex-wrap">
          <TimeUnit value={timeLeft.d} label="DAYS" />
          <div className="text-xl text-[#F28123]/50 font-bold mb-3 hidden sm:block">:</div>
          <TimeUnit value={timeLeft.h} label="HOURS" />
          <div className="text-xl text-[#F28123]/50 font-bold mb-3 hidden sm:block">:</div>
          <TimeUnit value={timeLeft.m} label="MINS" />
          <div className="text-xl text-[#F28123]/50 font-bold mb-3 hidden sm:block">:</div>
          <TimeUnit value={timeLeft.s} label="SECS" />
        </div>
      </div>
    </div>
  );
};

export default StylishCountdown;