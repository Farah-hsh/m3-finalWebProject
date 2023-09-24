// API 
const ideaData= (id,name, description, patentType, patentCountries)=>{
    axios.get(`https://65082eef56db83a34d9be320.mockapi.io/IDEAS/${id}`,{ name, description, patentType, patentCountries}).then((response)=> {
    const api= response.data;
    const apiTable= document.getElementById("data-list");


        const row= document.createElement("tr");
        row.innerHTML=`
        <td>
            <div class="card">
                <div class="infos">
                    <div class="info">
                        <div>
                             <p class="name">${api.name}</p>
                             <p class="function">${api.description}</p>
                        </div>
                            <div class="stats">
                                 <p class="flex flex-col">نوع الملكية الفكرية <span class="state-value">${api.patentType}/${api.patentCountries}</span> </p>
                                 <p class="flex">الحد الأعلى للمزاد <span class="state-value"> 1,000,000,000 ر.س. </span> </p>     
                            </div>
                    </div>
                </div>
                <div class=container>
                    <input  class="box" placeholder="اضف مزايدتك">
                    <button class="request" type="button" >زايد الأن </button>
                </div>
                <ul id="listAuction"></ul>
            </div>
         </td>
        `
        apiTable.appendChild(row);  
 


});
   

}
    



   





   



// axios.get(`https://65082eef56db83a34d9be320.mockapi.io/IDEAS/${id}`).then((re) => {
//     const row= document.createElement("tr");
//         row.innerHTML=`
//         <td>
//             <div class="card">
//                 <div class="infos">
//                     <div class="info">
//                         <div>
//                              <p class="name">${name}</p>
//                              <p class="function">${description}</p>
//                         </div>
//                             <div class="stats">
//                                  <p class="flex flex-col">نوع الملكية الفكرية <span class="state-value">${patentType}/${patentCountries}</span> </p>
//                                  <p class="flex">الحد الأعلى للمزاد <span class="state-value"> 10,000,000 ر.س. </span> </p>     
//                             </div>
//                     </div>
//                 </div>
//                 <div class=container>
//                     <input  class="box" placeholder="اضف مزايدتك">
//                     <button class="request" type="button">زايد الأن </button>
//                 </div>
//             </div>
//          </td>
//         `
//         apiTable.appendChild(row);  
//   });