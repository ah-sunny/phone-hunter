const loadPhone = async (searchPhone,isShowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`);
    const phoneObject = await res.json();
    const phoneData = phoneObject.data;
    showPhones(phoneData,isShowAll);
}

const showPhones = (phones,isShowAll) =>{
    //parent div
    const phoneContainer = document.getElementById('phone_container');
    //claer phone container before adding new 
    phoneContainer.textContent = '';
    
//display "show all" button -- if
const showButton = document.getElementById('show-button') 
if(phones.length > 5 && !isShowAll){
    showButton.classList.remove('hidden');
}else{
    showButton.classList.add('hidden');
}    

//display only 5 before click "showAll" button
if(!isShowAll){
  phones = phones.slice(0,5)
}


    phones.forEach(phone => {
       // console.log(phone)
        
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
            <button onclick="showDetailsButton('${phone.slug}')" class="btn btn-primary font-bold">Show Details</button>
          </div>
        </div> `;

      //append
      phoneContainer.appendChild(phoneDiv);

    });

    //hide loading
    toggleLoding(false);
}

//modal for show details 
const showDetailsButton = async(id)=>{
  console.log('id : ',id);
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data = await res.json();
  const phone = data.data;
  handleShowDetails(phone);
}
const handleShowDetails = (phone)=>{
  console.log(phone);
  // const phoneNameShow = document.getElementById('show_details-Phone_name');
  // phoneNameShow.innerText =;


  const showDetailsContainer = document.getElementById('show_details_container');
  showDetailsContainer.innerHTML = `
  <img src="${phone.image}" >
  <h3 id="show_details-Phone_name" class="font-extrabold text-lg">${ phone?.name}</h3>
  <p>Band : ${phone?.brand || 'not published'} </p>
  <p>Display-Size : ${phone?.mainFeatures?.displaySize || 'not published'} </p>
  <p>Chipset : ${phone?.mainFeatures?.chipSet || 'not published'} </p>
  <p>Memory : ${phone?.mainFeatures?.memory || 'not published'} </p>
  <p>Storage : ${phone?.mainFeatures?.storage || 'not published'} </p>
  <p>Sensor : ${phone?.mainFeatures?.sensors}  </p>
  `;

  show_details.showModal();
}




const searchHandle = (isShowAll) =>{
    toggleLoding(true);
    const inputElement = document.getElementById('search_phone');
    const searchText = inputElement.value;
    //console.log(searchText);
    loadPhone(searchText,isShowAll);
}

//loading 
const toggleLoding = (isLoading) =>{
  const loding = document.getElementById('loading_infinity');
  if(isLoading){
    loding.classList.remove('hidden');
  }else{
    loding.classList.add('hidden')
  }

}
//showAll handle
const showAllHandle = ()=>{
  const showAllButton = document.getElementById('show-button');
  searchHandle(true);
}




//loadPhone();