//DIGITAL CLOCK
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const ampm = document.querySelector('.ampm');



setInterval(() => {
  const now = new Date();
  const getHours = now.getHours();
  hours.innerText = `${(getHours > 12) ? getHours % 12 : getHours}:`;
  minutes.innerText = `${now.getMinutes()}:`;
  seconds.innerText = `${now.getSeconds()}:`;
  ampm.innerText = `${(getHours > 12) ? 'PM' : 'AM'}`
}, 1000);