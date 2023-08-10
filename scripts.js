// Fetch and display cards from JSON file
const cardContainer = document.getElementById("cardContainer");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item, index) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const image = document.createElement("img");
      image.classList.add("card-image");
      image.src = item.image;
      image.alt = item.title;

      const title = document.createElement("h2");
      title.classList.add("card-title");
      title.textContent = item.title;

      const content = document.createElement("p");
      content.classList.add("card-content");
      content.textContent = item.description;

      card.appendChild(image);
      card.appendChild(title);
      card.appendChild(content);

      cardContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
