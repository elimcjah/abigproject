/**
 * 
 * @file
 * In this assignment, you need to author a function to perform an arbitrary
 * image search.  You'll be using the Flickr API with a predefined "key".
 * An API is a network endpoint (or URL) that usually returns JSON.  When a 
 * network endpoint returns JSON, it becomes easy to work with.
 * 
 * The trick with API's is that they don't always provide their data or 
 * "API endpoints" in the format you want.  In this assignment, you'll first
 * use the "search" endpoint which returns a list of photo ID's.  Rather than
 * making it easy, Flickr uses photo ID's internally.  You'll need to run the
 * "getSizes" endpoint to get information about the actual photo URL.
 * 
 * Why do websites do this?  Two answers: they protect their assets by making
 * core data obscure to get at, and at larger scales different teams are 
 * responsible for different parts of a system.  The latter circumstance results
 * that teams create internal mechanisms to communicate, and without good 
 * leadership, customers (in this case, you'll be an "API customer") are
 * forced to use sort through this organizational complexity as well.
 * 
 */
class ImageSearch {
    constructor() {
        // this.network = require(''); // require the module needed to make requests
    }

    /**
     * Gets a photo given a keyword.
     * @param {string} keyword The keyword to search for.  
     * @param {Number} idx (Optional) The index of the results to store.
     * @returns {Promise} A promise that resolves with
     */
    getPhoto(keyword, idx = 0) {
        return new Promise((resolve, reject) => {
            this.search(keyword).then((photos) => {
                this.getFlickrPhoto(photos['photos']['photo'][idx])
                    .then((contents) => {
                        this.storeFile(__dirname + '/photos/' + 
                            keyword + '.jpg', contents);
                        resolve();
                    });
            });
        });
    }

    /**
     * Gets a photo file from a URL.  Requests the URL using a binary encoding
     * which is important.
     * @param {String} url The url from which to retrieve the photo.
     * @returns {Promise} A promise that reoslves with the photo file.
     */
    getPhotoFile(url) {
        return new Promise((resolve, reject) => {
                this.network({
                encoding: 'binary',
                url: url
            }, (err, response, body) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(body);
                }
            });
        });
    }

    /**
     * Gets the photo contents and returns the network response as a promise.
     * Takes an input of an ID.
     * @param {String} id The Flickr photo ID.
     * @return {Promise} A promise that resolves with the photo contents of the
     * ID.  You should collect the largest available photo.
     */
    getFlickrPhoto(id) {
        // TODO
    }

    /**
     * This function should initiate the request and return a promise with the
     * image URL for the first result.  Note that you'll need to initiate two
     * requests to make this happen.
     * 
     * ex. 
     * https://api.flickr.com/services/rest
     *      format=json
     *      method=flickr.photos.search
     *      api_key=d103d9be76c00510e3738c283338125e
     *      text=waterfall
     *      nojsoncallback=1
     * 
     * https://www.flickr.com/services/api/flickr.photos.search.html
     * https://www.flickr.com/services/api/flickr.photos.getSizes.html
     * 
     * @param {String} keyword The keyword to search and pass to the Flickr API.
     * @return {Promise} A promise that resolves with the search listing of the
     * inputted keyword.
     */
    search(keyword) {
        // this.network(SOME_URL, SOME_CALLBACK)
        // TODO
    }

    /**
     * Stores the file in the filesystem.  Uses synchronous functions.  Saves
     * to a 'photos' directory.
     * @param {String} filename The filename to use.
     * @param {String} contents The contents of the file.
     */
    storeFile(filename, contents) {
        if (!require('fs').existsSync(__dirname + '/photos')) {
            require('fs').mkdirSync(__dirname + '/photos');
        }
        require('fs').writeFileSync(filename, 
            contents, 'binary');
    }
}

module.exports = ImageSearch;