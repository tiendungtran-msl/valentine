/* ============================================
   💕 Valentine Website — Main Engine
   Gửi Trần Bảo Quỳnh, từ Trần Tiến Dũng
   ============================================ */

/* ═══════════════════════════════════════════
   CONFIGURATION — Chỉnh sửa tại đây
   ═══════════════════════════════════════════ */

const CONFIG = {
  // Danh sách ảnh trong /assets/images/
  images: [
    // Chương 1: ánh nhìn đầu tiên
    'FIM00232.JPG',
    'FIM00239.JPG',
    'FIM00251.JPG',
    'FIM00255.JPG',
    'FIM00276.JPG',
    // Chương 2: những ngày bắt đầu theo đuổi
    'FIM00395.JPG',
    'FIM00428.JPG',
    'FIM00504.JPG',
    'FIM00530.JPG',
    'FIM00560.JPG',
    'FIM00566.JPG',
    'FIM00593.JPG',
    // Chương 3: gần nhau hơn
    'FIM00630.JPG',
    'FIM00647.JPG',
    'FIM00658.JPG',
    'FIM00675.JPG',
    'FIM00681.JPG',
    'FIM00692.JPG',
    // Chương 4: mình của hiện tại
    'FIM00778.JPG',
    'FIM00821.JPG',
    'FIM00826.JPG',
    'FIM00830.JPG',
    'FIM00846.JPG',
    'FIM00873.JPG',
    'FIM00875.JPG',
  ],

  // Nhạc nền trong /assets/music/
  music: [
    {
      title: '1000 Ánh Mắt',
      file: '1000 Ánh Mắt.mp3',
      note: 'Nhạc nền của cả hành trình Valentine',
      sub: 'Giữa ngàn ánh nhìn ngoài kia, anh vẫn chỉ nhận ra em.',
    },
    {
      title: 'I like you the most',
      file: 'I like you the most.mp3',
      note: 'Chặng ký ức theo đuổi em',
      sub: 'Những ngày còn lặng lẽ thương em, anh đã chọn em là người anh thích nhất.',
    },
    {
      title: 'Until I Found You',
      file: 'Until I Found You.mp3',
      note: 'Chặng ý nghĩa khi anh tìm thấy em',
      sub: 'Until I Found You — đến khi tìm thấy em, mọi điều lạc hướng trong anh đều có đường về.',
    },
    {
      title: 'Có Đôi Điều',
      file: 'Có Đôi Điều.mp3',
      note: 'Khúc nhạc kết hành trình',
      sub: 'Có đôi điều anh chưa nói hết, nên anh gửi vào bản nhạc cuối cùng này.',
    },
  ],

  // Lời tỏ tình trên Landing page
  typingText: 'Anh chưa kịp chuẩn bị cho em\nmột lời tỏ tình thật chỉnh chu…\n\nNên đêm nay, giữa bầu trời đầy sao,\nanh xin giữ lại cho riêng em\nhai điều dịu dàng nhất:\n"anh yêu em"\nvà\n"anh thương em hơn mọi điều trên thế giới này". 💕',

  // Tốc độ gõ chữ (ms)
  typingSpeed: 55,
  typingPause: 600, // Dừng ở dấu xuống dòng

  // Mật khẩu Easter Egg
  secretPassword: '1402',
  secretClicks: 5,
};

