let userItems;

let filteruserItems;

let paginationButton = document.querySelector("#paginationButton");

let currentActivePage = 0;


async function displayUserInfoCard(userfilterFrom, userfilterTo){

    let userurl = "../api/users.json";

    try{
        const userResponse = await fetch(userurl)
        if(!userResponse.ok){
            throw new Error(`User Response status: ${userResponse.status}`);
        }
        userItems = await userResponse.json()
        
        filteruserItems = userItems.slice(userfilterFrom, userfilterTo);

        let itemsContainer = document.querySelector('#itemsContainer');
        itemsContainer.innerHTML = "";
        let fullUserList = "";
        filteruserItems.forEach(userDeatils => {
            fullUserList = `
                <div class="items">
                    <div class="user-img items-lft">
                        <div class="user-image">
                            <img src="${userDeatils.image}" alt="User Images">
                        </div>
                    </div>
                    <div class="items-rgt">
                        <div class="personal-info">
                            <h1 class="info-main-head">Personal Information</h1>
                            <h2 class="name"><span class="bold-span">Name:</span> ${userDeatils.name}</h2>
                            <h4 class="username"><span class="bold-span">User Name:</span> ${userDeatils.username}</h4>
                            <p class="email"><span class="bold-span">Email:</span> ${userDeatils.email}</p>
                            <p class="contact-number"><span class="bold-span">Contact No.</span> ${userDeatils.email}</p>
                        </div>
                        <div class="user-address">
                            <h1 class="info-main-head">Address</h1>
                            <p class="street"><span class="bold-span">Street:</span> ${userDeatils.address.street}</p>
                            <p class="suite"><span class="bold-span">Suite:</span> ${userDeatils.address.suite}</p>
                            <p class="city"><span class="bold-span">City:</span> ${userDeatils.address.city}</p>
                        </div>
                        <div class="company-info">
                            <h1 class="info-main-head">Company Information</h1>
                            <p class="company-name"><span class="bold-span">Company Name:</span> ${userDeatils.company.name}</p>
                            <p><span class="bold-span">Website:</span> ${userDeatils.website}</p>
                            <p class="catch-phrase">${userDeatils.company.catchPhrase}</p>
                            <p class="business"><span class="bold-span">Business:</span> ${userDeatils.company.bs}</p>
                        </div>
                    </div>
                </div>
            `;
            itemsContainer.innerHTML += fullUserList;
        });

        addPaginationButtons();

    } catch(error) {
        console.error(error.message);
    }
}


function updateButtonClick(){
    paginationButton.addEventListener('click', (el) => {
        if(el.target.classList.contains('paginateinnerbtn')){
            const filterPage = parseInt(el.target.textContent) - 1;
            const pageFrom = filterPage * 3;
            const pageTo = pageFrom + 3;
           
            displayUserInfoCard(pageFrom, pageTo);
        }
    });
}


function addPaginationButtons(){

    let totalButtonLength = Math.ceil(userItems.length/3);
    paginationButton.innerHTML = "";

    for(let i=1; i<=totalButtonLength; i++){
        paginationButton.innerHTML += `
            <button class="btn paginateinnerbtn">${i}</button>
        `;
    }
    updateButtonClick();

    let paginationCountButton = document.querySelectorAll('.paginateinnerbtn');
    paginationCountButton.forEach(button => {
        button.addEventListener('click', function(){
            paginationCountButton.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        })
    })

}


displayUserInfoCard(0, 3);


