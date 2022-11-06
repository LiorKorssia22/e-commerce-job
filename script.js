const productListLeft = document.querySelector(".product-list-left");
const productListRight = document.querySelector(".product-list-right");

// load product items content form JSON file
const createHtml = async () => {
    await fetch("furniture.json")
        .then((response) => response.json())
        .then((data) => {

            let htmlLeft = "";
            let firstLeftDiv = "";

            let htmlRight = "";
            let firstRightDiv = "";
            let secondRightDiv = "";
            let thirdRightDiv = "";
            
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
                let divId = `div${id}`;
                htmlLeft += `
                    <div id = ${divId} class = "firstLine">
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
                        firstLeftDiv += `
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
            try {
                productListLeft.innerHTML += htmlLeft;
                const div = document.querySelector('#div3');
                div.innerHTML += firstLeftDiv;
            }
            catch (err) {
                alert(`ERROR!`);
            }


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
                let divId2 = `div${id}`;
                htmlRight += `
                    <div id = ${divId2} class = "firstLine">
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
                        let divId3 = `div${id}`;
                        if(id<=16 && id >= 10){
                            firstRightDiv += `
                            <div id = ${divId3} class = "secondLine">
                            <div>
                            <span >id: ${id}</span>
                            <br/>
                            <span >site name : ${name}</span>
                            <br/>
                            <a href="${url}" target="_blank" >site url: ${name}</a>
                            </div>
                            </div>
                            `;
                        }
                        else{
                            secondRightDiv += `
                            <div id = ${divId3} class = "secondLine">
                            <div>
                            <span >id: ${id}</span>
                            <br/>
                            <span >site name : ${name}</span>
                            <br/>
                            <a href="${url}" target="_blank" >site url: ${name}</a>
                            </div>
                            </div>
                            `;
                        }
                        //show 12,13,14
                        if (typeof item.subData !== "undefined") {
                            item.subData.forEach(prod => {
                                const { id, name, url } = prod;
                                let divId4 = `div${id}`;

                                thirdRightDiv += `
                            <div id = ${divId4} class = "thirdLine">
                            <span >id: ${id}</span>
                            <br/>
                            <span >site name : ${name}</span>
                            <br/>
                            <a href="${url}" target="_blank" >site url: ${name}</a>
                            </div>
                            `;
                            })
                        }
                    });
                }
            });
            try {
                productListRight.innerHTML += htmlRight;
                
                 const divId10 = document.querySelector('#div10');
                 const divId17 = document.querySelector('#div17');
                 divId10.innerHTML += firstRightDiv;
                 divId17.innerHTML += secondRightDiv;

                 const divId11 = document.querySelector('#div11');
                 divId11.innerHTML += thirdRightDiv;
            }
            catch (err) {
                alert(`ERROR!`);
            }
        })
        .catch((error) => {
            alert(`ERROR WITH User live server or local server`);
        });
}
createHtml();