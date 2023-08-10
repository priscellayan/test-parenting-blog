// Sample data
const data = [
  {
    title: "Building Strong Parent-Child Relationships",
    description: "Discover effective ways to strengthen the bond with your child through open communication, quality time, and shared activities.",
    image: "relationship.jpg"
  },
  {
    title: "The Power of Play Therapy in Child Development",
    description: "Explore the benefits of play therapy in promoting emotional, cognitive, and social growth in children, and learn how to incorporate playful activities into your parenting routine.",
    image: "play_therapy.jpg"
  }
];

// Function to create a card element
function createCard(cardData) {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("h2");
  title.classList.add("card-title");
  title.textContent = cardData.title;

  const content = document.createElement("p");
  content.classList.add("card-content");
  content.textContent = cardData.description;

  card.appendChild(title);
  card.appendChild(content);

  return card;
}

// Load cards from data
const cardContainer = document.getElementById("cardContainer");

data.forEach((item) => {
  const card = createCard(item);
  cardContainer.appendChild(card);
});
