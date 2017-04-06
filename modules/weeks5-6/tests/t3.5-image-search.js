var imageSearch = 
    new (require(__dirname + '/../solutions/s3.5-image-search.js'))();
describe('3.5 -- Image search', function() {
    it('Should use the request library.', () => {
        expect(typeof imageSearch.network.get).toBe('function');
        expect(typeof imageSearch.network.post).toBe('function');
    });
    
    it('Should correctly search for a waterfall image.', (done) => {
        let promise = imageSearch.search('waterfall mystical');
        expect(typeof promise.then).toBe('function'); // it's a promise
        promise.then((results) => {
            let waterfall = results.photos.photo.filter((photo) => {
                if (photo.id == '32930639053') {
                    return true;
                }
                return false;
            });
            expect(waterfall.length).toBe(1);
            expect(waterfall[0].title).toBe('Mystical waterfall');
            done();
        });
    });
    
    it('Should correctly download an image by ID.', (done) => {
        let promise = imageSearch.getFlickrPhoto('32930639053');
        expect(typeof promise.then).toBe('function'); // it's a promise
        promise.then((result) => {
            expect(result.length).toBe(2419943);
            done();
        });
    });
});