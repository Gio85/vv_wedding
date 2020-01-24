import React, { useEffect, useState } from 'react';
import moment from 'moment';

export function CountdownTimer(props) {
    const { timeTillDate, timeFormat } = props;
    const WEDDING_DATE = moment(timeTillDate, timeFormat);
    const now = moment();
    const difference = WEDDING_DATE.diff(now);
    const diffDuration = moment.duration(difference);
    const months = diffDuration.months();
    const days = diffDuration.days();
    const hours = diffDuration.hours();
    const calculateTimeLeft = () => {
        const difference = WEDDING_DATE.diff(now);
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                months,
                days,
                hours,
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents = [];
    Object.keys(timeLeft).forEach(interval => {
        if (!timeLeft[interval]) {
            return;
        }
        timerComponents.push(
            <span key={interval}>
                {timeLeft[interval]} {interval}{' '}
            </span>
        );
    });

    return (
        <div>
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    );
}
