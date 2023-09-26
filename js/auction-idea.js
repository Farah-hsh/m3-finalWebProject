const ideaData = JSON.parse(localStorage.getItem('ideaData'));

if (ideaData) {
    document.getElementById('idea_name').innerHTML = ideaData.name;
    document.getElementById('idea_description').innerHTML = ideaData.description;
    document.getElementById('idea_patentType').innerHTML = ideaData.patentTypes;
} else {
    document.getElementById('idea-details').innerHTML = 'No idea data available.';
}

let auctionValue = document.getElementsByClassName("box");
const button = document.querySelector('.request');
const listAuction=document.getElementById("listAuction");


button.addEventListener("click", addValue);
function addValue(e){
    e.preventDefault();
    if(auctionValue.value != 1000000000){
        const value = auctionValue.value;
        
 
        let newItem = document.createElement("li");
        newItem.id = "newvalue" ;
 
        
 
        newItem.innerText = value;
        listAuction.appendChild(newItem);
 
    }else{
        Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "الف مبروك! ربحت المزاد",
                    showConfirmButton: false,
                    timer: 3000,
                  });


    }
 
 }