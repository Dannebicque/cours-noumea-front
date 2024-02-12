const data = {
  'products': [
    {
      'id': 1,
      'name': 'T-shirt',
      'price': 15,
      'quantity': 1,
    },
    {
      'id': 2,
      'name': 'Pantalon',
      'price': 25,
      'quantity': 2,
    },
    {
      'id': 3,
      'name': 'Chaussures',
      'price': 50,
      'quantity': 1,
    }],
}

let totalPanier = 0
let nbArticles = 0

// dès que le dom est pret, on affiche le panier dans le tableau, sans jquery

document.addEventListener('DOMContentLoaded', () => {
  const panier = document.getElementById('panier')
  const tbody = document.createElement('tbody')
  panier.appendChild(tbody)

  data.products.forEach(product => {
    const tr = document.createElement('tr')
    tr.innerHTML = `<td>${product.name}</td>
                    <td>${formatPrice(product.price)} €</td>
                    <td>
                    <div class="input-group mb-3">
                      <button class="input-group-text btnMoins" data-prix="${product.price}">-</button>
                      <input type="text" class="form-control" value="${product.quantity}">
                      <button class="input-group-text btnPlus" data-prix="${product.price}">+</button>
                    </div>
                    </td>
                    <td>${formatPrice(product.quantity * product.price)} €</td>
                    <td><button class="btn btn-danger btnSupprimer">Supprimer</button></td>`
    tbody.appendChild(tr)
    totalPanier += product.quantity * product.price
    nbArticles += product.quantity
  })

  //mise à jour des prix
  updateTotaux()

  const btnPlus = document.querySelectorAll('.btnPlus')
  btnPlus.forEach((e) => {
    e.addEventListener('click', (e) => {
     actionBtnPlus(e)
    })
  })

  const btnMoins = document.querySelectorAll('.btnMoins')
  btnMoins.forEach((e) => {
    e.addEventListener('click', (e) => {
      actionBtnMoins(e)
    })
  })

  const btnSupprimer = document.querySelectorAll('.btnSupprimer')
  btnSupprimer.forEach((e) => {
    e.addEventListener('click', (e) => {
      actionBtnSupprimer(e)
    })
  })
})

function actionBtnSupprimer(btnPlus) {
  // récupérer le prix total de la ligne
  const totalPrixProduit = parseFloat(btnPlus.target.parentElement.previousElementSibling.innerHTML)
  // récupérer la quantité
  const quantite = parseInt(btnPlus.target.parentElement.previousElementSibling.previousElementSibling.querySelector('input').value)
  // on met à jour le prix total
  totalPanier -= totalPrixProduit
  nbArticles -= quantite
  updateTotaux()
  // on supprime la ligne
  btnPlus.target.parentElement.parentElement.remove()

}

function actionBtnPlus(btnPlus) {
  const input = btnPlus.target.parentElement.querySelector('input')
  input.value = parseInt(input.value) + 1
  // on met à jour le prix total
  const totalPrixProduit = btnPlus.target.parentElement.parentElement.nextElementSibling
  totalPrixProduit.innerHTML = `${formatPrice(input.value * btnPlus.target.dataset.prix)} €`
  totalPanier += parseFloat(btnPlus.target.dataset.prix)
  nbArticles += 1
  updateTotaux()
}

function actionBtnMoins(btnMoins) {
  const input = btnMoins.target.parentElement.querySelector('input')
  input.value = parseInt(input.value) - 1
  // on met à jour le prix total
  const totalPrixProduit = btnMoins.target.parentElement.parentElement.nextElementSibling
  totalPrixProduit.innerHTML = `${formatPrice(input.value * btnMoins.target.dataset.prix)} €`
  totalPanier -= parseFloat(btnMoins.target.dataset.prix)
  nbArticles -= 1
  updateTotaux()
}

function updateTotaux() {
  const totalTva = totalPanier * 0.2
  const totalHt = totalPanier - totalTva
  document.getElementById('nbArticles').innerHTML = nbArticles
  document.getElementById('totalTTC').innerHTML = formatPrice(totalPanier)
  document.getElementById('totalHT').innerHTML = formatPrice(totalHt)
  document.getElementById('totalTva').innerHTML = formatPrice(totalTva)
  document.getElementById('totalTTC').innerHTML = formatPrice(totalPanier)

}

// fonction pour formater le prix
function formatPrice(price) {
  return price.toFixed(2).replace('.', ',')
}

// bouton pour supprimer un produit
const btnDelete = document.querySelectorAll('.btn-danger')
btnDelete.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.parentElement.remove()
  })
})

// bouton pour augmenter la quantité d'un produit




