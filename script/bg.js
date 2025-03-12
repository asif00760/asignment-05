const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#33FFF5','#F5FF33',]
  let currentIndex = 0
  document.getElementById('bg-btn').addEventListener('click', function() {
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length
  });