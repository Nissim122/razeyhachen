# /landing — בניית דף נחיתה חדש לרזי החן / יעל חן

## הוראות לביצוע

המשתמש רוצה לבנות דף נחיתה חדש עבור העסק. **כל פרטי העסק קבועים למטה** — שאל רק שאלה אחת:

> "מה הסדנה/הקורס הפעם? ספר לי: שם, מה לומדים, כמה עולה, מתי, ולמי מיועד."

לאחר שהמשתמש עונה — בנה קובץ HTML מלא לפי המפרט הבא.

---

## פרטי העסק הקבועים

```
שם העסק:   רזי החן
תת-כותרת:  סטודיו ואקדמיה לציפורניים
טלפון:     054-878-7702
WhatsApp:  972548787702
כתובת:     בצלאל 12, רמת גן — קומפלקס הבורסה
קהל יעד:   נערות גילאי 12–18
```

---

## מערכת עיצוב קבועה

### צבעים
```
primary:   #F0147D
primary-d: #C00060
cream:     #f1ece6
gold:      #C8973D
ink:       #150510
```

### טכנולוגיה
- HTML יחיד, Tailwind CDN, גופן Assistant מ-Google Fonts (300,400,600,700,800)
- כיוון RTL — `<html lang="he" dir="rtl">`
- tailwind.config עם הצבעים בתוך `<script>` ב-head

---

## CSS — כל הקלאסים הבאים חייבים להיות ב-`<style>`