// 50 điều anh yêu ở em
const LOVE_THINGS = [
  'Cách em cười — như nắng chạm lên ngày nhiều mây',
  'Cách em giận dỗi — vừa bướng vừa khiến anh muốn dỗ dành',
  'Cách em gọi tên anh — nhẹ mà làm tim anh rung mạnh',
  'Đôi mắt em — lúc nào cũng chứa một bầu trời riêng',
  'Giọng nói em — làm mọi ồn ào trong anh dịu xuống',
  'Cách em quan tâm người khác trước cả bản thân mình',
  'Cách em kiên nhẫn với những điều không dễ dàng',
  'Cách em thương gia đình bằng sự ấm áp âm thầm',
  'Nụ cười em — chữa lành cả một ngày dài của anh',
  'Cách em nghe anh nói — bằng tất cả sự chú ý',
  'Cách em kể chuyện — khiến thời gian đi chậm lại',
  'Cách em im lặng — cũng đủ để anh thấy bình yên',
  'Mái tóc em — thoảng qua là anh nhớ cả một ngày',
  'Bàn tay em — nhỏ thôi, nhưng anh muốn nắm cả đời',
  'Cách em bước đi — nhẹ như một bản nhạc buổi sớm',
  'Cách em nhìn ra cửa sổ — mơ màng như một câu thơ',
  'Cách em mím môi khi suy nghĩ — đáng yêu vô hạn',
  'Cách em bật cười khi vui — làm anh muốn cười theo',
  'Cách em lo cho anh từng điều nhỏ nhặt',
  'Cách em dỗ anh khi anh mệt — dịu hơn mọi lời hay',
  'Sự chân thành trong từng câu em nói',
  'Sự thông minh của em — sắc sảo mà vẫn dịu dàng',
  'Sự mạnh mẽ em giấu sau vẻ ngoài mong manh',
  'Cách em khiến anh muốn trưởng thành hơn mỗi ngày',
  'Cách em làm một ngày bình thường thành kỷ niệm đẹp',
  'Cách em khiến anh tin rằng tình yêu có thật',
  'Đôi má em ửng hồng khi ngại ngùng',
  'Cách em tựa vào vai anh — vừa đủ để anh thấy mình cần được tốt hơn',
  'Cách em nhắn tin cho anh vào buổi sáng',
  'Cách em hỏi "anh ăn chưa?" — câu hỏi giản đơn mà ấm lòng',
  'Cách em nhắc anh uống nước, nghỉ ngơi đúng lúc',
  'Cách em luôn biết ơn những điều nhỏ bé',
  'Trái tim nhân hậu của em với mọi người xung quanh',
  'Cách em giữ lời hứa — dù nhỏ đến đâu',
  'Cách em mang mùa xuân vào những ngày mưa của anh',
  'Cách em khiến căn phòng im lặng cũng trở nên dịu dàng',
  'Cách em đứng về phía anh khi anh yếu lòng',
  'Cách em làm anh thấy mình may mắn',
  'Cách em là chính em — không cần cố trở thành ai khác',
  'Cách em khiến trái tim anh biết nhớ, biết đợi, biết thương',
  'Cách em xuất hiện và khiến thế giới của anh đổi khác',
  'Cách em đi cùng anh qua những đoạn đường không dễ',
  'Những khoảnh khắc rất đời thường bên em',
  'Cách em khiến anh muốn viết thêm nhiều câu thơ',
  'Cách em khiến chữ "nhà" trong anh có hình dáng rõ ràng',
  'Cách em làm cho mọi dự định của anh đều có em ở đó',
  'Cách em khiến ngày Valentine này trở nên có ý nghĩa',
  'Cách em khiến anh biết trân trọng hiện tại',
  'Cách em khiến anh tin vào một "mãi mãi" thật dịu dàng',
  'Tất cả những gì thuộc về em — anh đều yêu, bằng sự biết ơn 💕',
];


/* ═══════════════════════════════════════════
   APP STATE
   ═══════════════════════════════════════════ */
const state = {
  currentPage: 'page-landing',
  previousPage: null,
  musicPlaying: false,
  lightboxOpen: false,
  lightboxIndex: 0,
  easterEggClicks: 0,
  secretUnlocked: false,
  typingDone: false,
  audioContext: null,
  analyser: null,
  isSlideshow: false,
  slideshowTimer: null,
  revealObserver: null,
  passwordBuffer: '',
  visitedZones: new Set(),
  currentTrack: 0,
  hasUserGesture: false,
  memoryStageTimer: null,
  memoryStageIndex: 0,
  memoryStageLines: [
    'Có những ngày theo đuổi, chỉ cần nhìn thấy em là đủ vui cả buổi chiều.',
    'Anh từng tập nói lời yêu rất nhiều lần, rồi lại chọn im lặng để thương em nhiều hơn.',
    'Bây giờ nhìn lại, mọi đoạn đường vòng đều đáng giá vì đích đến là em.',
    'Nếu ký ức có mùi hương, chắc chắn sẽ là mùi tóc em trong một chiều gió nhẹ.',
  ],
};


/* ═══════════════════════════════════════════
   INITIALIZATION
   ═══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initCursor();
  initStars();
  initFloatingHearts();
  initTyping();
  initNavigation();
  initGallery();
  initLoveThings();
  initMelody();
  initEasterEgg();
  initChoice();
  initLightbox();
  initPasswordModal();
  initKeyboardSecrets();
  initRevealObserver();
  initJourneyMap();
  initAutoMusicGesture();
});


/* ═══════════════════════════════════════════
   PRELOADER
   ═══════════════════════════════════════════ */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  const bar = document.getElementById('preloader-progress');
  let progress = 0;

  const interval = setInterval(() => {
    progress += Math.random() * 15 + 5;
    if (progress > 100) progress = 100;
    bar.style.width = progress + '%';

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        preloader.classList.add('hidden');
      }, 400);
    }
  }, 120);

  // Fallback: hide after 3s max
  setTimeout(() => {
    clearInterval(interval);
    bar.style.width = '100%';
    setTimeout(() => preloader.classList.add('hidden'), 300);
  }, 3000);
}


/* ═══════════════════════════════════════════
   CUSTOM CURSOR
   ═══════════════════════════════════════════ */
function initCursor() {
  // Only on devices with mouse
  if (!matchMedia('(pointer: fine)').matches) return;

  const cursor = document.getElementById('cursor');
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  const trails = [];
  const TRAIL_COUNT = 6;

  // Create trail elements
  for (let i = 0; i < TRAIL_COUNT; i++) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.textContent = '💗';
    trail.style.fontSize = (10 - i) + 'px';
    document.body.appendChild(trail);
    trails.push({ el: trail, x: 0, y: 0 });
  }

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    // Smooth follow
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    // Trails follow with delay
    let prevX = cursorX, prevY = cursorY;
    trails.forEach((t, i) => {
      t.x += (prevX - t.x) * (0.12 - i * 0.015);
      t.y += (prevY - t.y) * (0.12 - i * 0.015);
      t.el.style.left = t.x + 'px';
      t.el.style.top = t.y + 'px';
      t.el.style.opacity = 0.4 - i * 0.06;
      prevX = t.x;
      prevY = t.y;
    });

    requestAnimationFrame(animate);
  }
  animate();

  // Hover effect on interactive elements
  document.querySelectorAll('button, a, .gallery-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  });
}


