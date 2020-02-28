var mydata = JSON.parse({
    "products": [
        {
            "id": "1",
            "title": "X2 Khaolak Anda Mani Resort *****",
            "destination": "Khao Lak, Thaïlande",
            "price": {
                "catalogPrice": "98",
                "currency": "€",
                "label": "à partir de",
                "type": "par suite"
            },
            "image": {
                "src": "./images/x2_khoalak_anda_mani_resort_03.jpg"
            },
            "summary": "Un séjour tropical à l’abri des regards, sur une magnifique plage de Thaïlande préservée. Le tout dans un hôtel cinq étoiles primé par Trip Advisor et le Traveler’s Choice Award. Le X2 Khaolak Anda Mani Resort ***** vous offre cette incroyable expérience, pour découvrir la beauté de Khaolak en toute tranquillité. Votre suite entièrement équipée vous laissera bouche bée : vous disposerez d’une terrasse et d’un jardin privé, d’une douche à effet de pluie… Mais aussi d’une baignoire pour deux, parfaite pour passer de douces soirées. \n Exclusif, romantique, intime et luxueux : la perle rare de Khaolak vous attend !"
        },
        {
            "id": "2",
            "title": "Le Grand Balcon ****",
            "destination": "Toulouse, France",
            "price": {
                "catalogPrice": "99",
                "currency": "€",
                "label": "à partir de",
                "type": "par suite"
            },
            "image": {
                "src": "./images/grandbalcon_10.webp"
            },
            "summary": "Du rose pour les façades, du bleu azur pour le ciel et un brin de pastel dans l’air pour un brillant jeu de lumière. Cette merveilleuse peinture, on pourrait l’intituler ainsi : Toulouse, depuis la Place du Capitole. \n Ah le Capitole ! Que vous la vouliez un peu, passionnément ou à la folie, l’Hôtel Le Grand Balcon **** sera votre point de chute. Comme il l’a été pour Saint-Exupéry en son temps. Le Grand Balcon ****, où le meilleur vol de nuit qui soit, jusqu’au firmament !"
        },
        {
            "id": "3",
            "title": "Martin's All Suites ****",
            "destination": "Louvain-la-Neuve, Belgique",
            "price": {
                "catalogPrice": "89",
                "currency": "€",
                "label": "à partir de",
                "type": "par chambre"
            },
            "image": {
                "src": "./images/martinsallsuites_01.webp"
            },
            "summary": "Inauguré en mai 2018, le Martin’s All Suites **** a répondu aux interrogations de tous ceux qui se demandaient quel pouvait bien être ce bâtiment aussi splendide qu’imposant. Et sa réponse est simple : il s’agit d’un complexe où tout, dans les moindres détails, est prévu pour satisfaire ses invités. Et cela passe tant par des services complets que par un cadre enchanteur, l’établissement étant cerné par le centre-ville de Louvain-la-Neuve d’un côté, et le magnifique lac de la ville de l’autre."
        },
        {
            "id": "4",
            "title": "Hotel & Spa Villa Olímpica Suites ****",
            "destination": "Barcelone, Espagne",
            "price": {
                "catalogPrice": "66",
                "currency": "€",
                "label": "à partir de",
                "type": "par chambre"
            },
            "image": {
                "src": "./images/villa_olimpica_suites_15.jpg"
            },
            "summary": "Le quartier de Poblenou est un des plus contrastés de Barcelone. Les cheminées de briques rouges, témoins des usines qui peuplaient autrefois la zone, côtoient aujourd’hui les bâtiments les plus modernes. Les ruelles où vivaient les pêcheurs se fondent dans les rues parfaitement parallèles de ce district dynamique, en pleine expansion depuis les Jeux Olympiques de 1992 et qui concentre les principales entreprises du secteur technologique. S’y cache l’Hotel & Spa Villa Olímpica Suites ****, lui aussi parfaitement connecté… aux trésors de la ville, et donc idéal pour votre city-break dans la Belle Catalane !"
        }
    ]
});

console.log(mydata.products.title);