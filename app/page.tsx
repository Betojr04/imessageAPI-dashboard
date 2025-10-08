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
          🤖 AI Agents on Demand
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
          <div style={{ flex: 1, color: 'white', textAlign: 'center', maxWidth: '900px' }}>
            <h1 style={{
              fontSize: 'clamp(32px, 6vw, 56px)',
              fontWeight: '800',
              marginBottom: '20px',
              lineHeight: 1.1
            }}>
              Access Specialized AI Agents<br />Anytime, Anywhere
            </h1>
            <p style={{
              fontSize: 'clamp(16px, 3vw, 20px)',
              marginBottom: '32px',
              opacity: 0.95,
              lineHeight: 1.6
            }}>
              Text or chat to access AI bots for research, coding, scheduling, customer service, and more.
              One platform, unlimited specialized agents.
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
              💬 Choose Your AI Agent
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* User message */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{
                  background: '#007aff',
                  color: 'white',
                  padding: '12px 16px',
                  borderRadius: '18px',
                  maxWidth: '80%',
                  fontSize: '14px'
                }}>
                  I need help with Python code
                </div>
              </div>

              {/* Bot selector */}
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  background: '#e9e9eb',
                  color: '#333',
                  padding: '12px 16px',
                  borderRadius: '18px',
                  maxWidth: '80%',
                  fontSize: '14px'
                }}>
                  Select a bot:
                  <br />1️⃣ Code Assistant
                  <br />2️⃣ Research Bot
                  <br />3️⃣ Task Planner
                </div>
              </div>

              {/* User choice */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{
                  background: '#007aff',
                  color: 'white',
                  padding: '12px 16px',
                  borderRadius: '18px',
                  maxWidth: '80%',
                  fontSize: '14px'
                }}>
                  1
                </div>
              </div>

              {/* Bot response */}
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  background: '#e9e9eb',
                  color: '#333',
                  padding: '12px 16px',
                  borderRadius: '18px',
                  maxWidth: '80%',
                  fontSize: '14px'
                }}>
                  👨‍💻 Code Assistant activated! Send me your code and I'll help debug, explain, or optimize it.
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
              🤖 Multiple AI Agents • 📱 SMS or Web • ⚡ Instant Access
            </div>
          </div>
        </div>
      </main>

      {/* Use Cases Section */}
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
            AI Agents for Every Need
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>👤</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
                Personal Assistant
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6, fontSize: '14px' }}>
                Schedule meetings, set reminders, research topics, answer questions - your AI on-demand.
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>💼</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
                Business Automation
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6, fontSize: '14px' }}>
                Handle customer inquiries, reservations, FAQs - 24/7 automated customer service.
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>👨‍💻</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
                Developer Tools
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6, fontSize: '14px' }}>
                Code review, debugging, documentation - specialized coding assistant via text.
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔬</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
                Research & Analysis
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6, fontSize: '14px' }}>
                Deep research, data analysis, summaries - get expert-level insights instantly.
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✍️</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
                Content Creation
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6, fontSize: '14px' }}>
                Write emails, blogs, social posts - professional writing assistant on demand.
              </p>
            </div>

            <div style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎯</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
                Custom Agents
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6, fontSize: '14px' }}>
                Create your own specialized bots - train them for your specific needs.
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
            Three Ways to Access Your AI Agents
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
                  📱 Via SMS (Coming Soon)
                </h3>
                <p style={{ color: '#666', lineHeight: 1.6 }}>
                  Text our number, choose your bot, get help instantly. Works on any phone.
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
                  💻 Via Web Dashboard
                </h3>
                <p style={{ color: '#666', lineHeight: 1.6 }}>
                  Access all your agents from any browser. Full chat history and management.
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
                  📲 Via Mobile App (Coming Soon)
                </h3>
                <p style={{ color: '#666', lineHeight: 1.6 }}>
                  Native iOS app with push notifications, offline mode, and seamless agent switching.
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
          Ready to Access AI Agents on Demand?
        </h2>
        <p style={{
          fontSize: 'clamp(16px, 3vw, 20px)',
          marginBottom: '32px',
          opacity: 0.95,
          maxWidth: '600px',
          margin: '0 auto 32px'
        }}>
          Join early adopters using specialized AI for personal productivity and business automation
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
        <p>© 2025 AI Agents Platform. All rights reserved.</p>
        <p style={{ marginTop: '8px', fontSize: '12px' }}>Powered by Google Gemini & Advanced AI</p>
      </footer>
    </div>
  )
}
