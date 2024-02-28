const loadPhone = async() =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`);
    const phoneObject = await res.json();
    const phoneData = phoneObject.data;
    showPhones(phoneData);
}

const showPhones = phones =>{
    phones.forEach(phone => {
        console.log(phone)
        //parent div
        const phoneContainer = document.getElementById('phone_container');

        //create element
        const phoneDiv =document.createElement('div');
        phoneDiv.classList = `card w-96 bg-base-100 shadow-xl`;
        phoneDiv.innerHTML = `
        <figure class="px-10 pt-10">
          <img src="${phone.image}" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <p class="text-3xl font-bold">$ 900</p>
          <div class="card-actions">
            <button class="btn btn-primary font-bold">Show Details</button>
          </div>
        </div> `;

      //append
      phoneContainer.appendChild(phoneDiv);


        
    });
}

loadPhone();