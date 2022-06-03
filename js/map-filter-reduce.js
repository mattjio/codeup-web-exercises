const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

console.log(users);


let languagesThree = users.filter(function (user) {
    return user.languages.length >= 3;
})

console.log(languagesThree);

let emailToString = users.map(function (user) {
    return user.email;
})

console.log(emailToString);

let totalExperience = users.reduce(function (total,user) {
      return total + user.yearsOfExperience;

}, 0)

console.log(totalExperience)

let averageExperience = totalExperience/users.length;

console.log(averageExperience);

console.log(users[0].email.length);



let emailObj = users.reduce(function (x,y) {
    return x.email.length > y.email.length ? x : y;
});

let longestEmail = emailObj.email;

console.log(longestEmail);



let userString = users.reduce(function (x,y,z) {
    return z == 0 ? y.name : x + ', ' + y.name;
}, '');

console.log(userString);



let langArray = [];
for(let el of users) {
    langArray.push(el.languages)
}

console.log(langArray);

let mergedArrays = [].concat.apply([], langArray);

console.log(mergedArrays);

let numberLanguages = mergedArrays.reduce(function (allLangs, lang) {
    if (lang in allLangs) {
        allLangs[lang]++
    }
    else {
        allLangs[lang] = 1
    }
    return allLangs;
}, {})

console.log(numberLanguages)





console.log(Object.values(numberLanguages))





