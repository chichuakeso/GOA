/*შექმენით ფორმა, შემდგარი მინიმუმ სამი input-ის. მომხმარებელს შემოატანინეთ სრული სახელი, ემაილი და პაროლი. შემოტანილი მონაცემები გამოიტანეთ საიტზე*/

const form = document.getElementById('form')
const text = document.getElementById('text')

function User(email, password, name) {
  this.email = email
  this.password = password
  this.name = name
}

form.onsubmit = e => {
  e.preventDefault()
  const email = form.email.value.trim()
  const password = form.password.value.trim()
  const name = form.name.value.trim()

  if (!email || !password || !name) return alert('info missing')

  const user = new User(email, password, name)

  text.textContent = `Hi ${user.name} ,

                      Email: ${user.email} ,

                      Password: ${user.password}`

  
  form.reset()
  form.name.focus()
}