import "../style/styles.scss";
import cards from "./cards";

const row = document.querySelector(".row");

cards.forEach((el) => {
  row.innerHTML += `
                    <div class="column">
                        <img src=${el.src} alt="alt">
                        <p>${el.title}</p>
                    </div>
                        `;
});
