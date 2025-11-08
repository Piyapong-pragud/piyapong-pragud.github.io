
// เปลี่ยนข้อความ badge เมื่อโหลดหน้าเสร็จ
document.addEventListener('DOMContentLoaded', () => {
  const badge = document.querySelector('.badge');
  if (badge) {
    const t = new Date().toLocaleString();
    badge.textContent = `Submarine Cable Engineer • APG System Operations • Updated ${t}`;
    badge.title = 'ข้อความนี้ถูกอัปเดตด้วย JavaScript';
  }
});

// ปุ่มเล็ก ๆ ไว้กลับขึ้นบน (ถ้าจะใช้ ใส่ <button id="toTop">↑ Top</button> ใน HTML)
const toTopBtn = document.getElementById('toTop');
if (toTopBtn) {
  toTopBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
}
