/**
 * Recursive functions are most useful for tree traversal where multiple 
 * nested loops might be required or a function might be re-called from within
 * a loop context to continue another loop.
 * 
 * Recursive functions (along with pointer arithmetic!) are heralded as Joel
 * Saposlky of one of two problems that most people cannot understand and 
 * therefore Joel likes to separate the good software developers from the 
 * underqualified by their ability to understand recursive functions.
 * 
 * @see 
 * https://www.joelonsoftware.com/2006/10/25/the-guerrilla-guide-to-interviewing-version-30/
 * 
 * Below, we'll pretend we have some structure describing a list of websites
 * crawled by a web crawler.  The goal of your recursive function is to check
 * if a link has been crawled in the last day.  If the link has not been crawled
 * in the last day, then it should be recrawled.  The function starts with an
 * object like so:
 *      - url
 *      - last_crawl
 *      - sublinks
 * 
 * The function should return after it is done recursing with the number of 
 * recrawls performed.
 * 
 * If the inputted object has no sublinks, then the function should return 
 * 1 if the link was recrawled, 0 if the link was not recrawled.
 * 
 * If the inputted object has sublinks, loop through this inputted array.  
 * You should recall checkLinks on each sublink object in the loop and 
 * increment a counter by the result.
 * 
 * At the end of your loop, you should then call checkLink on your current 
 * object (url, last_crawl).  If checkLink returns false, then it needs to be
 * recrawled.  Recrawl a link by calling crawlLink on it.  
 * 
 * If the current iteration has had its object recrawled, you should return
 * your counter plus 1.  Otherwise you should return your couner indicating 
 * the number of sublinks that were crawled.
 */