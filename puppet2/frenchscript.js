
const puppets = [
    { id: 1, src: './images/french puppet/Little Giant (Petite Géante) 1.jpg', category: 'Little Giant', title: 'Little Giant 1' },
    { id: 2, src: './images/french puppet/Little Giant (Petite Géante) 2.jpg', category: 'Little Giant', title: 'Little Giant 2' },
    { id: 3, src: './images/french puppet/Little Giant (Petite Géante) 3.jpg', category: 'Little Giant', title: 'Little Giant 3' },
    { id: 4, src: './images/french puppet/Little Giant (Petite Géante) 4.jpg', category: 'Little Giant', title: 'Little Giant 4' },
    { id: 5, src: './images/french puppet/Little Giant (Petite Géante) 5.jpg', category: 'Little Giant', title: 'Little Giant 5' },
    { id: 6, src: './images/french puppet/Little Giant (Petite Géante) 6.jpg', category: 'Little Giant', title: 'Little Giant 6' },
    { id: 7, src: './images/french puppet/Little Giant (Petite Géante) 7.jpg', category: 'Little Giant', title: 'Little Giant 7' },
    { id: 8, src: './images/french puppet/Little Giant (Petite Géante) 8.jpg', category: 'Little Giant', title: 'Little Giant 8' },

    { id: 9, src: './images/french puppet/Grandmother Giant (Grand-mère Géante) 1.jpg', category: 'Grandmother Giant', title: 'Grandmother Giant 1' },
    { id: 10, src: './images/french puppet/Grandmother Giant (Grand-mère Géante) 2.jpg', category: 'Grandmother Giant', title: 'Grandmother Giant 2' },
    { id: 11, src: './images/french puppet/Grandmother Giant (Grand-mère Géante) 3.jpg', category: 'Grandmother Giant', title: 'Grandmother Giant 3' },
    { id: 12, src: './images/french puppet/Grandmother Giant (Grand-mère Géante) 4.jpg', category: 'Grandmother Giant', title: 'Grandmother Giant 4' },
    { id: 13, src: './images/french puppet/Grandmother Giant (Grand-mère Géante) 5.jpg', category: 'Grandmother Giant', title: 'Grandmother Giant 5' },
    { id: 14, src: './images/french puppet/Grandmother Giant (Grand-mère Géante) 6.jpg', category: 'Grandmother Giant', title: 'Grandmother Giant 6' },
    { id: 15, src: './images/french puppet/Grandmother Giant (Grand-mère Géante) 7.jpg', category: 'Grandmother Giant', title: 'Grandmother Giant 7' },
    { id: 16, src: './images/french puppet/Grandmother Giant (Grand-mère Géante) 8.jpg', category: 'Grandmother Giant', title: 'Grandmother Giant 8' },
   
    { id: 17, src: './images/french puppet/Deep Sea Diver Giant 1.jpg', category: 'Deep Sea Diver Giant', title: 'Deep Sea Diver Giant 1' },
    { id: 18, src: './images/french puppet/Deep Sea Diver Giant 2.jpg', category: 'Deep Sea Diver Giant', title: 'Deep Sea Diver Giant 2' },
    { id: 19, src: './images/french puppet/Deep Sea Diver Giant 3.jpg', category: 'Deep Sea Diver Giant', title: 'Deep Sea Diver Giant 3' },
    { id: 20, src: './images/french puppet/Deep Sea Diver Giant 4.jpg', category: 'Deep Sea Diver Giant', title: 'Deep Sea Diver Giant 4' },
    { id: 21, src: './images/french puppet/Deep Sea Diver Giant 5.jpg', category: 'Deep Sea Diver Giant', title: 'Deep Sea Diver Giant 5' },
    { id: 22, src: './images/french puppet/Deep Sea Diver Giant 6.jpg', category: 'Deep Sea Diver Giant', title: 'Deep Sea Diver Giant 6' },
    { id: 23, src: './images/french puppet/Deep Sea Diver Giant 7.jpg', category: 'Deep Sea Diver Giant', title: 'Deep Sea Diver Giant 7' },
    { id: 24, src: './images/french puppet/Deep Sea Diver Giant 8.jpg', category: 'Deep Sea Diver Giant', title: 'Deep Sea Diver Giant 8' },

];

function renderGallery(filteredPuppets) {
    const gallery = document.getElementById('puppet-gallery');
    gallery.innerHTML = '';

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

function filterCategory(category) {
    const filteredPuppets = category === 'all'
        ? puppets
        : puppets.filter(puppet => puppet.category === category);
    renderGallery(filteredPuppets);
}

filterCategory('all');
