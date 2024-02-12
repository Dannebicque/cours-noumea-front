---
description: >-
  Objectifs de la séance : Intégrer le panier d'achat (selon votre gabarit de la
  séance 1), et afficher les données à partir d'un objet Json.
---

# Séance 2

## Données de base

Les données au format json proposé pour l'exercice est le suivant :

```json
{
  "products": [
    {
      "id": 1,
      "name": "T-shirt",
      "price": 10,
      "quantity": 1,
      "image": "https://picsum.photos/200/300?random=1"
    },
    {
      "id": 2,
      "name": "Pantalon",
      "price": 20,
      "quantity": 2,
      "image": "https://picsum.photos/200/300?random=2"
    },
    {
      "id": 3,
      "name": "Chaussures",
      "price": 30,
      "quantity": 1,
      "image": "https://picsum.photos/200/300?random=3"
    }
  ]
}
```

Ce fichier décrit le contenu des produits ajoutés au panier par le client. Par la suite, nous verrons comment le construire dynamiquement à partir de la page catalogue.

Les liens vers les images et les textes, peuvent être modifiés pour afficher des images plus adaptées à votre thème.

### Intégration du panier en HTML

L'objectif est maintenant de construire votre panier, et d'y ajouter les articles qui se trouvent dans le fichier JavaScript.

Pour cela, intégrez votre page panier, et la structure de votre panier (l'usage des tableaux est le plus "simple", mais vous êtes libre de choisir la structure qui vous convient le mieux).

Dans un premier temps vous pouvez ajouter une ligne ou deux avec des produits pour vous assurer que le HTML est correctement intégré.

### Intégration du panier en JavaScript

Maintenant que le HTML est intégré, il faut ajouter les produits au panier, vous allez retirer les lignes des données fictives, et les remplacer par une boucle qui va parcourir les produits du fichier json en JavaScript et ajouter le code HTML manquant.

Garder une "copie" d'une ligne qui servira de base pour la partie JavaScript.

Le début de votre fichier JavaScript ressemblera à ceci :

```js

const data = {
  "products": [
    {
      "id": 1,
      "name": "T-shirt",
      "price": 10,
      "quantity": 1,
      "image": "https://picsum.photos/200/300?random=1"
    },
    {
      "id": 2,
      "name": "Pantalon",
      "price": 20,
      "quantity": 2,
      "image": "https://picsum.photos/200/300?random=2"
    },
    {
      "id": 3,
      "name": "Chaussures",
      "price": 30,
      "quantity": 1,
      "image": "https://picsum.photos/200/300?random=3"
    }
  ]
}

document.addEventListener('DOMContentLoaded', () => {

    //Le dom est chargé,  votre code ici...
    
});
```

Le plus pratique est de donner un id à votre tableau de votre panier, et de récupérer cet élément dans votre code JavaScript.

```js
const panier = document.getElementById('panier');
```

Cette ligne devrait se trouver dans la partie tbody de votre tableau. On peut donc ajouter cette partie tbody à notre tableau (s'il n'en contient pas encore)

```js
  const tbody = document.createElement('tbody')
  panier.appendChild(tbody)
```

Ensuite, vous pouvez parcourir les produits (products) des données json, et ajouter une ligne par produit.

```js
data.products.forEach(product => {
    //Ajouter une ligne au tableau
});
```

Il vous reste ensuite à définir le code HTML qui va être généré pour chaque ligne de produit, et l'ajouter à votre tableau.

```js
const tr = document.createElement('tr');
tr.innerHTML = `
    <td>...vos données pour un produit ...</td>
`;
tbody.appendChild(tr);
```

### Travail à faire

* Afficher les données dans votre page panier, à partir des données json.
* Ajoutez toutes les parties nécessaires (total, TVA, ...)
* Alimentez ces zones (en JavaScript) avec les éléments de votre panier (calculé le coût total du panier, la TVA (20%), ...)
* Ajoutez tous les boutons et interactions nécessaires (supprimer un produit, modifier la quantité, ...)
* Prenez le temps d'intégrer correctement l'ensemble des éléments et d'ajouter une barre de menu.
* Pensez à l'ergonomie, l'accessibilité et l'UX de votre page

{% hint style="info" %}
Pensez au formatage monétaire des données... Une petite fonction JavaScript serait appropriée...
{% endhint %}

