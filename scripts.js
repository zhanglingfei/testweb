// JavaScript for team bio toggle
document.addEventListener('DOMContentLoaded', function() {
    // Add toggle buttons to each team card
    const teamCards = document.querySelectorAll('.team-card');
    
    teamCards.forEach(card => {
        const bio = card.querySelector('.team-bio');
        if (!bio) return;
        
        // Create toggle button
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'bio-toggle';
        toggleBtn.textContent = 'Read More';
        
        // Insert button before socials
        const socials = card.querySelector('.team-socials');
        card.querySelector('.team-info').insertBefore(toggleBtn, socials);
        
        // Add click event
        toggleBtn.addEventListener('click', function() {
            const isExpanded = card.classList.toggle('expanded');
            toggleBtn.textContent = isExpanded ? 'Read Less' : 'Read More';
        
// Log visit with IP and timestamp to LogSnag
fetch('https://api.ipify.org?format=json')
  .then(res => res.json())
  .then(data => {
    const ip = data.ip;
    fetch('https://api.logsnag.com/v1/log', {
      method: 'POST',
      headers: {
        'Authorization': '4e77ff09957c825a9e7e9c444e8e0833',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        project: 'axionintelligence',
        channel: 'visits',
        event: 'Page Visit',
        description: `New visitor from ${ip}`,
        icon: '👁',
        notify: false
      })
    }).then(() => console.log("Visit logged to LogSnag"))
      .catch(err => console.error("LogSnag error:", err));
  })
  .catch(err => console.error("IP fetch error:", err));

});
    
// Log visit with IP and timestamp to LogSnag
fetch('https://api.ipify.org?format=json')
  .then(res => res.json())
  .then(data => {
    const ip = data.ip;
    fetch('https://api.logsnag.com/v1/log', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_API_TOKEN',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        project: 'your-project',
        channel: 'visits',
        event: 'Page Visit',
        description: `New visitor from ${ip}`,
        icon: '👁',
        notify: false
      })
    }).then(() => console.log("Visit logged to LogSnag"))
      .catch(err => console.error("LogSnag error:", err));
  })
  .catch(err => console.error("IP fetch error:", err));

});
    
    // Optional: Add smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                
// Log visit with IP and timestamp to LogSnag
fetch('https://api.ipify.org?format=json')
  .then(res => res.json())
  .then(data => {
    const ip = data.ip;
    fetch('https://api.logsnag.com/v1/log', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_API_TOKEN',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        project: 'your-project',
        channel: 'visits',
        event: 'Page Visit',
        description: `New visitor from ${ip}`,
        icon: '👁',
        notify: false
      })
    }).then(() => console.log("Visit logged to LogSnag"))
      .catch(err => console.error("LogSnag error:", err));
  })
  .catch(err => console.error("IP fetch error:", err));

});
            }
        
// Log visit with IP and timestamp to LogSnag
fetch('https://api.ipify.org?format=json')
  .then(res => res.json())
  .then(data => {
    const ip = data.ip;
    fetch('https://api.logsnag.com/v1/log', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_API_TOKEN',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        project: 'your-project',
        channel: 'visits',
        event: 'Page Visit',
        description: `New visitor from ${ip}`,
        icon: '👁',
        notify: false
      })
    }).then(() => console.log("Visit logged to LogSnag"))
      .catch(err => console.error("LogSnag error:", err));
  })
  .catch(err => console.error("IP fetch error:", err));

});
    
// Log visit with IP and timestamp to LogSnag
fetch('https://api.ipify.org?format=json')
  .then(res => res.json())
  .then(data => {
    const ip = data.ip;
    fetch('https://api.logsnag.com/v1/log', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_API_TOKEN',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        project: 'your-project',
        channel: 'visits',
        event: 'Page Visit',
        description: `New visitor from ${ip}`,
        icon: '👁',
        notify: false
      })
    }).then(() => console.log("Visit logged to LogSnag"))
      .catch(err => console.error("LogSnag error:", err));
  })
  .catch(err => console.error("IP fetch error:", err));

});
    
    // Optional: Add header background on scroll
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(10, 25, 47, 0.95)';
                header.style.boxShadow = '0 10px 30px -10px rgba(0, 0, 0, 0.3)';
            } else {
                header.style.backgroundColor = 'rgba(10, 25, 47, 0.9)';
                header.style.boxShadow = 'none';
            }
        
// Log visit with IP and timestamp to LogSnag
fetch('https://api.ipify.org?format=json')
  .then(res => res.json())
  .then(data => {
    const ip = data.ip;
    fetch('https://api.logsnag.com/v1/log', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_API_TOKEN',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        project: 'your-project',
        channel: 'visits',
        event: 'Page Visit',
        description: `New visitor from ${ip}`,
        icon: '👁',
        notify: false
      })
    }).then(() => console.log("Visit logged to LogSnag"))
      .catch(err => console.error("LogSnag error:", err));
  })
  .catch(err => console.error("IP fetch error:", err));

});
    }
    
    // Optional: Add animation for elements when they come into view
    const animateElements = document.querySelectorAll('.animate');
    
    if (animateElements.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };
        
        const observer = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            
// Log visit with IP and timestamp to LogSnag
fetch('https://api.ipify.org?format=json')
  .then(res => res.json())
  .then(data => {
    const ip = data.ip;
    fetch('https://api.logsnag.com/v1/log', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_API_TOKEN',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        project: 'your-project',
        channel: 'visits',
        event: 'Page Visit',
        description: `New visitor from ${ip}`,
        icon: '👁',
        notify: false
      })
    }).then(() => console.log("Visit logged to LogSnag"))
      .catch(err => console.error("LogSnag error:", err));
  })
  .catch(err => console.error("IP fetch error:", err));

});
        }, observerOptions);
        
        animateElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(element);
        
// Log visit with IP and timestamp to LogSnag
fetch('https://api.ipify.org?format=json')
  .then(res => res.json())
  .then(data => {
    const ip = data.ip;
    fetch('https://api.logsnag.com/v1/log', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_API_TOKEN',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        project: 'your-project',
        channel: 'visits',
        event: 'Page Visit',
        description: `New visitor from ${ip}`,
        icon: '👁',
        notify: false
      })
    }).then(() => console.log("Visit logged to LogSnag"))
      .catch(err => console.error("LogSnag error:", err));
  })
  .catch(err => console.error("IP fetch error:", err));

});
    }

// Log visit with IP and timestamp to LogSnag
fetch('https://api.ipify.org?format=json')
  .then(res => res.json())
  .then(data => {
    const ip = data.ip;
    fetch('https://api.logsnag.com/v1/log', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_API_TOKEN',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        project: 'your-project',
        channel: 'visits',
        event: 'Page Visit',
        description: `New visitor from ${ip}`,
        icon: '👁',
        notify: false
      })
    }).then(() => console.log("Visit logged to LogSnag"))
      .catch(err => console.error("LogSnag error:", err));
  })
  .catch(err => console.error("IP fetch error:", err));

});