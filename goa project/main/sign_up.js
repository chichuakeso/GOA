const groupSelect = document.getElementById('groupSelect')
  for (let i = 0; i <= 71; i++) {
    const option = document.createElement('option')
    option.value = i
    option.textContent = 'Group ' + i
    groupSelect.appendChild(option)
  }
  const form = document.getElementById('signupform')
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    
    const firstName = document.getElementById('name').value.trim()
    const lastName = document.getElementById('name2').value.trim()
    const email = document.getElementById('email').value.trim()
    const password = document.getElementById('password').value
    const group = groupSelect.value

    console.log('First Name:', firstName)
    console.log('Last Name:', lastName)
    console.log('Email:', email)
    console.log('Password:', password)
    console.log('Group:', group)

    form.reset()
    groupSelect.value = '0'
  });