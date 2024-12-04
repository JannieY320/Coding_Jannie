const bubbles = document.querySelectorAll('.bubble');
const main = document.querySelector('main');

//  main 的尺寸，用于动态计算泡泡位置
const mainRect = main.getBoundingClientRect(); 
// main 的宽度
const mainWidth = mainRect.width; 
const mainHeight = mainRect.height;

const bubblePositions = []; 

// 初始位置和速度
bubbles.forEach((bubble, index) => {
  let randomX, randomY, overlapping;
   do {
    overlapping = false;
    randomX = Math.random() * (mainWidth - 100); // 随机水平位置，减去泡泡宽度以防止超出边界
    randomY = Math.random() * (mainHeight - 100);
    for (const pos of bubblePositions) {
      const distance = Math.sqrt(
          Math.pow(randomX - pos.x, 2) + Math.pow(randomY - pos.y, 2)
      );
      if (distance < 150) { // 泡泡的最小距离
          overlapping = true; 
          break;
      }
    }
  } while (overlapping); 
  bubblePositions.push({ x: randomX, y: randomY });

  //初始位置
  bubble.style.left = `${randomX}px`; 
  bubble.style.top = `${randomY}px`; 

    //移动
    const moveX = (Math.random() * 200 - 100).toFixed(2);  
    const moveY = (Math.random() * 200 - 100).toFixed(2);

    // 随机动画time
    const duration = (Math.random() * 6 + 6).toFixed(2) + 's';
    const floatDuration = (Math.random() * 4 + 4).toFixed(2) + 's';

    // 随机延迟
    const delay = Math.random() * 5 + 's';

    // 自定义属性
    bubble.style.setProperty('--move-x', moveX);
    bubble.style.setProperty('--move-y', moveY);
    bubble.style.setProperty('--duration', duration);
    bubble.style.setProperty('--float-duration', floatDuration);
    bubble.style.setProperty('--i', index); // 用索引控制独立延迟

    
    // 鼠标移入暂停泡泡运动并变大
    bubble.addEventListener('mouseenter', () => {
        bubble.style.animationPlayState = 'paused'; // 暂停动画
        bubble.classList.add('hovered'); // 添加变大的样式
    });

    // 鼠标移出恢复泡泡运动和大小
    bubble.addEventListener('mouseleave', () => {
        bubble.style.animationPlayState = 'running'; // 恢复动画
        bubble.classList.remove('hovered'); // 移除变大的样式
    });
});

// 鼠标移动让泡泡整体偏移
document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX / window.innerWidth - 0.5; // [-0.5, 0.5]
    const mouseY = event.clientY / window.innerHeight - 0.5; // [-0.5, 0.5]

    bubbles.forEach((bubble, index) => {
        // 根据鼠标位置计算偏移量
        const offsetX = mouseX * 50 * (index + 1) * 0.05; // 层次感增强
        const offsetY = mouseY * 50 * (index + 1) * 0.05;

        // 更新泡泡的位置偏移
        bubble.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${bubble.classList.contains('hovered') ? 1.5 : 1})`;
    });
});


const backgroundImage = document.getElementById('background-image');
const medievalImages = [
  './images/medieval puppet/41.jpg',
  './images/medieval puppet/42.jpg',
  './images/medieval puppet/43.jpg',
  './images/medieval puppet/44.jpg',
  './images/medieval puppet/Image_1.jpg',
  './images/medieval puppet/Image_2.jpg',
  './images/medieval puppet/Image_3.jpg',
  './images/medieval puppet/Image_4.jpg',
  './images/medieval puppet/Image_5.jpg',
  './images/medieval puppet/Image_6.jpg',
  './images/medieval puppet/Image_7.jpg',
  './images/medieval puppet/Image_8.jpg',
  './images/medieval puppet/Image_9.jpg',
  './images/medieval puppet/Image_10.jpg',
  './images/medieval puppet/Image_11.jpg',
];

// 动态图片切换逻辑
let imageIndex = 0; // 当前图片索引
let intervalId = null; // 定时器 ID

// 获取 Medieval Puppet 的 bubble medieval-bubble
const medievalBubble = document.getElementById('medieval-bubble');

// 鼠标悬停事件：显示背景图片并开始切换
medievalBubble.addEventListener('mouseenter', () => {
  backgroundImage.style.opacity = '1'; // 显示背景图片

  // 开始动态切换图片
  intervalId = setInterval(() => {
    backgroundImage.style.backgroundImage = `url(${medievalImages[imageIndex]})`;
    imageIndex = (imageIndex + 1) % medievalImages.length; // 循环切换图片
  }, 2000); // 每隔 2 秒切换一次图片
});

// 鼠标移开事件：隐藏背景图片并停止切换
medievalBubble.addEventListener('mouseleave', () => {
  backgroundImage.style.opacity = '0'; // 隐藏背景图片
  clearInterval(intervalId); // 停止图片切换
  intervalId = null;
});







