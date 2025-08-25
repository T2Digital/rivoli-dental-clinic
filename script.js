// بيانات الخدمات (18 خدمة)
const services = [
  {
    id: 1,
    name: 'استشارة',
    description: 'استشارة طبية لتقييم حالة الأسنان.',
    image: '/images/consultation.jpg',
    duration: '30 دقيقة',
    benefits: 'تشخيص دقيق، خطة علاج مخصصة.',
    moreInfo: 'استشارة مع أطباء متخصصين.',
    details: 'نقدم استشارات شاملة مع أطباء متخصصين لتحديد أفضل خطة علاجية لكل مريض.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      '/images/consultation-1.jpg',
      '/images/consultation-2.jpg',
      '/images/consultation-3.jpg'
    ]
  },
  {
    id: 2,
    name: 'تنظيف الأسنان',
    description: 'إزالة الجير والبقع للحفاظ على صحة الأسنان.',
    image: '/images/cleaning.jpg',
    duration: '30 دقيقة',
    benefits: 'منع التسوس، تحسين صحة اللثة.',
    moreInfo: 'تنظيف بالموجات فوق الصوتية.',
    details: 'تنظيف عميق باستخدام الموجات فوق الصوتية لإزالة الجير والبقع بأمان.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      '/images/cleaning-1.jpg',
      '/images/cleaning-2.jpg',
      '/images/cleaning-3.jpg'
    ]
  },
  {
    id: 3,
    name: 'تبييض الأسنان',
    description: 'تبييض الأسنان بأمان وسرعة.',
    image: '/images/whitening.jpg',
    duration: '1 ساعة',
    benefits: 'ابتسامة مشرقة، تحسين الثقة بالنفس.',
    moreInfo: 'استخدام ليزر آمن ومواد عالية الجودة.',
    details: 'تبييض الأسنان باستخدام ليزر آمن ومواد معتمدة عالميًا، مع نتائج فورية.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      '/images/whitening-1.jpg',
      '/images/whitening-2.jpg',
      '/images/whitening-3.jpg'
    ]
  },
  {
    id: 4,
    name: 'توريد اللثة',
    description: 'علاج تصبغ اللثة لتحسين المظهر.',
    image: '/images/gum-treatment.jpg',
    duration: '1 ساعة',
    benefits: 'لثة صحية ومظهر جمالي.',
    moreInfo: 'علاج بالليزر لتصحيح لون اللثة.',
    details: 'توريد اللثة باستخدام تقنيات ليزر متقدمة للحصول على لثة صحية ومظهر طبيعي.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      '/images/gum-treatment-1.jpg',
      '/images/gum-treatment-2.jpg',
      '/images/gum-treatment-3.jpg'
    ]
  },
  {
    id: 5,
    name: 'حشو عادي',
    description: 'حشوات لعلاج التسوس بمواد آمنة.',
    image: '/images/filling.jpg',
    duration: '45 دقيقة',
    benefits: 'إصلاح التسوس، حماية الأسنان.',
    moreInfo: 'حشوات متينة وآمنة.',
    details: 'حشوات عادية باستخدام مواد عالية الجودة لعلاج التسوس وحماية الأسنان.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      '/images/filling-1.jpg',
      '/images/filling-2.jpg',
      '/images/filling-3.jpg'
    ]
  },
  {
    id: 6,
    name: 'حشو تجميلي أمامي',
    description: 'حشوات تجميلية للأسنان الأمامية.',
    image: '/images/cosmetic-filling-front.jpg',
    duration: '1 ساعة',
    benefits: 'مظهر طبيعي، تحسين الابتسامة.',
    moreInfo: 'حشوات مطابقة للون الأسنان.',
    details: 'حشوات تجميلية أمامية بمواد مطابقة للون الأسنان لتحسين المظهر.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      '/images/cosmetic-filling-front-1.jpg',
      '/images/cosmetic-filling-front-2.jpg',
      '/images/cosmetic-filling-front-3.jpg'
    ]
  },
  {
    id: 7,
    name: 'حشو تجميلي خلفي',
    description: 'حشوات تجميلية للأسنان الخلفية.',
    image: '/images/cosmetic-filling-back.jpg',
    duration: '1 ساعة',
    benefits: 'متانة ومظهر طبيعي.',
    moreInfo: 'حشوات بيضاء متينة.',
    details: 'حشوات تجميلية خلفية بمواد متينة لضمان المظهر والوظيفة.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      '/images/cosmetic-filling-back-1.jpg',
      '/images/cosmetic-filling-back-2.jpg',
      '/images/cosmetic-filling-back-3.jpg'
    ]
  },
  {
    id: 8,
    name: 'زراعة الأسنان',
    description: 'زراعة أسنان دائمة بجودة عالية.',
    image: '/images/implant.jpg',
    duration: '3-6 أشهر',
    benefits: 'استعادة وظيفة الأسنان، مظهر طبيعي.',
    moreInfo: 'زراعة بتقنية 3D لضمان الدقة.',
    details: 'زراعة الأسنان باستخدام تقنية 3D لضمان الدقة والراحة، مع ضمان لمدة 5 سنوات.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      '/images/implant-1.jpg',
      '/images/implant-2.jpg',
      '/images/implant-3.jpg'
    ]
  },
  {
    id: 9,
    name: 'تركيبات ثابتة',
    description: 'تركيبات أسنان دائمة لتحسين الوظيفة.',
    image: '/images/fixed-prosthesis.jpg',
    duration: '2-4 أسابيع',
    benefits: 'متانة، مظهر طبيعي.',
    moreInfo: 'تركيبات زيركون وبورسلين.',
    details: 'تركيبات ثابتة باستخدام زيركون أو بورسلين لضمان المتانة والمظهر الطبيعي.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      '/images/fixed-prosthesis-1.jpg',
      '/images/fixed-prosthesis-2.jpg',
      '/images/fixed-prosthesis-3.jpg'
    ]
  },
  {
    id: 10,
    name: 'تركيبات متحركة',
    description: 'تركيبات أسنان قابلة للإزالة.',
    image: '/images/removable-prosthesis.jpg',
    duration: '1-2 أسابيع',
    benefits: 'راحة، سهولة الاستخدام.',
    moreInfo: 'تركيبات مرنة ومتينة.',
    details: 'تركيبات متحركة مريحة وسهلة الاستخدام، مصممة حسب احتياجات المريض.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      '/images/removable-prosthesis-1.jpg',
      '/images/removable-prosthesis-2.jpg',
      '/images/removable-prosthesis-3.jpg'
    ]
  },
  {
    id: 11,
    name: 'علاج عصب',
    description: 'علاج قنوات العصب بدقة عالية.',
    image: '/images/root-canal.jpg',
    duration: '1-2 ساعة',
    benefits: 'إزالة الألم، الحفاظ على السن.',
    moreInfo: 'علاج باستخدام أحدث الأجهزة.',
    details: 'علاج قنوات العصب باستخدام أجهزة متطورة لضمان الراحة وإزالة الألم.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      '/images/root-canal-1.jpg',
      '/images/root-canal-2.jpg',
      '/images/root-canal-3.jpg'
    ]
  },
  {
    id: 12,
    name: 'إعادة حشو عصب',
    description: 'إعادة علاج قنوات العصب للحالات السابقة.',
    image: '/images/retreatment.jpg',
    duration: '1-2 ساعة',
    benefits: 'إصلاح العلاج السابق، الحفاظ على السن.',
    moreInfo: 'علاج دقيق بتقنيات متقدمة.',
    details: 'إعادة حشو قنوات العصب باستخدام تقنيات متقدمة لضمان نجاح العلاج.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      '/images/retreatment-1.jpg',
      '/images/retreatment-2.jpg',
      '/images/retreatment-3.jpg'
    ]
  },
  {
    id: 13,
    name: 'علاج الجذور',
    description: 'علاج جذور الأسنان بدقة عالية.',
    image: '/images/root-treatment.jpg',
    duration: '1-2 ساعة',
    benefits: 'إزالة الألم، الحفاظ على السن.',
    moreInfo: 'علاج باستخدام أحدث الأجهزة.',
    details: 'علاج جذور الأسنان باستخدام أجهزة متطورة لضمان الراحة وإزالة الألم.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      '/images/root-treatment-1.jpg',
      '/images/root-treatment-2.jpg',
      '/images/root-treatment-3.jpg'
    ]
  },
  {
    id: 14,
    name: 'خلع عادي',
    description: 'خلع الأسنان بسهولة وأمان.',
    image: '/images/extraction.jpg',
    duration: '30 دقيقة',
    benefits: 'إزالة الأسنان التالفة، راحة فورية.',
    moreInfo: 'خلع بأقل ألم ممكن.',
    details: 'خلع الأسنان باستخدام تقنيات حديثة لضمان الراحة وتقليل الألم.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      '/images/extraction-1.jpg',
      '/images/extraction-2.jpg',
      '/images/extraction-3.jpg'
    ]
  },
  {
    id: 15,
    name: 'خلع جراحي',
    description: 'خلع الأسنان المعقدة بإجراءات جراحية.',
    image: '/images/surgical-extraction.jpg',
    duration: '1 ساعة',
    benefits: 'حل المشكلات المعقدة، راحة سريعة.',
    moreInfo: 'إجراءات جراحية دقيقة.',
    details: 'خلع جراحي باستخدام تقنيات متقدمة لضمان الدقة والراحة.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      '/images/surgical-extraction-1.jpg',
      '/images/surgical-extraction-2.jpg',
      '/images/surgical-extraction-3.jpg'
    ]
  },
  {
    id: 16,
    name: 'خلع ضرس العقل',
    description: 'خلع ضرس العقل بأمان.',
    image: '/images/wisdom-tooth.jpg',
    duration: '1 ساعة',
    benefits: 'إزالة الألم، منع المضاعفات.',
    moreInfo: 'إجراءات دقيقة لخلع ضرس العقل.',
    details: 'خلع ضرس العقل باستخدام تقنيات متقدمة لتقليل الألم والمضاعفات.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      '/images/wisdom-tooth-1.jpg',
      '/images/wisdom-tooth-2.jpg',
      '/images/wisdom-tooth-3.jpg'
    ]
  },
  {
    id: 17,
    name: 'خلع ضرس العقل المدفون',
    description: 'خلع ضرس العقل المدفون بإجراءات جراحية.',
    image: '/images/impacted-wisdom-tooth.jpg',
    duration: '1-2 ساعة',
    benefits: 'إزالة الألم، منع المضاعفات.',
    moreInfo: 'جراحة دقيقة لضرس العقل المدفون.',
    details: 'خلع ضرس العقل المدفون باستخدام تقنيات جراحية متقدمة لضمان الراحة.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      '/images/impacted-wisdom-tooth-1.jpg',
      '/images/impacted-wisdom-tooth-2.jpg',
      '/images/impacted-wisdom-tooth-3.jpg'
    ]
  },
  {
    id: 18,
    name: 'جراحة الأسنان',
    description: 'إجراءات جراحية لعلاج مشكلات الأسنان المعقدة.',
    image: '/images/dental-surgery.jpg',
    duration: '1-3 ساعات',
    benefits: 'حل المشكلات المعقدة، تحسين الصحة الفموية.',
    moreInfo: 'جراحات دقيقة بأحدث التقنيات.',
    details: 'إجراءات جراحية متقدمة لعلاج مشكلات الأسنان المعقدة بأعلى معايير الجودة.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    images: [
      '/images/dental-surgery-1.jpg',
      '/images/dental-surgery-2.jpg',
      '/images/dental-surgery-3.jpg'
    ]
  }
];

