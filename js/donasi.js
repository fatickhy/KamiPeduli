function tampilkanAngka(angka) {
    document.getElementById('numberExample').value = angka;
}

function simpanDonasi() {
    var nominalDonasi = document.getElementById('numberExample').value;
    localStorage.setItem('nominalDonasi', nominalDonasi);
    alert('Donasi berhasil disimpan!');
}
function tampilkanDonasi() {
    var nominalDonasi = localStorage.getItem('nominalDonasi');
    var kotakElemen = document.querySelector('.kotak');

    if (nominalDonasi) {
        // Jika nilai donasi ada, tampilkan di dalam elemen dengan kelas "kotak"
        kotakElemen.textContent = 'Donasi: Rp. ' + nominalDonasi;
    } else {
        // Jika tidak ada nilai donasi, berikan pesan default
        kotakElemen.textContent = 'Belum ada donasi.';
    }
}

// Panggil fungsi saat halaman dimuat
window.onload = tampilkanDonasi;