
function getElement() {
  const hour = document.querySelector("#hour");
  const minute = document.querySelector("#minutes");
  let second = document.querySelector("#seconds");
  let amOrPm = document.querySelector("#amOrPm");
  let count = 0;

  setInterval(() => {
    let time = new Date();
    getSeconds(time);
    getMinutes(time);
    getHour(time);
  }, 1000)

  function getSeconds(time) {
    let seconds = time.getSeconds().toString().padStart('2', 0);
    second.textContent = seconds;
  }
  function getMinutes(time) {
    let min = time.getMinutes().toString().padStart('2', 0);
    minute.textContent = min;
  }
  function getHour(time) {
    let h = time.getHours();
    const amPm = h >= 12 ? "PM" : "AM";
    const displayHours = h % 12 || 12;
    hour.textContent = displayHours;

    amOrPm.textContent = amPm;
  }
}
window.addEventListener("load", getElement);