// مواعيد الأسبوع (4:00 م إلى 11:00 م)
const weekSchedule = {
  'الأحد': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
  'الإثنين': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
  'الثلاثاء': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
  'الأربعاء': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
  'الخميس': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
  'الجمعة': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'],
  'السبت': ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م']
};

// مصفوفة لتخزين الحجوزات المؤقتة
let bookedSlots = [];

// إخفاء الـ loader وإشعار ترحيبي
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.style.opacity = '0';
  setTimeout(() => {
    loader.style.display = 'none';
  }, 500);

  // إشعار ترحيبي
  Swal.fire({
    title: 'مرحبًا بكم في مركز ريفولي!',
    text: 'يقع مركزنا أعلى سينما ريفولي، أمام دار القضاء العالي، وسط البلد، القاهرة. احجز موعدك الآن للحصول على أفضل خدمات طب الأسنان.',
    icon: 'info',
    confirmButtonText: 'موافق',
    confirmButtonColor: '#4FC3F7'
  });

  // تحميل الوضع من localStorage
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-sun"></i>';
  }

  // جلب الحجوزات وعرض التقويم والخدمات
  fetchBookings();
  displayCalendar();
  displayServices();

  // تسجيل Service Worker لدعم PWA
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => console.log('Service Worker registered:', registration))
      .catch(error => console.error('Service Worker registration failed:', error));
  }
});

