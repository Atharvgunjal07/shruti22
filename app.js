// Phase Letters Data
const phaseLetters = {
    kuskisaurus: {
        title: "A Letter to Little Shruti",
        content: `As you turn 22 it is more like I should take advice from you because now you are elder then me once again enroute to the Aunty stage haha but please promise me you will always be the same sassy and yet the kindest soul i ever met ever.
         Meeting you was a revelation to me and to little shruti I would say please know that you are a good human being, yes you are there for everyone, in the family for mom, dad , sarvesh and yet you somedays are not there for yourself. Know that you love everyone around you and who truly are yours with all your heart and always yearn and wish for their good health even though you always have to either hear because of us or just can't bear us haha. 
         The most amazing thing about you is this that despite you not liking or even not wanting to many times you will choose the comfort latter saving it for yourself when you feel safe. 
         Thanks for being this way! i am sure growing up watching a big sister be such an overachiever and a younger brother to follow suit being that middle child wasn't easy on you...and guess what, you made it! you successfully make your parents proud everyday and i am sure whatver you want to achive you will achieve it. you are the best version of yourself yet and will evolve even more because you are just magnificent. In my eyes shruti..you are the most beautiful person in the whole world...the kindest and the most caring and most of all i would never ever get bored of you. 
         I can see in your eyes, listen you voice, and touch your hands for eternity. 
         Little shruti go easy on this big shruti because maybe she's  not perfect but she's trying her best always! Love you Shruti`
    },
    tpc_pce: {
        title: "A Letter to my forever Content partner",
        content: `Remember the day I asked you to join TPC? Oh my that was probably the best non thought chance I took ever! From that day you became my wingman in every respect, our bonds foundation was laid by the TPC angle in every way. The first heart to heart connection we had was in the library when we were writing some script and then you just unlocked something in me ig. The long google meets, the work synergy and the fun we had together was unparalleled. You truly were and are my best team mate ever! 
Our journey from a co-od with you just joining and us being the most involved duo in everything then to move on to heads where honestly if you wouldn’t have been there I would not have been so successful as a VP. A huge emotional and advising counsel you are in every respect. You not only guided me and helped me in the work but also gave me the opportunity to enjoy it with also embracing the pressure. 
For a moment I had forgotten that pressure is privilege and that not everyone have it, you unknowingly always have been that motivation for me to be better and brought out the true leader in me. Be it the endless gossip we had and the laughs we shared or the quality of work we delivered…you always being there as my wingman as my … Hand of the King would always be a very special memory of my life. 
I will always be proud of the fact that we had such a connection and understanding that people would lay doubts and be suspicious hahah but yeah I knew what we were doing and why legacy we left behind. 
✌🏼`
    },
    us: {
        title: "A Letter to my other half",
        content: `Well the only two people affected by the kuska and kuski syndrome meaning us !! Hahah Chemta and chemti. 🦋 and what a journey we have had from utter strangers in the first year where you completely even shunned down my compliment to here … nearly one soul now, can’t even sleep without calling and sleeping with each other on the call. This section will fell short of me talking about tbh but I think one line is enough to summarise us and what I remind myself - “ I is you and you is me” which is just beautiful in its own way. Never have I felt this way in my life and I doubt I know people who do like this, the moments we have had , the laughs, the tears, the sex , the kisses , the tensions, the fights everything but we were in it enduring it in our own respective ways but always making it upto each other later. My kuski is my motivation and my greatest strength who pushes me to push myself and my boundaries Evry further and I wouldn’t change anything from our past because it was all important to let our present happen. A present where we dream of a future of our family … a future of Atharv and Shruti Gunjal 💜🩶. Thank you for making me special and for choosing me! 
I promise to cook, clean, laugh, cry, hug, have amazing sex, talk, listen and be there for you no matter what… and that’s an enteral promise ♾️
I want us to always embrace us and remember the time we have had utterly unbelievable, the connection with butterflies and always remind ourselves that when everything falls south and nothing feels certain there will be one person who will be there rooting for us, that will be either of us for both of us. 
Come to me when everything feels difficult, heavy and lost.. I may not be able to help always but I for sure will always be there for you hand in hand facing it with you. 
Shruva 💜`
    }
};

// Love Notes Data
const loveNotes = [
    " Happy Birthday Shrutika Nandkumar Kharade Santoshi" ,
    "You make every day brighter! Happy Birthday! 🌟",
    " I is you and you is me 💕",
    " My kuskisaurus is the most prettiest woman ever ✨",
    "Your smile lights up the world. Never stop being you! 🌻",
    "Wishing you endless happiness on your special day 🎂",
    "Another year older, another year more wonderful 🎉",
    "You deserve all the love and joy in the world 💛" ,
    "Jaa tikde!",
    "aeeeee Lageeeeccchhhhhhh haha"
];

// Confetti Effect
function initConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confettiPieces = [];
    const colors = ['#556B2F', '#F5F5DC', '#FFFFFF', '#8B9F6A', '#A8B88A'];
    
    class Confetti {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - canvas.height;
            this.size = Math.random() * 5 + 5;
            this.speedY = Math.random() * 3 + 2;
            this.speedX = Math.random() * 2 - 1;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 5 - 2.5;
        }
        
        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.rotation += this.rotationSpeed;
            
            if (this.y > canvas.height) {
                this.y = -10;
                this.x = Math.random() * canvas.width;
            }
        }
        
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate((this.rotation * Math.PI) / 180);
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            ctx.restore();
        }
    }
    
    // Create confetti pieces
    for (let i = 0; i < 100; i++) {
        confettiPieces.push(new Confetti());
    }
    
    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confettiPieces.forEach(piece => {
            piece.update();
            piece.draw();
        });
        requestAnimationFrame(animateConfetti);
    }
    
    animateConfetti();
    
    // Stop confetti after 10 seconds
    setTimeout(() => {
        canvas.style.display = 'none';
    }, 10000);
    
    // Handle window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Floating Hearts Animation
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = '💖';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.bottom = '0px';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Carousel Functionality
class Carousel {
    constructor() {
        this.track = document.getElementById('carouselTrack');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.dots = document.querySelectorAll('.dot');
        this.currentIndex = 0;
        this.totalSlides = 3;
        this.autoplayInterval = null;
        this.isHovered = false;
        
        this.init();
    }
    
    init() {
        // Button listeners
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        
        // Dot listeners
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Hover pause
        this.track.parentElement.addEventListener('mouseenter', () => {
            this.isHovered = true;
            this.stopAutoplay();
        });
        
        this.track.parentElement.addEventListener('mouseleave', () => {
            this.isHovered = false;
            this.startAutoplay();
        });
        
        // Start autoplay
        this.startAutoplay();
    }
    
    goToSlide(index) {
        this.currentIndex = index;
        this.track.style.transform = `translateX(-${index * 100}%)`;
        this.updateDots();
        this.updateActiveSlide();
    }
    