/* ═══════════════════════════════════════════
   STARFIELD CANVAS
   ═══════════════════════════════════════════ */
function initStars() {
  const canvas = document.getElementById('stars-canvas');
  const ctx = canvas.getContext('2d');
  let stars = [];
  let shootingStars = [];
  let w, h;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Create stars
  const STAR_COUNT = Math.min(250, Math.floor(w * h / 5000));
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.8 + 0.2,
      alphaSpeed: Math.random() * 0.008 + 0.003,
      alphaDir: 1,
    });
  }

  // Shooting star every 4-8 seconds
  function spawnShootingStar() {
    shootingStars.push({
      x: Math.random() * w,
      y: Math.random() * h * 0.4,
      len: Math.random() * 60 + 40,
      speed: Math.random() * 6 + 4,
      angle: Math.PI / 4 + Math.random() * 0.3,
      alpha: 1,
      life: 1,
    });
    setTimeout(spawnShootingStar, 4000 + Math.random() * 6000);
  }
  setTimeout(spawnShootingStar, 2000);

  function animate() {
    ctx.clearRect(0, 0, w, h);

    // Draw stars
    stars.forEach(s => {
      s.alpha += s.alphaSpeed * s.alphaDir;
      if (s.alpha >= 1) { s.alpha = 1; s.alphaDir = -1; }
      if (s.alpha <= 0.2) { s.alpha = 0.2; s.alphaDir = 1; }

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
      ctx.fill();
    });

    // Draw shooting stars
    shootingStars = shootingStars.filter(ss => {
      ss.x += Math.cos(ss.angle) * ss.speed;
      ss.y += Math.sin(ss.angle) * ss.speed;
      ss.life -= 0.015;

      if (ss.life <= 0) return false;

      const gradient = ctx.createLinearGradient(
        ss.x, ss.y,
        ss.x - Math.cos(ss.angle) * ss.len,
        ss.y - Math.sin(ss.angle) * ss.len
      );
      gradient.addColorStop(0, `rgba(255, 107, 157, ${ss.life})`);
      gradient.addColorStop(1, 'rgba(255, 107, 157, 0)');

      ctx.beginPath();
      ctx.moveTo(ss.x, ss.y);
      ctx.lineTo(
        ss.x - Math.cos(ss.angle) * ss.len,
        ss.y - Math.sin(ss.angle) * ss.len
      );
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Glow
      ctx.beginPath();
      ctx.arc(ss.x, ss.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 200, 220, ${ss.life})`;
      ctx.fill();

      return true;
    });

    requestAnimationFrame(animate);
  }
  animate();
}


/* ═══════════════════════════════════════════
   FLOATING HEARTS
   ═══════════════════════════════════════════ */
function initFloatingHearts() {
  const hearts = ['💗', '💕', '💖', '🤍', '💜', '✨'];

  function spawnHeart() {
    const el = document.createElement('div');
    el.className = 'floating-heart';
    el.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    el.style.setProperty('--left', Math.random() * 100 + '%');
    el.style.setProperty('--size', (Math.random() * 12 + 10) + 'px');
    el.style.setProperty('--duration', (Math.random() * 6 + 6) + 's');
    el.style.setProperty('--delay', '0s');
    document.body.appendChild(el);

    // Remove after animation
    setTimeout(() => el.remove(), 14000);
  }

  // Spawn periodically
  setInterval(spawnHeart, 2500);

  // Initial batch
  for (let i = 0; i < 5; i++) {
    setTimeout(spawnHeart, i * 500);
  }
}


/* ═══════════════════════════════════════════
   TYPING EFFECT
   ═══════════════════════════════════════════ */
function initTyping() {
  const el = document.getElementById('typing-text');
  const text = CONFIG.typingText;
  let index = 0;

  // Add cursor element
  const cursorEl = document.createElement('span');
  cursorEl.className = 'typing-cursor';
  el.after(cursorEl);

  function type() {
    if (index < text.length) {
      const char = text[index];
      if (char === '\n') {
        el.innerHTML += '<br>';
        index++;
        setTimeout(type, CONFIG.typingPause);
      } else {
        el.innerHTML += char;
        index++;
        // Variable speed for natural feel
        const speed = CONFIG.typingSpeed + (Math.random() * 30 - 15);
        setTimeout(type, char === '…' || char === ',' ? speed * 3 : speed);
      }
    } else {
      // Typing done — show button
      state.typingDone = true;
      const btn = document.getElementById('btn-enter');
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
    }
  }

  // Start typing after preloader
  setTimeout(type, 2500);
}


/* ═══════════════════════════════════════════
   PAGE NAVIGATION
   ═══════════════════════════════════════════ */
function initNavigation() {
  // Button → Page mappings
  const nav = {
    'btn-enter': 'page-confession',
    'btn-open-map': 'page-map',
    'btn-path-moments': 'page-moments',
    'btn-path-love': 'page-love',
    'btn-path-melody': 'page-melody',
    'btn-love-things': 'page-love',
    'btn-melody': 'page-melody',
    'btn-choice': 'page-choice',
    'btn-back-map-1': 'page-map',
    'btn-back-map-2': 'page-map',
    'btn-back-map-3': 'page-map',
    'btn-to-choice': 'page-choice',
    'btn-back-secret': null, // Go back to previous page
  };

  Object.entries(nav).forEach(([btnId, targetPage]) => {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.addEventListener('click', () => {
      if (btnId === 'btn-back-secret') {
        navigateTo(state.previousPage || 'page-choice');
      } else if (btnId === 'btn-choice' && state.visitedZones.size < 3) {
        navigateTo('page-map');
      } else {
        navigateTo(targetPage);
      }
    });
  });
}

function navigateTo(pageId) {
  if (pageId === state.currentPage) return;

  const currentEl = document.getElementById(state.currentPage);
  const targetEl = document.getElementById(pageId);

  if (!currentEl || !targetEl) return;

  // Save previous page
  state.previousPage = state.currentPage;
  state.currentPage = pageId;

  // Transition: current page exits
  currentEl.classList.add('exit-up');
  currentEl.classList.remove('active');

  // Target page enters
  setTimeout(() => {
    currentEl.classList.remove('exit-up');
    targetEl.classList.add('active');

    // Scroll to top if scrollable
    const scrollable = targetEl.querySelector('.scrollable');
    if (scrollable) scrollable.scrollTop = 0;

    // Trigger reveals for the new page
    triggerReveals(targetEl);

    // Page-specific actions
    onPageEnter(pageId);
  }, 400);
}

function onPageEnter(pageId) {
  if (pageId === 'page-moments' || pageId === 'page-love' || pageId === 'page-melody') {
    state.visitedZones.add(pageId);
    updateJourneyProgress();
  }

  if (pageId === 'page-map') {
    updateJourneyProgress();
  }

  syncTrackByPage(pageId);

  if (pageId === 'page-secret') {
    startFireworks();
    startConfetti();
  }
  if (pageId === 'page-thankyou') {
    startConfetti();
    createHeartExplosion();
  }
}

function initJourneyMap() {
  updateJourneyProgress();
}

function updateJourneyProgress() {
  const progressEl = document.getElementById('route-progress');
  const toChoiceBtn = document.getElementById('btn-to-choice');
  if (!progressEl || !toChoiceBtn) return;

  const completed = state.visitedZones.size;
  progressEl.textContent = `Em đã khám phá: ${completed}/3 chặng`;

  if (completed >= 3) {
    toChoiceBtn.disabled = false;
    toChoiceBtn.classList.remove('disabled-route');
    toChoiceBtn.textContent = 'Cánh cửa cuối đã mở — mình đi tiếp nhé 💌';
  } else {
    toChoiceBtn.disabled = true;
    toChoiceBtn.classList.add('disabled-route');
    toChoiceBtn.textContent = 'Cánh cửa cuối vẫn đang đợi em… 🔒';
  }
}


/* ═══════════════════════════════════════════
   SCROLL REVEAL (IntersectionObserver)
   ═══════════════════════════════════════════ */
function initRevealObserver() {
  state.revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, parseInt(delay));
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
}

function triggerReveals(container) {
  const reveals = container.querySelectorAll('.reveal');
  reveals.forEach((el, i) => {
    el.classList.remove('visible');
    // Observe for scroll-based reveal
    state.revealObserver.observe(el);
    // Also trigger with delay for non-scrollable pages
    const scrollable = container.querySelector('.scrollable');
    if (!scrollable) {
      const delay = el.dataset.delay || (i * 200);
      setTimeout(() => el.classList.add('visible'), parseInt(delay) + 100);
    }
  });
}


/* ═══════════════════════════════════════════
   GALLERY (Moments Page)
   ═══════════════════════════════════════════ */
function initGallery() {
  const gallery = document.getElementById('gallery');
  const images = CONFIG.images;

  if (images.length === 0) {
    gallery.innerHTML = `
      <div class="gallery-placeholder">
        <p>📸 Hãy thêm ảnh vào thư mục /assets/images/</p>
        <p>và cập nhật danh sách trong CONFIG.images</p>
      </div>
    `;
    return;
  }

  // Create gallery items
  images.forEach((img, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item reveal';
    item.dataset.delay = (i * 100).toString();
    item.dataset.index = i;

    const imgEl = document.createElement('img');
    imgEl.src = `assets/images/${img}`;
    imgEl.alt = `Khoảnh khắc ${i + 1}`;
    imgEl.loading = 'lazy';

    item.appendChild(imgEl);
    gallery.appendChild(item);

    // Click to open lightbox
    item.addEventListener('click', () => openLightbox(i));

    // 3D tilt on hover (desktop)
    if (matchMedia('(pointer: fine)').matches) {
      item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        imgEl.style.transform = `scale(1.05) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
      });
      item.addEventListener('mouseleave', () => {
        imgEl.style.transform = '';
      });
    }
  });

  // Slideshow toggle
  const toggleBtn = document.getElementById('slideshow-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      state.isSlideshow = !state.isSlideshow;
      if (state.isSlideshow) {
        toggleBtn.textContent = '🎞️ Dừng trình chiếu';
        startSlideshow();
      } else {
        toggleBtn.textContent = '🎞️ Chế độ trình chiếu';
        stopSlideshow();
      }
    });
  }
}

