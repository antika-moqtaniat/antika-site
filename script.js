const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('#mainNav');
menuBtn?.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('#mainNav a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#contactForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const message = form.message.value.trim();
  const output = document.querySelector('#formMessage');

  if (!name || !phone || !message) {
    output.textContent = 'يرجى تعبئة جميع الحقول.';
    return;
  }

  // نسخة أولية: لا يوجد خادم بعد.
  output.textContent = 'تم استلام بياناتك في النموذج التجريبي. اربط النموذج بواتساب أو بريد إلكتروني عند النشر.';
  form.reset();
});
