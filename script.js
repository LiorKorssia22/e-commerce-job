const productListLeft = document.querySelector(".product-list-left");
const productListRight = document.querySelector(".product-list-right");

//do const to same parameter
//משתנים ברורים

// function htmlTemp(id, name, url) {
//     `
//     <div class = "product">
//     <div class = "product-content">
//     <h3 >id: ${id}</h3>
//     <span >site name : ${name}</span>
//     <br/>
//     <a href="${url}" target="_blank" >site url: ${name}</a>
//     </div>
//     </div>
//     `
// };


// load product items content form JSON file
const createHtml = async () => {
    await fetch("furniture.json")
        .then((response) => response.json())
        .then((data) => {
            let htmlLeft = "";
            let htmlRight = "";

            //check colum 1
            console.log(data[0]);
            //show id 1
            htmlLeft += `<div class = "firstId">
            <div>
            <span>id: ${data[0].id}</span> 
            <br/>
            <span>site name : ${data[0].name}</span>
            <br/>
            <a href="${data[0].url}" target="_blank">site url: ${data[0].name}</a>
            </div>
            </div>`;



            //show 2,3,7
            data[0].subData.forEach(items => {
                const { id, name, url } = items;
                htmlLeft += `
                    <div class = "firstLine">
                    <span >id: ${id}</span>
                    <br/>
                    <span >site name : ${name}</span>
                    <br/>
                    <a href="${url}" target="_blank">site url: ${name}</a>
                    </div>
                    `;
                //show 4,5,6
                if (typeof items.subData !== "undefined") {
                    items.subData.forEach(item => {
                        const { id, name, url } = item;
                        htmlLeft += `
                        <div class = "secondLine">
                        <div >
                        <span>id: ${id}</span>
                        <br/>
                        <span>site name : ${name}</span>
                        <br/>
                        <a href="${url}" target="_blank">site url: ${name}</a>
                        </div>
                        </div>
                        `;
                    })
                }
            });
            productListLeft.innerHTML = htmlLeft;


            // colum 2
            //show 8
            htmlRight += `
                     <div class = "firstId">
                                          
                     <div class = "product-content">
                      <span >id: ${data[1].id}</span>
                      <br/>
                      <span >site name : ${data[1].name}</span>
                      <br/>
                   <a href="${data[1].url}" target="_blank" >site url: ${data[1].name}</a>
                        </div>
                      </div>
                      `;


            //show 9,10,17,21
            data[1].subData.forEach(items => {
                const { id, name, url } = items;

                htmlRight += `
                    <div class = "firstLine">
                    <div>
                    <span >id: ${id}</span>
                    <br/>
                    <span >site name : ${name}</span>
                    <br/>
                    <a href="${url}" target="_blank" >site url: ${name}</a>
                    </div>
                    </div>
                  `;
                //show 11,15,16,,18,19,20
                if (typeof items.subData !== "undefined") {
                    items.subData.forEach(item => {
                        const { id, name, url } = item;
                        htmlRight += `
                        <div class = "secondLine">
                        <div>
                        <span >id: ${id}</span>
                        <br/>
                        <span >site name : ${name}</span>
                        <br/>
                        <a href="${url}" target="_blank" >site url: ${name}</a>
                        </div>
                        </div>
                        `;
                        //show 12,13,14
                        if (typeof item.subData !== "undefined") {
                            item.subData.forEach(prod => {
                                const { id, name, url } = prod;
                                htmlRight += `
                            <div class = "thirdLine">
                            <div>
                            <span >id: ${id}</span>
                            <br/>
                            <span >site name : ${name}</span>
                            <br/>
                            <a href="${url}" target="_blank" >site url: ${name}</a>
                            </div>
                            </div>
                            `;
                            })
                        }
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