function startSlideshow() {
  if (CONFIG.images.length === 0) return;
  state.lightboxIndex = 0;
  openLightbox(0);

  state.slideshowTimer = setInterval(() => {
    state.lightboxIndex = (state.lightboxIndex + 1) % CONFIG.images.length;
    updateLightboxImage();
  }, 3000);
}

function stopSlideshow() {
  if (state.slideshowTimer) {
    clearInterval(state.slideshowTimer);
    state.slideshowTimer = null;
  }
}


/* ═══════════════════════════════════════════
   LIGHTBOX
   ═══════════════════════════════════════════ */
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');

  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  document.getElementById('lightbox-prev').addEventListener('click', () => {
    state.lightboxIndex = (state.lightboxIndex - 1 + CONFIG.images.length) % CONFIG.images.length;
    updateLightboxImage();
  });
  document.getElementById('lightbox-next').addEventListener('click', () => {
    state.lightboxIndex = (state.lightboxIndex + 1) % CONFIG.images.length;
    updateLightboxImage();
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!state.lightboxOpen) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') {
      state.lightboxIndex = (state.lightboxIndex - 1 + CONFIG.images.length) % CONFIG.images.length;
      updateLightboxImage();
    }
    if (e.key === 'ArrowRight') {
      state.lightboxIndex = (state.lightboxIndex + 1) % CONFIG.images.length;
      updateLightboxImage();
    }
  });

  // Touch swipe support
  let touchStartX = 0;
  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  });
  lightbox.addEventListener('touchend', (e) => {
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        state.lightboxIndex = (state.lightboxIndex - 1 + CONFIG.images.length) % CONFIG.images.length;
      } else {
        state.lightboxIndex = (state.lightboxIndex + 1) % CONFIG.images.length;
      }
      updateLightboxImage();
    }
  });
}

