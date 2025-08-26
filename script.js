// بيانات الخدمات (13 خدمة)
const services = [
  { id: 1, name: 'استشارة', description: 'استشارة طبية لتقييم حالة الأسنان.', image: 'https://via.placeholder.com/300x240?text=استشارة', duration: '30 دقيقة', benefits: 'تشخيص دقيق، خطة علاج مخصصة.', details: 'استشارات شاملة مع أطباء متخصصين لتقييم حالة الأسنان ووضع خطة علاج مناسبة.', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', images: ['https://via.placeholder.com/600x400?text=صورة+1', 'https://via.placeholder.com/600x400?text=صورة+2', 'https://via.placeholder.com/600x400?text=صورة+3'] },
  { id: 2, name: 'تنظيف الأسنان', description: 'إزالة الجير والبقع.', image: 'https://via.placeholder.com/300x240?text=تنظيف', duration: '30 دقيقة', benefits: 'منع التسوس، تحسين صحة اللثة.', details: 'تنظيف عميق باستخدام الموجات فوق الصوتية لإزالة الجير والبقع.', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', images: ['https://via.placeholder.com/600x400?text=صورة+1', 'https://via.placeholder.com/600x400?text=صورة+2', 'https://via.placeholder.com/600x400?text=صورة+3'] },
  { id: 3, name: 'تبييض الأسنان', description: 'تبييض الأسنان بأمان وسرعة.', image: 'https://via.placeholder.com/300x240?text=تبييض', duration: '1 ساعة', benefits: 'ابتسامة مشرقة وجذابة.', details: 'تبييض باستخدام تقنية الليزر الآمنة للحصول على ابتسامة مشرقة.', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', images: ['https://via.placeholder.com/600x400?text=صورة+1', 'https://via.placeholder.com/600x400?text=صورة+2', 'https://via.placeholder.com/600x400?text=صورة+3'] },
  { id: 4, name: 'توريد اللثة', description: 'علاج تصبغ اللثة.', image: 'https://via.placeholder.com/300x240?text=توريد', duration: '1 ساعة', benefits: 'لثة صحية ومظهر جمالي.', details: 'توريد اللثة باستخدام الليزر لتحسين اللون والمظهر.', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', images: ['https://via.placeholder.com/600x400?text=صورة+1', 'https://via.placeholder.com/600x400?text=صورة+2', 'https://via.placeholder.com/600x400?text=صورة+3'] },
  { id: 5, name: 'حشو عادي', description: 'حشوات لعلاج التسوس.', image: 'https://via.placeholder.com/300x240?text=حشو', duration: '45 دقيقة', benefits: 'إصلاح التسوس بسرعة.', details: 'حشوات متينة وآمنة لعلاج التسوس.', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', images: ['https://via.placeholder.com/600x400?text=صورة+1', 'https://via.placeholder.com/600x400?text=صورة+2', 'https://via.placeholder.com/600x400?text=صورة+3'] },
  { id: 6, name: 'حشو تجميلي أمامي', description: 'حشوات للأسنان الأمامية.', image: 'https://via.placeholder.com/300x240?text=حشو+تجميلي', duration: '1 ساعة', benefits: 'مظهر طبيعي وجميل.', details: 'حشوات مطابقة للون الأسنان لتحسين المظهر.', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', images: ['https://via.placeholder.com/600x400?text=صورة+1', 'https://via.placeholder.com/600x400?text=صورة+2', 'https://via.placeholder.com/600x400?text=صورة+3'] },
  { id: 7, name: 'زراعة الأسنان', description: 'زراعة أسنان دائمة.', image: 'https://via.placeholder.com/300x240?text=زراعة', duration: '3-6 أشهر', benefits: 'حل دائم للأسنان المفقودة.', details: 'زراعة بتقنية ثلاثية الأبعاد لضمان الدقة.', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', images: ['https://via.placeholder.com/600x400?text=صورة+1', 'https://via.placeholder.com/600x400?text=صورة+2', 'https://via.placeholder.com/600x400?text=صورة+3'] },
  { id: 8, name: 'تركيبات ثابتة', description: 'تركيبات دائمة.', image: 'https://via.placeholder.com/300x240?text=تركيبات', duration: '2-4 أسابيع', benefits: 'متانة ومظهر طبيعي.', details: 'تركيبات زيركون عالية الجودة.', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', images: ['https://via.placeholder.com/600x400?text=صورة+1', 'https://via.placeholder.com/600x400?text=صورة+2', 'https://via.placeholder.com/600x400?text=صورة+3'] },
  { id: 9, name: 'تركيبات متحركة', description: 'تركيبات قابلة للإزالة.', image: 'https://via.placeholder.com/300x240?text=تركيبات+متحركة', duration: '1-2 أسابيع', benefits: 'راحة وسهولة الاستخدام.', details: 'تركيبات مرنة ومريحة.', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', images: ['https://via.placeholder.com/600x400?text=صورة+1', 'https://via.placeholder.com/600x400?text=صورة+2', 'https://via.placeholder.com/600x400?text=صورة+3'] },
  { id: 10, name: 'إعادة حشو عصب', description: 'إعادة علاج العصب.', image: 'https://via.placeholder.com/300x240?text=إعادة+عصب', duration: '1-2 ساعة', benefits: 'إصلاح العلاج السابق.', details: 'إعادة علاج دقيق لقنوات العصب.', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', images: ['https://via.placeholder.com/600x400?text=صورة+1', 'https://via.placeholder.com/600x400?text=صورة+2', 'https://via.placeholder.com/600x400?text=صورة+3'] },
  { id: 11, name: 'علاج الجذور', description: 'علاج جذور الأسنان.', image: 'https://via.placeholder.com/300x240?text=جذور', duration: '1-2 ساعة', benefits: 'إزالة الألم وتحسين الصحة.', details: 'علاج متقدم لجذور الأسنان.', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', images: ['https://via.placeholder.com/600x400?text=صورة+1', 'https://via.placeholder.com/600x400?text=صورة+2', 'https://via.placeholder.com/600x400?text=صورة+3'] },
  { id: 12, name: 'خلع عادي', description: 'خلع الأسنان بأمان.', image: 'https://via.placeholder.com/300x240?text=خلع', duration: '30 دقيقة', benefits: 'راحة فورية.', details: 'خلع بتقنيات حديثة وآمنة.', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', images: ['https://via.placeholder.com/600x400?text=صورة+1', 'https://via.placeholder.com/600x400?text=صورة+2', 'https://via.placeholder.com/600x400?text=صورة+3'] },
  { id: 13, name: 'خلع جراحي', description: 'خلع الأسنان المعقدة.', image: 'https://via.placeholder.com/300x240?text=خلع+جراحي', duration: '1 ساعة', benefits: 'حل المشكلات المعقدة.', details: 'جراحة دقيقة للأسنان المتضررة.', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', images: ['https://via.placeholder.com/600x400?text=صورة+1', 'https://via.placeholder.com/600x400?text=صورة+2', 'https://via.placeholder.com/600x400?text=صورة+3'] }
];

// مواعيد الأسبوع
const weekSchedule = {
  'الأحد': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
  'الإثنين': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
  'الثلاثاء': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
  'الأربعاء': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
  'الخميس': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
  'الجمعة': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
  'السبت': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م']
};

// إخفاء الـ loader وإشعار ترحيبي
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.style.opacity = '0';
  setTimeout(() => {
    loader.style.display = 'none';
  }, 500);

  Swal.fire({
    title: 'مرحبًا بكم في مركز ريفولي لطب الأسنان!',
    text: 'اكتشف خدماتنا المتقدمة واحجز موعدك الآن للحصول على ابتسامة مثالية.',
    icon: 'info',
    confirmButtonText: 'موافق',
    confirmButtonColor: '#4FC3F7'
  });

  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-sun"></i>';
  }

  AOS.init({
    duration: 1200,
    once: true,
    offset: 100
  });

  displayServices();
  displaySchedule();
  initGallery();
  initMap();

  // Back to Top Button
  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// قائمة الهامبرغر
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// تبديل الوضع النهاري/الليلي
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'dark');
  } else {
    document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'light');
  }
});

// عرض الخدمات
const servicesContainer = document.getElementById('services-container');
const serviceSelect = document.getElementById('service-select');

function displayServices() {
  servicesContainer.innerHTML = '';
  serviceSelect.innerHTML = '<option value="">اختر الخدمة</option>';
  services.forEach(service => {
    const serviceCard = document.createElement('div');
    serviceCard.classList.add('service-card');
    serviceCard.setAttribute('data-aos', 'fade-up');
    serviceCard.innerHTML = `
      <img src="${service.image}" alt="${service.name} - مركز ريفولي" loading="lazy">
      <h3>${service.name}</h3>
      <div class="details">
        <p>${service.description}</p>
        <p><strong>المدة:</strong> ${service.duration}</p>
        <p><strong>الفوائد:</strong> ${service.benefits}</p>
        <button class="more-info neon-button" onclick="showServiceDetails(${service.id})">مزيد من المعلومات</button>
      </div>
    `;
    servicesContainer.appendChild(serviceCard);

    const option = document.createElement('option');
    option.value = service.id;
    option.textContent = service.name;
    serviceSelect.appendChild(option);
  });
}

// نافذة تفاصيل الخدمة
function showServiceDetails(serviceId) {
  const service = services.find(s => s.id === serviceId);
  if (!service) {
    Swal.fire('خطأ', 'الخدمة غير موجودة', 'error');
    return;
  }
  const sliderId = `swiper-${service.id}`;
  Swal.fire({
    title: service.name,
    html: `
      <p style="font-size: 1.2rem; margin-bottom: 1rem;">${service.details}</p>
      <iframe src="${service.video}" frameborder="0" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="swiper" id="${sliderId}">
        <div class="swiper-wrapper">
          ${service.images.map(img => `<div class="swiper-slide"><img src="${img}" alt="${service.name}" onclick="showFullImage('${img}')"></div>`).join('')}
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-pagination"></div>
      </div>
      <button class="cta-button neon-button" onclick="bookService(${service.id})">احجز الآن</button>
    `,
    showConfirmButton: false,
    showCloseButton: true,
    width: '1000px',
    didOpen: () => {
      new Swiper(`#${sliderId}`, {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });
    },
    customClass: {
      popup: 'swal2-service-details'
    }
  });
}

// عرض الصورة بالحجم الكامل
function showFullImage(imageUrl) {
  Swal.fire({
    imageUrl: imageUrl,
    imageAlt: 'صورة بالحجم الكامل',
    showConfirmButton: false,
    showCloseButton: true,
    background: 'rgba(0, 0, 0, 0.9)',
    imageWidth: '80%',
    imageHeight: 'auto',
  });
}

// التوجيه إلى نموذج الحجز مع اختيار الخدمة
function bookService(serviceId) {
  const serviceSelect = document.getElementById('service-select');
  const bookingSection = document.getElementById('booking');

  if (!serviceSelect || !bookingSection) {
    console.error('Error: serviceSelect or bookingSection not found');
    Swal.fire('خطأ', 'قسم الحجز أو قائمة الخدمات غير موجودة', 'error');
    return;
  }

  // تحديد الخدمة
  serviceSelect.value = serviceId;

  // إغلاق النافذة
  Swal.close();

  // التمرير إلى قسم الحجز مع تأخير قصير لضمان إغلاق النافذة
  setTimeout(() => {
    bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    console.log(`bookService: Selected service ID ${serviceId}, scrolled to booking section`);

    // التحقق من تحديد الخدمة
    if (serviceSelect.value == serviceId) {
      console.log(`Service ${serviceId} successfully selected in dropdown`);
      // تحديث حالة زر التأكيد بناءً على اختيار موعد
      document.getElementById('confirm-booking').disabled = !selectedSlot;
    } else {
      console.error(`Failed to select service ID ${serviceId} in dropdown`);
      Swal.fire('خطأ', 'لم يتم تحديد الخدمة بشكل صحيح', 'error');
    }
  }, 300);
}

// معرض الصور
function initGallery() {
  new Swiper('.gallery-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  document.querySelectorAll('.gallery-slider .swiper-slide img').forEach(img => {
    img.addEventListener('click', () => showFullImage(img.src));
  });
}

// عرض جدول المواعيد
let selectedSlot = null;
function displaySchedule() {
  const scheduleBody = document.getElementById('schedule-body');
  const times = ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'];
  scheduleBody.innerHTML = '';
  times.forEach(time => {
    const row = document.createElement('tr');
    ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'].forEach(day => {
      const button = document.createElement('button');
      button.textContent = time;
      button.classList.add('available');
      button.addEventListener('click', () => selectSlot(day, time, button));
      const td = document.createElement('td');
      td.appendChild(button);
      row.appendChild(td);
    });
    scheduleBody.appendChild(row);
  });
}

// اختيار موعد
function selectSlot(day, time, button) {
  const serviceSelect = document.getElementById('service-select');
  if (!serviceSelect.value) {
    Swal.fire('خطأ', 'يرجى اختيار الخدمة أولاً', 'error');
    return;
  }

  document.querySelectorAll('.schedule-table button.selected').forEach(btn => {
    btn.classList.remove('selected');
    btn.classList.add('available');
  });

  button.classList.remove('available');
  button.classList.add('selected');
  selectedSlot = { day, time };
  document.getElementById('confirm-booking').disabled = false;

  Swal.fire({
    title: 'تم اختيار الموعد',
    text: `يوم ${day} الساعة ${time}`,
    icon: 'info',
    confirmButtonText: 'موافق',
    confirmButtonColor: '#4FC3F7'
  });
}

// إلغاء اختيار الموعد
document.getElementById('clear-selection').addEventListener('click', () => {
  document.querySelectorAll('.schedule-table button.selected').forEach(btn => {
    btn.classList.remove('selected');
    btn.classList.add('available');
  });
  selectedSlot = null;
  document.getElementById('confirm-booking').disabled = true;
  Swal.fire('تم الإلغاء', 'تم إلغاء اختيار الموعد', 'info');
});

// تأكيد الحجز وإرسال إلى واتساب
document.getElementById('confirm-booking').addEventListener('click', () => {
  const name = document.getElementById('patient-name').value.trim();
  const phone = document.getElementById('patient-phone').value.trim();
  const serviceId = document.getElementById('service-select').value;

  if (!name || !phone || !serviceId || !selectedSlot) {
    Swal.fire('خطأ', 'يرجى إدخال جميع البيانات واختيار موعد', 'error');
    return;
  }

  if (!/^\d{11}$/.test(phone)) {
    Swal.fire('خطأ', 'يرجى إدخال رقم هاتف صحيح (11 رقم)', 'error');
    return;
  }

  const service = services.find(s => s.id === parseInt(serviceId));
  const bookingDate = new Date();
  bookingDate.setDate(bookingDate.getDate() + 7);
  const formattedDate = bookingDate.toLocaleDateString('ar-EG', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const message = encodeURIComponent(
    `حجز جديد:\n` +
    `الاسم: ${name}\n` +
    `رقم الهاتف: ${phone}\n` +
    `الخدمة: ${service.name}\n` +
    `اليوم: ${selectedSlot.day}\n` +
    `الساعة: ${selectedSlot.time}\n` +
    `التاريخ: ${formattedDate}`
  );

  Swal.fire({
    title: 'ملخص الحجز',
    html: `
      <p><strong>الاسم:</strong> ${name}</p>
      <p><strong>رقم الهاتف:</strong> ${phone}</p>
      <p><strong>الخدمة:</strong> ${service.name}</p>
      <p><strong>اليوم:</strong> ${selectedSlot.day}</p>
      <p><strong>الساعة:</strong> ${selectedSlot.time}</p>
      <p><strong>التاريخ:</strong> ${formattedDate}</p>
    `,
    icon: 'success',
    iconHtml: '<i class="fab fa-whatsapp"></i>',
    confirmButtonText: 'إرسال إلى واتساب',
    cancelButtonText: 'إلغاء',
    showCancelButton: true,
    confirmButtonColor: '#4FC3F7',
    cancelButtonColor: '#D32F2F'
  }).then(result => {
    if (result.isConfirmed) {
      window.open(`https://wa.me/+201234567890?text=${message}`, '_blank');
      document.getElementById('patient-name').value = '';
      document.getElementById('patient-phone').value = '';
      document.getElementById('service-select').value = '';
      selectedSlot = null;
      document.getElementById('confirm-booking').disabled = true;
      document.querySelectorAll('.schedule-table button.selected').forEach(btn => {
        btn.classList.remove('selected');
        btn.classList.add('available');
      });
      Swal.fire({
        title: 'تم الحجز!',
        text: 'تم إرسال الحجز عبر واتساب.',
        icon: 'success',
        iconHtml: '<i class="fab fa-whatsapp"></i>',
        confirmButtonText: 'موافق',
        confirmButtonColor: '#4FC3F7'
      });
    }
  });
});

// تهيئة الخريطة
function initMap() {
  mapboxgl.accessToken = 'pk.eyJ1IjoiYWhtYXR5YTAwIiwiYSI6ImNtYWJxbTFoNDExNXEyanIwa2xxcmJwdWoifQ.0WU0DyTqRl9TjV-Go2O2LA'; // استبدل بمفتاحك
  const revoliLocation = [31.2357, 30.0511]; // مركز ريفولي
  const highCourt = [31.2358, 30.0510]; // دار القضاء العالي
  const talaatHarb = [31.2345, 30.0500]; // ميدان طلعت حرب
  const egyptianMuseum = [31.2335, 30.0480]; // المتحف المصري

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    center: revoliLocation,
    zoom: 16,
    pitch: 60, // زاوية ثلاثية الأبعاد
    bearing: -30,
    antialias: true
  });

  map.on('load', () => {
    // إضافة علامات للأماكن الأربعة مع نصوص مخصصة
    const markers = [
      {
        coordinates: revoliLocation,
        title: 'مركز ريفولي لطب الأسنان',
        description: 'أعلى سينما ريفولي، وسط البلد',
        titleStyle: 'font-size: 1.4rem; font-weight: bold; color: #4FC3F7;'
      },
      {
        coordinates: highCourt,
        title: 'دار القضاء العالي',
        description: 'أمام مركز ريفولي',
        titleStyle: 'font-size: 1rem; font-weight: normal; color: #fff;'
      },
      {
        coordinates: talaatHarb,
        title: 'ميدان طلعت حرب',
        description: 'بالقرب من مركز ريفولي',
        titleStyle: 'font-size: 1rem; font-weight: normal; color: #fff;'
      },
      {
        coordinates: egyptianMuseum,
        title: 'المتحف المصري',
        description: 'بالقرب من وسط البلد',
        titleStyle: 'font-size: 1rem; font-weight: normal; color: #fff;'
      }
    ];

    markers.forEach(marker => {
      new mapboxgl.Marker({ color: '#4FC3F7', scale: 1.2 })
        .setLngLat(marker.coordinates)
        .setPopup(new mapboxgl.Popup().setHTML(`
          <div style="text-align: center; background: rgba(0, 0, 0, 0.8); color: #fff; padding: 10px; border-radius: 5px;">
            <h3 style="${marker.titleStyle}">${marker.title}</h3>
            <p style="font-size: 0.9rem;">${marker.description}</p>
          </div>
        `))
        .addTo(map);
    });

    // تأثير النبض لعلامة مركز ريفولي
    const revoliMarker = new mapboxgl.Marker({ color: '#4FC3F7', scale: 1.2 })
      .setLngLat(revoliLocation)
      .addTo(map);
    let scale = 1.2;
    setInterval(() => {
      scale = scale === 1.2 ? 1.4 : 1.2;
      revoliMarker.setScale(scale);
    }, 1000);
  });

  map.addControl(new mapboxgl.NavigationControl());

  let bearing = -30;
  let isRotating = true;
  const rotationInterval = setInterval(() => {
    if (isRotating) {
      bearing -= 0.3;
      map.setBearing(bearing);
    }
  }, 50);

  const toggleRotationButton = document.getElementById('toggle-rotation');
  toggleRotationButton.addEventListener('click', () => {
    isRotating = !isRotating;
    toggleRotationButton.textContent = isRotating ? 'إيقاف الدوران' : 'تشغيل الدوران';
  });
}