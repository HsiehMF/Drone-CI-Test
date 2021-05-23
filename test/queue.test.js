const queue = require('./queue');

describe('PhotoQueue Test', () => {
    test('fetch the first imagePath from queue.', () => {
        expect(queue.getJob()).toBe("/img/logo.jpg");
        expect(queue.jobs).toEqual([]);
    })

    test('user add image and stored in the queue.', () => {
        let userSelectImage = '/img/banner.jpg';
        queue.addToQueue(userSelectImage);
        let length = queue.jobs.length -1;
        expect(queue.jobs[length]).toBe('/img/banner.jpg');
    })

    test('user remove the unselected image from the queue.', () => {
        let userRemoveImage = '/img/banner.jpg';
        queue.removeFromQueue(userRemoveImage);
        expect(queue.jobs).toEqual([]);
    });

    test('test image processing thread.', () => {
        let userSelectImage = ['/img/photo1.jpg', '/img/photo2.jpg', '/img/photo3.jpg'];
        queue.addToQueue(userSelectImage);
        while (!(queue.isEmpty())) {
            queue.getJob();
        }
        expect(queue.jobs).toEqual([]);
    })
})