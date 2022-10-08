import './scss/main.scss';
import leafHeartLogo from '/leaf-heart.svg';
import houseHeart from './img/house-heart.svg';
import userHairLong from './img/user-vneck-hair-long.svg';
import comments from './img/comments.svg';
import simCard from './img/sim-cards.svg';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<header>
  <p class="logo">
    <img src="${leafHeartLogo}" alt="Leaf Heart" />
  </p>
  <div class="menu-btn">
    <span class="menu-btn_burger"></span>
  </div>
  <nav class="nav">
    <ul class="menu-nav">
      <li class="menu-nav_item active">
        <a href="index.html" class="menu-nav_link">
          <img
            class="heart"
            src="${houseHeart}"
            alt="House Heart"
          />
        </a>
      </li>
      <li class="menu-nav_item">
        <a href="about.html" class="menu-nav_link">
          <img src="${userHairLong}" alt="User Hair Long" />
        </a>
      </li>
      <li class="menu-nav_item">
        <a href="projects.html" class="menu-nav_link">
          <img src="${comments}" alt="Comments" />
        </a>
      </li>
      <li class="menu-nav_item">
        <a href="contact.html" class="menu-nav_link">
          <img src="${simCard}" alt="Sim card" />
        </a>
      </li>
    </ul>
  </nav>
</header>
`;
