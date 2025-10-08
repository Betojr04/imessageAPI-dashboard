'use client'

import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const router = useRouter()

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{
        padding: '16px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'white',
        borderBottom: '1px solid #e0e0e0',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div style={{ fontSize: '20px', fontWeight: '700' }}>
          📱 SMS AI Assistant
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={() => router.push('/login')}
            style={{
              padding: '8px 16px',
              background: 'transparent',
              border: '1px solid #007aff',
              color: '#007aff',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '14px'
            }}
          >
            Log In
          </button>
          <button
            onClick={() => router.push('/signup')}
            style={{
              padding: '8px 16px',
              background: '#007aff',
              border: 'none',
              color: 'white',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '14px'
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
        padding: '20px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}>
        <div style={{
          maxWidth: '1200px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
          alignItems: 'center'
        }}>
          {/* Text */}
          <div style={{ flex: 1, color: 'white', textAlign: 'center', maxWidth: '800px' }}>
            <h1 style={{
              fontSize: 'clamp(32px, 6vw, 56px)',
              fontWeight: '800',
              marginBottom: '20px',
              lineHeight: 1.1
            }}>
              AI-Powered SMS Assistant<br />For Your Business
            </h1>
            <p style={{
              fontSize: 'clamp(16px, 3vw, 20px)',
              marginBottom: '32px',
              opacity: 0.95,
              lineHeight: 1.6
            }}>
              Automate customer service via SMS. Let AI handle reservations,
              FAQs, and customer inquiries 24/7 - perfect for bars, restaurants, and retail.
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
                fontSize: '16px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                width: '100%',
                maxWidth: '300px'
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

          {/* Demo Chat */}
          <div style={{
            width: '100%',
            maxWidth: '400px',
            background: 'white',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
          }}>
            <div style={{
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '16px',
              color: '#333',
              textAlign: 'center'
            }}>
              💬 Live Demo - Customer Texts Your Business
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Customer message */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{
                  background: '#007aff',
                  color: 'white',
                  padding: '12px 16px',
                  borderRadius: '18px',
                  maxWidth: '80%',
                  fontSize: '14px'
                }}>
                  Do you have happy hour today?
                </div>
              </div>

              {/* AI response */}
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  background: '#e9e9eb',
                  color: '#333',
                  padding: '12px 16px',
                  borderRadius: '18px',
                  maxWidth: '80%',
                  fontSize: '14px'
                }}>
                  Yes! Happy hour is 4-7pm today. $5 craft beers & $7 cocktails. See you soon! 🍻
                </div>
              </div>

              {/* Customer message */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{
                  background: '#007aff',
                  color: 'white',
                  padding: '12px 16px',
                  borderRadius: '18px',
                  maxWidth: '80%',
                  fontSize: '14px'
                }}>
                  Can I reserve a table for 4 at 7pm?
                </div>
              </div>

              {/* AI response */}
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  background: '#e9e9eb',
                  color: '#333',
                  padding: '12px 16px',
                  borderRadius: '18px',
                  maxWidth: '80%',
                  fontSize: '14px'
                }}>
                  ✅ Reserved! Table for 4 at 7pm tonight. We'll text you 30 min before. Looking forward to hosting you!
                </div>
              </div>
            </div>

            <div style={{
              marginTop: '20px',
              padding: '12px',
              background: '#f5f5f5',
              borderRadius: '12px',
              fontSize: '12px',
              color: '#666',
              textAlign: 'center'
            }}>
              🤖 Powered by AI • ⚡ Instant Replies • 📱 Works via SMS
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section style={{
        padding: '60px 20px',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 36px)',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            Perfect for Small Businesses
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🍽️</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
                Restaurants & Bars
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6, fontSize: '14px' }}>
                Handle reservations, answer menu questions, share daily specials - all automatically.
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏪</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
                Retail Stores
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6, fontSize: '14px' }}>
                Check inventory, share hours, answer product questions - 24/7 customer service.
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>💼</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
                Service Businesses
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6, fontSize: '14px' }}>
                Schedule appointments, send reminders, answer common questions automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{
        padding: '60px 20px',
        background: '#f8f9fa'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 36px)',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            How It Works
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{
                background: '#667eea',
                color: 'white',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                flexShrink: 0
              }}>1</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                  Get Your Business Number
                </h3>
                <p style={{ color: '#666', lineHeight: 1.6 }}>
                  We provide a dedicated SMS number for your business (via Twilio).
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{
                background: '#667eea',
                color: 'white',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                flexShrink: 0
              }}>2</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                  Customize Your AI
                </h3>
                <p style={{ color: '#666', lineHeight: 1.6 }}>
                  Train the AI with your menu, hours, policies, and common questions.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{
                background: '#667eea',
                color: 'white',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                flexShrink: 0
              }}>3</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                  Customers Text You
                </h3>
                <p style={{ color: '#666', lineHeight: 1.6 }}>
                  AI responds instantly 24/7. Monitor all conversations from your dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '60px 20px',
        background: '#667eea',
        color: 'white',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: 'clamp(28px, 5vw, 40px)',
          fontWeight: '700',
          marginBottom: '20px'
        }}>
          Ready to Automate Your Customer Service?
        </h2>
        <p style={{
          fontSize: 'clamp(16px, 3vw, 20px)',
          marginBottom: '32px',
          opacity: 0.95,
          maxWidth: '600px',
          margin: '0 auto 32px'
        }}>
          Join small businesses using SMS AI to save time and delight customers
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
            fontSize: '16px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            maxWidth: '300px',
            width: '100%'
          }}
        >
          Start Your Free Trial
        </button>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '30px 20px',
        background: '#1a1a1a',
        color: '#999',
        textAlign: 'center',
        fontSize: '14px'
      }}>
        <p>© 2025 SMS AI Assistant. All rights reserved.</p>
        <p style={{ marginTop: '8px', fontSize: '12px' }}>Powered by Twilio & Google Gemini</p>
      </footer>
    </div>
  )
}
