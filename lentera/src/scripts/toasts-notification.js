const toasts = [
  {
    name: "Dewi Purnamasari",
    city: "Manado",
    message: "Telah membeli",
    product: "Zymuno Paket 2 Botol 274.000",
    time: "1 jam yang lalu",
  },
  {
    name: "Ahmad Janoko",
    city: "Surabaya",
    message: "Telah membeli",
    product: "Nutriflakes Paket 2 Box 274.000",
    time: "30 menit yang lalu",
  },
  {
    name: "Ananda Karina",
    city: "Bandung",
    message: "Telah membeli",
    product: "Etawaku Paket 2 Box 274.000",
    time: "3 jam yang lalu",
  },
  {
    name: "Supriadi",
    city: "Makassar",
    message: "Telah membeli",
    product: "Bio Insuleaf Paket 2 Botol 274.000",
    time: "2 jam yang lalu",
  },
];

function showToast() {
  const toastContainer = document.getElementById("toast-container");

  const randomToast = toasts[Math.floor(Math.random() * toasts.length)];

  const toastElement = document.createElement("div");
  toastElement.className = "toast";
  toastElement.setAttribute("role", "alert");
  toastElement.setAttribute("aria-live", "assertive");
  toastElement.setAttribute("aria-atomic", "true");

  toastElement.innerHTML = `
            <div class="toast-body">
            <div class="row">
                <div class="col-4">
                    <img src="src/assets/toast-img.webp"> <!-- Rekomendasi gambar resolusi 1:1 -->
                </div>
                <div class="col">
                    <button type="button" class="btn-close position-absolute top-0 end-0 p-2" data-bs-dismiss="toast" aria-label="Close"></button>
                    <p class="m-0 fw-medium">${randomToast.name}</p>
                    <p class="m-0 fw-medium">${randomToast.city}</p>
                    <p class="m-0 fw-medium">${randomToast.message} <span class="text-danger fw-bold">${randomToast.product}</span></p>
                    <p class="m-0 fw-medium">${randomToast.time}</p>
                </div>
            </div>
            </div>`;

  toastContainer.appendChild(toastElement);

  const toast = new bootstrap.Toast(toastElement, {
    delay: 4000, // toast akan otomatic hide/close setekah 4 detik
  });

  toast.show();

  toastElement.addEventListener("hidden.bs.toast", () => {
    toastElement.remove();
  });
}

setInterval(showToast, 6000); // tampilkan toast setiap 6 detik
