/* Tailwind Config for Lisset Transport Inc */
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "on-primary": "#ffffff",
                "surface-container-high": "#e6e8ea",
                "surface": "#f7f9fb",
                "background": "#f7f9fb",
                "on-primary-fixed": "#001b3d",
                "on-secondary": "#ffffff",
                "on-tertiary-container": "#8d939b",
                "tertiary": "#11181d",
                "surface-container-low": "#f2f4f6",
                "on-secondary-fixed-variant": "#38485d",
                "on-tertiary-fixed": "#161c22",
                "inverse-on-surface": "#eff1f3",
                "on-secondary-container": "#54647a",
                "on-surface-variant": "#43474f",
                "on-primary-container": "#7594ca",
                "on-tertiary-fixed-variant": "#41474e",
                "secondary-fixed": "#d3e4fe",
                "surface-container-highest": "#e0e3e5",
                "primary-fixed": "#d6e3ff",
                "surface-container": "#eceef0",
                "surface-variant": "#e0e3e5",
                "inverse-surface": "#2d3133",
                "on-error": "#ffffff",
                "error": "#ba1a1a",
                "tertiary-fixed": "#dde3eb",
                "outline": "#747780",
                "surface-dim": "#d8dadc",
                "inverse-primary": "#a9c7ff",
                "surface-tint": "#405f91",
                "primary": "#001736",
                "error-container": "#ffdad6",
                "surface-container-lowest": "#ffffff",
                "secondary-fixed-dim": "#b7c8e1",
                "surface-bright": "#f7f9fb",
                "tertiary-container": "#262c32",
                "on-primary-fixed-variant": "#264778",
                "primary-container": "#002b5b",
                "primary-fixed-dim": "#a9c7ff",
                "on-surface": "#191c1e",
                "on-secondary-fixed": "#0b1c30",
                "secondary": "#505f76",
                "secondary-container": "#d0e1fb",
                "outline-variant": "#c4c6d0",
                "on-error-container": "#93000a",
                "on-tertiary": "#ffffff",
                "on-background": "#191c1e",
                "tertiary-fixed-dim": "#c1c7cf"
            },
            "borderRadius": {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            },
            "spacing": {
                "md": "24px",
                "base": "8px",
                "sm": "12px",
                "gutter": "24px",
                "margin-mobile": "16px",
                "container-max": "1440px",
                "lg": "48px",
                "xl": "80px",
                "xs": "4px"
            },
            "fontFamily": {
                "body-md": ["Plus Jakarta Sans", "sans-serif"],
                "label-md": ["Plus Jakarta Sans", "sans-serif"],
                "body-lg": ["Plus Jakarta Sans", "sans-serif"],
                "display-lg": ["Plus Jakarta Sans", "sans-serif"],
                "headline-md": ["Plus Jakarta Sans", "sans-serif"],
                "label-sm": ["Plus Jakarta Sans", "sans-serif"],
                "headline-lg-mobile": ["Plus Jakarta Sans", "sans-serif"],
                "headline-lg": ["Plus Jakarta Sans", "sans-serif"]
            },
            "fontSize": {
                "body-md": ["16px", { "lineHeight": "1.5", "fontWeight": "400" }],
                "label-md": ["14px", { "lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600" }],
                "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
                "display-lg": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                "headline-md": ["24px", { "lineHeight": "1.3", "fontWeight": "600" }],
                "label-sm": ["12px", { "lineHeight": "1", "fontWeight": "500" }],
                "headline-lg-mobile": ["24px", { "lineHeight": "1.2", "fontWeight": "700" }],
                "headline-lg": ["32px", { "lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "700" }]
            }
        },
    },
};

