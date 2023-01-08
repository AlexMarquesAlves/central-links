import "./style.scss";

// document.querySelector("#app").innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>

//   <img src="https://avatars.githubusercontent.com/u/85272542?v=4" alt="¡Duque avatar image" />
// `;

document.querySelector("#app").innerHTML = `
  <div class="container">
      <img
        class='avatar'
        src="https://avatars.githubusercontent.com/u/108687308?v=4"
        alt="¡Duque avatar image"
      />

      <h1>¡Duque</h1>
      <p class='username'>@meArchi_Duque</p>

      <ul>
        <li>
          <a href="https://iduque.tech/projetos" target="_blank">📁 Portfolio</a>
        </li>
        <li>
          <a href="https://twitter.com/meArchi_Duque" target="_blank">🐦 Twitter</a>
        </li>
        <li>
          <a href="https://www.instagram.com/_alexmalves/" target="_blank">📷 Instagram</a>
        </li>
        <li>
          <a href="https://www.facebook.com/alvesalexmarques/" target="_blank">💻 Facebook</a>
        </li>
        <li>
          <a href="https://github.com/AlexMarquesAlves" target="_blank">🐱 Github</a>
        </li>
      </ul>

      <footer>
        <a href="#" target="_blank">Feito com ❤️ por ¡Duque</a>
      </footer>
  </div>
`;

const element = document.querySelector("body");
element.classList.add("dark-pink");
element.classList.remove("");
element.classList.replace("dark-blue", "dark-pink");
