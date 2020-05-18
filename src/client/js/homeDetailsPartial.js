function setNewActiveHomeDetail(newDiv) {
    //remove active class 
    document.querySelector('.activeShowTab').setAttribute('class', '');
    //set new active class
    document.getElementById(newDiv).setAttribute('class', 'activeShowTab');
}



async function loadEpisodesPartial() {
    let data = await getDataFromPartial('./client/views/episodesPartial.html');
    document.getElementById('showDetailsDiv').innerHTML = data;

    setNewActiveHomeDetail('episodesDiv')
}

async function loadTrailersPartial() {
    let data = await getDataFromPartial('./client/views/trailersPartial.html');

    document.getElementById('showDetailsDiv').innerHTML = data;

    setNewActiveHomeDetail('trailersDiv')
}

async function loadMoreLikeThisPartial() {
    let data = await getDataFromPartial('./client/views/morelikethisPartial.html');

    document.getElementById('showDetailsDiv').innerHTML = data;

    setNewActiveHomeDetail('moreDiv')
}