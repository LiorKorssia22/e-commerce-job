const productListLeft = document.querySelector(".product-list-left");
const productListRight = document.querySelector(".product-list-right");
const productCheck = document.querySelector(".check");

//do const to same parameter
//משתנים ברורים

function htmlTemp(id,name,url) 
 {
    `
    <div class = "product">
    <div class = "product-content">
    <h3 >id: ${id}</h3>
    <span >site name : ${name}</span>
    <br/>
    <a href="${url}" target="_blank" >site url: ${name}</a>
    </div>
    </div>
    `
}; 


// load product items content form JSON file
const createHtml = async () => {
    await fetch("furniture.json")
        .then((response) => response.json())
        .then((data) => {
            let htmlLeft = "";
            let htmlRight = "";
            let htmlRight1 = "";
            let ans = "";

            //check colum 1
            // console.log(data[0]);
            // console.log(data[0]['subData']);


     

            ans = JSON.stringify(data[1]);

         

         

            if (data[0].hasOwnProperty('subData')) {
                // console.log(data[0].subData);

            }


            //show num1
            htmlLeft += `<div class = "product-item">
            <div class = "product-content">
            <h3 >id: ${data[0].id}</h3>
            <span >site name : ${data[0].name}</span>
            <br/>
            <a href="${data[0].url}" target="_blank" >site url: ${data[0].name}</a>
            </div>
            </div>`;

            // if (data[0].hasOwnProperty('subData')) {
            //     ans = "work1";
            // }
            // else { ans = "not work1"; }
            productCheck.innerHTML = ans;

            //show first "subData"
            data[0].subData.forEach(items => {
                const { id, name, url } = items;
                htmlLeft += `
                    <div class = "product">
                    <div class = "product-content">
                    <h3 >id: ${id}</h3>
                    <span >site name : ${name}</span>
                    <br/>
                    <a href="${url}" target="_blank" >site url: ${name}</a>
                    </div>
                    </div>
                    `;
                if (typeof items.subData !== "undefined") {

                    items.subData.forEach(item => {
                        const { id, name, url } = item;

                        htmlLeft +=  `
                        <div class = "product">
                        <div class = "product-content">
                        <h3 >id: ${id}</h3>
                        <span >site name : ${name}</span>
                        <br/>
                        <a href="${url}" target="_blank" >site url: ${name}</a>
                        </div>
                        </div>
                        `;
                    })
                }
            });


            productListLeft.innerHTML = htmlLeft + "-";



            //check colum 2
            // console.log(data[1]);
            //show num8
            htmlRight += `
                     <div class = "product-item">
                                          
                     <div class = "product-content">
                      <h3 >id: ${data[1].id}</h3>
                      <span >site name : ${data[1].name}</span>
                      <br/>
                   <a href="${data[1].url}" target="_blank" >site url: ${data[1].name}</a>
                        </div>
                      </div>
                      `;


            //show first "subData"
            data[1].subData.forEach(items => {
                const { id, name, url } = items;

                htmlRight += `
                    <div class = "product">
                                            
                    <div class = "product-content">
                    <h3 >id: ${id}</h3>
                      <span >site name : ${name}</span>
                    <br/>
                   <a href="${url}" target="_blank" >site url: ${name}</a>
                   </div>
                    </div>
                  `;

                if (typeof items.subData !== "undefined") {
                    items.subData.forEach(item => {
                        const { id, name, url } = item;
                        if(typeof item.subData !== "undefined")
                        {   
                            item.subData.forEach(prod => {
                                const { id, name, url } = prod;
                            htmlRight += `
                            <div class = "product">
                            <div class = "product-content">
                            <h3 >id: ${id}</h3>
                            <span >site name : ${name}</span>
                            <br/>
                            <a href="${url}" target="_blank" >site url: ${name}</a>
                            </div>
                            </div>
                            `;   
                             
                            })
                        }

                        console.log(items.subData);
                        htmlRight += `
                        <div class = "product">
                        <div class = "product-content">
                        <h3 >id: ${id}</h3>
                        <span >site name : ${name}</span>
                        <br/>
                        <a href="${url}" target="_blank" >site url: ${name}</a>
                        </div>
                        </div>
                        `;


                    });
                }
            });


            productListRight.innerHTML = htmlRight;
        })
        .catch((error) => {
            alert(`User live server or local server`);
            //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
        });
}
createHtml();