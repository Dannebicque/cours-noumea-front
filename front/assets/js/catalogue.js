const data = {
  'products': []}

document.addEventListener('DOMContentLoaded', () => {
  btnAddToCart = document.querySelectorAll('.addToCart')
  btnAddToCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      ajouterAuPanier(e)
    })
  })


  function ajouterAuPanier(e) {
    const id = e.target.dataset.id
    const name = e.target.parentElement.parentElement.parentElement.querySelector('.card-title').innerHTML
    const price = e.target.parentElement.parentElement.querySelector('.price').innerHTML

    // on vérifie si le produit est déjà dans le panier
    const produitExistant = data.products.find((product) => {
      return product.id == id
    })

    if (produitExistant) {
      // si le produit est déjà dans le panier, on incrémente la quantité
      produitExistant.quantity++
    } else {
      // si le produit n'est pas dans le panier, on l'ajoute
      data.products.push({
        'id': id,
        'name': name,
        'price': price,
        'quantity': 1,
      })
    }

    document.getElementById('cart').innerHTML = data.products.length

    console.log(data)
  }
})
