const searchPhone = () => {
    const searchFild = document.getElementById('search-field');
    const searchText = searchFild.value;
    searchFild.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => searchResult(data.data))
    // console.log(url);
};
/* const phoneDetiels = () => {
    fatch()
} */
const searchResult = phones => {
    const searchResult = document.getElementById('search-result');
    phones.forEach(phone => {
        // console.log(typeof (phone.slug));
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
};

const phoneDetiels = phoneId => {
    // console.log(phoneId);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
        .then(res => res.json())
        .then(data => showPhoneDetiels(data.data))
};

const showPhoneDetiels = phone => {
    console.log(phone);
    const phoneDetiel = document.getElementById('phone-detiel');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
            <div class="card mb-3" style="max-width: 550px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${phone.image}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>


    `;
    phoneDetiel.appendChild(div);


}