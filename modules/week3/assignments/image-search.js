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

//let id        = '33292307240';

const getInfo = '/services/rest/?method=flickr.photos.getInfo';

let fs        = require('fs');

//let filename  = id + '.json';

let keyword   = 'flower';


class ImageSearch {
    constructor(filename) {

        this.keyword = 'flower';
        this.network = require('https');
        //this.getPhoto(keyword);
        //this.getFlickrPhoto(id);
        //this.search(keyword);
        this.filename = '';

        //this.getFlickrPhoto(this.id);
    }

    /**
     * Gets a photo given a keyword.
     * @param {string} keyword The keyword to search for.  
     * @param {Number} idx (Optional) The index of the results to store.
     */
    getPhoto(keyword) {

        this.search(keyword).then((results) =>

            console.log(results)

            //this.getFlickrPhoto(resolve).then((results) =>
            //
            //      //console.log(results)
            //
            //     this.storeFile(results).then((results) =>
            //
              //     console.log(results)
            //)

        )

    }

    /**
     * Gets the photo contents and returns the network response as a promise.
     * Takes an input of an ID.
     * @param {String} id The Flickr photo ID.
     * @return {Promise} A promise that resolves with the photo contents of the
     * ID.
     */
    getFlickrPhoto(id) {

        return new Promise((resolve, reject) => {

            let options = {
                "dataType": "json",
                "method": "GET",
                "hostname": "api.flickr.com",
                "port": null,
                "path": getInfo + "&api_key=b2262c0ff71fe60473136cc5ecb7b6a4&photo_id=" + id +
                "&format=json&nojsoncallback=?",
                "headers": {
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

        })
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


        // TODO Add a reject resolve
        return new Promise((resolve, reject) => {

            let options = {
                "dataType": "json",
                "method": "GET",
                "hostname": "api.flickr.com",
                "port": null,
                "path": search + "&api_key=b2262c0ff71fe60473136cc5ecb7b6a4&tags=" + keyword +
                "&format=json&nojsoncallback=?",
                "headers": {
                    "Content-Type": "application/json"
                }
            }

            console.log('152');

            this.network.request(options, function (res, error) {

                let chunks = [];

                res.on("data", function (chunk) {
                    chunks.push(chunk);
                })

                res.on("end", function () {
                    let body = Buffer.concat(chunks);

                    body = JSON.parse(body);

                    console.log('id for the first photo is ' + body.photos.photo[0].id);

                    resolve(body.photos.photo[0].id);

                })


                res.on('error', (error) => {
                    console.error(error);
                    return error;
                });

                res.end();

            })

        })

    }



    /**
     * Stores the file in the filesystem.
     * @param {String} filename The filename to use.
     * @param {String} contents The contents of the file.
     */
    static storeFile(contents) {

    //     console.log(contents);
    //
    //     return new Promise((resolve, reject) => {
    //
    // });

    }
}

//(new ImageSearch()).getPhoto('flower', 0);

(new ImageSearch()).getPhoto(keyword);

//(new ImageSearch()).search(keyword);

// module.exports = ImageSearch;