    updateActiveSlide() {
        const slides = this.track.querySelectorAll('.carousel-slide');
        slides.forEach((slide, index) => {
            if (index === this.currentIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }
    
    next() {
        this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
        this.goToSlide(this.currentIndex);
    }
    
    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
        this.goToSlide(this.currentIndex);
    }
    
    updateDots() {
        this.dots.forEach((dot, index) => {
            if (index === this.currentIndex) {
                dot.classList.remove('bg-stone-400');
                dot.classList.add('bg-stone-800');
            } else {
                dot.classList.remove('bg-stone-800');
                dot.classList.add('bg-stone-400');
            }
        });
    }
    
    startAutoplay() {
        this.autoplayInterval = setInterval(() => {
            if (!this.isHovered) {
                this.next();
            }
        }, 5000);
    }
    
    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
        }
    }
}

// Gallery Modal
class GalleryModal {
    constructor() {
        this.modal = document.getElementById('galleryModal');
        this.modalImage = document.getElementById('modalImage');
        this.closeBtn = document.getElementById('closeModal');
        this.prevBtn = document.getElementById('modalPrev');
        this.nextBtn = document.getElementById('modalNext');
        this.galleryItems = document.querySelectorAll('.gallery-item');
        this.currentIndex = 0;
        this.images = [];
        
        this.init();
    }
    
    init() {
        // Collect all images
        this.galleryItems.forEach(item => {
            const img = item.querySelector('img');
            this.images.push(img.src);
        });
        
        // Gallery item listeners
        this.galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => this.open(index));
        });
        
        // Close listeners
        this.closeBtn.addEventListener('click', () => this.close());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.close();
            }
        });
        
        // Navigation listeners
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.modal.classList.contains('active')) {
                if (e.key === 'Escape') this.close();
                if (e.key === 'ArrowLeft') this.prev();
                if (e.key === 'ArrowRight') this.next();
            }
        });
    }
    
    open(index) {
        this.currentIndex = index;
        this.modalImage.src = this.images[index];
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.modalImage.src = this.images[this.currentIndex];
    }
    
    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.modalImage.src = this.images[this.currentIndex];
    }
}

// Love Notes Pop-up
class LoveNotesPopup {
    constructor() {
        this.btn = document.getElementById('loveNotesBtn');
        this.popup = document.getElementById('loveNotesPopup');
        this.overlay = document.getElementById('popupOverlay');
        this.closeBtn = document.getElementById('closePopup');
        this.noteText = document.getElementById('loveNoteText');
        this.usedNotes = [];
        
        this.init();
    }
    
    init() {
        this.btn.addEventListener('click', () => {
            this.show();
            createFloatingHeart();
        });
        
        this.closeBtn.addEventListener('click', () => this.close());
        this.overlay.addEventListener('click', () => this.close());
    }
    
    show() {
        // Get random note that hasn't been shown
        let availableNotes = loveNotes.filter(note => !this.usedNotes.includes(note));
        
        // Reset if all notes have been shown
        if (availableNotes.length === 0) {
            this.usedNotes = [];
            availableNotes = [...loveNotes];
        }
        
        const randomNote = availableNotes[Math.floor(Math.random() * availableNotes.length)];
        this.usedNotes.push(randomNote);
        
        this.noteText.textContent = randomNote;
        this.popup.classList.add('active');
        this.overlay.classList.add('active');
    }
    
    close() {
        this.popup.classList.remove('active');
        this.overlay.classList.remove('active');
    }
}

// Parallax Scroll Effect
function initParallax() {
    const floatingShapes = document.querySelectorAll('.floating-shape');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        floatingShapes.forEach((shape, index) => {
            const speed = 0.2 + (index * 0.1);
            const yPos = -(scrolled * speed);
            shape.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Scroll Reveal Animation
function initScrollReveal() {
    const reveals = document.querySelectorAll('.scroll-reveal');
    
    const revealOnScroll = () => {
        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('revealed');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on load
}

// Countdown Timer - Updated for Nov 18, 2025
let celebrationTriggered = false;

function initCountdown() {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    function updateCountdown() {
        const now = new Date();
        
        // Target: November 18, 2025 at 00:00:00
        const targetDate = new Date(2025, 10, 18, 0, 0, 0); // Month is 0-indexed, so 10 = November
        
        const timeDiff = targetDate - now;
        
        if (timeDiff > 0) {
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
            
            // Add pulse animation on seconds change
            const currentSeconds = secondsEl.textContent;
            if (currentSeconds !== String(seconds).padStart(2, '0')) {
                secondsEl.parentElement.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    secondsEl.parentElement.style.transform = 'scale(1)';
                }, 200);
            }
            
            daysEl.textContent = String(days).padStart(2, '0');
            hoursEl.textContent = String(hours).padStart(2, '0');
            minutesEl.textContent = String(minutes).padStart(2, '0');
            secondsEl.textContent = String(seconds).padStart(2, '0');
        } else if (timeDiff <= 0 && !celebrationTriggered) {
            // Birthday reached!
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
            
            // Trigger celebration
            triggerBirthdayCelebration();
            celebrationTriggered = true;
        } else {
            // After birthday - show message
            daysEl.textContent = '🎉';
            hoursEl.textContent = '🎂';
            minutesEl.textContent = '💚';
            secondsEl.textContent = '✨';
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Birthday Celebration Animation
function triggerBirthdayCelebration() {
    const overlay = document.getElementById('celebrationOverlay');
    const canvas = document.getElementById('celebrationCanvas');
    const ctx = canvas.getContext('2d');
    
    overlay.style.display = 'block';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Confetti explosion
    const confetti = [];
    const colors = ['#FFA500', '#FFD700', '#FF6347', '#32CD32', '#1E90FF', '#FF69B4'];
    
    for (let i = 0; i < 200; i++) {
        confetti.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            vx: (Math.random() - 0.5) * 20,
            vy: (Math.random() - 0.5) * 20 - 5,
            size: Math.random() * 8 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10
        });
    }
    
    function animateCelebration() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confetti.forEach((particle, index) => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.vy += 0.3; // Gravity
            particle.rotation += particle.rotationSpeed;
            
            ctx.save();
            ctx.translate(particle.x, particle.y);
            ctx.rotate((particle.rotation * Math.PI) / 180);
            ctx.fillStyle = particle.color;
            ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
            ctx.restore();
            
            if (particle.y > canvas.height + 50) {
                confetti.splice(index, 1);
            }
        });
        
        if (confetti.length > 0) {
            requestAnimationFrame(animateCelebration);
        } else {
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 1000);
        }
    }
    
    animateCelebration();
    
    // Pulse the bouquet
    const bouquet = document.getElementById('persistentBouquet');
    if (bouquet) {
        bouquet.style.animation = 'bouquetPulse 1s ease-in-out 3';
    }
    
    // Change background to celebration tone
    document.body.style.transition = 'background 2s ease';
    document.body.style.background = 'linear-gradient(135deg, #FFF5E6 0%, #FFE4B5 100%)';
    
    setTimeout(() => {
        document.body.style.background = '';
    }, 5000);
}

