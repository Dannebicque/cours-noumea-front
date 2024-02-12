---
description: Mise en place des boutons du panier
---

# Séance 3

## Séance 3

Dans cette séance nous allons faire fonctionner les différents boutons de notre panier (gestion de la quantité, suppression d'un produit, suppression de tous les produits). L'action sur un de ces boutons devra déclencher la mise à jour de toutes les données du panier (prix total, nombre de produits, TVA, ...).

### Vidéo de démonstration

La vidéo ci-après vous montre un exemple du résultat que vous devriez obtenir. L'emplacement des éléments n'est pas important, vous pouvez les placer où vous le souhaitez.

{% embed url="https://youtu.be/CxAiJ6GoZhQ" %}

### Étape 1 : Mise en place des boutons du panier

Dans la séance précédente vous avez mis les boutons, mais ces derniers ne sont pas opérationnels.

La première opération va donc consister à ajouter un écouteur d'événement sur chacun de ces boutons, et dans un premier temps nous allons simplement afficher un message dans la console pour vérifier que l'écouteur fonctionne.

Pour cela, vous devez ajouter un écouteur d'événement sur chacun des boutons du panier. Pour cela, vous devez utiliser la méthode `addEventListener` de l'objet `document` et lui passer en paramètre le nom de l'événement à écouter (ici `click`) et une fonction qui sera appelée lorsque l'événement sera déclenché.

Nous allons avoir plusieurs boutons "+", "-" ou "supprimer". Nous ne pouvons donc pas récupérer un id. Et chaque bouton doit fonctionner. Le plus pratique serait de leur donner une classe commune (par exemple `btn-panier-add`) et de récupérer tous les boutons qui ont cette classe.

Pour cela, vous devez utiliser la méthode `querySelectorAll` de l'objet `document` et lui passer en paramètre le sélecteur CSS qui permet de récupérer tous les boutons qui ont la classe `btn-panier-add`.

Ensuite, vous devez parcourir tous les boutons récupérés et ajouter un écouteur d'événement sur chacun d'eux.

Pour cela, vous devez utiliser la méthode `forEach` de l'objet `NodeList` et lui passer en paramètre une fonction qui sera appelée pour chaque élément de la liste.

Dans cette fonction, vous devez ajouter un écouteur d'événement sur le bouton en cours de traitement. Pour cela, vous devez utiliser la méthode `addEventListener` de l'objet `Element` et lui passer en paramètre le nom de l'événement à écouter (ici `click`) et une fonction qui sera appelée lorsque l'événement sera déclenché.

Exemple de code :

```javascript
const btns = document.querySelectorAll('.btn-panier-add')

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log('Bouton cliqué')
    })
})
```

### Exercice

Ajoutez un écouteur d'événement sur chacun des boutons du panier et affichez un message dans la console pour vérifier que l'écouteur fonctionne.

### Étape 2 : Modification de la quantité d'un produit

Dans cette étape, nous allons modifier la quantité d'un produit dans le panier en fonction du bouton cliqué ("+" ou "-").

Plusieurs solutions sont possibles.

* Vous pouvez récupérer un "id" pour le produit et rechercher dans les données Json le prix unitaire du produit pour recalculer les éléments.
* Vous pouvez essayer de récupérer le contenu de la colonne "prix unitaire" sur la ligne de votre produit en parcourant le dom du tableau
* On peut ajouter un attribut "data" sur la ligne du produit, ou sur les boutons pour stocker le prix unitaire du produit

On va utiliser cette dernière solution, car c'est la plus "rapide" à mettre en place. Néanmoins, il est préférable de stocker les données dans un objet JavaScript plutôt que dans le DOM.

Pour cela, vous devez ajouter un attribut `data-price` sur les boutons `+` et `-` et lui assigner le prix unitaire du produit.

Exemple de code :

```html
<button class="btn-panier-add" data-price="10">+</button>
```

Pour récupérer le prix unitaire du produit, vous devez utiliser la méthode `dataset` de l'objet `Element` et lui passer en paramètre le nom de l'attribut à récupérer (ici `data-price`).

Exemple de code :

```javascript
const btn = e.target
const price = btn.dataset.price
```

Dans cet extrait de code `e` correspond à l'événnement déclenché (ici un click), `target` correspond à l'élément qui a déclenché l'événement et `dataset` correspond à l'ensemble des attributs `data` de l'élément.

Pour récupérer la nouvelle quantité du produit, selon si vous avez une zone de saisie (un input), ou une zone HTML, vous devez utiliser une méthode différente.

Si vous avez une zone de saisie, vous devez utiliser la méthode `value` de l'objet `HTMLInputElement` et lui passer en paramètre la nouvelle valeur.

Exemple de code :

```javascript
const input = btn.parentElement.querySelector('input')
input.value = parseInt(input.value) + 1 //on augmente la quantité de 1
```

Cet extrait de code ne fonctionne que si le input et le bouton sont dans le même élément parent (le TD par exemple ou un div). Dans le cas contraire adaptez ce code.

### Exercice

Mettre en place ce code pour votre bouton "+" et votre bouton "-". Assurez vous que la quantité est bonne.

### Étape 3 : Mise à jour du prix total du produit

A ce stade, la quantité est la bonne, mais le prix total du produit, et du panier ne sont pas mis à jour. Pour cela, vous devez récupérer la zone HTML qui contient le prix total du produit et lui assigner le nouveau prix total.

La aussi, il y a plusieurs solutions possibles.

* Pour le prix total du panier, ce dernier est unique, on peut donc affecter un id sur la zone contenant cette valeur. La récupérer et la mettre à jour avec la nouvelle quantité est donc relativement classique.
* Pour le prix total de la ligne de notre produit, on ne peut pas définir un id (sauf à la construire en fonction de l'id du produit). Par contre, on sait où se trouve la zone depuis notre bouton. On peut donc récupérer la zone en parcourant le dom depuis le bouton. C'est ce que nous allons faire.

On pourrait donc avoir quelque chose comme cela :

```javascript
const totalPrixProduit = e.target.parentElement.parentElement.nextElementSibling
totalPrixProduit.innerHTML = `${formatPrice(parseInt(input.value) * parseFloat(price))}`

```

### Exercice

Mettre en place ce code pour votre bouton "+" et votre bouton "-". Mettre à jour tous les prix (TTC, HT, TVA) du panier.

### Étape 4 : Suppression d'un produit

Dans cette étape, nous allons supprimer un produit du panier.

Pour cela, vous devez ajouter un écouteur d'événement sur le bouton "supprimer" et supprimer la ligne du produit.

Pour supprimer un élément du dom, vous devez utiliser la méthode `remove` de l'objet `Element`.

Exemple de code :

```javascript
const btn = e.target
const row = btn.parentElement.parentElement
row.remove()
```

Cela va effacer la ligne du produit du panier. Mais le montant total est une nouvelle fois faux. Il faut donc le mettre à jour.

Pour cela, avant de supprimer la ligne du produit, vous devez récupérer le prix total du produit et le soustraire au prix total du panier. Vous avez des exemples pour parcourir le dom, on part cette fois du bouton supprimer.

### Exercice

Mettre en place ce code pour votre bouton "supprimer". Mettre à jour tous les prix (TTC, HT, TVA) du panier.
