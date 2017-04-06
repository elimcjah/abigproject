/**
 * @author Mike Whitfield
 * A "static route" is a "middleware" that reads the filesystem, and uses the 
 * appropriate content-type and other needed header information to serve files.  
 * 
 * Servers typically have functioned to send the majority of its files via
 * the filesystem.  For instance, placing an index.html file into the "www/"
 * or "public/" directory has long been a pattern of web servers.  
 * 
 * We can prove the utility of a web server in that it has a set of common
 * files served by a web server.
 */
