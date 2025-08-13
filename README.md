# IELTS Mock Imtihoni Mini Platformasi

## 📌 Project Description
"Online IELTS Mock Test platformasi orqali foydalanuvchilar IELTS testini real sharoitda sinab ko‘rishlari mumkin."

## 🎯 Purpose of the Project
Ko‘plab IELTS tayyorgarlik qilayotgan talabalar o‘z bilim darajasini real sharoitga yaqin tarzda tekshira olmaydi. Ushbu platforma yordamida foydalanuvchi:
- Testni boshlaydi.
- Har bir savolga javob beradi.
- Yakunda umumiy natijani ko‘radi.
- Real vaqtli taymer orqali vaqtni boshqarishni o‘rganadi.

## 👥 Roles of the Participants
- **Xolmamatov Otabek** — Full-Stack Developer | Tajriba: 2 yil

## 🛠 Technologies Used
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Tools**: Git, GitHub, Postman

## 📂 Features
- ✅ Admin panel orqali savol CRUD (qo‘shish, o‘qish, tahrirlash, o‘chirish)
- ✅ Testni boshlash
- ✅ Tasodifiy savollar
- ✅ 10 daqiqalik taymer
- ✅ Foydalanuvchi javoblari va yakuniy natija
- ✅ Toza va minimalist dizayn

## 📌 API Endpoints
### Admin
- `POST /api/questions` — Savol qo‘shish
- `GET /api/questions` — Savollarni olish
- `PUT /api/questions/:id` — Savolni tahrirlash
- `DELETE /api/questions/:id` — Savolni o‘chirish

### User
- `GET /api/test` — Tasodifiy test savollarini olish
- `POST /api/submit` — Test javoblarini yuborish va natija olish

## 📊 UML Diagram
<img width="1536" height="1024" alt="Ielts uml" src="https://github.com/user-attachments/assets/7f00c953-18fb-43b9-a880-0f0b5600ef0b" />


## 🚀 Installation
```bash
# Backend
cd backend
npm install
npm run dev

# Frontend
cd frontend
npm install
npm start
