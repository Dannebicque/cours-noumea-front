---
description: >-
  Mise en place du catalogue de produits avec ajouter au panier, indication du
  nombre de produits dans le panier, ...
---

# Séance 4

Mise en place de la page catalogue. Cette page doit afficher la liste des produits disponibles avec un bouton permettant l'ajout au panier.

Vous veillerez à travailler l'affichage pour intégrer les éléments nécessaires, coller à votre gabarit et avoir une accessibilité correcte.

Vous pouvez faire cette page en PHP, avec un tableau de produits en dur, ou HTML en dupliquant les blocs de produits. L'objectif est d'afficher une dizaine de produits, avec, a minima une image, un titre, un prix et un bouton d'ajout au panier.

### Exercice

Intégrer votre menu (avec un endroit pour afficher la quantité d'article dans le panier) et votre page catalogue.

### Mise en place du bouton ajouter

Le bouton ajouter doit faire plusieurs choses :

* ajouter le produit au panier (dans une variable JavaScript), puis dans le localStorage
* mettre à jour la quantité d'article dans le panier (dans le menu)
* éventuellement afficher un message de confirmation et indiquer la quantité selectionnée dans l'article.

Comme nous l'avons fait sur les séances précédentes, nous allons parcourir tous les boutons "Ajouter au panier" et ajouter un écouteur d'événement sur le clic.

```javascript
// On récupère tous les boutons "Ajouter au panier"
const buttons = document.querySelectorAll('.add-to-cart'); //si notre bouton à une classe add-to-cart

// On parcourt tous les boutons
buttons.forEach((button) => {
  // On ajoute un écouteur d'événement sur le clic
  button.addEventListener('click', (event) => {
    //on gère le clic
  });
});
```

### Gestion du clic

Les étapes à faire sont les suivantes :

* Récupérer les informations du produit
  * On peut soit parcourir le dom pour récupérer les informations (titre, prix, id), soit récupérer les informations avec des attributs "data", soit récupérer depuis une source de données (appel API, ...).
* Vérifier si le produit est déjà dans le panier
  * Si oui, on doit augmenter la quantité
  * Si non, on doit l'ajouter dans le panier avec une quantité 1
* Mettre à jour la quantité d'article dans le panier (dans le menu)
  * Deux logique, on affiche le nombre différents de produit, on affiche la quantité réelle de produit. A votre convenance.

#### Exercice

Mettre en place le fonctionnement des boutons et l'affichage du nombre de produits dans le menu

### Stockage dans le localStorage

Actuellement, si vous actualisez votre page, tout est perdu. Ce n'est pas très pratique... Une solution simple consiste à stocker les informations dans le `localStorage` ou `sessionStorage`.

Lire ici pour plus de détails : [https://fr.javascript.info/localstorage](https://fr.javascript.info/localstorage)

* Les principales caractéristiques de `localStorage` sont les suivantes :
  * Partagé entre tous les onglets et fenêtres d’une même origine.
  * Les données n’expirent pas. Il reste après le redémarrage du navigateur et même le redémarrage du système d’exploitation.
* L’objet `sessionStorage` est beaucoup moins utilisé que `localStorage`.
  * Les propriétés et les méthodes sont les mêmes, mais c’est beaucoup plus limité :
  * Le `sessionStorage` n’existe que dans l’onglet actuel du navigateur.
  * Un autre onglet avec la même page aura un stockage différent.
  * Mais il est partagé entre les iframes du même onglet (en supposant qu’ils proviennent de la même origine).
  * Les données survivent à l’actualisation de la page, mais pas à la fermeture/ouverture de l’onglet.

Nous allons utiliser `localStorage` pour stocker les produits du panier. Les méthodes principales sont :

* `setItem(key, value)` – stocke la paire clé/valeur.
* `getItem(key)` – récupère la valeur par clé.
* `removeItem(key)` – supprime la clé avec sa valeur.
* `clear()` – supprime tout.
* `key(index)` – récupère la clé sur une position donnée.
* `length` – le nombre d’éléments stockés.

### Exercice

Modifiez votre code catalogue pour sauvegarder les éléments ajoutés dans le panier dans le `localStorage`.

Modifiez la page panier pour récupérer maintenant les données depuis le `localStorage` et le mettre à jour à chaque modification.