// Letter Modal Handler
class LetterModal {
    constructor() {
        this.modal = document.getElementById('letterModal');
        this.titleEl = document.getElementById('letterTitle');
        this.contentEl = document.getElementById('letterContent');
        this.closeBtn = this.modal.querySelector('.letter-modal-close');
        this.overlay = this.modal.querySelector('.letter-modal-overlay');
        this.letterBtns = document.querySelectorAll('.letter-btn');
        
        this.init();
    }
    
    init() {
        this.letterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const phase = btn.getAttribute('data-phase');
                this.open(phase);
            });
        });
        
        this.closeBtn.addEventListener('click', () => this.close());
        this.overlay.addEventListener('click', () => this.close());
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.close();
            }
        });
    }
    
    open(phase) {
        const letter = phaseLetters[phase];
        if (letter) {
            this.titleEl.textContent = letter.title;
            this.contentEl.textContent = letter.content;
            this.modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Floral Decorations
function addFloralDecorations() {
    const flowers = ['🌸', '🌺', '🌼', '🌻', '🌷', '💐', '🌹'];
    const sections = ['hero', 'carousel', 'gallery', 'letter'];
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (!section) return;
        
        const rect = section.getBoundingClientRect();
        const numFlowers = sectionId === 'hero' ? 8 : 6;
        
        for (let i = 0; i < numFlowers; i++) {
            const flower = document.createElement('div');
            flower.className = 'floral-decoration';
            flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
            
            // Random positioning
            const isLeft = Math.random() > 0.5;
            const vertical = Math.random() * 80 + 10; // 10-90%
            
            flower.style.position = 'absolute';
            flower.style[isLeft ? 'left' : 'right'] = Math.random() * 8 + 2 + '%';
            flower.style.top = vertical + '%';
            flower.style.opacity = Math.random() * 0.3 + 0.5; // 0.5-0.8
            flower.style.animationDelay = Math.random() * 2 + 's';
            
            // Color filters for purple, grey, yellow variations
            const colorType = Math.floor(Math.random() * 3);
            if (colorType === 0) {
                flower.style.filter = 'hue-rotate(270deg) saturate(0.8)'; // Purple
            } else if (colorType === 1) {
                flower.style.filter = 'grayscale(0.6)'; // Grey
            } else {
                flower.style.filter = 'hue-rotate(50deg) saturate(1.2)'; // Yellow
            }
            
            section.style.position = 'relative';
            section.appendChild(flower);
        }
    });
    
    // Footer flowers
    const footer = document.querySelector('footer');
    if (footer) {
        for (let i = 0; i < 5; i++) {
            const flower = document.createElement('div');
            flower.className = 'floral-decoration';
            flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
            flower.style.position = 'absolute';
            flower.style.left = (i * 20 + 5) + '%';
            flower.style.top = '20%';
            flower.style.opacity = '0.4';
            flower.style.filter = 'brightness(1.5)';
            footer.style.position = 'relative';
            footer.appendChild(flower);
        }
    }
}

// Create Realistic SVG Bouquet
function createBouquet() {
    const container = document.getElementById('bouquetContainer');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 400 500');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    
    // Stems
    const stems = [
        { x1: 180, y1: 500, x2: 150, y2: 250, delay: 0 },
        { x1: 200, y1: 500, x2: 200, y2: 200, delay: 0.1 },
        { x1: 220, y1: 500, x2: 250, y2: 230, delay: 0.2 },
        { x1: 190, y1: 500, x2: 170, y2: 280, delay: 0.15 },
        { x1: 210, y1: 500, x2: 230, y2: 260, delay: 0.25 }
    ];
    
    stems.forEach(stem => {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', stem.x1);
        line.setAttribute('y1', stem.y1);
        line.setAttribute('x2', stem.x2);
        line.setAttribute('y2', stem.y2);
        line.setAttribute('stroke', '#5a7c3e');
        line.setAttribute('stroke-width', '3');
        line.setAttribute('class', 'bouquet-stem');
        line.style.animationDelay = stem.delay + 's';
        svg.appendChild(line);
    });
    
    // Leaves
    const leaves = [
        { cx: 160, cy: 350, delay: 0.3 },
        { cx: 190, cy: 380, delay: 0.35 },
        { cx: 210, cy: 370, delay: 0.4 },
        { cx: 170, cy: 320, delay: 0.45 }
    ];
    
    leaves.forEach(leaf => {
        const ellipse = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
        ellipse.setAttribute('cx', leaf.cx);
        ellipse.setAttribute('cy', leaf.cy);
        ellipse.setAttribute('rx', '8');
        ellipse.setAttribute('ry', '15');
        ellipse.setAttribute('fill', '#6b8e4e');
        ellipse.setAttribute('class', 'bouquet-leaf');
        ellipse.style.animationDelay = leaf.delay + 's';
        svg.appendChild(ellipse);
    });
    
    // Flowers - Various types and colors
    const flowers = [
        { cx: 150, cy: 250, r: 25, color: '#d946ef', delay: 0.5 }, // Purple
        { cx: 200, cy: 200, r: 30, color: '#f472b6', delay: 0.6 }, // Pink
        { cx: 250, cy: 230, r: 28, color: '#fbbf24', delay: 0.7 }, // Yellow
        { cx: 170, cy: 280, r: 22, color: '#ffffff', delay: 0.65 }, // White
        { cx: 230, cy: 260, r: 26, color: '#c084fc', delay: 0.75 } // Light purple
    ];
    
    flowers.forEach(flower => {
        // Flower petals (circle pattern)
        const petalGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        petalGroup.setAttribute('class', 'bouquet-flower');
        petalGroup.style.animationDelay = flower.delay + 's';
        
        for (let i = 0; i < 5; i++) {
            const angle = (i * 72) * Math.PI / 180;
            const petalX = flower.cx + Math.cos(angle) * flower.r * 0.6;
            const petalY = flower.cy + Math.sin(angle) * flower.r * 0.6;
            
            const petal = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            petal.setAttribute('cx', petalX);
            petal.setAttribute('cy', petalY);
            petal.setAttribute('r', flower.r * 0.5);
            petal.setAttribute('fill', flower.color);
            petal.setAttribute('opacity', '0.9');
            petalGroup.appendChild(petal);
        }
        
        // Center
        const center = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        center.setAttribute('cx', flower.cx);
        center.setAttribute('cy', flower.cy);
        center.setAttribute('r', flower.r * 0.4);
        center.setAttribute('fill', '#fbbf24');
        petalGroup.appendChild(center);
        
        svg.appendChild(petalGroup);
    });
    
    // Ribbon at bottom
    const ribbon = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    ribbon.setAttribute('class', 'bouquet-ribbon');
    
    const ribbonRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    ribbonRect.setAttribute('x', '170');
    ribbonRect.setAttribute('y', '450');
    ribbonRect.setAttribute('width', '60');
    ribbonRect.setAttribute('height', '30');
    ribbonRect.setAttribute('fill', '#f472b6');
    ribbonRect.setAttribute('rx', '5');
    ribbon.appendChild(ribbonRect);
    
    const bow1 = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
    bow1.setAttribute('cx', '180');
    bow1.setAttribute('cy', '465');
    bow1.setAttribute('rx', '15');
    bow1.setAttribute('ry', '20');
    bow1.setAttribute('fill', '#f9a8d4');
    ribbon.appendChild(bow1);
    
    const bow2 = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
    bow2.setAttribute('cx', '220');
    bow2.setAttribute('cy', '465');
    bow2.setAttribute('rx', '15');
    bow2.setAttribute('ry', '20');
    bow2.setAttribute('fill', '#f9a8d4');
    ribbon.appendChild(bow2);
    
    svg.appendChild(ribbon);
    
    container.appendChild(svg);
}

