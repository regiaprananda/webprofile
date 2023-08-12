// Fungsi untuk mengaktifkan efek smooth scrolling saat mengklik tautan navigasi
document.addEventListener("DOMContentLoaded", function () {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  for (const scrollLink of scrollLinks) {
    scrollLink.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth",
        });
      }
    });
  }
});

// Fungsi untuk membuat efek parallax pada latar belakang Bagian Beranda
window.addEventListener("scroll", function () {
  const topSection = document.querySelector("#top");
  const scrollValue = window.scrollY;
  topSection.style.backgroundPositionY = -scrollValue * 0.5 + "px";
});

// Fungsi untuk menampilkan dan menyembunyikan tombol kembali ke atas halaman
const backButton = document.querySelector("#back-to-top");
window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    backButton.style.opacity = "1";
  } else {
    backButton.style.opacity = "0";
  }
});

// Fungsi untuk kembali ke atas halaman saat tombol diklik
backButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
