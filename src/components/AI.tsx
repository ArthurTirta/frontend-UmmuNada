'use client'

import { useState, useRef, useEffect } from 'react'

interface ImageResult {
  name: string
  description: string
  image_path: string
  category: string
  price: string
  similarity_score?: number
}

interface Message {
  type: 'user' | 'assistant'
  content: string
  isError?: boolean
  images?: ImageResult[]
}

export default function AI() {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
  }

  const sendMessage = async () => {
    const message = inputValue.trim()
    if (!message || isLoading) return

    const userMessage: Message = { type: 'user', content: message }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      console.log('Sending message:', message)
      
      const apiUrl = "http://127.0.0.1:5000/get_response"
      
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message })
      })

      console.log('Response status:', response.status)

      if (!response.ok) {
        const text = await response.text().catch(() => "Unknown error")
        throw new Error(`HTTP ${response.status}: ${text}`)
      }

      const data = await response.json()
      console.log('Response data:', data)
      console.log('Images received:', data.images)
      
      const assistantMessage: Message = { 
        type: 'assistant', 
        content: data.response || data.error || 'No response received',
        images: data.images && data.images.length > 0 ? data.images : []
      }
      
      console.log('Assistant message:', assistantMessage)
      setMessages(prev => [...prev, assistantMessage])
      
    } catch (error) {
      console.error("Fetch error:", error)
      const errorMessage: Message = { 
        type: 'assistant', 
        content: `Error: ${error instanceof Error ? error.message : 'Unknown error'}. Make sure the Flask server is running`,
        isError: true
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value)
    e.target.style.height = 'auto'
    e.target.style.height = Math.min(e.target.scrollHeight, 100) + 'px'
  }

  return (
    <div className="bg-gray-50">
      {/* Chat Toggle Button */}
      <button 
        onClick={toggleChat}
        className="fixed bottom-4 right-4 bg-black text-white px-6 py-3 rounded-full shadow-lg hover:bg-white hover:text-black font-light transition-colors z-40 border cursor-pointer"
      >
        💬 {isChatOpen ? 'Close Chat' : 'Ask About Menu'}
      </button>

      {/* Chat Container - FIXED HEIGHT */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-4 w-96 h-[600px] bg-white border border-gray-300 rounded-lg shadow-2xl flex flex-col z-40">
          {/* Chat Header */}
          <div className="bg-black text-white px-4 py-3 rounded-t-lg flex justify-between items-center flex-shrink-0">
            <div className="flex items-center space-x-2">
              <span className="font-light">Ummu Nada Menu</span>
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            </div>
            <button 
              className="hover:bg-gray-700 px-2 py-1 rounded text-lg"
              onClick={toggleChat}
              title="Close chat"
            >
              ✖
            </button>
          </div>

          {/* Chat Messages - SCROLLABLE AREA */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.length === 0 && (
              <div className="text-gray-500 text-center py-8">
                <div className="text-2xl mb-2">🍽️</div>
                <div>Halo! Tanya saya tentang menu Ummu Nada atau cari makanan yang Anda inginkan!</div>
              </div>
            )}
            
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] ${
                  msg.type === 'user'
                    ? 'bg-white text-black border rounded-br-sm px-4 py-2 rounded-lg'
                    : ''
                }`}>
                  {msg.type === 'assistant' && (
                    <>
                      <div className={`px-4 py-2 rounded-lg ${
                        msg.isError
                          ? 'bg-red-100 text-red-800 border border-red-300 rounded-bl-sm'
                          : 'bg-white text-gray-800 shadow-sm border rounded-bl-sm'
                      }`}>
                        <div className="text-sm font-normal mb-1">Ummu Nada</div>
                        <div className="whitespace-pre-wrap">{msg.content}</div>
                      </div>
                      
                      {/* Display Images */}
                      {msg.images && msg.images.length > 0 && (
                        <div className="mt-3 space-y-3">
                          {msg.images.map((img, imgIndex) => (
                            <div key={imgIndex} className="bg-white border rounded-lg overflow-hidden shadow-sm">
                              <div className="relative h-48 w-full bg-gray-100">
                                <img
                                  src={`http://127.0.0.1:5000/${img.image_path}`}
                                  alt={img.name}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = '/placeholder-food.jpg';
                                    console.error('Image failed to load:', img.image_path);
                                  }}
                                  onLoad={() => {
                                    console.log('Image loaded successfully:', img.image_path);
                                  }}
                                />
                              </div>
                              <div className="p-3">
                                <h4 className="font-semibold text-gray-900">{img.name}</h4>
                                <p className="text-sm text-gray-600 mt-1">{img.description}</p>
                                <div className="flex justify-between items-center mt-2">
                                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                    {img.category}
                                  </span>
                                  <span className="font-semibold text-green-600">
                                    Rp {Number(img.price).toLocaleString('id-ID')}
                                  </span>
                                </div>
                                {img.similarity_score && (
                                  <div className="text-xs text-gray-400 mt-1">
                                    Match: {(img.similarity_score * 100).toFixed(0)}%
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                  
                  {msg.type === 'user' && (
                    <>
                      <div className="text-sm font-normal mb-1">You</div>
                      <div className="whitespace-pre-wrap">{msg.content}</div>
                    </>
                  )}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-sm border rounded-bl-sm">
                  <div className="text-sm font-medium mb-1">Ummu Nada</div>
                  <div className="flex items-center space-x-1">
                    <span>Sedang berpikir</span>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input - FIXED AT BOTTOM */}
          <div className="border-t border-gray-200 p-3 bg-white rounded-b-lg flex-shrink-0">
            <div className="flex gap-2">
              <textarea
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Cari menu makanan..."
                disabled={isLoading}
                rows={1}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none disabled:bg-gray-100 text-gray-900 placeholder-gray-500 bg-white"
                style={{minHeight: '40px', maxHeight: '100px'}}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black border cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? '...' : 'Send'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}