// Create smaller bouquet for persistent display
function createPersistentBouquet() {
    const container = document.getElementById('persistentBouquet');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 120 150');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    
    // Simplified stems
    const stems = [
        { x1: 54, y1: 150, x2: 45, y2: 75 },
        { x1: 60, y1: 150, x2: 60, y2: 60 },
        { x1: 66, y1: 150, x2: 75, y2: 69 }
    ];
    
    stems.forEach(stem => {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', stem.x1);
        line.setAttribute('y1', stem.y1);
        line.setAttribute('x2', stem.x2);
        line.setAttribute('y2', stem.y2);
        line.setAttribute('stroke', '#5a7c3e');
        line.setAttribute('stroke-width', '2');
        svg.appendChild(line);
    });
    
    // Simplified flowers
    const flowers = [
        { cx: 45, cy: 75, r: 10, color: '#d946ef' },
        { cx: 60, cy: 60, r: 12, color: '#f472b6' },
        { cx: 75, cy: 69, r: 11, color: '#fbbf24' }
    ];
    
    flowers.forEach(flower => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', flower.cx);
        circle.setAttribute('cy', flower.cy);
        circle.setAttribute('r', flower.r);
        circle.setAttribute('fill', flower.color);
        svg.appendChild(circle);
    });
    
    container.appendChild(svg);
}

// Initialize Bouquet Loading Animation
function initBouquetLoading() {
    createBouquet();
    createPersistentBouquet();
    
    const overlay = document.getElementById('bouquetOverlay');
    const closeBtn = document.getElementById('closeBouquet');
    const persistentBouquet = document.getElementById('persistentBouquet');
    
    // Auto-close after 8 seconds or manual close
    const closeBouquetAnimation = () => {
        overlay.classList.add('fade-out');
        setTimeout(() => {
            overlay.style.display = 'none';
            persistentBouquet.classList.add('visible');
        }, 1000);
    };
    
    closeBtn.addEventListener('click', closeBouquetAnimation);
    
    // Auto-close after 8 seconds
    setTimeout(closeBouquetAnimation, 8000);
}

