//Get Ads from Linkvertise
function getAds(searchTerm){
    const script = document.createElement("script");
    script.src ="https://integrate.linkvertise.com/serp-script.js";
    script.async = true;
    script.id="lv-ads";
    script.setAttribute("data-integration-id", "13");
    script.setAttribute("data-ad-number",'3');
    script.setAttribute("data-keyword",searchTerm);
    script.setAttribute("data-jsonp",'displayAds');
    document.head.appendChild(script);
}
//Show Ads
function displayAds(ads){
    //Create Ad Container
    const adsContainer = document.getElementById('ad-results');
    adsContainer.innerHTML = '';
    //Loop ads and append them to container
    ads.forEach(ad => {
        //Create Ad Result Element
        const adElement = document.createElement('div');
        adElement.classList.add('ad');
       /* adElement.innerHTML = `
            <a href="${ad.clickout_url}" target="_blank">
                <div id="ad-header">
                    <img src=${escapeHtml(ad.thumbnail_url)}>
                    <p>${escapeHtml(ad.target_url)}</p>
                </div>
                <h3>${escapeHtml(ad.title)} - ${escapeHtml(ad.call_to_action)}</h3>
                <p>${escapeHtml(ad.description)}</p>
            </a>
        `;*/
        adElement.innerHTML = `
            <a href="${ad.clickout_url}" target="_blank">
                <div id="ad-header">
                    <p id="ad-icon">Ad</p>
                    <p>${escapeHtml(ad.target_url)}</p>
                </div>
                <h3>${escapeHtml(ad.title)} - ${escapeHtml(ad.call_to_action)}</h3>
                <p>${escapeHtml(ad.description)}</p>
            </a>
        `;
        //Append ad to container
        adsContainer.appendChild(adElement);
    });
}