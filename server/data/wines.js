const redWines = [
    {
        "name": "Bodegas Borsao Viña Borgia Garnacha",
        "region": "Spain",
        "organic": true,
        "sugar": "low",
        "price": 15.55,
        "pairings": []
    },
    {
        "name": "Château De Gaudou Renaissance 2018",
        "region": "France",
        "organic": false,
        "sugar": "low",
        "price": 24.65,
        "pairings": ["lamb", "venison"]
    },
    {
        "name": "Château des Tourettes Rouge d'une Nuit 2020",
        "region": "France",
        "organic": false,
        "sugar": "low",
        "price": 23.10,
        "pairings": []
    },
    {
        "name": "Domaine de la Rochette Côte Roannaise La Rochette 2021",
        "region": "France",
        "organic": true,
        "sugar": "low",
        "price": 22.00,
        "pairings": ["vegetables", "chicken", "potatoes"]
    },
    {
        "name": "Duzsi le Tour de Duzsi 2017",
        "region": "Hungary",
        "organic": false,
        "sugar": "low",
        "price": 15.00,
        "pairings": []
    },
    {
        "name": "Fattoria di Vaira Terrae 2019",
        "region": "Italy",
        "organic": true,
        "sugar": "low",
        "price": 19.75,
        "pairings": []
    },
    {
        "name": "Les Berges Merlot 2021",
        "region": "France",
        "organic": true,
        "sugar": "low",
        "price": 15.00,
        "pairings": []
    },
    {
        "name": "Masi Bonacosta Valpolicella Classico",
        "region": "Italy",
        "organic": false,
        "sugar": "low",
        "price": 16.95,
        "pairings": ["pizza", "vegetables", "sausage"]
    },
    {
        "name": "Cave St-Pierre Réserve des Administrateurs Pinot Noir 2020",
        "region": "Switzerland",
        "organic": false,
        "sugar": "low",
        "price": 23.70,
        "pairings": ["pork", "turkey", "chicken"]
    },
    {
        "name": "Château Fontaine Cuvée Confesseur",
        "region": "Canada",
        "organic": false,
        "sugar": "low",
        "price": 15.95,
        "pairings": []
    },
    {
        "name": "Poggio al Lupo Morellino di Scansano 2021",
        "region": "Italy",
        "organic": false,
        "sugar": "low",
        "price": 22.40,
        "pairings": []
    },
    {
        "name": "Salvalai Monile Ripasso Valpolicella 2019",
        "region": "Italy",
        "organic": false,
        "sugar": "medium",
        "price": 22.15,
        "pairings": ["beef", "duck", "vegetables"]
    },
    {
        "name": "Terrazas de Los Andes Reserva Malbec Mendoza 2019",
        "region": "Argentina",
        "organic": false,
        "sugar": "low",
        "price": 21.95,
        "pairings": ["beef", "duck"]
    },
    {
        "name": "Abbaye St-Hilaire Les Cerisiers 2019",
        "region": "France",
        "organic": false,
        "sugar": "low",
        "price": 19.60,
        "pairings": ["beef", "lamb", "venison"]
    },
    {
        "name": "Agiorgitiko Natur Domaine Tetramythos 2019",
        "region": "Greece",
        "organic": true,
        "sugar": "low",
        "price": 18.30,
        "pairings": ["pasta", "chicken"]
    },
    {
        "name": "Aglianico Donnachiara Irpinia 2018",
        "region": "Italy",
        "organic": false,
        "sugar": "low",
        "price": 23.10,
        "pairings": ["beef", "lamb"]
    },
    {
        "name": "Alfredo Roca Pinot Noir Mendoza 2020",
        "region": "Argentina",
        "organic": false,
        "sugar": "low",
        "price": 17.75,
        "pairings": ["chicken", "poutine", "beef"]
    },
    {
        "name": "Aranléon Solo Utiel-Requena 2019",
        "region": "Spain",
        "organic": true,
        "sugar": "low",
        "price": 19.95,
        "pairings": ["lamb", "pork", "beef"]
    },
    {
        "name": "Argiolas Costera 2019",
        "region": "Italy",
        "organic": false,
        "sugar": "low",
        "price": 20.40,
        "pairings": ["vegetables", "pizza"]
    },
    {
        "name": "Aubert & Mathieu Hors Pistes Pinot Noir 2021",
        "region": "France",
        "organic": false,
        "sugar": "low",
        "price": 23.20,
        "pairings": ["chicken", "cheese", "vegetables", "turkey", "veal", "lamb"]
    },
];