// Easter Egg: Magic Wand
class MagicWand {
    constructor() {
        this.active = false;
        this.canvas = document.getElementById('wandCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.patronusActive = false;
        this.init();
    }
    
    init() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        });
    }
    
    activate() {
        if (this.patronusActive) return;
        
        // Show Patronus charm first
        this.showPatronusCharm();
    }
    
    showPatronusCharm() {
        this.patronusActive = true;
        const overlay = document.getElementById('patronusOverlay');
        const container = document.getElementById('patronusContainer');
        const textEl = document.getElementById('expelliarmusText');
        const canvas = document.getElementById('patronusCanvas');
        const ctx = canvas.getContext('2d');
        
        // Overlay fade in
        overlay.style.display = 'block';
        setTimeout(() => {
            overlay.style.opacity = '1';
        }, 10);
        
        container.style.display = 'block';
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        setTimeout(() => {
            textEl.style.transition = 'opacity 0.3s ease-out';
            textEl.style.opacity = '1';
        }, 100);
        setTimeout(() => {
            this.animatePatronus(ctx, canvas);
        }, 500);
        setTimeout(() => {
            textEl.style.transition = 'opacity 0.6s ease-out';
            textEl.style.opacity = '0';
        }, 4000);
        setTimeout(() => {
            container.style.display = 'none';
            overlay.style.opacity = '0';
        }, 4200);
        setTimeout(() => {
            overlay.style.display = 'none';
            this.patronusActive = false;
            this.activateWandMode();
        }, 4500);
    }
    
    animatePatronus(ctx, canvas) {
        let startTime = Date.now();
        const duration = 3000; // 3 seconds - optimized
        const catStartX = -100;
        const catEndX = canvas.width + 100;
        const catY = canvas.height / 2;
        
        const particles = [];
        
        // Load the cat silhouette image
        const catImage = new Image();
        catImage.src = 'https://user-gen-media-assets.s3.amazonaws.com/seedream_images/fda20a05-f0a4-4d02-a498-d2054eca2581.png';
        
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            if (progress >= 1) return;
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Calculate cat position with easing
            const easeProgress = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            const catX = catStartX + (catEndX - catStartX) * easeProgress;
            
            // Add sparkle particles to trail (optimized)
            if (Math.random() > 0.3) {
                particles.push({
                    x: catX + (Math.random() - 0.5) * 60,
                    y: catY + (Math.random() - 0.5) * 60,
                    vx: (Math.random() - 0.5) * 2,
                    vy: (Math.random() - 0.5) * 2,
                    size: Math.random() * 5 + 2,
                    life: 1,
                    color: ['#FFD700', '#C0C0C0', '#FFFFFF'][Math.floor(Math.random() * 3)]
                });
            }
            
            // Draw and update particles (magical sparkle trail)
            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.015;
                
                if (p.life <= 0) {
                    particles.splice(i, 1);
                    continue;
                }
                
                ctx.save();
                ctx.globalAlpha = p.life * 0.9;
                ctx.fillStyle = p.color;
                ctx.shadowBlur = 12;
                ctx.shadowColor = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
            
            // Draw cat silhouette with silvery-blue glow
            const opacity = progress < 0.92 ? 1 : (1 - (progress - 0.92) / 0.08);
            
            if (catImage.complete) {
                ctx.save();
                ctx.globalAlpha = opacity;
                
                // Silvery-blue magical aura
                ctx.shadowBlur = 35;
                ctx.shadowColor = 'rgba(135, 206, 235, 0.95)';
                
                // Draw the cat silhouette
                const catWidth = 100;
                const catHeight = 100;
                ctx.drawImage(catImage, catX - catWidth/2, catY - catHeight/2, catWidth, catHeight);
                
                // Additional outer glow layer
                ctx.shadowBlur = 60;
                ctx.shadowColor = 'rgba(224, 247, 250, 0.7)';
                ctx.drawImage(catImage, catX - catWidth/2, catY - catHeight/2, catWidth, catHeight);
                
                ctx.restore();
            }
            
            requestAnimationFrame(animate);
        };
        
        animate();
    }
    
    activateWandMode() {
        this.active = true;
        this.canvas.style.display = 'block';
        document.body.classList.add('wand-active');
        
        document.addEventListener('mousemove', this.createTrail.bind(this));
        document.addEventListener('click', this.castSpell.bind(this));
        
        this.animate();
    }
    
    deactivate() {
        if (this.patronusActive) return;
        
        this.active = false;
        this.canvas.style.display = 'none';
        document.body.classList.remove('wand-active');
        this.particles = [];
        
        document.removeEventListener('mousemove', this.createTrail.bind(this));
        document.removeEventListener('click', this.castSpell.bind(this));
    }
    
    createTrail(e) {
        if (!this.active) return;
        
        for (let i = 0; i < 3; i++) {
            this.particles.push({
                x: e.clientX,
                y: e.clientY,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                life: 1,
                size: Math.random() * 4 + 2,
                color: ['#FFD700', '#FFA500', '#FFFF00'][Math.floor(Math.random() * 3)]
            });
        }
    }
    
    castSpell(e) {
        if (!this.active) return;
        
        // Create burst of sparkles
        for (let i = 0; i < 30; i++) {
            const angle = (Math.PI * 2 * i) / 30;
            this.particles.push({
                x: e.clientX,
                y: e.clientY,
                vx: Math.cos(angle) * 5,
                vy: Math.sin(angle) * 5,
                life: 1,
                size: Math.random() * 6 + 3,
                color: ['#FFD700', '#FFA500', '#FFFF00', '#556B2F'][Math.floor(Math.random() * 4)]
            });
        }
    }
    
    animate() {
        if (!this.active && this.particles.length === 0) return;
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach((particle, index) => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.life -= 0.02;
            particle.vy += 0.1; // Gravity
            
            if (particle.life <= 0) {
                this.particles.splice(index, 1);
                return;
            }
            
            this.ctx.save();
            this.ctx.globalAlpha = particle.life;
            this.ctx.fillStyle = particle.color;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Weeknd Video Modal Handler
function initWeekndModal() {
    const trigger = document.getElementById('weekndTrigger');
    const modal = document.getElementById('weekndModal');
    const closeBtn = document.getElementById('closeWeeknd');
    
    if (!trigger || !modal || !closeBtn) return;
    
    // Hover effect
    trigger.addEventListener('mouseenter', () => {
        trigger.style.opacity = '1';
        trigger.style.transform = 'scale(1.2) rotate(10deg)';
    });
    
    trigger.addEventListener('mouseleave', () => {
        trigger.style.opacity = '0.7';
        trigger.style.transform = 'scale(1) rotate(0deg)';
    });
    
    // Open modal
    trigger.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    // Close modal
    const closeModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };
    
    closeBtn.addEventListener('click', closeModal);
    
    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.parentElement === modal) {
            closeModal();
        }
    });
    
    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

// Vaani White Cat Icon - Simplified
function initVaaniCatPopup() {
    const cat = document.getElementById('vaaniCat');
    const vaaniMsg = document.getElementById('vaaniMessage');
    const vaaniMsgClose = document.getElementById('vaaniMsgClose');
    let vaaniMsgTimeout = null;

    function showMsg() {
        if (!vaaniMsg) return;
        vaaniMsg.style.display = 'block';
        vaaniMsg.style.animation = 'fadeInScale 0.5s';
        if (vaaniMsgTimeout) clearTimeout(vaaniMsgTimeout);
        vaaniMsgTimeout = setTimeout(hideMsg, 6000);
    }
    function hideMsg() {
        if (!vaaniMsg) return;
        vaaniMsg.style.animation = 'fadeOutScale 0.35s';
        setTimeout(()=>{ vaaniMsg.style.display = 'none'; }, 350);
    }
    if (cat) {
        cat.addEventListener('click', showMsg);
        cat.addEventListener('mouseenter', ()=>{ 
            cat.style.opacity = '1'; 
            cat.style.transform = 'scale(1.1)';
        });
        cat.addEventListener('mouseleave', ()=>{ 
            cat.style.opacity = '0.7'; 
            cat.style.transform = 'scale(1)';
        });
    }
    if (vaaniMsgClose) vaaniMsgClose.onclick = hideMsg;
}

// Easter Egg: Realistic Butterflies
class Butterflies {
    constructor() {
        this.container = document.getElementById('butterfliesContainer');
        this.active = false;
        this.butterflies = [];
    }
    
