import { apiFetchUrl } from './dynamicAPI.js';

let itemsContainers = document.querySelector('#itemsContainer');

apiFetchUrl('/users')
    .then((userData) => {
        console.log(userData);
        userData.forEach(allUserData => {
            itemsContainers.innerHTML += `
                <div class="items">
                    <div class="items-rgt">
                        <div class="personal-info">
                            <h1 class="info-main-head">Personal Information</h1>
                            <h2 class="name"><span class="bold-span">Name:</span> ${allUserData.name}</h2>
                            <h4 class="username"><span class="bold-span">User Name:</span> ${allUserData.username}</h4>
                            <p class="email"><span class="bold-span">Email:</span> ${allUserData.email}</p>
                            <p class="contact-number"><span class="bold-span">Contact No.</span> ${allUserData.email}</p>
                        </div>
                        <div class="user-address">
                            <h1 class="info-main-head">Address</h1>
                            <p class="street"><span class="bold-span">Street:</span> ${allUserData.address.street}</p>
                            <p class="suite"><span class="bold-span">Suite:</span> ${allUserData.address.suite}</p>
                            <p class="city"><span class="bold-span">City:</span> ${allUserData.address.city}</p>
                        </div>
                        <div class="company-info">
                            <h1 class="info-main-head">Company Information</h1>
                            <p class="company-name"><span class="bold-span">Company Name:</span> ${allUserData.company.name}</p>
                            <p><span class="bold-span">Website:</span> ${allUserData.website}</p>
                            <p class="catch-phrase">${allUserData.company.catchPhrase}</p>
                            <p class="business"><span class="bold-span">Business:</span> ${allUserData.company.bs}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }) .catch((err) => {
        console.error(err)
    })