document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll untuk tautan navigasi
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Scroll halus ke target
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Menyesuaikan posisi scroll agar lebih enak dilihat
                behavior: 'smooth'
            });
        });
    });

    // Animasi scroll: menambahkan kelas ketika elemen berada di viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.5 }); // Menambahkan animasi jika elemen 50% terlihat

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Toggle menu saat hamburger diklik
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});


// Mengambil modal dan tombol open/close
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.querySelector(".close");

// Membuka modal
openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// Menutup modal ketika klik tombol close
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Menutup modal jika pengguna klik di luar modal
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

let i = 0;
let text = "ORIVINE CO.";
let speed = 100;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;

// Mengambil tombol scroll-to-top
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Menampilkan tombol saat pengguna menggulir halaman
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

// Menangani klik pada tombol untuk kembali ke atas
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

