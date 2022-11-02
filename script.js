const cartContainer = document.querySelector('.cart-container');
const productList = document.querySelector('.product-list');
const cartList = document.querySelector('.cart-list');


eventListeners();

// all event listeners
function eventListeners() {
    window.addEventListener('DOMContentLoaded', () => {
        loadJSON();
    });
}

const { id, name, url } = product.subData;


// load product items content form JSON file
function loadJSON() {
    fetch('furniture.json')
        .then(response => response.json())
        .then(data => {
            let html = '';
            data.forEach(product => {

                html += `
            <div class = "product-item">
            
            <div class = "product-content">
                        <h3 class = "product-name">id: ${product.id}</h3>
                        <span class = "product-category">site name : ${product.name}</span>
                        <br/>
                        <a href="${product.url}" target="_blank" class = "product-price">site url: ${product.name}</a>
                        

                        <div >
                        ${product.subData.forEach(data => {
                            html += `
                            <h3 class = "product-name">id: ${data.id}</h3>
                            <span class = "product-category">site name : ${data.name}</span>
                            <br/>
                            <a href="${data.url}" target="_blank" class = "product-price">site url: ${data.name}</a>
                            
                            `
                        })}
                        <h3 class = "product-name">subData: ${JSON.stringify(product.subData)}</h3>
                        


                        </div>
                    </div>
                </div>
                `;
            });
            productList.innerHTML = html;
        })
        .catch(error => {
            alert(`User live server or local server`);
            //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
        })
}