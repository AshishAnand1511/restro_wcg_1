// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const sectorsGrid = document.getElementById('sectorsGrid');
const modal = document.getElementById('sectorModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.getElementById('closeModal');

// Sector Data
const sectors = [
    {
        id: "fine-dining",
        name: "Fine Dining",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Experience culinary artistry at its finest with meticulously crafted dishes, impeccable service, and elegant atmospheres that transform dining into a memorable event."
    },
    {
        id: "fast-food",
        name: "Fast Food Chains",
        image: "https://t4.ftcdn.net/jpg/09/10/79/31/240_F_910793169_Sm4ddSHFi99rmle3e67wOfoQYEAEKQKr.jpg",
        description: "Quick-service restaurants offering affordable, convenient meals with consistent quality across global locations, perfect for on-the-go dining."
    },
    {
        id: "cafes",
        name: "Cafés & Coffee Shops",
        image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Social hubs where people gather over expertly brewed coffee, artisanal pastries, and light meals in cozy, inviting environments designed for relaxation."
    },
    {
        id: "delivery",
        name: "Food Delivery Services",
        image: "https://media.istockphoto.com/id/1466723002/photo/happy-smiling-asian-woman-receives-paper-bag-parcel-of-food-from-courier-front-house-delivery.jpg?s=612x612&w=0&k=20&c=qNVTUxixG48OhrqHRaC3mYQC4fBTnJoPf7DMlxdXzKg=",
        description: "Restaurant-quality meals delivered to your doorstep through innovative apps and logistics networks, offering convenience without compromising on taste."
    },
    {
        id: "cloud-kitchens",
        name: "Cloud Kitchens",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Delivery-only culinary operations that maximize efficiency by focusing solely on food preparation, eliminating traditional dine-in overhead costs."
    },
    {
        id: "street-food",
        name: "Street Food & Local Eateries",
        image: "https://media.istockphoto.com/id/1277971921/photo/a-thai-food-vendor.jpg?s=2048x2048&w=is&k=20&c=YyBJG6M0YsJdUi2VZiU2kXxKbqWFdU-B7VK6-dGatjs=",
        description: "Authentic, affordable, and flavorful culinary experiences that showcase regional traditions and local flavors in vibrant, casual settings."
    },
    {
        id: "catering",
        name: "Catering Services",
        image: "https://media.istockphoto.com/id/472482712/photo/catering-food.jpg?s=612x612&w=0&k=20&c=jZGBy7Ck4lDWRHSrUQffP9oOPB3lfph-UPikmlmzUXQ=",
        description: "Professional food service for events of all sizes, from intimate gatherings to large-scale corporate functions, weddings, and special occasions."
    },
    {
        id: "bakery",
        name: "Bakery & Confectionery",
        image: "https://media.istockphoto.com/id/1422237324/photo/pastry-shop-glass-display-with-selection-of-cream-or-fruit-cake-bakery-shop-with-various.jpg?s=612x612&w=0&k=20&c=PxbYeRzNaeDfTlbhwz6yYDFXltaWav1SlJzuYHwauuc=",
        description: "Artisanal breads, delicate pastries, decadent cakes, and handcrafted sweets created with precision and passion by skilled bakers and chocolatiers."
    },
    {
        id: "reservation",
        name: "Restaurant Reservation Systems",
        image: "https://media.istockphoto.com/id/1304042539/photo/reserved-table-sign-in-a-restaurant-on-summer-terrace.jpg?s=612x612&w=0&k=20&c=IF5jJUv_amDm6KI4BzK-DSdgdcIDr4WGbariY-4tu6s=",
        description: "Digital platforms that streamline the booking process, helping diners secure tables at their favorite restaurants while optimizing seating for establishments."
    },
    {
        id: "nutrition",
        name: "Nutrition-focused Restaurants",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Establishments that prioritize health-conscious menus featuring balanced, nutrient-rich meals tailored to various dietary needs and wellness goals."
    }
];

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Render Sector Cards
function renderSectors() {
    sectorsGrid.innerHTML = '';
    sectors.forEach(sector => {
        const card = document.createElement('div');
        card.className = 'sector-card';
        card.innerHTML = `
            <img src="${sector.image}" alt="${sector.name}" class="sector-img">
            <div class="sector-name">${sector.name}</div>
        `;
        card.addEventListener('click', () => openModal(sector));
        sectorsGrid.appendChild(card);
    });
}

// Open Modal with Sector Details
function openModal(sector) {
    modalImage.src = sector.image;
    modalImage.alt = sector.name;
    modalTitle.textContent = sector.name;
    modalDescription.textContent = sector.description;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModalFunc() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event Listeners
closeModal.addEventListener('click', closeModalFunc);

// Close modal when clicking outside content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalFunc();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModalFunc();
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize
renderSectors();

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').style.background = 'rgba(255, 255, 255, 0.95)';
        document.querySelector('.navbar').style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        document.querySelector('.navbar').style.background = 'var(--white)';
        document.querySelector('.navbar').style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    }
});