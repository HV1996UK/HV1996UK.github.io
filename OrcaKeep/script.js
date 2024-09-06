document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.toLowerCase();
    const resultsSection = document.getElementById('results-section');
    resultsSection.innerHTML = ''; // Clear previous results

    // Mock accommodation data
    const accommodations = [
        { name: 'Ocean View Apartment', location: 'Miami', price: 120 },
        { name: 'Mountain Retreat', location: 'Denver', price: 90 },
        { name: 'City Center Studio', location: 'New York', price: 150 },
        { name: 'Beachside Bungalow', location: 'Los Angeles', price: 110 },
        { name: 'Suburban House', location: 'Chicago', price: 70 },
    ];

    // Filter accommodations based on search query
    const filteredAccommodations = accommodations.filter(accommodation =>
        accommodation.name.toLowerCase().includes(query) || 
        accommodation.location.toLowerCase().includes(query)
    );

    // Display results
    filteredAccommodations.forEach(accommodation => {
        const listing = document.createElement('div');
        listing.className = 'listing';
        listing.innerHTML = `
            <h2>${accommodation.name}</h2>
            <p>Location: ${accommodation.location}</p>
            <p>Price: $${accommodation.price} per night</p>
            <button class="book-button">Book Now</button>
        `;
        resultsSection.appendChild(listing);
    });

    // Handle case when no results found
    if (filteredAccommodations.length === 0) {
        resultsSection.innerHTML = '<p>No accommodations found. Please try a different search.</p>';
    }
});
