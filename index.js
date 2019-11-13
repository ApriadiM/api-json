const fetchFollowing = () => {
    fetch("https://api.github.com/users/apriadim/following")
    .then(response => {
        return response.json();
    })
    .then(data => {
        let getFollowing = document.getElementById
        ("following-list");
        data.map(item => {
            let eachList = document.createElement("img");
            let textList = document.createTextNode(item.login);
            eachList.setAttribute("src", item.avatar_url);
            eachList.appendChild(textList);
            getFollowing.appendChild(eachList);
        });
        console.log(data);
    });
};

const fetchFollowers = () => {
    fetch("https://api.github.com/users/apriadim/followers")
    .then(response => {
        return response.json();
    })
    .then(data => {
        let getFollowers = document.getElementById
        ("followers-list");
        data.map(item => {
            let eachList = document.createElement("img");
            let textList = document.createTextNode(item.login);
            eachList.setAttribute("src", item.avatar_url);
            eachList.appendChild(textList);
            getFollowers.appendChild(eachList);
        });
        console.log(data);
    });
};

fetchFollowing();
fetchFollowers();