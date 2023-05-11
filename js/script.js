let modalQt = 1;
const s = (el)=>document.querySelector(el);
const sa = (el)=>document.querySelectorAll(el);

pizzaJson.map((item, index)=>{
    let pizzaItem = s('.models .pizza-item').cloneNode(true);
    s('.pizza-area').append(pizzaItem)
    //Evento da Lista
    pizzaItem.setAttribute('data-key',index);
    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--price').innerHTML =   `R$ ${item.price.toFixed(2)}`
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description
    pizzaItem.querySelector('a').addEventListener('click',(e)=>{
        e.preventDefault(); 
        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        modalQt = 1;
        s('.pizzaInfo--qt').innerHTML = modalQt;
        s('.pizzaBig img').src = pizzaJson[key].img
        s('.pizzaInfo h1').innerHTML = pizzaJson[key].name ;
        s('.pizzaInfo .pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        s('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
        s('.pizzaInfo--size.selected').classList.remove('selected')
        sa('.pizzaInfo--size').forEach((size, sizeIndex)=>{
          if(sizeIndex == 2){
            size.classList.add('selected');
          }
          size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        })
        s('.pizzaInfo--qt').innerHTML = modalQt;

        s('.pizzaWindowArea').style.opacity = 0;
       s('.pizzaWindowArea').style.display = 'flex';
       setTimeout(()=>{
        s('.pizzaWindowArea').style.opacity = 1;
       },200) 
         })
    })
  //  Eventos do MODAL
      function closeModal(){
        s('.pizzaWindowArea').style.opacity = 0;
        setTimeout(()=>{
         s('.pizzaWindowArea').style.display = 'none';
        },500)
      }
      sa('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=>{
        item.addEventListener('click',closeModal);
      })

      s('.pizzaInfo--qtmenos').addEventListener('click', ()=>{
      if(modalQt > 1){
        modalQt--;
        s('.pizzaInfo--qt').innerHTML = modalQt;
       } } )
   

      s('.pizzaInfo--qtmais').addEventListener('click', ()=>{
          modalQt++;
          s('.pizzaInfo--qt').innerHTML = modalQt;
      })
       sa('.pizzaInfo--size').forEach((size, sizeIndex)=>{
         size.addEventListener('click' ,()=>{
         s('.pizzaInfo--size.selected').classList.remove('selected')
          size.classList.add('selected');
        }) })