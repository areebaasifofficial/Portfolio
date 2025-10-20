// Glowing Curser
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});
// Get elements
const popup = document.getElementById("popup");
const freelancerBtn = document.getElementById("freelancerBtn");
const closePopup = document.getElementById("closePopup");

// Show popup
freelancerBtn.addEventListener("click", () => {
  popup.style.display = "block";
});

// Hide popup
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

// Hide when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
const toggle = document.getElementById('menu-toggle');
const navItems = document.getElementById('nav-items');

toggle.addEventListener('click', () => {
  navItems.classList.toggle('show');
});
const chartData = {
  HTML: [0, 20, 40, 60, 80, 110],
  CSS: [0, 20, 40, 60, 80, 110],
  JavaScript: [0, 20, 40, 60, 80, 110],
  labels: ['2020', '2021', '2022', '2023', '2024', '2025']
};

const chartColors = {
  HTML: { main: '#25D366', point: '#3ee67a' },
  CSS: { main: '#8A2BE2', point: '#B266FF' },
  JavaScript: { main: '#00BFFF', point: '#668fffff' }
};

function createAnimatedWavyChart(id, label, colors) {
  const ctx = document.getElementById(id).getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: chartData.labels,
      datasets: [{
        label,
        data: chartData[label],
        borderColor: colors.main,
        backgroundColor: colors.main + '22',
        fill: true,
        tension: 0.75, // 🌊 Smooth curve
        pointBackgroundColor: colors.point,
        borderWidth: 3
      }]
    },
    options: {
      responsive: true,
      animation: {
        duration: 3500,
        easing: 'easeInOutQuart'
      },
      elements: {
        line: {
          borderJoinStyle: "round",
          borderCapStyle: "round"
        },
        point: {
          radius: 5,
          hoverRadius: 7
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 120,
          ticks: { color: '#ccc' },
          grid: { color: '#333' }
        },
        x: {
          ticks: { color: '#ccc' },
          grid: { color: '#333' }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => ctx.parsed.y + "%"
          }
        }
      },
      datasets: { clip: false }
    }
  });
}

createAnimatedWavyChart('htmlChart', 'HTML', chartColors.HTML);
createAnimatedWavyChart('cssChart', 'CSS', chartColors.CSS);
createAnimatedWavyChart('jsChart', 'JavaScript', chartColors.JavaScript);

  const btn = document.getElementById("graph-btn");
  const graph = document.getElementById("graph");
  const skills = document.getElementById("sk");

  btn.addEventListener("click", () => {
    if (graph.style.display === "none") {
      // Show Graph, Hide Skills
      graph.style.display = "block";
      skills.style.display = "none";
      btn.textContent = "Hide Graph";
    } else {
      // Hide Graph, Show Skills
      graph.style.display = "none";
      skills.style.display = "block";
      btn.textContent = "Show Graph";
    }
  });

