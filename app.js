let state;
let chart;

(() => {
    // === CONFIG ===
    const GRADE_POINTS = {
        A: 5.0,
        "B+": 4.5,
        B: 4.0,
        "C+": 3.5,
        C: 3.0,
        "D+": 2.5,
        D: 2.0,
        F: 0.0
    };
    const GPA_SCALE = 5.0;
    const STORAGE_KEY = "cgpa_app_state_v1";
    const modalState = {
        active: null
    };

    // === STATE ===
    state = {
        semesters: [],
        forecast: [],
        settings: {
            activeTab: "grades",
            scenario: "realistic",
            targetCGPA: "",
            targetUnitsPerSemester: "",
            insightTargetCGPA: "",
            insightFutureUnits: ""
        }
    };

    function loadState() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) {
                return;
            }
            const parsed = JSON.parse(raw);
            if (!isValidStateShape(parsed)) {
                showToast("Saved data was invalid and has been ignored.", "error");
                return;
            }
            state.semesters = parsed.semesters;
            state.forecast = parsed.forecast;
            state.settings = {
                ...state.settings,
                ...(parsed.settings || {})
            };
        } catch (_error) {
            showToast("Unable to read saved data.", "error");
        }
    }

    function saveState() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }

    // === CALCULATIONS ===
    function gradeToPoints(grade) {
        return Object.prototype.hasOwnProperty.call(GRADE_POINTS, grade) ? GRADE_POINTS[grade] : 0;
    }

    function semesterGPA(semester) {
        if (!semester || !Array.isArray(semester.courses) || semester.courses.length === 0) {
            return 0;
        }
        let points = 0;
        let units = 0;
        semester.courses.forEach((course) => {
            if (!isValidCourse(course)) {
                return;
            }
            const courseUnits = Number(course.units);
            points += gradeToPoints(course.grade) * courseUnits;
            units += courseUnits;
        });
        return units > 0 ? points / units : 0;
    }

    function overallCGPA(semesters) {
        let points = 0;
        let units = 0;

        semesters.forEach((semester) => {
            semester.courses.forEach((course) => {
                if (!isValidCourse(course)) {
                    return;
                }
                const courseUnits = Number(course.units);
                points += gradeToPoints(course.grade) * courseUnits;
                units += courseUnits;
            });
        });

        return units > 0 ? points / units : 0;
    }

    function projectedCGPA(semesters, forecastCourses) {
        const allSemesters = semesters.map((semester) => ({
            ...semester,
            courses: [...semester.courses]
        }));

        allSemesters.push({
            id: "forecast",
            name: "Forecast",
            courses: forecastCourses
        });

        return overallCGPA(allSemesters);
    }

    function cgpaNeeded(currentCGPA, currentUnits, targetCGPA, futureUnits) {
        if (futureUnits <= 0) {
            return Infinity;
        }
        const currentPoints = currentCGPA * currentUnits;
        const requiredTotalPoints = targetCGPA * (currentUnits + futureUnits);
        return (requiredTotalPoints - currentPoints) / futureUnits;
    }

    function semestersToTarget(currentCGPA, currentUnits, targetCGPA, gradePoint) {
        const unitsPerSemester = Number(state.settings.targetUnitsPerSemester);
        if (!Number.isInteger(unitsPerSemester) || unitsPerSemester <= 0) {
            return Infinity;
        }
        if (targetCGPA <= currentCGPA) {
            return 0;
        }
        if (targetCGPA >= GPA_SCALE || gradePoint <= targetCGPA) {
            return Infinity;
        }

        const currentPoints = currentCGPA * currentUnits;
        const numerator = targetCGPA * currentUnits - currentPoints;
        const denominator = unitsPerSemester * (gradePoint - targetCGPA);
        if (denominator <= 0) {
            return Infinity;
        }

        return Math.ceil(numerator / denominator);
    }

    function bestCourse(semesters) {
        const allCourses = flattenCourses(semesters);
        if (allCourses.length === 0) {
            return null;
        }
        return allCourses
            .slice()
            .sort((a, b) => {
                const diff = gradeToPoints(b.grade) - gradeToPoints(a.grade);
                if (diff !== 0) {
                    return diff;
                }
                return Number(b.units) - Number(a.units);
            })[0];
    }

    function worstCourse(semesters) {
        const allCourses = flattenCourses(semesters);
        if (allCourses.length === 0) {
            return null;
        }
        return allCourses
            .slice()
            .sort((a, b) => {
                const diff = gradeToPoints(a.grade) - gradeToPoints(b.grade);
                if (diff !== 0) {
                    return diff;
                }
                return Number(b.units) - Number(a.units);
            })[0];
    }

    function draggingCourses(semesters) {
        return flattenCourses(semesters)
            .filter((course) => gradeToPoints(course.grade) < gradeToPoints("C"))
            .sort((a, b) => Number(b.units) - Number(a.units));
    }

    // === RENDER ===
    function renderAll() {
        renderCGPA();
        renderSemesters();
        renderForecast();
        renderInsights();
        renderChart();
    }

    function renderCGPA() {
        const cgpa = overallCGPA(state.semesters);
        const totalUnits = totalUnitsFromSemesters(state.semesters);

        const cgpaValue = document.getElementById("cgpa-value");
        const cgpaMeta = document.getElementById("cgpa-meta");
        if (!cgpaValue || !cgpaMeta) {
            return;
        }

        cgpaValue.textContent = formatGPA(cgpa);
        cgpaValue.classList.remove("gpa--great", "gpa--good", "gpa--fair", "gpa--poor");
        cgpaValue.classList.add(gpaColorClass(cgpa));

        cgpaMeta.textContent = `${totalUnits} units completed`;
    }

    function renderSemesters() {
        const container = document.getElementById("semesters-container");
        if (!container) {
            return;
        }

        if (state.semesters.length === 0) {
            container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state__icon">+</div>
          <p>No semesters yet. Add your first semester!</p>
        </div>
      `;
            return;
        }

        container.innerHTML = state.semesters
            .map((semester) => {
                const semGPA = semesterGPA(semester);
                const coursesHtml = semester.courses.length ?
                    semester.courses.map((course) => courseRowTemplate(semester.id, course, false)).join("") :
                    `
            <div class="empty-state">
              <div class="empty-state__icon">+</div>
              <p>No courses yet. Add your first course.</p>
            </div>
          `;

                return `
          <article class="semester-card" data-sem-id="${semester.id}">
            <header class="semester-card__header">
              <h3 class="semester-card__title">${escapeHtml(semester.name)}</h3>
              <div>
                <span class="gpa-badge ${gpaColorClass(semGPA)}">GPA ${formatGPA(semGPA)}</span>
                <button class="btn btn--icon-danger" data-action="delete-semester" data-sem-id="${semester.id}" aria-label="Delete ${escapeHtml(semester.name)}">Delete</button>
              </div>
            </header>
            <div class="course-list">
              ${coursesHtml}
            </div>
            <div class="section-head section-head--tight">
              <span></span>
              <button class="btn btn--accent btn--small" data-action="add-course" data-sem-id="${semester.id}" aria-label="Add course to ${escapeHtml(semester.name)}">Add Course</button>
            </div>
          </article>
        `;
            })
            .join("");
    }

    function renderForecast() {
        const current = overallCGPA(state.semesters);
        const forecastCurrent = document.getElementById("forecast-current-cgpa");
        const forecastProjected = document.getElementById("forecast-projected-cgpa");
        const forecastDelta = document.getElementById("forecast-delta");
        const forecastContainer = document.getElementById("forecast-container");
        const scenarioButtons = document.querySelectorAll(".scenario-btn");

        if (!forecastCurrent || !forecastProjected || !forecastDelta || !forecastContainer) {
            return;
        }

        const scenario = state.settings.scenario || "realistic";
        const forecastCourses = scenarioAdjustedForecast(state.forecast, scenario);
        const projected = projectedCGPA(state.semesters, forecastCourses);
        const delta = projected - current;

        forecastCurrent.textContent = formatGPA(current);
        forecastProjected.textContent = formatGPA(projected);
        forecastProjected.className = `metric-value font-number ${gpaColorClass(projected)}`;

        const deltaText = `${delta >= 0 ? "+" : ""}${formatGPA(delta)}`;
        forecastDelta.textContent = deltaText;
        forecastDelta.className = "metric-delta";
        if (delta > 0) {
            forecastDelta.classList.add("metric-delta--positive");
        } else if (delta < 0) {
            forecastDelta.classList.add("metric-delta--negative");
        } else {
            forecastDelta.classList.add("metric-delta--neutral");
        }

        scenarioButtons.forEach((btn) => {
            const isActive = btn.dataset.scenario === scenario;
            btn.classList.toggle("scenario-btn--active", isActive);
        });

        if (state.forecast.length === 0) {
            forecastContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state__icon">+</div>
          <p>No forecast courses yet. Add future courses to project your CGPA.</p>
        </div>
      `;
        } else {
            forecastContainer.innerHTML = state.forecast
                .map((course) => courseRowTemplate("forecast", course, true))
                .join("");
        }

        const targetInput = document.getElementById("target-cgpa-input");
        const unitsInput = document.getElementById("target-units-per-semester");
        const targetResult = document.getElementById("target-semesters-result");

        if (targetInput && unitsInput && targetResult) {
            targetInput.value = state.settings.targetCGPA;
            unitsInput.value = state.settings.targetUnitsPerSemester;

            const target = Number(state.settings.targetCGPA);
            const unitsPerSemester = Number(state.settings.targetUnitsPerSemester);
            const totalUnits = totalUnitsFromSemesters(state.semesters);

            if (!Number.isFinite(target) || !Number.isFinite(unitsPerSemester) || target <= 0 || unitsPerSemester <= 0) {
                targetResult.textContent = "Enter a target and units per semester to estimate required A-grade semesters.";
            } else if (target > GPA_SCALE) {
                targetResult.textContent = "Target CGPA must be 5.00 or below.";
            } else if (totalUnits === 0) {
                targetResult.textContent = "Add current courses first so we can estimate semesters to target.";
            } else {
                const neededSemesters = semestersToTarget(current, totalUnits, target, GPA_SCALE);
                if (!Number.isFinite(neededSemesters)) {
                    targetResult.textContent = "That target is mathematically unreachable with consecutive A semesters at the selected unit load.";
                } else if (neededSemesters <= 0) {
                    targetResult.textContent = "You are already at or above that target CGPA.";
                } else {
                    targetResult.textContent = `${neededSemesters} consecutive A semester(s) at ${unitsPerSemester} units are needed to reach ${formatGPA(target)}.`;
                }
            }
        }
    }

    function renderInsights() {
        const statsContainer = document.getElementById("insights-stats");
        const draggingList = document.getElementById("dragging-list");
        const minGradeResult = document.getElementById("minimum-grade-result");
        const insightTargetInput = document.getElementById("insight-target-cgpa");
        const insightFutureUnitsInput = document.getElementById("insight-future-units");

        if (!statsContainer || !draggingList || !minGradeResult || !insightTargetInput || !insightFutureUnitsInput) {
            return;
        }

        const semestersWithGPA = state.semesters
            .filter((semester) => semester.courses.length > 0)
            .map((semester) => ({
                semester,
                gpa: semesterGPA(semester)
            }));

        const highestSemester = semestersWithGPA.length ?
            semestersWithGPA.slice().sort((a, b) => b.gpa - a.gpa)[0] :
            null;
        const lowestSemester = semestersWithGPA.length ?
            semestersWithGPA.slice().sort((a, b) => a.gpa - b.gpa)[0] :
            null;

        const best = bestCourse(state.semesters);
        const worst = worstCourse(state.semesters);

        statsContainer.innerHTML = [
            statTemplate(
                "Highest GPA Semester",
                highestSemester ? `${escapeHtml(highestSemester.semester.name)} (${formatGPA(highestSemester.gpa)})` : "N/A"
            ),
            statTemplate(
                "Lowest GPA Semester",
                lowestSemester ? `${escapeHtml(lowestSemester.semester.name)} (${formatGPA(lowestSemester.gpa)})` : "N/A"
            ),
            statTemplate("Total Units Done", `${totalUnitsFromSemesters(state.semesters)}`),
            statTemplate(
                "Best Course",
                best ? `${escapeHtml(best.name)} (${best.grade}, ${best.units}u)` : "N/A"
            ),
            statTemplate(
                "Worst Course",
                worst ? `${escapeHtml(worst.name)} (${worst.grade}, ${worst.units}u)` : "N/A"
            )
        ].join("");

        const dragging = draggingCourses(state.semesters);
        if (dragging.length === 0) {
            draggingList.innerHTML = `
        <li class="empty-state">
          <div class="empty-state__icon">+</div>
          <p>No courses below grade C. Nice work.</p>
        </li>
      `;
        } else {
            draggingList.innerHTML = dragging
                .map((course) => `
          <li class="dragging-item">
            <span>${escapeHtml(course.name)} (${escapeHtml(course.semesterName)})</span>
            <span class="dragging-item__badge">${course.grade} | ${course.units}u</span>
          </li>
        `)
                .join("");
        }

        insightTargetInput.value = state.settings.insightTargetCGPA;
        insightFutureUnitsInput.value = state.settings.insightFutureUnits;

        const target = Number(state.settings.insightTargetCGPA);
        const futureUnits = Number(state.settings.insightFutureUnits);
        const currentCGPA = overallCGPA(state.semesters);
        const currentUnits = totalUnitsFromSemesters(state.semesters);

        if (!Number.isFinite(target) || !Number.isFinite(futureUnits) || target <= 0 || futureUnits <= 0) {
            minGradeResult.textContent = "Enter target CGPA and future units to see the minimum required average grade point.";
            return;
        }

        const required = cgpaNeeded(currentCGPA, currentUnits, target, futureUnits);
        if (!Number.isFinite(required) || required > GPA_SCALE) {
            minGradeResult.textContent = "Target is impossible with the provided future units.";
            return;
        }

        if (required <= 0) {
            minGradeResult.textContent = "You are already above this target CGPA based on your current record.";
            return;
        }

        const mappedGrade = minimumLetterForPoints(required);
        minGradeResult.textContent = `Minimum required average: ${formatGPA(required)} grade points per unit (${mappedGrade}).`;
    }

    function renderChart() {
        updateChart();
    }

    // === EVENTS ===
    function bindTabEvents() {
        const buttons = Array.from(document.querySelectorAll(".tab-btn"));
        const nav = document.getElementById("tabs-nav");

        buttons.forEach((button, index) => {
            button.addEventListener("click", () => {
                state.settings.activeTab = button.dataset.tab;
                saveState();

                buttons.forEach((item) => {
                    item.classList.toggle("tab-btn--active", item === button);
                });

                document.querySelectorAll(".tab-panel").forEach((panel) => {
                    panel.classList.toggle("tab-panel--active", panel.id === `tab-${button.dataset.tab}`);
                });

                if (nav) {
                    nav.classList.remove("tabs-nav--index-0", "tabs-nav--index-1", "tabs-nav--index-2");
                    nav.classList.add(`tabs-nav--index-${index}`);
                }
            });
        });
    }

    function bindSemesterEvents() {
        const addSemesterButton = document.getElementById("add-semester-btn");
        const semesterContainer = document.getElementById("semesters-container");

        if (addSemesterButton) {
            addSemesterButton.addEventListener("click", async() => {
                const name = await promptTextDialog(
                    "Add Semester",
                    "Semester name",
                    `Semester ${state.semesters.length + 1}`
                );
                if (name === null) {
                    return;
                }
                if (!name.trim()) {
                    showToast("Semester name cannot be blank.", "error");
                    return;
                }

                state.semesters.push({
                    id: createId("sem"),
                    name: name.trim(),
                    courses: []
                });
                saveState();
                renderAll();
                showToast("Semester added.", "success");
            });
        }

        if (!semesterContainer) {
            return;
        }

        semesterContainer.addEventListener("click", async(event) => {
            const target = event.target;
            if (!(target instanceof HTMLElement)) {
                return;
            }

            const action = target.dataset.action;
            if (action === "delete-semester") {
                const semId = target.dataset.semId;
                if (!semId) {
                    return;
                }
                if (!(await confirmDialog("Delete this semester and all its courses?", "Delete Semester"))) {
                    return;
                }
                state.semesters = state.semesters.filter((semester) => semester.id !== semId);
                saveState();
                renderAll();
                showToast("Semester deleted.", "info");
            }

            if (action === "add-course") {
                const semId = target.dataset.semId;
                if (!semId) {
                    return;
                }
                const courseName = await promptTextDialog("Add Course", "Course name", "New Course");
                if (courseName === null) {
                    return;
                }
                if (!courseName.trim()) {
                    showToast("Course name cannot be blank.", "error");
                    return;
                }
                const courseUnits = await promptForUnits(3);
                if (courseUnits === null) {
                    return;
                }
                const semester = findSemesterById(semId);
                if (!semester) {
                    return;
                }
                semester.courses.push({
                    id: createId("c"),
                    name: courseName.trim(),
                    units: courseUnits,
                    grade: "B"
                });
                saveState();
                renderAll();
                showToast("Course added.", "success");
            }

            if (action === "delete-course") {
                const semId = target.dataset.semId;
                const courseId = target.dataset.courseId;
                if (!semId || !courseId) {
                    return;
                }
                const semester = findSemesterById(semId);
                if (!semester) {
                    return;
                }
                semester.courses = semester.courses.filter((course) => course.id !== courseId);
                saveState();
                renderAll();
                showToast("Course removed.", "info");
            }
        });

        semesterContainer.addEventListener("change", (event) => {
            const target = event.target;
            if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement)) {
                return;
            }
            const semId = target.dataset.semId;
            const courseId = target.dataset.courseId;
            const field = target.dataset.field;
            if (!semId || !courseId || !field) {
                return;
            }

            const semester = findSemesterById(semId);
            if (!semester) {
                return;
            }

            const course = semester.courses.find((item) => item.id === courseId);
            if (!course) {
                return;
            }

            const oldValue = course[field];
            if (field === "name") {
                const value = target.value.trim();
                if (!value) {
                    showToast("Course name cannot be blank.", "error");
                    target.value = oldValue;
                    return;
                }
                course.name = value;
            }

            if (field === "units") {
                const units = Number(target.value);
                if (!Number.isInteger(units) || units < 1 || units > 6) {
                    showToast("Units must be an integer from 1 to 6.", "error");
                    target.value = String(oldValue);
                    return;
                }
                course.units = units;
            }

            if (field === "grade") {
                if (!Object.prototype.hasOwnProperty.call(GRADE_POINTS, target.value)) {
                    showToast("Please select a valid grade.", "error");
                    target.value = oldValue;
                    return;
                }
                course.grade = target.value;
            }

            saveState();
            renderAll();
        });
    }

    function bindForecastEvents() {
        const addForecastButton = document.getElementById("add-forecast-course-btn");
        const forecastContainer = document.getElementById("forecast-container");
        const scenarioToggle = document.getElementById("scenario-toggle");
        const targetInput = document.getElementById("target-cgpa-input");
        const unitsInput = document.getElementById("target-units-per-semester");

        if (addForecastButton) {
            addForecastButton.addEventListener("click", async() => {
                const name = await promptTextDialog("Add Future Course", "Future course name", "Future Course");
                if (name === null) {
                    return;
                }
                if (!name.trim()) {
                    showToast("Course name cannot be blank.", "error");
                    return;
                }
                const courseUnits = await promptForUnits(3);
                if (courseUnits === null) {
                    return;
                }

                state.forecast.push({
                    id: createId("f"),
                    name: name.trim(),
                    units: courseUnits,
                    grade: "B+"
                });
                saveState();
                renderAll();
                showToast("Forecast course added.", "success");
            });
        }

        if (scenarioToggle) {
            scenarioToggle.addEventListener("click", (event) => {
                const target = event.target;
                if (!(target instanceof HTMLElement)) {
                    return;
                }
                if (!target.classList.contains("scenario-btn")) {
                    return;
                }
                state.settings.scenario = target.dataset.scenario || "realistic";
                saveState();
                renderAll();
            });
        }

        if (forecastContainer) {
            forecastContainer.addEventListener("click", (event) => {
                const target = event.target;
                if (!(target instanceof HTMLElement)) {
                    return;
                }
                if (target.dataset.action !== "delete-forecast-course") {
                    return;
                }

                const courseId = target.dataset.courseId;
                if (!courseId) {
                    return;
                }
                state.forecast = state.forecast.filter((course) => course.id !== courseId);
                saveState();
                renderAll();
                showToast("Forecast course removed.", "info");
            });

            forecastContainer.addEventListener("change", (event) => {
                const target = event.target;
                if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement)) {
                    return;
                }

                const courseId = target.dataset.courseId;
                const field = target.dataset.field;
                if (!courseId || !field) {
                    return;
                }

                const course = state.forecast.find((item) => item.id === courseId);
                if (!course) {
                    return;
                }

                const oldValue = course[field];
                if (field === "name") {
                    const value = target.value.trim();
                    if (!value) {
                        showToast("Course name cannot be blank.", "error");
                        target.value = oldValue;
                        return;
                    }
                    course.name = value;
                }

                if (field === "units") {
                    const units = Number(target.value);
                    if (!Number.isInteger(units) || units < 1 || units > 6) {
                        showToast("Units must be an integer from 1 to 6.", "error");
                        target.value = String(oldValue);
                        return;
                    }
                    course.units = units;
                }

                if (field === "grade") {
                    if (!Object.prototype.hasOwnProperty.call(GRADE_POINTS, target.value)) {
                        showToast("Please select a valid grade.", "error");
                        target.value = oldValue;
                        return;
                    }
                    course.grade = target.value;
                }

                saveState();
                renderAll();
            });
        }

        if (targetInput) {
            targetInput.addEventListener("input", () => {
                state.settings.targetCGPA = targetInput.value;
                saveState();
                renderForecast();
            });
        }

        if (unitsInput) {
            unitsInput.addEventListener("input", () => {
                state.settings.targetUnitsPerSemester = unitsInput.value;
                saveState();
                renderForecast();
            });
        }
    }

    function bindInsightEvents() {
        const insightTarget = document.getElementById("insight-target-cgpa");
        const insightUnits = document.getElementById("insight-future-units");

        if (insightTarget) {
            insightTarget.addEventListener("input", () => {
                state.settings.insightTargetCGPA = insightTarget.value;
                saveState();
                renderInsights();
            });
        }

        if (insightUnits) {
            insightUnits.addEventListener("input", () => {
                state.settings.insightFutureUnits = insightUnits.value;
                saveState();
                renderInsights();
            });
        }
    }

    function bindUtilEvents() {
        const resetButton = document.getElementById("reset-btn");
        const exportButton = document.getElementById("export-btn");
        const importInput = document.getElementById("import-input");
        const importBseButton = document.getElementById("import-bse-btn");

        if (resetButton) {
            resetButton.addEventListener("click", async() => {
                if (!(await confirmDialog("This will erase all semesters and forecasts. Continue?", "Reset All Data"))) {
                    return;
                }
                localStorage.removeItem(STORAGE_KEY);
                window.location.reload();
            });
        }

        if (exportButton) {
            exportButton.addEventListener("click", () => {
                downloadJSON(state, "cgpa-data.json");
                showToast("Data exported.", "success");
            });
        }

        if (importInput) {
            importInput.addEventListener("change", async() => {
                const file = importInput.files && importInput.files[0];
                if (!file) {
                    return;
                }

                try {
                    const text = await file.text();
                    const parsed = JSON.parse(text);
                    if (!isValidStateShape(parsed)) {
                        showToast("Invalid JSON structure.", "error");
                        importInput.value = "";
                        return;
                    }

                    applyImportedState(parsed);
                    showToast("Data imported successfully.", "success");
                } catch (_error) {
                    showToast("Failed to import JSON.", "error");
                }

                importInput.value = "";
            });
        }

        if (importBseButton) {
            importBseButton.addEventListener("click", async() => {
                if (state.semesters.length > 0 || state.forecast.length > 0) {
                    const proceed = await confirmDialog(
                        "Loading the BSE sample will replace your current data. Continue?",
                        "Load BSE Sample"
                    );
                    if (!proceed) {
                        return;
                    }
                }

                try {
                    const response = await fetch("./import_this_file.json", { cache: "no-store" });
                    if (!response.ok) {
                        throw new Error("sample-fetch-failed");
                    }
                    const parsed = await response.json();
                    if (!isValidStateShape(parsed)) {
                        showToast("BSE sample JSON format is invalid.", "error");
                        return;
                    }

                    applyImportedState(parsed);
                    showToast("BSE sample data loaded.", "success");
                } catch (_error) {
                    showToast("Failed to load BSE sample JSON.", "error");
                }
            });
        }
    }

    // === CHART ===
    function initChart() {
        const canvas = document.getElementById("gpa-chart");
        if (!canvas || typeof Chart === "undefined") {
            return;
        }

        chart = new Chart(canvas, {
            type: "bar",
            data: {
                labels: [],
                datasets: [{
                    label: "Semester GPA",
                    data: [],
                    backgroundColor: [],
                    borderRadius: 8,
                    borderSkipped: false,
                    maxBarThickness: 28
                }]
            },
            options: {
                indexAxis: "y",
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        min: 0,
                        max: GPA_SCALE,
                        grid: {
                            color: "rgba(100, 116, 139, 0.2)"
                        },
                        ticks: {
                            color: "#334155"
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: "#334155"
                        }
                    }
                }
            }
        });
    }

    function updateChart() {
        if (!chart) {
            return;
        }

        const labels = state.semesters.map((semester) => semester.name);
        const data = state.semesters.map((semester) => semesterGPA(semester));
        const colors = data.map((gpa) => {
            const gpaClass = gpaColorClass(gpa);
            if (gpaClass === "gpa--great") {
                return "#22c55e";
            }
            if (gpaClass === "gpa--good") {
                return "#3b82f6";
            }
            if (gpaClass === "gpa--fair") {
                return "#f59e0b";
            }
            return "#ef4444";
        });

        chart.data.labels = labels;
        chart.data.datasets[0].data = data;
        chart.data.datasets[0].backgroundColor = colors;
        chart.update();
    }

    // === UTILS ===
    function showToast(message, type) {
        const container = document.getElementById("toast-container");
        if (!container) {
            return;
        }

        const toast = document.createElement("div");
        toast.className = `toast toast--${type}`;
        toast.textContent = message;
        container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add("toast--fade");
            setTimeout(() => {
                toast.remove();
            }, 230);
        }, 3000);
    }

    function formatGPA(number) {
        return Number(number || 0).toFixed(2);
    }

    function gpaColorClass(gpa) {
        if (gpa >= 4.5) {
            return "gpa--great";
        }
        if (gpa >= 3.5) {
            return "gpa--good";
        }
        if (gpa >= 2.5) {
            return "gpa--fair";
        }
        return "gpa--poor";
    }

    function downloadJSON(data, filename) {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
    }

    function applyImportedState(parsed) {
        state.semesters = parsed.semesters;
        state.forecast = parsed.forecast;
        state.settings = {
            ...state.settings,
            ...(parsed.settings || {})
        };
        saveState();
        renderAll();
    }

    function confirmDialog(message, title = "Confirm Action") {
        return showModalDialog({
            title,
            message,
            confirmText: "Confirm",
            cancelText: "Cancel",
            inputType: null
        });
    }

    function promptTextDialog(title, label, defaultValue = "") {
        return showModalDialog({
            title,
            message: label,
            confirmText: "Save",
            cancelText: "Cancel",
            inputType: "text",
            inputValue: defaultValue,
            inputPlaceholder: label
        });
    }

    async function promptForUnits(defaultValue) {
        const raw = await showModalDialog({
            title: "Course Units",
            message: "Credit units (1-6)",
            confirmText: "Save",
            cancelText: "Cancel",
            inputType: "number",
            inputValue: String(defaultValue),
            inputPlaceholder: "3",
            inputMin: "1",
            inputMax: "6",
            inputStep: "1"
        });
        if (raw === null) {
            return null;
        }
        const units = Number(raw);
        if (!Number.isInteger(units) || units < 1 || units > 6) {
            showToast("Units must be an integer from 1 to 6.", "error");
            return null;
        }
        return units;
    }

    function showModalDialog(options) {
        if (modalState.active && modalState.active.parentElement) {
            modalState.active.remove();
            modalState.active = null;
        }

        const config = {
            title: options.title || "Dialog",
            message: options.message || "",
            confirmText: options.confirmText || "OK",
            cancelText: options.cancelText || "Cancel",
            inputType: options.inputType || null,
            inputValue: options.inputValue || "",
            inputPlaceholder: options.inputPlaceholder || "",
            inputMin: options.inputMin,
            inputMax: options.inputMax,
            inputStep: options.inputStep
        };

        return new Promise((resolve) => {
            const activeElement = document.activeElement;
            const overlay = document.createElement("div");
            overlay.className = "modal-overlay";

            const dialog = document.createElement("div");
            dialog.className = "modal";
            dialog.setAttribute("role", "dialog");
            dialog.setAttribute("aria-modal", "true");

            const title = document.createElement("h3");
            title.className = "modal__title";
            title.textContent = config.title;

            const message = document.createElement("p");
            message.className = "modal__message";
            message.textContent = config.message;

            const actions = document.createElement("div");
            actions.className = "modal__actions";

            const cancelButton = document.createElement("button");
            cancelButton.type = "button";
            cancelButton.className = "btn btn--ghost modal__btn";
            cancelButton.textContent = config.cancelText;

            const confirmButton = document.createElement("button");
            confirmButton.type = "button";
            confirmButton.className = "btn btn--accent modal__btn";
            confirmButton.textContent = config.confirmText;

            let input = null;
            if (config.inputType) {
                input = document.createElement("input");
                input.className = "modal__input";
                input.type = config.inputType;
                input.value = config.inputValue;
                input.placeholder = config.inputPlaceholder;
                if (config.inputMin !== undefined) {
                    input.min = config.inputMin;
                }
                if (config.inputMax !== undefined) {
                    input.max = config.inputMax;
                }
                if (config.inputStep !== undefined) {
                    input.step = config.inputStep;
                }
                dialog.appendChild(input);
            }

            actions.append(cancelButton, confirmButton);
            dialog.append(title, message, actions);
            if (input) {
                dialog.insertBefore(input, actions);
            }
            overlay.appendChild(dialog);
            document.body.appendChild(overlay);
            modalState.active = overlay;
            document.body.classList.add("modal-open");

            const finish = (result) => {
                document.removeEventListener("keydown", onKeyDown);
                overlay.remove();
                modalState.active = null;
                document.body.classList.remove("modal-open");
                if (activeElement instanceof HTMLElement) {
                    activeElement.focus();
                }
                resolve(result);
            };

            const onKeyDown = (event) => {
                if (event.key === "Escape") {
                    finish(null);
                }
                if (event.key === "Enter") {
                    if (input) {
                        finish(input.value);
                    } else {
                        finish(true);
                    }
                }
            };

            document.addEventListener("keydown", onKeyDown);

            overlay.addEventListener("click", (event) => {
                if (event.target === overlay) {
                    finish(null);
                }
            });

            cancelButton.addEventListener("click", () => finish(null));
            confirmButton.addEventListener("click", () => {
                if (input) {
                    finish(input.value);
                    return;
                }
                finish(true);
            });

            if (input) {
                input.focus();
                input.select();
            } else {
                confirmButton.focus();
            }
        });
    }

    function createId(type) {
        return `${type}_${Date.now()}`;
    }

    function getGradeOptions(selectedGrade) {
        return Object.keys(GRADE_POINTS)
            .map((grade) => `<option value="${grade}" ${grade === selectedGrade ? "selected" : ""}>${grade}</option>`)
            .join("");
    }

    function courseRowTemplate(semId, course, isForecast) {
        const action = isForecast ? "delete-forecast-course" : "delete-course";
        return `
      <div class="course-row">
        <input
          type="text"
          value="${escapeHtml(course.name)}"
          data-sem-id="${semId}"
          data-course-id="${course.id}"
          data-field="name"
          aria-label="Course name"
          placeholder="Course name"
        >
        <input
          type="number"
          min="1"
          max="6"
          step="1"
          value="${course.units}"
          data-sem-id="${semId}"
          data-course-id="${course.id}"
          data-field="units"
          aria-label="Course units"
          placeholder="Units"
        >
        <select
          data-sem-id="${semId}"
          data-course-id="${course.id}"
          data-field="grade"
          aria-label="Course grade"
        >
          ${getGradeOptions(course.grade)}
        </select>
        <button
          class="btn btn--icon-danger"
          data-action="${action}"
          data-sem-id="${semId}"
          data-course-id="${course.id}"
          aria-label="Delete ${escapeHtml(course.name)}"
        >Delete</button>
      </div>
    `;
    }

    function statTemplate(title, value) {
        return `
      <article class="stat-card">
        <p class="stat-card__title">${title}</p>
        <p class="stat-card__value">${value}</p>
      </article>
    `;
    }

    function flattenCourses(semesters) {
        const all = [];
        semesters.forEach((semester) => {
            semester.courses.forEach((course) => {
                if (!isValidCourse(course)) {
                    return;
                }
                all.push({
                    ...course,
                    semesterName: semester.name
                });
            });
        });
        return all;
    }

    function totalUnitsFromSemesters(semesters) {
        return flattenCourses(semesters).reduce((acc, course) => acc + Number(course.units), 0);
    }

    function findSemesterById(semId) {
        return state.semesters.find((semester) => semester.id === semId);
    }

    function scenarioAdjustedForecast(forecastCourses, scenario) {
        if (scenario === "best") {
            return forecastCourses.map((course) => ({...course, grade: "A" }));
        }
        if (scenario === "worst") {
            return forecastCourses.map((course) => ({...course, grade: "F" }));
        }
        return forecastCourses;
    }

    function minimumLetterForPoints(points) {
        const entries = Object.entries(GRADE_POINTS).sort((a, b) => b[1] - a[1]);
        const found = entries.find((entry) => points <= entry[1]);
        return found ? found[0] : "impossible";
    }

    function isValidCourse(course) {
        if (!course || typeof course !== "object") {
            return false;
        }
        if (typeof course.name !== "string" || !course.name.trim()) {
            return false;
        }
        if (!Number.isInteger(Number(course.units)) || Number(course.units) < 1 || Number(course.units) > 6) {
            return false;
        }
        if (!Object.prototype.hasOwnProperty.call(GRADE_POINTS, course.grade)) {
            return false;
        }
        return true;
    }

    function isValidSemester(semester) {
        if (!semester || typeof semester !== "object") {
            return false;
        }
        if (typeof semester.id !== "string" || typeof semester.name !== "string") {
            return false;
        }
        if (!Array.isArray(semester.courses)) {
            return false;
        }
        return semester.courses.every(isValidCourse);
    }

    function isValidStateShape(candidate) {
        if (!candidate || typeof candidate !== "object") {
            return false;
        }
        if (!Array.isArray(candidate.semesters) || !Array.isArray(candidate.forecast)) {
            return false;
        }
        if (!candidate.semesters.every(isValidSemester)) {
            return false;
        }
        if (!candidate.forecast.every(isValidCourse)) {
            return false;
        }
        if (candidate.settings && typeof candidate.settings !== "object") {
            return false;
        }
        return true;
    }

    function escapeHtml(value) {
        const div = document.createElement("div");
        div.textContent = String(value == null ? "" : value);
        return div.innerHTML;
    }

    function applySavedTabState() {
        const activeTab = state.settings.activeTab || "grades";
        const tabButton = document.querySelector(`.tab-btn[data-tab="${activeTab}"]`);
        if (tabButton instanceof HTMLElement) {
            tabButton.click();
        }
    }

    // === INIT ===
    function initApp() {
        loadState();
        initChart();
        bindTabEvents();
        bindSemesterEvents();
        bindForecastEvents();
        bindInsightEvents();
        bindUtilEvents();
        renderAll();
        applySavedTabState();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initApp);
    } else {
        initApp();
    }
})();