function openLightbox(index) {
  if (CONFIG.images.length === 0) return;
  state.lightboxIndex = index;
  state.lightboxOpen = true;
  updateLightboxImage();
  document.getElementById('lightbox').classList.add('active');
}

function closeLightbox() {
  state.lightboxOpen = false;
  document.getElementById('lightbox').classList.remove('active');
  stopSlideshow();
  const toggleBtn = document.getElementById('slideshow-toggle');
  if (toggleBtn && state.isSlideshow) {
    state.isSlideshow = false;
    toggleBtn.textContent = '🎞️ Chế độ trình chiếu';
  }
}

function updateLightboxImage() {
  const img = document.getElementById('lightbox-img');
  img.style.opacity = '0';
  img.style.transform = 'scale(0.9)';
  setTimeout(() => {
    img.src = `assets/images/${CONFIG.images[state.lightboxIndex]}`;
    img.style.opacity = '1';
    img.style.transform = 'scale(1)';
  }, 200);
}


/* ═══════════════════════════════════════════
   THINGS I LOVE
   ═══════════════════════════════════════════ */
function initLoveThings() {
  const container = document.getElementById('love-things-container');

  // Shuffle array
  const shuffled = [...LOVE_THINGS].sort(() => Math.random() - 0.5);

  shuffled.forEach((thing, i) => {
    const el = document.createElement('div');
    el.className = 'love-thing reveal';
    el.dataset.delay = (i * 80).toString();
    el.style.setProperty('--r', (Math.random() * 6 - 3).toString());
    el.style.setProperty('--d', (Math.random() * 2).toFixed(1) + 's');

    el.innerHTML = `<span class="heart-icon">💗</span> ${thing}`;
    container.appendChild(el);
  });
}


/* ═══════════════════════════════════════════
   MELODY (Music Player + Visualizer)
   ═══════════════════════════════════════════ */
function initMelody() {
  const audio = document.getElementById('bg-audio');
  const playBtn = document.getElementById('play-btn');
  const musicToggle = document.getElementById('music-toggle');
  const songInfo = document.getElementById('song-info');
  const musicBars = document.querySelectorAll('.music-bar');

  state.audio = audio;
  state.playBtn = playBtn;
  state.musicToggle = musicToggle;
  state.songInfo = songInfo;
  state.musicBars = musicBars;

  setTrack(0, false);

  // Play/Pause button on melody page
  playBtn.addEventListener('click', () => toggleMusic());

  // Floating music toggle
  musicToggle.addEventListener('click', () => toggleMusic());

  // Add music bar animation keyframe dynamically
  const style = document.createElement('style');
  style.textContent = `
    @keyframes musicBarAnim {
      0% { height: 4px; }
      100% { height: 20px; }
    }
  `;
  document.head.appendChild(style);
}

function initAutoMusicGesture() {
  const onceStart = () => {
    if (state.hasUserGesture) return;
    state.hasUserGesture = true;
    if (CONFIG.music.length > 0) {
      setTrack(0, true);
      if (state.audio) {
        state.audio.volume = 0.18;
      }
    }
  };

  window.addEventListener('pointerdown', onceStart, { once: true });
}

