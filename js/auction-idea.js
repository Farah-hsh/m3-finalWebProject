// API 

axios.get("https://64fdc847596493f7af7e8fc1.mockapi.io/api/v1/m3-users").then((response)=> {
    const api= response.data;
    const apiTable= document.getElementById("container");

    const row= document.createElement("div");
    row.innerHTML=`
        
<div class="card">
   <div class="infos">
      <div class="info">
            <div>
                <p class="name">الاسم</p>
                <p class="function">نبذة عن الفكرة </p>
            </div>
            <div class="stats">
                <p class="flex flex-col">نوع الملكية الفكرية <span class="state-value"> النوع </span> </p>
                <p class="flex">الحد الأعلى للمزاد <span class="state-value"> 10,000,000 ر.س. </span> </p>     
            </div>
       </div>
    </div>
    <div class=container>
       <input  class="box" placeholder="اضف مزايدتك">
       <button class="request" type="button">زايد الأن </button>
    </div>

</div>
 `
    apiTable.appendChild(row); 
    const auction_value= document.getElementsByClassName("box").value;
    const data={auction_value} ;
    axios.post("https://64fdc847596493f7af7e8fc1.mockapi.io/api/v1/m3-users", data).then((response) => {
        console.log("تمت الاضافة");  
    });

    axios.get("https://64fdc847596493f7af7e8fc1.mockapi.io/api/v1/m3-users").then((response)=> {
    const api= response.data;
    const apiTable= document.getElementsByClassName("auction_list");

        const row= document.createElement("li");
        row.innerHTML=`
    
            <div class="card-container">
                <h1>${gg}<h1>
                <p>${hh}</p>
                <p>${hh}</p>
            </div>
        
        `
        apiTable.appendChild(row);
    })

})