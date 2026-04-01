# 📊 SE Grade Tracker: Academic Intelligence for Strategic Planning

> *"Know where you stand. See where you're headed. Make better choices."*

![HTML](https://img.shields.io/badge/HTML5-Browser--Based-E34F26?style=flat-square&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-Open%20Academic-brightgreen?style=flat-square)
![Platform](https://img.shields.io/badge/Platform-Web%20Browser-4285F4?style=flat-square&logo=googlechrome&logoColor=white)
![No Server](https://img.shields.io/badge/Backend-None%20%E2%80%94%20100%25%20Local-lightgrey?style=flat-square)
![GPA Scale](https://img.shields.io/badge/GPA%20Scale-5.0-purple?style=flat-square)
![Status](https://img.shields.io/badge/Status-Ready%20to%20Use-brightgreen?style=flat-square)

---

Every semester brings the same question: *How am I really performing?* Not just academically, but strategically — where do I stand right now, and what does my future look like if I make different choices?

This application exists to answer that question with **clarity, precision, and actionable insight**.

Built as a practical, browser-based dashboard for university students, the SE Grade Tracker transforms raw grades into meaningful intelligence. Track cumulative academic performance, simulate future scenarios, and identify exactly where to focus your effort — no accounts, no setup, no learning curve.

---

## The Student Journey

### 🎯 Sarah — The Strategic Planner

Sarah is a third-year software engineering student with a 3.8 CGPA. She wants to apply for a master's program requiring a 4.2 minimum. *Is this achievable with four semesters left?*

She opens the Grade Tracker, enters her completed grades, and immediately sees her exact standing. In the Forecast tab, she models three scenarios — best case, realistic, worst case — and watches her projected CGPA update live. She discovers that swapping one elective for a higher-unit core course pushes her realistic projection from 4.15 to **4.22**. She exports her analysis as JSON, shares it with her advisor, and moves forward with confidence.

### 📈 Ahmed — The Struggling Student

Ahmed averaged a 2.3 CGPA in his first year and is now determined to recover. *Can he realistically reach a 3.0?*

The Insights tab shows him a bar chart of his semester GPAs — a clear, honest picture. Then it calculates exactly what he needs: a **3.6 average** in remaining courses. That's a B+. Achievable. The Forecast feature lets him plan his next semester conservatively, and he watches his projected CGPA climb to 2.8. The numbers give him a roadmap, not just a mirror.

### 🔬 Zainab — The Data-Driven Analyst

Zainab is a final-year student with a 4.4 CGPA completing her thesis. She uses the export feature to generate a complete JSON record of four years — every semester, every course, every grade — and the Insights dashboard to identify which years were hardest and which course types consistently gave her the best grades.

Her Grade Tracker becomes a **narrative of her academic journey**.

---

## Core Features

### Dashboard — Your Academic Snapshot

Your current CGPA is front and centre — not buried in a spreadsheet. Context-aware messages greet you based on time of day and academic standing, creating a personalised experience every visit.

### My Grades — Building Your Record

Add semesters, add courses, assign credit units, and enter grades. Your semester GPA and overall CGPA **recalculate instantly** with every change. All data persists automatically in your browser — no manual saving required.

### Forecast — Modeling Your Future

| Scenario | What it shows |
|---|---|
| Best case | All A's across planned courses |
| Realistic | Your entered grade estimates |
| Worst case | All F's — for full situational awareness |

A **live delta display** shows exactly how your choices shift your CGPA. The target planner works backwards: enter your dream CGPA and expected units per semester, and it calculates the exact number of consecutive A-grade semesters you need.

### Insights — Understanding Your Patterns

- Semester-by-semester GPA bar chart
- Highest and lowest-performing semesters
- Best and worst individual courses
- Total units completed
- **"What's Dragging Your CGPA"** — every course below a C, listed clearly as growth opportunities
- Minimum-grade calculator: *what average must you maintain to hit your target?*

---

## Understanding the Mathematics

The application uses a standard **5.0 grade point scale**.

$$\text{CGPA} = \frac{\sum (\text{Grade Points} \times \text{Credit Units})}{\sum \text{Credit Units}}$$

Every course is weighted by its credit units, giving you a precise average that reflects both performance and course load. The Forecast and target-planner features apply the same formula forward — transparent math, real decisions.

---

## Getting Started

```bash
# No installation needed.
# Just open the file in your browser.
double-click index.html
```

That's it. Works immediately, anywhere you have a web browser.

### Your First Steps

1. **Build your history** — Add completed semesters and courses with credit units and grades. Watch your CGPA calculate in real-time.
2. **Model your future** — Switch to Forecast, enter planned courses and realistic grade estimates, and explore your three scenarios.
3. **Find your patterns** — Browse Insights to see which semesters were strongest, which courses pulled your average down, and what it takes to reach your target.
4. **Export your analysis** — Save a JSON file to share with your advisor, back up, or import on another device.

---

## For BSE Students at Mbarara University

The application comes **pre-configured with the full BSE curriculum** — every course code, name, and credit unit already loaded. Hit the **"Load BSE Sample"** button to see the Forecast and Insights features in action immediately with realistic demo data. Delete the sample whenever you're ready to enter your real grades.

---

## Privacy and Data

| Property | Detail |
|---|---|
| Data storage | Browser local storage — stays on your device |
| Server communication | None — zero data leaves your machine |
| Account required | No |
| Personal data collected | None |
| Export format | JSON — portable and yours forever |

> **Private browsing mode prevents saving.** Use normal browser mode to retain your data between sessions.

---

## Troubleshooting

**The application won't open** — Open it by double-clicking `index.html` in your file browser, or drag the file directly into your web browser.

**Grades aren't saving** — Check that your browser hasn't disabled local storage (Privacy/Security settings). Private browsing mode will prevent saving.

**Chart isn't showing** — The application requires internet access for a visualization library. Check your connection and ensure no browser extensions are blocking external resources.

**Data looks corrupted after import** — Only import JSON files exported directly from this app. Manually edited files may not parse correctly.

---

## What's Next

This version is complete and ready to use. Future possibilities include:

- Multiple student profiles on one device
- Printable reports for advisor meetings
- Extended trend charts across all semesters
- Cross-device data sync

The core mission will not change: **clear, honest, actionable insight into your academic performance.**

---

## License

Made for academic and personal use. Students, classmates, and peers are encouraged to use, modify, and build on it freely. Share it with others in your program. Make it your own.

---

<p align="center"><strong>Built with intention for students who take their academics seriously.</strong><br>Every feature exists because students asked for it. Every number is calculated to be trustworthy.</p>