function toggleMusic(forcePlay = null) {
  if (!state.audio) return;

  const shouldPlay = forcePlay === null ? state.audio.paused : forcePlay;
  if (shouldPlay) {
    state.audio.volume = 0.2;
    state.audio.play().then(() => {
      state.musicPlaying = true;
      if (state.playBtn) state.playBtn.textContent = '⏸';
      if (state.musicToggle) state.musicToggle.classList.add('playing');
      document.getElementById('music-icon').textContent = '♫';
      initAudioVisualizer();
      animateMusicBars(true);
      updateSongInfo();
    }).catch(() => {
      if (state.songInfo) state.songInfo.textContent = 'Trình duyệt cần thao tác chạm/click để phát nhạc 🎵';
    });
  } else {
    state.audio.pause();
    state.musicPlaying = false;
    if (state.playBtn) state.playBtn.textContent = '▶';
    if (state.musicToggle) state.musicToggle.classList.remove('playing');
    document.getElementById('music-icon').textContent = '♪';
    animateMusicBars(false);
  }
}

function setTrack(trackIndex, keepPlaybackState = true) {
  if (!state.audio || CONFIG.music.length === 0) return;

  const targetIndex = Math.max(0, Math.min(trackIndex, CONFIG.music.length - 1));
  const target = CONFIG.music[targetIndex];
  const wasPlaying = state.musicPlaying && !state.audio.paused;

  if (state.currentTrack === targetIndex && state.audio.src.includes(encodeURIComponent(target.file))) {
    updateSongInfo();
    return;
  }

  state.currentTrack = targetIndex;
  state.audio.src = `assets/music/${target.file}`;
  state.audio.load();
  updateSongInfo();

  if (keepPlaybackState && wasPlaying) {
    toggleMusic(true);
  }
}

function syncTrackByPage(pageId) {
  if (CONFIG.music.length === 0) return;
  const firstHalfPages = ['page-landing', 'page-confession', 'page-map', 'page-moments', 'page-love'];
  if (firstHalfPages.includes(pageId)) {
    setTrack(0, true);
    return;
  }
  setTrack(1, true);
}

function updateSongInfo() {
  if (!state.songInfo || CONFIG.music.length === 0) return;
  const song = CONFIG.music[state.currentTrack];
  state.songInfo.textContent = `${song.title} — ${song.note}`;
}

function animateMusicBars(playing) {
  if (!state.musicBars) return;
  state.musicBars.forEach((bar, i) => {
    if (playing) {
      bar.style.animation = `musicBarAnim ${0.4 + i * 0.1}s ease-in-out infinite alternate`;
    } else {
      bar.style.animation = 'none';
      bar.style.height = (4 + i * 2) + 'px';
    }
  });
}

function initAudioVisualizer() {
  if (state.analyser) return; // Already initialized

  const audio = document.getElementById('bg-audio');
  const canvas = document.getElementById('audio-canvas');
  const ctx = canvas.getContext('2d');

  try {
    state.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const source = state.audioContext.createMediaElementSource(audio);
    state.analyser = state.audioContext.createAnalyser();
    state.analyser.fftSize = 256;
    source.connect(state.analyser);
    state.analyser.connect(state.audioContext.destination);

    const bufferLength = state.analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    function drawVisualizer() {
      requestAnimationFrame(drawVisualizer);

      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      const w = canvas.width;
      const h = canvas.height;

      state.analyser.getByteFrequencyData(dataArray);
      ctx.clearRect(0, 0, w, h);

      const barWidth = (w / bufferLength) * 2.5;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = (dataArray[i] / 255) * h * 0.8;

        // Gradient per bar
        const hue = (i / bufferLength) * 60 + 320; // Pink to purple range
        ctx.fillStyle = `hsla(${hue}, 80%, 65%, 0.8)`;

        // Draw from center
        const y = (h - barHeight) / 2;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth - 2, barHeight, 3);
        ctx.fill();

        // Mirror
        ctx.fillStyle = `hsla(${hue}, 80%, 65%, 0.3)`;
        ctx.beginPath();
        ctx.roundRect(x, y + barHeight + 4, barWidth - 2, barHeight * 0.3, 3);
        ctx.fill();

        x += barWidth;
      }
    }
    drawVisualizer();
  } catch (e) {
    // Web Audio API not supported or other error
    console.log('Audio visualizer not available:', e);
  }
}


/* ═══════════════════════════════════════════
   CONFETTI
   ═══════════════════════════════════════════ */
function startConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.pointerEvents = 'none';

  const confetti = [];
  const colors = ['#ff6b9d', '#a855f7', '#fbbf24', '#60a5fa', '#f43f5e', '#ff9eb5', '#d4a5ff', '#ffd6e0'];

  // Burst confetti
  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 200,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 15,
      vy: Math.random() * -15 - 5,
      w: Math.random() * 10 + 5,
      h: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10,
      gravity: 0.15 + Math.random() * 0.1,
      alpha: 1,
    });
  }

  let animFrame;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    confetti.forEach(c => {
      c.vy += c.gravity;
      c.x += c.vx;
      c.y += c.vy;
      c.rotation += c.rotSpeed;
      c.vx *= 0.99;

      if (c.y > canvas.height + 50) {
        c.alpha -= 0.05;
      }
      if (c.alpha <= 0) return;
      alive = true;

      ctx.save();
      ctx.translate(c.x, c.y);
      ctx.rotate((c.rotation * Math.PI) / 180);
      ctx.globalAlpha = c.alpha;
      ctx.fillStyle = c.color;
      ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h);
      ctx.restore();
    });

    if (alive) {
      animFrame = requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animFrame);
    }
  }
  animate();

  // Also add continuous light confetti for 5 seconds
  let count = 0;
  const interval = setInterval(() => {
    count++;
    if (count > 25) { clearInterval(interval); return; }
    for (let i = 0; i < 8; i++) {
      confetti.push({
        x: Math.random() * canvas.width,
        y: -10,
        vx: (Math.random() - 0.5) * 3,
        vy: Math.random() * 2 + 1,
        w: Math.random() * 8 + 4,
        h: Math.random() * 5 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 8,
        gravity: 0.05 + Math.random() * 0.05,
        alpha: 1,
      });
    }
  }, 200);
}


/* ═══════════════════════════════════════════
   FIREWORKS (Secret Page)
   ═══════════════════════════════════════════ */
function startFireworks() {
  const canvas = document.getElementById('fireworks-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ['#ff6b9d', '#a855f7', '#fbbf24', '#60a5fa', '#f43f5e', '#ffd700'];

  function createBurst(x, y) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const count = 50 + Math.floor(Math.random() * 30);
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 / count) * i + Math.random() * 0.3;
      const speed = Math.random() * 4 + 2;
      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: Math.random() * 2 + 1,
        color,
        alpha: 1,
        decay: 0.01 + Math.random() * 0.015,
        gravity: 0.02,
      });
    }
  }

  // Launch fireworks
  let launchCount = 0;
  const interval = setInterval(() => {
    createBurst(
      Math.random() * canvas.width * 0.6 + canvas.width * 0.2,
      Math.random() * canvas.height * 0.4 + canvas.height * 0.1
    );
    launchCount++;
    if (launchCount > 12) clearInterval(interval);
  }, 600);

  let animFrame;
  function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let alive = false;
    particles.forEach(p => {
      p.vy += p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= p.decay;

      if (p.alpha <= 0) return;
      alive = true;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      ctx.globalAlpha = 1;
    });

    if (alive || launchCount <= 12) {
      animFrame = requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animFrame);
    }
  }
  animate();
}


/* ═══════════════════════════════════════════
   HEART EXPLOSION (Thank You Page)
   ═══════════════════════════════════════════ */
function createHeartExplosion() {
  const hearts = ['💗', '💕', '💖', '🌸', '✨', '🤍', '💜', '❤️'];
  const container = document.getElementById('page-thankyou');

  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.cssText = `
        position: absolute;
        font-size: ${Math.random() * 20 + 15}px;
        left: 50%;
        top: 50%;
        pointer-events: none;
        z-index: 20;
        opacity: 1;
        transition: all ${1 + Math.random()}s var(--ease-out);
      `;
      container.appendChild(heart);

      requestAnimationFrame(() => {
        const angle = (Math.PI * 2 / 30) * i;
        const dist = 100 + Math.random() * 200;
        heart.style.transform = `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px) scale(${0.5 + Math.random()})`;
        heart.style.opacity = '0';
      });

      setTimeout(() => heart.remove(), 2500);
    }, i * 50);
  }
}


/* ═══════════════════════════════════════════
   EASTER EGG
   ═══════════════════════════════════════════ */
function initEasterEgg() {
  const heartEl = document.getElementById('easter-heart');
  let clicks = 0;
  let clickTimer;

  heartEl.addEventListener('click', () => {
    clicks++;
    heartEl.classList.add('clicked');
    setTimeout(() => heartEl.classList.remove('clicked'), 300);

    // Visual feedback
    heartEl.style.transform = `scale(${1 + clicks * 0.1})`;

    clearTimeout(clickTimer);
    clickTimer = setTimeout(() => {
      clicks = 0;
      heartEl.style.transform = '';
    }, 2000);

    if (clicks >= CONFIG.secretClicks) {
      clicks = 0;
      heartEl.style.transform = '';
      openSecretPage();
    }
  });
}

function openSecretPage() {
  if (state.secretUnlocked) {
    navigateTo('page-secret');
    return;
  }
  state.secretUnlocked = true;
  navigateTo('page-secret');
}


/* ═══════════════════════════════════════════
   PASSWORD MODAL
   ═══════════════════════════════════════════ */
function initPasswordModal() {
  const modal = document.getElementById('password-modal');
  const input = document.getElementById('secret-password');
  const submit = document.getElementById('password-submit');

  submit.addEventListener('click', checkPassword);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') checkPassword();
  });

  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closePasswordModal();
  });

  function checkPassword() {
    if (input.value === CONFIG.secretPassword) {
      closePasswordModal();
      openSecretPage();
    } else {
      input.style.borderColor = '#f43f5e';
      input.value = '';
      setTimeout(() => input.style.borderColor = '', 1000);
    }
  }
}

