// Script 0


// Script 1


// Script 2

        function handleContactSubmit(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;

            const subject = encodeURIComponent("Website Contact Form: " + name);
            const body = encodeURIComponent(`Name: ${name}\r\nEmail: ${email}\r\nPhone: ${phone}\r\n\r\nMessage:\r\n${message}`);

            window.location.href = `mailto:safety@lisset.ca?subject=${subject}&body=${body}`;
        }

        function calculateRoute() {

            const origin = document.getElementById('route-origin').value;

            const destination = document.getElementById('route-destination').value;

            const key = `${origin}-${destination}`;

            const routeData = {

                "toronto-chicago": { time: "12-14 Hours", port: "Windsor / Detroit (Ambassador Bridge)", delay: "12 mins", status: "Optimal", route: "Hwy 401 & I-75 South" },

                "toronto-new_york": { time: "11-13 Hours", port: "Fort Erie / Buffalo (Peace Bridge)", delay: "35 mins", status: "Moderate", route: "QEW & I-90 East" },

                "toronto-boston": { time: "13-15 Hours", port: "Thousand Islands Bridge", delay: "15 mins", status: "Optimal", route: "Hwy 401 & I-81 South" },

                "toronto-atlanta": { time: "22-24 Hours", port: "Windsor / Detroit (Ambassador Bridge)", delay: "12 mins", status: "Optimal", route: "I-75 South Direct" },

                "toronto-dallas": { time: "32-34 Hours", port: "Windsor / Detroit (Ambassador Bridge)", delay: "12 mins", status: "Optimal", route: "I-30 West Corridor" },

                "montreal-new_york": { time: "9-11 Hours", port: "Lacolle / Champlain", delay: "18 mins", status: "Optimal", route: "A-15 & I-87 South" },

                "montreal-boston": { time: "8-10 Hours", port: "Derby Line / Stanstead", delay: "10 mins", status: "Optimal", route: "I-91 South & I-89 South" },

                "montreal-chicago": { time: "18-20 Hours", port: "Lansdowne / Alexandria Bay", delay: "14 mins", status: "Optimal", route: "Hwy 401 & I-94 West" },

                "montreal-atlanta": { time: "24-26 Hours", port: "Lacolle / Champlain", delay: "18 mins", status: "Optimal", route: "I-81 South & I-75 South" },

                "montreal-dallas": { time: "36-38 Hours", port: "Lacolle / Champlain", delay: "18 mins", status: "Optimal", route: "I-40 West Corridor" },

                "halifax-boston": { time: "15-17 Hours", port: "Calais / St. Stephen", delay: "8 mins", status: "Optimal", route: "Trans-Canada Hwy & I-95 South" },

                "halifax-new_york": { time: "19-21 Hours", port: "Calais / St. Stephen", delay: "8 mins", status: "Optimal", route: "I-95 South Corridor" },

                "halifax-chicago": { time: "28-30 Hours", port: "Calais / St. Stephen", delay: "8 mins", status: "Optimal", route: "I-95 South & I-90 West" },

                "halifax-atlanta": { time: "34-36 Hours", port: "Calais / St. Stephen", delay: "8 mins", status: "Optimal", route: "I-95 South & I-85 South" },

                "halifax-dallas": { time: "44-46 Hours", port: "Calais / St. Stephen", delay: "8 mins", status: "Optimal", route: "I-81 South & I-30 West" },

                "vancouver-chicago": { time: "42-44 Hours", port: "Portal / North Portal", delay: "22 mins", status: "Moderate", route: "I-90 East Direct" },

                "vancouver-dallas": { time: "40-42 Hours", port: "Sweet Grass / Coutts", delay: "15 mins", status: "Optimal", route: "I-15 South & I-25 South" },

                "vancouver-new_york": { time: "58-60 Hours", port: "Portal / North Portal", delay: "22 mins", status: "Moderate", route: "I-90 East Corridor" },

                "vancouver-boston": { time: "60-62 Hours", port: "Portal / North Portal", delay: "22 mins", status: "Moderate", route: "I-90 East & I-84 East" },

                "vancouver-atlanta": { time: "54-56 Hours", port: "Sweet Grass / Coutts", delay: "15 mins", status: "Optimal", route: "I-15 South & I-24 East" }

            };

            const data = routeData[key] || { time: "N/A", port: "Customs Inspection Required", delay: "N/A", status: "Contact Us", route: "Transit Corridor Optimization Required" };

            document.getElementById('display-time').textContent = data.time;

            document.getElementById('display-port').textContent = data.port;

            document.getElementById('display-port').title = data.port;

            document.getElementById('display-route').textContent = data.route;

            const originText = document.getElementById('route-origin').options[document.getElementById('route-origin').selectedIndex].text.split('(')[0].trim();

            const destinationText = document.getElementById('route-destination').options[document.getElementById('route-destination').selectedIndex].text.split('(')[0].trim();

            document.getElementById('visual-origin').textContent = originText;

            document.getElementById('visual-destination').textContent = destinationText;

            const truck = document.getElementById('visual-truck');

            if (truck) {

                truck.style.left = '0%';

                setTimeout(() => {

                    truck.style.left = 'calc(100% - 24px)';

                }, 50);

            }

            const cta = document.getElementById('route-cta');

            if (cta) {

                const subject = encodeURIComponent(`Quote Request: ${originText} to ${destinationText}`);
                const body = encodeURIComponent(`Hello,\r\n\r\nI would like to request a quote for shipping from ${originText} to ${destinationText}.\r\n\r\nEquipment Type Needed: \r\nExpected Ship Date: \r\nCommodity: \r\nWeight / Dimensions: \r\n\r\nThank you!`);
                cta.href = `mailto:safety@lisset.ca?subject=${subject}&body=${body}`;

            }

        }

        // =============================================

        // SCROLL PROGRESS BAR

        // =============================================

        const progressBar = document.getElementById('scroll-progress');

        function updateProgress() {

            const scrollTop = window.scrollY;

            const docHeight = document.documentElement.scrollHeight - window.innerHeight;

            const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

            progressBar.style.width = pct + '%';

        }

        window.addEventListener('scroll', updateProgress, { passive: true });

        // =============================================

        // HERO HEADLINE WORD REVEAL (triggers on load)

        // =============================================

        setTimeout(() => {

            const headline = document.getElementById('hero-headline');

            if (headline) headline.classList.add('revealed');

            // Trigger all divider lines in view

            document.querySelectorAll('.divider-line').forEach(el => el.classList.add('revealed'));

        }, 350);

        // =============================================

        // SCROLL REVEAL ENGINE - [data-reveal]

        // =============================================

        const revealObserver = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add('revealed');

                    revealObserver.unobserve(entry.target);

                }

            });

        }, { rootMargin: '0px 0px -65px 0px', threshold: 0.08 });

        document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

        document.addEventListener('DOMContentLoaded', () => {

            const section = document.getElementById('scrolling-truck-section');

            const truck = document.getElementById('scrolling-truck');

            const textCard = document.getElementById('scrolling-text-card');

            if (!section || !truck) return;

            const handleScroll = () => {

                const rect = section.getBoundingClientRect();

                const viewHeight = window.innerHeight;

                // Calculate progress: 0 when the top of the section enters the bottom of screen, 

                // 1 when the section is centered in the viewport

                const entryPoint = viewHeight;

                const centerPoint = viewHeight / 2 - rect.height / 2;

                let progress = (entryPoint - rect.top) / (entryPoint - centerPoint);

                progress = Math.max(0, Math.min(1, progress));

                // Translate from 110% (off-screen) to 45% (moderate portion of the truck showing)

                const startX = 110;

                const endX = 45;

                const translateX = startX - (progress * (startX - endX));

                const isMobile = window.innerWidth < 768;

                const translateY = isMobile ? 'translateY(0)' : 'translateY(-50%)';

                truck.style.transform = `${translateY} translateX(${translateX}%)`;

                // Animate text card: slide from left (-50px to 0) and fade in (0 to 1)

                if (textCard) {

                    const textTranslateX = -50 + (progress * 50);

                    textCard.style.transform = `${translateY} translateX(${textTranslateX}px)`;

                    textCard.style.opacity = progress;

                }

            };

            window.addEventListener('scroll', handleScroll, { passive: true });

            window.addEventListener('resize', handleScroll);

            handleScroll();

            if (typeof calculateRoute === 'function') {

                calculateRoute();

            }

        });

    

