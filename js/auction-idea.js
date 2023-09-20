// API 

axios.get("https://65082eef56db83a34d9be320.mockapi.io/IDEAS").then((response)=> {
    const api= response.data;
    const apiTable= document.getElementById("data-list");

    api.map((result) =>{
        const row= document.createElement("tr");
        row.innerHTML=`
        <td>
            <div class="card">
                <div class="infos">
                    <div class="info">
                        <div>
                             <p class="name">${result.name}</p>
                             <p class="function">${result.description}</p>
                        </div>
                            <div class="stats">
                                 <p class="flex flex-col">نوع الملكية الفكرية <span class="state-value">${result.patentType}</span> </p>
                                 <p class="flex">الحد الأعلى للمزاد <span class="state-value"> 10,000,000 ر.س. </span> </p>     
                            </div>
                    </div>
                </div>
                <div class=container>
                    <input  class="box" placeholder="اضف مزايدتك">
                    <button class="request" type="button">زايد الأن </button>
                </div>
            </div>
         </td>
        `
        apiTable.appendChild(row);  
    })  

})