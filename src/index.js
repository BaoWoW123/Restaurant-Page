import _ from 'lodash';
import './style.css';
import menu from './pages/menu';
import reviews from './pages/reviews';
import contact from './pages/contact';

function component() {
    const content = document.querySelector('#content');
    return content;
}

function makeHeader() {
        const header = document.createElement('div');
        const menuTab = document.createElement('button');
        const contactTab = document.createElement('button');
        const reviewTab = document.createElement('button');
        const homeTab = document.createElement('button');

        header.className= 'header';
        homeTab.textContent = 'Home';   
        menuTab.textContent = 'Menu';   
        contactTab.textContent = 'Contact Us'; 
        reviewTab.textContent = 'Reviews'; 
        header.appendChild(homeTab); 
        header.appendChild(menuTab);
        header.appendChild(reviewTab);
        header.appendChild(contactTab);
        content.appendChild(header);

        homeTab.onclick = switchHome;
        menuTab.onclick = switchMenu;
        reviewTab.onclick = switchReview;
        contactTab.onclick = switchContact;
        return header;
    }
function maketitle() {
    const title =  document.createElement('div');
    const titleInfo = document.createElement('div');

    title.className ='title';
    title.textContent = 'Café du Palais Français';
    titleInfo.className = 'titleInfo'
    titleInfo.textContent = 'Goûtez le meilleur';
    title.appendChild(titleInfo);
    return title;
}

function makeInfo() {
    const info = document.createElement('div');

    info.className ='info';
    info.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, quisquam vitae? Laudantium nemo est vel error adipisci, hic repudiandae, cum maiores dolorum iure enim at illum autem quo, culpa dignissimos dicta! Ad laboriosam animi corporis neque autem, alias quia! Rerum sint repellat officia similique corrupti impedit aut quidem nihil quisquam?';
    return info;
}

function makeFooter() {
    const footer = document.createElement('div');

    footer.className ='footer';
    footer.textContent= 'Copyright © Bao Nguyen 2022'; 
    return footer;
}

function switchHome() {
    content.textContent = '';
    component().appendChild(makeHeader())
    component().appendChild(maketitle())
    component().appendChild(makeInfo())
    component().appendChild(makeFooter())
    document.body.appendChild(component())
}

function switchMenu() {
    content.textContent = '';
    makeHeader()
    component().appendChild(menu)
    component().appendChild(makeFooter())
    console.log('switch to menu')
}
function switchReview() {
    content.textContent = '';
    makeHeader()
    component().appendChild(reviews)
    component().appendChild(makeFooter())
    console.log('switch to reviews')
}
function switchContact() {
    content.textContent = '';
    makeHeader()
    component().appendChild(contact)
    component().appendChild(makeFooter())
    console.log('switch to contacts')
}

component().appendChild(makeHeader())
component().appendChild(maketitle())
component().appendChild(makeInfo())
component().appendChild(makeFooter())
document.body.appendChild(component())
