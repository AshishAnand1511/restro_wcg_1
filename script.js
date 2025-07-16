// Foodie Hub - Main JavaScript File

// DOM Elements Cache
const DOM = {
  hamburger: document.querySelector('.hamburger'),
  navLinks: document.querySelector('.nav-links'),
  modal: document.getElementById('sectorModal'),
  modalImage: document.getElementById('modalImage'),
  modalTitle: document.getElementById('modalTitle'),
  modalDescription: document.getElementById('modalDescription'),
  closeModal: document.getElementById('closeModal'),
  navbar: document.querySelector('.navbar'),
  sectorContainers: {
    dining: document.getElementById('dining-experiences'),
    quick: document.getElementById('quick-service'),
    delivery: document.getElementById('delivery-logistics'),
    specialty: document.getElementById('specialty-services')
  }
};

// Enhanced Sector Data with Categories
const sectors = [
  // Dining Experiences
  {
    id: "fine-dining",
    name: "Fine Dining",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Experience culinary artistry at its finest with meticulously crafted dishes, impeccable service, and elegant atmospheres that transform dining into a memorable event.",
    category: "dining"
  },
  {
    id: "reservation",
    name: "Reservation Systems",
    image: "https://media.istockphoto.com/id/1304042539/photo/reserved-table-sign-in-a-restaurant-on-summer-terrace.jpg?s=612x612&w=0&k=20&c=IF5jJUv_amDm6KI4BzK-DSdgdcIDr4WGbariY-4tu6s=",
    description: "Digital platforms that streamline the booking process, helping diners secure tables at their favorite restaurants while optimizing seating for establishments.",
    category: "dining"
  },

  // Quick Service
  {
    id: "fast-food",
    name: "Fast Food Chains",
    image: "https://t4.ftcdn.net/jpg/09/10/79/31/240_F_910793169_Sm4ddSHFi99rmle3e67wOfoQYEAEKQKr.jpg",
    description: "Quick-service restaurants offering affordable, convenient meals with consistent quality across global locations, perfect for on-the-go dining.",
    category: "quick"
  },
  {
    id: "cafes",
    name: "Cafés & Coffee Shops",
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Social hubs where people gather over expertly brewed coffee, artisanal pastries, and light meals in cozy, inviting environments designed for relaxation.",
    category: "quick"
  },
  {
    id: "street-food",
    name: "Street Food & Eateries",
    image: "https://media.istockphoto.com/id/1277971921/photo/a-thai-food-vendor.jpg?s=2048x2048&w=is&k=20&c=YyBJG6M0YsJdUi2VZiU2kXxKbqWFdU-B7VK6-dGatjs=",
    description: "Authentic, affordable, and flavorful culinary experiences that showcase regional traditions and local flavors in vibrant, casual settings.",
    category: "quick"
  },

  // Delivery & Logistics
  {
    id: "delivery",
    name: "Food Delivery Services",
    image: "https://media.istockphoto.com/id/1466723002/photo/happy-smiling-asian-woman-receives-paper-bag-parcel-of-food-from-courier-front-house-delivery.jpg?s=612x612&w=0&k=20&c=qNVTUxixG48OhrqHRaC3mYQC4fBTnJoPf7DMlxdXzKg=",
    description: "Restaurant-quality meals delivered to your doorstep through innovative apps and logistics networks, offering convenience without compromising on taste.",
    category: "delivery"
  },
  {
    id: "cloud-kitchens",
    name: "Cloud Kitchens",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Delivery-only culinary operations that maximize efficiency by focusing solely on food preparation, eliminating traditional dine-in overhead costs.",
    category: "delivery"
  },

  // Specialty Services
  {
    id: "catering",
    name: "Catering Services",
    image: "https://media.istockphoto.com/id/472482712/photo/catering-food.jpg?s=612x612&w=0&k=20&c=jZGBy7Ck4lDWRHSrUQffP9oOPB3lfph-UPikmlmzUXQ=",
    description: "Professional food service for events of all sizes, from intimate gatherings to large-scale corporate functions, weddings, and special occasions.",
    category: "specialty"
  },
  {
    id: "bakery",
    name: "Bakery & Confectionery",
    image: "https://media.istockphoto.com/id/1422237324/photo/pastry-shop-glass-display-with-selection-of-cream-or-fruit-cake-bakery-shop-with-various.jpg?s=612x612&w=0&k=20&c=PxbYeRzNaeDfTlbhwz6yYDFXltaWav1SlJzuYHwauuc=",
    description: "Artisanal breads, delicate pastries, decadent cakes, and handcrafted sweets created with precision and passion by skilled bakers and chocolatiers.",
    category: "specialty"
  },
  {
    id: "nutrition",
    name: "Nutrition-focused",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Establishments that prioritize health-conscious menus featuring balanced, nutrient-rich meals tailored to various dietary needs and wellness goals.",
    category: "specialty"
  }
];

// Initialize the Application
function init() {
  setupMobileMenu();
  renderSectors();
  setupModal();
  setupSmoothScrolling();
  setupNavbarScrollEffect();
}

// Mobile Menu Toggle
function setupMobileMenu() {
  DOM.hamburger.addEventListener('click', () => {
    DOM.navLinks.classList.toggle('active');
    DOM.hamburger.innerHTML = DOM.navLinks.classList.contains('active') ? 
      '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      DOM.navLinks.classList.remove('active');
      DOM.hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });
}

// Render Sector Cards by Category
function renderSectors() {
  // Clear all containers first
  Object.values(DOM.sectorContainers).forEach(container => {
    container.innerHTML = '';
  });

  // Populate each category
  sectors.forEach(sector => {
    const card = document.createElement('div');
    card.className = 'sector-card';
    card.innerHTML = `
      <img src="${sector.image}" alt="${sector.name}" class="sector-img">
      <div class="sector-name">${sector.name}</div>
    `;
    card.addEventListener('click', () => openModal(sector));
    
    // Add to appropriate container
    DOM.sectorContainers[sector.category].appendChild(card);
  });
}

// Modal Functions
function setupModal() {
  DOM.closeModal.addEventListener('click', closeModal);

  // Close modal when clicking outside content
  DOM.modal.addEventListener('click', (e) => {
    if (e.target === DOM.modal) {
      closeModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && DOM.modal.classList.contains('active')) {
      closeModal();
    }
  });
}

function openModal(sector) {
  DOM.modalImage.src = sector.image;
  DOM.modalImage.alt = sector.name;
  DOM.modalTitle.textContent = sector.name;
  DOM.modalDescription.textContent = sector.description;
  DOM.modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  DOM.modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Smooth Scrolling for Anchor Links
function setupSmoothScrolling() {
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
}

// Navbar Scroll Effect
function setupNavbarScrollEffect() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      DOM.navbar.style.background = 'rgba(255, 255, 255, 0.95)';
      DOM.navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
      DOM.navbar.style.background = 'var(--white)';
      DOM.navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    }
  });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);