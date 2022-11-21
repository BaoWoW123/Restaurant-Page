function makeMenu() {
    const menu = document.createElement('div')
    const menuTitle = document.createElement('div')
    
    menu.className = 'menu'
    menuTitle.className = 'menuTitle'
    menuTitle.textContent = 'Notre Carte'
    menu.appendChild(menuTitle)
    menu.className = 'menu'

    const flan = document.createElement('div')
    const flanImg = document.createElement('img')
    const flanInfo = document.createElement('div')
    flanInfo.textContent = 'Flan à la vanille avec caramel'
    flanImg.src = '/src/images/flan.jpg'
    flan.className = 'flan'
    flan.appendChild(flanImg)
    flan.append(flanInfo)
    menu.appendChild(flan)

    const croissant = document.createElement('div')
    const croissantImg = document.createElement('img')
    const croissantInfo = document.createElement('div')
    croissantInfo.textContent = 'Croissant chocolat ou nature'
    croissantImg.src = '/src/images/croissant.jpg'
    croissant.className = 'croissant'
    croissant.appendChild(croissantImg)
    croissant.append(croissantInfo)
    menu.appendChild(croissant)

    const rat = document.createElement('div')
    const ratImg = document.createElement('img')
    const ratInfo = document.createElement('div')
    ratInfo.textContent = 'Ratatouille'
    ratImg.src = '/src/images/rat.jpg'
    rat.className = 'rat'
    rat.appendChild(ratImg)
    rat.appendChild(ratInfo)
    menu.appendChild(rat)

    const sandwich = document.createElement('div')
    const sandwichImg = document.createElement('img')
    const sandwichInfo = document.createElement('div')
    sandwichInfo.textContent = 'Sandwich fromage ou jambon'
    sandwichImg.src = '/src/images/sandwich.jpg'
    sandwich.className = 'sandwich'
    sandwich.appendChild(sandwichImg)
    sandwich.appendChild(sandwichInfo)
    menu.appendChild(sandwich)

    return menu
}

export default makeMenu();