    createButterflySVG(color) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '60');
        svg.setAttribute('height', '60');
        svg.setAttribute('viewBox', '0 0 60 60');
        
        let fillColor, accentColor;
        if (color === 'orange') {
            fillColor = '#FF8C00';
            accentColor = '#FF6347';
        } else if (color === 'blue') {
            fillColor = '#4169E1';
            accentColor = '#1E90FF';
        } else {
            fillColor = '#2F4F4F';
            accentColor = '#000000';
        }
        
        svg.innerHTML = `
            <g class="butterfly-wings">
                <!-- Left upper wing -->
                <ellipse cx="20" cy="25" rx="15" ry="20" fill="${fillColor}" opacity="0.9" transform="rotate(-30 20 25)"/>
                <ellipse cx="20" cy="25" rx="8" ry="12" fill="${accentColor}" opacity="0.6" transform="rotate(-30 20 25)"/>
                <!-- Right upper wing -->
                <ellipse cx="40" cy="25" rx="15" ry="20" fill="${fillColor}" opacity="0.9" transform="rotate(30 40 25)"/>
                <ellipse cx="40" cy="25" rx="8" ry="12" fill="${accentColor}" opacity="0.6" transform="rotate(30 40 25)"/>
                <!-- Left lower wing -->
                <ellipse cx="22" cy="38" rx="10" ry="15" fill="${fillColor}" opacity="0.85" transform="rotate(-20 22 38)"/>
                <!-- Right lower wing -->
                <ellipse cx="38" cy="38" rx="10" ry="15" fill="${fillColor}" opacity="0.85" transform="rotate(20 38 38)"/>
                <!-- Body -->
                <ellipse cx="30" cy="30" rx="3" ry="12" fill="#000000"/>
                <!-- Antennae -->
                <path d="M 30 20 Q 28 15 27 12" stroke="#000000" stroke-width="1.5" fill="none"/>
                <path d="M 30 20 Q 32 15 33 12" stroke="#000000" stroke-width="1.5" fill="none"/>
                <circle cx="27" cy="12" r="2" fill="#000000"/>
                <circle cx="33" cy="12" r="2" fill="#000000"/>
            </g>
        `;
        
        return svg;
    }
    
    activate() {
        if (this.active) {
            this.deactivate();
            return;
        }
        
        this.active = true;
        this.container.style.display = 'block';
        
        const colors = ['orange', 'blue', 'orange', 'blue', 'black'];
        
        colors.forEach((color, index) => {
            const div = document.createElement('div');
            div.className = 'butterfly-realistic';
            div.style.position = 'absolute';
            div.style.left = (Math.random() * 80 + 10) + '%';
            div.style.top = (Math.random() * 80 + 10) + '%';
            div.style.pointerEvents = 'none';
            div.style.filter = 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))';
            
            const svg = this.createButterflySVG(color);
            div.appendChild(svg);
            
            this.container.appendChild(div);
            this.butterflies.push(div);
            
            // Animate butterfly
            this.animateButterfly(div, index);
        });
        
        // Auto-dismiss after 18 seconds
        setTimeout(() => {
            if (this.active) this.deactivate();
        }, 18000);
    }
    
    animateButterfly(butterfly, index) {
        const startX = parseFloat(butterfly.style.left);
        const startY = parseFloat(butterfly.style.top);
        let time = 0;
        const speed = 0.02 + Math.random() * 0.01;
        const wingSpeed = 100 + Math.random() * 50;
        
        const animate = () => {
            if (!this.active) return;
            
            time += speed;
            
            // Curved flight path
            const x = startX + Math.sin(time * 2) * 30 + time * 5;
            const y = startY + Math.cos(time * 3) * 20 + Math.sin(time) * 15;
            
            butterfly.style.left = (x % 100) + '%';
            butterfly.style.top = (y % 100) + '%';
            
            // Wing fluttering
            const wings = butterfly.querySelector('.butterfly-wings');
            if (wings) {
                const scale = 1 + Math.sin(Date.now() / wingSpeed) * 0.1;
                wings.style.transform = `scaleX(${scale})`;
            }
            
            // Rotation based on direction
            const rotation = Math.sin(time * 2) * 20;
            butterfly.style.transform = `rotate(${rotation}deg)`;
            
            requestAnimationFrame(animate);
        };
        
        setTimeout(() => animate(), index * 200);
    }
    
    deactivate() {
        this.active = false;
        this.butterflies.forEach(b => {
            b.style.transition = 'opacity 1s ease-out';
            b.style.opacity = '0';
        });
        
        setTimeout(() => {
            this.container.style.display = 'none';
            this.butterflies.forEach(b => b.remove());
            this.butterflies = [];
        }, 1000);
    }
}

// Easter Egg: Messages from Your People with Full Interactive Cards
const fullMessages = [
    {
        sender: 'Stanley',
        fullMessage: `
Happy Birthday Dear KUTRIKA🥰💕,And it's your 22nd Bdayyy yeahhh 
You’re more like a sister actually  even more than that… a friend who’s always close to me who never judges me, and someone who has never doubted our friendship
I wish I could give you something special today… something that would always remind you of me.... but but but… one day I definitely will. For now, I’ll just write this message for youuuu! ❤️
Sooo cutieeee, we’ve been together since 1st sem and I really wish we'll always stay connected like this and the things we did during practicals, all those funny activities, the selfies, and ahh… the gossips about bitches(tuzhi bestie archie jila tuzhya shivay karmat nhvta)🤣
Dude yaaaar, I’m going to miss all that so much! I won’t cry, but I’ll surely miss doing all those things with you… ofc with you and that madarchod Sanju 😭😂
You remember… you tied rakhi to me? I don’t exactly remember the sem, but maybe it was 2nd sem… and yes, I still have your rakhi somewhere in my cupboard ❤️🤗...
Umm we actually didn’t get to enjoy much, Shruti… but every moment we did spend together has always been the best for me ❤️ .....and I hope all of this stays as a sweet memory for you💕 
And yuppp, one day we will have that wine session ofc😋🫶🏻
Even if I don’t drink I’ll still sit with you and enjoy😭😂
So👉🏻👈🏻😋Happy Birthday Aunty once again ❤️🫂
I wish you all the best for your future and I really hope you never forget me and all my mastiii… ofc I’m your mastiiikhoor natkhaat bhai 🥹😁🎀
Enjoyyyy your dayyy and if you ever need anything any help text me call me and haa bc kdhi tri Instragram che msgs read krt jaa ga😭....

Happpiiiee Bday once again 🌝🥳💗
I hope my message becomes the longest, sweetest, and maybe the most boring one too 😛😂
Take careee… aur haa khaaat pitttt jaa jraaaa 😂🫂❤️`
    },
    {
        sender: 'Erin',
        fullMessage: `Well hello 😏,

I know you love me and maybe in some other universe we might even be together but chalo, let’s get to the main part.
It’s your 22nd birthday And when someone says “Shruti Kharade,” the first thing I think is: MC simple  (You know why 😏)

Kahani shuru hoti hai 4th Nov 2022 se
Pehli baar jab madam mili, full English mode ON zyada hi shinning mar rhi thi  phir thode din baad line pe aa hi gayi 
uske baad our freshers night apke ghar mein gusske hmm 😏 apn ready hue 😉 after that we started talking talking pure rubbish, checking out guys, gossiping about everything, and of course adding chaar chaand to every exam
Shruti, you have been such a cute friend to me.You never judged me , never made me feel like shit
and you helped me in my most difficult situations without ever complaining.
Maybe I wasn’t always the perfect friend, so if I ever messed up, please forgive me.
but remember you are one of the most important people I’ve ever had in my life.
and yes, I forget things often 😭😂 but I will never forget you.
Aur haan, ek baat toh hamesha yaad rehni chahiye
Hamari Athena se Pitambari aur bkl ka surf hamesha chalta rahega vo kabhi nahi rukega 

Many many happy returns of the day, dear.
You’ll always have a tiny little spot in my heart
aur haa chal chal chal has maat jayda dukar 😌`
    },
    {
        sender: 'Andy',
        fullMessage: `Vadh divasachya hardik shubhechcha content vali aurat🪿.TPC mai content ke alawa bhandhi bhi mast ghasa ha tune. Mentors ki tea dete hum abhi hamari tea apne juniors derahe hai 🪿.Bhandi achese ghasna apne domain mai sabse achi kaam karne vali bai banegi 🦍. Mummy la madat karat jaa and btw number mere pass safe hai yk kiska 🥰
Wishing you a Happiest Birthday content ki madam ji 🫶
PS ismai error check karke bheja toh mardunga 🪿`
    },
    {
        sender: 'Holly',
        fullMessage: `Hi shruti, happy 22 to you. You have been like an unpaid therapist for the past years and it's
         always fun to talk on call with you. References that only me and you would understand. 
         Hope you enjoy your day and have a blessed year ahead ❤️ `
    },
    {
        sender: ' Michael',
        fullMessage: `Ayee Chemdiii,Omg it has literally been 22 years of watching you grow from a tiny, cute (but angry) baby to this fierce, independent, loving human. Honestly, a very cool character arc.
Happy birthday to the best back-scratcher, the official karanji and modak pro of the family, our ever-ready photographer who takes 200 photos but likes only 2, the craziest coffee fanatic, and of course, the certified vadapav paglu…
I wish you the absolute best in whatever you choose to do in the future, and just know that I’ll always have your back, no matter what.
Lots of love,
Chemti…`
    },
    {
        sender: ' Dwight',
        fullMessage: `Thanks for saving me in the time of trouble,even when I would grumble who stood beside me strong and corrected me when I was wrong .wish you the happiest birthday and a future full of joy.`
    },
    {
        sender: ' Pam ',
        fullMessage: `Shruti is very much helping in nature and strog hand of her , due to shruti she is able to go for job single handedly depending on her she can left home for job. 
        She is perfect in her work as well as she is having presence of mind of situation arrises in home. She is having dedication of work. 
        My best wishes for her future and wish her happy birthday and bappa kadun khup Khup ashirwaad 💐🎂❤️💋`
    },
    {
        sender: ' Jim ',
        fullMessage: `Shruti is my second child we doesn't know when she grew to 22 years.
         So many Years passed away but memories of her always give us inspiration. 
         My younger daughter who is very much close to my heart who is very much obediant, respectful, Intelegnt and dedicated to her work and hard working. She speak what she feel openly not bother who will think about her. She take care all of us in all aspect. 
         We are proud parents that we are having daughter like shruti. Wish her a very very happy birthday and many more to come. 
        Bappa bless her and give her what she want in her life. 💐🍫❤️🎂`
    },
    {
        sender: 'Ryan',
        fullMessage: `Happy Birthday, Shruti 🎁 🤪
Thanks for surviving our project chaos and for all your legendary last-minute changes 😭😂 
Hope this year gives you tons of happiness and maybe…you’ll stop giving me mini heart attacks with those last-minute edits 🤣😂💀`
    },
    {
        sender: ' Kelly ',
        fullMessage: `IT IS YOUR BIRTHDAY. (hope you got the reference hahah) happy 22nd shruteeee 🐈 hope your day is as fun as you are <3` 
    }
];

