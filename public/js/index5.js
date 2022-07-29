const firstScreensaver = document.querySelector('#firstScreensaver');
const screensaver = document.querySelector('#screensaver');
const introPage1 = document.querySelector('#introPage1');
const slideshowPage = document.querySelector('#slideshowPage');
const homeButton = document.querySelector('#home');
const next4 = document.querySelector('#next4');
const video1 = document.querySelector('#video1');


function isVisible(page) {
    return page.getAttribute('class').indexOf('hide') === -1;
};
const toggle = function (element) {
    element.classList.toggle('hide');
};

// Timer -> bakc to screensaver 
let timer;
let bookmark = introPage1;
const runtimer = () => {
    timer = window.setTimeout(() => {
        if (isVisible(introPage1)) {
            toggle(introPage1);
            toggle(screensaver);
            bookmark = introPage1;
            if (isVisible(playSong)) {
                video.src = "video files/screensaver.mp4";
                songinfo.innerHTML = "";
                video.play();
            }
        } else if (isVisible(slideshowPage)) {
            toggle(slideshowPage);
            toggle(screensaver);
            bookmark = introPage1;
            if (isVisible(playSong)) {
                video.src = "video files/screensaver.mp4";
                songinfo.innerHTML = "";
                video.play();
            }
        }
    }, 360000)
};

// navigation

firstScreensaver.addEventListener('click', () => {
    video1.pause();
    toggle(firstScreensaver);
    toggle(bookmark);
});

screensaver.addEventListener('click', () => {
    toggle(screensaver);
    toggle(bookmark);
    if (isVisible(playSong)) {
        video.pause();
    }
    runtimer();
});

window.addEventListener('click', () => {
    clearTimeout(timer);
    runtimer()
});

next4.addEventListener('click', () => {
    const playButtons = [playButton0, playButton1, playButton2, playButton3, playButton4, playButton5, playButton6];
    if (video.paused || video.ended) {
        play(playButtons[n]);
    };
    toggle(introPage1);
    toggle(slideshowPage);
});

homeButton.addEventListener('click', () => {
    if (isVisible(slideshowPage)) {
        toggle(slideshowPage);
        toggle(introPage1);
    }
});

// videoplayer 

const video = document.querySelector('#video');
const playSong = document.querySelector('#playSong');
const stopSong = document.querySelector('#stopSong');
const nextSong = document.querySelector('#nextSong');
const previousSong = document.querySelector('#previousSong');
const songinfo = document.querySelector('#songInfo');

video.controls = false;


const playlist = [
    {
        src: "video files/01_Berceuse pour nouveau né.mp4",
        info: 'Berceuse pour nouveau né'
    },
    {
        src: "video files/02_Sérénade en poussette.mp4",
        info: 'Sérénade en poussette'
    },
    {
        src: "video files/03_Rêverie pour doudou et orchestre.mp4",
        info: 'Rêverie pour doudou et orchestre'
    },
    {
        src: "video files/04_Scherzo en chaise haute.mp4",
        info: 'Scherzo en chaise haute'
    },
    {
        src: "video files/05_Adagio en pyjama.mp4",
        info: 'Adagio en pyjama'
    },
    {
        src: "video files/06_Fantaisie pour animaux en peluche.mp4",
        info: 'Fantaisie pour animaux en peluche'
    },
    {
        src: "video files/07_Largo dans un berceau.mp4",
        info: 'Largo dans un berceau'
    },
];

// video controls on slideshowpage
let n = 0;
playSong.addEventListener('click', function (e) {
    const playButtons = [playButton0, playButton1, playButton2, playButton3, playButton4, playButton5, playButton6];
    if (video.paused || video.ended) {
        play(playButtons[n]);
    }

});
stopSong.addEventListener('click', function (e) {
    const stopButtons = [stopButton0, stopButton1, stopButton2, stopButton3, stopButton4, stopButton5, stopButton6];
    if (!video.paused || !video.ended) {
        stop(stopButtons[n]);
    }
});

nextSong.addEventListener('click', () => {
    const stopButtons = [stopButton0, stopButton1, stopButton2, stopButton3, stopButton4, stopButton5, stopButton6];
    const playButtons = [playButton0, playButton1, playButton2, playButton3, playButton4, playButton5, playButton6];
    n += 1;
    if (video.paused) {
        if (n < (playlist.length)) {
            video.src = playlist[n].src;
            songinfo.innerHTML = playlist[n].info;
        } else {
            n = 0;
            video.src = playlist[n].src;
            songinfo.innerHTML = playlist[n].info;
        }
    } else if (!video.paused || !video.ended) {
        if (n < (playlist.length)) {
            findPlayButton();
            toggle(playButtons[n]);
            toggle(stopButtons[n]);
            video.src = playlist[n].src;
            songinfo.innerHTML = playlist[n].info;
            video.play();
        } else {
            n = 0;
            findPlayButton();
            toggle(playButtons[n]);
            toggle(stopButtons[n]);
            video.src = playlist[n].src;
            songinfo.innerHTML = playlist[n].info;
            video.play();
        }
    }
});

