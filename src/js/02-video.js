import Vimeo from "@vimeo/player";
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

if (localStorage.getItem("videoplayer-current-time")) {
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
}

const saveCurrentTime = function() {
    player.getCurrentTime().then(function (seconds) {
    localStorage.setItem("videoplayer-current-time", seconds);
});
}

const throttled = throttle(saveCurrentTime, 1000);

player.on('timeupdate', throttled);
