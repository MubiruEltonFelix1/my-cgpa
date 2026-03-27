# SE Grade Tracker: Academic Intelligence for Strategic Planning

## A Vision for Informed Decision-Making

Every semester brings the same question: *How am I really performing?* Not just academically, but strategically—where do I stand right now, and what does my future look like if I make different choices? This application exists to answer that question with clarity, precision, and actionable insight.

Built as a practical, browser-based dashboard for university students, this tool transforms raw grades into meaningful intelligence. It lets you track cumulative academic performance, simulate future scenarios, and identify exactly where to focus your effort. No complicated setup, no accounts to manage, no learning curve—just data that tells your story.

## The Student Journey

### Meet Sarah: The Strategic Planner

Sarah is a third-year software engineering student who has maintained a solid 3.8 CGPA. She's ambitious—she wants to apply for a master's program that requires a 4.2 minimum. With four semesters left, she's unsure: *Is this achievable? What courses should I prioritize?* 

She opens the Grade Tracker on her laptop, enters all her completed grades, and immediately sees her exact standing: 3.8. Then she shifts to the Forecast tab and begins modeling scenarios. She enters her planned courses, adjusts grades under different scenarios (best case, realistic, worst case), and watches her projected CGPA update live. Within minutes, she discovers that maintaining straight A's with a consistent course load would bring her to 4.15—close, but not quite there. By swapping one elective for a higher-unit core course, her realistic projection jumps to 4.22. 

Armed with this insight, Sarah makes an informed decision. She exports her analysis as JSON, shares it with her academic advisor, and moves forward with confidence.

### Meet Ahmed: The Struggling Student

Ahmed is a second-year student whose first year wasn't kind. He averaged a 2.3 CGPA, and he's discouraged. He knows he wasn't focused, and now he's determined to turn it around. But he needs a wake-up call first: *How bad is it really, and can I recover?*

He enters his grades into the tracker and sees the stark reality visualized in the Insights tab: a bar chart of his semester GPAs shows a telling story—his first year's downward trend. But then he sees something else: the app calculates the exact grade average he needs in remaining courses to hit a 3.0 (the minimum to maintain a valid GPA). It's 3.6 per course. That's a B+ average, which feels attainable compared to the terror of complete failure.

Ahmed's next semester, he uses the Forecast feature to plan realistically, entering the courses he'll take and setting a conservative grade estimate (B average). His projected CGPA climbs to 2.8. One more strong semester on top of that could push him to 3.1. The numbers give him hope. He screenshots his forecast, shows it to friends, and they study together toward that goal.

### Meet Zainab: The Data-Driven Analyst

Zainab is a final-year student working on her thesis while completing her last two courses. She's always been meticulous with her studies—a 4.4 CGPA—and she wants documentation of exactly which courses helped and which ones challenged her most.

She uses the Grade Tracker's export feature to generate a complete JSON record of her four years: every semester, every course, every grade. She imports this into her personal archive. Then, she uses the Insights dashboard to identify patterns: which years were hardest? Which course types consistently gave her the best grades? The visual dashboard becomes a narrative of her academic journey—something she'll reflect on fondly (and practically) in future interviews.

## How the Application Works

The Grade Tracker operates around three core questions that drive everything: *Where am I now? Where am I headed? And what choices move me forward?*

### Dashboard: Your Academic Snapshot

When you first open the application, you're met with a clean interface showing your current CGPA prominently. This is not buried in a spreadsheet—it's beautiful, it's immediate, and it's yours. The dashboard greets you with context-aware messages based on the time of day and your current academic standing, creating a personalised experience every time you visit.

### My Grades: Building Your Record

The My Grades section is where your academic history lives. You build this incrementally—add a semester, then add courses within that semester, assign credit units, and enter your grade. As you input each course, your semester GPA and overall CGPA recalculate instantly. This isn't a form to fill out later; it's a living document that updates with every change. All data persists automatically, so your information is always safe and always available when you come back.

### Forecast: Modeling Your Future

The true power of this tool emerges in the Forecast section. Here, you enter courses you plan to take and grades you expect to earn. The application then shows you three scenarios: a best-case (all A's), a realistic estimate (your entered grades), and a worst-case (all F's). This isn't pessimism—it's preparedness. You can see how different choices affect your trajectory. More importantly, you can test: *If I take this course elective instead, what happens to my GPA?* The live delta display shows exactly how many tenths your current and future performance might shift your CGPA.

For ambitious students, the application includes a target planner. Tell it your dream CGPA and how many units you expect per semester, and it calculates the exact number of consecutive A-grade semesters you need. It's honest, it's clear, and it empowers you to make real decisions about your academic path.

