import _ from 'lodash';
import './style.css';
import menu from './pages/menu';
import reviews from './pages/reviews';
import contact from './pages/contact';
import home from './pages/initialPage';

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

function makeFooter() {
    const footer = document.createElement('div');

    footer.className ='footer';
    footer.textContent= 'Copyright © Bao Nguyen 2022'; 
    return footer;
}

function switchHome() {
    content.textContent = '';
    component().appendChild(makeHeader())
    component().appendChild(home)
    component().appendChild(makeFooter())
    document.body.appendChild(component())
}

function switchMenu() {
    content.textContent = '';
    makeHeader()
    component().appendChild(menu)
    component().appendChild(makeFooter())
}

function switchReview() {
    content.textContent = '';
    makeHeader()
    component().appendChild(reviews)
    component().appendChild(makeFooter())
}

function switchContact() {
    content.textContent = '';
    makeHeader()
    component().appendChild(contact)
    component().appendChild(makeFooter())
}

component().appendChild(makeHeader())
component().appendChild(home)
component().appendChild(makeFooter())
