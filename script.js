const shortBtn = document.getElementById('short-btn');
const reloadBtn = document.getElementById('reload-btn');

shortBtn.addEventListener('click', shortenedUrl);

function shortenedUrl() {
    var originalUrl = document.getElementById("originalUrl").value;
    var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);
    shortenedUrlTextarea = document.getElementById("shortenedUrl");


    fetch(apiUrl).then(response => response.text()).then(data => {
        shortenedUrlTextarea.value = data;
    }).catch(error => {
        shortenedUrlTextarea.value = "Error : Unable to shorten URL!";
    })

}

reloadBtn.addEventListener('click', () => {
    location.reload();
});