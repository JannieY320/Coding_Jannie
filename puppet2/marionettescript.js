// Data for puppets
const puppets = [
    { id: 1, src: './images/marionette puppet/control tricks 1.jpg', category: 'Control Tricks', title: 'control tricks 1' },
    { id: 2, src: './images/marionette puppet/control tricks 2.jpg', category: 'Control Tricks', title: 'control tricks 2' },
    { id: 3, src: './images/marionette puppet/control tricks 3.jpg', category: 'Control Tricks', title: 'control tricks 3' },
    { id: 4, src: './images/marionette puppet/control tricks 4.jpg', category: 'Control Tricks', title: 'control tricks 4' },
    { id: 5, src: './images/marionette puppet/control tricks 5.jpg', category: 'Control Tricks', title: 'control tricks 5' },
    { id: 6, src: './images/marionette puppet/control tricks 6.jpg', category: 'Control Tricks', title: 'control tricks 6' },
    { id: 7, src: './images/marionette puppet/control tricks 7.jpg', category: 'Control Tricks', title: 'control tricks 7' },
    { id: 8, src: './images/marionette puppet/control tricks 8.jpg', category: 'Control Tricks', title: 'control tricks 8' },

    { id: 9, src: './images/marionette puppet/Image_2.jpg', category: 'Puppet', title: 'Puppet 2' },
    { id: 10, src: './images/marionette puppet/Image_3.jpg', category: 'Puppet', title: 'Puppet 3' },
    { id: 11, src: './images/marionette puppet/Image_4.jpg', category: 'Puppet', title: 'Puppet 4' },
    { id: 12, src: './images/marionette puppet/Image_5.jpg', category: 'Puppet', title: 'Puppet 5' },
    { id: 13, src: './images/marionette puppet/Image_6.jpg', category: 'Puppet', title: 'Puppet 6' },
    { id: 14, src: './images/marionette puppet/Image_7.jpg', category: 'Puppet', title: 'Puppet 7' },
    { id: 15, src: './images/marionette puppet/Image_8.jpg', category: 'Puppet', title: 'Puppet 8' },
    { id: 16, src: './images/marionette puppet/Image_9.jpg', category: 'Puppet', title: 'Puppet 9' },
    { id: 17, src: './images/marionette puppet/Image_10.jpg', category: 'Puppet', title: 'Puppet 10' },
    { id: 18, src: './images/marionette puppet/Image_11.jpg', category: 'Puppet', title: 'Puppet 11' },

    { id: 19, src: './images/marionette puppet/making 1.jpg', category: 'Making', title: 'Making 1' },
    { id: 20, src: './images/marionette puppet/making 2.jpg', category: 'Making', title: 'Making 2' },
    { id: 21, src: './images/marionette puppet/making 3.jpg', category: 'Making', title: 'Making 3' },
    { id: 22, src: './images/marionette puppet/making 4.jpg', category: 'Making', title: 'Making 4' },
    { id: 23, src: './images/marionette puppet/making 5.jpg', category: 'Making', title: 'Making 5' },
    { id: 24, src: './images/marionette puppet/making 6.jpg', category: 'Making', title: 'Making 6' },
    { id: 25, src: './images/marionette puppet/making 7.jpg', category: 'Making', title: 'Making 7' },
    { id: 26, src: './images/marionette puppet/making 8.jpg', category: 'Making', title: 'Making 8' },
    
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
