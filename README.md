# iMessage AI Dashboard

A web-based dashboard to manage your AI-powered iMessage assistant. Replaces the iOS app with a simple, fast web interface.

## Features

✅ **Real-time chat interface** - View and send messages through your browser
✅ **Live message streaming** - SSE (Server-Sent Events) for instant updates
✅ **Chat management** - Switch between conversations easily
✅ **Configuration panel** - Manage bot settings and view system status
✅ **Works with existing backend** - Uses the same webhook-listener API

## Quick Start

### 1. Make sure your backend is running

```bash
# Terminal 1: Start webhook-listener (port 8000)
cd ~/Desktop/webhook-listener
source venv/bin/activate
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

# Terminal 2: Start iMessage API (port 1234)
cd ~/Desktop/imessage-api
source venv/bin/activate
uvicorn server:app --reload --host 0.0.0.0 --port 1234
```

### 2. Start the dashboard

```bash
# Terminal 3: Start web dashboard (port 3000)
cd ~/Desktop/dashboard
npm run dev
```

### 3. Open in browser

Visit: **http://localhost:3000**

## How It Works

```
You → Web Dashboard → webhook-listener API → iMessage API → AI Response
                          ↓
                    (Gemini/Daisy)
```

**No iOS app needed!** Everything works through the browser.

## What You Get

### Main Dashboard (`/`)
- List of all chats on the left
- Selected chat messages in the center
- Send new messages
- Live updates via SSE
- Connection status indicator (green dot = connected)

### Settings Page (`/config`)
- AI provider selection (Gemini/Daisy)
- Phone number configuration
- Webhook secret management
- Auto-reply toggle
- System status overview

## API Endpoints Used

The dashboard connects to your existing backend:

- `GET /api/v1/chats` - List all chats
- `GET /api/v1/messages?chatId={id}` - Get messages for a chat
- `POST /api/v1/messages/send` - Send a new message
- `GET /api/v1/stream` - SSE stream for real-time updates

## Next Steps

### For B2B Platform:

1. Add user authentication (NextAuth.js)
2. Multi-tenant support (each business gets own dashboard)
3. Usage analytics dashboard
4. Billing integration (Stripe)

### For Marketplace:

1. User registration flow
2. Bot customization UI
3. Phone number provisioning (Twilio)
4. Public bot gallery

## Advantages Over iOS App

✅ **Faster development** - No Xcode, no App Store submission
✅ **Cross-platform** - Works on any device with a browser
✅ **Easy deployment** - Deploy to Vercel in minutes
✅ **Easier to monetize** - Add Stripe checkout directly
✅ **Simpler maintenance** - One codebase, instant updates

## Deploy to Production

```bash
# Build for production
npm run build

# Deploy to Vercel (recommended)
npx vercel

# Or deploy to any static host
npm run build && npx serve out
```

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Server-Sent Events** - Real-time message streaming
- **Existing FastAPI backend** - No changes needed

---

**Ready to monetize!** Add Stripe, user auth, and start charging customers.
