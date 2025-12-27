// const pokemonList = document.getElementById("pokemon-list");

// /* ===== Scroll button ===== */
// function scrollToPokemon() {
//   document.querySelector(".content").scrollIntoView({
//     behavior: "smooth"
//   });
// }

// /* ===== Gọi API Pokémon ===== */
// async function fetchPokemon() {
//   try {
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
//     const pokemon = await response.json();

//     renderPokemon(pokemon);
//   } catch (error) {
//     console.error("Lỗi gọi API:", error);
//     pokemonList.innerHTML = "<p>Không tải được Pokémon 😢</p>";
//   }
// }

// /* ===== Render Pokémon ===== */
// function renderPokemon(pokemon) {
//   pokemonList.innerHTML = `
//     <div class="pokemon-card">
//       <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
//       <h3>${pokemon.name}</h3>
//       <p><strong>Type:</strong> ${pokemon.types
//         .map(t => t.type.name)
//         .join(", ")}</p>
//       <p><strong>Height:</strong> ${pokemon.height}</p>
//       <p><strong>Weight:</strong> ${pokemon.weight}</p>
//     </div>
//   `;
// }

// /* ===== Load khi mở trang ===== */
// fetchPokemon();

fetch ("https://pokeapi.co/api/v2/pokemon?limit=20")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=20";
const pokemonListEl = document.getElementById("pokemon-list");

fetch("https://pokeapi.co/api/v2/pokemon?limit=90")
  .then((res) => res.json())
  .then((data) => {
    data.results.forEach(function (item, index) {
      const id = index + 1;
      const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

      const card = document.createElement("article");
      card.className = "pokemon-card";

      card.innerHTML = `
          <div class="pokemon-image-wrapper">
            <img src="${imageUrl}" alt="${item.name}" class="pokemon-image" />
          </div>
          <h2 class="pokemon-name">${item.name}</h2>
        `;

      pokemonListEl.appendChild(card);
    });
  })
  .catch((err) => console.log(err));
