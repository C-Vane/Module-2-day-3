const hotBadge = () => {

    const div = document.getElementById('summerinner').querySelector('div');
    const cards = div.querySelectorAll('.container-img');

    for (let i = 0; i < cards.length; i++) {
        let badge = document.createElement("span");
        badge.classList.add("badge", "badge-danger", "hot");
        badge.innerText = 'HOT';
        cards[i].appendChild(badge);
    }
}
const deletecards = () => {

    const cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {

        cards[i].style.display = "none";
    }
}


hotBadge();
var travels = {

};
