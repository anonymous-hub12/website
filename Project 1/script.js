document.addEventListener('DOMContentLoaded', () => {
    
    // Ambil semua link di navbar dan semua section
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('section');

    // Opsi untuk IntersectionObserver (seberapa banyak section terlihat baru dianggap aktif)
    const observerOptions = {
        threshold: 0.3 // 30% section terlihat
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 1. Hapus class 'active' dari semua link
                navLinks.forEach(link => link.classList.remove('active'));
                
                // 2. Cari link yang href-nya sesuai dengan ID section yang terlihat
                const activeLink = document.querySelector(`.nav-menu a[href="#${entry.target.id}"]`);
                
                // 3. Tambah class 'active' ke link tersebut
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    // Mulai mengamati setiap section
    sections.forEach(section => {
        observer.observe(section);
    });
});