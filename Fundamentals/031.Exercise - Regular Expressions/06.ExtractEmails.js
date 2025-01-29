function solve(inp) {

    let pattern = /[^\.\-_\s][(\w+\-_\.]+@[(\w+\-_\.+]+[^\.\-_\s]/g
    let emails = inp.match(pattern);
    emails.forEach(element => { console.log(element) });        
}

solve(`Please contact us at: support@github.com.`);
solve(`Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.`);
solve(`Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.`);