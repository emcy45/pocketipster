"use client";

import { useCountdown } from "@/hooks/useCountdown";

interface DateTimeDisplayProps {
  value: number;
  type: string;
  totalDanger: boolean;
}

const DateTimeDisplay: React.FC<DateTimeDisplayProps> = ({
  value,
  type,
  totalDanger,
}) => {
  const formattedValue = value.toString().padStart(2, "0");
  return (
    <div className={`countdown ${totalDanger ? "danger" : ""}`}>
      <div
        className={`p-1 ${
          totalDanger
            ? "text-secondary-500 animate-pulse"
            : "text-secondary-500"
        }`}
      >
        {formattedValue} {type}
      </div>
    </div>
  );
};

const ExpiredNotice: React.FC = () => {
  return (
    <div className="text-secondary-500 flex justify-center italic mt-4">
      Spotkanie w trakcie
    </div>
  );
};

interface ShowCounterProps {
  totalDanger: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ShowCounter: React.FC<ShowCounterProps> = ({
  totalDanger,
  days,
  hours,
  minutes,
  seconds,
}) => {
  return (
    <div className="flex flex-row">
      <DateTimeDisplay value={days} type={"d"} totalDanger={totalDanger} />

      <DateTimeDisplay value={hours} type={"h"} totalDanger={totalDanger} />

      <DateTimeDisplay value={minutes} type={"m"} totalDanger={totalDanger} />
    </div>
  );
};

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  const totalDanger = days * 24 * 60 + hours * 60 + minutes <= 15;

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <>
        <div className="flex flex-col justify-center italic mt-4 gap-2 text-center items-center">
          <div>Typować można przez:</div>
          <ShowCounter
            totalDanger={totalDanger}
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        </div>
      </>
    );
  }
};

export default CountdownTimer;
