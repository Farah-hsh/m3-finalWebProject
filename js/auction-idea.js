const ideaData = JSON.parse(localStorage.getItem('ideaData'));

if (ideaData) {
    document.getElementById('idea_name').innerHTML = ideaData.name;
    document.getElementById('idea_description').innerHTML = ideaData.description;
    document.getElementById('idea_patentType').innerHTML = ideaData.patentTypes;
} else {
    document.getElementById('idea-details').innerHTML = 'No idea data available.';
}
const button = document.querySelector('.request');
let auctionValue = document.getElementsByClassName("box");
const listAuction=document.getElementById("listAuction");


button.addEventListener("click", function(){
    Swal.fire({
        position: "center",
        icon: "success",
        title: "لقد تم إضافة مزايدتك بنجاح ",
        showConfirmButton: false,
        timer: 3000,
      });

        const listAuction= document.getElementById("listAuction");
        if(auctionValue.value < 1000000000){
           
            let output= auctionValue.value;

            let list = document.createElement("li");

            list.innerText= output;
            listAuction.appendChild(output);
            auctionValue.value= '';
           
        }else{
            Swal.fire({
                position: "center",
                icon: "success",
                title: "الف مبروك! ربحت المزاد",
                showConfirmButton: false,
                timer: 3000,
              });
          
           
        }

})

// addValue = () =>{
//     let auctionValue = document.getElementsByClassName("box");
//     const listAuction= document.getElementById("listAuction");
//     if(auctionValue.value < "1,000,000,000"){
//         let list = document.createElement("li");
//         list.innerText= auctionValue.value;
//     }else{
//         Swal.fire({
//             position: 'center',
//             icon: 'sucess',
//             title: 'مبروك! لقد ربحت المزاد',
//             showConfirmButton: false,
//             timer: 1500
//           })
//     }
//     listAuction.appendChild(list);

// }

