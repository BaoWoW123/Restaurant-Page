import _ from 'lodash';
import './style.css';
import Food from './food.jpg';

function component() {
    const content = document.querySelector('#content');
    //create li x 4 then append to header tab
    
    return content;
}
function createHeader() {
        const header = document.createElement('div');
        const menuTab = document.createElement('div');
        const contactTab = document.createElement('div');
        const reviewTab = document.createElement('div');
        header.className= 'header';
        menuTab.textContent = 'Menu';    
        header.appendChild(menuTab);
        content.appendChild(header)
        return header;
    }

    function makeInfo() {
        const info = document.createElement('div')
        info.className ='info';
        info.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium commodi vero eos debitis totam fuga esse repudiandae architecto possimus ducimus explicabo, delectus quibusdam tempora eaque nulla reprehenderit ea at incidunt minus? Reiciendis laboriosam magnam magni quibusdam impedit, corrupti nesciunt modi eius commodi est quis sit atque consequuntur voluptas omnis deserunt ipsam ullam! Labore mollitia eius aut, aliquid assumenda voluptatem consequatur exercitationem, suscipit perspiciatis rerum totam est officiis pariatur voluptatibus nulla temporibus quam dolore ipsum praesentium corrupti, fugit rem dolorem. Qui voluptate pariatur, ipsum, odit iure unde rem voluptas dicta ullam suscipit facilis id fugit sapiente rerum aspernatur possimus deleniti nihil. Incidunt libero, reiciendis molestiae sequi ipsam ducimus et neque. Voluptate atque suscipit ipsum vitae commodi! Illo, nam. Sequi at cum impedit assumenda? Officia provident quae perspiciatis debitis, vitae beatae incidunt eveniet ipsam. Quae pariatur ad iusto rem obcaecati soluta numquam corrupti laborum, accusamus ipsam. Ab numquam, itaque hic ipsum, quae laudantium unde, iure dolores culpa cumque quam nesciunt laboriosam rerum eum praesentium fugit eveniet exercitationem rem. Dolores magni voluptates quaerat earum molestiae aperiam nisi reiciendis sequi mollitia repudiandae culpa, at exercitationem velit error unde nobis quidem possimus officiis? Magni commodi ratione aperiam pariatur delectus unde aliquid beatae architecto aspernatur reiciendis.';
        return info;
    }

    function makeFooter() {
        const footer = document.createElement('div');
        footer.className ='footer';
        foot.textContent= 'Copyright © Bao Nguyen 2022'; 
        return footer;
    }

component().appendChild(createHeader())
component().appendChild(makeInfo())
component().appendChild(makeFooter())
document.body.appendChild(component())

/* 
<div class="header">sdf</div>
<div class="title"></div>
<div class="content">
    <div class="description"></div>
    <div class="reviews"></div>
</div> 
*/