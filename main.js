
// Scroll to Top Function
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Show/Hide Go to Top Button
    window.onscroll = () => {
      const goTopButton = document.querySelector('.go-top');
      if (document.documentElement.scrollTop > 80) {
        goTopButton.style.display = 'block';
      } else {
        goTopButton.style.display = 'none';
      }
    };


    document.addEventListener("DOMContentLoaded", function () {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".nav-link");

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        navLinks.forEach(link => link.classList.remove("active"));
                        document.querySelector(`.nav-link[href="#${entry.target.id}"]`).classList.add("active");
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach(section => observer.observe(section));
    });

 // Loader for page loading
       window.addEventListener('load', function() {
          document.getElementById('loader').style.display = 'none';
       })









document.getElementById("contact").addEventListener("submit", function(event){
    event.preventDefault(); // Form ko submit hone se roke

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    let whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    let phoneNumber = "917430971730"; // Apna WhatsApp number likhein (91 India ke liye)
    
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank"); // WhatsApp par open karega
})


      var typed = new Typed('.multiText', {
      strings: ["Somnath.", "Web Developer.",],
      loop: true, 
      typeSpeed: 150 , 
      backSpead: 80 , 
      startDelay: 500, 
      backDelay: 1000, 
     });



    document.addEventListener("DOMContentLoaded", function () {
            const buttons = document.querySelectorAll(".filter-btn");
            const items = document.querySelectorAll(".grid-item");
            const gridContainer = document.getElementById("grid-container");

            buttons.forEach(button => {
                button.addEventListener("click", function () {
                    let filter = this.getAttribute("data-filter");

                    buttons.forEach(btn => btn.classList.remove("active"));
                    this.classList.add("active");

                    items.forEach(item => {
                        item.classList.remove("show");
                        setTimeout(() => {
                            if (filter === "all" || item.classList.contains(filter)) {
                                item.classList.add("show");
                            }
                        }, 100);
                    });

                    setTimeout(() => {
                        gridContainer.style.display = "flex";
                    }, 500);
                });
            });
        });



    document.addEventListener('DOMContentLoaded', function () {
            const skillBars = document.querySelectorAll('.skill-bar-fill');
            const observerOptions = {
                threshold: 0.5
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const skillBar = entry.target;
                        const percentageLabel = skillBar.previousElementSibling;
                        skillBar.style.width = skillBar.getAttribute('data-width');
                        percentageLabel.style.opacity = 1;
                        observer.unobserve(skillBar);
                    }
                });
            }, observerOptions);

            skillBars.forEach(bar => {
                observer.observe(bar);
            });
        });


         function showImageModal(imageSrc) {
            document.getElementById('modalImage').src = imageSrc;
         }  
