
   document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("SidebarToggleBTN");
    const sidebar = document.getElementById("Sidebar");
    const footercollapse = document.getElementById("main-content");

    // toggle sidebar collapse
    btn.addEventListener("click", function () {
      sidebar.classList.toggle("collapsed");
      //alert("test");
      footercollapse.classList.toggle("footer-collapsed");
    });

    // handle active menu
    // const navLinks = document.querySelectorAll(".nav-link");

    // navLinks.forEach(link => {
    //   link.addEventListener("click", function (e) {
    //     e.preventDefault();

    //     // remove active from all
    //     navLinks.forEach(l => l.classList.remove("nav-link-active"));

    //     // add active to clicked link
    //     this.classList.add("nav-link-active");
    //   });
    // });



   const decBtn = document.getElementById("DecrementBTN");
  const incBtn = document.getElementById("IncrementBTN");
  const input = document.getElementById("InputItem");

  // debug: make sure the script is running and elements exist
  console.log("counter script loaded", { decBtn, incBtn, input });
  if (!decBtn || !incBtn || !input) {
    console.error("Missing one of the required elements (check IDs / script path).");
    return;
  }

  // initialize value if empty / invalid
  if (input.value === "" || isNaN(Number(input.value))) input.value = "1";

  function updateButtons() {
    const val = Number(input.value) || 0;
    decBtn.disabled = val <= 1; // disable when 1 or less
  }

  incBtn.addEventListener("click", (e) => {
    //alert("hi");
    e.preventDefault();
    let val = Number(input.value) || 0;
    val = val + 1;
    input.value = val;
    console.log("increment ->", val);
    updateButtons();
  });

  decBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let val = Number(input.value) || 0;
    if (val > 1) {
      val = val - 1;
      input.value = val;
      console.log("decrement ->", val);
    }
    updateButtons();
  });

  // if user types manually, keep the button state correct
  input.addEventListener("input", updateButtons);

  updateButtons();
});


(function () {
    'use strict';

    const form = document.getElementById('LoginForm');

    form.addEventListener('submit', function (event) {
      event.preventDefault(); // always stop normal form submit

      if (form.checkValidity()) {
        // ✅ If valid, redirect
        window.location.href = "index.html";
      } else {
        // ❌ If invalid, show Bootstrap validation UI
        form.classList.add('was-validated');
      }
    });
  })();


  document.addEventListener("DOMContentLoaded", function () {
  const menuLink = document.querySelector(".nav-link-active"); 
  menuLink?.addEventListener("click", function (e) {
    e.preventDefault(); // stop page reload
    alert("Menu clicked!");
  });
});

// chart js

const ctx = document.getElementById('incomeChart').getContext('2d');
    const incomeChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Income",
          data: [950, 80, 450, 500, 360, 400, 560, 780, 690, 20],
          borderColor: "purple",
          backgroundColor: "transparent",
          borderWidth: 2,
          tension: 0.3,
          pointBackgroundColor: "#fff",
          pointBorderColor: "purple",
          pointRadius: 5,
          pointHoverRadius: 6,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { stepSize: 250 }
          }
        }
      }
    });