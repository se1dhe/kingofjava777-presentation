'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Video, MessageCircle, Camera, Sparkles, Zap, Globe, Shield } from 'lucide-react';

// Particle System Component
function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      color: string;
    }> = [];

    const colors = ['#D4AF37', '#E8C582', '#F9ECCA'];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedY: -(Math.random() * 0.5 + 0.2),
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        particle.y += particle.speedY;
        particle.x += particle.speedX + Math.sin(particle.y * 0.01) * 0.2;

        if (particle.y < 0) {
          particle.y = canvas.height;
          particle.x = Math.random() * canvas.width;
        }
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
      });

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} id="particles-canvas" />;
}

// Website Mockup Component
function WebsiteMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="glass-panel p-1 gold-glow-box">
        <div className="bg-[#0F1115] rounded-xl overflow-hidden">
          {/* Browser Chrome */}
          <div className="bg-[#1E2128] px-4 py-3 flex items-center gap-2 border-b border-gold/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <div className="flex-1 ml-4">
              <div className="bg-[#0F1115] rounded-md px-3 py-1 text-xs text-muted font-mono">
                kingofjava777.com
              </div>
            </div>
          </div>

          {/* Website Preview */}
          <div className="relative h-[500px] bg-gradient-to-b from-[#08090C] to-[#0F1115] overflow-hidden">
            {/* Mock Hero */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <div className="inline-block px-4 py-1 mb-4 rounded-full bg-gold/10 border border-gold/30">
                  <span className="text-gold text-sm font-display">LIVE NOW</span>
                </div>
                <h2 className="text-5xl font-display text-foreground mb-4 gold-glow">
                  KINGOFJAVA777
                </h2>
                <p className="text-muted text-lg mb-6">Легенда Lineage 2</p>
                <div className="flex gap-4 justify-center">
                  <div className="px-6 py-3 bg-gold text-background rounded-lg font-display">
                    СМОТРЕТЬ
                  </div>
                  <div className="px-6 py-3 border-2 border-gold text-gold rounded-lg font-display">
                    ПРИСОЕДИНИТЬСЯ
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-gold/5 blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-gold/10 blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Floating Badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
        className="absolute -top-6 -left-6 glass-panel px-4 py-2 flex items-center gap-2"
      >
        <Sparkles className="w-5 h-5 text-gold" />
        <span className="text-sm font-display text-gold">Premium Design</span>
      </motion.div>
    </motion.div>
  );
}

// Feature Card Component
function FeatureCard({ icon: Icon, title, description, delay = 0 }: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="glass-panel p-6 hover:border-gold/40 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-gold" />
      </div>
      <h3 className="text-xl font-display text-foreground mb-2">{title}</h3>
      <p className="text-muted">{description}</p>
    </motion.div>
  );
}

// Stat Card Component
function StatCard({ value, label, delay = 0 }: {
  value: string;
  label: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl font-display gradient-gold mb-2">{value}</div>
      <div className="text-muted text-sm uppercase tracking-wider">{label}</div>
    </motion.div>
  );
}

// Social Icon Component
function SocialIcon({ icon: Icon, platform, followers, color }: {
  icon: React.ComponentType<{ className?: string }>;
  platform: string;
  followers: string;
  color: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="glass-panel p-4 flex items-center gap-4 hover:border-gold/40 transition-all duration-300 cursor-pointer"
    >
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <div className="font-display text-foreground">{platform}</div>
        <div className="text-sm text-muted">{followers}</div>
      </div>
    </motion.div>
  );
}

