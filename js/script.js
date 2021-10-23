const input = document.getElementById('input-value');
const list = document.getElementById('list');
const form = document.getElementById('form');
const notes = [];

form.addEventListener('submit', event => {
  event.preventDefault();
    let newNote = {
    note: input.value,
    checked: false,
    id: Math.random(),
  }
  input.value = '';
  notes.push(newNote);
  addNotes();
})

function addNotes() {
  let message = '';

  notes.forEach((item, index) => {
    message += `
    <li class="list__item">
      <div class="list__item-checkbox"></div>
        ${item.note}
        <button class="list__item-remove">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.77343 7.00003L13.8398 0.933604C14.0534 0.720022 14.0534 0.373741 13.8398 0.160186C13.6262 -0.0533682 13.28 -0.0533955 13.0664 0.160186L6.99999 6.22661L0.933602 0.160186C0.72002 -0.0533955 0.37374 -0.0533955 0.160186 0.160186C-0.053368 0.373768 -0.0533953 0.720049 0.160186 0.933604L6.22657 7L0.160186 13.0664C-0.0533953 13.28 -0.0533953 13.6263 0.160186 13.8398C0.266963 13.9466 0.406935 14 0.546908 14C0.68688 14 0.826825 13.9466 0.933629 13.8398L6.99999 7.77345L13.0664 13.8398C13.1731 13.9466 13.3131 14 13.4531 14C13.5931 14 13.733 13.9466 13.8398 13.8398C14.0534 13.6263 14.0534 13.28 13.8398 13.0664L7.77343 7.00003Z" fill="#4F4F4F"/>
          </svg>              
        </button>
    </li>
    `;
    list.innerHTML = message;
  })
}