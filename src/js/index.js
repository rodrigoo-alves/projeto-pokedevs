const pokedevsSelectionList = document.querySelectorAll('.pokedev');

pokedevsSelectionList.forEach((pokedev) => {
  pokedev.addEventListener('click', () => {
    hidePokedevCard();

    const pokedevIdSelected = showPokedevCard(pokedev);

    removeActiveClass();

    markSelectedPokedevAsActive(pokedevIdSelected);
  })
});

function hidePokedevCard() {
  const pokedevOpenedCard = document.querySelector('.open');
  pokedevOpenedCard.classList.remove('open');
}

function showPokedevCard(pokedev) {
  const pokedevIdSelected = pokedev.attributes.id.value;
  const pokedevIdCardToOpen = pokedevIdSelected + '-card';
  const pokedevCardToOpen = document.getElementById(pokedevIdCardToOpen);
  pokedevCardToOpen.classList.add('open');

  return pokedevIdSelected;
}

function removeActiveClass() {
  const pokedevListActive = document.querySelector('.active');
  pokedevListActive.classList.remove('active');
}

function markSelectedPokedevAsActive(pokedevIdSelected) {
  const pokedevSelectedOnTheList = document.getElementById(pokedevIdSelected);
  pokedevSelectedOnTheList.classList.add('active');
}
