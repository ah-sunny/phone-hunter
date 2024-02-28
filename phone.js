const loadPhone = async (searchPhone) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`);
    const phoneObject = await res.json();
    const phoneData = phoneObject.data;
    showPhones(phoneData);
}

const showPhones = phones =>{
    //parent div
    const phoneContainer = document.getElementById('phone_container');
    //claer phone container before adding new 
    phoneContainer.textContent = '';
    
    phones.forEach(phone => {
        console.log(phone)
        
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

const searchHandle = () =>{
    const inputElement = document.getElementById('search_phone');
    const searchText = inputElement.value;
    //console.log(searchText);
    loadPhone(searchText);
}

//loadPhone();