function showMessagesModal() {
    const modal = document.getElementById('messagesModal');
    const grid = document.getElementById('messagesGrid');
    
    grid.innerHTML = '';
    
    fullMessages.forEach((msg, index) => {
        const card = document.createElement('div');
        card.className = 'message-card-opaque';
        card.style.animationDelay = (index * 0.1) + 's';
        card.innerHTML = `
            <h3 style="font-family: 'Playfair Display', serif; font-size: 1.4rem; color: #1a1a1a; margin-bottom: 12px; font-weight: 600;">${msg.sender}</h3>
            <p style="font-family: 'Lora', serif; font-size: 1rem; color: #333333; line-height: 1.6;">${msg.preview}</p>
        `;
        card.addEventListener('click', () => showMessageDetail(index));
        grid.appendChild(card);
    });
    
    modal.style.display = 'block';
    
    const closeMessages = () => {
        modal.style.display = 'none';
    };
    
    document.getElementById('closeMessages').onclick = closeMessages;
}

// Message Detail Modal
function showMessageDetail(index) {
    const msg = fullMessages[index];
    
    // Create modal if it doesn't exist
    let detailModal = document.getElementById('messageDetailModal');
    if (!detailModal) {
        detailModal = document.createElement('div');
        detailModal.id = 'messageDetailModal';
        detailModal.className = 'message-detail-modal';
        detailModal.innerHTML = `
            <div class="message-detail-overlay"></div>
            <div class="message-detail-content">
                <button class="message-detail-close">✕</button>
                <div class="message-detail-sender"></div>
                <div class="message-detail-body"></div>
            </div>
        `;
        document.body.appendChild(detailModal);
        
        // Close handlers
        const closeBtn = detailModal.querySelector('.message-detail-close');
        const overlay = detailModal.querySelector('.message-detail-overlay');
        
        const closeDetail = () => {
            detailModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        };
        
        closeBtn.addEventListener('click', closeDetail);
        overlay.addEventListener('click', closeDetail);
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && detailModal.classList.contains('active')) {
                closeDetail();
            }
        });
    }
    
    // Update content
    const senderEl = detailModal.querySelector('.message-detail-sender');
    const bodyEl = detailModal.querySelector('.message-detail-body');
    
    senderEl.textContent = msg.sender;
    bodyEl.textContent = msg.fullMessage;
    
    // Show modal
    detailModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Help Modal
function showHelpModal() {
    const modal = document.getElementById('helpModal');
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.7); z-index: 10001;';
    overlay.id = 'helpOverlay';
    
    document.body.appendChild(overlay);
    modal.style.display = 'block';
    
    const closeHelp = () => {
        modal.style.display = 'none';
        overlay.remove();
    };
    
    document.getElementById('closeHelp').onclick = closeHelp;
    overlay.onclick = closeHelp;
}

// Discovery Button Handler
function initDiscoveryButton() {
    const button = document.getElementById('discoveryButton');
    const helpModal = document.getElementById('helpModal');
    
    button.addEventListener('click', () => {
        showHelpModal();
    });
    
    // Hover effect
    button.addEventListener('mouseenter', () => {
        button.querySelector('button').style.transform = 'scale(1.08)';
        button.querySelector('button').style.boxShadow = '0 12px 48px rgba(85, 107, 47, 0.35), 0 0 30px rgba(85, 107, 47, 0.2)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.querySelector('button').style.transform = 'scale(1)';
        button.querySelector('button').style.boxShadow = '0 8px 32px rgba(85, 107, 47, 0.25), 0 0 20px rgba(85, 107, 47, 0.15)';
    });
}



