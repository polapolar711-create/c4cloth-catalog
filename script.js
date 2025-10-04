const sheetID = "1abcDEFghi1234567890xyz"; // Ganti dengan ID Google Sheet kamu
const sheetName = "Sheet1";
const url = `https://opensheet.elk.sh/${sheetID}/${sheetName}`;

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const productContainer = document.getElementById("product-list");
    data.forEach((item) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p class="price">${item.price}</p>
        <p>${item.description}</p>
      `;
      productContainer.appendChild(card);
    });
  })
  .catch((err) => console.error("Error loading data:", err));
