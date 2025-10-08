'use client'

import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const router = useRouter()

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'white',
        borderBottom: '1px solid #e0e0e0'
      }}>
        <div style={{ fontSize: '24px', fontWeight: '700' }}>
          AI Assistant
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button
            onClick={() => router.push('/login')}
            style={{
              padding: '10px 24px',
              background: 'transparent',
              border: '1px solid #007aff',
              color: '#007aff',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '15px'
            }}
          >
            Log In
          </button>
          <button
            onClick={() => router.push('/signup')}
            style={{
              padding: '10px 24px',
              background: '#007aff',
              border: 'none',
              color: 'white',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '15px'
            }}
          >
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}>
        <div style={{
          maxWidth: '1200px',
          display: 'flex',
          gap: '60px',
          alignItems: 'center'
        }}>
          {/* Left: Text */}
          <div style={{ flex: 1, color: 'white' }}>
            <h1 style={{
              fontSize: '56px',
              fontWeight: '800',
              marginBottom: '24px',
              lineHeight: 1.1
            }}>
              Your AI Assistant,<br />In Your Pocket
            </h1>
            <p style={{
              fontSize: '20px',
              marginBottom: '32px',
              opacity: 0.95,
              lineHeight: 1.6
            }}>
              Text your AI assistant and get instant help with anything.
              Schedule meetings, answer questions, research topics - all through SMS.
            </p>
            <button
              onClick={() => router.push('/signup')}
              style={{
                padding: '16px 40px',
                background: 'white',
                border: 'none',
                color: '#667eea',
                borderRadius: '12px',
                cursor: 'pointer',
                fontWeight: '700',
                fontSize: '18px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}
            >
              Start Free Trial
            </button>
            <p style={{
              marginTop: '16px',
              fontSize: '14px',
              opacity: 0.85
            }}>
              No credit card required • 7-day free trial
            </p>
          </div>

          {/* Right: Demo Chat */}
          <div style={{
            flex: 1,
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            maxWidth: '400px'
          }}>
            <div style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '20px',
              color: '#333'
            }}>
              Live Demo
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* User message */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{
                  background: '#007aff',
                  color: 'white',
                  padding: '12px 16px',
                  borderRadius: '18px',
                  maxWidth: '80%'
                }}>
                  What's the weather tomorrow?
                </div>
              </div>

              {/* AI response */}
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  background: '#e9e9eb',
                  color: '#333',
                  padding: '12px 16px',
                  borderRadius: '18px',
                  maxWidth: '80%'
                }}>
                  Tomorrow in San Francisco: Sunny, High 72°F (22°C). Perfect day for outdoor activities!
                </div>
              </div>

              {/* User message */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{
                  background: '#007aff',
                  color: 'white',
                  padding: '12px 16px',
                  borderRadius: '18px',
                  maxWidth: '80%'
                }}>
                  Schedule lunch meeting
                </div>
              </div>

              {/* AI response */}
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  background: '#e9e9eb',
                  color: '#333',
                  padding: '12px 16px',
                  borderRadius: '18px',
                  maxWidth: '80%'
                }}>
                  ✅ Added "Lunch Meeting" to your calendar tomorrow at 12:30 PM
                </div>
              </div>
            </div>

            <div style={{
              marginTop: '24px',
              padding: '16px',
              background: '#f5f5f5',
              borderRadius: '12px',
              fontSize: '14px',
              color: '#666',
              textAlign: 'center'
            }}>
              💬 Text from any device • 🤖 Powered by AI • 🔒 Private & Secure
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section style={{
        padding: '80px 40px',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            Why Choose Our AI Assistant?
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>⚡</div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>
                Instant Responses
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Get answers in seconds. No app downloads, no waiting - just text and get results.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🧠</div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>
                Smart & Learning
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Powered by advanced AI that understands context and learns your preferences.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔐</div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>
                Private & Secure
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Your conversations are encrypted and never shared. Your data stays yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 40px',
        background: '#667eea',
        color: 'white',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '40px',
          fontWeight: '700',
          marginBottom: '24px'
        }}>
          Ready to Get Started?
        </h2>
        <p style={{
          fontSize: '20px',
          marginBottom: '32px',
          opacity: 0.95
        }}>
          Join thousands using AI assistants to be more productive
        </p>
        <button
          onClick={() => router.push('/signup')}
          style={{
            padding: '16px 48px',
            background: 'white',
            border: 'none',
            color: '#667eea',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: '700',
            fontSize: '18px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
        >
          Start Your Free Trial
        </button>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px',
        background: '#1a1a1a',
        color: '#999',
        textAlign: 'center'
      }}>
        <p>© 2025 AI Assistant. All rights reserved.</p>
      </footer>
    </div>
  )
}
