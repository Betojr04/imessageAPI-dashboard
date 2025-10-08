# Frontend Deployment Guide

Quick guide to deploy the iMessage AI Dashboard to Vercel.

## Prerequisites

- Backend deployed to Render (get the URL first)
- Vercel account (free): https://vercel.com

## Deploy to Vercel

### Option 1: Via Vercel CLI (Fastest)

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
cd /Users/albertovaltierrajr/Desktop/dashboard
vercel

# Set environment variable during deployment:
# NEXT_PUBLIC_API_URL = https://YOUR-BACKEND-URL.onrender.com/api/v1
```

### Option 2: Via Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Import your GitHub repository (you need to push to GitHub first)
4. Add environment variable:
   - **Name**: `NEXT_PUBLIC_API_URL`
   - **Value**: `https://YOUR-BACKEND-URL.onrender.com/api/v1`
5. Click "Deploy"

## Push to GitHub First

```bash
cd /Users/albertovaltierrajr/Desktop/dashboard

# Create repo at https://github.com/new
# Name: imessage-ai-dashboard

git remote add origin https://github.com/YOUR_USERNAME/imessage-ai-dashboard.git
git branch -M main
git push -u origin main
```

## After Deployment

Your dashboard will be live at: `https://YOUR-PROJECT.vercel.app`

Share this URL with anyone to let them:
- Sign up for an account
- Chat with AI in real-time
- View message history

## Testing

1. Visit your Vercel URL
2. Sign up for a new account
3. Send a message in the web chat
4. Verify AI responds

---

For the complete deployment guide including backend setup, see:
`/Users/albertovaltierrajr/Desktop/webhook-listener/DEPLOYMENT_GUIDE.md`
