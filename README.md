# CGPA Calculator & Forecaster

A professional, no-build, vanilla JavaScript web app for university students to track CGPA, forecast future performance, and get actionable academic insights.

I built this project as a practical dashboard-style tool for semester planning. It runs directly in the browser, stores data locally, and can be deployed easily on GitHub Pages.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Key Features](#key-features)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Grade Scale and Formulas](#grade-scale-and-formulas)
6. [How to Run Locally](#how-to-run-locally)
7. [Deploy to GitHub Pages](#deploy-to-github-pages)
8. [How to Use the App](#how-to-use-the-app)
9. [Data Persistence and Backup](#data-persistence-and-backup)
10. [Import/Export JSON Format](#importexport-json-format)
11. [Validation Rules](#validation-rules)
12. [Accessibility and UX Notes](#accessibility-and-ux-notes)
13. [Troubleshooting](#troubleshooting)
14. [Future Improvements](#future-improvements)
15. [License](#license)

## Project Overview

This application is designed to help students answer three common questions:

- What is my current CGPA right now?
- If I take these future courses, what will my projected CGPA be?
- What minimum performance is required to hit a target CGPA?

The app uses a tabbed academic dashboard:

- **My Grades**: Enter completed semesters and courses.
- **Forecast**: Model future courses under best/realistic/worst scenarios.
- **Insights**: Visualize semester performance and identify weak points.

## Key Features

### 1. My Grades

- Large, color-coded CGPA display.
- Add unlimited semesters.
- Add/edit/delete courses inside each semester.
- Per-semester GPA badge.
- Automatic save on every valid change.

### 2. Forecast

- Live projected CGPA from current + future courses.
- Scenario toggle:
  - **Best Case**: all forecast grades treated as `A`
  - **Realistic**: uses entered forecast grades
  - **Worst Case**: all forecast grades treated as `F`
- Delta indicator (`+` or `-`) versus current CGPA.
- Target planner estimates required consecutive-`A` semesters based on selected units/semester.

### 3. Insights

- Horizontal bar chart (Chart.js) showing GPA per semester.
- Summary cards:
  - Highest GPA semester
  - Lowest GPA semester
  - Total units completed
  - Best course
  - Worst course
- “What’s dragging your CGPA” list for courses below grade `C`.
- Minimum grade calculator for reaching a target CGPA with available future units.

### 4. Utility Tools

- Reset all data (with confirmation modal).
- Export state as JSON.
- Import valid JSON state.
- Toast notifications for success/error/info events.

### 5. Modal-Based UX

Instead of browser alerts/prompts, the app uses custom in-app modal popups for:

- Add semester
- Add course
- Add future course
- Enter credit units
- Confirm destructive actions

## Tech Stack

- **HTML5** (semantic structure)
- **CSS3** (responsive card UI with BEM-style classes)
- **Vanilla JavaScript (ES6+)**
- **Chart.js 4.4.1** (CDN)
- **Google Fonts**:
  - DM Sans (UI text)
  - Space Mono (numeric displays)

No framework and no build tools are required.

## Project Structure

```text
my-cgpa/
├── index.html
├── style.css
├── app.js
├── import_this_file.json
└── README.md
```

### File Responsibilities

- `index.html`: semantic app layout and external asset links
- `style.css`: full visual system and responsive behavior
- `app.js`: app logic (state, calculations, rendering, events, chart, utilities)
- `import_this_file.json`: sample data file for import testing

## Grade Scale and Formulas

### 5.0 Grade Point Mapping

| Grade | Point |
|------|------:|
| A    | 5.0 |
| B+   | 4.5 |
| B    | 4.0 |
| C+   | 3.5 |
| C    | 3.0 |
| D+   | 2.5 |
| D    | 2.0 |
| F    | 0.0 |

### Core Formulas

Semester GPA:

```text
Semester GPA = Σ(points × units) / Σ(units)
```

Overall CGPA:

```text
CGPA = Σ(all points × all units) / Σ(all units)
```

Projected CGPA:

```text
Projected CGPA = CGPA over (completed courses + forecast courses)
```

Required average points for target CGPA:

```text
Needed GPA per future unit =
(targetCGPA × (currentUnits + futureUnits) - currentCGPA × currentUnits) / futureUnits
```

## How to Run Locally

Since this is a static app, you can run it in two simple ways.

### Option A: Open directly

1. Navigate to the project folder.
2. Double-click `index.html`.

### Option B: Use VS Code Live Server (recommended)

1. Open the folder in VS Code.
2. Run a local static server (for example Live Server extension).
3. Open the served URL in your browser.

## Deploy to GitHub Pages

1. Push this project to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main** (or your default branch)
   - Folder: **/ (root)**
4. Save and wait for deployment.
5. Open the generated GitHub Pages URL.

No extra configuration is needed because all dependencies are loaded from CDNs and local files.

## How to Use the App

### Tab 1: My Grades

1. Click **Add Semester**.
2. Enter semester name in the modal.
3. Inside the semester card, click **Add Course**.
4. Enter course name and units, then set grade.
5. CGPA and semester GPA update automatically.

### Tab 2: Forecast

1. Click **Add Future Course** and enter future courses.
2. Use scenario buttons to switch assumptions.
3. Watch **Projected CGPA** and delta update live.
4. Enter target CGPA + units/semester in planner to estimate required consecutive A semesters.

### Tab 3: Insights

1. Review semester GPA chart.
2. Check highest/lowest semester and best/worst course cards.
3. Inspect the “dragging” list (courses below C).
4. Use minimum-grade calculator for required future average.

## Data Persistence and Backup

### Local Persistence

The app saves data in browser `localStorage` using:

- Key: `cgpa_app_state_v1`

This means data remains available after refreshing or reopening the page on the same browser profile.

### Backup/Restore

- **Export JSON**: downloads your full app state
- **Import JSON**: restores data from a valid JSON file

## Import/Export JSON Format

Expected top-level structure:

```json
{
  "semesters": [
    {
      "id": "sem_1704067200000",
      "name": "Semester 1",
      "courses": [
        {
          "id": "c_1704067201000",
          "name": "Calculus",
          "units": 3,
          "grade": "A"
        }
      ]
    }
  ],
  "forecast": [
    {
      "id": "f_1704067202000",
      "name": "Physics",
      "units": 4,
      "grade": "B+"
    }
  ],
  "settings": {
    "activeTab": "grades",
    "scenario": "realistic",
    "targetCGPA": "4.50",
    "targetUnitsPerSemester": "18",
    "insightTargetCGPA": "4.20",
    "insightFutureUnits": "24"
  }
}
```

## Validation Rules

The app validates user input before saving:

- Course name: cannot be blank
- Semester name: cannot be blank
- Units: integer from `1` to `6`
- Grade: must be one of `A, B+, B, C+, C, D+, D, F`
- Import JSON: must match required state structure

Invalid inputs are rejected with user-friendly toast notifications.

## Accessibility and UX Notes

- Semantic HTML sections for clear structure.
- ARIA labels on key interactive elements.
- Keyboard support in modal actions:
  - `Enter` confirms
  - `Esc` cancels
- Responsive layout optimized for mobile and desktop.

## Troubleshooting

### Buttons not responding

- Open browser DevTools console and check for JavaScript errors.
- Confirm `app.js` is linked correctly in `index.html`.
- Hard refresh browser (`Ctrl + F5`) to clear stale script cache.

### Data not persisting

- Ensure browser storage is not blocked.
- Do not use private/incognito mode if persistence is required.
- Verify `localStorage` is enabled in your browser settings.

### Chart not visible

- Confirm internet access for Chart.js CDN.
- Check that the script tag for Chart.js loads before `app.js`.

## Future Improvements

- Add multi-profile support (different students in one browser).
- Add GPA trend line and cumulative chart.
- Add printable PDF report export.
- Add optional cloud sync/authentication.
- Add keyboard focus trapping inside modals for full accessibility.

## License

This project is currently for academic and personal use.

If you want to make it open-source, add a license file (for example MIT) and update this section accordingly.
