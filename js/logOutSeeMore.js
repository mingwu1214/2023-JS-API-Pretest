let id = location.href.split('=')[1];

// 渲染db.json
function showContent() {
    axios.get(`https://demo-2o2s.onrender.com/views/${id}`)
        .then(function (response) {
            data = response.data;
            content.textContent = JSON.stringify(response.data);
        })
        .catch(function (error) {
            console.log(error.response);
        })
};
showContent();