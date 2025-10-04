
const products = [
  {id:1,title:'Jaket Vintage Denim',price:120000,img:'images/product-1.jpg',desc:'Jaket denim original, gaya 90s, kondisi 90%.'},
  {id:2,title:'Kemeja Flanel Oversized',price:85000,img:'images/product-2.jpg',desc:'Flanel lembut, cocok untuk layering.'},
  {id:3,title:'Kaos Band Unik',price:95000,img:'images/product-3.jpg',desc:'Kaos band import, graphic keren.'},
  {id:4,title:'Celana Cargo Streetwear',price:140000,img:'images/product-4.jpg',desc:'Cargo functional, banyak kantong.'},
  {id:5,title:'Hoodie Thrift Branded',price:160000,img:'images/product-5.jpg',desc:'Hoodie berkualitas, nyaman dan hangat.'}
];

function formatIDR(n){ return 'Rp'+n.toLocaleString('id-ID'); }

function renderProducts(){
  const grid = document.getElementById('productGrid');
  grid.innerHTML='';
  products.forEach(p=>{
    const card = document.createElement('div'); card.className='card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}" />
      <div class="card-content">
        <h4>${p.title}</h4>
        <div class="price">${formatIDR(p.price)}</div>
        <p>${p.desc}</p>
        <div class="actions">
          <a class="btn secondary" href="https://wa.me/6287794052041?text=Halo%20C4Cloth,%20saya%20mau%20tanya%20produk%20${encodeURIComponent(p.title)}" target="_blank">Tanya</a>
          <a class="btn primary" href="https://wa.me/6287794052041?text=Halo%20C4Cloth,%20saya%20mau%20pesan%20${encodeURIComponent(p.title)}" target="_blank">Pesan</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  renderProducts();
});
