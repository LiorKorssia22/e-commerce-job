const productListLeft = document.querySelector(".product-list-left");
const productListRight = document.querySelector(".product-list-right");
const productCheck = document.querySelector(".check");


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
            console.log(data[0]);
            console.log(data[0]['subData']);


            //
            for (var make in data[0].subData) {
                for (var model in data[0].subData[make]) {
                     var doors = data[0].subData[make][model];
                    console.log(make + ', ' + model + ', ' + doors);
                    
                   
                }
            }
            //
            
             ans = JSON.stringify(data[0]);

            //  for (var i=0; i<data[0].subData.length; i++) {
            //     for (var key in data[0].subData[i]) {
            //         for (var j= 0; j<data[0].subData[i][key].length; j++) {
            //             console.log(data[0].subData[i][key][j])
            //         }
            //     }
            //  }
            
            for (let i = 0; i < 8; i++) {
                // ans = JSON.stringify(data[1].subData);

                // const { id, name, url } = subData;

                // htmlLeft += `
                // <div class = "product">
                
                // <div class = "product-content">
                // <h3 >id: ${subData.id}</h3>
                // <span >site name : ${subData.name}</span>
                // <br/>
                // <a href="${subData.url}" target="_blank" >site url: ${subData.name}</a>
                // </div>
                // </div>
                // `;
                // for (let i = 0; i < 8; i++) {
                //     console.log(data[0].subData[i]);
    
                // }

            }

            // if (data[0].hasOwnProperty('subData')) {
            //     console.log(data[0].subData);

            // }

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
            data[0].subData.forEach((subData) => {
                const { id, name, url } = subData;

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
            });


            productListLeft.innerHTML = htmlLeft + "-";



            //check colum 2
            console.log(data[1]);
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
            data[1].subData.forEach((subData) => {
                const { id, name, url } = subData;

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


            productListRight.innerHTML = htmlRight;



            // data.forEach((product) => {
            //     console.log(product);

            //                       html += `<div>  <h3 >id: ${product.id}</h3>
            //                       <span >site name : ${product.name}</span>
            //                       <br/>
            //                       <a href="${product.url}" target="_blank" >site url: ${product.name}</a> </div>`;

            //                       productListLeft.innerHTML = html;


            //                     //   product.subData.forEach((subData) => {
            //                     //       const { id, name, url } = subData;

            //                     //       html += `
            //                     //       <div class = "product-item">

            //                     //       <div class = "product-content">
            //                     //       <h3 class = "product-name">id: ${id}</h3>
            //                     //       <span class = "product-category">site name : ${name}</span>
            //                     //       <br/>
            //                     //       <a href="${url}" target="_blank" class = "product-price">site url: ${name}</a>
            //                     //       </div>
            //                     //       </div>
            //                     //       `;
            //                     //     });
            //                     });
            //                      //productList.innerHTML = html;



        })
        .catch((error) => {
            alert(`User live server or local server`);
            //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
        });
}
createHtml();