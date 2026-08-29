const form = document.querySelector('#interest-form');
const note = document.querySelector('#form-note');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent('Interest in the 2027 Space & NTN Security Workshop');
  const body = encodeURIComponent([
    'Hello,',
    '',
    'I would like to receive updates about the 2027 Space & NTN Security Workshop.',
    '',
    `Name: ${data.get('name')}`,
    `Email: ${data.get('email')}`,
    `Organization: ${data.get('organization')}`,
    `Area of interest: ${data.get('interest')}`,
  ].join('\n'));

  note.textContent = 'Your email draft is ready—send it to join the interest list.';
  note.classList.add('success');
  window.location.href = `mailto:eoughton@gmu.edu?subject=${subject}&body=${body}`;
});
