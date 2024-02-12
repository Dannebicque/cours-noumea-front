---
description: >-
  Mise en place de la page de paiement et des données utilisateurs avec
  validation des données en javascript
---

# Séance 6

Mettre en place les dernières pages du tunnel de commande :

* Collecte de l'adresse de livraison et de facturation, coordonnées du client
* Mise en place d'un formulaire de paiement (factice pour collecter le choix et les données associées)
* Confirmation de la commande

Ces formulaires étant sont essentiels pour la bonne réception de la commande et la satisfaction client. Il faut donc veiller à leur bon fonctionnement, à collecter que ce qui est nécessaire et à guider les usagers en cas d'erreurs.

### Préparation

#### Création des pages

Ajoutez les pages nécessaires. Vous pouvez faire plusieurs pages (une par étape) ou un processus en une seule page.

Dans les deux cas il est important d'indiquer aux utilisateurs où ils en sont dans le processus et combien d'étapes il reste à faire.

#### Collecte des informations

Pour chaque page, définissez les informations à collecter. Pour chaque information, définissez les contraintes et les messages d'erreur.

{% hint style="info" %}
Consultez la documentation de bootstrap pour les formulaires [https://getbootstrap.com/docs/5.3/forms/overview/](https://getbootstrap.com/docs/5.3/forms/overview/)
{% endhint %}

### Exercice

* Mettre en place l'ensemble des éléments en HTML et CSS.

### Vérification des données

La validation doit toujours se faire du côté serveur. Cela permet de s'assurer que les données sont valides et que le formulaire n'a pas été modifié. Malgré tout il est possible de faire une première validation du côté client pour éviter de faire des requêtes inutiles au serveur, et pour guider l'utilisateur.

#### Validation côté client

Il existe plusieurs librairie permettant de faire cela en JavaScript. Néanmoins, pour appréhender la logique, nous allons le mettre en place manuellement sur quelques vérifications simple.

Les éléments que nous allons vérifier sont les suivants :

* Le nom et le prénom ne doivent pas être vides
* L'email doit être un email
* L'adresse doit être saisie
* Le code postal doit être un nombre à 5 chiffres
* Le numéro de téléphone doit être un nombre à 6 chiffres

#### Mise en place

Pour chaque champ, à valider, nous allons ajouter un événement `change` qui va vérifier la validité du champ et afficher un message d'erreur si nécessaire.

```js
  document.querySelectorAll('.validation').forEach((e) => {
    e.addEventListener('change', (e) => {
      console.log('validerr')
      validation(e)
    })
  })
```

Cet extrait de code va ajouter un événement `change` sur tous les éléments ayant la classe `validation`. Lorsque l'événement est déclenché, la fonction `validation` est appelée.

Pour faciliter la vérification, on peut préciser sur chaque champs les éléments à controler. Le plus simple est de passer des attributs `data` sur les éléments.

```html
<input type="text" name="nom" id="nom" class="validation" data-required="true" data-type="text" data-min="2" data-max="50">
```

Pour récupérer ces attributs, on peut utiliser la propriété `dataset` de l'élément. Par exemple :

```js
  const validation = (e) => {
    const element = e.target
    const required = element.dataset.required
    const type = element.dataset.type
    const min = element.dataset.min
    const max = element.dataset.max
    const value = element.value
    console.log(required, type, min, max, value, id, error)
  }
```

En fonction du "type" on peut appeler la bonne méthode pour vérifier la validité de la valeur. Par exemple pour le type `text` :

```js
  const validationText = (value, min, max) => {
    if (value.length < min || value.length > max) {
      return false
    }
    return true
  }
```

Si la valeur n'est pas valide on peut ajouter la class 'is-invalid' de bootstrap sur l'élément et afficher un message d'erreur précisant la nature de l'erreur sous le champs.

{% hint style="info" %}
Il peut aussi être intéressant d'indiquer qu'un champ est valide et pas juste qu'il y a une erreur. C'est d'autant plus important sur des données sensibles avec des informations "complexes" à saisir (mot de passe, numéro de carte bancaire, etc.).
{% endhint %}

### Exercice

Mettre en place les vérifications sur vos différents formulaires