// قائمة الهامبرغر للشاشات الصغيرة
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
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'light');
  }
});

// عرض الخدمات ديناميكيًا
const servicesContainer = document.getElementById('services-container');
const serviceSelect = document.getElementById('service-select');

function displayServices() {
  if (!services || services.length === 0) {
    console.error('خطأ: قائمة الخدمات فارغة أو غير معرفة');
    servicesContainer.innerHTML = '<p style="text-align: center; color: #D32F2F;">عذرًا، لا توجد خدمات متاحة حاليًا.</p>';
    return;
  }

  servicesContainer.innerHTML = '';
  serviceSelect.innerHTML = '<option value="">اختر الخدمة</option>'; // إعادة تعيين القائمة
  services.forEach(service => {
    const serviceCard = document.createElement('div');
    serviceCard.classList.add('service-card');
    serviceCard.innerHTML = `
      <img src="${service.image}" alt="${service.name}" loading="lazy">
      <h3>${service.name}</h3>
      <div class="details">
        <p>${service.description}</p>
        <p><strong>المدة:</strong> ${service.duration}</p>
        <p><strong>الفوائد:</strong> ${service.benefits}</p>
        <a href="#" class="more-info" onclick="showServiceDetails(${service.id})">المزيد من المعلومات</a>
      </div>
    `;
    servicesContainer.appendChild(serviceCard);

    const option = document.createElement('option');
    option.value = service.id;
    option.textContent = service.name;
    serviceSelect.appendChild(option);
  });
}

