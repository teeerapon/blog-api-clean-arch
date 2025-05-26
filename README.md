# 📰 NestJS Blog API — Clean Architecture

โปรเจกต์นี้เป็นระบบ Blog API ที่สร้างด้วย [NestJS](https://nestjs.com/) 
และออกแบบตามหลัก **Clean Architecture** 
โดยแบ่งเลเยอร์เป็น `domain`, `application`, `infrastructure` และ `presentation` อย่างชัดเจน

---

## 🚀 เริ่มต้นใช้งาน

### 1. Clone โปรเจกต์

```bash
git clone https://github.com/teeerapon/blog-api-clean-arch.git
cd blog-api-clean-arch
```

### 2. ติดตั้ง dependencies

```bash
npm install
```

### 3. รันโปรเจกต์

```bash
npm run start:dev
```

> ใช้งานผ่าน http://localhost:3001/api

---

## 🧪 รัน Unit Tests

```bash
npm run test
```

หากยังไม่มี dev dependencies สำหรับ Jest ต้องทำการติดตั้งด้วย command ด้านล่างนี้:

```bash
npm install --save-dev jest ts-jest @types/jest @nestjs/testing typescript ts-node @types/node
```
---

## 📦 Dependencies หลัก

### Runtime

- `@nestjs/common`, `@nestjs/core`, `@nestjs/platform-express`
- `class-validator` — validation แบบ OOP

### Dev (ควรติดตั้งเพิ่มหากยังไม่มี)

- `jest`, `ts-jest`, `@types/jest`
- `@nestjs/testing`
- `typescript`, `ts-node`, `@types/node`
  
---

## 🗂️ โครงสร้างโปรเจกต์

## application
- `blog\application\test` - Unit tests ของ use-cases
- `blog\application\use-case` - Use-cases หลักของโปรเจ็ก
- 
## domain
- `blog\domain\models` - โครงสร้างข้อมูลและ entity
- `blog\domain\repositories` - Interface ของ repository

## infrastructure
- `blog\infrastructure\mock-data` - mock ข้อมูลที่ใช้ในระบบ
- `blog\infrastructure\repository` - mock repository ที่ใช้แทนฐานข้อมูลจริง
  
## presentation
- `blog\presentation\http` - Controller สำหรับ REST API

## blog.module.ts
- `blog\blog.module.ts` - Main module ของ blog feature
  
## main.ts
- `main.ts` - Entry point ของแอป

---

## ✅ Features ที่รองรับ

- สร้าง/แก้ไข/ลบ Post
- จัดการ Comment และ Category
- Mock Repository สำหรับทดสอบ

---

## 💡 หมายเหตุ

- โปรเจกต์นี้ยังไม่เชื่อมต่อฐานข้อมูลจริง ใช้ `mock repository` แทน
- เหมาะสำหรับใช้เป็น template ในการเริ่มต้นโปรเจกต์จริงที่ใช้ Clean Architecture

## 🧑‍💻 ผู้พัฒนา

พัฒนาโดย Teerapon Suksangpleng 
สามารถนำไปใช้งาน ปรับแต่ง และขยายต่อได้ตามต้องการ 🎉