# 💕 Valentine Website — Gửi Trần Bảo Quỳnh

> Đây không chỉ là một website. Đây là cách một lập trình viên dùng code để nói lời yêu.

## 🌹 Giới Thiệu

Website Valentine đa tầng, được xây dựng hoàn toàn bằng HTML5 + CSS3 + JavaScript thuần.
Mỗi trang là một tầng bất ngờ — một hành trình cảm xúc từ lời tỏ tình, album ảnh, đến trang bí mật Easter Egg.

## 📂 Cấu Trúc

```
valentine/
├── index.html            # Trang chính (Single Page App)
├── netlify.toml          # Cấu hình Netlify
├── README.md             # File này
└── assets/
    ├── css/
    │   └── style.css     # Stylesheet chính
    ├── js/
    │   └── main.js       # JavaScript engine
    ├── images/           # ← Thêm ảnh của bạn vào đây
    └── music/            # ← Thêm nhạc vào đây
```

## 🚀 Hướng Dẫn Sử Dụng

### 1. Thêm Ảnh

Đặt ảnh vào thư mục `/assets/images/`, sau đó mở file `assets/js/main.js` và cập nhật danh sách:

```javascript
const CONFIG = {
  images: [
    'anh1.jpg',
    'anh2.jpg',
    'date-night.jpg',
    // Thêm bao nhiêu cũng được
  ],
  // ...
};
```

### 2. Thêm Nhạc

Đặt file nhạc (MP3) vào `/assets/music/`, rồi cập nhật:

```javascript
const CONFIG = {
  // ...
  music: [
    { title: 'Một Bài Hát Tình Yêu', file: 'love-song.mp3' },
  ],
};
```

### 3. Tùy Chỉnh Nội Dung

Tất cả nội dung có thể tùy chỉnh đều nằm trong phần `CONFIG` ở đầu file `main.js`:
- Lời tỏ tình (typing text)
- Danh sách ảnh
- Danh sách nhạc
- Mật khẩu Easter Egg (mặc định: `1402`)

## 🌐 Deploy Lên Netlify

### Cách 1: Kéo Thả (Nhanh Nhất)

1. Truy cập [app.netlify.com/drop](https://app.netlify.com/drop)
2. Kéo thả toàn bộ thư mục `valentine/` vào trang
3. Done! Netlify sẽ cung cấp link

### Cách 2: Git + Netlify

1. Push code lên GitHub:
   ```bash
   git init
   git add .
   git commit -m "💕 Valentine website"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Vào [Netlify](https://app.netlify.com) → New Site → Import from Git
3. Chọn repository → Deploy

### Cách 3: Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=.
```

## 🔐 Easter Egg

Website có một trang bí mật! Cách mở:
- Click trái tim 💗 ở góc trái dưới **5 lần**
- Hoặc nhấn phím **S** rồi nhập mật khẩu: **1402**
- Hoặc gõ **1402** bất kỳ lúc nào

## ✨ Tính Năng

| Tính năng | Mô tả |
|-----------|-------|
| 🌠 Starfield | Bầu trời sao + sao băng trên canvas |
| ⌨️ Typing Effect | Hiệu ứng gõ chữ tự nhiên |
| 💕 Floating Hearts | Tim bay nhẹ nhàng nền trang |
| 🖼️ Gallery | Masonry grid + Lightbox + 3D hover |
| 🎵 Music Player | Nhạc nền + Audio Visualizer |
| 🎊 Confetti | Hiệu ứng confetti khi "Đồng ý" |
| 🎆 Fireworks | Pháo hoa trên trang bí mật |
| 💗 Custom Cursor | Con trỏ hình trái tim (desktop) |
| 📱 Responsive | Tối ưu mobile |
| 🎬 Page Transitions | Chuyển trang mượt mà |

## 💻 Tech Stack

- HTML5 + CSS3 + Vanilla JavaScript
- Canvas API (stars, visualizer, confetti, fireworks)
- Web Audio API (audio visualizer)
- IntersectionObserver (scroll reveal)
- Không framework, không dependency

---

*Crafted with love ❤️ by Trần Tiến Dũng — Valentine 2026*