// عرض تفاصيل الخدمة في نافذة منبثقة
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
      <p>${service.details}</p>
      <iframe src="${service.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="swiper" id="${sliderId}">
        <div class="swiper-wrapper">
          ${service.images.map(img => `<div class="swiper-slide"><img src="${img}" alt="${service.name}"></div>`).join('')}
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-pagination"></div>
      </div>
      <a href="#booking" class="cta-button" onclick="Swal.close()">احجز الآن</a>
    `,
    showConfirmButton: false,
    showCloseButton: true,
    width: '800px',
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

// جلب الحجوزات من الباك اند
async function fetchBookings() {
  try {
    const response = await fetch('http://localhost:5000/api/bookings');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const bookings = await response.json();
    bookedSlots = bookings.map(booking => ({ day: booking.day, time: booking.time }));
    displaySchedule();
  } catch (error) {
    console.error('Error fetching bookings:', error);
    Swal.fire('خطأ', 'فشل تحميل الحجوزات، يرجى المحاولة لاحقًا', 'error');
  }
}

// عرض جدول المواعيد
function displaySchedule() {
  const scheduleBody = document.getElementById('schedule-body');
  if (!scheduleBody) {
    console.error('خطأ: عنصر schedule-body غير موجود');
    return;
  }
  scheduleBody.innerHTML = '';

  const times = ['04:00 م', '05:00 م', '06:00 م', '07:00 م', '08:00 م', '09:00 م', '10:00 م', '11:00 م'];
  times.forEach(time => {
    const row = document.createElement('tr');
    ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'].forEach(day => {
      const isBooked = bookedSlots.some(slot => slot.day === day && slot.time === time);
      const button = document.createElement('button');
      button.textContent = time;
      button.classList.add(isBooked ? 'booked' : 'available');
      if (isBooked) button.disabled = true;
      button.addEventListener('click', () => selectSlot(day, time, button));
      const td = document.createElement('td');
      td.appendChild(button);
      row.appendChild(td);
    });
    scheduleBody.appendChild(row);
  });
}

// اختيار موعد
let selectedSlot = null;
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
    text: `لقد اخترت يوم ${day} الساعة ${time}`,
    icon: 'info',
    confirmButtonText: 'موافق',
    confirmButtonColor: '#4FC3F7'
  });
}

// تأكيد الحجز وإرسال إلى واتساب
const confirmButton = document.getElementById('confirm-booking');
const patientName = document.getElementById('patient-name');
const patientPhone = document.getElementById('patient-phone');
const serviceSelect = document.getElementById('service-select');

confirmButton.addEventListener('click', async () => {
  const serviceId = serviceSelect.value;
  const name = patientName.value.trim();
  const phone = patientPhone.value.trim();

  if (!name || !phone || !serviceId || !selectedSlot) {
    Swal.fire('خطأ', 'يرجى إدخال جميع البيانات واختيار موعد', 'error');
    return;
  }

  if (!/^\d{11}$/.test(phone)) {
    Swal.fire('خطأ', 'يرجى إدخال رقم هاتف صحيح (11 رقم)', 'error');
    return;
  }

  const service = services.find(s => s.id === parseInt(serviceId));
  if (!service) {
    Swal.fire('خطأ', 'الخدمة المختارة غير موجودة', 'error');
    return;
  }

  const bookingDate = new Date();
  bookingDate.setDate(bookingDate.getDate() + 7);
  const formattedDate = bookingDate.toLocaleDateString('ar-EG', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const bookingData = {
    patientName: name,
    patientPhone: phone,
    serviceId: parseInt(serviceId),
    day: selectedSlot.day,
    time: selectedSlot.time,
    bookingDate: bookingDate.toISOString()
  };

  try {
    const response = await fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData)
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const message = encodeURIComponent(
      `حجز جديد:\n` +
      `الاسم: ${name}\n` +
      `رقم الهاتف: ${phone}\n` +
      `الخدمة: ${service.name}\n` +
      `اليوم: ${selectedSlot.day}\n` +
      `الساعة: ${selectedSlot.time}\n` +
      `التاريخ: ${formattedDate}\n` +
      `رابط المركز: https://revoli-dental.com`
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
      confirmButtonText: 'تأكيد وإرسال إلى واتساب',
      cancelButtonText: 'إلغاء',
      showCancelButton: true,
      confirmButtonColor: '#4FC3F7',
      cancelButtonColor: '#D32F2F'
    }).then(result => {
      if (result.isConfirmed) {
        window.open(`https://wa.me/+201234567890?text=${message}`, '_blank');
        bookedSlots.push(selectedSlot);
        displaySchedule();
        displayCalendar();
        patientName.value = '';
        patientPhone.value = '';
        serviceSelect.value = '';
        selectedSlot = null;
        confirmButton.disabled = true;
        Swal.fire('تم الحجز!', 'تم إرسال تفاصيل الحجز عبر واتساب.', 'success');
      }
    });
  } catch (error) {
    console.error('Error saving booking:', error);
    Swal.fire('خطأ', 'فشل تسجيل الحجز، يرجى المحاولة لاحقًا', 'error');
  }
});

