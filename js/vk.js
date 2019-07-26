
var hrAuth = new XMLHttpRequest();
var authLink = "https://oauth.vk.com/authorize?client_id=6796225&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=friends&response_type=token&v=5.52"

hrAuth.open('GET',authLink,true);

hrAuth.send();
