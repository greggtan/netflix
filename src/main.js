
async function getDataFromPartial(url) {
    console.log(url);
    const res = await fetch(url)
    try {
        const data = await res.text();
        console.log(data)
        return data;
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
};

async function getDataFromServer(url) {
    console.log(url);
    const res = await fetch(url)
    try {
        const data = await res.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
};


function setNewActive(newDiv){
    //remove active class 
    document.querySelector('.activeTab').setAttribute('class','navIcon flexColumn');
    //set new active class
    document.getElementById(newDiv).setAttribute('class','navIcon flexColumn activeTab');
}






home();

async function home(){
    let data = await getDataFromPartial('./client/views/homePartial.html');

    let contentDiv = document.getElementById('contentDiv');
    //load into contentDiv
    contentDiv.innerHTML = data;



    //get js to work by getting script tag in contentdiv, and eval it.
    const scriptElement = contentDiv.getElementsByTagName("script")[0];

    console.log(scriptElement);

    eval(scriptElement.innerHTML);

    setNewActive('homeBtn');
    

}


async function search(){
    let data = await getDataFromPartial('./client/views/searchPartial.html');

    document.getElementById('contentDiv').innerHTML = data;

    setNewActive('searchBtn');
}

async function comingSoon(){
    //fetch partial html css and js and convert to .text
    let data = await getDataFromPartial('./client/views/comingSoonPartial.html');

    let contentDiv = document.getElementById('contentDiv');
    //load into contentDiv
    contentDiv.innerHTML = data;

    //get js to work by getting script tag in contentdiv, and eval it.
    const scriptElement = contentDiv.getElementsByTagName("script")[0];
    eval(scriptElement.innerHTML);



    //set bottom button to active button (white)
    setNewActive('comingSoonBtn');

    

}

async function downloads(){
    let data = await getDataFromPartial('./client/views/downloadsPartial.html');

    document.getElementById('contentDiv').innerHTML = data;

    setNewActive('downloadsBtn');

}

async function more(){
    let data = await getDataFromPartial('./client/views/morePartial.html');

    document.getElementById('contentDiv').innerHTML = data;

    setNewActive('moreBtn');
}


