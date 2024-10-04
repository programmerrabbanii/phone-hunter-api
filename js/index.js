const allPhoneLoad= async(staues,brandName)=>{
    console.log(brandName);
    console.log('hello this is my function');
    document.getElementById('spiner').style.display="none"

    const response=await fetch(`https://openapi.programming-hero.com/api/phones?search=${brandName?brandName:"iphone"}`)
    const data=await response.json()
    console.log(data);
    if(staues){
        allPhoneDisplay(data.data);

    }else{
        allPhoneDisplay(data.data.slice(0,6));

    }
    
     
}


const allPhoneDisplay=(getData)=>{
    const showdata=document.getElementById('phoneContiner')
    getData.forEach((phone)=>{
      const div=document.createElement('div')
      div.innerHTML=`
      <div class="card bg-base-100 w-96 shadow-xl">
  <figure class="px-10 pt-10">
    <img
      src="${phone.image}"
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn btn-primary">Show Detaila</button>
    </div>
  </div>
</div>
      `  
      showdata.appendChild(div)
    })
    

}
const showAll=()=>{
    allPhoneLoad(true)
}

const phoneThereSecond=()=>{
    document.getElementById('spiner').style.display="block"
    const searchText=document.getElementById('searchFile').value
    setTimeout(function(){
        allPhoneLoad(false,searchText)

    },3000)
}

allPhoneLoad(false,"iphone")