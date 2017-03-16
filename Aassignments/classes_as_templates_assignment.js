/**
 * Create your own class to use as a template and create five objects from the 
 * class. For example, if using the Books example from 3.8 create five books.
 * Place the objects into an array called 'all_objects'. 
 */

class Framework{
    constructor(name, language, description, url, github_score, stackoverflow_score){

        this.name                = name;
        this.language            = language;
        this.description         = description;
        this.url                 = url;
        this.github_score        = github_score;
        this.stackoverflow_score = stackoverflow_score;

    };
}

all_objects = [];

let asp_dot_net = new Framework('ASP.NET', 'C#', 'Web Development with Power, Productivity and Speed',
    'http://www.asp.net', null, 100);
let angular_js  = new Framework('Angular JS', 'Javascript', 'AngularJS lets you write client-side web applications ' +
    ' as if you had a smarter browser.', 'http://angularjs.org/', 98, 97);
let rails       = new Framework('Ruby on Rails', 'Ruby', "Web development that doesn't hurt", 'http://rubyonrails.org',
    94, 98);
let react       = new Framework('React','JavaScript','A declarative, efficient, and flexible JavaScript library for ' +
    'building user interfaces.', 100, 82);
let django      = new Framework('Django', ' Python', 'Django is a high-level Python Web framework that encourages ' +
    'rapid development and clean, pragmatic design.', 90, 93);


all_objects.push(asp_dot_net, angular_js, rails, react, django);

