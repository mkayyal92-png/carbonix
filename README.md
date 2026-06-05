# carbonix
AI 3D E-commerce platform with Next.js, Supabase and AI integration for image and text to 3D models
# 🚀 Carbonix Lab

منصة ذكية متكاملة تجمع بين **المتجر الإلكتروني** و**الذكاء الاصطناعي** لإنشاء نماذج ثلاثية الأبعاد من الصور أو النصوص.

---

## 🧠 فكرة المشروع

Carbonix Lab هو نظام SaaS يسمح للمستخدمين بـ:

- 🛒 تصفح وشراء منتجات الطباعة ثلاثية الأبعاد
- 📤 رفع صور وتحويلها إلى نماذج 3D
- 🤖 إنشاء مجسمات من نصوص باستخدام AI
- 🎮 عرض النماذج ثلاثية الأبعاد داخل الموقع
- 📦 إدارة الطلبات من لوحة تحكم

---

## ⚙️ التقنيات المستخدمة

- Next.js 14 (App Router)
- TailwindCSS
- Supabase (Database + Auth + Storage)
- Three.js / React Three Fiber
- AI APIs (Meshy / Tripo)

---

## 🧩 المميزات

✔ متجر إلكتروني  
✔ نظام طلبات  
✔ رفع ملفات وصور  
✔ تحويل صورة → 3D  
✔ تحويل نص → 3D  
✔ عارض 3D تفاعلي  
✔ لوحة تحكم إدارية  
✔ تصميم RTL عربي  
package.json{
  "name": "carbonix-lab",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "14.2.0",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  }
}
---

## 🚀 تشغيل المشروع محلياً

```bash
npm install
npm run dev
