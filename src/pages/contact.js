
function makeContact() {
    const contact = document.createElement('div')
    const contactTitle = document.createElement('div')
    
    contact.className = 'contact'
    contactTitle.className = 'contactTitle'
    contactTitle.textContent = 'Vous voulez nous contacter?'
    contact.appendChild(contactTitle)
    contact.className = 'contact'

    const location = document.createElement('div')
    location.textContent = 'Adresse: Café du palais français'
    location.className = 'location'
    contact.appendChild(location)

    const locationInfo = document.createElement('div')
    locationInfo.textContent = '34 rue des Fleurs'
    const address = document.createElement('div')
    address.textContent = '39359 Luxembourg, France'
    contact.appendChild(address)


    const telephone = document.createElement('div')
    telephone.textContent = 'Numéro de téléphone: 01.34.35.27.93'
    contact.appendChild(telephone)

    return contact
}

export default makeContact()