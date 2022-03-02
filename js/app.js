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
}