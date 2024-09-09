document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.toLowerCase();
    const resultsSection = document.getElementById('results-section');
    resultsSection.innerHTML = ''; // Clear previous results

    // Mock accommodation data
    const accommodations = [
        { name: 'Ocean View Apartment', location: 'Miami', price: 120, image:'images/swimming.png' },
        { name: 'Mountain Retreat', location: 'Denver', price: 90, image:'images/spahouse.png' },
        { name: 'City Center Studio', location: 'New York', price: 150, image:'images/play.png' },
        { name: 'Beachside Bungalow', location: 'Los Angeles', price: 110, image: 'images/premiumroom.png' },
        { name: 'Suburban House', location: 'Chicago', price: 70, image: 'images/luxorius.png' },
    ];

    // Filter accommodations based on search query
    const filteredAccommodations = accommodations.filter(accommodation =>
        accommodation.name.toLowerCase().includes(query) || 
        accommodation.location.toLowerCase().includes(query)
    );
    // Display results with background images
    filteredAccommodations.forEach(accommodation => {
        const listing = document.createElement('div');
        listing.className = 'listing';
        listing.style.backgroundImage = `url(${accommodation.image})`; // Set background image
        listing.style.backgroundSize = 'cover'; // Cover the entire div
        listing.style.backgroundPosition = 'center'; // Center the image

        listing.innerHTML = `
            <div class="listing-content">
                <h2>${accommodation.name}</h2>
                <p>Location: ${accommodation.location}</p>
                <p>Price: $${accommodation.price} per night</p>
                <button class="nav-button">Book Now</button>
            </div>
        `;
        resultsSection.appendChild(listing);
    });

    // Handle case when no results found
    if (filteredAccommodations.length === 0) {
        resultsSection.innerHTML = '<p>No accommodations found. Please try a different search.</p>';
    }
});
    // Toggle the Log In dropdown when the Log In button is clicked
document.getElementById('login-button').addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click from hiding the dropdown immediately
    const loginDropdown = document.getElementById('login-dropdown');
    loginDropdown.classList.toggle('hidden');
});

// Hide the dropdown when clicking outside of it
document.addEventListener('click', (event) => {
    const loginDropdown = document.getElementById('login-dropdown');
    const isClickInside = loginDropdown.contains(event.target) || event.target.id === 'login-button';
    
    if (!isClickInside && !loginDropdown.classList.contains('hidden')) {
        loginDropdown.classList.add('hidden');
    }
});


