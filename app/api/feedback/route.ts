import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Route'u dinamik olarak işaretle
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: Request) {
  console.log('POST isteği başladı');
  
  try {
    // Ortam değişkenlerini kontrol et
    if (!process.env.EMAIL_USER) {
      throw new Error('EMAIL_USER eksik');
    }
    if (!process.env.EMAIL_PASS) {
      throw new Error('EMAIL_PASS eksik');
    }
    if (!process.env.FEEDBACK_EMAIL) {
      throw new Error('FEEDBACK_EMAIL eksik');
    }

    // Request body'i parse et
    const body = await request.json();
    console.log('Request body alındı:', body);

    // Gerekli alanları kontrol et
    if (!body.konu || !body.mesaj) {
      return NextResponse.json(
        { success: false, message: 'Konu ve mesaj alanları zorunludur.' },
        { status: 400 }
      );
    }

    // Nodemailer transporter oluştur
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Mail gönderme işlemi
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.FEEDBACK_EMAIL,
      subject: `Yeni Geri Bildirim: ${body.konu}`,
      html: `
        <h2>Yeni Geri Bildirim</h2>
        <p><strong>Konu:</strong> ${body.konu}</p>
        <p><strong>Mesaj:</strong> ${body.mesaj}</p>
        ${body.email ? `<p><strong>Gönderen E-posta:</strong> ${body.email}</p>` : ''}
        <p><strong>Gönderilme Tarihi:</strong> ${new Date().toLocaleString('tr-TR')}</p>
      `
    });

    console.log('Mail gönderildi:', info.messageId);

    return NextResponse.json({
      success: true,
      message: 'Geri bildiriminiz başarıyla gönderildi.'
    });

  } catch (error: any) {
    console.error('Hata detayı:', {
      name: error.name,
      message: error.message,
      stack: error.stack
    });

    // Kullanıcıya gösterilecek hata mesajını belirle
    let userMessage = 'Geri bildirim gönderilirken bir hata oluştu.';
    if (error.message.includes('EMAIL_USER eksik') || 
        error.message.includes('EMAIL_PASS eksik') || 
        error.message.includes('FEEDBACK_EMAIL eksik')) {
      userMessage = 'E-posta sistemi yapılandırması eksik. Lütfen site yöneticisi ile iletişime geçin.';
    }

    return NextResponse.json(
      { 
        success: false, 
        message: userMessage,
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
} 