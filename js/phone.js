const loadPhone = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    //console.log(phones);
    displayPhones(phones);
}

const displayPhones = phones =>{

    const phoneContainer = document.getElementById('phone-container');

    //console.log(phones);
    phones.forEach(phone=>{
        console.log(phone);

        //2 Create a Div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 w-96 shadow-xl`;
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
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
        `;

        //4 Append Child
        phoneContainer.appendChild(phoneCard);

    })
}

loadPhone();