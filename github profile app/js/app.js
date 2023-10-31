const APIURL = "https://api.github.com/users/";
const main = document.querySelector("#main");
const searchBox = document.getElementById("search");

const getUser = async (username) => {
    const reponse = await fetch(APIURL + username);
    const data = await reponse.json();
    console.log(data);
    // console.log(reponse)
    const card = `
  

    <div class="card">
            <div class="avtar">
                <img src="${data.avatar_url}" alt="image" style="height: 6rem;width: 6rem;border-radius: 3rem;">
            </div>

            <div class="info">
                <h2>${data.name}</h2>
                <h3>${data.bio}</h3>

                <div class="user-info">
                    <ul>
                        <li>${data.followers} <strong>Followers</strong></li>
                        <li>${data.following} <strong>Followings</strong></li>
                        <li>${data.public_repos} <strong>Repos</strong></li>
                    </ul>
                </div>

                <div id="repos"> 
                
                </div>
              

                
            </div>
        </div>
    `

    main.innerHTML = card;
    getRepos(username);
}

// getUser("purohitharshit");

getRepos = async (username) =>{
    const repos = document.getElementById('repos');
    const response = await fetch(APIURL + username + "/repos");
    const data = await response.json();
    console.log(data);

    data.forEach((item) => {
        const elem = document.createElement("a");

        elem.classList.add("repo");
        // elem.href = item.url;
        elem.href = item.html_url;
        elem.innerText = item.name;
        elem.target = "_blank";
        repos.appendChild(elem);

    })
}

const submitSearch = () => {

    if(searchBox.value != " "){
        getUser(searchBox.value);
        searchBox.value="";
    }
    return false;
}

searchBox.addEventListener("focusout",
function(){
    submitSearch();
})


// <div class="" id="repos">
//     <a href="">Repo 1</a>
//     <a href="">Repo 2</a>
//     <a href="">Repo 3</a>
// </div>