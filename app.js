const cv = document.getElementById('game').getContext('2d');


function main() {
    var rectData = cv.getImageData(10, 10, 390, 390);

    for (let y=0; y<390; y++)
	for (let x=0; x<390; x++) {
	    const offset = 4*(y*390+x);
	    rectData.data[offset] = Math.floor(Math.random() * 256);
	    rectData.data[offset+1] = Math.floor(Math.random() * 256);
	    rectData.data[offset+2] = Math.floor(Math.random() * 256);
	    rectData.data[offset+3] = 255;
	}

    cv.putImageData(rectData, 10, 10);
}

function pull_loop() {
    main_loop.update();
    requestAnimationFrame(pull_loop);
}


window.onload = () => {
    main_loop = new Interval(main, 16);
    requestAnimationFrame(pull_loop);
}

var main_loop;
function Interval(callback, speed) {
    this.speed = speed;
    this.start = Date.now();
    this.update = function() {
        var now = Date.now();
        if(now - this.start >= this.speed) {
            this.start = now;
            callback();
        }
    };
}
