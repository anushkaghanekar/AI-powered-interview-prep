# AI-powered-interview-prep

AI Powered Interview Prep - An interview preparation website with user authentication and personalized AI-driven practice questions to help users prepare effectively for their job interviews
<br>

💻# Features<br>
🔐User authenication<br>
🤖AI generated interview questions<br>
📊User Tracking<br>
🌐Web friendly UI<br>
<br>

🎯# Tech Stcak<br>
🖥️Frontend :- HTML, CSS, React.js<br>
⚙️Backend :- Express.js, Node. js<br>
🗄️Database :- MongoDB<br>
🧠AI Integration :- Google Gemini API<br>

🚀Smart AI based tool to improve interview prep and job efficiency.

⚙️INSTALLATION AND SETUP <br>
1.Prerequisites<br>
Before running the project, make sure you have installed:<br>

◽Node.js (v18+ recommended) & npm<br>
Check installation:<br>
➡️node -v<br>
➡️npm -v<br>

◽Git<br>
Check installation:<br>
➡️git --version<br>

2.Setup backend (server) <br>
➡️cd server <br>
➡️npm install # install dependencies if node_modules is missing<br>
➡️npm run dev # start backend server<br>

3.Setup frontend (client)<br>
➡️cd ../client <br>
➡️npm install # install dependencies if node_modules is missing <br>
➡️npm run dev # start frontend server<br>

4.Verify <br>
✅Both frontend and backend are running without errors. <br>
✅Test any functionality that communicates with the backend.<br>

🧩Usage<br>
🔐 User Authentication – Sign up or log in securely.<br>

🤖 AI Interviews – Answer AI-generated questions.<br>

📊 User Tracking – Monitor your progress and performance.<br>

🌐 Web-Friendly UI – Works smoothly on all devices.<br>

⭐ Nice Preparation – Practice effectively for real interviews.<br>

👤 User-Friendly – Easy navigation and intuitive design.<br>

🚀 DEPLOYMENT OPTIONS <br>
You can deploy this project using either Render or Vercel<br>


🟦 DEPLOYMENT ON VERCEL <br>

1️⃣ **Backend Deployment (Server)** <br>
⚠️ Render is recommended for backend since Vercel is mainly for frontend/static apps.<br>
If you still want to use Vercel, convert Express to Serverless Functions.<br>
OR host backend on Render and connect it to your Vercel frontend.<br>

2️⃣ **Frontend Deployment (Client)** <br>
◽ Go to 👉 https://vercel.com<br>
◽ Log in with GitHub account.<br>
◽ Click “Add New Project”.<br>
◽ Select your repository.<br>
◽ Root Directory ➜ <b>client</b><br>
◽ Build Command ➜ npm run build<br>
◽ Output Directory ➜ dist (or build)<br>
◽ Add environment variable:<br>
🔑 VITE_API_BASE_URL = your backend Render URL (e.g. https://ai-interview-backend.onrender.com)<br>
◽ Click “Deploy”.<br>

✅ After deployment, your site will be live at:<br>
🌐 https://ai-interview-prep.vercel.app<br>

🟩 DEPLOYMENT ON RENDER <br>

1️⃣ **Backend Deployment (Server)** <br>
◽ Go to 👉 https://render.com and log in with your GitHub account.<br>
◽ Click “New +” → “Web Service”.<br>
◽ Select your GitHub repository.<br>
◽ Set Root Directory ➜ <b>server</b><br>
◽ Build Command ➜ npm install<br>
◽ Start Command ➜ node server.js or npm run start<br>
◽ Add environment variables:<br>
🔑 MONGO_URI = your MongoDB connection string<br>
🔑 JWT_SECRET = your JWT secret key<br>
🔑 GEMINI_API_KEY = your Gemini API key<br>
🔑 PORT = 10000 (Render auto assigns if left blank)<br>
◽ Click “Deploy”.<br>
◽ After deployment, copy your backend Render URL (example: https://ai-interview-backend.onrender.com).<br>

2️⃣ **Frontend Deployment (Client)** <br>
◽ On Render, click “New +” → “Static Site”.<br>
◽ Select the same repository.<br>
◽ Root Directory ➜ <b>client</b><br>
◽ Build Command ➜ npm run build<br>
◽ Publish Directory ➜ dist (or build, depending on setup)<br>
◽ Add environment variable:<br>
🔑 VITE_API_BASE_URL = your backend Render URL<br>
◽ Deploy your frontend.<br>

3️⃣ **Connect Frontend & Backend** <br>
Edit your frontend config:<br>
👉 export const BASE_URL = "https://ai-interview-backend.onrender.com";<br>
Rebuild & redeploy frontend.<br>

✅ Done! Your full stack app runs completely on Render<br>


📁 Example Folder Structure <br>
AI-powered-interview-prep/<br>
├── client/  → Frontend React app (Render or Vercel)<br>
├── server/  → Backend Node/Express API (Render)<br>
├── README.md<br>
└── package.json<br>
FUTURE ENHANCEMENTS <br>
✨ Add AI-based mock interview feedback and scoring.<br>
🎤 Integrate voice-based question answering and analysis.<br>
📅 Add personalized study plans and progress calendar.<br>
🧩 Include coding interview section (DSA + MCQs).<br>
📱 Create a mobile-friendly PWA version.<br>
📊 Add analytics dashboard for user insights.<br>
💬 Implement chatbot-style interactive practice sessions.<br>