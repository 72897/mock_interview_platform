# AItern - Mock Interview Platform

AItern is a full-stack AI-powered mock interview platform built using **Next.js**, **Firebase**, **Vapi**, and **Google Gemini API**. It helps users practice interviews with voice-enabled AI interviewers and get real-time feedback.

Live Demo: [https://mock-interview-platform-three.vercel.app/](https://mock-interview-platform-three.vercel.app/)

---

## 👨‍💻 Tech Stack

- **Frontend:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS, shadcn/ui components
- **Authentication:** Firebase Auth
- **AI Interviewer:** Google Gemini + Vapi (Voice API)
- **Database:** Firebase Firestore
---
## ⚙️ Project Setup

**Clone the Repository**
```bash
git clone https://github.com/72897/mock-interview-platform.git
cd mock-interview-platform
npm install
```

**Create `.env.local` File**
Create a file at the root called `.env.local` and add:
```env
# Firebase Admin
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_client_email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

# Google Gemini API
GOOGLE_GENERATIVE_AI_API_KEY=your_google_gemini_api_key

# Vapi Config
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_web_token
NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_vapi_workflow_id
```

---

## 📁 Project Structure

```
├── app
│   ├── (auth)         # Authentication routes
│   ├── (root)         # Main routes
│   ├── api            # API routes
│   ├── favicon.ico
│   ├── globals.css    # Global styles
│   └── layout.tsx     # Root layout
│
├── components         # Reusable UI components
├── constants          # Static constants
├── firebase           # Firebase config
├── lib                # Utility functions
├── public             # Static assets
├── types              # TypeScript types
│
├── .env.local         # Environment variables
├── .gitignore
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

---

## 🔐 Environment Variables

Create a `.env.local` file at the root and add:

```env
FIREBASE_PROJECT_ID=aitern
FIREBASE_PRIVATE_KEY="<your_private_key>"
FIREBASE_CLIENT_EMAIL="firebase-adminsdk-xxx@aitern.iam.gserviceaccount.com"

GOOGLE_GENERATIVE_AI_API_KEY="<your_google_gemini_api_key>"

NEXT_PUBLIC_VAPI_WEB_TOKEN="<your_vapi_token>"
NEXT_PUBLIC_VAPI_WORKFLOW_ID="<your_vapi_workflow_id>"
```

Make sure you replace `<your_private_key>`, `<your_google_gemini_api_key>`, etc., with your actual keys.

> ⚠️ Never expose your `.env` file publicly.

---

## 🔧 Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a project and register a web app
3. Enable **Authentication** (Email/Password)
4. Enable **Firestore Database**
5. Generate a service account key and copy credentials to `.env.local`

---

## 🔊 Vapi Setup (Voice API)

1. Visit [vapi.ai](https://vapi.ai/) and create an account
2. Create a new **Workflow**
3. Get your **Web Token** and **Workflow ID** from the dashboard
4. Add them to your `.env.local`
5. Vapi is used for real-time voice interaction between user and AI interviewer

---

## 🤖 Google Gemini API Setup

1. Go to [Google AI Studio](https://makersuite.google.com/app)
2. Create a Gemini API Key
3. Add it to `.env.local` under `GOOGLE_GENERATIVE_AI_API_KEY`
4. Used to generate real-time interview questions and responses

---

## 🛠️ Running Locally

```bash
git clone https://github.com/72897/mock-interview-platform
cd mock-interview-platform
npm install
npm run dev
```

Visit `http://localhost:3000` to see it in action.

---

## 📫 Contact

Made with ❤️ by [Kunal Singh](https://www.linkedin.com/in/kunal-singh-454368289/)

GitHub: [72897](https://github.com/72897/)

