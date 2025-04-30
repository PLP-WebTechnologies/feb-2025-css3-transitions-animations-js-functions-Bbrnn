document.addEventListener("DOMContentLoaded", () => {
  // Button animation logic
  const animateButton = document.getElementById("animateButton");
  animateButton.addEventListener("click", function () {
    animateButton.style.animation = "buttonClick 0.5s ease";

    // Store user preference in localStorage
    localStorage.setItem("buttonClicked", "true");

    // Remove the animation after it completes
    setTimeout(() => {
      animateButton.style.animation = "";
    }, 500);
  });

  // Check localStorage for user preference
  if (localStorage.getItem("buttonClicked") === "true") {
    console.log("User has clicked the button before!");
  }

  // Theme toggle logic
  const themeToggleButton = document.getElementById("themeToggle");

  function applyTheme(theme) {
    // Apply theme to body
    document.body.className = theme;
    localStorage.setItem("theme", theme); // Store the selected theme in localStorage

    // Update sections dynamically
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      section.classList.remove("light", "dark"); // Remove old theme class
      section.classList.add(theme); // Add new theme class
    });
  }

  // Event listener for theme toggle button
  themeToggleButton.addEventListener("click", () => {
    const currentTheme = document.body.className;
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(newTheme);

    // Update the toggle button icon
    themeToggleButton.textContent = newTheme === "dark" ? "☀️" : "🌙";
  });

  // Load theme from localStorage on page load
  const savedTheme = localStorage.getItem("theme") || "light"; // Default to light theme
  applyTheme(savedTheme);

  // Update the icon on page load
  themeToggleButton.textContent = savedTheme === "dark" ? "☀️" : "🌙";

  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in"); // Apply fade-in class
          } else {
            entry.target.classList.remove("fade-in"); // Optional fade-out handling
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );
  
    // Observe each section
    sections.forEach((section) => {
      observer.observe(section);
    });
  });
});
  
