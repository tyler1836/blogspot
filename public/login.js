async function loginFormHandler(event) {
    event.preventDefault();
    
    
    const email = document.querySelector('#floatingInput').value.trim();
    // const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#floatingPassword').value.trim();
    //route to login page
    try{ if (email && password) {
      console.log(email, password)
      console.log(typeof email, typeof password)
      const response =
        await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({
          email,
          password
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
  

  document.querySelector('.yellow').addEventListener('click', loginFormHandler);