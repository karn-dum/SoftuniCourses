function solve(inp) {

    let courses = {};
    
    for ( let el of inp ) {
        let [course, capacity] = el.split(' ');
        if( capacity !== 'with' ){
            addCourse(courses, course, Number(capacity));
        } else {
            [ student, em1, em2, email, em3, course ] = el.split(' ');
            addStudent(courses, student, email, course);
        }        
    }
    // console.log(JSON.stringify(courses, null, 2));
    let ent1 = Object.entries(courses);
    let ent2 = ent1.map( x => {
        let arr = [];
        arr.push(x[0]);
        arr.push(Object.entries(x[1]));
        return arr;
    } );
    ent2.sort(( a, b ) => {
        let x = a[1][1][1].length;
        let y = b[1][1][1].length;
        return y - x;
        
    });
    ent2.forEach( x => {
        console.log(`${x[0]}: ${x[1][0][1]} places left`);
        x[1][1][1].sort( (a, b) => {
            let y = a[2];
            let z = b[2];
            return z - y;
        } );
        x[1][1][1].forEach( p => console.log(`--- ${p[2]}: ${p[0]}, ${p[1]}`));
    });
}
/*-------------------------------------------------------------------------------------------------------------------------*/
function addCourse(courses, course, capacity) {
    
    course = course.split(':')[0];
        
    if ( !courses.hasOwnProperty(course)){
        courses[course] = {};
        courses[course]['capacity'] = 0;
        courses[course]['students'] = [];
    }
    courses[course]['capacity'] += capacity;
}
function addStudent(courses, student, email, course){
    let [ user, credits] = student.split('[');
    user = user.split(':')[0];
    credits = Number(credits.split(']')[0]);
    
    if ( courses.hasOwnProperty(course) && courses[course]['capacity']  > 0 ) {
        let currenStudent = [];
        currenStudent.push(user, email, credits);
        courses[course]['students'].push(currenStudent);
        courses[course]['capacity']--;
    }      
}


solve(
  [
    "JavaBasics: 2",
    "user1[25] with email user1@user.com joins C#Basics",
    "C#Advanced: 3",
    "JSCore: 4",
    "user2[30] with email user2@user.com joins C#Basics",
    "user13[50] with email user13@user.com joins JSCore",
    "user1[25] with email user1@user.com joins JSCore",
    "user8[18] with email user8@user.com joins C#Advanced",
    "user6[85] with email user6@user.com joins JSCore",
    "JSCore: 2",
    "user11[3] with email user11@user.com joins JavaBasics",
    "user45[105] with email user45@user.com joins JSCore",
    "user007[20] with email user007@user.com joins JSCore",
    "user700[29] with email user700@user.com joins JSCore",
    "user900[88] with email user900@user.com joins JSCore",
  ],
);
