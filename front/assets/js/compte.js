document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.validation').forEach((e) => {
    e.addEventListener('change', (e) => {
      console.log('validerr')
      validation(e)
    })
  })
})

validation = (e) => {
  console.log('valide')
  if (e.target.value.trim() == '') {
    e.target.classList.add('is-invalid')
  } else {
    e.target.classList.remove('is-invalid')
  }
}