previousSong.addEventListener('click', () => {
    const stopButtons = [stopButton0, stopButton1, stopButton2, stopButton3, stopButton4, stopButton5, stopButton6];
    const playButtons = [playButton0, playButton1, playButton2, playButton3, playButton4, playButton5, playButton6];
    if (video.paused || video.ended) {
        if (n === 0) {
            n = (playlist.length - 1);
            video.src = playlist[n].src;
            songinfo.innerHTML = playlist[n].info;
        } else {
            n -= 1;
            video.src = playlist[n].src;
            songinfo.innerHTML = playlist[n].info;
        }
    } else if (!video.paused || !video.ended) {
        if (n === 0) {
            n = (playlist.length - 1);
            findPlayButton();
            toggle(playButtons[n]);
            toggle(stopButtons[n]);
            video.src = playlist[n].src;
            songinfo.innerHTML = playlist[n].info;
            video.play();
        } else {
            n -= 1;
            findPlayButton();
            toggle(playButtons[n]);
            toggle(stopButtons[n]);
            video.src = playlist[n].src;
            songinfo.innerHTML = playlist[n].info;
            video.play();
        }
    }
});

// go automatically to next song 
video.addEventListener('ended', () => {
    if (!isVisible(stopSong)) {
        video.currentTime = 1;
        video.play();
    } else {
        const stopButtons = [stopButton0, stopButton1, stopButton2, stopButton3, stopButton4, stopButton5, stopButton6];
        const playButtons = [playButton0, playButton1, playButton2, playButton3, playButton4, playButton5, playButton6];
        n += 1;
        if (n < (playlist.length)) {
            findPlayButton();
            toggle(playButtons[n]);
            toggle(stopButtons[n]);
            video.src = playlist[n].src;
            songinfo.innerHTML = playlist[n].info;
            video.play();
        } else {
            findPlayButton();
            toggleStopSong();
            video.src = "video files/screensaver.mp4";
            songinfo.innerHTML = "";
            video.play();
            n = 0;
        }
    }
});

//  video controls on intropage

// const playButton0 = document.querySelector('#playButton0');
// const playButton1 = document.querySelector('#playButton1');
// const playButton2 = document.querySelector('#playButton2');
// const playButton3 = document.querySelector('#playButton3');
// const playButton4 = document.querySelector('#playButton4');
// const playButton5 = document.querySelector('#playButton5');
// const playButton6 = document.querySelector('#playButton6');
// const stopButton0 = document.querySelector('#stopButton0');
// const stopButton1 = document.querySelector('#stopButton1');
// const stopButton2 = document.querySelector('#stopButton2');
// const stopButton3 = document.querySelector('#stopButton3');
// const stopButton4 = document.querySelector('#stopButton4');
// const stopButton5 = document.querySelector('#stopButton5');
// const stopButton6 = document.querySelector('#stopButton6');

const visibleStopButton = function () {
    const stopButtons = [stopButton0, stopButton1, stopButton2, stopButton3, stopButton4, stopButton5, stopButton6];
    return stopButtons.filter(stopButton => isVisible(stopButton));
}
function findPlayButton() {
    const stopButtons = [stopButton0, stopButton1, stopButton2, stopButton3, stopButton4, stopButton5, stopButton6];
    const playButtons = [playButton0, playButton1, playButton2, playButton3, playButton4, playButton5, playButton6];
    const buttonNumber = parseInt(visibleStopButton()[0].id.slice(-1));
    toggle(stopButtons[buttonNumber]);
    toggle(playButtons[buttonNumber]);
}
function togglePlaySong() {
    if (isVisible(playSong)) {
        toggle(playSong);
        toggle(stopSong);
    }
}
function toggleStopSong() {
    if (isVisible(stopSong)) {
        toggle(stopSong);
        toggle(playSong);
    }
}

function play(button) {
    const stopButtons = [stopButton0, stopButton1, stopButton2, stopButton3, stopButton4, stopButton5, stopButton6];
    const playButtons = [playButton0, playButton1, playButton2, playButton3, playButton4, playButton5, playButton6];
    const buttonNum = playButtons.indexOf(button);
    togglePlaySong();
    if (visibleStopButton().length === 0) {
        toggle(button);
        toggle(stopButtons[buttonNum]);
        songinfo.innerHTML = playlist[buttonNum].info;
        video.src = playlist[buttonNum].src;
        video.play();
        n = buttonNum;
    } else {
        findPlayButton();
        toggle(button);
        toggle(stopButtons[buttonNum]);
        songinfo.innerHTML = playlist[buttonNum].info;
        video.src = playlist[buttonNum].src;
        video.play();
        n = buttonNum;
    }
};

