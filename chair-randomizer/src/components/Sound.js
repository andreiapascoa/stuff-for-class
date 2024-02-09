import drumsSound from '../assets/drumroll.ogg';
import badumSound from '../assets/badum.ogg';
import finalSound from '../assets/rick.ogg';

class Sound {
    constructor(times) {
        this.drums = new Audio(drumsSound);
        this.drums.loop = true;
        this.badum = new Audio(badumSound);
        this.playing = false;
        this.times = times;
        this.counter = 0;
    };

    suspense() {
        if (this.counter >= this.times) {
            return;
        }

        this.badum.pause();
        this.badum.currentTime = 0;
        this.drums.play();
        this.playing = true;
    };

    tada() {
        if (this.counter >= this.times) {
            return;
        }

        this.drums.pause();
        this.drums.currentTime = 0;
        this.badum.play();
        this.playing = false;
        this.counter++;

        if (this.counter === this.times) {
            this.badum.onended = () => (new Audio(finalSound)).play();
        }
    };

    isPlaying() {
        return this.playing;
    };
}

export default Sound;