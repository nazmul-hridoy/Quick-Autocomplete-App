const search = document.querySelector('#search');
const matchList = document.querySelector('#match-list');


//searh district.json & filter it
const searchDistrict = async searchText => {
    const res = await fetch('../data/bd.json');
    const data = await res.json();
    //console.log(data);


    //get match with current input
    let matches = data.filter(value => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return value.name.match(regex) || value.abbr.match(regex);
    });

    console.log(matches);


};

search.addEventListener('input', () => searchDistrict(search.value));