const mainPromoRunSects = document.querySelector('#mainPromoRunSect');

const newPromoTime = new Date('2025-12-22T12:00:00').getTime();

const updatePromoTime = setInterval(function(){
    const currentTime = new Date().getTime();
    const promoTimeLeft = newPromoTime - currentTime;

    const leftDays = Math.floor(promoTimeLeft / (1000 * 60 * 60 * 24));
    const leftHours = Math.floor((promoTimeLeft / (1000 * 60 * 60)) % 24);
    const leftMinutes = Math.floor((promoTimeLeft / (1000 * 60)) % 60);
    const leftSeconds = Math.floor((promoTimeLeft / 1000) % 60);

    mainPromoRunSects.innerHTML = `
        <div class="promo-count-box promo-days"><span class="days-count" id="daysCount">${leftDays < 10 ? "0" + leftDays : leftDays}</span> <span class="days-text">Day</span></div>
        <div class="promo-count-box promo-hours"><span class="hours-count" id="hoursCount">${leftHours < 10 ? '0' + leftHours : leftHours}</span> <span class="hours-text">hour</span></div>
        <div class="promo-count-box promo-minutes"><span class="minutes-count" id="minutesCount">${leftMinutes < 10 ? '0' + leftMinutes : leftMinutes}</span> <span class="minutes-text">minute</span></div>
        <div class="promo-count-box promo-seconds"><span class="seconds-count" id="secondsCount">${leftSeconds < 10 ? '0' + leftSeconds : leftSeconds}</span> <span class="seconds-text">second</span></div>
    `;

    if(promoTimeLeft < 0){
        clearInterval(updatePromoTime);
        mainPromoRunSects.innerHTML = `<p class="expired-promo-time">Expired</p>`
    }

}, 1000);