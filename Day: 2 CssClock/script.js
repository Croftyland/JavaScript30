/**
 * Created by Crofty on 7/8/18.
 */

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    if(secondsDegrees === 90) {
        allHands.forEach(hand => hand.style.transition = 'none')  // remove the all 0.05s transition
    } else {
        allHands.forEach(hand => hand.style.transition = '')      // using '' removes the inline style and reverts back to the stylesheet
    }
}

setInterval(setDate, 1000);

setDate();