/**
 * 
 * @file
 * In this assignment, you need to author a function to perform an arbitrary
 * image search.
 * 
 */


//let keyword = 'flower';

const key     = '&api_key=b2262c0ff71fe60473136cc5ecb7b6a4';

const url     = 'api.flickr.com/';

const search  = '/services/rest/?method=flickr.photos.search';

let id        = '33292307240';

const getInfo = '/services/rest/?method=flickr.photos.getInfo';

let fs        = require('fs');

let filename  = id + '.json';


class ImageSearch {
    constructor(filename) {

        this.keyword = 'flower';
        this.network = require('https');
        //this.getPhoto(keyword);
        //this.getFlickrPhoto(id);
        //this.search();
        //this.id = this.search(this.keyword);

        //this.getFlickrPhoto(this.id);
    }

    /**
     * Gets a photo given a keyword.
     * @param {string} keyword The keyword to search for.  
     * @param {Number} idx (Optional) The index of the results to store.
     */
    getPhoto(keyword, idx = 0) {
        this.search(keyword).then((result) => {
            // flickr's API is weird/bad, must define this fn
            let jsonFlickrApi = function(photos) {
                this.getFlickrPhoto(photos['photos']['photo'][idx]).then((contents) => {
                    this.storeFile(keyword + '.jpg', contents);
                });
            };
            eval(result); // flickr's API is weird
        });
    }

    /**
     * Gets the photo contents and returns the network response as a promise.
     * Takes an input of an ID.
     * @param {String} id The Flickr photo ID.
     * @return {Promise} A promise that resolves with the photo contents of the
     * ID.
     */
    getFlickrPhoto(id) {

        let options = {
            "dataType": "json",
            "method": "GET",
            "hostname": "api.flickr.com",
            "port": null,
            "path": getInfo + "&api_key=b2262c0ff71fe60473136cc5ecb7b6a4&photo_id=" + id +
                    "&format=json&nojsoncallback=?",
            "headers":  {
                "Content-Type": "application/json"
            }
        };

        let req = this.network.request(options, function (res) {
            let chunks = [];

            res.on("data", function (chunk) {
                chunks.push(chunk);
            });

            res.on("end", function () {
                let body = Buffer.concat(chunks);

                body = JSON.parse(body);

                console.log(body);

                 return body.toString();
            });
        });

        req.on('error', (e) => {
            console.error(e);
            return e;
        });

        req.end();
    }

    /**
     * This function should initiate the request and return a promise with the
     * image URL for the first result.  Note that you'll need to initiate two
     * requests to make this happen.
     * 
     * ex. 
     * format=json
     * method=flickr.photos.search
     * api_key=d103d9be76c00510e3738c283338125e
     * text=waterfall
     * 
     * https://www.flickr.com/services/api/flickr.photos.search.html
     * https://www.flickr.com/services/api/flickr.photos.getSizes.html
     * 
     * @param {String} keyword The keyword to search and pass to the Flickr API.
     * @return {Promise} A promise that resolves with the search listing of the
     * inputted keyword.
     */
    search(keyword) {

        let options = {
            "dataType": "json",
            "method": "GET",
            "hostname": "api.flickr.com",
            "port": null,
            "path": search + "&api_key=b2262c0ff71fe60473136cc5ecb7b6a4&tags=" + keyword +
                             "&format=json&nojsoncallback=?",
            "headers":  {
                "Content-Type": "application/json"
            }
        };

        let req = this.network.request(options, function (res) {
            let chunks = [];
            return new Promise(function(resolve, reject) {
            res.on("data", function (chunk) {
                chunks.push(chunk);
            });

            res.on("end", function () {
                let body = Buffer.concat(chunks);

                body = JSON.parse(body);

                console.log('id for the first photo is ' + body.photos.photo[0].id);

                return body.photos.photo[0].id;

            });
        });

        req.on('error', (e) => {
            console.error(e);
            return e;
        });

        req.end();

    }

    /**
     * Stores the file in the filesystem.
     * @param {String} filename The filename to use.
     * @param {String} contents The contents of the file.
     */
    storeFile(filename, contents) {


    }
}

(new ImageSearch()).getPhoto('flower', 0);

module.exports = ImageSearch;