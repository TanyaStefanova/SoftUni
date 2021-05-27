function comments(array) {
    let collection = {};
    let listOfUsers = [];

    for (let line of array) {
        if (line.includes('user')) {
            let userName = line.split('user ') [1];

            listOfUsers.push(userName);
        } else if (line.includes('article')) {
            let articleName = line.split('article ') [1];
            
            collection[articleName] = {};
        } else if (line.includes('posts on')) {
            let [username, articleInfo] = line.split(' posts on ');
            let [articleName, commentInfo] = articleInfo.split(': ');
            let [commentTitle, commentContent] = commentInfo.split(', ');

            Object.keys(collection).forEach((article) => {
                if (article === articleName && listOfUsers.includes(username)) {
                    if (!collection[article].hasOwnProperty(username)) {
                        collection[article][username] = [{commentTitle, commentContent}];
                    } else {
                        collection[article][username].push({commentTitle, commentContent});
                    }
                }
            })
        }
    
    }
    
    let sorted = Object.entries(collection)
    .sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length);

    sorted.forEach((element) => {
        console.log(`Comments on ${element[0]}`)
        let sortedByUsernames = Object.entries(element[1])
        .sort((a, b) => a[0].localeCompare(b[0]));

        sortedByUsernames.forEach((username) => {
            username[1].forEach((info) => {
                console.log(`--- From user ${username[0]}: ${info.commentTitle} - ${info.commentContent}`)
            });
        });     
    });
}

comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4',
    'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'])