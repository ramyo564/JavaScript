const API_URL = 'https://animal-api-two.vercel.app/';

const $content = document.querySelector('div.content');
let template = [];

const getData = async (name) => {
    let res = await fetch(`${API_URL}${name}`);
    try{
        if(res){
            let data = await res.json();
            data.photos.forEach((element) => {
                template += `<img src=${element.url}></img>`
            });
            $content.innerHTML = template;
        }
    }catch(err){
        console.log(err);
    }
};

getData('penguin');