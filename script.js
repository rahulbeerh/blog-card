const btn=document.querySelector('.card-btn');
const card=document.querySelector('.card');

btn.addEventListener('click',function(){
    card.classList.toggle('change')?btn.textContent='Read Less':btn.textContent='Read More';
})