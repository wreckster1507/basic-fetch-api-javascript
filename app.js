const form = document.querySelector('#searchForm');
const figure = document.querySelector('#image');


form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = {params:{q:searchTerm}}
    const res = await axios.get("https://api.tvmaze.com/search/shows",config)
    console.log(res);
    displayShow(res.data);
    form.elements.query.value="";

})

const displayShow = (resultArray) => {
    for (let result of resultArray) {
        if (result.show.image) {
            console.log(result.show.name);
            const img = document.createElement('img');
            const data = document.createElement('h3');
            data.innerText = result.show.name;
            img.src = result.show.image.medium;
            
            figure.appendChild(img);
            figure.appendChild(data);
        }
    }
}
