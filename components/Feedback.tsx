"use client";

import { useState } from 'react';

interface FeedbackForm {
  konu: string;
  mesaj: string;
  email: string;
}

export function Feedback() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState<FeedbackForm>({
    konu: 'harita',
    mesaj: '',
    email: ''
  });

  const handleSubmit = async () => {
    if (!form.mesaj.trim()) {
      alert('Lütfen bir mesaj giriniz.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        alert('Geri bildiriminiz başarıyla gönderildi.');
        setIsOpen(false);
        setForm({ konu: 'harita', mesaj: '', email: '' });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      alert('Geri bildirim gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Geri Bildirim Butonu */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 px-4 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 text-sm font-medium group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-300 group-hover:rotate-12"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
        İstek ve Önerileriniz
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 max-w-lg w-full shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">
                İstek ve Önerileriniz
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-800 dark:text-zinc-200 mb-2">
                  Konu
                </label>
                <select 
                  value={form.konu}
                  onChange={(e) => setForm({ ...form, konu: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border bg-white dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-100"
                >
                  <option value="harita">Yeni Harita Önerisi</option>
                  <option value="ozellik">Yeni Özellik İsteği</option>
                  <option value="hata">Hata Bildirimi</option>
                  <option value="oneri">Genel Öneri</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-800 dark:text-zinc-200 mb-2">
                  Mesajınız
                </label>
                <textarea
                  value={form.mesaj}
                  onChange={(e) => setForm({ ...form, mesaj: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border bg-white dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-100 min-h-[120px]"
                  placeholder="Lütfen istek veya önerinizi detaylı bir şekilde açıklayın..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-800 dark:text-zinc-200 mb-2">
                  İletişim Bilgileriniz (İsteğe Bağlı)
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border bg-white dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-100"
                  placeholder="E-posta adresiniz"
                />
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setIsOpen(false)}
                  disabled={isLoading}
                  className="px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 disabled:opacity-50"
                >
                  İptal
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 disabled:opacity-50 flex items-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Gönderiliyor...
                    </>
                  ) : (
                    'Gönder'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 