class PhotoJobQueue {
    constructor() {
        this.jobs = ['/img/logo.jpg'];
    }

    addToQueue(imagePath) {
        return this.jobs.push(imagePath);
    }

    removeFromQueue(imagePath) {
        let seletedToRemoveIndex = this.findIndex(imagePath);
        if (seletedToRemoveIndex !== -1)
            return this.jobs.splice(seletedToRemoveIndex, 1);
        else
            return;
    }

    isEmpty() {
        return this.jobs.length === 0;
    }

    findIndex(imagePath) {
        return this.jobs.indexOf(imagePath);
    }

    getJob(index = 0) {
        return this.jobs.pop(index);
    }
}

let photoJobQueue = new PhotoJobQueue();

module.exports = photoJobQueue;