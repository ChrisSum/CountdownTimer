// Function to figure out time remaining until New Year's 
function countdownTime(endtime) {
	var t = Date.parse(endtime) - Date.parse(new Date()); // Date.parse to convert time strings to milliseconds 
	var seconds = Math.floor((t / 1000) % 60); // Using math.floor to round to nearest whole number
	var minutes = Math.floor((t / 1000 / 60) % 60);
	var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	return {
		'total': t,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}

// JS function to show the clock inside HTML div #clock
function showTimer(id, endtime) {
	var clock = document.getElementById(id);
	var hours = clock.querySelector('.hours');
	var minutes = clock.querySelector('.minutes');
	var seconds = clock.querySelector('.seconds');

	function timerUpdate() {
		var t = countdownTime(endtime);
		hours.innerHTML = ('&nbsp' + ('0' + t.hours).slice(-2) + '&nbsp' + ':');
		minutes.innerHTML = ('&nbsp' + ('0' + t.minutes).slice(-2) + '&nbsp' + ':');
		seconds.innerHTML = ('&nbsp' + ('0' + t.seconds).slice(-2) + '&nbsp');
		if (t.total <= 0) {
			clearInterval(timeinterval);
			alert("Happy New Year!");
		}
	}
	timerUpdate();
	var timeinterval = setInterval(timerUpdate, 1000);
}

showTimer('clock', '2017-01-01'); // input the time remaining till the new year inside of 'clock' div