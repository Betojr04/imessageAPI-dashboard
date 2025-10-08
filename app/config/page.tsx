'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ConfigPage() {
  const [config, setConfig] = useState({
    aiProvider: 'gemini',
    phoneNumber: '+14803187213',
    webhookSecret: 'change-me',
    autoReply: true,
    personality: 'helpful',
    responseStyle: 'balanced',
    enableTools: true
  })

  return (
    <div>
      <div className="header">
        <h1>Configuration</h1>
      </div>

      <div className="container" style={{ maxWidth: '800px', marginTop: '40px' }}>
        <div style={{ background: 'white', padding: '40px', borderRadius: '8px' }}>
          <div style={{ marginBottom: '20px' }}>
            <Link href="/dashboard" style={{ color: '#007aff', textDecoration: 'none' }}>
              ← Back to Dashboard
            </Link>
          </div>

          <h2 style={{ marginBottom: '30px' }}>Bot Settings</h2>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              AI Provider
            </label>
            <select
              value={config.aiProvider}
              onChange={(e) => setConfig({ ...config, aiProvider: e.target.value })}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #e0e0e0',
                borderRadius: '6px',
                fontSize: '14px'
              }}
            >
              <option value="gemini">Gemini (Active)</option>
              <option value="daisy" disabled>Daisy (Coming Soon)</option>
            </select>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Your Phone Number
            </label>
            <input
              type="text"
              value={config.phoneNumber}
              onChange={(e) => setConfig({ ...config, phoneNumber: e.target.value })}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #e0e0e0',
                borderRadius: '6px',
                fontSize: '14px'
              }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Webhook Secret
            </label>
            <input
              type="password"
              value={config.webhookSecret}
              onChange={(e) => setConfig({ ...config, webhookSecret: e.target.value })}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #e0e0e0',
                borderRadius: '6px',
                fontSize: '14px'
              }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              AI Personality
            </label>
            <select
              value={config.personality}
              onChange={(e) => setConfig({ ...config, personality: e.target.value })}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #e0e0e0',
                borderRadius: '6px',
                fontSize: '14px'
              }}
            >
              <option value="helpful">Helpful & Professional</option>
              <option value="casual">Casual & Friendly</option>
              <option value="concise">Concise & Direct</option>
              <option value="creative">Creative & Expressive</option>
            </select>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Response Style
            </label>
            <select
              value={config.responseStyle}
              onChange={(e) => setConfig({ ...config, responseStyle: e.target.value })}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #e0e0e0',
                borderRadius: '6px',
                fontSize: '14px'
              }}
            >
              <option value="brief">Brief (Quick answers)</option>
              <option value="balanced">Balanced (Default)</option>
              <option value="detailed">Detailed (In-depth explanations)</option>
            </select>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={config.autoReply}
                onChange={(e) => setConfig({ ...config, autoReply: e.target.checked })}
                style={{ marginRight: '8px', width: '20px', height: '20px' }}
              />
              <span>Enable auto-reply to incoming messages</span>
            </label>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={config.enableTools}
                onChange={(e) => setConfig({ ...config, enableTools: e.target.checked })}
                style={{ marginRight: '8px', width: '20px', height: '20px' }}
              />
              <span>Enable AI tools (web search, calculations, code execution)</span>
            </label>
          </div>

          <button
            style={{
              padding: '12px 24px',
              background: '#007aff',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
            onClick={() => alert('Settings saved! (Demo only)')}
          >
            Save Settings
          </button>

          <div style={{ marginTop: '40px', padding: '20px', background: '#f5f5f5', borderRadius: '6px' }}>
            <h3 style={{ marginBottom: '12px', fontSize: '16px' }}>System Status</h3>
            <div style={{ display: 'flex', gap: '40px' }}>
              <div>
                <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Backend</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#34c759', fontSize: '20px' }}>●</span>
                  <span>Connected</span>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>iMessage API</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#34c759', fontSize: '20px' }}>●</span>
                  <span>Running</span>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>AI Provider</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#34c759', fontSize: '20px' }}>●</span>
                  <span>Gemini</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
