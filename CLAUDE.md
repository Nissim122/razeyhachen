# Claude Code — הוראות לפרויקט דפי נחיתה

## טריגר אוטומטי — CRITICAL

כאשר המשתמש מזכיר **"רזי החן"** או **"יעל חן"** בהקשר של בקשה לדף נחיתה — לדוגמה:
- "דף נחיתה חדש לרזי החן"
- "דף נחיתה חדש ליעל חן"
- "בני דף נחיתה לרזי החן"

**פעל בדיוק כמו שהסקיל `/landing` מגדיר** (קרא את `.claude/commands/landing.md`) ושאל רק: "מה הסדנה/הקורס הפעם? ספר לי: שם, מה לומדים, כמה עולה, מתי, ולמי מיועד."

## תפקיד הפרויקט
פרויקט זה מכיל דפי נחיתה בעברית (RTL) לסדנאות ולקורסים. כל דף נבנה כ-HTML יחיד עם Tailwind CDN, ללא framework.

## כיצד לבנות דף נחיתה חדש
כשהמשתמש מדביק `project-brief`, צור קובץ HTML חדש (שם לפי שם העסק, למשל `nails-workshop.html`) עם המבנה הסטנדרטי שמתואר להלן. **אין לשאול שאלות מיותרות** — השתמש בברירות מחדל סבירות לכל שדה שלא מולא.

---

## מערכת עיצוב — Design System

### צבעים (ברירת מחדל — ניתן לשנות ב-brief)
```
primary:  #F0147D   (ורוד עז — כפתורים, הדגשות)
primary-d:#C00060   (ורוד כהה — gradient end)
primary-l:#FFE0F0   (ורוד בהיר — רקע עדין)
cream:    #f1ece6   (קרם — רקע ראשי)
gold:     #C8973D   (זהב — כוכבי ביקורת)
ink:      #150510   (שחור עמוק — טקסט ראשי)
```

### טיפוגרפיה
- גופן: `Assistant` מ-Google Fonts (weights: 300,400,600,700,800)
- `h1,h2,h3`: `letter-spacing: -0.03em; line-height: 1.15`
- `p`: `line-height: 1.7`
- כיוון: RTL (`<html lang="he" dir="rtl">`)

### רכיבי CSS (תמיד לכלול ב-`<style>`)
- `.btn-pk` — כפתור ראשי עם gradient ו-pulse animation
- `.btn-ghost` — כפתור משני עם border
- `.card` — כרטיס לבן עם box-shadow עדין
- `.card-star` — כרטיס הדגשה עם border ורוד
- `.badge` — תג עם gradient
- `.icon-circle` / `.icon-circle-sm` — עיגולי אייקון
- `.grain::before` — אפקט גרעין SVG לרקע
- `.carousel-wrap/.track/.slide/.dot/.arrow` — קרוסלה מלאה
- `.faq details/summary` — FAQ עם אנימציית +
- `.sticky-bar` — CTA בתחתית (מובייל בלבד)
- `.wa-btn` — כפתור WhatsApp צף
- `.skip-link` — נגישות
- `.sr-only` — screen reader only
- `@media (prefers-reduced-motion: reduce)` — נגישות תנועה

---

## מבנה דף — סקציות (בסדר זה)

1. **`<head>`** — meta, Tailwind CDN, Google Fonts, tailwind.config עם הצבעים, `<style>` עם כל ה-CSS
2. **Skip link** — נגישות
3. **Hero** — `.grain`, headline, subheadline, CTA button, decorative SVG circles
4. **Pain points** — 3 כרטיסים עם icon-circle + כותרת + תיאור
5. **Curriculum** — רשת 2x3 כרטיסים עם מספרים 01–06 (06 = בונוס עם הדגשה)
6. **Pricing** — 2 מחירים: anchor price (ראשון במובייל, שני בדסקטופ) + main offer (עם badge "הכי משתלם")
7. **Testimonials** — קרוסלה עם 3 ביקורות, כוכבי זהב, אות ראשית של שם
8. **FAQ** — `<details>` accordion, 4 שאלות
9. **Final CTA** — רקע `#150510` (ink), טקסט לבן, כפתור
10. **Footer** — רקע ink, שם + כתובת + טלפון + סושיאל + קישורי privacy/nishut
11. **Sticky bar** — מובייל בלבד, CTA + מחיר
12. **WhatsApp float** — כפתור `#25D366`
13. **`<script>`** — קרוסלה (goTo, touch swipe, auto-advance 4200ms), IntersectionObserver להסתרת sticky bar כשה-pricing גלוי

---

## JS — קרוסלה
```js
// הלוגיקה תמיד זהה — רק מספר ה-slides משתנה
// RTL: next=‹ (‹), prev=› (›) — הפוך מ-LTR!
// Auto-advance: 4200ms, מתאפס בלחיצה
// Touch swipe: threshold 44px
// aria-live="polite" לנגישות
```

---

## נגישות (חובה תמיד)
- `lang="he" dir="rtl"` על `<html>`
- `aria-label` על כל כפתור אייקון
- `aria-hidden="true"` על SVG decorative
- `focusable="false"` על כל SVG
- Skip link לתוכן ראשי
- `focus-visible` outline: 3px solid primary
- `<main id="main-content" tabindex="-1">`
- `role="region" aria-label="..."` על קרוסלה

---

## ברירות מחדל כשחסר מידע ב-brief
- WhatsApp: אם לא צוין מספר, השאר placeholder `XXXXXXXXXXX`
- צבעים: השתמש במערכת ורוד אם לא צוין אחרת
- מספר slides: 3
- מספר FAQ: 4
- מספר curriculum items: 6
- עיצוב footer: כמו ה-default תמיד
