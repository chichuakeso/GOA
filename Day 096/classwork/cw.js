/*შექმენით სარეგიდტრაციო ფორმა და ცხრილი

ფორმის დადასტურებისას, შეყვანილი მონაცემები უნდა დაემატოს ცხრილში, ახალი რიგის სახით*/

const form = document.getElementById('form')
const table = document.getElementById('table')

form.onsubmit = e => {
  e.preventDefault()
  const email = form.email.value.trim()
  const password = form.password.value.trim()
  if (!email || !password) return alert('info missing')
    
  const row = table.insertRow()
  row.insertCell().textContent = email
  row.insertCell().textContent = password
  form.reset()
  form.email.focus()
}