function showPasswordModal() {
  const modal = document.getElementById('password-modal');
  modal.classList.add('active');
  document.getElementById('secret-password').focus();
}

function closePasswordModal() {
  const modal = document.getElementById('password-modal');
  modal.classList.remove('active');
  document.getElementById('secret-password').value = '';
}


/* ═══════════════════════════════════════════
   KEYBOARD SECRETS
   ═══════════════════════════════════════════ */
function initKeyboardSecrets() {
  document.addEventListener('keydown', (e) => {
    // Build password buffer
    if (e.key >= '0' && e.key <= '9') {
      state.passwordBuffer += e.key;
      if (state.passwordBuffer.length > 4) {
        state.passwordBuffer = state.passwordBuffer.slice(-4);
      }
      if (state.passwordBuffer === CONFIG.secretPassword) {
        state.passwordBuffer = '';
        openSecretPage();
      }
    }

    // Press 'S' to open password modal
    if (e.key === 's' || e.key === 'S') {
      if (!state.lightboxOpen && state.currentPage !== 'page-secret') {
        // Don't interfere with typing in input fields
        if (document.activeElement.tagName !== 'INPUT') {
          showPasswordModal();
        }
      }
    }

    // Escape closes modals
    if (e.key === 'Escape') {
      closePasswordModal();
    }
  });
}


/* ═══════════════════════════════════════════
   CHOICE PAGE
   ═══════════════════════════════════════════ */
function initChoice() {
  const yesBtn = document.getElementById('btn-yes');
  const maybeBtn = document.getElementById('btn-maybe');

  yesBtn.addEventListener('click', () => {
    navigateTo('page-thankyou');
  });

  // "Em cần suy nghĩ" button dodges on hover (desktop)
  if (matchMedia('(pointer: fine)').matches) {
    let dodgeCount = 0;

    maybeBtn.addEventListener('mouseenter', () => {
      dodgeCount++;

      // After 3 dodges, let them click
      if (dodgeCount > 3) {
        maybeBtn.style.position = '';
        maybeBtn.style.transform = '';
        return;
      }

      const maxX = window.innerWidth - 200;
      const maxY = window.innerHeight - 100;
      const newX = Math.random() * maxX;
      const newY = Math.random() * maxY;

      maybeBtn.style.position = 'fixed';
      maybeBtn.style.left = newX + 'px';
      maybeBtn.style.top = newY + 'px';
      maybeBtn.style.zIndex = '1000';
    });

    // If they manage to click anyway
    maybeBtn.addEventListener('click', () => {
      maybeBtn.style.position = '';
      maybeBtn.textContent = '💕 Em đồng ý rồi mà!';
      maybeBtn.style.background = 'var(--gradient-love)';
      maybeBtn.style.color = 'white';
      maybeBtn.style.border = 'none';
      setTimeout(() => navigateTo('page-thankyou'), 1000);
    });
  } else {
    // Mobile: just show cute response
    maybeBtn.addEventListener('click', () => {
      maybeBtn.textContent = '💕 Anh biết em đồng ý mà!';
      maybeBtn.style.background = 'var(--gradient-love)';
      maybeBtn.style.color = 'white';
      maybeBtn.style.border = 'none';
      setTimeout(() => navigateTo('page-thankyou'), 1200);
    });
  }

  // Make Yes button grow on hover
  yesBtn.addEventListener('mouseenter', () => {
    yesBtn.style.transform = 'scale(1.15)';
    yesBtn.style.boxShadow = '0 12px 50px rgba(255, 107, 157, 0.7)';
  });
  yesBtn.addEventListener('mouseleave', () => {
    yesBtn.style.transform = '';
    yesBtn.style.boxShadow = '';
  });
}


/* ═══════════════════════════════════════════
   UTILITY: Parallax on scroll
   ═══════════════════════════════════════════ */
document.querySelectorAll('.scrollable').forEach(container => {
  container.addEventListener('scroll', () => {
    const scrolled = container.scrollTop;
    const title = container.querySelector('.section-title');
    if (title) {
      title.style.transform = `translateY(${scrolled * 0.15}px)`;
    }
  });
});


/* ═══════════════════════════════════════════
   UTILITY: Canvas roundRect polyfill
   ═══════════════════════════════════════════ */
if (!CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, radii) {
    const r = typeof radii === 'number' ? radii : (radii?.[0] || 0);
    this.moveTo(x + r, y);
    this.arcTo(x + w, y, x + w, y + h, r);
    this.arcTo(x + w, y + h, x, y + h, r);
    this.arcTo(x, y + h, x, y, r);
    this.arcTo(x, y, x + w, y, r);
    this.closePath();
  };
}


/* ═══════════════════════════════════════════
   SERVICE WORKER REGISTRATION (optional)
   ═══════════════════════════════════════════ */
// Uncomment if you want offline support:
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/sw.js');
// }

console.log('%c💕 Gửi em — Trần Bảo Quỳnh', 'font-size: 24px; color: #ff6b9d; font-family: cursive;');
console.log('%cCrafted with love by Trần Tiến Dũng', 'font-size: 14px; color: #a855f7;');