// عرض تقويم الحجوزات
async function displayCalendar() {
  const calendarContainer = document.getElementById('calendar-container');
  if (!calendarContainer) {
    console.error('خطأ: عنصر calendar-container غير موجود');
    return;
  }
  calendarContainer.innerHTML = '<h3>جاري تحميل التقويم...</h3>';

  try {
    const response = await fetch('http://localhost:5000/api/bookings');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const bookings = await response.json();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + 7);
    const days = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];

    let calendarHTML = '<table><thead><tr>';
    days.forEach(day => {
      calendarHTML += `<th>${day}</th>`;
    });
    calendarHTML += '</tr></thead><tbody><tr>';

    for (let i = 0; i < 7; i++) {
      const dayName = days[i];
      const dayBookings = bookings.filter(booking => booking.day === dayName);
      const bookingTimes = dayBookings.map(booking => booking.time).join(', ') || 'لا توجد حجوزات';
      calendarHTML += `<td class="${dayBookings.length > 0 ? 'booked' : ''}">${dayName}<br>${bookingTimes}</td>`;
    }

    calendarHTML += '</tr></tbody></table>';
    calendarContainer.innerHTML = calendarHTML;
  } catch (error) {
    console.error('Error fetching calendar:', error);
    calendarContainer.innerHTML = '<p style="text-align: center; color: #D32F2F;">فشل تحميل التقويم، يرجى المحاولة لاحقًا.</p>';
  }
}

// زر العودة إلى الأعلى
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// تهيئة الخريطة
function initMap() {
  const revoliLocation = { lat: 30.0511, lng: 31.2357 };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: revoliLocation
  });
  new google.maps.Marker({
    position: revoliLocation,
    map,
    title: 'مركز ريفولي لطب الأسنان'
  });
}

// تهيئة معرض الصور
const gallerySwiper = new Swiper('.gallery-swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});