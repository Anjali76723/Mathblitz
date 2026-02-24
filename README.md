# Math Blitz - Multiplayer Math Game

A real-time multiplayer math game with authentication, rating system, and competitive gameplay.

## 🎮 Features

### ✅ Authentication System
- Email/Password registration and login
- Google OAuth integration
- JWT-based session management
- Secure password hashing with bcryptjs

### ✅ Single Player Mode
- Practice mode with timed challenges
- Multiple difficulty levels (1-5 minutes)
- Score tracking without affecting multiplayer ratings
- Instant feedback on answers

### ✅ Multiplayer Mode
- Real-time multiplayer battles using Socket.IO
- Create or join game rooms with unique codes
- Live opponent tracking
- Synchronized game state across players
- Head-to-head competition

### ✅ Rating System (Glicko-2)
- Dynamic rating calculation based on performance
- Rating Deviation (RD) for confidence measurement
- Global leaderboard with live updates
- Rank calculation based on rating
- Fair matchmaking through rating system

## 🚀 Tech Stack

### Frontend
- React 19 with Vite
- React Router for navigation
- Socket.IO Client for real-time communication
- Tailwind CSS for styling
- Framer Motion for animations
- React Toastify for notifications

### Backend
- Node.js with Express
- MongoDB with Mongoose
- Socket.IO for WebSocket connections
- Passport.js for authentication (Local + Google OAuth)
- Glicko-2 rating algorithm
- JWT for session management

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Google OAuth credentials (optional)

### Setup

1. Clone the repository
```bash
git clone <repository-url>
cd <project-folder>
```

2. Install server dependencies
```bash
cd server
npm install
```

3. Install client dependencies
```bash
cd react-app
npm install
```

4. Configure environment variables

Create `server/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mathblitz
JWT_SECRET=your_jwt_secret_key
CORS_ORIGIN=http://localhost:5173

# Google OAuth (optional)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:5000/auth/google/callback
```

Create `react-app/.env`:
```env
VITE_API_URL=http://localhost:5000
```

## 🎯 Running the Application

### Development Mode

1. Start the server:
```bash
cd server
npm run dev
```

2. Start the React app:
```bash
cd react-app
npm run dev
```

3. Open http://localhost:5173 in your browser

### Production Build

1. Build the React app:
```bash
cd react-app
npm run build
```

2. Start the server (serves both API and static files):
```bash
cd server
npm start
```

## 🎮 How to Play

### Single Player
1. Login or signup
2. Select game duration (1-5 minutes)
3. Click "Execute Practice()"
4. Solve math problems as fast as you can
5. View your score (doesn't affect rating)

### Multiplayer
1. Login or signup
2. Select game duration
3. Either:
   - Click "Create()" to create a new room
   - Enter a room code and click "Join()"
4. Wait for opponent in the waiting room
5. Solve problems faster than your opponent
6. Win to increase your rating!

## 📊 Rating System

The game uses the Glicko-2 rating system:
- **Rating**: Your skill level (starts at 1500)
- **RD (Rating Deviation)**: Confidence in your rating (lower is better)
- **Volatility**: How consistent your performance is

Ratings update after each multiplayer game based on:
- Your current rating
- Opponent's rating
- Game outcome (win/loss)
- Rating deviation of both players

## 🏆 Leaderboard

- Global leaderboard shows top players by rating
- Real-time updates via WebSocket
- Your position is highlighted
- Rank calculation based on rating distribution

## 🔐 Security Features

- Passwords hashed with bcryptjs
- JWT tokens for authentication
- HTTP-only cookies for session management
- CORS protection
- Input validation and sanitization

## 📁 Project Structure

```
.
├── server/
│   ├── config/          # Database and passport configuration
│   ├── controllers/     # Business logic
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API endpoints
│   ├── sockets/         # Socket.IO handlers
│   ├── utils/           # Helper functions (ELO, questions)
│   └── index.js         # Server entry point
│
└── react-app/
    ├── src/
    │   ├── components/  # Reusable components
    │   ├── context/     # React context (User)
    │   ├── pages/       # Page components
    │   ├── services/    # API service functions
    │   └── utils/       # Helper utilities
    └── public/          # Static assets
```

## 🛠️ API Endpoints

### Authentication
- `POST /api/signup` - Register new user
- `POST /api/login` - Login user
- `GET /api/me` - Get current user
- `GET /auth/google` - Google OAuth login
- `GET /auth/google/callback` - Google OAuth callback

### Game
- `GET /api/leaderboard` - Get global leaderboard
- `POST /api/singleplayer/start` - Start single player game
- `POST /api/singleplayer/submit` - Submit single player score

### WebSocket Events
- `createRoom` - Create multiplayer room
- `joinRoom` - Join existing room
- `startGame` - Start game in room
- `submitAnswer` - Submit answer during game
- `leaderboardUpdate` - Receive leaderboard updates

## 🎨 Features Removed

This version focuses on core gameplay. The following features have been removed:
- ❌ Daily Practice Hub
- ❌ Weekly Contest System
- ❌ Contest Leaderboards
- ❌ Email Notifications
- ❌ Badge System
- ❌ Streak Calendar

## 🤝 Contributing

Feel free to submit issues and pull requests!

## 📝 License

MIT License
