# Quick Setup Guide

## 1. Update MongoDB Password
Replace `<db_password>` in `.env.local` with your actual MongoDB password

## 2. Generate NextAuth Secret
Run this command to generate a secret:
```bash
openssl rand -base64 32
```

## 3. Update .env.local
Replace the placeholder in `.env.local`:
```env
DATABASE_URL=mongodb+srv://Suniti123:YOUR_ACTUAL_PASSWORD@cluster0.do2l3go.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
NEXTAUTH_SECRET=your_generated_secret_here
NEXTAUTH_URL=http://localhost:3000
```

## 4. Start App
```bash
npm run dev
```

Your authentication system will now work at:
- http://localhost:3000/auth/signup
- http://localhost:3000/auth/signin

MongoDB will automatically create the database and collections when first used.