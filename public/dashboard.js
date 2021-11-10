const createpost = document.querySelector('.createpost');
var form = document.querySelector('.form-signin');

createpost.addEventListener('click', function(){
    form.classList.remove('hide')
})
async function postCreate(event) {
    event.preventDefault();
    
    
    const title = document.querySelector('#floatingInput').value.trim();
    // const username = document.querySelector('#username-signup').value.trim();
    const text = document.querySelector('#floatingPassword').value.trim();
   // create a post
    try{ if (title && text) {
      console.log(title, text)
      console.log(typeof title, typeof text)
      const response =
        await fetch('/api/dashboard', {
        method: 'POST',
        body: JSON.stringify({
          title,
          text
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      console.log(response)
      if (response.ok) {
        document.location.replace('/');
      }
       else {
        alert(response.statusText);
      }
    }
  }
  catch(error){
    console.log(error)
  }
   }
  

  document.querySelector('.yellow').addEventListener('click', postCreate);