const whiteWines = [
    {
        "name": "Adalia Singan Soave 2021",
        "region": "Italy",
        "organic": false,
        "sugar": "low",
        "price": 23.80,
        "pairings": ["shrimp", "salmon", "lobster"]
    },
    {
        "name": "Bailly Lapierre Bourgogne Côtes d'Auxerre 2020",
        "region": "France",
        "organic": false,
        "sugar": "low",
        "price": 22.30,
        "pairings": []
    },
    {
        "name": "Bonterra Sauvignon Blanc 2021",
        "region": "United States",
        "organic": true,
        "sugar": "low",
        "price": 20.75,
        "pairings": ["calamari", "cod", "salmon"]
    },
    {
        "name": "Bouchard Père & Fils Bourgogne 2019",
        "region": "France",
        "organic": false,
        "sugar": "low",
        "price": 24.05,
        "pairings": ["ham", "cheese"]
    },
    {
        "name": "Cave de Roquebrun Saint-Chinian Les Fiefs d'Aupenac 2020",
        "region": "France",
        "organic": false,
        "sugar": "low",
        "price": 19.95,
        "pairings": ["shrimp", "pork", "salmon"]
    },
    {
        "name": "Château Couronneau Bordeaux 2020",
        "region": "France",
        "organic": true,
        "sugar": "low",
        "price": 19.80,
        "pairings": []
    },
    {
        "name": "Château de Cartes Atout Blanc 2021",
        "region": "Canada",
        "organic": false,
        "sugar": "medium",
        "price": 19.95,
        "pairings": []
    },
    {
        "name": "Château de la Greffière Mâcon La Roche Vineuse 2020",
        "region": "France",
        "organic": false,
        "sugar": "low",
        "price": 23.50,
        "pairings": []
    },
    {
        "name": "Château des Tourelles Le Grand Amandier 2020",
        "region": "France",
        "organic": false,
        "sugar": "low",
        "price": 16.60,
        "pairings": []
    },
    {
        "name": "Château Marjosse Bordeaux 2018",
        "region": "France",
        "organic": false,
        "sugar": "low",
        "price": 21.25,
        "pairings": []
    },
    {
        "name": "Château Mondésir-Gazin Blaye Côtes de Bordeaux 2019",
        "region": "France",
        "organic": true,
        "sugar": "low",
        "price": 23.00,
        "pairings": []
    },
    {
        "name": "Château Peyrat Graves 2019",
        "region": "France",
        "organic": false,
        "sugar": "low",
        "price": 21.85,
        "pairings": []
    },
    {
        "name": "Clos Roussely Touraine Le Clos 2019",
        "region": "France",
        "organic": true,
        "sugar": "low",
        "price": 23.15,
        "pairings": []
    },
    {
        "name": "Coq du Sud Chardonnay 2021",
        "region": "France",
        "organic": false,
        "sugar": "low",
        "price": 15.95,
        "pairings": []
    },
    {
        "name": "Domaine Cady Anjou 2020",
        "region": "France",
        "organic": true,
        "sugar": "low",
        "price": 20.40,
        "pairings": ["pizza", "sandwich", "spanakopita"]
    },
    {
        "name": "Domaine de Triennes Les Auréliens 2020",
        "region": "France",
        "organic": true,
        "sugar": "low",
        "price": 21.40,
        "pairings": []
    },
    {
        "name": "Domaine Emmanuel Fellot Bourgogne Chardonnay 2020",
        "region": "France",
        "organic": false,
        "sugar": "low",
        "price": 22.10,
        "pairings": []
    },
    {
        "name": "Domaine La Lieue Chardonnay 2020",
        "region": "France",
        "organic": true,
        "sugar": "low",
        "price": 20.90,
        "pairings": ["vegetables", "shrimp"]
    },
    {
        "name": "Domaine La Verpaille Mâcon Villages Vieilles Vignes 2020",
        "region": "France",
        "organic": true,
        "sugar": "low",
        "price": 24.40,
        "pairings": []
    },
    {
        "name": "Domaine St-Jacques Pinot Gris 2021",
        "region": "Canada",
        "organic": true,
        "sugar": "low",
        "price": 22.75,
        "pairings": ["vegetables", "chowder"]
    },
];

module.exports = { redWines, whiteWines };