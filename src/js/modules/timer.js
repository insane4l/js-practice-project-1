const timer = (timerSelector, deadline) => {

    const getTimeRemaining = (deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date()),
              seconds = Math.floor( (time / 1000) % 60),
              minutes = Math.floor( (time / 1000 / 60) % 60 ),
              hours = Math.floor( (time / 1000 / 60 / 60) % 24 ),
              days = Math.floor( time / 1000 / 60 / 60 / 24 );

        return {
            'total': time,
            'seconds':seconds,
            'minutes':minutes,
            'hours':hours,
            'days':days
        }

    };
    
    const transformNum = (num) => {
        if (num <= 9) {
            return '0' + num;
        } else {
            return num
        }
    };

    const updateTime = (timerSelector, deadline) => {
        const timer = document.querySelector(timerSelector),
              seconds = timer.querySelector('#seconds'),
              minutes = timer.querySelector('#minutes'),
              hours = timer.querySelector('#hours'),
              days = timer.querySelector('#days'),
              timerId = setInterval(setTime, 1000);
              
        function setTime() {
            const t = getTimeRemaining(deadline);

            seconds.textContent = transformNum(t.seconds);
            minutes.textContent = transformNum(t.minutes);
            hours.textContent = transformNum(t.hours);
            days.textContent = transformNum(t.days);

            if (t.total <= 0) {
                seconds.textContent = "00";
                minutes.textContent = "00";
                hours.textContent = "00";
                days.textContent = "00";
                clearInterval(timerId);
            }
        };

        setTime();
    };

    updateTime(timerSelector, deadline);
};

export default timer;