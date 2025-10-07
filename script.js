  
//     /* JavaScript Suggestions for Interactivity */

// /* // Smooth Scroll for anchor links */
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function(e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// });

// /* // Back to Top Button */
// const backToTop = document.querySelector('.back-to-top');
// if (backToTop) {
//   window.addEventListener('scroll', () => {
//     if (window.scrollY > 300) {
//       backToTop.style.display = 'block';
//     } else {
//       backToTop.style.display = 'none';
//     }
//   });
//   backToTop.addEventListener('click', () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   });
// }

// /* // Animate elements on scroll */
// const animateOnScroll = () => {
//   const elements = document.querySelectorAll('.ta1, .dashed');
//   elements.forEach(el => {
//     const rect = el.getBoundingClientRect();
//     if (rect.top - window.innerHeight <= 0) {
//       el.classList.add('animate');
//     }
//   });
// };
// window.addEventListener('scroll', animateOnScroll);


// // form validation
// // 1. Form Validation: Basic validation can be added for the contact form.

// const form = document.querySelector('.form');
// form.addEventListener('submit', (e) => {
//   const name = form.querySelector('input[placeholder="Your Name(*)"]').value.trim();
//   const email = form.querySelector('input[placeholder="Your Email(*)"]').value.trim();
//   if (!name || !email) {
//     e.preventDefault();
//     alert('Please fill required fields.');
//   }
// });

// 2. Back to Top Button: Add smooth scroll for the back-to-top link.

// const backToTop = document.querySelector('.back-to-top');
// backToTop.addEventListener('click', (e) => {
//   e.preventDefault();
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// });
  


// // about page
// let currentTestimonial = 0;
// const testimonials = document.querySelectorAll('.subteam2');
// document.querySelector('.left').addEventListener('click', () => {
//   // Logic for previous testimonial
// });
// document.querySelector('.right').addEventListener('click', () => {
//   // Logic for next testimonial
// });
// // 3. Animate on Scroll: Add animations to elements when they come into view on scroll.


    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach((question) => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        question.classList.toggle('active');
        if (question.classList.contains('active')) {
          question.querySelector('.icon').textContent = '-';
        } else {
          question.querySelector('.icon').textContent = '+';
        }
      });
    });
  