// Section Transitions with Olive Green Elements
function initSectionTransitions() {
    const sections = document.querySelectorAll('[data-section]');
    const overlay = document.getElementById('transitionOverlay');
    
    const sectionColors = {
        hero: '#F5F5DC',
        carousel: '#E8E8CC',
        gallery: '#D4C9B8',
        letter: '#8B8B6F'
    };
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-10% 0px -10% 0px'
    };
    
    let currentSection = 'hero';
    
    const createOliveTransition = (sectionName) => {
        // Create olive green visual elements
        const container = document.createElement('div');
        container.className = 'olive-transition';
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.pointerEvents = 'none';
        container.style.zIndex = '900';
        
        // Different olive effects per section
        if (sectionName === 'carousel') {
            // Horizontal olive line slides across
            const line = document.createElement('div');
            line.className = 'olive-line';
            line.style.top = '50%';
            line.style.left = '0';
            container.appendChild(line);
        } else if (sectionName === 'gallery') {
            // Olive gradient wash
            const gradient = document.createElement('div');
            gradient.className = 'olive-gradient';
            container.appendChild(gradient);
            
            // Add decorative circles
            for (let i = 0; i < 3; i++) {
                const circle = document.createElement('div');
                circle.className = 'olive-circles';
                circle.style.left = (20 + i * 30) + '%';
                circle.style.top = '50%';
                circle.style.animationDelay = (i * 0.15) + 's';
                container.appendChild(circle);
            }
        } else if (sectionName === 'letter') {
            // Vertical olive lines
            for (let i = 0; i < 5; i++) {
                const line = document.createElement('div');
                line.style.position = 'absolute';
                line.style.left = (i * 25) + '%';
                line.style.top = '0';
                line.style.width = '2px';
                line.style.height = '0';
                line.style.background = '#556B2F';
                line.style.boxShadow = '0 0 15px rgba(85, 107, 47, 0.6)';
                line.style.animation = 'oliveVerticalGrow 0.8s ease-out forwards';
                line.style.animationDelay = (i * 0.1) + 's';
                container.appendChild(line);
            }
        }
        
        document.body.appendChild(container);
        
        // Remove after animation
        setTimeout(() => {
            container.remove();
        }, 1500);
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const newSection = entry.target.dataset.section;
                
                if (newSection !== currentSection && currentSection !== 'hero') {
                    // Trigger olive green transition
                    createOliveTransition(newSection);
                    
                    // Color wash effect
                    const fromColor = sectionColors[currentSection] || sectionColors.hero;
                    const toColor = sectionColors[newSection];
                    overlay.style.background = `linear-gradient(to bottom, ${fromColor} 0%, ${toColor} 100%)`;
                    overlay.style.opacity = '0.6';
                    
                    setTimeout(() => {
                        overlay.style.opacity = '0';
                    }, 800);
                }
                
                currentSection = newSection;
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
    
    // Add CSS for vertical line animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes oliveVerticalGrow {
            0% { height: 0; opacity: 0; }
            50% { opacity: 1; }
            100% { height: 100%; opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Keyboard Shortcuts Handler
let wandInstance = null;
let butterfliesInstance = null;

function initKeyboardShortcuts() {
    wandInstance = new MagicWand();
    butterfliesInstance = new Butterflies();
    
    document.addEventListener('keydown', (e) => {
        // Ignore if typing in input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        
        switch(e.key.toLowerCase()) {
            case 'w':
                if (wandInstance.active) {
                    wandInstance.deactivate();
                } else {
                    wandInstance.activate();
                }
                break;
            case 'c':
                // Trigger cat message
                const message = document.getElementById('vaaniMessage');
                if (message.style.display !== 'block') {
                    message.style.display = 'block';
                    message.style.animation = 'fadeInScale 0.4s ease-out';
                    setTimeout(() => {
                        message.style.animation = 'fadeOutScale 0.4s ease-out';
                        setTimeout(() => {
                            message.style.display = 'none';
                        }, 400);
                    }, 4000);
                }
                break;
            case 'b':
                butterfliesInstance.activate();
                break;
            case 'm':
                showMessagesModal();
                break;
            case '?':
                showHelpModal();
                break;
            case 'escape':
                // Close active easter eggs
                wandInstance.deactivate();
                butterfliesInstance.deactivate();
                const messagesModal = document.getElementById('messagesModal');
                const helpModal = document.getElementById('helpModal');
                const vaaniPhoto = document.getElementById('vaaniPhoto');
                const vaaniMessage = document.getElementById('vaaniMessage');
                
                if (vaaniPhoto.style.display === 'block') {
                    vaaniPhoto.style.display = 'none';
                }
                if (vaaniMessage.style.display === 'block') {
                    vaaniMessage.style.display = 'none';
                }
                if (messagesModal.style.display === 'block') {
                    messagesModal.style.display = 'none';
                }
                if (helpModal.style.display === 'block') {
                    helpModal.style.display = 'none';
                    const helpOverlay = document.getElementById('helpOverlay');
                    if (helpOverlay) helpOverlay.remove();
                }
                break;
        }
    });
    
    // Click handlers for scattered icons
    document.getElementById('wandTrigger').addEventListener('click', () => {
        if (wandInstance.active) {
            wandInstance.deactivate();
        } else {
            wandInstance.activate();
        }
    });
    
    document.getElementById('butterflyTrigger').addEventListener('click', () => {
        butterfliesInstance.activate();
    });
    
    document.getElementById('messagesTrigger').addEventListener('click', () => {
        showMessagesModal();
    });
    
    // Add hover effects to scattered triggers
    [wandTrigger, butterflyTrigger, messagesTrigger].forEach(trigger => {
        trigger.addEventListener('mouseenter', () => {
            trigger.style.opacity = '1';
            trigger.style.transform = 'scale(1.2) rotate(10deg)';
        });
        trigger.addEventListener('mouseleave', () => {
            trigger.style.opacity = '0.5';
            trigger.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// Initialize everything on page load
window.addEventListener('DOMContentLoaded', () => {
    // Initialize bouquet loading animation
    initBouquetLoading();
    // Initialize countdown timer
    initCountdown();
    
    // Initialize confetti
    initConfetti();
    
    // Create some initial floating hearts
    setTimeout(() => createFloatingHeart(), 1000);
    setTimeout(() => createFloatingHeart(), 2000);
    setTimeout(() => createFloatingHeart(), 3000);
    
    // Initialize carousel
    new Carousel();
    
    // Initialize gallery modal
    new GalleryModal();
    
    // Initialize love notes popup
    new LoveNotesPopup();
    
    // Initialize scroll reveal
    initScrollReveal();
    
    // Initialize parallax
    initParallax();
    
    // Initialize letter modals
    new LetterModal();
    
    // Add floral decorations
    addFloralDecorations();
    
    // Initialize Easter Eggs
    initKeyboardShortcuts();
    
    // Initialize Discovery Button
    initDiscoveryButton();
    
    // Initialize Vaani Cat Icon
    initVaaniCatPopup();
    
    // Initialize Weeknd Modal
    initWeekndModal();
    
    // Initialize Section Transitions
    initSectionTransitions();
});

// Add smooth scroll behavior for hero elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.getElementById('hero');
    
    if (heroSection && scrolled < window.innerHeight) {
        const opacity = 1 - (scrolled / window.innerHeight);
        heroSection.style.opacity = Math.max(opacity, 0.3);
    }
});