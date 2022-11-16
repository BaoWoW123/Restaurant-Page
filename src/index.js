import _ from 'lodash';
import './style.css';
import Food from './food.jpg';

function component() {
    const content = document.querySelector('#content');
    return content;
}

function createHeader() {
        const header = document.createElement('div');
        const menuTab = document.createElement('button');
        const contactTab = document.createElement('button');
        const reviewTab = document.createElement('button');

        header.className= 'header';
        menuTab.textContent = 'Menu';   
        reviewTab.textContent = 'Reviews';  
        contactTab.textContent = 'Contact Us'; 
        header.appendChild(menuTab);
        header.appendChild(reviewTab);
        header.appendChild(contactTab);
        content.appendChild(header);
        return header;
    }

function maketitle() {
    const title =  document.createElement('div');
    const titleInfo = document.createElement('div');

    title.className ='title';
    title.textContent = 'Fromage de Leche';
    titleInfo.className = 'titleInfo'
    titleInfo.textContent = 'Goûtez le meilleur';
    title.appendChild(titleInfo)
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

component().appendChild(createHeader())
component().appendChild(maketitle())
component().appendChild(makeInfo())
component().appendChild(makeFooter())
document.body.appendChild(component())

/* 
create tab pages
    -run eventlistener to erase page
    -repopulate page with functions
*/