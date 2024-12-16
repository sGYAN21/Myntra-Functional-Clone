let bagItems;
onLoad();
function onLoad(){
 let  bagItemsStr = localStorage.getItem('bagItems');
   bagItems = bagItemsStr ? JSON.parse(bagItemsStr):[];
   displayItemsOnHomePage();
   displayBagIcon();
}
function addToBag(itemId){
   bagItems.push(itemId);
   displayBagIcon();
   localStorage.setItem('bagItems',JSON.stringify(bagItems));
}
function displayBagIcon(){
   let bagItemCountElement = document.querySelector('.bag-item-count');
   {
      if(bagItems.length > 0 ){
         bagItemCountElement.style.visibility ='visible';
         bagItemCountElement.innerText = bagItems.length;
      }
      else{
         bagItemCountElement.style.visibility ='hidden';
      }
   }
}
function displayItemsOnHomePage()
{
   let itemContainerElement = document.querySelector('.items-container');
      if(!itemContainerElement){
         return;
      }
   let innerHtml='';
   items.forEach(item=>{
     innerHtml +=` 
   <div class="item-container">
      <img class="item-image"src="${item.image}" alt="image 1">
         <div class="rating">
            ${item.rating.stars} ⭐ | ${item.rating.count}
         </div>                
         <div class="company-name">${item.company}</div>
         <div class="item-name">${item.item_name}</div>
         <div class="price">
             <span class="current-price">Rs ${item.current_price}</span>
             <span class="original-price">Rs ${item.original_price}</span>
             <span class="discount">(${item.discount_percentage}% OFF)</span>
         </div>
         <button class="button-add-bag" onclick="addToBag(${item.id})">Add to Bag </button>
   </div>`;
   });
   itemContainerElement.innerHTML=innerHtml;
}

