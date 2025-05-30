
        // Get all accordion headers
        const accordionHeaders = document.querySelectorAll('.accordion-header');

        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const accordionItem = header.parentElement;
                const accordionContent = accordionItem.querySelector('.accordion-content');
                const accordionIcon = header.querySelector('.accordion-icon');
                
                // Check if this accordion is currently open
                const isOpen = accordionContent.style.maxHeight && accordionContent.style.maxHeight !== '0px';
                
                // Toggle current accordion
                if (isOpen) {
                    // Close this accordion - show plus
                    accordionContent.style.maxHeight = '0px';
                    accordionIcon.querySelector('.plus-horizontal').style.transform = 'rotate(0deg)';
                    header.classList.remove('bg-transparent');
                } else {
                    // Open this accordion - show minus (hide vertical line)
                    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                    accordionIcon.querySelector('.plus-horizontal').style.transform = 'rotate(90deg)';
                    header.classList.add('bg-transparent');
                }
            });
        });
  