// Toggle Mobile Menu
window.toggleMobileMenu = function () {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('hamburger-icon');
    if (menu.classList.contains('translate-x-full')) {
        menu.classList.remove('hidden');
        menu.offsetHeight; // Force reflow
        menu.classList.remove('translate-x-full');
        menu.classList.add('translate-x-0');
        icon.textContent = 'close';
    } else {
        menu.classList.remove('translate-x-0');
        menu.classList.add('translate-x-full');
        icon.textContent = 'menu';
        setTimeout(() => {
            if (menu.classList.contains('translate-x-full')) {
                menu.classList.add('hidden');
            }
        }, 300);
    }
};

// Toggle Widget Tabs
window.toggleWidgetTab = function (tab) {
    const btnTrack = document.getElementById('btn-tab-track');
    const btnCalc = document.getElementById('btn-tab-calc');
    const paneTrack = document.getElementById('pane-track');
    const paneCalc = document.getElementById('pane-calc');

    if (tab === 'track') {
        btnTrack.classList.add('bg-primary', 'text-white', 'shadow-sm');
        btnTrack.classList.remove('bg-surface', 'text-secondary');
        btnCalc.classList.add('bg-surface', 'text-secondary');
        btnCalc.classList.remove('bg-primary', 'text-white', 'shadow-sm');

        paneTrack.classList.remove('hidden');
        paneCalc.classList.add('hidden');
    } else {
        btnCalc.classList.add('bg-primary', 'text-white', 'shadow-sm');
        btnCalc.classList.remove('bg-surface', 'text-secondary');
        btnTrack.classList.add('bg-surface', 'text-secondary');
        btnTrack.classList.remove('bg-primary', 'text-white', 'shadow-sm');

        paneCalc.classList.remove('hidden');
        paneTrack.classList.add('hidden');
    }
};

// Simulate Shipment Tracking
window.trackShipment = function (event) {
    if (event) event.preventDefault();
    const trackingId = document.getElementById('tracking-id-input').value.trim().toUpperCase();
    const trackingResult = document.getElementById('tracking-result');
    const trackingPlaceholder = document.getElementById('tracking-placeholder');
    const trackingTimeline = document.getElementById('tracking-timeline');

    if (!trackingId) {
        alert('Please enter a tracking number.');
        return;
    }

    trackingResult.classList.remove('hidden');
    if (trackingPlaceholder) trackingPlaceholder.classList.add('hidden');

    let status = 'In Transit';
    let currentStep = 2; // 0: Booked, 1: Dispatched, 2: Transit, 3: Delivered
    let details = `Shipment ${trackingId} is currently in route.`;
    let origin = 'Kochi Hub';
    let dest = 'Bangalore Depot';
    let eta = 'May 24, 2026';

    if (trackingId.includes('DELIVERED') || trackingId === 'Lisset-1001') {
        status = 'Delivered';
        currentStep = 3;
        details = 'Your shipment has been successfully delivered and signed for.';
        origin = 'Chennai Port';
        dest = 'Mumbai Logistics Park';
        eta = 'Delivered (May 21, 2026)';
    } else if (trackingId.includes('BOOKED') || trackingId === 'Lisset-1003') {
        status = 'Booking Confirmed';
        currentStep = 0;
        details = 'Shipment booked. Awaiting pickup from origin location.';
        origin = 'Bangalore Warehouse';
        dest = 'Hyderabad Delivery Center';
        eta = 'May 26, 2026';
    } else if (trackingId.includes('DISPATCHED') || trackingId === 'Lisset-1002') {
        status = 'Dispatched';
        currentStep = 1;
        details = 'Cargo loaded and departed from source logistics hub.';
        origin = 'Kochi Container Terminal';
        dest = 'Coimbatore Hub';
        eta = 'May 23, 2026';
    }

    // Render timeline HTML
    const steps = [
        { label: 'Booking Confirmed', icon: 'bookmark_check', time: 'May 20, 10:00 AM' },
        { label: 'Dispatched from Hub', icon: 'local_shipping', time: 'May 21, 04:30 PM' },
        { label: 'In Transit', icon: 'route', time: 'In Progress' },
        { label: 'Delivered', icon: 'task_alt', time: 'Awaiting Arrival' }
    ];

    let html = `
        <div class="p-4 bg-surface rounded-xl border border-surface-container-high mb-6">
            <div class="flex justify-between items-center flex-wrap gap-2">
                <div>
                    <span class="text-xs uppercase font-bold text-secondary">Status</span>
                    <h5 class="text-lg font-bold text-primary">${status}</h5>
                </div>
                <div class="text-right">
                    <span class="text-xs uppercase font-bold text-secondary">Estimated Arrival</span>
                    <p class="text-sm font-semibold text-primary">${eta}</p>
                </div>
            </div>
            <p class="text-xs text-secondary mt-2 border-t border-surface-container-high/60 pt-2">${details}</p>
            <div class="mt-2 text-xs flex justify-between text-secondary">
                <span><strong>Origin:</strong> ${origin}</span>
                <span><strong>Destination:</strong> ${dest}</span>
            </div>
        </div>
        <div class="relative pl-6 border-l-2 border-surface-container-high ml-4 space-y-6">
    `;

    steps.forEach((step, idx) => {
        const isDone = idx <= currentStep;
        const isCurrent = idx === currentStep;
        const dotColor = isDone ? 'bg-primary-container text-white border-primary-container' : 'bg-white text-secondary border-surface-container-high';
        const textColor = isCurrent ? 'text-primary font-bold' : isDone ? 'text-secondary font-semibold' : 'text-secondary/50';

        html += `
            <div class="relative">
                <!-- Dot Icon -->
                <span class="absolute -left-10 top-0.5 w-8 h-8 rounded-full border-2 ${dotColor} flex items-center justify-center text-xs">
                    <span class="material-symbols-outlined text-sm">${step.icon}</span>
                </span>
                <div>
                    <h6 class="text-sm ${textColor}">${step.label}</h6>
                    <p class="text-[10px] text-secondary/70">${isDone && !isCurrent && idx !== 3 ? step.time : (isCurrent ? 'Current Status' : step.time)}</p>
                </div>
            </div>
        `;
    });

    html += '</div>';
    trackingTimeline.innerHTML = html;
};

