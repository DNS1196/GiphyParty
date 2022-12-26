console.log("Let's get this party started!");

async function getGif(searchTerm) {
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
            // limit: 1,
            api_key: 'JJEg8RhwjlArpmhs7cVhcdEaWMHJyWOw',
            q: searchTerm
        }
    })
    console.log(res)
    const rdmIdx = Math.floor(Math.random() * res.data.data.length)
    console.log(rdmIdx)
    const url = res.data.data[rdmIdx].images.original.url;
    let img = document.createElement('img');
    img.src = url;
    $('#container').append(img);


}

$('#form').on('submit', function (e) {
    e.preventDefault()
    const search = $('#search').val();
    $('#search').val('')
    getGif(search)
})

$('#remove').on('click', function () {
    $('#container').empty();
})


