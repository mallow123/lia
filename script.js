function triggerEffect() {
  // 3D Effect on Image
  const image = document.querySelector('.image');
  image.style.transform = 'rotateY(180deg)';
  image.style.transition = 'transform 0.6s ease-in-out';

  // Change the text color and size
  const message = document.querySelector('.message');
  message.innerHTML = '💖 Im gonna touch you lia! ';
  message.style.color = '#FF66B2';
  message.style.fontSize = '2em';
  message.style.transition = 'font-size 0.6s, color 0.6s ease';

  // Button pops and changes color
  const btn = document.querySelector('.btn');
  btn.innerHTML = 'Aww, you look adorable! 💕';
  btn.style.transform = 'scale(1.1)';
  btn.style.transition = 'transform 0.3s ease-in-out';
  btn.style.backgroundColor = '#FF1493';
}
