/*წინა დავალებაში გამოიყენეთ object constructor */

const form = document.getElementById('form')
const table = document.getElementById('table')

function User(email, password) {
  this.email = email
  this.password = password
}

form.onsubmit = e => {
  e.preventDefault()
  const email = form.email.value.trim()
  const password = form.password.value.trim()
  if (!email || !password) return alert('info missing')

  const user = new User(email, password)

  const row = table.insertRow()
  row.insertCell().textContent = user.email
  row.insertCell().textContent = user.password
  form.reset()
  form.email.focus()
}