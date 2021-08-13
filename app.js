var total = 0; // Deklarasi variable untuk hasil perjumlahan

// Deklarasi  nama item  dan harga item
const items = [
  {
    nama: "Cappucino",
    harga: 35000,
  },
  {
    nama: "Green Tea Latte",
    harga: 40000,
  },
  {
    nama: "Fish and Chips",
    harga: 50000,
  },
  {
    nama: "Tuna Sandwich",
    harga: 45000,
  },
  {
    nama: "Mineral Water",
    harga: 8000,
  },
  {
    nama: "Franch Fries",
    harga: 18000,
  },
];

/**
 * Generate Tag List <li>
 *
 * Membuat list yang berisikan nama item dan harga item.
 * Setiap list memiliki ID yang unique. Contoh: item-1, item-2 dst.
 */
let listItems = '<ul id="list-menu">';

items.forEach(function (item) {
  listItems += `<li id="${item.harga}">${item.nama}<span> Rp ${item.harga}</span></li>`;
});

listItems += "</ul>";

// Menambahkan <div> yang didalamnya terdapat total harga
listItems += `<div id="total-harga">Total <span id="total">Rp 0</span></div>`;

document.getElementById("main-form").innerHTML += listItems;

//deklarasi variable hasil yang mengambil dari id total untuk nantinya menambahkan value total
var hasil = document.getElementById("total");

/**
 * Menambahkan Event Listener "click" pada <ul> yang memiliki beberapa <li>
 *
 * Seleksi tag <ul> menggunakan querySelector()
 * Membuat event listener "click" pada tag <ul>
 * Lalu memeriksa setiap <li> yang dipilih atau di "click"
 */

document.querySelector("ul").addEventListener("click", function (event) {
  // Memeriksa list yang ada di dalam tag <ul>
  /* Memeriksa list apakah sudah "selected" atau belum? */
  if (event.target.matches("li.selected")) {
    // Jika list tidak jadi dipilih maka hapus class "selected"
    document.getElementById(event.target.id).classList.remove("selected");
    total -= parseInt(event.target.id); // mengurangi hasil penjumlahan
  } else {
    // Jika list dipilih maka tambahkan class "selected"
    document.getElementById(event.target.id).classList.add("selected");
    total += parseInt(event.target.id); // menambahkan hasil penjumlahan
  }

  // menambahkan value total ke tag total
  hasil.innerHTML = `Rp  ${total}`;
});
// let Total = `<div id="total-harga">Total<span> Rp ${total}</span></div>`;