### Insights: Understanding Your Patterns

The Insights section tells your academic story in visual language. Your semester-by-semester GPA history appears as a bar chart, showing trends at a glance. Summary cards highlight your highest and lowest-performing semesters, your best and worst courses, and your total units completed. These aren't just statistics—they're insights that help you understand yourself as a student.

For students looking to improve, the "What's Dragging Your CGPA" section lists every course where you scored below a C. These are your growth areas—the specific courses and grades holding back your overall performance. Seeing them listed this way often creates the "aha moment" that motivates change. You're not just looking at numbers; you're looking at opportunity.

Finally, the minimum-grade calculator answers the pragmatic question students ask themselves: with the courses remaining in your degree program, what exact average grade must you maintain to reach your target CGPA? It's the answer you need when deciding whether to add or drop a course, when planning your next semester, or when considering your options.

## Built for Privacy and Simplicity

This application runs entirely in your browser. There's no signup, no account needed, no data sent to any server. Your information stays on your device, kept safe in your browser's local storage. The design is straightforward—every feature serves a purpose, and you'll never be confused about where to find what you need.

The entire application is responsive and works smoothly on your laptop, tablet, or phone. Whether you're planning at your desk or checking your GPA while walking across campus, everything adapts to your screen.

## Understanding the Mathematics

The application uses a standard 5.0 grade point system. Your current CGPA is calculated by taking every course you've completed, multiplying the grade points by the course's credit units (weight), summing all those values, and dividing by your total credit units. This gives you a precise, weighted average that reflects both your performance and the load of each course.

When you enter forecast courses, the application applies the same calculation to show you your projected future CGPA. The target planning feature works backwards: if you tell it your goal CGPA and how many units you'll take going forward, it calculates the exact grade point average you need per course to reach that goal. It's transparent math that helps you make real plans.

## Getting Started

Simply open the `index.html` file in your web browser. That's it. The application works immediately with no installation, no waiting, no setup required. Save the folder to your computer or share it with classmates—it works anywhere you have a web browser.

## Using the Application: Your Journey

**Your First Steps**: Add your current and past semesters. For each semester, add the courses you've completed with their credit units and grades. Watch your CGPA calculate in real-time.

**Planning Ahead**: Once your history is recorded, shift to Forecast. Enter the courses you plan to take and realistic grade estimates. See three scenarios—best, realistic, worst—and watch how they affect your projected CGPA. Adjust your course selections and grades to see the impact immediately.

**Finding Insights**: Browse the Insights tab to understand your academic patterns. Which semesters were your strongest? Which courses pulled down your average? The visual dashboard answers these questions and helps you understand your strengths and weaknesses as a learner.

**Sharing Your Analysis**: Export your complete data as JSON. Share it with your academic advisor, compare it with classmates' (with permission), or keep it as a personal record of your entire degree.

## Built-In Acceleration for Software Engineering Students

If you're in the Bachelor of Software Engineering program at Mbarara University, the application comes pre-configured with your entire curriculum. Every course code, name, and credit unit is already loaded. A single "Load BSE Sample" button populates realistic demo data so you can see the Forecast and Insights features in action immediately. Delete the sample data whenever you're ready to enter your real grades.

## Data, Security, and Control

Your academic data never leaves your device. When you export, you get a JSON file that's yours to keep forever. You can import that file on another computer, share it securely, or backup to your own storage. The application cannot access your location, contacts, or any other personal information. It's just you, your grades, and the insights you gain from them.

## Getting Help: Troubleshooting

**The application won't open**: Ensure you're opening it by double-clicking `index.html` in your file browser, or dragging the file into your web browser.

**Grades aren't saving**: Check that your browser hasn't disabled local storage (usually found in Privacy/Security settings). Private browsing mode prevents saving—use normal mode for this app.

**The chart isn't showing**: The application requires internet access for a visualization library. Ensure you're connected to the internet and check that no browser extensions are blocking external resources.

**Data looks corrupted after import**: This usually means the JSON file format was changed. Make sure you're importing a file you downloaded from this app, not manually edited.

## What's Next: Future Possibilities

This version is complete and ready to help you right now. Future versions might include the ability to track multiple profiles on the same computer, more detailed charts showing your academic trends over time, the ability to print professional reports to share with advisors, and options to sync your data across devices. But the core mission will always remain: clear, honest, actionable insight into your academic performance.

## License

This project is made for academic and personal use. Students, classmates, and peers are all encouraged to use, modify, and learn from it freely. Share it with others in your program. Build on it. Make it your own.

---

**Built with intention for students who take their academics seriously.** Every feature exists because students asked for it. Every interaction was designed to save you time. Every number is calculated to be trustworthy.