function stop(button) {
    const stopButtons = [stopButton0, stopButton1, stopButton2, stopButton3, stopButton4, stopButton5, stopButton6];
    const playButtons = [playButton0, playButton1, playButton2, playButton3, playButton4, playButton5, playButton6];
    const buttonNum = stopButtons.indexOf(button);
    toggleStopSong();
    toggle(button);
    toggle(playButtons[buttonNum]);
    video.pause();
    video.currentTime = 0;
};



// playButton0.addEventListener('click', () => {
//     play(playButton0);
// });
// stopButton0.addEventListener('click', () => {
//     stop(stopButton0);
// });
// playButton1.addEventListener('click', () => {
//     play(playButton1);
// });
// stopButton1.addEventListener('click', () => {
//     stop(stopButton1);
// });
// playButton2.addEventListener('click', () => {
//     play(playButton2);
// });
// stopButton2.addEventListener('click', () => {
//     stop(stopButton2);
// });
// playButton3.addEventListener('click', () => {
//     play(playButton3);
// });
// stopButton3.addEventListener('click', () => {
//     stop(stopButton3);
// });
// playButton4.addEventListener('click', () => {
//     play(playButton4);
// });
// stopButton4.addEventListener('click', () => {
//     stop(stopButton4);
// });
// playButton5.addEventListener('click', () => {
//     play(playButton5);
// });
// stopButton5.addEventListener('click', () => {
//     stop(stopButton5);
// });
// playButton6.addEventListener('click', () => {
//     play(playButton6);
// });
// stopButton6.addEventListener('click', () => {
//     stop(stopButton6);
// });


// srcolltotop button and scrollbar
const scrollToTop = document.querySelector("#scrollToTop");
const scrollBar = document.querySelector(".slider");
const scrollContent = document.querySelector(".scrollContent");

const scrollFunc = () => {
    if (scrollContent.scrollTop > 20) {
        scrollToTop.classList.remove("scrollToTopOff")
        scrollToTop.classList.add("scrollToTopOn")
    } else {
        scrollToTop.classList.remove("scrollToTopOn");
        scrollToTop.classList.add("scrollToTopOff");

    }
};
const moveScrollBar = () => {
    let p = ((scrollContent.scrollTop / (scrollContent.scrollHeight - scrollContent.clientHeight)) * (100));
    scrollBar.value = p;
};

let num = 0;

scrollContent.addEventListener("scroll", () => {
    scrollFunc();
    moveScrollBar()
});


scrollToTop.addEventListener('click', function backToTop() {
    const c = scrollContent.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(backToTop);
        scrollContent.scrollTo(0, c - c / 10);
    }
});

scrollBar.addEventListener('input', () => {
    let thumbPosition = (scrollBar.value / 100) * scrollBar.clientWidth;
    scrollContent.scrollTop = (scrollContent.scrollHeight - scrollContent.clientHeight) * (thumbPosition / scrollBar.offsetWidth);
});

// volume
const volume = document.querySelector('#volume');
const songVol = document.querySelector('#songVol');

let volNul = false;
volume.addEventListener("input", () => {
    video.volume = parseFloat(volume.value);
    if (volume.value === "0") {
        video.muted = true;
        songVol.src = "images files/Buttons/icn_noSoundBeige.png";
        volNul = true;
    } else {
        video.muted = false;
        songVol.src = "images files/Buttons/icn_musicBeige.png";
        volNul = false;
    }
})


songVol.addEventListener('click', () => {
    const saveVol = video.volume;
    if (volNul === true) {
        console.log('click');
        volume.value = 1;
        video.muted = false;
        video.volume = 1;
        songVol.src = "images files/Buttons/icn_musicBeige.png";
        volNul = false;
    }
    else if (!video.muted) {
        video.muted = true;
        volume.value = 0;
        songVol.src = "images files/Buttons/icn_noSoundBeige.png";
    } else if (video.muted) {
        volume.value = saveVol;
        video.muted = false;
        songVol.src = "images files/Buttons/icn_musicBeige.png";
    }
})

// caroussel swipe left/ right

const caroussel = document.querySelector('.carousel-inner');
const next = document.querySelector('.carousel-control-next');
const previous = document.querySelector('.carousel-control-prev');

caroussel.addEventListener('touchstart', function (event) {
    touchstartX = event.changedTouches[0].screenX;
}, false);

caroussel.addEventListener('touchend', function (event) {
    touchendX = event.changedTouches[0].screenX;
    handleGesture();
}, false);


function handleGesture() {
    if (touchendX < touchstartX) {
        console.log('Swiped Left');
        next.click();
    }
    if (touchendX > touchstartX) {
        console.log('Swiped Right');
        previous.click();
    }
}







