// Data for puppets
const puppets = [
    { id: 1, src: './images/medieval puppet/painting 1.jpg', category: 'Painting', title: 'Painting 1' },
    { id: 2, src: './images/medieval puppet/painting 2.jpg', category: 'Painting', title: 'Painting 2' },
    { id: 3, src: './images/medieval puppet/painting 3.jpg', category: 'Painting', title: 'Painting 3' },
    { id: 4, src: './images/medieval puppet/painting 4.jpg', category: 'Painting', title: 'Painting 4' },
    { id: 5, src: './images/medieval puppet/painting 5.jpg', category: 'Painting', title: 'Painting 5' },
    { id: 6, src: './images/medieval puppet/painting 6.jpg', category: 'Painting', title: 'painting 6' },
    { id: 7, src: './images/medieval puppet/painting 7.jpg', category: 'Painting', title: 'painting 7' },
    { id: 8, src: './images/medieval puppet/painting 8.jpg', category: 'Painting', title: 'painting 8' },
    { id: 9, src: './images/medieval puppet/performance 1.jpg', category: 'Performance', title: 'performance 1' },
    { id: 10, src: './images/medieval puppet/performance 2.jpg', category: 'Performance', title: 'performance 2' },
    { id: 11, src: './images/medieval puppet/performance 3.jpg', category: 'Performance', title: 'performance 3' },
    { id: 12, src: './images/medieval puppet/performance 4.jpg', category: 'Performance', title: 'performance 4' },
    { id: 13, src: './images/medieval puppet/performance 5.jpg', category: 'Performance', title: 'performance 5' },
    { id: 14, src: './images/medieval puppet/performance 6.jpg', category: 'Performance', title: 'performance 6' },
    { id: 15, src: './images/medieval puppet/performance 7.jpg', category: 'Performance', title: 'performance 7' },
    { id: 16, src: './images/medieval puppet/performance 8.jpg', category: 'Performance', title: 'performance 8' },
    { id: 17, src: './images/medieval puppet/puppet 1.jpg', category: 'Puppet', title: 'puppet 1' },
    { id: 18, src: './images/medieval puppet/puppet 2.jpg', category: 'Puppet', title: 'puppet 2' },
    { id: 19, src: './images/medieval puppet/puppet 3.jpg', category: 'Puppet', title: 'puppet 3' },
    { id: 20, src: './images/medieval puppet/puppet 4.jpg', category: 'Puppet', title: 'puppet 4' },
    { id: 21, src: './images/medieval puppet/puppet 5.jpg', category: 'Puppet', title: 'puppet 5' },
    { id: 22, src: './images/medieval puppet/puppet 6.jpg', category: 'Puppet', title: 'puppet 6' },
    { id: 23, src: './images/medieval puppet/puppet 7.jpg', category: 'Puppet', title: 'puppet 7' },
    { id: 24, src: './images/medieval puppet/puppet 8.jpg', category: 'Puppet', title: 'puppet 8' },



];

// Function to render puppets
function renderGallery(filteredPuppets) {
    const gallery = document.getElementById('puppet-gallery');
    gallery.innerHTML = ''; // Clear current content

    if (filteredPuppets.length === 0) {
        gallery.innerHTML = '<p class="no-content">No puppets found in this category.</p>';
        return;
    }

    filteredPuppets.forEach(puppet => {
        const imgElement = document.createElement('img');
        imgElement.src = puppet.src;
        imgElement.alt = puppet.title;
        imgElement.title = puppet.title;
        gallery.appendChild(imgElement);
    });
}

// Function to filter puppets by category
function filterCategory(category) {
    const filteredPuppets = category === 'all'
        ? puppets
        : puppets.filter(puppet => puppet.category === category);
    renderGallery(filteredPuppets);
}

// Initial load: show all puppets
filterCategory('all');
