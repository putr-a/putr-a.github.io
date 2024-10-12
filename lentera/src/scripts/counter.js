function animateBaseCounter(cot, start, end, duration) {
    let startTimestamp = null;
    const count = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      cot.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(count);
      }
    };
    window.requestAnimationFrame(count);
  }

  const cot = document.getElementById("animateBaseCounter");

  animateBaseCounter(cot, 80, 10, 8000); // Jika ingin mengganti counter berhenti di angka berapa, ubah angka di tengah


  function BaseCounter(hit, start,  end, duration) {
    let startTimestamp = null;
    const count = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      hit.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(count);
      }
    };
    window.requestAnimationFrame(count);
  }

  const hit = document.getElementById("baseCounter");

  BaseCounter(hit, 80, 10, 8000); // Jika ingin mengganti counter berhenti di angka berapa, ubah angka di tengah

  function BaseCounterTambah(kit, start,  end, duration) {
    let startTimestamp = null;
    const count = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      kit.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(count);
      }
    };
    window.requestAnimationFrame(count);
  }

  const kit = document.getElementById("BaseCounterTambah");

  BaseCounterTambah(kit, 80, 10, 8000); // Jika ingin mengganti counter berhenti di angka berapa, ubah angka di tengah