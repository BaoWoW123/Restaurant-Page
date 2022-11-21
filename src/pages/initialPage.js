function maketitle() {
    const title =  document.createElement('div');
    const titleInfo = document.createElement('div');

    title.className ='title';
    title.textContent = 'Café du Palais Français';
    titleInfo.className = 'titleInfo'
    titleInfo.textContent = 'Goûtez le meilleur';
    title.appendChild(titleInfo);
    
    const info = document.createElement('div');
    info.className ='info';
    info.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, quisquam vitae? Laudantium nemo est vel error adipisci, hic repudiandae, cum maiores dolorum iure enim at illum autem quo, culpa dignissimos dicta! Ad laboriosam animi corporis neque autem, alias quia! Rerum sint repellat officia similique corrupti impedit aut quidem nihil quisquam?';
    title.appendChild(info)
    return title;
}

export default maketitle()