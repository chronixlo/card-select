(function () {
  var app = document.querySelector('.app');
  var card1 = document.querySelector('#card-1');
  var card1Face = card1.querySelector('.card-face');
  var card2 = document.querySelector('#card-2');
  var card2Face = card2.querySelector('.card-face');
  var card3 = document.querySelector('#card-3');
  var card3Face = card3.querySelector('.card-face');

  var emojiRangeStart = parseInt('1F600', 16);
  var emojiRangeEnd = parseInt('1F64F', 16);

  var faces = [card1Face, card2Face, card3Face];

  var animating = false;

  card1.addEventListener('click', onCardSelected);
  card2.addEventListener('click', onCardSelected);
  card3.addEventListener('click', onCardSelected);

  function onCardSelected () {
    if (animating) {
      return;
    }

    clearFaces();

    faces[Math.floor(Math.random() * faces.length)].innerHTML = getEmoji();

    animating = true;

    clearSelection();

    var self = this;

    self.classList.add('card-selected');

    setTimeout(function () {
      self.classList.add('card-flipped');

      setTimeout(function () {
        flipAll();

        setTimeout(function () {
          clearSelection();

          animating = false;
        }, 500);
      }, 400);
    }, 400);
  }

  function clearFaces() {
    faces.forEach(function (face) {
      face.innerHTML = '';
    });
  }

  function clearSelection() {
    card1.classList.remove('card-selected', 'card-flipped');
    card2.classList.remove('card-selected', 'card-flipped');
    card3.classList.remove('card-selected', 'card-flipped');
  }

  function flipAll() {
    card1.classList.add('card-flipped');
    card2.classList.add('card-flipped');
    card3.classList.add('card-flipped');
  }

  function getEmoji() {
    var i = Math.floor(Math.random() * (emojiRangeEnd - emojiRangeStart)) + emojiRangeStart;

    return String.fromCodePoint(i);
  }
})();
