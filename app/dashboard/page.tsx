'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Chat {
  id: string
  name: string
}

interface Message {
  id: string
  chatId: string
  from: string
  to: string
  text: string
  timestamp: string
  isFromMe: boolean
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1'

export default function Dashboard() {
  const router = useRouter()
  const [chats, setChats] = useState<Chat[]>([])
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [draft, setDraft] = useState('')
  const [isConnected, setIsConnected] = useState(false)
  const [showHelp, setShowHelp] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  const [showNewChat, setShowNewChat] = useState(false)
  const [newChatNumber, setNewChatNumber] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Check auth
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (!user) {
      router.push('/login')
    }
  }, [router])

  // Check if first time user
  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome')
    if (!hasSeenWelcome) {
      setShowWelcome(true)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    router.push('/')
  }

  // Fetch chats on load
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) return

    fetch(`${API_URL}/chats`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setChats(data)
        if (data.length > 0) {
          setSelectedChat(data[0])
        }
      })
      .catch(err => console.error('Failed to fetch chats:', err))
  }, [])

  // Fetch messages when chat changes
  useEffect(() => {
    if (!selectedChat) return

    const token = localStorage.getItem('token')
    if (!token) return

    fetch(`${API_URL}/messages?chatId=${selectedChat.id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => setMessages(data))
      .catch(err => console.error('Failed to fetch messages:', err))
  }, [selectedChat])

  // SSE connection for real-time messages
  useEffect(() => {
    const eventSource = new EventSource(`${API_URL}/stream`)

    eventSource.onopen = () => {
      console.log('✅ SSE connected')
      setIsConnected(true)
    }

    eventSource.onmessage = (event) => {
      const newMessage = JSON.parse(event.data) as Message
      console.log('📡 New message:', newMessage)

      // Only add if it's for the current chat
      if (selectedChat && newMessage.chatId === selectedChat.id) {
        setMessages(prev => {
          // Avoid duplicates
          if (prev.some(m => m.id === newMessage.id)) return prev
          return [...prev, newMessage]
        })
      }
    }

    eventSource.onerror = () => {
      console.error('❌ SSE error')
      setIsConnected(false)
    }

    return () => {
      eventSource.close()
    }
  }, [selectedChat])

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const createChat = async () => {
    if (!newChatNumber.trim()) return

    const token = localStorage.getItem('token')
    if (!token) {
      alert('Not authenticated')
      return
    }

    try {
      const response = await fetch(`${API_URL}/chats`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ phoneNumber: newChatNumber })
      })

      if (!response.ok) {
        throw new Error('Failed to create chat')
      }

      const newChat = await response.json()
      setChats(prev => [...prev, newChat])
      setSelectedChat(newChat)
      setShowNewChat(false)
      setNewChatNumber('')
      console.log('✅ Chat created')
    } catch (err) {
      console.error('❌ Create failed:', err)
      alert('Failed to create chat')
    }
  }

  const deleteChat = async (chatId: string) => {
    const token = localStorage.getItem('token')
    if (!token) {
      alert('Not authenticated')
      return
    }

    try {
      const response = await fetch(`${API_URL}/chats/${chatId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (!response.ok) {
        throw new Error('Failed to delete chat')
      }

      setChats(prev => prev.filter(c => c.id !== chatId))
      if (selectedChat?.id === chatId) {
        setSelectedChat(null)
      }
      console.log('✅ Chat deleted')
    } catch (err) {
      console.error('❌ Delete failed:', err)
      alert('Failed to delete chat')
    }
  }

  const sendMessage = async () => {
    if (!selectedChat || !draft.trim()) return

    const text = draft.trim()
    setDraft('')

    const token = localStorage.getItem('token')
    if (!token) {
      alert('Not authenticated')
      return
    }

    try {
      const response = await fetch(`${API_URL}/messages/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          chatId: selectedChat.id,
          to: '+14803187213', // Your whitelisted number
          text: text
        })
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      console.log('✅ Message sent')
    } catch (err) {
      console.error('❌ Send failed:', err)
      alert('Failed to send message')
    }
  }

  return (
    <div>
      <div className="header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1>
            iMessage AI Dashboard
            <span className={`status-indicator ${isConnected ? '' : 'offline'}`} />
          </h1>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <button
              onClick={() => setShowHelp(true)}
              style={{
                color: '#007aff',
                textDecoration: 'none',
                fontWeight: '500',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              ❓ Help
            </button>
            <Link href="/config" style={{ color: '#007aff', textDecoration: 'none', fontWeight: '500' }}>
              ⚙️ Settings
            </Link>
            <button
              onClick={handleLogout}
              style={{
                padding: '8px 16px',
                background: 'transparent',
                border: '1px solid #ff3b30',
                color: '#ff3b30',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '14px'
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Analytics Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
          <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '14px', color: '#666', marginBottom: '4px' }}>Total Chats</div>
            <div style={{ fontSize: '28px', fontWeight: '600', color: '#007aff' }}>{chats.length}</div>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '14px', color: '#666', marginBottom: '4px' }}>Total Messages</div>
            <div style={{ fontSize: '28px', fontWeight: '600', color: '#34c759' }}>{messages.length}</div>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '14px', color: '#666', marginBottom: '4px' }}>Connection</div>
            <div style={{ fontSize: '28px', fontWeight: '600', color: isConnected ? '#34c759' : '#ff3b30' }}>
              {isConnected ? 'Live' : 'Offline'}
            </div>
          </div>
        </div>

        <div className="chat-container">
          <div className="chat-list">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ margin: 0 }}>Chats</h3>
              <button
                onClick={() => setShowNewChat(true)}
                style={{
                  padding: '6px 12px',
                  background: '#007aff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500'
                }}
                title="New Chat"
              >
                + New
              </button>
            </div>
            {chats.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px 20px', color: '#999' }}>
                <p style={{ marginBottom: '12px' }}>No chats yet</p>
                <p style={{ fontSize: '13px' }}>Text your iMessage number to start</p>
              </div>
            ) : (
              chats.map(chat => (
                <div
                  key={chat.id}
                  className={`chat-item ${selectedChat?.id === chat.id ? 'active' : ''}`}
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <div
                    onClick={() => setSelectedChat(chat)}
                    style={{ flex: 1, cursor: 'pointer' }}
                  >
                    {chat.name}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      if (confirm(`Delete chat with ${chat.name}?`)) {
                        deleteChat(chat.id)
                      }
                    }}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#ff3b30',
                      cursor: 'pointer',
                      padding: '4px 8px',
                      fontSize: '16px'
                    }}
                    title="Delete chat"
                  >
                    🗑️
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="chat-main">
            {selectedChat ? (
              <>
                <div className="chat-header">{selectedChat.name}</div>

                <div className="messages">
                  {messages.map(msg => (
                    <div key={msg.id} className={`message ${msg.isFromMe ? 'mine' : ''}`}>
                      <div className="message-bubble">
                        <div style={{ fontSize: '12px', opacity: 0.7, marginBottom: '4px' }}>
                          {msg.from}
                        </div>
                        <div style={{ whiteSpace: 'pre-wrap' }}>
                          {msg.text}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                <div className="message-input">
                  <input
                    type="text"
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type a message..."
                  />
                  <button onClick={sendMessage} disabled={!draft.trim()}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <p style={{ color: '#999' }}>Select a chat to start messaging</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Help Modal */}
      {showHelp && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}
          onClick={() => setShowHelp(false)}
        >
          <div
            style={{
              background: 'white',
              borderRadius: '12px',
              padding: '32px',
              maxWidth: '600px',
              maxHeight: '80vh',
              overflow: 'auto',
              margin: '20px'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 style={{ margin: 0, fontSize: '24px' }}>How to Use Your AI Assistant</h2>
              <button
                onClick={() => setShowHelp(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  padding: '4px'
                }}
              >
                ×
              </button>
            </div>

            <div style={{ lineHeight: '1.6', color: '#333' }}>
              <h3 style={{ marginTop: '0', fontSize: '18px' }}>📱 Messaging from Your Phone</h3>
              <ol style={{ paddingLeft: '20px' }}>
                <li>Open <strong>Messages</strong> on your iPhone</li>
                <li>Text your iMessage number/Apple ID</li>
                <li>Get AI-powered responses instantly!</li>
              </ol>

              <h3 style={{ marginTop: '24px', fontSize: '18px' }}>🤖 What Can Your AI Do?</h3>
              <ul style={{ paddingLeft: '20px' }}>
                <li><strong>Answer questions</strong> - Ask anything!</li>
                <li><strong>Research & summarize</strong> - Get quick insights</li>
                <li><strong>Write & edit</strong> - Emails, messages, content</li>
                <li><strong>Plan & organize</strong> - Tasks, schedules, ideas</li>
                <li><strong>Code & debug</strong> - Programming help</li>
              </ul>

              <h3 style={{ marginTop: '24px', fontSize: '18px' }}>💡 Example Tasks</h3>
              <div style={{ background: '#f5f5f5', padding: '16px', borderRadius: '8px', fontSize: '14px' }}>
                <p style={{ margin: '8px 0' }}>"Summarize this article: [paste link]"</p>
                <p style={{ margin: '8px 0' }}>"Write a professional email about..."</p>
                <p style={{ margin: '8px 0' }}>"Help me plan a trip to Tokyo"</p>
                <p style={{ margin: '8px 0' }}>"Explain quantum computing simply"</p>
                <p style={{ margin: '8px 0' }}>"Debug this Python code: [paste code]"</p>
              </div>

              <h3 style={{ marginTop: '24px', fontSize: '18px' }}>⚙️ Settings & Configuration</h3>
              <p>Click <strong>Settings</strong> in the header to customize your AI's personality, capabilities, and behavior.</p>

              <div style={{ marginTop: '24px', padding: '16px', background: '#e3f2fd', borderRadius: '8px', fontSize: '14px' }}>
                <strong>💬 Pro Tip:</strong> Your conversations are saved in this dashboard so you can review them anytime!
              </div>
            </div>

            <button
              onClick={() => setShowHelp(false)}
              style={{
                marginTop: '24px',
                width: '100%',
                padding: '12px',
                background: '#007aff',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '16px'
              }}
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {/* Welcome Modal */}
      {showWelcome && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1001
          }}
        >
          <div
            style={{
              background: 'white',
              borderRadius: '16px',
              padding: '48px',
              maxWidth: '700px',
              maxHeight: '85vh',
              overflow: 'auto',
              margin: '20px',
              textAlign: 'center'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
            <h1 style={{ margin: '0 0 16px 0', fontSize: '32px', fontWeight: '700' }}>Welcome to Your AI Assistant!</h1>
            <p style={{ fontSize: '18px', color: '#666', marginBottom: '32px', lineHeight: '1.6' }}>
              You now have a personal AI assistant that responds to your iMessages 24/7.
            </p>

            <div style={{ background: '#f8f9fa', padding: '32px', borderRadius: '12px', marginBottom: '32px', textAlign: 'left' }}>
              <h2 style={{ marginTop: 0, fontSize: '22px', marginBottom: '20px' }}>🚀 Quick Start Guide</h2>

              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ fontSize: '24px', minWidth: '32px' }}>1️⃣</div>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '4px' }}>Text Your iMessage Number</strong>
                    <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                      Open Messages on your iPhone and text yourself - your AI will respond instantly!
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ fontSize: '24px', minWidth: '32px' }}>2️⃣</div>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '4px' }}>View Conversations Here</strong>
                    <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                      All your chats appear in this dashboard in real-time. You can reply from here or your phone!
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ fontSize: '24px', minWidth: '32px' }}>3️⃣</div>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '4px' }}>Customize Your AI</strong>
                    <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                      Click <strong>Settings</strong> to adjust personality, response style, and capabilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: '#e3f2fd', padding: '20px', borderRadius: '8px', marginBottom: '32px' }}>
              <strong style={{ fontSize: '16px' }}>💡 Pro Tip:</strong>
              <p style={{ margin: '8px 0 0 0', fontSize: '14px' }}>
                Try asking your AI to "write an email", "research a topic", "help me plan", or "explain something". It's like ChatGPT, but in your messages!
              </p>
            </div>

            <button
              onClick={() => {
                localStorage.setItem('hasSeenWelcome', 'true')
                setShowWelcome(false)
              }}
              style={{
                width: '100%',
                padding: '16px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '18px',
                marginBottom: '12px'
              }}
            >
              Get Started
            </button>

            <button
              onClick={() => {
                localStorage.setItem('hasSeenWelcome', 'true')
                setShowWelcome(false)
                setShowHelp(true)
              }}
              style={{
                width: '100%',
                padding: '12px',
                background: 'transparent',
                color: '#007aff',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                textDecoration: 'underline'
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      )}

      {/* New Chat Modal */}
      {showNewChat && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1001
          }}
          onClick={() => {
            setShowNewChat(false)
            setNewChatNumber('')
          }}
        >
          <div
            style={{
              background: 'white',
              borderRadius: '12px',
              padding: '32px',
              maxWidth: '450px',
              width: '100%',
              margin: '20px'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ margin: '0 0 8px 0', fontSize: '22px' }}>Start New Conversation</h2>
            <p style={{ margin: '0 0 24px 0', color: '#666', fontSize: '14px' }}>
              Note: Chats are created automatically when someone texts you. This is for manually starting a conversation.
            </p>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', fontSize: '14px' }}>
                Phone Number
              </label>
              <input
                type="tel"
                value={newChatNumber}
                onChange={(e) => setNewChatNumber(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && createChat()}
                placeholder="+1 (555) 123-4567"
                autoFocus
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '15px',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => {
                  setShowNewChat(false)
                  setNewChatNumber('')
                }}
                style={{
                  flex: 1,
                  padding: '12px',
                  background: '#f5f5f5',
                  color: '#333',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '500',
                  fontSize: '15px'
                }}
              >
                Cancel
              </button>
              <button
                onClick={createChat}
                disabled={!newChatNumber.trim()}
                style={{
                  flex: 1,
                  padding: '12px',
                  background: newChatNumber.trim() ? '#007aff' : '#ccc',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: newChatNumber.trim() ? 'pointer' : 'not-allowed',
                  fontWeight: '600',
                  fontSize: '15px'
                }}
              >
                Create Chat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
