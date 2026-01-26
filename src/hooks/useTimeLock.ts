import { useState, useEffect } from 'react';

const UNLOCK_KEY = 'vidhya_swaroop_unlocked';
const TARGET_HOUR = 12;
const TARGET_MINUTE = 30;

export const useTimeLock = () => {
  const [isUnlocked, setIsUnlocked] = useState(() => {
    // Clear localStorage and check current time
    localStorage.removeItem(UNLOCK_KEY);
    
    const now = new Date();
    const today = new Date();
    today.setHours(TARGET_HOUR, TARGET_MINUTE, 0, 0);
    
    const indiaOffset = 5.5 * 60 * 60 * 1000;
    const indiaTime = new Date(now.getTime() + indiaOffset);
    const targetTime = new Date(today.getTime() + indiaOffset);
    
    return indiaTime >= targetTime;
  });
  const [timeLeft, setTimeLeft] = useState<string>('');

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const today = new Date();
      today.setHours(TARGET_HOUR, TARGET_MINUTE, 0, 0);
      
      const indiaOffset = 5.5 * 60 * 60 * 1000;
      const indiaTime = new Date(now.getTime() + indiaOffset);
      const targetTime = new Date(today.getTime() + indiaOffset);
      
      if (indiaTime >= targetTime) {
        setIsUnlocked(true);
        localStorage.setItem(UNLOCK_KEY, 'true');
        return;
      }
      
      const diff = targetTime.getTime() - indiaTime.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeLeft(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  return { isUnlocked, timeLeft };
};