```css
*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { font-family: 'Assistant', sans-serif; background: #f1ece6; color: #150510; overflow-x: hidden; padding-bottom: 72px; }
@media (min-width: 768px) { body { padding-bottom: 0; } }
h1, h2, h3 { letter-spacing: -0.03em; line-height: 1.15; }
p { line-height: 1.7; }

.btn-pk {
  background: linear-gradient(135deg, #F0147D 0%, #C00060 100%);
  color: #fff; font-weight: 800; border-radius: 9999px;
  padding: 1rem 2rem; font-size: 1.05rem; display: inline-block;
  text-align: center;
  box-shadow: 0 4px 20px rgba(240,20,125,.38), 0 2px 8px rgba(240,20,125,.18);
  transition: transform .22s cubic-bezier(.34,1.56,.64,1), box-shadow .22s ease;
  text-decoration: none; -webkit-tap-highlight-color: transparent;
}
.btn-pk:hover  { transform: translateY(-3px) scale(1.03); box-shadow: 0 10px 32px rgba(240,20,125,.48); }
.btn-pk:active { transform: scale(.96); }
.btn-pk:focus-visible { outline: 3px solid #F0147D; outline-offset: 3px; }

.btn-ghost {
  border: 2px solid #ddd; color: #555; font-weight: 700;
  border-radius: 9999px; padding: .85rem 1.5rem; font-size: .95rem;
  display: block; text-align: center; text-decoration: none;
  transition: border-color .2s, color .2s, transform .2s cubic-bezier(.34,1.56,.64,1);
  -webkit-tap-highlight-color: transparent;
}
.btn-ghost:hover  { border-color: #F0147D; color: #F0147D; transform: translateY(-2px); }
.btn-ghost:active { transform: scale(.97); }
.btn-ghost:focus-visible { outline: 3px solid #F0147D; outline-offset: 3px; }

.card { background: #fff; border-radius: 1.25rem; box-shadow: 0 2px 4px rgba(240,20,125,.04), 0 8px 24px rgba(240,20,125,.07), 0 20px 40px rgba(0,0,0,.05); }
.card-star { background: #fff; border-radius: 1.25rem; border: 2px solid rgba(240,20,125,.2); box-shadow: 0 4px 8px rgba(240,20,125,.08), 0 16px 40px rgba(240,20,125,.14), 0 40px 64px rgba(240,20,125,.08); }

.badge { background: linear-gradient(135deg, #F0147D 0%, #C00060 100%); color: #fff; border-radius: 9999px; padding: .4rem 1.2rem; font-size: .82rem; font-weight: 800; box-shadow: 0 4px 14px rgba(240,20,125,.42); white-space: nowrap; }

.icon-circle { width: 44px; height: 44px; border-radius: 9999px; background: linear-gradient(135deg, rgba(240,20,125,.1) 0%, rgba(240,20,125,.18) 100%); display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #F0147D; }
.icon-circle-sm { width: 36px; height: 36px; border-radius: 9999px; background: linear-gradient(135deg, rgba(240,20,125,.1) 0%, rgba(240,20,125,.18) 100%); display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #F0147D; font-weight: 800; font-size: .75rem; }

.grain::before { content: ''; position: absolute; inset: 0; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.025'/%3E%3C/svg%3E"); pointer-events: none; z-index: 0; }

.carousel-wrap { overflow: hidden; }
.carousel-track { display: flex; transition: transform .48s cubic-bezier(.4,0,.2,1); }
.carousel-slide { min-width: 100%; }
.carousel-dot { width: 10px; height: 10px; border-radius: 9999px; background: rgba(240,20,125,.25); border: none; cursor: pointer; transition: background .25s ease, transform .25s cubic-bezier(.34,1.56,.64,1); padding: 0; }
.carousel-dot.active { background: #F0147D; transform: scale(1.45); }
.carousel-dot:focus-visible { outline: 3px solid #F0147D; outline-offset: 3px; }
.carousel-arrow { width: 44px; height: 44px; border-radius: 9999px; background: #fff; border: 2px solid rgba(240,20,125,.2); color: #F0147D; font-size: 1.3rem; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 12px rgba(240,20,125,.14); transition: background .2s, transform .2s cubic-bezier(.34,1.56,.64,1); flex-shrink: 0; -webkit-tap-highlight-color: transparent; }
.carousel-arrow:hover  { background: #F0147D; color: #fff; transform: scale(1.08); }
.carousel-arrow:active { transform: scale(.93); }
.carousel-arrow:focus-visible { outline: 3px solid #F0147D; outline-offset: 3px; }

details.faq summary { list-style: none; cursor: pointer; -webkit-tap-highlight-color: transparent; }
details.faq summary:focus-visible { outline: 3px solid #F0147D; outline-offset: 2px; }
details.faq summary::-webkit-details-marker { display: none; }
details.faq summary .plus { transition: transform .3s cubic-bezier(.34,1.56,.64,1); display: inline-block; }
details.faq[open] summary .plus { transform: rotate(45deg); }

.pain-card { display: flex; align-items: flex-start; gap: .75rem; text-align: right; }
@media (min-width: 768px) { .pain-card { flex-direction: column; align-items: center; text-align: center; } }

@keyframes pulse-ring { 0% { transform:scale(.95); box-shadow:0 0 0 0 rgba(240,20,125,.5); } 70% { transform:scale(1); box-shadow:0 0 0 14px rgba(240,20,125,0); } 100% { transform:scale(.95); box-shadow:0 0 0 0 rgba(240,20,125,0); } }
.pulse { animation: pulse-ring 2.2s ease infinite; }
.star-icon { color: #C8973D; }

.sticky-bar { position: fixed; bottom: 0; right: 0; left: 0; z-index: 100; background: rgba(255,255,255,.97); backdrop-filter: blur(12px); padding: .75rem 1rem; box-shadow: 0 -4px 24px rgba(240,20,125,.12), 0 -1px 0 rgba(240,20,125,.08); }
@media (min-width: 768px) { .sticky-bar { display: none; } }

.wa-btn { position: fixed; bottom: 90px; left: 16px; z-index: 99; width: 52px; height: 52px; border-radius: 9999px; background: #25D366; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 16px rgba(37,211,102,.45); transition: transform .2s cubic-bezier(.34,1.56,.64,1); -webkit-tap-highlight-color: transparent; }
.wa-btn:hover { transform: scale(1.1); }
.wa-btn:active { transform: scale(.93); }
.wa-btn:focus-visible { outline: 3px solid #25D366; outline-offset: 3px; }
@media (min-width: 768px) { .wa-btn { bottom: 24px; } }

.skip-link { position: absolute; top: -100%; right: 0; background: #F0147D; color: #fff; padding: .75rem 1.5rem; font-weight: 700; font-size: 1rem; z-index: 9999; border-radius: 0 0 0 .5rem; text-decoration: none; }
.skip-link:focus { top: 0; outline: 3px solid #fff; outline-offset: 2px; }

.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }

@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration:.01ms!important; animation-iteration-count:1!important; transition-duration:.01ms!important; } html { scroll-behavior: auto; } }
```

---

## מבנה סקציות (בסדר זה)

