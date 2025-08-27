# Authentication Setup Instructions

## 1. Environment Variables
Update `.env.local` with your actual values:

```env
DATABASE_URL=your_neon_database_url_here
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=http://localhost:3000
```

## 2. Database Setup
Run the database setup script:
```bash
npm run db:setup
```

## 3. Start the Application
```bash
npm run dev
```

## 4. Test Authentication
- Visit `/auth/signup` to create an account
- Visit `/auth/signin` to sign in
- The main dashboard will be protected and require authentication

## Features Added:
- User registration with password hashing
- User authentication with NextAuth
- Protected routes with middleware
- Sign in/Sign up pages
- User session management
- Logout functionality in navbar