// Calculate Transit Cost and Time
window.calculateRates = function (event) {
    if (event) event.preventDefault();

    const origin = document.getElementById('calc-origin').value;
    const dest = document.getElementById('calc-dest').value;
    const category = document.getElementById('calc-cargo').value;
    const weight = document.getElementById('calc-weight').value;
    const calcResult = document.getElementById('calc-result');

    if (!origin || !dest) {
        alert('Please select both Origin and Destination cities.');
        return;
    }

    if (origin === dest) {
        alert('Origin and Destination must be different cities.');
        return;
    }

    // Distance Database
    const distances = {
        'kochi-bangalore': 510,
        'kochi-chennai': 690,
        'kochi-mumbai': 1350,
        'bangalore-kochi': 510,
        'bangalore-chennai': 350,
        'bangalore-mumbai': 980,
        'chennai-kochi': 690,
        'chennai-bangalore': 350,
        'chennai-mumbai': 1330,
        'mumbai-kochi': 1350,
        'mumbai-bangalore': 980,
        'mumbai-chennai': 1330
    };

    const key = `${origin}-${dest}`;
    const distance = distances[key] || 400; // default fallback distance

    // Cargo Multipliers
    const cargoMultipliers = {
        fmcg: 1.0,
        pharma: 1.25,
        industrial: 1.4,
        machinery: 1.55
    };

    // Weight Factors
    const weightFactors = {
        light: { label: 'Light Cargo (2T)', multiplier: 1.0, class: 'Tata Ace / Bolero' },
        medium: { label: 'Medium Cargo (7T)', multiplier: 1.5, class: 'Eicher Pro' },
        heavy: { label: 'Heavy Cargo (16T)', multiplier: 2.2, class: 'Leyland Multi-Axle' },
        industrial: { label: 'Industrial Trailer (30T)', multiplier: 3.6, class: 'Benz Heavy Carrier' }
    };

    const categoryMultiplier = cargoMultipliers[category] || 1.0;
    const weightData = weightFactors[weight] || weightFactors.medium;

    // Rates Formulas
    const baseCostPerKm = 14;
    const estimatedCost = Math.round(distance * baseCostPerKm * categoryMultiplier * weightData.multiplier);

    // Time Estimate (approx 50 km/h average commercial speed)
    const hours = Math.ceil(distance / 45);
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;

    let timeString = '';
    if (days > 0) {
        timeString = `${days} day${days > 1 ? 's' : ''} ${remainingHours > 0 ? `${remainingHours} hrs` : ''}`;
    } else {
        timeString = `${hours} hours`;
    }

    calcResult.classList.remove('hidden');
    const calcPlaceholder = document.getElementById('calc-placeholder');
    if (calcPlaceholder) calcPlaceholder.classList.add('hidden');
    document.getElementById('calc-res-distance').textContent = `${distance} km`;
    document.getElementById('calc-res-time').textContent = timeString;
    document.getElementById('calc-res-vehicle').textContent = weightData.class;
    document.getElementById('calc-res-cost').textContent = `₹${estimatedCost.toLocaleString('en-IN')}`;
};


