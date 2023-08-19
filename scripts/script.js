function addCard(title, description) {
  const cardContainer = document.querySelector('.projects__container');

  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  const cardContentDiv = document.createElement('div');
  cardContentDiv.classList.add('card__content');

  const cardTitle = document.createElement('h3');
  cardTitle.classList.add('card__title');
  cardTitle.textContent = title;

  const cardDescription = document.createElement('p');
  cardDescription.classList.add('card__description');
  cardDescription.textContent = description;

  cardContentDiv.appendChild(cardTitle);
  cardContentDiv.appendChild(cardDescription);

  const cardActionsDiv = document.createElement('div');
  cardActionsDiv.classList.add('card__actions');

  const starButton = document.createElement('button');
  starButton.classList.add('card__star-icon', 'star-icon');
  starButton.setAttribute('type', 'button');

  const watchIcon = document.createElement('button');
  watchIcon.classList.add('card__watch-icon', 'watch-icon');
  starButton.setAttribute('type', 'button');

  const shareIcon = document.createElement('button');
  shareIcon.classList.add('card__share-icon', 'share-icon');
  starButton.setAttribute('type', 'button');

  cardActionsDiv.appendChild(starButton);
  cardActionsDiv.appendChild(watchIcon);
  cardActionsDiv.appendChild(shareIcon);

  cardDiv.appendChild(cardContentDiv);
  cardDiv.appendChild(cardActionsDiv);

  cardContainer.appendChild(cardDiv);
}

function addAnnouncement(title, description) {
}

addCard("Testing", "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla ");
addCard("Very Cool App", "lorem ipsum bla bla bla blalorem ipsum bla bla bla bla lorem ipsum bla bla bla bla lorem ipsum bla bla bla bla lorem ipsum bla bla bla bl");