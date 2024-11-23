// script.js

// 木偶数据
const puppets = {
    medieval: {
        image: "images/medieval.png",
        description: "Medieval puppetry has origins in religious stories and moral plays, often depicting heroes and mythical creatures."
    },
    marionette: {
        image: "images/marionette.png",
        description: "Marionette puppets are controlled by strings and are popular in European theatrical performances."
    },
    bunraku: {
        image: "images/bunraku.png",
        description: "Bunraku is a form of traditional Japanese puppet theatre known for its intricate lifelike puppets."
    },
    shadow: {
        image: "images/shadow.png",
        description: "Shadow puppetry uses flat puppets against a translucent screen with a light source to create shadows."
    },
    sicilian: {
        image: "images/sicilian.png",
        description: "Sicilian puppetry is famous for its knight and folklore performances, originating in Sicily."
    },
    water: {
        image: "images/water.png",
        description: "Vietnamese water puppetry is performed over a water stage and depicts rural life and folk tales."
    }
};

// 获取页面元素
const puppetButtons = document.querySelectorAll(".puppet-btn");
const puppetImage = document.getElementById("puppetImage");
const puppetDescription = document.getElementById("puppetDescription");

// 添加点击事件到每个按钮
puppetButtons.forEach(button => {
    button.addEventListener("click", () => {
        const type = button.getAttribute("data-type");
        puppetImage.src = puppets[type].image;
        puppetDescription.textContent = puppets[type].description;
    });
});
