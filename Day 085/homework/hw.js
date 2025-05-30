let premiumUsed = false; 

document.addEventListener('keydown', function(e) {
    if (e.key === 'a') {
        const sound = new Audio('mixkit-drum-deep-impact-563.wav');
        sound.play();
    } else if (e.key === 's') {
        const sound = new Audio('mixkit-drum-joke-accent-579.wav');
        sound.play();
    } else if (e.key === 'd') {
        const sound = new Audio('mixkit-hard-horror-hit-drum-565.wav');
        sound.play();
    } else if (e.key === 'f') {
        const sound = new Audio('mixkit-joke-drums-578.wav');
        sound.play();
    } else if (e.key === 'p') {  
        if (!premiumUsed) {
            const sound = new Audio('mixkit-drum-roll-566.wav');
            sound.play();
            premiumUsed = true;
        } else {
            alert('Premium sound is available only once!');
        }
    }
});
