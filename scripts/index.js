function getPass() {
   let pass = ''

   let passLength = document.querySelector('#select')

   let chars = '1234567890qwertyuiopasdfghjklzxcvbnm,.<>?/@"$%^&*() '

   for (let i = 0; i < passLength.value; i++) {
      let randomPass = Math.floor(Math.random() * chars.length)
      pass += chars.substring(randomPass, randomPass + 1)
   }
   document.querySelector('.out').innerText = pass

}

document.querySelector('.generation').addEventListener('click', () => {
   getPass()
})