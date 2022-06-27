//HW1: add the "explosion" property to each layer
//   using an if, render the explosion only when the torpedo
// is in the same layer as the ship

// Array of Objects
let layers = [
  {
    ship: false,
    torpedo: false,
    explosion: false
  },
  {
    ship: false,
    torpedo: false,
    explosion: false
  },
  {
    ship: false,
    torpedo: false,
    explosion: false
  },
  {
    ship: true,
    torpedo: true,
    explosion: false
  },
  {
    ship: false,
    torpedo: false,
    explosion: false
  },
  {
    ship: false,
    torpedo: false,
    explosion: false
  },
  {
    ship: false,
    torpedo: false,
    explosion: false
  },
  {
    ship: false,
    torpedo: false,
    explosion: false
  },
  {
    ship: false,
    torpedo: false,
    explosion: false
  },
  {
    ship: false,
    torpedo: false,
    explosion: false
  },
  {
    ship: false,
    torpedo: false,
    explosion: false
  },
]


const render = () => {
let seaDiv = document.querySelector('.sea');

for (let i=0; i<=9; i++) {

  let objects = '';

  if(layers[i].ship) {
    objects += `<div class="ship center">
    <div class="ship-top"></div>
    <div class="ship-levels">
      <div class="level0">
        <div class="level0-top"></div>
        <div class="level0-base"></div>
      </div>
      <div class="level1">
        <div class="level2-before"></div>
        <div class="level1-after"></div>
      </div>
      <div class="level2">
        <div class="level2-before"></div>
        <div class="level2-center"></div>
        <div class="level2-after"></div>
      </div>
    </div>
    
    <div class="ship-base"></div>
    `
  }

  if(layers[i].torpedo) {
    objects += `
    <div class="torpedo">
        <div class="head center"></div>
        <div class="body center"></div>
        <div class="tail-v center"></div>
        <div class="tail-h center"></div>
        <div class="tail center"></div>
    </div>
    `
  }

  if(layers[i].torpedo && layers[i].ship) {
    objects += `
    <div class="explosion">
      <div class="fire-bottom-sm"></div>
    <div class="fire-bottom-md"></div>
  </div>`;
  }

  seaDiv.innerHTML += `
  <div class="layer"> <!-- layer${i} -->
  ${objects}
    <div class="wave"></div>
  </div>
  `;
}

}

render();