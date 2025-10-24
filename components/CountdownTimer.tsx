import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialHours = 0, initialMinutes = 0, initialSeconds = 0 }) => {
  const [timeLeft, setTimeLeft] = useState(initialHours * 3600 + initialMinutes * 60 + initialSeconds);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <span className="text-3xl">{String(value).padStart(2, '0')}</span>
      <span className="text-xs -mt-1">{label}</span>
    </div>
  );

  return (
    <div className="font-roboto-mono flex justify-center items-center gap-2 tracking-widest">
      <TimeUnit value={hours} label="HRS" />
      <span className="text-3xl animate-pulse">:</span>
      <TimeUnit value={minutes} label="MIN" />
      <span className="text-3xl animate-pulse">:</span>
      <TimeUnit value={seconds} label="SEG" />
    </div>
  );
};