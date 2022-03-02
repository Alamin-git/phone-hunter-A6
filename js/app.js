// search button function 
const searchPhone = () => {
    const searchFild = document.getElementById('search-field');
    const searchText = searchFild.value;
    // clear data 
    searchFild.value = '';
    // load data 
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => searchResult(data.data))
};
// phone card 
const searchResult = phones => {
    const searchResult = document.getElementById('search-result');
    // clean fild 
    searchResult.textContent = '';
    const errorText = document.getElementById('error-massage');
    // cloar error text 
    errorText.textContent = '';
    if (phones.length === 0) {
        const error = document.createElement('div');
        error.classList.add('result');
        error.innerHTML = `
            <p class="text-danger fs-3">No result found 😔</p>
        `;
        errorText.appendChild(error);
    } else {
        phones.slice(0, 20).forEach(phone => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div class="card">
                <img src="${phone.image}" class="card-img-top w-50  mx-auto d-block mt-2" alt="...">
                <div class="card-body text-center">
                    <h2 class="card-title"><spann class="fs-5">Brand:</spann> ${phone.brand}</h2>
                    <h4 class="card-title"><spann class="fs-6">Model:</spann> ${phone.phone_name}</h4>
                    <button onclick="phoneDetiels('${phone.slug}')" class="btn btn-primary" type="submit">Details</button>
                </div>
            </div>
            `;
            searchResult.appendChild(div);
        });
    }
};
// phone detile api
const phoneDetiels = phoneId => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
        .then(res => res.json())
        .then(data => showPhoneDetiels(data.data))
};
// single card show 
const showPhoneDetiels = phone => {
    console.log(phone);
    const phoneDetiel = document.getElementById('phone-detiel');
    phoneDetiel.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
            <div class="card m-2" style="max-width:850px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${phone.image}" class="img-fluid rounded-start mt-2 ms-2" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h2 class="card-title fs-1">${phone.brand}<h2>
                            <h2 class="fs-4">${phone.name}</h2>
                            <h5 class="fs-6">${phone.releaseDate}</h5>
                            <p class="card-text">
                                <small class="text-muted">Chipset: </small>${phone.mainFeatures.chipSet}
                            </p>
                            <p class="card-text">
                                <small class="text-muted">displaySize: </small>${phone.mainFeatures.displaySize}
                            </p>
                            <p class="card-text">
                                <small class="text-muted">memory: </small>${phone.mainFeatures.memory}
                            </p>
                            <div>
                                <small class="text-muted">sensors: </small>
                                <p class="sensors">
                                ${phone.mainFeatures.sensors[0]}
                                </p >
                                <p class="sensors">
                                ${phone.mainFeatures.sensors[2]}
                                </p >
                                <p class="sensors">
                                ${phone.mainFeatures.sensors[3]}
                                </p >
                                <p class="sensors">
                                ${phone.mainFeatures.sensors[5]}
                                </p >
                                <p class="sensors">
                                ${phone.mainFeatures.sensors[6]}
                                </p >
                                <p class="sensors">
                                ${phone.mainFeatures.sensors[7]}
                                </p >
                                <p class="sensors">
                                ${phone.mainFeatures.sensors[8]}
                                </p >
                                <p class="sensors">
                                ${phone.mainFeatures.sensors[9]}
                                </p >
                                <p class="sensors">
                                ${phone.mainFeatures.sensors[10]}
                                </p >
                            </div >
                        </div >
                    </div >
                </div >
            </div >
    `;
    phoneDetiel.appendChild(div);


}