function makeReviews() {
    const reviewPage = document.createElement('div')
    const reviewsTitle = document.createElement('div')
    
    reviewPage.className = 'reviewPage'
    reviewsTitle.className = 'reviewsTitle'
    reviewsTitle.textContent = 'Nos avis clients'
    reviewPage.appendChild(reviewsTitle)

    const reviews = document.createElement('div')
    reviews.className ='reviews'


    const review1 = document.createElement('div')
    review1.textContent = 'Ce restaurant confortable a laissé les meilleures impressions! Des hôtes accueillants, des plats délicieux, une belle présentation, une large carte des vins et un dessert merveilleux. Je recommande à tout le monde ! Je voudrais revenir ici encore et encore.'
    review1.className = 'review1'
    reviews.appendChild(review1)

    const review2 = document.createElement('div')
    review2.textContent = "Première fois en (RN) et VOUS devez y aller! C'est le petit endroit le plus mignon avec une nourriture incroyable. Le (FN) est à tomber par terre. C'ÉTAIT LE FEU !! Le service que nous avons reçu était tellement incroyable et nous reviendrons certainement. Ils nous ont fait sentir les bienvenus et nous ont donné une expérience incroyable."
    review2.className = 'review2'
    reviews.appendChild(review2)

    const review3 = document.createElement('div')
    review3.textContent = "C'est une super expérience. L'ambiance est très accueillante et charmante. Vins, nourriture et service incroyables. Le personnel est extrêmement compétent et fait d'excellentes recommandations."
    review3.className = 'review2'
    reviews.appendChild(review3)
 

    const review4 = document.createElement('div')
    review4.textContent = "Cet endroit est génial ! L'atmosphère est cool et cool mais le personnel est également très sympathique. Ils savent ce qu'ils font et de quoi ils parlent, et vous pouvez dire que rendre les clients heureux est leur principale priorité. La nourriture est plutôt bonne, quelques classiques italiens et quelques rebondissements, et pour leurs prix, cela en vaut la peine à 100%."
    review4.className = 'review4'
    reviews.appendChild(review4)

    const review5 = document.createElement('div')
    review5.textContent = "Excellente nourriture. Le menu est vaste et saisonnier à un niveau particulièrement élevé. Certainement une cuisine raffinée. Cela peut être cher mais ça vaut le coup et ils font des offres différentes sur différentes nuits, donc ça vaut la peine de les vérifier avant de réserver. Hautement recommandé."
    review5.className = 'review5'
    reviews.appendChild(review5)
    reviewPage.appendChild(reviews)
    return reviewPage
}

export default makeReviews()