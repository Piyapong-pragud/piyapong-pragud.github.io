// อัปเดตเวลาใน badge + ปีใน footer
document.addEventListener('DOMContentLoaded', () => {
  // เวลาอัปเดต
  const badge = document.getElementById('badgeUpdated');
  if (badge) {
    const t = new Date().toLocaleString();
    badge.textContent = `Portfolio • Updated ${t}`;
  }
  // ปีใน footer
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // ปุ่มพิมพ์เป็น PDF
  const printBtn = document.getElementById('btnPrint');
  if (printBtn) printBtn.addEventListener('click', () => window.print());

  // ปุ่มกลับขึ้นบน
  const toTop = document.getElementById('toTop');
  if (toTop) toTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

  // เมนูมือถือ
  const nav = document.querySelector('.nav');
  const hamburger = document.getElementById('hamburger');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => nav.classList.toggle('open'));
  }
});
function openModal(src) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = src;
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}

