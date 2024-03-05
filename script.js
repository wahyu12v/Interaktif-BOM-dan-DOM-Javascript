// memanggil Seluruh Kode 
document

// Memanggil Id Gambar
const gambar = document.getElementById('gambar');
gambar.setAttribute('width','400');
gambar.setAttribute('height','400');

// Memanggil Query Selector secara keseluruhan
const button = document.querySelectorAll('.button') // memangiil Id Button

// memanggil query selector dengan urutan tertentu menggunakan array
const playButton = buttons[3];

// memanggil button kembali ke seperti semula dengan ketentuan awal dari button yang dipilih

const playButtonElement = playButton.children[0];

// mengubah tipe button dengan attribut dengan nama const sebelumnya
playButtonElement.setAttribute('type', 'submit');