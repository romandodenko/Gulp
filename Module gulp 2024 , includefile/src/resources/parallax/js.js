      // Global hero parallax effect for versions 2-5
      function initGlobalHeroParallax() {

        const heroSection = document.querySelector('.hero-section');
        if (!heroSection) {
          return;
        }

        // Variables for combined effects
        let mouseParallaxX = 0;
        let mouseParallaxY = 0;
        let randomParallaxX = 0;
        let randomParallaxY = 0;

        // Random movement animation
        let animationTime = 0;

        function updateRandomMovement() {
          animationTime += 0.01; // Speed of random animation

          // Create smooth random movement using sine waves with different frequencies (increased amplitude)
          randomParallaxX = Math.sin(animationTime * 0.7) * 30 + Math.cos(animationTime * 0.3) * 20;
          randomParallaxY = Math.cos(animationTime * 0.5) * 30 + Math.sin(animationTime * 0.8) * 20;

          // Apply combined effect (mouse + random)
          const totalX = mouseParallaxX + randomParallaxX;
          const totalY = mouseParallaxY + randomParallaxY;

          heroSection.style.setProperty('--parallax-x', totalX + 'px');
          heroSection.style.setProperty('--parallax-y', totalY + 'px');

          // Continue animation
          requestAnimationFrame(updateRandomMovement);
        }

        // Start random movement animation
        updateRandomMovement();

        // Global mouse move - apply parallax based on viewport position
        document.addEventListener('mousemove', function (e) {
          // Calculate mouse position relative to viewport center (-1 to 1)
          const centerX = window.innerWidth / 2;
          const centerY = window.innerHeight / 2;

          const mouseX = (e.clientX - centerX) / centerX;
          const mouseY = (e.clientY - centerY) / centerY;

          // Apply reduced parallax effect (max 50px movement for global effect) - inverted
          mouseParallaxX = mouseX * -50;
          mouseParallaxY = mouseY * -50;

          // Combined effect is applied in updateRandomMovement function
        });

        // Reset mouse position when mouse leaves the window (keep random movement)
        document.addEventListener('mouseleave', function () {
          mouseParallaxX = 0;
          mouseParallaxY = 0;
        });
      }

      // Initialize global parallax on page load
      window.addEventListener('load', initGlobalHeroParallax);

      // Re-initialize on resize
      window.addEventListener('resize', initGlobalHeroParallax);