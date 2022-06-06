//const URL = "https://api.github.com/users/mattjio/events/public"

//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



//fetch(URL, {headers: {'Authorization': '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'}})
    //.then(response => response.json()).then((data) => {
        //console.log(data[0])
//})
    //.catch(error => console.error(error));



// fetch(URL).then( response => {
//
//         console.log(response)
//     });

function lastCommitDate(user) {
        fetch('https://api.github.com/users/'+user+'/events/public', {headers: {'Authorization': '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'}})
            .then(response => response.json()).then((data) => {
                console.log('Last commit was on : ' + data[0].created_at.slice(0,10))
        })
            .catch(error => console.error(error));
}

lastCommitDate('mattjio');
