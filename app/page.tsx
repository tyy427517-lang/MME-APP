'use client';
import { useState } from 'react';

export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{ __html: PAGE_HTML }} />
  );
}

const PAGE_HTML = `<style>
:root{
  --bg:#070709;--s1:#0D0D12;--s2:#13131A;--s3:#1A1A24;--s4:#22222E;
  --border:rgba(255,255,255,0.06);--border2:rgba(255,255,255,0.1);--border3:rgba(255,255,255,0.18);
  --text:#F0EEE8;--text2:#8C8A84;--text3:#525050;--text4:#303030;
  --violet:#7C5CFC;--violet2:#9B7FFF;--violet-dim:rgba(124,92,252,0.12);--violet-glow:rgba(124,92,252,0.25);
  --teal:#00D4B4;--teal-dim:rgba(0,212,180,0.1);--gold:#E8B86D;
  --r:8px;--r-lg:14px;--r-xl:22px;
}
*{margin:0;padding:0;box-sizing:border-box;}
body{background:var(--bg);color:var(--text);font-family:'DM Sans',sans-serif;font-size:15px;line-height:1.6;-webkit-font-smoothing:antialiased;overflow-x:hidden;}
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
@keyframes fadeUp{from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:translateY(0);}}
@keyframes pulse{0%,100%{opacity:0.4;transform:scale(0.9);}50%{opacity:1;transform:scale(1.05);}}
@keyframes spin{to{transform:rotate(360deg);}}
@keyframes slideUp{from{opacity:0;transform:translateY(40px);}to{opacity:1;transform:translateY(0);}}
.a-up{animation:fadeUp 0.75s cubic-bezier(0.22,1,0.36,1) both;}
.d1{animation-delay:0.1s;}.d2{animation-delay:0.2s;}.d3{animation-delay:0.32s;}.d4{animation-delay:0.44s;}.d5{animation-delay:0.58s;}
.nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:0 48px;height:64px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border);background:rgba(7,7,9,0.85);backdrop-filter:blur(20px);}
.nav-logo{font-family:'Playfair Display',serif;font-weight:700;font-size:20px;letter-spacing:-0.03em;display:flex;align-items:center;gap:8px;}
.nav-logo-dot{width:8px;height:8px;border-radius:50%;background:linear-gradient(135deg,#7C5CFC,#00D4B4);}
.nav-cta{font-size:13px;font-weight:600;background:linear-gradient(135deg,#7C5CFC,#9B7FFF);color:#fff;border:none;cursor:pointer;padding:9px 20px;border-radius:99px;transition:all 0.2s;font-family:'DM Sans',sans-serif;}
.nav-cta:hover{transform:translateY(-1px);box-shadow:0 8px 24px rgba(124,92,252,0.35);}
.nav-link{font-size:13px;font-weight:500;color:#8C8A84;background:none;border:none;cursor:pointer;padding:7px 14px;border-radius:8px;transition:color 0.2s;font-family:'DM Sans',sans-serif;}
.nav-link:hover{color:#F0EEE8;}
.hero{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:100px 24px 80px;position:relative;overflow:hidden;text-align:center;}
.hero-orb{position:absolute;border-radius:50%;filter:blur(80px);pointer-events:none;}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border:none;cursor:pointer;font-weight:600;font-family:'DM Sans',sans-serif;transition:all 0.25s;border-radius:99px;}
.btn-primary{background:linear-gradient(135deg,#7C5CFC,#9B7FFF);color:#fff;padding:14px 32px;font-size:15px;}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 12px 32px rgba(124,92,252,0.35);}
.btn-primary:disabled{opacity:0.4;pointer-events:none;}
.btn-outline{background:transparent;color:#8C8A84;border:1px solid rgba(255,255,255,0.1);padding:13px 28px;font-size:15px;}
.btn-outline:hover{border-color:rgba(255,255,255,0.18);color:#F0EEE8;}
.btn-ghost{background:rgba(255,255,255,0.04);color:#8C8A84;border:1px solid rgba(255,255,255,0.06);padding:9px 18px;font-size:13px;border-radius:12px;font-family:'DM Sans',sans-serif;cursor:pointer;transition:all 0.2s;}
.btn-ghost:hover{background:rgba(255,255,255,0.08);color:#F0EEE8;}
.section{padding:100px 24px;}
.section-inner{max-width:1100px;margin:0 auto;}
.section-badge{display:inline-flex;align-items:center;gap:6px;padding:5px 14px;background:#13131A;border:1px solid rgba(255,255,255,0.1);border-radius:99px;font-size:11px;font-weight:700;color:#525050;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:20px;}
.service-card{background:#0D0D12;border:1px solid rgba(255,255,255,0.06);border-radius:22px;padding:36px 32px;cursor:pointer;transition:all 0.3s;position:relative;overflow:hidden;}
.service-card:hover{border-color:rgba(124,92,252,0.3);transform:translateY(-4px);box-shadow:0 20px 60px rgba(0,0,0,0.3);}
.service-card.selected{border-color:#7C5CFC;background:#13131A;}
.service-check{position:absolute;top:20px;right:20px;width:28px;height:28px;border-radius:50%;background:#7C5CFC;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity 0.2s;color:#fff;font-size:13px;font-weight:700;}
.service-card.selected .service-check{opacity:1;}
.form-input{background:#13131A;border:1px solid rgba(255,255,255,0.1);border-radius:14px;padding:13px 16px;font-size:14px;color:#F0EEE8;outline:none;transition:border-color 0.2s,box-shadow 0.2s;font-family:'DM Sans',sans-serif;width:100%;}
.form-input:focus{border-color:rgba(124,92,252,0.5);box-shadow:0 0 0 3px rgba(124,92,252,0.08);}
.form-input::placeholder{color:#303030;}
.form-label{font-size:12px;font-weight:600;color:#525050;letter-spacing:0.04em;text-transform:uppercase;margin-bottom:7px;display:block;}
.goal-option{background:#13131A;border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:12px 16px;cursor:pointer;transition:all 0.2s;text-align:center;font-size:13px;font-weight:500;color:#8C8A84;font-family:'DM Sans',sans-serif;}
.goal-option:hover{border-color:rgba(124,92,252,0.3);color:#9B7FFF;}
.goal-option.selected{border-color:rgba(124,92,252,0.5);color:#9B7FFF;background:rgba(124,92,252,0.12);}
.upload-zone{background:#13131A;border:1.5px dashed rgba(255,255,255,0.1);border-radius:14px;padding:28px;text-align:center;cursor:pointer;transition:all 0.2s;}
.upload-zone:hover{border-color:rgba(124,92,252,0.4);background:rgba(124,92,252,0.06);}
.steps-bar{display:flex;align-items:center;justify-content:center;gap:0;margin:0 auto 60px;max-width:480px;}
.step-node{display:flex;flex-direction:column;align-items:center;gap:7px;}
.step-circle{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;transition:all 0.3s;border:1.5px solid rgba(255,255,255,0.1);color:#525050;background:#1A1A24;}
.step-node.done .step-circle{background:#7C5CFC;border-color:#7C5CFC;color:#fff;}
.step-node.active .step-circle{background:#1A1A24;border-color:#7C5CFC;color:#9B7FFF;box-shadow:0 0 0 4px rgba(124,92,252,0.12);}
.step-label{font-size:11px;font-weight:600;color:#525050;white-space:nowrap;}
.step-node.active .step-label{color:#8C8A84;}
.step-connector{flex:1;height:1.5px;background:rgba(255,255,255,0.08);margin:0 6px;margin-bottom:22px;transition:background 0.4s;}
.step-connector.done{background:#7C5CFC;}
.result-box{background:#0D0D12;border:1px solid rgba(255,255,255,0.1);border-radius:22px;padding:36px 40px;position:relative;overflow:hidden;}
.result-box::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#7C5CFC,#00D4B4,#E8B86D);}
.result-content{font-size:14px;line-height:1.85;color:#8C8A84;white-space:pre-wrap;}
.result-content h1{font-family:'Playfair Display',serif;color:#F0EEE8;font-size:22px;margin:0 0 16px;}
.result-content h2{font-family:'Playfair Display',serif;color:#F0EEE8;font-size:18px;margin:28px 0 10px;}
.result-content strong{color:#F0EEE8;font-weight:600;}
.loading-dot{width:8px;height:8px;border-radius:50%;animation:pulse 1.4s ease-in-out infinite;display:inline-block;}
.loading-step{display:flex;align-items:center;gap:10px;font-size:13px;color:#303030;transition:color 0.3s;font-family:'DM Sans',sans-serif;}
.loading-step.active{color:#8C8A84;}
.loading-step.done{color:#00D4B4;}
.lstep-icon{width:20px;height:20px;border-radius:50%;border:1px solid rgba(255,255,255,0.08);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:10px;}
.toast{position:fixed;bottom:28px;right:28px;background:#1A1A24;border:1px solid rgba(255,255,255,0.1);border-radius:14px;padding:14px 20px;font-size:13px;font-weight:500;display:flex;align-items:center;gap:10px;z-index:500;animation:slideUp 0.4s cubic-bezier(0.22,1,0.36,1);box-shadow:0 16px 48px rgba(0,0,0,0.4);font-family:'DM Sans',sans-serif;}
.hidden{display:none!important;}
.page{display:none;}
.page.active{display:block;}
@media(max-width:768px){.nav{padding:0 20px;}.nav-links{display:none;}.section{padding:64px 20px;}.result-box{padding:24px 20px;}}
</style>

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"/>

<!-- NAV -->
<nav class="nav">
  <div class="nav-logo"><div class="nav-logo-dot"></div>MME Marketing</div>
  <div style="display:flex;align-items:center;gap:6px;" class="nav-links">
    <button class="nav-link" onclick="document.getElementById('services-section').scrollIntoView({behavior:'smooth'})">Services</button>
    <button class="nav-cta" onclick="startFlow()">Get Started</button>
  </div>
</nav>

<!-- LANDING PAGE -->
<div id="page-landing" class="page active">
  <section class="hero">
    <div class="hero-orb" style="width:500px;height:500px;background:radial-gradient(ellipse,rgba(124,92,252,0.18),transparent 70%);top:-100px;left:50%;transform:translateX(-50%);"></div>
    <div class="hero-orb" style="width:300px;height:300px;background:radial-gradient(ellipse,rgba(0,212,180,0.1),transparent 70%);bottom:10%;right:5%;"></div>
    <div style="display:inline-flex;align-items:center;gap:8px;padding:6px 16px;background:rgba(124,92,252,0.12);border:1px solid rgba(124,92,252,0.25);border-radius:99px;font-size:12px;font-weight:600;color:#9B7FFF;letter-spacing:0.04em;margin-bottom:28px;" class="a-up">
      <div style="width:6px;height:6px;border-radius:50%;background:#9B7FFF;animation:pulse 2s ease-in-out infinite;"></div>
      Trusted by growing brands worldwide
    </div>
    <h1 class="a-up d1" style="font-family:'Playfair Display',serif;font-weight:900;font-size:clamp(42px,7vw,86px);line-height:1.04;letter-spacing:-0.025em;margin-bottom:24px;max-width:860px;">
      Grow Your Brand<br/>With <span style="background:linear-gradient(135deg,#9B7FFF,#00D4B4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">MME Marketing</span>
    </h1>
    <p class="a-up d2" style="font-size:clamp(15px,2vw,18px);color:#8C8A84;margin-bottom:44px;max-width:500px;line-height:1.75;">Social media, websites, and full digital growth systems — built to scale your business.</p>
    <div class="a-up d3" style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-bottom:60px;">
      <button class="btn btn-primary" onclick="startFlow()">Get Started <span>→</span></button>
      <button class="btn btn-outline" onclick="document.getElementById('services-section').scrollIntoView({behavior:'smooth'})">View Services</button>
    </div>
    <div class="a-up d4" style="display:flex;gap:40px;justify-content:center;flex-wrap:wrap;">
      <div style="text-align:center;"><div style="font-family:'Playfair Display',serif;font-size:28px;font-weight:700;color:#F0EEE8;">150+</div><div style="font-size:12px;color:#525050;font-weight:500;margin-top:2px;">Brands Grown</div></div>
      <div style="text-align:center;"><div style="font-family:'Playfair Display',serif;font-size:28px;font-weight:700;color:#F0EEE8;">4.9★</div><div style="font-size:12px;color:#525050;font-weight:500;margin-top:2px;">Client Rating</div></div>
      <div style="text-align:center;"><div style="font-family:'Playfair Display',serif;font-size:28px;font-weight:700;color:#F0EEE8;">3×</div><div style="font-size:12px;color:#525050;font-weight:500;margin-top:2px;">Average ROAS</div></div>
      <div style="text-align:center;"><div style="font-family:'Playfair Display',serif;font-size:28px;font-weight:700;color:#F0EEE8;">48h</div><div style="font-size:12px;color:#525050;font-weight:500;margin-top:2px;">Proposal Turnaround</div></div>
    </div>
  </section>

  <section class="section" id="services-section">
    <div class="section-inner">
      <div style="text-align:center;margin-bottom:52px;">
        <div class="section-badge">What We Do</div>
        <h2 style="font-family:'Playfair Display',serif;font-weight:700;font-size:clamp(32px,5vw,52px);line-height:1.1;letter-spacing:-0.02em;margin-bottom:14px;">Everything your brand needs</h2>
        <p style="font-size:16px;color:#8C8A84;line-height:1.75;max-width:560px;margin:0 auto;">From viral social content to high-converting websites — we build the full digital ecosystem for your business.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;">
        <div style="background:#0D0D12;border:1px solid rgba(255,255,255,0.06);border-radius:22px;padding:36px 32px;">
          <div style="font-size:32px;margin-bottom:16px;">📱</div>
          <div style="font-family:'Playfair Display',serif;font-size:20px;font-weight:700;margin-bottom:8px;">Social Media Marketing</div>
          <div style="font-size:14px;color:#8C8A84;line-height:1.7;margin-bottom:20px;">Content creation, community management, paid ads, and growth strategy across Instagram, TikTok, and more.</div>
          <div style="display:flex;flex-wrap:wrap;gap:8px;">
            <span style="padding:4px 12px;background:rgba(124,92,252,0.12);border:1px solid rgba(124,92,252,0.2);border-radius:99px;font-size:11px;font-weight:600;color:#9B7FFF;">Content Strategy</span>
            <span style="padding:4px 12px;background:rgba(124,92,252,0.12);border:1px solid rgba(124,92,252,0.2);border-radius:99px;font-size:11px;font-weight:600;color:#9B7FFF;">Paid Ads</span>
          </div>
        </div>
        <div style="background:#0D0D12;border:1px solid rgba(255,255,255,0.06);border-radius:22px;padding:36px 32px;">
          <div style="font-size:32px;margin-bottom:16px;">💻</div>
          <div style="font-family:'Playfair Display',serif;font-size:20px;font-weight:700;margin-bottom:8px;">Website Design</div>
          <div style="font-size:14px;color:#8C8A84;line-height:1.7;margin-bottom:20px;">Premium, conversion-focused websites built to turn visitors into customers. Fast, mobile-first, built to rank.</div>
          <div style="display:flex;flex-wrap:wrap;gap:8px;">
            <span style="padding:4px 12px;background:rgba(0,212,180,0.1);border:1px solid rgba(0,212,180,0.2);border-radius:99px;font-size:11px;font-weight:600;color:#00D4B4;">UI/UX Design</span>
            <span style="padding:4px 12px;background:rgba(0,212,180,0.1);border:1px solid rgba(0,212,180,0.2);border-radius:99px;font-size:11px;font-weight:600;color:#00D4B4;">SEO</span>
          </div>
        </div>
        <div style="background:#0D0D12;border:1px solid rgba(255,255,255,0.06);border-radius:22px;padding:36px 32px;">
          <div style="font-size:32px;margin-bottom:16px;">🚀</div>
          <div style="font-family:'Playfair Display',serif;font-size:20px;font-weight:700;margin-bottom:8px;">Full Growth System</div>
          <div style="font-size:14px;color:#8C8A84;line-height:1.7;margin-bottom:20px;">The complete package — social, website, ads, email, and SEO working together as one growth engine.</div>
          <div style="display:flex;flex-wrap:wrap;gap:8px;">
            <span style="padding:4px 12px;background:rgba(232,184,109,0.1);border:1px solid rgba(232,184,109,0.2);border-radius:99px;font-size:11px;font-weight:600;color:#E8B86D;">Full Stack</span>
            <span style="padding:4px 12px;background:rgba(232,184,109,0.1);border:1px solid rgba(232,184,109,0.2);border-radius:99px;font-size:11px;font-weight:600;color:#E8B86D;">Strategy</span>
          </div>
        </div>
      </div>
      <div style="text-align:center;margin-top:48px;">
        <button class="btn btn-primary" onclick="startFlow()">Get Your Free Proposal →</button>
      </div>
    </div>
  </section>
  <footer style="border-top:1px solid rgba(255,255,255,0.06);padding:40px 48px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;">
    <div style="font-family:'Playfair Display',serif;font-weight:700;font-size:18px;">MME Marketing</div>
    <div style="font-size:12px;color:#303030;">© 2025 MME Marketing. All rights reserved.</div>
  </footer>
</div>

<!-- FLOW PAGE -->
<div id="page-flow" class="page">
  <div style="min-height:100vh;padding:100px 24px 80px;">
    <div style="max-width:800px;margin:0 auto;">
      <div class="steps-bar">
        <div class="step-node active" id="step-node-1"><div class="step-circle" id="sc-1">1</div><div class="step-label">Service</div></div>
        <div class="step-connector" id="step-conn-1"></div>
        <div class="step-node" id="step-node-2"><div class="step-circle" id="sc-2">2</div><div class="step-label">Details</div></div>
        <div class="step-connector" id="step-conn-2"></div>
        <div class="step-node" id="step-node-3"><div class="step-circle" id="sc-3">3</div><div class="step-label">Proposal</div></div>
      </div>

      <!-- STEP 1 -->
      <div id="step-1">
        <div style="text-align:center;margin-bottom:48px;">
          <div class="section-badge" style="margin-bottom:16px;">Step 1 of 3</div>
          <h2 style="font-family:'Playfair Display',serif;font-weight:700;font-size:clamp(28px,5vw,48px);line-height:1.1;letter-spacing:-0.02em;margin-bottom:10px;">What can we help you with?</h2>
          <p style="font-size:15px;color:#8C8A84;">Choose the service that fits your goals.</p>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;">
          <div class="service-card" onclick="selectService('social',this)">
            <div class="service-check">✓</div>
            <div style="font-size:32px;margin-bottom:16px;">📱</div>
            <div style="font-family:'Playfair Display',serif;font-size:20px;font-weight:700;margin-bottom:8px;">Social Media</div>
            <div style="font-size:13px;color:#8C8A84;line-height:1.65;margin-bottom:16px;">Content, ads, and community growth across Instagram, TikTok, and Facebook.</div>
            <div style="font-size:12px;color:#525050;">Starting from $750/mo</div>
          </div>
          <div class="service-card" onclick="selectService('website',this)">
            <div class="service-check">✓</div>
            <div style="font-size:32px;margin-bottom:16px;">💻</div>
            <div style="font-family:'Playfair Display',serif;font-size:20px;font-weight:700;margin-bottom:8px;">Website Design</div>
            <div style="font-size:13px;color:#8C8A84;line-height:1.65;margin-bottom:16px;">Premium, fast, conversion-focused websites built to rank and convert.</div>
            <div style="font-size:12px;color:#525050;">Starting from $1,500</div>
          </div>
          <div class="service-card" onclick="selectService('both',this)">
            <div class="service-check">✓</div>
            <div style="font-size:32px;margin-bottom:16px;">🚀</div>
            <div style="font-family:'Playfair Display',serif;font-size:20px;font-weight:700;margin-bottom:8px;">Both Services</div>
            <div style="font-size:13px;color:#8C8A84;line-height:1.65;margin-bottom:16px;">The complete digital growth system — social and website working together.</div>
            <div style="font-size:12px;color:#E8B86D;font-weight:600;">Best value ✦</div>
          </div>
        </div>
        <div style="display:flex;justify-content:center;margin-top:40px;">
          <button class="btn btn-primary" id="step1-next" onclick="goToStep2()" disabled>Continue →</button>
        </div>
      </div>

      <!-- STEP 2 -->
      <div id="step-2" class="hidden">
        <div style="text-align:center;margin-bottom:48px;">
          <div class="section-badge" style="margin-bottom:16px;">Step 2 of 3</div>
          <h2 style="font-family:'Playfair Display',serif;font-weight:700;font-size:clamp(28px,5vw,48px);line-height:1.1;letter-spacing:-0.02em;margin-bottom:10px;">Tell us about your business</h2>
          <p style="font-size:15px;color:#8C8A84;">The more detail you share, the better your proposal.</p>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;max-width:680px;margin:0 auto;">
          <div style="display:flex;flex-direction:column;gap:7px;">
            <label class="form-label">Business Name *</label>
            <input type="text" id="biz-name" class="form-input" placeholder="e.g. Bloom Skincare"/>
          </div>
          <div style="display:flex;flex-direction:column;gap:7px;">
            <label class="form-label">Industry</label>
            <select id="biz-industry" class="form-input" style="appearance:none;">
              <option value="">Select...</option>
              <option>Fashion & Apparel</option><option>Food & Beverage</option>
              <option>Health & Wellness</option><option>Tech & Software</option>
              <option>E-commerce / Retail</option><option>Real Estate</option>
              <option>Beauty & Cosmetics</option><option>Fitness & Sports</option><option>Other</option>
            </select>
          </div>
          <div style="display:flex;flex-direction:column;gap:7px;grid-column:1/-1;">
            <label class="form-label">Business Description *</label>
            <textarea id="biz-desc" class="form-input" style="min-height:100px;resize:vertical;" placeholder="What do you sell? What makes you different?"></textarea>
          </div>
          <div style="display:flex;flex-direction:column;gap:7px;grid-column:1/-1;">
            <label class="form-label">Target Audience *</label>
            <textarea id="biz-audience" class="form-input" style="min-height:80px;resize:vertical;" placeholder="Who is your ideal customer? Age, interests, location..."></textarea>
          </div>
          <div style="display:flex;flex-direction:column;gap:7px;grid-column:1/-1;">
            <label class="form-label">Primary Goal</label>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:8px;">
              <div class="goal-option" onclick="selectGoal(this,'Brand Awareness')">📣 Brand Awareness</div>
              <div class="goal-option" onclick="selectGoal(this,'Increase Sales')">💰 Increase Sales</div>
              <div class="goal-option" onclick="selectGoal(this,'Website Traffic')">🌐 Website Traffic</div>
              <div class="goal-option" onclick="selectGoal(this,'Lead Generation')">🎯 Lead Generation</div>
              <div class="goal-option" onclick="selectGoal(this,'Community Building')">👥 Community</div>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:7px;">
            <label class="form-label">Monthly Budget</label>
            <select id="biz-budget" class="form-input" style="appearance:none;">
              <option value="">Select budget...</option>
              <option>Under $500/mo</option><option>$500 – $1,000/mo</option>
              <option>$1,000 – $2,500/mo</option><option>$2,500 – $5,000/mo</option><option>$5,000+/mo</option>
            </select>
          </div>
          <div style="display:flex;flex-direction:column;gap:7px;">
            <label class="form-label">Current Website</label>
            <input type="text" id="biz-website" class="form-input" placeholder="https://yoursite.com"/>
          </div>
          <div style="display:flex;flex-direction:column;gap:7px;grid-column:1/-1;">
            <label class="form-label">Logo / Images (Optional)</label>
            <div class="upload-zone" onclick="document.getElementById('file-upload').click()">
              <input type="file" id="file-upload" accept="image/*" multiple style="display:none" onchange="handleUpload(this)"/>
              <div style="font-size:24px;margin-bottom:6px;">⊕</div>
              <div style="font-size:13px;color:#525050;" id="upload-text">Click to upload or drag & drop</div>
              <div style="font-size:11px;color:#303030;margin-top:4px;">PNG, JPG, SVG up to 10MB</div>
            </div>
          </div>
        </div>
        <div style="display:flex;justify-content:space-between;max-width:680px;margin:32px auto 0;gap:12px;">
          <button class="btn btn-outline" onclick="goToStep1()">← Back</button>
          <button class="btn btn-primary" onclick="generateProposal()">Generate My Proposal ✨</button>
        </div>
      </div>

      <!-- STEP 3 -->
      <div id="step-3" class="hidden">
        <div id="loading-state">
          <div style="text-align:center;padding:80px 24px;">
            <div style="display:flex;justify-content:center;gap:8px;margin-bottom:24px;">
              <div class="loading-dot" style="background:#7C5CFC;"></div>
              <div class="loading-dot" style="background:#00D4B4;animation-delay:0.2s;"></div>
              <div class="loading-dot" style="background:#E8B86D;animation-delay:0.4s;"></div>
            </div>
            <div style="font-family:'Playfair Display',serif;font-size:24px;font-weight:700;margin-bottom:8px;">Building your proposal...</div>
            <div style="font-size:14px;color:#525050;margin-bottom:32px;">Our AI is crafting a customized strategy for your business</div>
            <div style="display:flex;flex-direction:column;gap:12px;max-width:320px;margin:0 auto;" id="loading-steps">
              <div class="loading-step active" id="lstep-1"><div class="lstep-icon">◈</div>Analyzing your business profile</div>
              <div class="loading-step" id="lstep-2"><div class="lstep-icon">◈</div>Researching your market</div>
              <div class="loading-step" id="lstep-3"><div class="lstep-icon">◈</div>Writing your marketing strategy</div>
              <div class="loading-step" id="lstep-4"><div class="lstep-icon">◈</div>Generating pricing tiers</div>
              <div class="loading-step" id="lstep-5"><div class="lstep-icon">◈</div>Finalizing your proposal</div>
            </div>
          </div>
        </div>
        <div id="result-state" class="hidden">
          <div style="max-width:800px;margin:0 auto;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;flex-wrap:wrap;gap:12px;">
              <div>
                <div style="font-size:12px;font-weight:600;color:#00D4B4;letter-spacing:0.06em;text-transform:uppercase;margin-bottom:6px;">✦ Proposal Ready</div>
                <div style="font-family:'Playfair Display',serif;font-size:28px;font-weight:700;">Your Custom Proposal</div>
              </div>
              <div style="display:flex;gap:10px;">
                <button class="btn-ghost" onclick="copyProposal()">📋 Copy</button>
                <button class="btn-ghost" onclick="showToast('📧 Email feature coming soon — use Copy for now')">📧 Email</button>
              </div>
            </div>
            <div class="result-box">
              <div class="result-content" id="result-content"></div>
            </div>
            <div style="display:flex;gap:12px;margin-top:20px;flex-wrap:wrap;">
              <button class="btn btn-primary" onclick="showToast('📧 Email feature coming soon — use Copy for now')">📧 Send to My Email</button>
              <button class="btn btn-outline" style="font-size:13px;padding:9px 20px;" onclick="startOver()">Start New Proposal</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- TOAST -->
<div id="toast" class="toast hidden"><span id="toast-msg"></span></div>

<script>
let selectedService=null,selectedGoal='';
function showPage(id){document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));document.getElementById(id).classList.add('active');window.scrollTo({top:0,behavior:'smooth'});}
function startFlow(){showPage('page-flow');updateSteps(1);}
function startOver(){selectedService=null;selectedGoal='';document.querySelectorAll('.service-card').forEach(c=>c.classList.remove('selected'));document.getElementById('step1-next').disabled=true;['biz-name','biz-desc','biz-audience','biz-website'].forEach(id=>document.getElementById(id).value='');document.getElementById('biz-budget').value='';document.getElementById('biz-industry').value='';document.querySelectorAll('.goal-option').forEach(g=>g.classList.remove('selected'));showStep('step-1');updateSteps(1);}
function updateSteps(active){for(let i=1;i<=3;i++){const n=document.getElementById('step-node-'+i),c=document.getElementById('sc-'+i);n.classList.remove('done','active');if(i<active){n.classList.add('done');c.textContent='✓';}else if(i===active){n.classList.add('active');c.textContent=i;}else{c.textContent=i;}}for(let i=1;i<=2;i++){document.getElementById('step-conn-'+i).classList.toggle('done',i<active);}}
function showStep(id){['step-1','step-2','step-3'].forEach(s=>document.getElementById(s).classList.add('hidden'));document.getElementById(id).classList.remove('hidden');}
function selectService(type,el){selectedService=type;document.querySelectorAll('.service-card').forEach(c=>c.classList.remove('selected'));el.classList.add('selected');document.getElementById('step1-next').disabled=false;}
function goToStep2(){if(!selectedService)return;showStep('step-2');updateSteps(2);window.scrollTo({top:0,behavior:'smooth'});}
function goToStep1(){showStep('step-1');updateSteps(1);window.scrollTo({top:0,behavior:'smooth'});}
function selectGoal(el,goal){selectedGoal=goal;document.querySelectorAll('.goal-option').forEach(g=>g.classList.remove('selected'));el.classList.add('selected');}
function handleUpload(input){if(input.files.length>0){document.getElementById('upload-text').textContent='✓ '+input.files.length+' file(s) uploaded';}}
function animateLoadingSteps(cb){const steps=['lstep-1','lstep-2','lstep-3','lstep-4','lstep-5'];let i=0;function next(){if(i>0){const prev=document.getElementById(steps[i-1]);prev.classList.remove('active');prev.classList.add('done');prev.querySelector('.lstep-icon').textContent='✓';}if(i<steps.length){document.getElementById(steps[i]).classList.add('active');i++;setTimeout(next,900);}else if(cb)cb();}next();}
async function generateProposal(){
  const bizName=document.getElementById('biz-name').value.trim();
  const bizDesc=document.getElementById('biz-desc').value.trim();
  const bizAudience=document.getElementById('biz-audience').value.trim();
  if(!bizName||!bizDesc||!bizAudience){showToast('⚠️ Please fill in Business Name, Description, and Audience.');return;}
  const bizBudget=document.getElementById('biz-budget').value;
  const bizIndustry=document.getElementById('biz-industry').value;
  const bizWebsite=document.getElementById('biz-website').value.trim();
  const serviceLabel={social:'Social Media Marketing',website:'Website Design',both:'Social Media + Website Design'}[selectedService];
  showStep('step-3');updateSteps(3);
  document.getElementById('loading-state').classList.remove('hidden');
  document.getElementById('result-state').classList.add('hidden');
  animateLoadingSteps(null);
  const prompt='You are a senior marketing strategist at MME Marketing. A client submitted this intake form:\n\nBusiness: '+bizName+'\nIndustry: '+(bizIndustry||'Not specified')+'\nService: '+serviceLabel+'\nDescription: '+bizDesc+'\nAudience: '+bizAudience+'\nGoal: '+(selectedGoal||'Growth')+'\nBudget: '+(bizBudget||'Not specified')+'\nWebsite: '+(bizWebsite||'None')+'\n\nWrite a professional marketing proposal with these sections:\n# Executive Summary\n# Recommended Strategy\n'+(selectedService!=='website'?'# Social Media Game Plan\n':'')+( selectedService!=='social'?'# Website Blueprint\n':'' )+'# 90-Day Roadmap\n# Pricing Tiers (Basic, Pro, Premium with prices)\n# Next Steps\n\nBe specific to this business. Make it premium and actionable.';
  try{
    const resp=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:2000,messages:[{role:'user',content:prompt}]})});
    const data=await resp.json();
    const text=data.content?.map(c=>c.text||'').join('')||'';
    await new Promise(r=>setTimeout(r,600));
    displayResult(text);
  }catch(e){
    await new Promise(r=>setTimeout(r,2000));
    displayResult(fallbackProposal(bizName,serviceLabel,bizAudience,bizBudget,selectedGoal));
  }
}
function displayResult(text){
  document.getElementById('loading-state').classList.add('hidden');
  document.getElementById('result-state').classList.remove('hidden');
  const html=text.replace(/^# (.+)$/gm,'<h1 style="font-family:Playfair Display,serif;color:#F0EEE8;font-size:22px;margin:28px 0 12px;font-weight:700;">$1</h1>').replace(/^## (.+)$/gm,'<h2 style="font-family:Playfair Display,serif;color:#F0EEE8;font-size:18px;margin:22px 0 10px;">$1</h2>').replace(/\*\*(.+?)\*\*/g,'<strong style="color:#F0EEE8;font-weight:600;">$1</strong>').replace(/^- (.+)$/gm,'<div style="display:flex;gap:8px;margin:5px 0;"><span style="color:#7C5CFC;flex-shrink:0;">▸</span><span>$1</span></div>').replace(/\n\n/g,'<br/><br/>');
  document.getElementById('result-content').innerHTML=html||text;
  window.scrollTo({top:0,behavior:'smooth'});
}
function fallbackProposal(name,service,audience,budget,goal){return'# Executive Summary\n\n'+name+' has a strong opportunity to grow in the digital space. Based on your profile, we have identified a clear path to reach '+audience+' and drive meaningful results for your primary goal: '+(goal||'growth')+'.\n\n# Recommended Strategy\n\nFor '+name+', we recommend a data-driven approach combining authentic brand storytelling with performance marketing. Your audience responds to consistent, high-quality content paired with strategic paid promotion.\n\n**Core pillars:**\n- Build brand authority through consistent content\n- Convert awareness into leads via targeted ads\n- Optimize every touchpoint for '+(goal||'growth')+'\n\n# 90-Day Roadmap\n\n**Month 1 — Foundation**\nSet up optimized profiles, establish brand voice, publish foundational content, run initial awareness campaign.\n\n**Month 2 — Momentum**\nScale winning content, launch retargeting campaigns, grow following by 500–1,000 engaged followers.\n\n**Month 3 — Scale**\nDouble down on best channels, optimize ad spend, establish monthly reporting.\n\n# Pricing Tiers\n\n**Basic Package — $750/mo**\n- 12 custom posts/month\n- Basic graphic design\n- Caption copywriting\n- Monthly analytics report\n\n**Pro Package — $1,500/mo** ⭐ Most Popular\n- 20 custom posts/month\n- Professional design + video editing\n- Paid ads management ($300 ad spend included)\n- Bi-weekly strategy call\n\n**Premium Package — $3,000/mo**\n- 30+ posts/month\n- Full content production\n- $1,000 ad spend included\n- Weekly calls + dedicated account manager\n\n# Next Steps\n\n1. Reply with any questions about this proposal\n2. Schedule a free 30-min discovery call\n3. Choose your package and we kick off within 48 hours\n\nLet\'s build something great together. 🚀';}
function copyProposal(){const text=document.getElementById('result-content').innerText;navigator.clipboard?.writeText(text).then(()=>showToast('✓ Copied to clipboard'));}
let toastTimer;function showToast(msg){const t=document.getElementById('toast');document.getElementById('toast-msg').textContent=msg;t.classList.remove('hidden');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.add('hidden'),3800);}
</script>`;