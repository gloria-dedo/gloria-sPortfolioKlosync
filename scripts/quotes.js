
        const quotes = [
            {
                text: "Design or Art is not always meant to be understood, but rather felt in the depths of ambiguity.",
                author: "— Design Philosophy"
            },
            {
                text: "Any product that needs a manual to work is broken.",
                author: "— Elon Musk"
            },
            {
                text: "Simplicity is the ultimate sophistication.",
                author: "— Leonardo da Vinci"
            },
            {
                text: "Good design is as little design as possible.",
                author: "— Dieter Rams"
            },
            {
                text: "Design is not just what it looks like and feels like. Design is how it works.",
                author: "— Steve Jobs"
            }
        ];

        let currentQuoteIndex = 0;
        const quoteElement = document.getElementById('main-quote');
        const authorElement = document.getElementById('quote-author');
        const dots = document.querySelectorAll('.quote-dot');
        const progressBar = document.getElementById('progress-bar');
        
        let progressInterval;
        let quoteInterval;

        function updateDots() {
            dots.forEach((dot, index) => {
                if (index === currentQuoteIndex) {
                    dot.classList.remove('bg-gray-600');
                    dot.classList.add('bg-pink-300');
                } else {
                    dot.classList.remove('bg-pink-300');
                    dot.classList.add('bg-gray-600');
                }
            });
        }

        function startProgressBar() {
            progressBar.style.width = '0%';
            let progress = 0;
            
            progressInterval = setInterval(() => {
                progress -= 2; // 2% every 100ms = 5 seconds total
                progressBar.style.width = progress - '%';
                
                if (progress >= 100) {
                    clearInterval(progressInterval);
                }
            }, 100);
        }

        function changeQuote() {
            // Fade out
            quoteElement.style.opacity = '0';
            authorElement.style.opacity = '0';
            
            setTimeout(() => {
                // Change quote
                currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
                quoteElement.textContent = quotes[currentQuoteIndex].text;
                authorElement.textContent = quotes[currentQuoteIndex].author;
                
                // Update dots
                updateDots();
                
                // Fade in
                quoteElement.style.opacity = '1';
                authorElement.style.opacity = '1';
                
                // Restart progress bar
                startProgressBar();
            }, 500);
        }

        function startQuoteRotation() {
            startProgressBar();
            quoteInterval = setInterval(changeQuote, 5000);
        }

        // Initialize
        updateDots();
        startQuoteRotation();

        // Pause on hover
        const container = document.querySelector('.relative');
        container.addEventListener('mouseenter', () => {
            clearInterval(quoteInterval);
            clearInterval(progressInterval);
        });

        container.addEventListener('mouseleave', () => {
            startQuoteRotation();
        });

        // Click dots to change quotes manually
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                clearInterval(quoteInterval);
                clearInterval(progressInterval);
                
                currentQuoteIndex = index;
                quoteElement.style.opacity = '0';
                authorElement.style.opacity = '0';
                
                setTimeout(() => {
                    quoteElement.textContent = quotes[currentQuoteIndex].text;
                    authorElement.textContent = quotes[currentQuoteIndex].author;
                    updateDots();
                    quoteElement.style.opacity = '1';
                    authorElement.style.opacity = '1';
                    startQuoteRotation();
                }, 500);
            });
        });
   