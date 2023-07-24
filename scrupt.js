const name = document.getElementById('name')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const password = document.getElementById('password')

form.addEventListener('submit', (e) => {
  let messages = []
  }
  if (password.value.length <= 8) {
    messages.push('password must be 8 characters long')
  }
  
  if (message.length > 0){
    e.preventDefult()
    errorElement.innerText = messages.join(', ')
  }
})
