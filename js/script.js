const input = document.getElementById('input-value');
const list = document.getElementById('list');
const form = document.getElementById('form');
let notes = [];

appInit();

form.addEventListener('submit', event => {

  event.preventDefault();

    const newNote = {
    note: input.value,
    checked: false,
    id: Math.random(),
  }

  input.value = '';
  notes.push(newNote);
  drawNotes();
})

function drawNotes() {

  let message = '';

  notes.forEach((item) => {

    message += `
    <li class="list__item ${item.checked ? 'list__item--checked' : ''}" onclick='toggleIsChecked(${item.id})'>
          <div class="list__item-checkbox">
            <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.71866 5.71866L1.75 4.75C1.61193 4.61193 1.38807 4.61193 1.25 4.75C1.11193 4.88807 1.11193 5.11193 1.25 5.25L2.72569 6.72569C3.1415 7.1415 3.82457 7.11051 4.20102 6.65877L8.29517 1.7458C8.41118 1.60659 8.40189 1.40189 8.27376 1.27376C8.12718 1.12718 7.8861 1.13921 7.75484 1.29964L4.19972 5.64479C3.82508 6.10268 3.137 6.137 2.71866 5.71866Z" stroke="white"/>
            </svg>
          </div>
          <div class="list__item-text">
          ${item.note}
          </div>
          <button class="list__item-remove">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.77343 7.00003L13.8398 0.933604C14.0534 0.720022 14.0534 0.373741 13.8398 0.160186C13.6262 -0.0533682 13.28 -0.0533955 13.0664 0.160186L6.99999 6.22661L0.933602 0.160186C0.72002 -0.0533955 0.37374 -0.0533955 0.160186 0.160186C-0.053368 0.373768 -0.0533953 0.720049 0.160186 0.933604L6.22657 7L0.160186 13.0664C-0.0533953 13.28 -0.0533953 13.6263 0.160186 13.8398C0.266963 13.9466 0.406935 14 0.546908 14C0.68688 14 0.826825 13.9466 0.933629 13.8398L6.99999 7.77345L13.0664 13.8398C13.1731 13.9466 13.3131 14 13.4531 14C13.5931 14 13.733 13.9466 13.8398 13.8398C14.0534 13.6263 14.0534 13.28 13.8398 13.0664L7.77343 7.00003Z" fill="#4F4F4F"/>
            </svg>              
          </button>
        </li>
    `;

    list.innerHTML = message;
    localStorage.setItem('todo-list', JSON.stringify(notes));
  })
}

function appInit() {

  if (localStorage.getItem('todo-list')) {
    notes = JSON.parse(localStorage.getItem('todo-list'));

    drawNotes();
  }
}

function toggleIsChecked(id) {

  notes = notes.map(item => {

    if (item.id === id) {
      return {note: item.note, checked: !item.checked, id: item.id,};
    } else {
      return item;
    }
  })
  
  drawNotes();
}