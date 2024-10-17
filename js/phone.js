const loadPhone = async (searchText,isShowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    //console.log(phones);
    displayPhones(phones,isShowAll);
}

const displayPhones = (phones,isShowAll) =>{

    const phoneContainer = document.getElementById('phone-container');

    //Clear Phone Container cards before adding new Cards
    phoneContainer.textContent ='';

    //Display show all button if there are more than 12 Phones
    const showAllContainer = document.getElementById('show-all-container');
    if(phones.length >12 && !isShowAll){
        showAllContainer.classList.remove('hidden');
    }
    else{
        showAllContainer.classList.add('hidden');
    }

    console.log('is Show All',isShowAll);

    //Only display 12 items if not show All 
    if(!isShowAll){
        phones = phones.slice(0,12);
    } 
    

    //console.log(phones);
    phones.forEach(phone=>{
        //console.log(phone);

        //2 Create a Div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`;
        // 3 Set Inner HTML
        phoneCard.innerHTML = `
        <figure>
                      <img
                        src="${phone.image}"
                        alt="Shoes" />
                    </figure>
                    <div class="card-body">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-center">
                        <button onclick="handleShowDetail('${phone.slug}');" class="btn btn-primary">Show Details</button>
                      </div>
                    </div>
        `;

        //4 Append Child
        phoneContainer.appendChild(phoneCard);

    });

    //Hide Loading Spinner
    toggleLoadingSpinner(false);
}


//Search Button
const handleSearch = (isShowAll) =>{
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText,isShowAll);
}


const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }
    else{
        loadingSpinner.classList.add('hidden');
    }
}

//Handle show all
const handleShowAll = () =>{
    handleSearch(true);
}

const handleShowDetail = async(id) =>{
    console.log('Clicked Show Details',id);
    
    //Load Single Phone Data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone = data.data;
    showPhoneDetails(data)


}

const showPhoneDetails = (phone) =>{
    show_details_modal.showModal();
}



//loadPhone();