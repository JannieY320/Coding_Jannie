
const puppets = [
    { id: 1, src: './images/sicilian puppet/making 1.jpg', category: 'Making', title: 'making 1' },
    { id: 2, src: './images/sicilian puppet/making 2.jpg', category: 'Making', title: 'making 2' },
    { id: 3, src: './images/sicilian puppet/making 3.jpg', category: 'Making', title: 'making 3' },
    { id: 4, src: './images/sicilian puppet/making 4.jpg', category: 'Making', title: 'making 4' },
    { id: 5, src: './images/sicilian puppet/making 5.jpg', category: 'Making', title: 'making 5' },
    { id: 6, src: './images/sicilian puppet/making 6.jpg', category: 'Making', title: 'making 6' },
    { id: 7, src: './images/sicilian puppet/making 7.jpg', category: 'Making', title: 'making 7' },
    { id: 8, src: './images/sicilian puppet/making 8.jpg', category: 'Making', title: 'making 8' },

    { id: 9, src: './images/sicilian puppet/Image_1.jpg', category: 'Puppet', title: 'Puppet 1' },
    { id: 10, src: './images/sicilian puppet/Image_2.jpg', category: 'Puppet', title: 'Puppet 2' },
    { id: 11, src: './images/sicilian puppet/Image_3.jpg', category: 'Puppet', title: 'Puppet 3' },
    { id: 12, src: './images/sicilian puppet/Image_4.jpg', category: 'Puppet', title: 'Puppet 4' },
    { id: 13, src: './images/sicilian puppet/Image_5.jpg', category: 'Puppet', title: 'Puppet 5' },
    { id: 14, src: './images/sicilian puppet/Image_6.jpg', category: 'Puppet', title: 'Puppet 6' },
    { id: 15, src: './images/sicilian puppet/Image_7.jpg', category: 'Puppet', title: 'Puppet 7' },
    { id: 16, src: './images/sicilian puppet/Image_8.jpg', category: 'Puppet', title: 'Puppet 8' },
    { id: 17, src: './images/sicilian puppet/Image_9.jpg', category: 'Puppet', title: 'Puppet 9' },
    { id: 18, src: './images/sicilian puppet/Image_10.jpg', category: 'Puppet', title: 'Puppet 10' },

    { id: 19, src: './images/sicilian puppet/performance 1.jpg', category: 'Performance', title: 'Performance 1' },
    { id: 20, src: './images/sicilian puppet/performance 2.jpg', category: 'Performance', title: 'Performance 2' },
    { id: 21, src: './images/sicilian puppet/performance 3.jpg', category: 'Performance', title: 'Performance 3' },
    { id: 22, src: './images/sicilian puppet/performance 4.jpg', category: 'Performance', title: 'Performance 4' },
    { id: 23, src: './images/sicilian puppet/performance 5.jpg', category: 'Performance', title: 'Performance 5' },
    { id: 24, src: './images/sicilian puppet/performance 6.jpg', category: 'Performance', title: 'Performance 6' },
    { id: 25, src: './images/sicilian puppet/performance 7.jpg', category: 'Performance', title: 'Performance 7' },
    { id: 26, src: './images/sicilian puppet/performance 8.jpg', category: 'Performance', title: 'Performance 8' },

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
