document.addEventListener("DOMContentLoaded", () => {
    // ============================
    // Default Config & Element SDK
    // ============================
    const defaultConfig = {
        school_name: "SD Nusantara Islamic School",
        tagline: "Membangun Generasi Berakhlak Mulia, Cerdas, dan Berwawasan Global",
        hero_title: "Selamat Datang di SD Nusantara Islamic School",
        hero_subtitle: "Membangun Generasi Berakhlak Mulia, Cerdas, dan Berwawasan Global dengan Pendidikan Islam yang Berkualitas",
        cta_button: "Daftar Sekarang",
        school_address: "Jl. Burangkeng Raya, Rt 01/02, Kecamatan Setu, Kabupaten Bekasi, Jawa Barat",
        school_phone: "(021) 1234-5678",
        school_email: "info@sdnusantara.sch.id",
        background_color: "#F3EEDC",
        primary_color: "#8B4513",
        accent_color: "#F3EEDC",
        text_color: "#2c3e50",
        surface_color: "#ffffff",
        font_family: "Poppins",
        font_size: 16
    };

    async function onConfigChange(config) {
        const elements = {
            'school-name': config.school_name || defaultConfig.school_name,
            'tagline': config.tagline || defaultConfig.tagline,
            'hero-title': config.hero_title || defaultConfig.hero_title,
            'hero-subtitle': config.hero_subtitle || defaultConfig.hero_subtitle,
            'cta-button': config.cta_button || defaultConfig.cta_button,
            'school-address': config.school_address || defaultConfig.school_address,
            'school-phone': config.school_phone || defaultConfig.school_phone,
            'school-email': config.school_email || defaultConfig.school_email
        };

        for (const id in elements) {
            const el = document.getElementById(id);
            if (el) el.textContent = elements[id];
        }

        // Update colors
        const colors = {
            '--bg-color': config.background_color || defaultConfig.background_color,
            '--primary-color': config.primary_color || defaultConfig.primary_color,
            '--accent-color': config.accent_color || defaultConfig.accent_color,
            '--text-color': config.text_color || defaultConfig.text_color,
            '--surface-color': config.surface_color || defaultConfig.surface_color
        };
        for (const varName in colors) {
            document.documentElement.style.setProperty(varName, colors[varName]);
        }

        // Update font
        document.body.style.fontFamily = `${config.font_family || defaultConfig.font_family}, Arial, sans-serif`;
        document.documentElement.style.fontSize = `${config.font_size || defaultConfig.font_size}px`;
    }

    if (window.elementSdk) {
        window.elementSdk.init({ defaultConfig, onConfigChange });
    }

    // ============================
    // Navbar Mobile Toggle
    // ============================
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

        if (menuToggle && navMenu) {
            menuToggle.addEventListener("click", () => {
                navMenu.classList.toggle("show");
            });

            navMenu.querySelectorAll("a").forEach(link => {
                link.addEventListener("click", () => {
                    navMenu.classList.remove("show");
                });
        });
    }
});

    // ============================
    // Smooth Scroll
    // ============================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - (document.querySelector('.header')?.offsetHeight || 0),
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================
    // Header Scroll Effect
    // ============================
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (!header) return;
        if (window.scrollY > 100) {
            header.style.background = 'rgba(139, 69, 19, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, #8B4513 0%, #A0522D 100%)';
            header.style.backdropFilter = 'none';
        }
    });

    // ============================
    // Contact Form Submit
    // ============================
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Pesan Terkirim!';
            submitBtn.style.background = '#28a745';
            contactForm.reset();
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
            }, 3000);
        });
    }

    // ============================
    // WhatsApp Floating Button
    // ============================
    const whatsappBtn = document.querySelector('.whatsapp-float');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', () => {
            const phoneNumber = '6281234567890'; // Ganti sesuai nomor WA
            window.open(`https://wa.me/${phoneNumber}`, '_blank');
        });
    }