// Handle Form Submissions via mailto:
window.handleContactSubmit = function (event) {
    event.preventDefault();
    const form = event.target;
    let subject = "Website Inquiry";

    // Check if there is a subject field
    const subjectField = form.querySelector('[id*="subject"]');
    if (subjectField && subjectField.value) {
        if (subjectField.options) {
            subject = subjectField.options[subjectField.selectedIndex].text;
        } else {
            subject = subjectField.value;
        }
    } else {
        if (form.id === 'interactive-contact-form' || form.id === 'contact-form') {
            subject = "Contact Us Inquiry";
        }
    }

    let body = "Hello Lisset Transport Inc Team,\n\nI would like to submit the following details:\n\n";

    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        if (input.type === 'submit' || input.type === 'button') return;

        let label = input.previousElementSibling ? input.previousElementSibling.innerText : input.placeholder || input.id || input.name;

        // Clean label if it's too long or try to find an actual label element if not direct sibling
        if (!label || label.length > 50) {
            const labelEl = form.querySelector(`label[for="${input.id}"]`);
            if (labelEl) label = labelEl.innerText;
            else label = input.placeholder || input.id;
        }

        let value = input.value;
        if (input.tagName.toLowerCase() === 'select') {
            if (input.options[input.selectedIndex].disabled || !input.value) return;
            value = input.options[input.selectedIndex].text;
        }

        if (value) {
            body += `${label}:\n${value}\n\n`;
        }
    });

    // Open mailto link
    const mailtoLink = `mailto:safety@lisset.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    form.reset();
};

// Global Floating Capsule Navbar Scroll Handler
document.addEventListener('DOMContentLoaded', () => {
    const mainNav = document.getElementById('main-nav');
    if (mainNav) {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // 1. Keep navbar fully visible and unsubscribed from scrolled state near the top
            if (currentScrollY < 50) {
                mainNav.classList.remove('scrolled');
                mainNav.classList.remove('hidden-nav');
                lastScrollY = currentScrollY;
                return;
            }

            // 2. Taller viewports shrink padding state
            if (currentScrollY > 40) {
                mainNav.classList.add('scrolled');
            } else {
                mainNav.classList.remove('scrolled');
            }

            // 3. Directional detection: Scroll down hides, scroll up shows
            if (currentScrollY > lastScrollY && currentScrollY > 150) {
                // Scrolling Down -> Hide
                mainNav.classList.add('hidden-nav');
            } else if (currentScrollY < lastScrollY) {
                // Scrolling Up -> Show
                mainNav.classList.remove('hidden-nav');
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
    }
});
