Luxury Time 🕰️
Luxury Time is a premium e-commerce platform for luxury watches, offering a seamless and elegant shopping experience. Built with Vite, Next.js, TypeScript, and Firebase, it combines a modern frontend with a serverless backend for performance and scalability.

🌟 Features

Curated Watch Collection: Browse high-end watches with detailed descriptions and stunning visuals.
Secure User Authentication: Powered by Firebase Authentication for safe login and registration.
Real-Time Data: Firebase Firestore manages products, orders, and user data with real-time updates.
Fast & Responsive: Optimized with Vite and Next.js for lightning-fast performance across devices.
Type-Safe Codebase: TypeScript ensures reliability and maintainability.
Intuitive Shopping: Smooth cart and checkout experience.

🛠️ Tech Stack

Frontend: Vite, Next.js, TypeScript, Tailwind CSS
Backend: Firebase (Authentication, Firestore, Storage, Hosting)
Deployment: Vercel (Next.js) and Firebase Hosting

🚀 Getting Started
Prerequisites

Node.js (v18+)
pnpm (recommended)
Firebase Account

Installation

Clone the Repository:
git clone https://github.com/your-username/luxury-time.git
cd luxury-time


Install Dependencies:
pnpm install


Configure Firebase:

Create a Firebase project in the Firebase Console.
Enable Authentication, Firestore, and Storage.
Add your Firebase config to .env.local:NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id




Run Locally:
pnpm dev

Visit http://localhost:3000 in your browser.

Build for Production:
pnpm build
pnpm start



📂 Project Structure
luxury-time/
├── public/              # Static assets (images, fonts)
├── src/
│   ├── components/      # Reusable React components
│   ├── pages/           # Next.js pages
│   ├── lib/             # Firebase utilities
│   ├── types/           # TypeScript definitions
│   ├── styles/          # Tailwind CSS and global styles
├── .env.local           # Firebase environment variables
├── vite.config.ts       # Vite configuration
├── next.config.js       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── README.md            # This file

🔥 Firebase Setup

Authentication: Supports email/password and Google login.
Firestore: Stores product catalogs, user profiles, and orders.
Storage: Hosts watch images and media.
Hosting: Deploys static assets for fast load times.

Configure Firestore security rules and indexes for optimal performance.
🤝 Contributing
We welcome contributions! To get started:

Fork the repository.
Create a branch: git checkout -b feature/your-feature.
Commit changes: git commit -m "Add your feature".
Push to your branch: git push origin feature/your-feature.
Open a Pull Request.

Please follow our Code of Conduct and ensure your code adheres to the project's style guide.
📜 License
Licensed under the MIT License.
📧 Contact
For questions or feedback, reach out at support@luxurytime.com or open an issue on GitHub.

Luxury Time - Timeless elegance, one watch at a time. 🕰️
