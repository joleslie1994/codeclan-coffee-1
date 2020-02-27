fetch('http://localhost:3000')
  .then(response => {
    console.log(response)
    return response.json();
  })
  .then((menu) => {
    const menuContainer = document.querySelector('#menu')
    menu.forEach((coffee) => {
      const name = document.createElement('p')
      // name.textContent = coffee.name + ", " + coffee.origin + ", " + coffee.roast
      name.textContent = `${coffee.name}, ${coffee.origin}, ${coffee.roast}`
      menuContainer.appendChild(name)
    })
  })
