export default function home() {
    const pageContent = document.querySelector('#content');
    const mainDiv = document.createElement('div');
    const paraOne = document.createElement('p');
    const paraTwo = document.createElement('p');
    const imgDiv = document.createElement('div');

    paraOne.textContent = 'Welcome to Fox & Fern, where the enchanting beauty of European forests comes to life. Nestled amidst the towering trees and whispering winds, our restaurant offers a one-of-a-kind dining experience inspired by the mystical creatures and serene landscapes of the forest. Step into a world where foxes frolic, wolves howl, and hares dart among the trees, as you indulge in a delightful array of vegetarian dishes crafted from the finest ingredients sourced from the bountiful forest. Join us on a culinary journey where nature meets gastronomy, and every bite is a celebration of the rich tapestry of flavors that the forest has to offer.';
    paraTwo.textContent = 'Visit today for a magical dine-in experience or enjoy the taste of the forest in the comfort of your own home by ordering a takeaway meal.';
    imgDiv.classList.add('fox-image');

    mainDiv.appendChild(paraOne);
    mainDiv.appendChild(imgDiv);
    mainDiv.appendChild(paraTwo);

    pageContent.appendChild(mainDiv);
}