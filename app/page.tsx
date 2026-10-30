'use client';
import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: string; text: string }>>([
    { sender: 'bot', text: '¡Hola! Te doy la bienvenida al asistente de At Samberis A.C. 🌿 ¿Cómo te puedo ayudar hoy?' }
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const newMessages = [...messages, { sender: 'user', text }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setMessages([...newMessages, { sender: 'bot', text: data.reply }]);
    } catch {
      setMessages([...newMessages, { sender: 'bot', text: 'Ocurrió un error. Por favor contacta por WhatsApp al 9991277803.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <h2>At Samberis A.C. - Prototipo Chatbot</h2>
      
      <div style={{ flex: 1, overflowY: 'auto', border: '1px solid #ccc', borderRadius: '8px', padding: '15px', marginBottom: '10px', background: '#f9f9f9' }}>
        {messages.map((m, i) => (
          <div key={i} style={{ margin: '10px 0', textAlign: m.sender === 'user' ? 'right' : 'left' }}>
            <span style={{ display: 'inline-block', padding: '10px 14px', borderRadius: '12px', background: m.sender === 'user' ? '#0066cc' : '#e5e5ea', color: m.sender === 'user' ? '#fff' : '#000', maxWidth: '80%' }}>
              {m.text}
            </span>
          </div>
        ))}
        {loading && <p style={{ color: '#666', fontSize: '14px' }}>Pensando respuesta...</p>}
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
        <button onClick={() => sendMessage('¿Qué es At Samberis?')} style={{ padding: '6px 12px', background: '#e0e0e0', border: 'none', borderRadius: '16px', cursor: 'pointer' }}>¿Qué hacen?</button>
        <button onClick={() => sendMessage('¿Cuáles son los teléfonos de WhatsApp?')} style={{ padding: '6px 12px', background: '#e0e0e0', border: 'none', borderRadius: '16px', cursor: 'pointer' }}>WhatsApp</button>
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu consulta..."
          style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={() => sendMessage()} style={{ padding: '10px 20px', background: '#0066cc', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Enviar</button>
      </div>
    </main>
  );
}