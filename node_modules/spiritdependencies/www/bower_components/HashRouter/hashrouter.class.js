/**
 * Simple access to the Hashbang with listeners, filters and query string 
 * deconstruction.
 */
class HashRouter {
    constructor() {
      if (HashRouter.instance) {
        return HashRouter.instance;
      }
      this.currentHash = HashRouter.toObject(window.location.hash);
      this.filterID = -1;
      this.filters = [];
      this.hook();
      HashRouter.instance = this;
    }

    /**
     * Changes the hashbang.
     * @param {String|Object} to The new value to change to.  If string,
     * replaces whole hash!
     * @param {Function} cb If provided, calls on complete.
     */
    change(to, cb) {
      let key;
      if (typeof to == 'string') {
        window.location.hash = to;
        this.currentHash = HashRouter.toObject(to);
        console.warn('HashRouter: Hash overwritten', to);
      } else if (typeof to == 'object') {
        for (key in to) {
          this.currentHash[key] = to[key];
        }
        if (Object.keys(this.currentHash).length > 0) {
          window.location.hash = $.param(this.currentHash);
        }
      }
    }

    /**
     * Clears filter by ID or clears all filters if no filterID provided.
     * @param {String?} filterID ID to clear.
     */
    clear(filterID) {
      if (this.filters.hasOwnProperty(filterID)) {
        delete this.filters[filterID];
      } else if (!filterID) {
        this.filters = {};
        console.warn('HashRouter: Clearing all filters');
      }
    }

    /**
     * Checks a filter against the current hashbang.  If filter is string,
     * checks against whole hashbang.  If function, passes hashbang into that
     * function.  If Object, checks each key against filter.  If Object key 
     * value is function, passes hashbang key value as parameter into that
     * function.
     * @param {String|Object|Function} filter The filter to check against the
     * URL hash.
     * @return {Boolean} True if the hash passes the filters.
     */
    check(filter) {
      let key;
      if (typeof filter == 'string') {
        return window.location.href.substr(1) == filter;
      } else if (typeof filter == 'function') {
        return filter(window.location.href.substr(1));
      } else {
        for (key in filter) {
          if (this.currentHash[key] != filter[key]) {
            return false;
          }
        }
      }

      return true;
    }
    /**
     * Hooks a listsner to 'hashchange' event.
     */
    hook() {
      let fn = (e) => {
        let filterID;
        if (window.location.hash) {
          this.currentHash = HashRouter.toObject(window.location.hash);
        }
        for (filterID in this.filters) {
          if (this.check(this.filters[filterID][0])) {
            this.filters[filterID][1](this.currentHash);
          }
        }
      }
      window.addEventListener('hashchange', fn);
      window.addEventListener('load', fn);
    }

    /**
     * Creates a filter with a callback.  Returns the filter ID.
     * @param {String|Object|Function} filter The filter to add.
     * @param {Function} cb Function called when filter passes.
     * @return {String} Filter ID, used for clearing filter.
     */
    on(filter, cb) {
      this.filters[++this.filterID] = [filter, cb];
      return this.filterID;
    }
    
    /**
     * Helper function converts hash into Object.
     * @param {String?} A string that defaults to the hash.
     * @return {Object} A map of the hash.
     */
    static toObject(str) {
      return (str.length == 0) ? {} : (str || window.location.hash)
        .replace(/(^\#)/,'').split("&")
        .map(function(n){return n = n.split("="),this[n[0]] = n[1],this}
        .bind({}))[0];
    }
}

// fallback
(function(window) {

  // exit if the browser implements that event
  if ( "onhashchange" in window.document.body ) { return; }

  var location = window.location,
    oldURL = location.href,
    oldHash = location.hash;

  // check the location hash on a 100ms interval
  setInterval(function() {
    var newURL = location.href,
      newHash = location.hash;

    // if the hash has changed and a handler has been bound...
    if ( newHash != oldHash && typeof window.onhashchange === "function" ) {
      // execute the handler
      window.onhashchange({
        type: "hashchange",
        oldURL: oldURL,
        newURL: newURL
      });

      oldURL = newURL;
      oldHash = newHash;
    }
  }, 100);

})(window);

var $hashRouter = new HashRouter();