1. **Head** — meta, Tailwind CDN, Google Fonts Assistant, tailwind.config עם הצבעים, `<style>` עם כל ה-CSS
2. **Skip link** — נגישות
3. **Hero** — `.grain relative`, headline 3 שורות (שורה 2 בצבע primary), subheadline, btn-pk + pulse, טקסט קטן, 2 עיגולי SVG decorative (ורוד + זהב)
4. **Pain Points** — כותרת section + תת-כותרת, 3 כרטיסים `.card .pain-card` עם SVG inline + כותרת + תיאור
5. **Curriculum** — כותרת section, grid 2 עמודות, פריטים 01–06 עם `.icon-circle-sm`, פריט 06 = בונוס עם border ורוד ואות כחה
6. **Pricing** — anchor price (opacity .88, שני במובייל, ראשון בדסקטופ via `md:order-1`) + main offer עם badge "הכי משתלם" (ראשון במובייל, שני בדסקטופ via `md:order-2`)
7. **Testimonials** — `role="region"`, קרוסלה עם 3 ביקורות, 5 כוכבי SVG זהב, אות ראשית בעיגול gradient, כפתורי ›/‹ (RTL)
8. **FAQ** — 4 `<details class="faq card">` עם + מסתובב
9. **Final CTA** — רקע `#150510`, grain, טקסט לבן, btn-pk
10. **Footer** — רקע `#150510`, שם + כתובת + טלפון + סושיאל (f / Instagram / WhatsApp) + קישורים privacy.html ו-nishut.html
11. **Sticky bar** — CTA + מחיר, מובייל בלבד
12. **WhatsApp float** — `.wa-btn` עם SVG
13. **Script** — קרוסלה + IntersectionObserver

---

## JavaScript (תמיד זהה בדיוק)

```js
const track=document.getElementById('track'),dots=document.querySelectorAll('.carousel-dot'),slides=document.querySelectorAll('.carousel-slide'),statusEl=document.getElementById('carousel-status');
let current=0,timer,touchX0=0,paused=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
function goTo(idx){current=(idx+slides.length)%slides.length;track.style.transform=`translateX(${current*100}%)`;dots.forEach((d,i)=>{d.classList.toggle('active',i===current);d.setAttribute('aria-current',i===current?'true':'false')});statusEl.textContent=`ביקורת ${current+1} מתוך ${slides.length}`}
function advance(){goTo(current+1)}
function resetTimer(){clearInterval(timer);if(!paused)timer=setInterval(advance,4200)}
document.getElementById('next').addEventListener('click',()=>{goTo(current+1);resetTimer()});
document.getElementById('prev').addEventListener('click',()=>{goTo(current-1);resetTimer()});
dots.forEach(d=>d.addEventListener('click',()=>{goTo(+d.dataset.idx);resetTimer()}));
const wrap=document.querySelector('.carousel-wrap');
wrap.addEventListener('touchstart',e=>{touchX0=e.changedTouches[0].clientX},{passive:true});
wrap.addEventListener('touchend',e=>{const diff=touchX0-e.changedTouches[0].clientX;if(Math.abs(diff)>44){diff>0?goTo(current+1):goTo(current-1);resetTimer()}},{passive:true});
resetTimer();
const pricingEl=document.getElementById('pricing'),stickyBar=document.querySelector('.sticky-bar'),stickyLink=stickyBar.querySelector('a');
const io=new IntersectionObserver(entries=>{const h=entries[0].isIntersecting;stickyBar.style.opacity=h?'0':'1';stickyBar.style.pointerEvents=h?'none':'auto';stickyBar.setAttribute('aria-hidden',h?'true':'false');stickyLink.tabIndex=h?-1:0},{threshold:0.2});
io.observe(pricingEl);
```

---

## כללי אצבע

- **שם קובץ:** שם קצר באנגלית לפי הנושא, לדוגמה `gel-workshop.html`
- **אל תשאל שאלות נוספות** — צור את הדף ישירות, השתמש בהנחות סבירות לפרטים חסרים
- **ביקורות:** אם לא סופקו — המצא 3 ביקורות ריאליסטיות מתאימות לסדנה
- **Pain points:** הסק מהמוצר — אילו בעיות הוא פותר
- **FAQ:** 4 שאלות רלוונטיות לסדנה הספציפית
- הכל בעברית, RTL, טון חם ומכירתי
