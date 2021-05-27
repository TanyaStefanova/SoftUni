function softUniStudents(arr) {
    let courses = {};

    for (let line of arr) {
        if (line.includes(':')) {
            let [course, capacity] = line.split(': ');
            capacity = Number(capacity);
            if (!courses.hasOwnProperty(course)) {
                courses[course] = {};
                courses[course]['capacity'] = capacity;
            } else {
                courses[course]['capacity'] += capacity;
            }
        } else {
            let [userInfo, course] = line.split(' joins ');
            if (courses.hasOwnProperty(course) && courses[course]['capacity'] > 0) {
                if (!courses[course].hasOwnProperty('students')) {
                    courses[course]['students'] = [];
                }
                let [userName, email] = userInfo.split(' with email ');
                let [user, credits] = userName.split('[');
                credits = credits.substring(0, credits.length - 1);
                courses[course]['students'].push({credits, user, email});
                courses[course]['capacity']--;
            }
        }
    }
    Object.keys(courses).sort((a, b) => courses[b].students.length - courses[a].students.length)
    .map(k=> {
        courses[k].students = courses[k].students.sort((a, b) => b.credits - a.credits)
        return k;
    }).forEach(k => {
        let {course, capacity, students} = {course: k, ...courses[k]}
        console.log(`${course}: ${capacity} places left\n${students.map(s=>`--- ${s.credits}: ${s.user}, ${s.email}`).join('\n')}`)
    })
}
softUniStudents(['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore'])