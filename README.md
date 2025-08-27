# EcommDash - E-commerce Dashboard

A modern, full-stack e-commerce dashboard built with Next.js 15, featuring authentication, data visualization, and comprehensive admin functionality.

## Features

### 🔐 Authentication System
- User registration and login
- Secure password hashing with bcrypt
- Session management with NextAuth.js
- Protected routes with middleware
- Automatic redirects for authenticated/unauthenticated users

### 📊 Dashboard Components
- **Statistics Cards**: Revenue, orders, customers, and growth metrics
- **Order History Chart**: Visual representation of order trends
- **Recent Orders**: Latest order management
- **Top Products**: Best-selling product analytics
- **Customer Reviews**: Review management system
- **Product Management**: Complete CRUD operations
- **Category Management**: Product categorization

### 🎨 UI/UX Features
- Dark/Light theme toggle
- Responsive design for all devices
- Modern UI with Tailwind CSS and shadcn/ui
- Interactive charts with Recharts
- Toast notifications
- Loading states and error handling

## Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Authentication**: NextAuth.js
- **Database**: MongoDB with native driver
- **Charts**: Recharts
- **Icons**: Lucide React
- **State Management**: Zustand
- **Notifications**: React Hot Toast

## Getting Started

### Prerequisites
- Node.js 18+ 
- MongoDB Atlas account
- Git

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd CartWork
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**
Create a `.env.local` file in the root directory:
```env
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/ecommdash?retryWrites=true&w=majority
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## Authentication Flow

1. **First Visit**: Users are redirected to sign-in page
2. **Sign Up**: New users can create accounts with name, email, and password
3. **Sign In**: Existing users authenticate with email and password
4. **Dashboard Access**: Authenticated users access the full dashboard
5. **Sign Out**: Users can sign out from the navigation bar

## Project Structure

```
CartWork/
├── app/
│   ├── api/auth/          # Authentication API routes
│   ├── auth/              # Sign-in/Sign-up pages
│   ├── components/        # Reusable UI components
│   ├── content-area/      # Dashboard content sections
│   ├── data/              # Mock data and utilities
│   ├── hooks/             # Custom React hooks
│   └── side-bar/          # Navigation sidebar
├── components/ui/         # shadcn/ui components
├── lib/                   # Utilities and configurations
│   ├── auth.ts           # NextAuth configuration
│   ├── db.ts             # Database connection
│   └── schema.ts         # Data schemas
└── middleware.ts          # Route protection
```

## Key Components

### Dashboard Sections
- **Statistics**: Revenue, orders, customers metrics
- **Orders**: Order management and history
- **Products**: Product catalog management
- **Categories**: Product categorization
- **Analytics**: Charts and data visualization

### Authentication
- **Middleware**: Protects routes and handles redirects
- **NextAuth**: Handles authentication flow
- **MongoDB**: Stores user credentials securely

## Database Schema

### Users Collection
```typescript
{
  _id: ObjectId,
  name: string,
  email: string,
  password: string, // bcrypt hashed
  createdAt: Date,
  updatedAt: Date
}
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Environment Variables for Production
```env
DATABASE_URL=your-mongodb-connection-string
NEXTAUTH_SECRET=your-production-secret
NEXTAUTH_URL=https://your-domain.com
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For support, email your-email@example.com or create an issue in the repository.