// Main Page Component
export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="relative min-h-screen">
      <ParticleSystem />

      {/* Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-8"
          >
            <div className="glass-panel px-6 py-2 inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm text-gold font-display">ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-display mb-6 leading-tight"
          >
            <span className="text-foreground">ПЕРСОНАЛЬНЫЙ САЙТ</span>
            <br />
            <span className="gradient-gold gold-glow">KINGOFJAVA777</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted mb-12 max-w-3xl mx-auto"
          >
            Премиум дизайн для легенды Lineage 2. Интеграция всех платформ,
            мультиязычность, анимации и частицы.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="#preview" className="btn-primary inline-flex items-center gap-2">
              <Play className="w-5 h-5" />
              Смотреть демо
            </a>
            <a href="#contact" className="btn-secondary">
              Связаться
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-gold rounded-full mt-2"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              <span className="gradient-gold">142K+</span> Фолловеров
            </h2>
            <p className="text-muted text-lg">Заслуживают премиум присутствия</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard value="64.6K" label="YouTube" delay={0} />
            <StatCard value="40K" label="Telegram" delay={0.1} />
            <StatCard value="10.2K" label="Kick" delay={0.2} />
            <StatCard value="7.1K" label="TikTok" delay={0.3} />
          </div>
        </div>
      </section>

      {/* Website Preview Section */}
      <section id="preview" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              Как это будет <span className="gradient-gold">выглядеть</span>
            </h2>
            <p className="text-muted text-lg">Концепт дизайна сайта</p>
          </motion.div>

          <WebsiteMockup />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              Что <span className="gradient-gold">включено</span>
            </h2>
            <p className="text-muted text-lg">Премиум функционал для стримера</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Globe}
              title="Мультиязычность"
              description="Русский, English, Armenian — автоматическое определение языка"
              delay={0}
            />
            <FeatureCard
              icon={Play}
              title="Видео интеграция"
              description="YouTube, TikTok, Kick — все платформы в одном месте"
              delay={0.1}
            />
            <FeatureCard
              icon={Sparkles}
              title="Анимации и частицы"
              description="Canvas-based система частиц, glow эффекты, scroll animations"
              delay={0.2}
            />
            <FeatureCard
              icon={Zap}
              title="Производительность"
              description="Vanilla JS, lazy loading, 60fps анимации, оптимизация"
              delay={0.3}
            />
            <FeatureCard
              icon={Shield}
              title="Accessibility"
              description="WCAG AA compliance, keyboard navigation, screen readers"
              delay={0.4}
            />
            <FeatureCard
              icon={MessageCircle}
              title="Social интеграция"
              description="Все социальные сети, live статус стримов, обновления"
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Social Platforms Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              Все платформы <span className="gradient-gold">вместе</span>
            </h2>
            <p className="text-muted text-lg">Интеграция с существующими социальными сетями</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SocialIcon
              icon={Video}
              platform="YouTube"
              followers="64.6K подписчиков"
              color="bg-red-600"
            />
            <SocialIcon
              icon={MessageCircle}
              platform="Telegram"
              followers="40K подписчиков"
              color="bg-blue-500"
            />
            <SocialIcon
              icon={Play}
              platform="Kick"
              followers="10.2K фолловеров"
              color="bg-green-500"
            />
            <SocialIcon
              icon={Camera}
              platform="Instagram"
              followers="3K+ подписчиков"
              color="bg-gradient-to-br from-purple-600 to-pink-500"
            />
            <SocialIcon
              icon={Sparkles}
              platform="TikTok"
              followers="7.1K фолловеров"
              color="bg-black border border-gold/30"
            />
            <SocialIcon
              icon={Globe}
              platform="VK"
              followers="7.1K подписчиков"
              color="bg-blue-700"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-12 text-center gold-glow-box"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              Готов <span className="gradient-gold">обсудить</span>?
            </h2>
            <p className="text-muted text-lg mb-8">
              Сайт полностью разработан и готов к деплою. Бесплатный хостинг на GitHub Pages.
              Нужна только твоя обратная связь и контент.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/kingofjava777"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Написать в Telegram
              </a>
              <a
                href="https://github.com/se1dhe/kingofjava777"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                GitHub репозиторий
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t border-gold/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted text-sm">
            © 2024 KINGOFJAVA777. Разработано с{' '}
            <span className="text-gold">❤️</span> для сообщества Lineage 2
          </p>
        </div>
      </footer>
    </div>
  );
}
