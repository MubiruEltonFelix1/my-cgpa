let state;
let chart;

const SEMESTER_ORDER_STANDARD = ["Y1S1", "Y1S2", "Y2S1", "Y2S2", "Y3S1", "Y3S2", "Y4S1", "Y4S2"];

const PROGRAMS = {
    softwareEngineering: {
        key: "softwareEngineering",
        displayName: "Bachelor of Science in Software Engineering",
        shortName: "Software Engineering",
        semOrder: SEMESTER_ORDER_STANDARD,
        curriculum: {
            Y1S1: {
                label: "Year 1 · Semester 1",
                courses: [
                    { code: "SWE1103", name: "Linear Algebra", cu: 3 },
                    { code: "DVS1106", name: "Introduction to Political Economy", cu: 3 },
                    { code: "SWE1101", name: "Discrete Mathematics", cu: 3 },
                    { code: "SWE1102", name: "Structured Programming with C", cu: 4 },
                    { code: "SWE1104", name: "Software Development Principles", cu: 4 },
                    { code: "SWE1105", name: "Communication Skills", cu: 3 }
                ]
            },
            Y1S2: {
                label: "Year 1 · Semester 2",
                courses: [
                    { code: "DVS1203", name: "Political Economy of Africa and Development", cu: 3 },
                    { code: "SWE1201", name: "Object Oriented Programming I", cu: 4 },
                    { code: "SWE1202", name: "Multivariate Calculus", cu: 4 },
                    { code: "SWE1203", name: "Operating Systems", cu: 4 },
                    { code: "SWE1204", name: "Software Systems Engineering Practice", cu: 3 },
                    { code: "SWE1205", name: "Database Programming", cu: 4 },
                    { code: "SWE1206", name: "Computer Architecture and Organization", cu: 3 }
                ]
            },
            Y2S1: {
                label: "Year 2 · Semester 1",
                courses: [
                    { code: "DVS2105", name: "Political Economy of Uganda", cu: 3 },
                    { code: "SWE2101", name: "Object Oriented Programming II", cu: 4 },
                    { code: "SWE2102", name: "Requirements Engineering", cu: 3 },
                    { code: "SWE2103", name: "Probability and Statistics", cu: 4 },
                    { code: "SWE2104", name: "Data Structures and Algorithms", cu: 3 },
                    { code: "SWE2105", name: "Geographic Information Systems", cu: 4 },
                    { code: "SWE2106", name: "Internet Technology and Web Design", cu: 4 },
                    { code: "SWE2107", name: "Systems Analysis and Design", cu: 4 }
                ]
            },
            Y2S2: {
                label: "Year 2 · Semester 2",
                courses: [
                    { code: "DVS2201", name: "Citizenry, Professionalism, Globalization and Entrepreneurship", cu: 3 },
                    { code: "SWE2201", name: "Numerical Analysis", cu: 3 },
                    { code: "SWE2202", name: "Data Communication Technology", cu: 4 },
                    { code: "SWE2203", name: "Software Architecture and Design", cu: 3 },
                    { code: "SWE2204", name: "Software Metrics", cu: 3 },
                    { code: "SWE2205", name: "User Interface Design and Development", cu: 4 },
                    { code: "SWE2206", name: "Distributed Computing", cu: 4 }
                ]
            },
            Y3S1: {
                label: "Year 3 · Semester 1",
                courses: [
                    { code: "SWE3101", name: "Human Computer Interaction", cu: 4 },
                    { code: "SWE3102", name: "Software Reliability and Testing", cu: 4 },
                    { code: "SWE3103", name: "Software Project Management", cu: 4 },
                    { code: "SWE3104", name: "Modelling and Simulation", cu: 4 },
                    { code: "SWE3105", name: "Research Methods in Computing", cu: 4 },
                    { code: "SWE3106", name: "Mobile Networks and Computing", cu: 4 }
                ]
            },
            Y3S2: {
                label: "Year 3 · Semester 2",
                courses: [
                    { code: "SWE3201", name: "Embedded Systems Software", cu: 4 },
                    { code: "SWE3202", name: "Mobile Computing and Applications", cu: 4 },
                    { code: "SWE3203", name: "Third Year Research Project", cu: 4 },
                    { code: "SWE3204", name: "Data Mining", cu: 3 },
                    { code: "SWE3205", name: "Compiler Construction", cu: 4 },
                    { code: "SWE3206", name: "Systems Programming - Linux", cu: 4 }
                ]
            },
            Y4S1: {
                label: "Year 4 · Semester 1",
                courses: [
                    { code: "SWE4103", name: "Formal Methods", cu: 3 },
                    { code: "SWE4101", name: "Digital System Design", cu: 4 },
                    { code: "SWE4102", name: "Computer Graphics Engineering", cu: 4 },
                    { code: "SWE4104", name: "Software Design Patterns", cu: 4 },
                    { code: "SWE4105", name: "Artificial Intelligence", cu: 4 },
                    { code: "SWE4106", name: "Ethical and Professional Issues in Computing", cu: 4 }
                ]
            },
            Y4S2: {
                label: "Year 4 · Semester 2",
                courses: [
                    { code: "SWE4201", name: "Machine Learning", cu: 4 },
                    { code: "SWE4202", name: "Software Maintenance and Evolution", cu: 4 },
                    { code: "SWE4203", name: "Entrepreneurship", cu: 3 },
                    { code: "SWE4204", name: "Software Security", cu: 4 },
                    { code: "SWE4205", name: "Final Year Project", cu: 5 }
                ]
            }
        }
    },
    agriculture: {
        key: "agriculture",
        displayName: "Bachelor of Science in Agriculture and Livelihood",
        shortName: "Agriculture and Livelihood",
        semOrder: SEMESTER_ORDER_STANDARD,
        curriculum: {
            Y1S1: {
                label: "Year 1 · Semester 1",
                courses: [
                    { code: "DVS1106", name: "Fundamentals to Political Economy", cu: 3 },
                    { code: "BPCD1102", name: "Fundamentals of Interdisciplinary Studies", cu: 3 },
                    { code: "CSC1101", name: "Applied Computer Skills", cu: 3 },
                    { code: "BSAL1101", name: "Livelihoods Approaches for Agricultural Transformation", cu: 4 },
                    { code: "BSAL1102", name: "Agricultural Botany and Plant Physiology", cu: 4 },
                    { code: "BSAL1104", name: "Crop Production Systems", cu: 3 },
                    { code: "BSAL1105", name: "Livestock Production Systems", cu: 3 },
                    { code: "BSAL1106", name: "Fundamentals of Animal Anatomy and Physiology", cu: 3 },
                    { code: "BPCD1107", name: "Communication and Facilitation Skills", cu: 3 }
                ]
            },
            Y1S2: {
                label: "Year 1 · Semester 2",
                courses: [
                    { code: "DVS1203", name: "Political Economy of Africa and Development", cu: 3 },
                    { code: "BPCD1209", name: "Methodology, Conceptualization and Theoretical Analysis", cu: 3 },
                    { code: "BSAL1212", name: "Fundamentals of Food Science and Technology", cu: 3 },
                    { code: "BSAL1206", name: "Principles of Soil Science", cu: 4 },
                    { code: "BSAL1207", name: "Annual and Perennial Crop Agronomy", cu: 4 },
                    { code: "BSAL1208", name: "Apiculture and Aquaculture", cu: 3 },
                    { code: "BSAL1209", name: "Poultry and Pig Production", cu: 3 },
                    { code: "BSAL1210", name: "Agroforestry", cu: 4 },
                    { code: "BSAL1211", name: "Dairy and Beef Production", cu: 3 }
                ]
            },
            Y2S1: {
                label: "Year 2 · Semester 1",
                courses: [
                    { code: "DVS2105", name: "Political Economy of Uganda", cu: 3 },
                    { code: "BSAL2101", name: "Farm Planning, Systems and Structures", cu: 3 },
                    { code: "BSAL2102", name: "Pasture Production and Rangeland Management", cu: 4 },
                    { code: "BSAL2103", name: "Animal Health and Disease", cu: 3 },
                    { code: "BSAL2104", name: "Entomology and Nematology", cu: 3 },
                    { code: "BSAL2105", name: "Agricultural Production Economics", cu: 3 },
                    { code: "RMC2101", name: "Qualitative Research", cu: 3 },
                    { code: "BSAL2106", name: "Animal Nutrition and Feed Technology", cu: 4 }
                ]
            },
            Y2S2: {
                label: "Year 2 · Semester 2",
                courses: [
                    { code: "DVS2201", name: "Citizenry, Professionalism, Globalization and Entrepreneurship", cu: 3 },
                    { code: "BSAL2208", name: "Food Systems and Security", cu: 3 },
                    { code: "BSAL2209", name: "Agriculture Extension and Rural Development", cu: 4 },
                    { code: "BSAL2210", name: "Soil Conservation Technologies", cu: 3 },
                    { code: "BSAL2214", name: "Agro Meteorology", cu: 4 },
                    { code: "BSAL2212", name: "Plant Nutrition and Soil Fertility Management", cu: 3 },
                    { code: "BPCD2212", name: "Remote Sensing and Geographical Information Systems", cu: 3 },
                    { code: "BSAL2213", name: "Plant Pathology", cu: 4 },
                    { code: "BSAL2215", name: "Microbiology", cu: 3 }
                ]
            },
            Y3S1: {
                label: "Year 3 · Semester 1",
                courses: [
                    { code: "BSAL3103", name: "Small Ruminants", cu: 3 },
                    { code: "BSAL3104", name: "Agricultural Project Planning and Management", cu: 3 },
                    { code: "BSAL3106", name: "Farm Mechanisation", cu: 4 },
                    { code: "BSAL3110", name: "Food Processing and Preservation", cu: 4 },
                    { code: "BSAL3109", name: "Statistics for Agricultural Research", cu: 3 },
                    { code: "BSAL3108", name: "Land Tenure, Use and Planning", cu: 3 },
                    { code: "STP3101", name: "Students' Community Twinning Project", cu: 3 }
                ]
            },
            Y3S2: {
                label: "Year 3 · Semester 2",
                courses: [
                    { code: "BSAL3105", name: "Farmer Institutional Structures and Development", cu: 3 },
                    { code: "BSAL3210", name: "Appraisal of Agricultural Development Projects", cu: 4 },
                    { code: "BSAL3211", name: "Irrigation and Farm Water Use Technologies", cu: 3 },
                    { code: "BSAL3212", name: "Post-Harvest Handling and Value Addition", cu: 3 },
                    { code: "BSAL3213", name: "Seed Technology", cu: 4 },
                    { code: "BSAL3214", name: "Climate Change and Farm Production", cu: 4 },
                    { code: "BSAL3215", name: "Agricultural Experimental Design", cu: 3 },
                    { code: "STP3202", name: "Students' Community Twinning Project", cu: 3 },
                    { code: "IPR3301", name: "Interdisciplinary Practicum (Internship)", cu: 5 }
                ]
            },
            Y4S1: {
                label: "Year 4 · Semester 1",
                courses: [
                    { code: "BSAL4118", name: "Entrepreneurship, Farm Enterprise Development and Innovation Systems", cu: 3 },
                    { code: "BSAL4115", name: "Agricultural Marketing and Cooperatives", cu: 4 },
                    { code: "BSAL4113", name: "Animal Breeding", cu: 4 },
                    { code: "BSAL4114", name: "Agricultural Vulnerability and Resilience", cu: 4 },
                    { code: "BSAL4116", name: "Plant Breeding and Biotechnology", cu: 4 },
                    { code: "BSAL4117", name: "Milk and Meat Technology", cu: 3 },
                    { code: "BSAL4119", name: "Animal Parasitology", cu: 3 }
                ]
            },
            Y4S2: {
                label: "Year 4 · Semester 2",
                courses: [
                    { code: "BSAL4207", name: "Commodity Value Chain Analysis", cu: 4 },
                    { code: "BSAL4208", name: "Gender and Agriculture Development", cu: 4 },
                    { code: "BSAL4209", name: "Poverty Analysis Tools and Techniques", cu: 4 },
                    { code: "BSAL4210", name: "Farm Business, Accounting and Finance", cu: 4 },
                    { code: "BSAL4213", name: "Agricultural Policy, Ethics and Law", cu: 4 },
                    { code: "BSAL4212", name: "Research Project (Final Dissertation)", cu: 5 }
                ]
            }
        }
    },
    electricalEngineering: {
        key: "electricalEngineering",
        displayName: "Bachelor of Science in Electrical Engineering",
        shortName: "Electrical Engineering",
        semOrder: SEMESTER_ORDER_STANDARD,
        curriculum: {
            Y1S1: {
                label: "Year 1 · Semester 1",
                courses: [
                    { code: "BCE1104", name: "Information and Communications Technology", cu: 3 },
                    { code: "COM1101", name: "Communication Skills", cu: 3 },
                    { code: "DVS1106", name: "Introduction to Political Economy", cu: 3 },
                    { code: "EEE1101", name: "Electricity and Magnetism", cu: 3 },
                    { code: "EEE1105", name: "Physical Electronics", cu: 3 },
                    { code: "EEE1106", name: "Engineering Mathematics I", cu: 4 },
                    { code: "EEE1111", name: "Engineering Materials", cu: 3 }
                ]
            },
            Y1S2: {
                label: "Year 1 · Semester 2",
                courses: [
                    { code: "DVS1203", name: "Political Economy of Africa and Development", cu: 3 },
                    { code: "EEE1203", name: "Engineering Drawing", cu: 3 },
                    { code: "EEE1206", name: "Engineering Mathematics II", cu: 4 },
                    { code: "EEE1207", name: "Circuit Theory", cu: 3 },
                    { code: "EEE1209", name: "Digital Electronics", cu: 3 },
                    { code: "EEE1213", name: "Sensor Technology", cu: 3 },
                    { code: "EEE1215", name: "Fundamentals of Computer Programming", cu: 3 }
                ]
            },
            Y2S1: {
                label: "Year 2 · Semester 1",
                courses: [
                    { code: "BCE2102", name: "Digital Systems", cu: 3 },
                    { code: "BCE2113", name: "Object Oriented Programming-Java", cu: 4 },
                    { code: "DVS2105", name: "Political Economy of Uganda", cu: 3 },
                    { code: "EEE2103", name: "Engineering Mathematics III", cu: 4 },
                    { code: "EEE2104", name: "Electrical Machine Design", cu: 3 },
                    { code: "EEE2106", name: "Engineering Ethics", cu: 3 },
                    { code: "EEE2114", name: "Simulation and Testing Engineering", cu: 3 }
                ]
            },
            Y2S2: {
                label: "Year 2 · Semester 2",
                courses: [
                    { code: "BCE2215", name: "Engineering Mathematics IV", cu: 4 },
                    { code: "DVS2201", name: "Citizenry, Professionalism, Globalization and Entrepreneurship", cu: 3 },
                    { code: "EEE2211", name: "Power Systems Analysis", cu: 3 },
                    { code: "EEE2212", name: "Electric Machine Modeling", cu: 3 },
                    { code: "EEE2213", name: "Basic PLC Programming", cu: 4 },
                    { code: "EEE2214", name: "Electromagnetic Fields", cu: 3 },
                    { code: "EEE2216", name: "Research Methods", cu: 3 }
                ]
            },
            Y3S1: {
                label: "Year 3 · Semester 1",
                courses: [
                    { code: "EEE3112", name: "Analog Electronics", cu: 4 },
                    { code: "EEE3115", name: "Renewable Energy Engineering", cu: 3 },
                    { code: "BCE3110", name: "Communication Systems Engineering", cu: 3 },
                    { code: "BCE3123", name: "Internet of Things (IoT)", cu: 3 },
                    { code: "EEE3111", name: "Semiconductor Devices and Applications", cu: 3 },
                    { code: "BCE3121", name: "VLSI Systems and Design", cu: 3 },
                    { code: "BME3101", name: "Microprocessors", cu: 3 }
                ]
            },
            Y3S2: {
                label: "Year 3 · Semester 2",
                courses: [
                    { code: "BCE3215", name: "Digital Signal Processing", cu: 4 },
                    { code: "EEE3211", name: "Radio Propagation and Antennas", cu: 4 },
                    { code: "BCE3216", name: "Instrumentation and Measurements", cu: 4 },
                    { code: "BCE3214", name: "Embedded Systems Programming and Design", cu: 4 },
                    { code: "EEE3206", name: "Mini Engineering Project", cu: 3 },
                    { code: "EEE3202", name: "Electronic Circuits", cu: 3 },
                    { code: "EEE3208", name: "Power Electronics", cu: 3 }
                ]
            },
            Y4S1: {
                label: "Year 4 · Semester 1",
                courses: [
                    { code: "BCE4112", name: "Control Systems Engineering", cu: 4 },
                    { code: "EEE4102", name: "Maintenance Engineering", cu: 3 },
                    { code: "EEE4105", name: "Electrical Installation Design", cu: 3 },
                    { code: "EEE4113", name: "Power Generation, Operation and Control", cu: 3 },
                    { code: "BCE4107", name: "Optical Communication Systems", cu: 3 },
                    { code: "EEE4104", name: "TV and Video Engineering", cu: 3 }
                ]
            },
            Y4S2: {
                label: "Year 4 · Semester 2",
                courses: [
                    { code: "BCE420", name: "Professional Law and Ethics for Engineers", cu: 3 },
                    { code: "BCE4223", name: "Entrepreneurship and Business Management", cu: 3 },
                    { code: "EEE4201", name: "Power Systems Protection and Coordination", cu: 3 },
                    { code: "EEE4207", name: "Final Year Project", cu: 5 },
                    { code: "BCE4222", name: "Robotics Engineering", cu: 3 },
                    { code: "EEE4206", name: "Radio Frequency Engineering", cu: 3 }
                ]
            }
        }
    }
};

const DEFAULT_PROGRAM = "softwareEngineering";

let CURRICULUM = PROGRAMS[DEFAULT_PROGRAM].curriculum;
let SEM_ORDER = PROGRAMS[DEFAULT_PROGRAM].semOrder;

(() => {
        // ╔══════════════════════════════════════════╗
        // ║  CONFIG                                  ║
        // ╚══════════════════════════════════════════╝
        const GRADE_MAP = {
            A: 5.0,
            "B+": 4.5,
            B: 4.0,
            "C+": 3.5,
            C: 3.0,
            "D+": 2.5,
            D: 2.0,
            F: 0.0
        };

        const GRADE_LIST = ["", "A", "B+", "B", "C+", "C", "D+", "D", "F"];

        const DEGREE_THRESHOLDS = {
            first: 4.4,
            upper: 3.6,
            lower: 2.8,
            pass: 2.0
        };

        const STORAGE_KEYS = {
            state: "bsse_state_v1",
            userId: "bsse_user_id",
            pinHash: "bsse_pin_hash",
            recoveryHash: "bsse_recovery_hash"
        };

        const RESOURCE_DB = {
          name: "grade_tracker_resources",
          version: 1,
          store: "files"
        };

        const TIMETABLE_DATES = {
            Y1S1: "2026-01-12",
            Y1S2: "2026-01-12",
            Y2S1: "2026-01-12",
            Y2S2: "2026-01-12",
            Y3S1: "2026-01-12",
            Y3S2: "2026-01-12",
            Y4S1: "2026-01-12",
            Y4S2: "2026-01-12"
        };

        const TIMETABLE_IMAGES = {
            softwareEngineering: {
                Y1S1: "timetables/y1s1.jpg",
                Y1S2: "timetables/timetable_year1_sem2.png",
                Y2S1: "timetables/y2s1.jpg",
                Y2S2: "timetables/timetable_year2_sem2.png",
                Y3S1: "timetables/y3s1.jpg",
                Y3S2: "timetables/timetable_year3_sem2.png",
                Y4S1: "timetables/y4s1.jpg",
                Y4S2: "timetables/timetable_year4_sem2.png"
            },
            agriculture: {},
            electricalEngineering: {}
        };

        const ADJECTIVES = [
            "swift", "bold", "bright", "calm", "sharp", "proud", "keen", "steady", "brave", "vivid",
            "noble", "rapid", "stellar", "clear", "grand", "fierce", "fresh", "wise", "spry", "silent",
            "quick", "sincere", "clean", "mighty", "eager", "wild", "prime", "lucid", "firm", "sane",
            "crisp", "gentle", "lucky", "epic", "sunny", "cool", "glossy", "royal", "plucky", "smart",
            "spruce", "golden", "silver", "onyx", "cosmic", "crystal", "steady", "solid", "atomic", "neat"
        ];

        const ANIMALS = [
            "eagle", "lion", "hawk", "tiger", "fox", "wolf", "crane", "falcon", "otter", "leopard",
            "rhino", "panther", "shark", "orca", "viper", "puma", "cobra", "raven", "ibis", "heron",
            "lynx", "yak", "buffalo", "ram", "kite", "koala", "lemur", "marten", "badger", "wren",
            "owl", "gecko", "whale", "dolphin", "hyena", "jaguar", "moose", "stoat", "beaver", "condor",
            "gazelle", "cougar", "bison", "sparrow", "finch", "albatross", "python", "kangaroo", "zebra", "antelope"
        ];

        const WORDLIST = [
            "apple", "anchor", "angle", "artist", "autumn", "amber", "avenue", "atom", "arrow", "animal",
            "beacon", "beach", "better", "bamboo", "breeze", "bottle", "button", "binary", "blossom", "bridge",
            "cactus", "camera", "canvas", "captain", "candle", "carbon", "cereal", "circle", "coffee", "comet",
            "danger", "daring", "dazzle", "desert", "device", "doctor", "dragon", "drawer", "dream", "drift",
            "eagle", "earth", "echo", "editor", "effort", "ember", "energy", "engine", "evening", "expert",
            "fabric", "falcon", "fancy", "farmer", "feather", "fellow", "fiber", "filter", "flame", "flower",
            "garden", "galaxy", "gentle", "giant", "glory", "golden", "govern", "grace", "guitar", "growth",
            "hammer", "harbor", "harmony", "hazel", "helmet", "hollow", "honor", "hunter", "hybrid", "horizon",
            "iceberg", "icon", "idea", "impact", "import", "indigo", "insight", "island", "ivory", "item",
            "jacket", "jaguar", "jelly", "jewel", "jigsaw", "journal", "jungle", "junior", "justice", "jovial",
            "kernel", "keeper", "kettle", "keypad", "kindle", "kingdom", "kitten", "kiwi", "knight", "known",
            "ladder", "lantern", "laser", "leader", "leaf", "legend", "lemon", "level", "lively", "logic",
            "magnet", "maker", "maple", "market", "matrix", "meadow", "memory", "mentor", "merit", "method",
            "native", "nebula", "needle", "network", "noble", "notion", "number", "nylon", "nation", "novel",
            "oasis", "object", "ocean", "office", "olive", "open", "orbit", "origin", "output", "oxygen",
            "paddle", "palace", "panda", "parcel", "pastel", "pepper", "photon", "piano", "planet", "pocket",
            "quantum", "quiet", "quiver", "quote", "quartz", "quick", "quest", "queen", "quirk", "quality",
            "radar", "random", "raven", "reason", "record", "rescue", "rhythm", "river", "rocket", "royal",
            "sailor", "salmon", "sample", "school", "season", "sensor", "shadow", "signal", "silver", "solar",
            "table", "talent", "target", "temple", "theory", "thunder", "ticket", "timber", "token", "travel"
        ];

        const RUNTIME = {
            page: "dashboard",
            timetableSem: "Y1S1",
            failedPinAttempts: 0,
            pinBuffer: "",
            forecastTarget: "",
            forecastLeftCUOverride: "",
            forecastSemToAdd: "",
            insightTarget: "",
          insightLeftCUOverride: "",
          resourcesQuery: "",
          resourcesSemFilter: "all",
          resourcesTypeFilter: "all",
          resourcesYearFilter: "all"
        };

        function resolveProgramKey(programKey) {
            return PROGRAMS[programKey] ? programKey : DEFAULT_PROGRAM;
        }

        function getActiveProgram() {
            return PROGRAMS[resolveProgramKey(state && state.program)];
        }

        function syncProgramContext(programKey) {
            const resolved = resolveProgramKey(programKey);
            CURRICULUM = PROGRAMS[resolved].curriculum;
            SEM_ORDER = PROGRAMS[resolved].semOrder;
            if (state) {
                state.program = resolved;
            }
            applyProgramBranding();
        }

        // ╔══════════════════════════════════════════╗
        // ║  STATE                                   ║
        // ╚══════════════════════════════════════════╝
        function buildEmptyGrades(programKey = DEFAULT_PROGRAM) {
            const resolved = resolveProgramKey(programKey);
            const program = PROGRAMS[resolved];
            const grades = {};
            program.semOrder.forEach((semKey) => {
                grades[semKey] = {};
                program.curriculum[semKey].courses.forEach((course) => {
                    grades[semKey][course.code] = "";
                });
            });
            return grades;
        }

        function defaultState(programKey = DEFAULT_PROGRAM) {
            const resolved = resolveProgramKey(programKey);
            const userId = getOrCreateUserId();
            return {
                program: resolved,
                name: "",
                currentSem: PROGRAMS[resolved].semOrder[0],
                pin: null,
                userId,
                recoveryHash: null,
                recoveryPhrase: "",
                grades: buildEmptyGrades(resolved),
                forecast: [],
                resources: []
            };
        }

        function loadState() {
            try {
                const raw = localStorage.getItem(STORAGE_KEYS.state);
                if (!raw) {
                    state = defaultState();
                    syncProgramContext(state.program);
                    return;
                }
                const parsed = JSON.parse(raw);
                const programKey = resolveProgramKey(parsed.program);
                const safe = defaultState(programKey);
                syncProgramContext(programKey);

                state = {
                    ...safe,
                    ...parsed,
                    program: programKey,
                    grades: {
                        ...safe.grades,
                        ...(parsed.grades || {})
                    },
                    forecast: Array.isArray(parsed.forecast) ? parsed.forecast : []
                };

                  state.resources = Array.isArray(parsed.resources)
                    ? parsed.resources.filter((item) => item && item.id && item.fileName)
                    : [];

                state.currentSem = SEM_ORDER.includes(state.currentSem) ? state.currentSem : SEM_ORDER[0];
                RUNTIME.timetableSem = state.currentSem;

                // Normalize grades to allowed values only.
                SEM_ORDER.forEach((semKey) => {
                    CURRICULUM[semKey].courses.forEach((course) => {
                        const value = state.grades[semKey][course.code];
                        state.grades[semKey][course.code] = GRADE_LIST.includes(value) ? value : "";
                    });
                });

                state.forecast = state.forecast
                    .filter((row) => {
                        if (!row || !SEM_ORDER.includes(row.semKey)) {
                            return false;
                        }
                        if (!GRADE_MAP.hasOwnProperty(row.grade)) {
                            return false;
                        }
                        return CURRICULUM[row.semKey].courses.some((course) => course.code === row.courseCode);
                    })
                    .map((row) => ({
                        id: row.id || `forecast_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
                        semKey: row.semKey,
                        courseCode: row.courseCode,
                        grade: row.grade
                    }));

                if (!state.userId) {
                    state.userId = getOrCreateUserId();
                }

                if (state.pin) {
                    safeStorageSet(STORAGE_KEYS.pinHash, state.pin);
                }
                if (state.recoveryHash) {
                    safeStorageSet(STORAGE_KEYS.recoveryHash, state.recoveryHash);
                }
            } catch (_err) {
                state = defaultState();
                showToast("Could not load saved data. Started fresh.", "error");
            }
        }

        function saveState() {
            try {
                safeStorageSet(STORAGE_KEYS.state, JSON.stringify(state));
                if (state.userId) {
                    safeStorageSet(STORAGE_KEYS.userId, state.userId);
                }
                if (state.pin) {
                    safeStorageSet(STORAGE_KEYS.pinHash, state.pin);
                }
                if (state.recoveryHash) {
                    safeStorageSet(STORAGE_KEYS.recoveryHash, state.recoveryHash);
                }
            } catch (_err) {
                showToast("Could not save your changes.", "error");
            }
        }

        // ╔══════════════════════════════════════════╗
        // ║  CALCULATIONS                            ║
        // ╚══════════════════════════════════════════╝
        function semesterGPA(semKey, gradeMap = state.grades) {
            const semester = CURRICULUM[semKey];
            let points = 0;
            let units = 0;

            semester.courses.forEach((course) => {
                const semGrades = gradeMap[semKey];
                const grade = semGrades && semGrades[course.code] ? semGrades[course.code] : "";
                if (!GRADE_MAP.hasOwnProperty(grade)) {
                    return;
                }
                points += GRADE_MAP[grade] * course.cu;
                units += course.cu;
            });

            return units === 0 ? 0 : points / units;
        }

        function overallCGPA(gradeMap = state.grades) {
            let points = 0;
            let units = 0;

            SEM_ORDER.forEach((semKey) => {
                CURRICULUM[semKey].courses.forEach((course) => {
                    const semGrades = gradeMap[semKey];
                    const grade = semGrades && semGrades[course.code] ? semGrades[course.code] : "";
                    if (!GRADE_MAP.hasOwnProperty(grade)) {
                        return;
                    }
                    points += GRADE_MAP[grade] * course.cu;
                    units += course.cu;
                });
            });

            return units === 0 ? 0 : points / units;
        }

        function projectedCGPA() {
            const projectedMap = deepClone(state.grades);
            state.forecast.forEach((row) => {
                if (!projectedMap[row.semKey]) {
                    projectedMap[row.semKey] = {};
                }
                if (GRADE_MAP.hasOwnProperty(row.grade)) {
                    projectedMap[row.semKey][row.courseCode] = row.grade;
                }
            });
            return overallCGPA(projectedMap);
        }

        function degreeClass(cgpa) {
            if (cgpa >= DEGREE_THRESHOLDS.first) {
                return "First Class";
            }
            if (cgpa >= DEGREE_THRESHOLDS.upper) {
                return "Upper Second";
            }
            if (cgpa >= DEGREE_THRESHOLDS.lower) {
                return "Lower Second";
            }
            return "Pass";
        }

        function cgpaNeeded(targetCGPA, leftCU) {
            const current = overallCGPA();
            const currentUnits = completedCU();
            if (!Number.isFinite(targetCGPA) || !Number.isFinite(leftCU) || leftCU <= 0) {
                return null;
            }
            const currentPoints = current * currentUnits;
            const targetPoints = targetCGPA * (currentUnits + leftCU);
            return (targetPoints - currentPoints) / leftCU;
        }

        function semestersToTarget(targetCGPA) {
            const current = overallCGPA();
            const currentUnits = completedCU();
            if (targetCGPA <= current) {
                return 0;
            }
            let cumulativeFuture = 0;
            const idx = SEM_ORDER.indexOf(state.currentSem);
            for (let i = idx + 1; i < SEM_ORDER.length; i += 1) {
                cumulativeFuture += semesterUnits(SEM_ORDER[i]);
                const needed = cgpaNeeded(targetCGPA, cumulativeFuture);
                if (needed !== null && needed <= 5.0) {
                    return i - idx;
                }
            }
            return Infinity;
        }

        function totalProgramCU() {
            return SEM_ORDER.reduce((sum, semKey) => sum + semesterUnits(semKey), 0);
        }

        function autoRemainingCU() {
            return Math.max(0, totalProgramCU() - completedCU());
        }

        function effectiveRemainingCU(overrideValue) {
            const parsed = Number(overrideValue);
            if (Number.isFinite(parsed) && parsed > 0) {
                return parsed;
            }
            return autoRemainingCU();
        }

        function semesterDisplayKey(semKey) {
            if (!semKey || !CURRICULUM[semKey]) {
                return "N/A";
            }
            return semKey;
        }

        function draggingCourses() {
            const rows = [];
            SEM_ORDER.forEach((semKey) => {
                CURRICULUM[semKey].courses.forEach((course) => {
                    const semGrades = state.grades[semKey];
                    const grade = semGrades && semGrades[course.code] ? semGrades[course.code] : "";
                    if (!GRADE_MAP.hasOwnProperty(grade)) {
                        return;
                    }
                    if (GRADE_MAP[grade] < 3.0) {
                        const impact = (4.0 - GRADE_MAP[grade]) * course.cu;
                        rows.push({
                            semKey,
                            course,
                            grade,
                            impact
                        });
                    }
                });
            });
            return rows.sort((a, b) => b.course.cu - a.course.cu || b.impact - a.impact);
        }

        function bestCourse() {
            let best = null;
            SEM_ORDER.forEach((semKey) => {
                CURRICULUM[semKey].courses.forEach((course) => {
                    const semGrades = state.grades[semKey];
                    const grade = semGrades && semGrades[course.code] ? semGrades[course.code] : "";
                    if (!GRADE_MAP.hasOwnProperty(grade)) {
                        return;
                    }
                    const score = GRADE_MAP[grade] * course.cu;
                    if (!best || score > best.score) {
                        best = { semKey, course, grade, score };
                    }
                });
            });
            return best;
        }

        function worstCourse() {
            let worst = null;
            SEM_ORDER.forEach((semKey) => {
                CURRICULUM[semKey].courses.forEach((course) => {
                    const semGrades = state.grades[semKey];
                    const grade = semGrades && semGrades[course.code] ? semGrades[course.code] : "";
                    if (!GRADE_MAP.hasOwnProperty(grade)) {
                        return;
                    }
                    const score = GRADE_MAP[grade] * course.cu;
                    if (!worst || score < worst.score) {
                        worst = { semKey, course, grade, score };
                    }
                });
            });
            return worst;
        }

        // ╔══════════════════════════════════════════╗
        // ║  RENDER                                  ║
        // ╚══════════════════════════════════════════╝
        function renderAll() {
            renderTopBar();
            renderDashboard();
            renderSemesterTable();
            renderForecast();
          renderResources();
            renderInsights();
            renderTimetable();
            syncActiveNav();
        }

        function renderTopBar() {
            const greeting = document.getElementById("greeting-text");
            const cgpaEl = document.getElementById("topbar-cgpa");
            const classEl = document.getElementById("topbar-class");
            const userIdEl = document.getElementById("sidebar-user-id");
            if (!greeting || !cgpaEl || !classEl || !userIdEl) {
                return;
            }

            applyProgramBranding();

            const h = new Date().getHours();
            let prefix = "Good morning";
            if (h >= 12 && h <= 17) {
                prefix = "Good afternoon";
            }
            if (h > 17) {
                prefix = "Good evening";
            }

            const name = state.name || "Student";
            greeting.textContent = `${prefix}, ${name} 👋`;

            const cgpa = overallCGPA();
            const currentClass = degreeClass(cgpa);
            countUpAnimation(cgpaEl, cgpa);
            cgpaEl.style.color = degreeClassColor(currentClass);

            classEl.textContent = currentClass;
            classEl.className = `badge ${classBadgeClass(currentClass)}`;
            userIdEl.textContent = `ID: ${state.userId}`;
        }

        function renderDashboard() {
            if (RUNTIME.page !== "dashboard") {
                return;
            }
            const page = document.getElementById("page-content");
            if (!page) {
                return;
            }

            const cgpa = overallCGPA();
            const dClass = degreeClass(cgpa);
            const best = highestSemester();
            const completed = completedCU();
            const semLeft = SEM_ORDER.length - (SEM_ORDER.indexOf(state.currentSem) + 1);
            const bannerText = dashboardBannerMessage(dClass, cgpa);

            const quickRows = CURRICULUM[state.currentSem].courses.map((course) => {
                const value = state.grades[state.currentSem][course.code] || "";
                return `
        <tr class="${value ? "completed" : "empty"}">
          <td><span class="code-pill">${course.code}</span></td>
          <td>${course.name}</td>
          <td>${course.cu}</td>
          <td>
            <select class="grade-select ${gradeSelectClass(value)}" data-action="grade-change" data-sem="${state.currentSem}" data-course="${course.code}">
              ${gradeOptions(value)}
            </select>
          </td>
        </tr>
      `;
            }).join("");

            const allA = scenarioForSemester(state.currentSem, "A");
            const allB = scenarioForSemester(state.currentSem, "B");

            page.innerHTML = `
      <div class="stack">
        <section class="degree-banner ${degreeBannerClass(dClass)}">
          <h3>${dClass} · CGPA ${formatGPA(cgpa)}</h3>
          <p>${bannerText}</p>
          <small>${completed} CU completed · ${semLeft} semester(s) remaining</small>
        </section>

        <section class="grid-4">
          ${metricCard("Current CGPA", formatGPA(cgpa))}
          ${metricCard("Highest Sem GPA", formatGPA(best.gpa))}
          ${metricCard("CU Completed", String(completed), false)}
          ${metricCard("Semesters Left", String(semLeft), false)}
        </section>

        <section class="card">
          <h3 class="section-title">Quick Entry - ${CURRICULUM[state.currentSem].label}</h3>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Code</th><th>Course Name</th><th>CU</th><th>Grade</th>
                </tr>
              </thead>
              <tbody>
                ${quickRows}
              </tbody>
            </table>
          </div>
        </section>

        <section class="card">
          <h3 class="section-title">Mini Forecast</h3>
          <div class="pill-row">
            <button class="pill" data-action="mini-forecast" data-grade="A">All A's this semester → ${formatGPA(allA)}</button>
            <button class="pill" data-action="mini-forecast" data-grade="B">All B's this semester → ${formatGPA(allB)}</button>
          </div>
        </section>
      </div>
    `;
        }

        function renderSemesterTable() {
            if (RUNTIME.page !== "grades") {
                return;
            }
            const page = document.getElementById("page-content");
            if (!page) {
                return;
            }

            const currentIdx = SEM_ORDER.indexOf(state.currentSem);
            const blocks = SEM_ORDER.map((semKey, idx) => {
                const sem = CURRICULUM[semKey];
                const editable = idx <= currentIdx;

                if (!editable) {
                    return `
          <section class="semester-block">
            <header class="semester-head">
              <h3>${sem.label}</h3>
              <span class="badge badge-future">Future</span>
            </header>
            <div class="card future-lock-note">
              <p>Grades not yet available.</p>
            </div>
          </section>
        `;
                }

                const rows = sem.courses.map((course) => {
                    const grade = state.grades[semKey][course.code] || "";
                    const point = GRADE_MAP[grade] || 0;
                    return `
          <tr class="${grade ? "completed" : "empty"}">
            <td><span class="code-pill">${course.code}</span></td>
            <td>${course.name}</td>
            <td>${course.cu}</td>
            <td>
              <select class="grade-select ${gradeSelectClass(grade)}" data-action="grade-change" data-sem="${semKey}" data-course="${course.code}">
                ${gradeOptions(grade)}
              </select>
            </td>
            <td class="mono-number">${formatGPA(point * course.cu)}</td>
          </tr>
        `;
                }).join("");

                const semGpa = semesterGPA(semKey);
                return `
        <section class="semester-block">
          <header class="semester-head">
            <h3>${sem.label}</h3>
            <span class="badge ${classBadgeClass(degreeClass(semGpa))}">GPA ${formatGPA(semGpa)}</span>
          </header>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Course Code</th><th>Course Name</th><th>CU</th><th>Grade</th><th>Points Earned</th>
                </tr>
              </thead>
              <tbody>
                ${rows}
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="5">Semester GPA: ${formatGPA(semGpa)} | Total CU: ${semesterUnits(semKey)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>
      `;
            }).join("");

            page.innerHTML = `<div class="stack">${blocks}</div>`;
        }

        function renderForecast() {
            if (RUNTIME.page !== "forecast") {
                return;
            }
            const page = document.getElementById("page-content");
            if (!page) {
                return;
            }

            const current = overallCGPA();
            const projected = projectedCGPA();
            const delta = projected - current;
            const futureSems = futureSemesters();
            if (!futureSems.includes(RUNTIME.forecastSemToAdd)) {
                RUNTIME.forecastSemToAdd = futureSems[0] || "";
            }
            const autoLeft = autoRemainingCU();
            const forecastLeft = effectiveRemainingCU(RUNTIME.forecastLeftCUOverride);

            const scenarioNudge = projected >= current ?
                `On this path, you'll graduate ${degreeClass(projected)}.` :
                `This pace puts your degree class at risk, ${state.name || "Student"}.`;

            const rows = state.forecast.map((row) => {
                        const courses = futureCoursesForSem(row.semKey);
                        const course = CURRICULUM[row.semKey].courses.find((c) => c.code === row.courseCode) || CURRICULUM[row.semKey].courses[0];
                        return `
        <div class="card" data-forecast-id="${row.id}">
          <div class="field-grid">
            <div>
              <label>Semester</label>
              <select data-action="forecast-sem" data-id="${row.id}">
                ${futureSemOptions(row.semKey)}
              </select>
            </div>
            <div>
              <label>Course</label>
              <select data-action="forecast-course" data-id="${row.id}">
                ${courses.map((c) => `<option value="${c.code}" ${c.code === row.courseCode ? "selected" : ""}>${c.code} - ${c.name}</option>`).join("")}
              </select>
            </div>
            <div>
              <label>CU</label>
              <input type="number" value="${course.cu}" readonly>
            </div>
            <div>
              <label>Grade</label>
              <select class="grade-select ${gradeSelectClass(row.grade)}" data-action="forecast-grade" data-id="${row.id}">
                ${gradeOptions(row.grade, true)}
              </select>
            </div>
          </div>
          <div class="mt-10">
            <button class="btn btn-secondary btn-sm" data-action="forecast-delete" data-id="${row.id}">Delete row</button>
          </div>
        </div>
      `;
    }).join("");

    const needed = cgpaNeeded(Number(RUNTIME.forecastTarget), forecastLeft);
    const neededGrade = needed === null ? "-" : requiredLetter(needed);
    const semNeed = Number.isFinite(Number(RUNTIME.forecastTarget)) ? semestersToTarget(Number(RUNTIME.forecastTarget)) : null;

    page.innerHTML = `
      <div class="grid-2">
        <section class="stack">
          <article class="card">
            <h3 class="section-title">Scenario Simulator</h3>
            <div class="pill-row">
              <button class="btn btn-secondary btn-sm" data-action="scenario" data-scenario="best">Best Case - All A's</button>
              <button class="btn btn-secondary btn-sm" data-action="scenario" data-scenario="realistic">Realistic</button>
              <button class="btn btn-secondary btn-sm" data-action="scenario" data-scenario="worst">Worst Case - All F's</button>
            </div>
            <div class="grid-2 mt-10">
              ${metricCard("Current CGPA", formatGPA(current))}
              ${metricCard("Projected CGPA", formatGPA(projected))}
            </div>
            <p class="mt-8 ${delta >= 0 ? "text-positive" : "text-negative"}">
              ${delta >= 0 ? "+" : ""}${formatGPA(delta)} ${delta >= 0 ? "↑" : "↓"}
            </p>
            <p>${scenarioNudge}</p>
            <div class="mt-10">
              <button class="btn btn-primary btn-sm" data-action="forecast-add">Add future course</button>
            </div>
            <div class="field-grid mt-10">
              <div>
                <label>Semester to add</label>
                <select id="forecast-bulk-sem">
                  ${futureSems.map((sem) => `<option value="${sem}" ${sem === RUNTIME.forecastSemToAdd ? "selected" : ""}>${sem} · ${CURRICULUM[sem].label}</option>`).join("")}
                </select>
              </div>
              <div class="stack">
                <label>Quick actions</label>
                <div class="pill-row">
                  <button class="btn btn-secondary btn-sm" data-action="forecast-add-semester">Add whole semester</button>
                  <button class="btn btn-secondary btn-sm" data-action="forecast-add-all">Add all future semesters</button>
                  <button class="btn btn-secondary btn-sm" data-action="forecast-clear">Clear forecast</button>
                </div>
              </div>
            </div>
          </article>
          ${rows || `<article class="card"><p>No forecast rows yet. Add one to simulate outcomes.</p></article>`}
        </section>

        <section class="card">
          <h3 class="section-title">Target Calculator</h3>
          <div class="stack">
            <div>
              <label>My target CGPA</label>
              <input id="forecast-target" type="number" min="0" max="5" step="0.01" value="${RUNTIME.forecastTarget}">
            </div>
            <div>
              <label>Credit units I have left (optional override)</label>
              <input id="forecast-left-cu-override" type="number" min="1" step="1" value="${RUNTIME.forecastLeftCUOverride}">
              <small>Auto: ${autoLeft} CU remaining (${completedCU()} completed out of ${totalProgramCU()})</small>
            </div>
            <div>
              <p class="${feasibilityColor(needed)}">Using ${forecastLeft} remaining CU, you need an average of ${needed === null ? "-" : formatGPA(needed)} grade points per CU</p>
              <p class="${feasibilityColor(needed)}">That means averaging ${neededGrade} or better across all remaining courses</p>
              <p class="${semNeed === Infinity ? "text-negative" : "text-primary"}">Semesters of straight A's needed: ${semNeed === null ? "-" : (semNeed === Infinity ? "Not feasible" : semNeed)}</p>
            </div>
          </div>
        </section>
      </div>
    `;
  }

  function renderInsights() {
    if (RUNTIME.page !== "insights") {
      return;
    }
    const page = document.getElementById("page-content");
    if (!page) {
      return;
    }

    const bestSem = highestSemester();
    const worstSem = lowestSemester();
    const maxUnitsSem = semesterWithMostUnits();
    const bestSingle = bestCourse();
    const insightLeft = effectiveRemainingCU(RUNTIME.insightLeftCUOverride);
    const insightAutoLeft = autoRemainingCU();
    const dragging = draggingCourses();
    const totalImpact = dragging.reduce((sum, row) => sum + row.impact, 0);

    const dragHtml = dragging.length === 0
      ? `<p>No courses dragging your CGPA, ${state.name || "Student"}. Solid performance across the board.</p>`
      : `
          <div class="stack">
            ${dragging.map((row) => `
              <div class="card">
                <div class="drag-item-head">
                  <div>
                    <strong class="text-primary">${row.course.name}</strong>
                    <p>${row.course.code}</p>
                  </div>
                  <div class="pill-row">
                    <span class="badge badge-upper">${row.course.cu} CU</span>
                    <span class="badge badge-pass">${row.grade}</span>
                    <span class="badge badge-lower">Impact ${formatGPA(row.impact)}</span>
                  </div>
                </div>
              </div>
            `).join("")}
            <p>These ${dragging.length} courses cost you ${formatGPA(totalImpact)} grade points total.</p>
          </div>
        `;

    const gradeRows = ["A", "B+", "B", "C+", "C", "D+", "D"].map((g) => {
      const left = insightLeft;
      const target = Number(RUNTIME.insightTarget);
      const needed = cgpaNeeded(target, left);
      const reaches = Number.isFinite(needed) && GRADE_MAP[g] >= needed;
      return `
        <tr>
          <td>${g}</td>
          <td>${Number.isFinite(left) ? left : 0}</td>
          <td>${Number.isFinite(left) ? formatGPA(GRADE_MAP[g] * left) : "-"}</td>
          <td class="${reaches ? "text-positive" : "text-negative"}">${reaches ? "Gets target" : "Below target"}</td>
        </tr>
      `;
    }).join("");

    page.innerHTML = `
      <div class="stack">
        <section class="card">
          <h3 class="section-title">GPA by Semester</h3>
          <div class="chart-wrap"><canvas id="gpa-chart"></canvas></div>
        </section>

        <section class="grid-4">
          ${metricCard("Best Semester", `${semesterDisplayKey(bestSem.semKey)} (${formatGPA(bestSem.gpa)})`, false)}
          ${metricCard("Worst Semester", `${semesterDisplayKey(worstSem.semKey)} (${formatGPA(worstSem.gpa)})`, false)}
          ${metricCard("Most Units in One Sem", `${semesterDisplayKey(maxUnitsSem.semKey)} (${maxUnitsSem.units})`, false)}
          ${metricCard("Best Single Course", bestSingle ? `${bestSingle.course.code} (${bestSingle.grade})` : "N/A", false)}
        </section>

        <section class="card">
          <h3 class="section-title">What's dragging your CGPA</h3>
          ${dragHtml}
        </section>

        <section class="card">
          <h3 class="section-title">Minimum Grade Calculator</h3>
          <div class="field-grid">
            <div>
              <label>Target CGPA</label>
              <input id="insight-target" type="number" min="0" max="5" step="0.01" value="${RUNTIME.insightTarget}">
            </div>
            <div>
              <label>Remaining CU</label>
              <input id="insight-left-cu-override" type="number" min="1" step="1" value="${RUNTIME.insightLeftCUOverride}">
              <small>Auto: ${insightAutoLeft} CU remaining (${completedCU()} completed out of ${totalProgramCU()})</small>
            </div>
          </div>
          <div class="table-wrap mt-10">
            <table>
              <thead>
                <tr><th>Grade</th><th>Units</th><th>Total Points</th><th>Outcome</th></tr>
              </thead>
              <tbody>
                ${gradeRows}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    `;

    updateChart();
  }

  function renderTimetable() {
    if (RUNTIME.page !== "timetable") {
      return;
    }
    const page = document.getElementById("page-content");
    if (!page) {
      return;
    }

    const key = RUNTIME.timetableSem;
    const isSem1 = key.endsWith("S1");
    const programImages = TIMETABLE_IMAGES[state.program] || {};
    const imgPath = programImages[key] || "";

    page.innerHTML = `
      <div class="stack">
        <section class="card">
          <h3 class="section-title">Semester Timetable</h3>
          <div class="pill-row">
            ${SEM_ORDER.map((sem) => `<button class="pill ${sem === key ? "active" : ""}" data-action="timetable-sem" data-sem="${sem}">${sem}</button>`).join("")}
          </div>
          <p class="timetable-note">Note: Semester 1 timetables are currently not available because we are in Semester 2 at the moment.</p>
        </section>

        <section class="card timetable-wrap">
          <img id="timetable-image" class="timetable-image ${imgPath ? "" : "hidden"}" src="${imgPath}" alt="${CURRICULUM[key].label} Timetable">
          <div id="timetable-fallback" class="timetable-placeholder hidden">
            <h4 class="text-primary">Timetable image not available yet. Check back after upload.</h4>
            <p>Upload icon placeholder</p>
          </div>
          <small>Last updated: ${new Date(TIMETABLE_DATES[key]).toDateString()}</small>
          <small>This is a reference copy. Always verify with your department.</small>
        </section>
      </div>
    `;

    const img = document.getElementById("timetable-image");
    const fallback = document.getElementById("timetable-fallback");
    if (img && fallback) {
      if (!imgPath) {
        const heading = fallback.querySelector("h4");
        if (heading) {
          heading.textContent = "Timetable image not available yet. Check back after upload.";
        }
        fallback.classList.remove("hidden");
      }
      img.addEventListener("error", () => {
        img.classList.add("hidden");
        const heading = fallback.querySelector("h4");
        if (heading) {
          heading.textContent = isSem1
            ? "Semester 1 timetable is not available right now because the program is currently in Semester 2."
            : "Timetable image not available yet. Check back after upload.";
        }
        fallback.classList.remove("hidden");
      }, { once: true });
    }
  }

  function filteredResources() {
    const query = String(RUNTIME.resourcesQuery || "").trim().toLowerCase();
    return [...state.resources]
      .filter((item) => {
        if (RUNTIME.resourcesSemFilter !== "all" && item.semKey !== RUNTIME.resourcesSemFilter) {
          return false;
        }
        if (RUNTIME.resourcesTypeFilter !== "all" && item.type !== RUNTIME.resourcesTypeFilter) {
          return false;
        }
        if (RUNTIME.resourcesYearFilter !== "all" && String(item.year) !== String(RUNTIME.resourcesYearFilter)) {
          return false;
        }
        if (!query) {
          return true;
        }
        const searchable = `${item.title} ${item.courseCode} ${item.fileName} ${item.type}`.toLowerCase();
        return searchable.includes(query);
      })
      .sort((a, b) => Number(b.createdAt || 0) - Number(a.createdAt || 0));
  }

  function renderResources() {
    if (RUNTIME.page !== "resources") {
      return;
    }
    const page = document.getElementById("page-content");
    if (!page) {
      return;
    }

    const currentYear = new Date().getFullYear();
    const typeOptions = ["Final", "Midterm", "CAT", "Quiz", "Assignment", "Other"];
    const allCourseOptions = SEM_ORDER
      .flatMap((semKey) => CURRICULUM[semKey].courses.map((course) => ({ semKey, course })))
      .map(({ course }) => `<option value="${course.code}">${course.code} - ${course.name}</option>`)
      .join("");

    const yearValues = [...new Set(state.resources.map((item) => String(item.year)).filter(Boolean))].sort((a, b) => Number(b) - Number(a));
    const rows = filteredResources();

    page.innerHTML = `
      <div class="stack">
        <section class="card">
          <h3 class="section-title">Resources Upload</h3>
          <p>Add past papers and revision files for your current program. Files are stored on this device only.</p>
          <div class="field-grid mt-10">
            <div>
              <label>Semester</label>
              <select id="resource-sem">
                ${SEM_ORDER.map((sem) => `<option value="${sem}" ${sem === state.currentSem ? "selected" : ""}>${sem}</option>`).join("")}
              </select>
            </div>
            <div>
              <label>Course</label>
              <select id="resource-course">
                ${allCourseOptions}
              </select>
            </div>
            <div>
              <label>Type</label>
              <select id="resource-type">
                ${typeOptions.map((type) => `<option value="${type}">${type}</option>`).join("")}
              </select>
            </div>
            <div>
              <label>Year</label>
              <input id="resource-year" type="number" min="2000" max="2100" step="1" value="${currentYear}">
            </div>
          </div>
          <div class="stack mt-10">
            <div>
              <label>Title (optional)</label>
              <input id="resource-title" maxlength="80" placeholder="Example: SWE2104 Final Exam">
            </div>
            <div>
              <label>Choose files</label>
              <input id="resource-files" type="file" multiple accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.jpeg,.png">
            </div>
            <div>
              <button class="btn btn-primary btn-sm" data-action="resource-upload">Upload files</button>
            </div>
          </div>
        </section>

        <section class="card">
          <h3 class="section-title">Past Papers Library</h3>
          <div class="field-grid mt-10">
            <div>
              <label>Search</label>
              <input id="resources-query" value="${escapeHtml(RUNTIME.resourcesQuery)}" placeholder="Search by course code, title or file name">
            </div>
            <div>
              <label>Semester</label>
              <select id="resources-sem-filter">
                <option value="all">All semesters</option>
                ${SEM_ORDER.map((sem) => `<option value="${sem}" ${RUNTIME.resourcesSemFilter === sem ? "selected" : ""}>${sem}</option>`).join("")}
              </select>
            </div>
            <div>
              <label>Type</label>
              <select id="resources-type-filter">
                <option value="all">All types</option>
                ${typeOptions.map((type) => `<option value="${type}" ${RUNTIME.resourcesTypeFilter === type ? "selected" : ""}>${type}</option>`).join("")}
              </select>
            </div>
            <div>
              <label>Year</label>
              <select id="resources-year-filter">
                <option value="all">All years</option>
                ${yearValues.map((year) => `<option value="${year}" ${RUNTIME.resourcesYearFilter === year ? "selected" : ""}>${year}</option>`).join("")}
              </select>
            </div>
          </div>

          <div class="stack mt-10">
            ${rows.length ? rows.map((item) => `
              <article class="card resource-item">
                <div class="resource-item-head">
                  <div>
                    <h4 class="text-primary">${escapeHtml(item.title || item.fileName)}</h4>
                    <p>${item.courseCode} · ${item.semKey} · ${item.type} · ${item.year}</p>
                    <small>${escapeHtml(item.fileName)} · ${Math.max(1, Math.round((item.fileSize || 0) / 1024))} KB</small>
                  </div>
                  <div class="pill-row">
                    <button class="btn btn-secondary btn-sm" data-action="resource-open" data-id="${item.id}">Open</button>
                    <button class="btn btn-secondary btn-sm" data-action="resource-download" data-id="${item.id}">Download</button>
                    <button class="btn btn-secondary btn-sm" data-action="resource-delete" data-id="${item.id}">Delete</button>
                  </div>
                </div>
              </article>
            `).join("") : `<p>No resources found for the current filters.</p>`}
          </div>
        </section>
      </div>
    `;
  }

  function renderSettings() {
    if (RUNTIME.page !== "settings") {
      return;
    }
    const page = document.getElementById("page-content");
    if (!page) {
      return;
    }

    page.innerHTML = `
      <div class="stack">
        <section class="card">
          <h3 class="section-title">Profile</h3>
          <div class="field-grid">
            <div>
              <label>Program</label>
              <select id="settings-program">
                ${Object.values(PROGRAMS).map((program) => `<option value="${program.key}" ${program.key === state.program ? "selected" : ""}>${program.displayName}</option>`).join("")}
              </select>
            </div>
            <div>
              <label>Name</label>
              <input id="settings-name" value="${escapeHtml(state.name)}" maxlength="30">
            </div>
            <div>
              <label>Current Semester</label>
              <select id="settings-current-sem">
                ${SEM_ORDER.map((sem) => `<option value="${sem}" ${sem === state.currentSem ? "selected" : ""}>${sem}</option>`).join("")}
              </select>
            </div>
          </div>
          <p>Changing your current semester affects which grades are editable.</p>
          <div class="mt-10"><button class="btn btn-primary btn-sm" data-action="save-profile">Save profile</button></div>
        </section>

        <section class="card">
          <h3 class="section-title">Security</h3>
          <div class="stack">
            <div>
              <label>Current PIN</label>
              <input id="settings-current-pin" type="password" maxlength="4" inputmode="numeric">
            </div>
            <div class="field-grid">
              <div>
                <label>New PIN</label>
                <input id="settings-new-pin" type="password" maxlength="4" inputmode="numeric">
              </div>
              <div>
                <label>Confirm New PIN</label>
                <input id="settings-confirm-pin" type="password" maxlength="4" inputmode="numeric">
              </div>
            </div>
            <div><button class="btn btn-secondary btn-sm" data-action="change-pin">Change PIN</button></div>
            <div class="pill-row">
              <span class="badge badge-upper">Anonymous ID: ${state.userId}</span>
              <button class="btn btn-secondary btn-sm" data-action="copy-id">Copy ID</button>
            </div>
            <div>
              <button class="btn btn-secondary btn-sm" data-action="reveal-recovery">Show recovery phrase (PIN required)</button>
              <p id="recovery-display"></p>
            </div>
          </div>
        </section>

        <section class="card">
          <h3 class="section-title">Data</h3>
          <div class="pill-row">
            <button class="btn btn-secondary btn-sm" data-action="export-json">Export JSON</button>
            <label class="btn btn-secondary btn-sm" for="import-json-file">Import JSON</label>
            <input id="import-json-file" class="hidden" type="file" accept="application/json">
            <button class="btn btn-secondary btn-sm" data-action="reset-all">Reset all data</button>
          </div>
        </section>

        <section class="card">
          <h3 class="section-title">About</h3>
          <p>Grade Tracker v1.1 · Program: ${getActiveProgram().displayName} · Built for Mbarara University by Mubiru Elton Felix · Data stored locally on your device · No account required</p>
          <p><a href="#" class="link-blue">GitHub link placeholder</a></p>
        </section>
      </div>
    `;
  }

  // ╔══════════════════════════════════════════╗
  // ║  EVENTS                                  ║
  // ╚══════════════════════════════════════════╝
  function bindNav() {
    const sidebar = document.getElementById("sidebar-nav");
    const mobile = document.getElementById("mobile-tabs");
    const mobileMorePanel = document.getElementById("mobile-more-panel");

    const lowFrequencyPages = ["resources", "insights", "settings"];

    function hideMobileMorePanel() {
      if (mobileMorePanel) {
        mobileMorePanel.classList.add("hidden");
      }
    }

    function toggleMobileMorePanel() {
      if (!mobileMorePanel) {
        return;
      }
      mobileMorePanel.classList.toggle("hidden");
    }

    if (sidebar) {
      sidebar.addEventListener("click", (event) => {
        const btn = event.target.closest("button[data-page]");
        if (!btn) {
          return;
        }
        RUNTIME.page = btn.dataset.page;
        hideMobileMorePanel();
        routeRender();
      });
    }

    if (mobile) {
      mobile.addEventListener("click", (event) => {
        const btn = event.target.closest("button[data-page]");
        if (!btn) {
          return;
        }
        if (btn.dataset.page === "more") {
          toggleMobileMorePanel();
          syncActiveNav();
          return;
        }
        RUNTIME.page = btn.dataset.page;
        hideMobileMorePanel();
        routeRender();
      });
    }

    if (mobileMorePanel) {
      mobileMorePanel.addEventListener("click", (event) => {
        const btn = event.target.closest("button[data-page]");
        if (!btn) {
          return;
        }
        if (!lowFrequencyPages.includes(btn.dataset.page)) {
          return;
        }
        RUNTIME.page = btn.dataset.page;
        hideMobileMorePanel();
        routeRender();
      });
    }

    document.addEventListener("click", (event) => {
      if (!mobileMorePanel || mobileMorePanel.classList.contains("hidden")) {
        return;
      }
      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }
      if (target.closest("#mobile-more-panel") || target.closest("#mobile-tabs")) {
        return;
      }
      hideMobileMorePanel();
      syncActiveNav();
    });
  }

  function bindGradeInputs() {
    const page = document.getElementById("page-content");
    if (!page) {
      return;
    }

    page.addEventListener("change", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }

      if (target.matches("select[data-action='grade-change']")) {
        const sem = target.dataset.sem;
        const course = target.dataset.course;
        const grade = target.value;
        if (!sem || !course || !GRADE_LIST.includes(grade)) {
          return;
        }
        state.grades[sem][course] = grade;
        saveState();
        routeRender();
      }

      if (target.matches("#forecast-target")) {
        RUNTIME.forecastTarget = target.value;
        renderForecast();
      }
      if (target.matches("#forecast-left-cu-override")) {
        RUNTIME.forecastLeftCUOverride = target.value;
        renderForecast();
      }
      if (target.matches("#forecast-bulk-sem")) {
        RUNTIME.forecastSemToAdd = target.value;
        renderForecast();
      }

      if (target.matches("#insight-target")) {
        RUNTIME.insightTarget = target.value;
        renderInsights();
      }
      if (target.matches("#insight-left-cu-override")) {
        RUNTIME.insightLeftCUOverride = target.value;
        renderInsights();
      }

      if (target.matches("select[data-action='forecast-sem']")) {
        const id = target.dataset.id;
        const row = state.forecast.find((f) => f.id === id);
        if (!row) {
          return;
        }
        row.semKey = target.value;
        row.courseCode = CURRICULUM[row.semKey].courses[0].code;
        saveState();
        renderForecast();
      }

      if (target.matches("select[data-action='forecast-course']")) {
        const id = target.dataset.id;
        const row = state.forecast.find((f) => f.id === id);
        if (!row) {
          return;
        }
        row.courseCode = target.value;
        saveState();
        renderForecast();
      }

      if (target.matches("select[data-action='forecast-grade']")) {
        const id = target.dataset.id;
        const row = state.forecast.find((f) => f.id === id);
        if (!row || !GRADE_MAP.hasOwnProperty(target.value)) {
          return;
        }
        row.grade = target.value;
        saveState();
        renderForecast();
      }

      if (target.matches("#import-json-file")) {
        importFromInput(target);
      }

      if (target.matches("#resources-sem-filter")) {
        RUNTIME.resourcesSemFilter = target.value;
        renderResources();
      }

      if (target.matches("#resources-type-filter")) {
        RUNTIME.resourcesTypeFilter = target.value;
        renderResources();
      }

      if (target.matches("#resources-year-filter")) {
        RUNTIME.resourcesYearFilter = target.value;
        renderResources();
      }
    });

    page.addEventListener("input", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }

      if (target.matches("#resources-query")) {
        RUNTIME.resourcesQuery = target.value;
        renderResources();
      }
    });
  }

  function bindForecastEvents() {
    const page = document.getElementById("page-content");
    if (!page) {
      return;
    }

    page.addEventListener("click", (event) => {
      const btn = event.target.closest("button[data-action]");
      if (!btn) {
        return;
      }

      const action = btn.dataset.action;

      if (action === "forecast-add") {
        const futureSems = futureSemesters();
        if (!futureSems.length) {
          showToast("No future semesters available.", "error");
          return;
        }
        const semKey = futureSems[0];
        const courseCode = CURRICULUM[semKey].courses[0].code;
        state.forecast.push({
          id: `forecast_${Date.now()}`,
          semKey,
          courseCode,
          grade: "A"
        });
        saveState();
        renderForecast();
      }

      if (action === "forecast-add-semester") {
        const semKey = futureSemesters().includes(RUNTIME.forecastSemToAdd) ? RUNTIME.forecastSemToAdd : futureSemesters()[0];
        if (!semKey) {
          showToast("No future semesters available.", "error");
          return;
        }
        const existing = new Set(state.forecast.map((row) => `${row.semKey}::${row.courseCode}`));
        const freshRows = CURRICULUM[semKey].courses
          .filter((course) => !existing.has(`${semKey}::${course.code}`))
          .map((course) => ({
            id: `forecast_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
            semKey,
            courseCode: course.code,
            grade: "B+"
          }));
        if (!freshRows.length) {
          showToast("All courses for that semester are already in forecast.", "info");
          return;
        }
        state.forecast.push(...freshRows);
        saveState();
        showToast(`Added ${freshRows.length} courses from ${semKey}.`, "success");
        renderForecast();
      }

      if (action === "forecast-add-all") {
        const sems = futureSemesters();
        if (!sems.length) {
          showToast("No future semesters available.", "error");
          return;
        }
        const existing = new Set(state.forecast.map((row) => `${row.semKey}::${row.courseCode}`));
        const freshRows = [];
        sems.forEach((semKey) => {
          CURRICULUM[semKey].courses.forEach((course) => {
            const key = `${semKey}::${course.code}`;
            if (existing.has(key)) {
              return;
            }
            existing.add(key);
            freshRows.push({
              id: `forecast_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
              semKey,
              courseCode: course.code,
              grade: "B+"
            });
          });
        });
        if (!freshRows.length) {
          showToast("All future courses are already added.", "info");
          return;
        }
        state.forecast.push(...freshRows);
        saveState();
        showToast(`Added ${freshRows.length} future courses.`, "success");
        renderForecast();
      }

      if (action === "forecast-clear") {
        state.forecast = [];
        saveState();
        showToast("Forecast rows cleared.", "success");
        renderForecast();
      }

      if (action === "forecast-delete") {
        const id = btn.dataset.id;
        state.forecast = state.forecast.filter((f) => f.id !== id);
        saveState();
        renderForecast();
      }

      if (action === "scenario") {
        const scenario = btn.dataset.scenario;
        if (scenario === "best") {
          state.forecast = state.forecast.map((f) => ({ ...f, grade: "A" }));
        }
        if (scenario === "worst") {
          state.forecast = state.forecast.map((f) => ({ ...f, grade: "F" }));
        }
        if (scenario === "realistic") {
          state.forecast = state.forecast.map((f) => ({ ...f, grade: "B+" }));
        }
        saveState();
        renderForecast();
      }
    });
  }

  function bindSettingsEvents() {
    const page = document.getElementById("page-content");
    if (!page) {
      return;
    }

    page.addEventListener("click", async (event) => {
      const btn = event.target.closest("button[data-action]");
      if (!btn) {
        return;
      }
      const action = btn.dataset.action;

      if (action === "save-profile") {
        const programInput = document.getElementById("settings-program");
        const nameInput = document.getElementById("settings-name");
        const semInput = document.getElementById("settings-current-sem");
        if (!programInput || !nameInput || !semInput) {
          return;
        }
        const name = nameInput.value.trim();
        const nextProgram = resolveProgramKey(programInput.value);
        if (!name) {
          showToast("Name cannot be empty.", "error");
          return;
        }

        if (nextProgram !== state.program) {
          const approved = await confirmDialog("Switching program will reset grades and forecasts for the selected program. Continue?");
          if (!approved) {
            return;
          }
          const rebuilt = defaultState(nextProgram);
          state = {
            ...rebuilt,
            name,
            userId: state.userId,
            pin: state.pin,
            recoveryHash: state.recoveryHash,
            recoveryPhrase: state.recoveryPhrase
          };
          syncProgramContext(nextProgram);
          RUNTIME.timetableSem = state.currentSem;
          saveState();
          showToast("Program switched and curriculum reset.", "success");
          routeRender();
          return;
        }

        state.name = name;
        state.currentSem = SEM_ORDER.includes(semInput.value) ? semInput.value : SEM_ORDER[0];
        saveState();
        showToast("Profile updated.", "success");
        renderTopBar();
      }

      if (action === "change-pin") {
        const current = document.getElementById("settings-current-pin");
        const next = document.getElementById("settings-new-pin");
        const confirm = document.getElementById("settings-confirm-pin");
        if (!current || !next || !confirm) {
          return;
        }
        if (!/^\d{4}$/.test(next.value) || next.value !== confirm.value) {
          showToast("PIN must be 4 digits and match confirmation.", "error");
          return;
        }
        const currentHash = await hashPIN(current.value);
        if (currentHash !== state.pin) {
          showToast("Current PIN is incorrect.", "error");
          return;
        }
        state.pin = await hashPIN(next.value);
        saveState();
        showToast("PIN changed.", "success");
        current.value = "";
        next.value = "";
        confirm.value = "";
      }

      if (action === "copy-id") {
        navigator.clipboard.writeText(state.userId).then(() => {
          showToast("Anonymous ID copied.", "success");
        }).catch(() => {
          showToast("Could not copy ID.", "error");
        });
      }

      if (action === "reveal-recovery") {
        const current = document.getElementById("settings-current-pin");
        const display = document.getElementById("recovery-display");
        if (!current || !display) {
          return;
        }
        const hash = await hashPIN(current.value);
        if (hash !== state.pin) {
          showToast("PIN required to reveal recovery phrase.", "error");
          return;
        }
        display.textContent = state.recoveryPhrase || "Recovery phrase not available.";
      }

      if (action === "export-json") {
        downloadJSON(`grade-tracker-${state.program}-${Date.now()}.json`, state);
      }

      if (action === "reset-all") {
        const ok = await confirmDialog("Reset all data? This cannot be undone.");
        if (!ok) {
          return;
        }
        try {
          localStorage.removeItem(STORAGE_KEYS.state);
          localStorage.removeItem(STORAGE_KEYS.pinHash);
          localStorage.removeItem(STORAGE_KEYS.recoveryHash);
          await clearResourceBlobs();
          window.location.reload();
        } catch (_err) {
          showToast("Could not reset data.", "error");
        }
      }
    });
  }

  function bindUtilEvents() {
    const page = document.getElementById("page-content");
    if (!page) {
      return;
    }

    page.addEventListener("click", async (event) => {
      const btn = event.target.closest("button[data-action]");
      if (!btn) {
        return;
      }

      const action = btn.dataset.action;
      if (action === "mini-forecast") {
        const grade = btn.dataset.grade;
        const result = scenarioForSemester(state.currentSem, grade);
        showToast(`Projected CGPA with all ${grade}: ${formatGPA(result)}`, "info");
      }

      if (action === "timetable-sem") {
        RUNTIME.timetableSem = btn.dataset.sem || state.currentSem;
        renderTimetable();
      }

      if (action === "resource-upload") {
        const semInput = document.getElementById("resource-sem");
        const courseInput = document.getElementById("resource-course");
        const typeInput = document.getElementById("resource-type");
        const yearInput = document.getElementById("resource-year");
        const titleInput = document.getElementById("resource-title");
        const filesInput = document.getElementById("resource-files");

        if (!semInput || !courseInput || !typeInput || !yearInput || !titleInput || !filesInput) {
          return;
        }

        const files = filesInput.files ? Array.from(filesInput.files) : [];
        if (!files.length) {
          showToast("Select at least one file to upload.", "error");
          return;
        }

        const semKey = semInput.value;
        const courseCode = courseInput.value;
        const type = typeInput.value;
        const year = Number(yearInput.value);
        const customTitle = titleInput.value.trim();

        if (!SEM_ORDER.includes(semKey)) {
          showToast("Choose a valid semester.", "error");
          return;
        }
        if (!Number.isFinite(year) || year < 2000 || year > 2100) {
          showToast("Year must be between 2000 and 2100.", "error");
          return;
        }

        try {
          const uploaded = [];
          for (const file of files) {
            const id = `res_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
            await saveResourceBlob(id, file);
            uploaded.push({
              id,
              semKey,
              courseCode,
              type,
              year,
              title: customTitle || file.name,
              fileName: file.name,
              fileType: file.type || "application/octet-stream",
              fileSize: file.size || 0,
              createdAt: Date.now()
            });
          }
          state.resources.push(...uploaded);
          saveState();
          filesInput.value = "";
          titleInput.value = "";
          showToast(`Uploaded ${uploaded.length} resource file(s).`, "success");
          renderResources();
        } catch (_err) {
          showToast("Upload failed. Check your browser storage quota.", "error");
        }
      }

      if (action === "resource-open" || action === "resource-download") {
        const id = btn.dataset.id;
        const meta = state.resources.find((item) => item.id === id);
        if (!id || !meta) {
          showToast("Resource not found.", "error");
          return;
        }
        try {
          const blob = await getResourceBlob(id);
          if (!blob) {
            showToast("File data is missing for this resource.", "error");
            return;
          }
          const url = URL.createObjectURL(blob);
          if (action === "resource-open") {
            window.open(url, "_blank", "noopener");
          } else {
            const link = document.createElement("a");
            link.href = url;
            link.download = meta.fileName || "resource-file";
            link.click();
          }
          window.setTimeout(() => URL.revokeObjectURL(url), 1500);
        } catch (_err) {
          showToast("Could not open resource file.", "error");
        }
      }

      if (action === "resource-delete") {
        const id = btn.dataset.id;
        if (!id) {
          return;
        }
        const approved = await confirmDialog("Delete this resource file from your device?");
        if (!approved) {
          return;
        }
        try {
          await deleteResourceBlob(id);
          state.resources = state.resources.filter((item) => item.id !== id);
          saveState();
          showToast("Resource deleted.", "success");
          renderResources();
        } catch (_err) {
          showToast("Could not delete resource.", "error");
        }
      }
    });
  }

  // ╔══════════════════════════════════════════╗
  // ║  CHART                                   ║
  // ╚══════════════════════════════════════════╝
  function initChart() {
    if (!window.Chart) {
      return;
    }

    Chart.defaults.color = "#8B95A5";
    Chart.defaults.borderColor = "#2A3040";
    Chart.defaults.font.family = "Plus Jakarta Sans";
  }

  function updateChart() {
    const canvas = document.getElementById("gpa-chart");
    if (!canvas || !window.Chart) {
      return;
    }

    const completed = completedSemesters();
    const labels = completed.map((s) => s.key);
    const values = completed.map((s) => s.gpa);
    const colors = completed.map((s) => degreeClassColor(degreeClass(s.gpa)));

    if (chart) {
      chart.destroy();
    }

    chart = new Chart(canvas, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "Semester GPA",
            data: values,
            backgroundColor: colors,
            borderRadius: 8
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 700,
          easing: "easeOutQuart"
        },
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            min: 0,
            max: 5,
            grid: { color: "#2A3040" },
            ticks: { color: "#8B95A5" }
          },
          x: {
            grid: { color: "#2A3040" },
            ticks: { color: "#8B95A5" }
          }
        }
      }
    });
  }

  // ╔══════════════════════════════════════════╗
  // ║  UTILS                                   ║
  // ╚══════════════════════════════════════════╝
  function applyProgramBranding() {
    const program = getActiveProgram();
    const title = document.getElementById("sidebar-app-title");
    const label = document.getElementById("sidebar-program-label");
    if (title) {
      title.textContent = "Grade Tracker";
    }
    if (label) {
      label.textContent = `${program.shortName} · Mbarara University`;
    }
    if (document && document.title) {
      document.title = `${program.shortName} Grade Tracker - Mbarara University`;
    }
  }

  function showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    if (!container) {
      return;
    }
    const toast = document.createElement("div");
    toast.className = "toast";
    const color = type === "success" ? "var(--green)" : type === "error" ? "var(--red)" : "var(--blue)";
    toast.style.borderColor = color;
    toast.textContent = message;
    container.appendChild(toast);

    window.setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  function formatGPA(value) {
    return Number(value || 0).toFixed(2);
  }

  function degreeClassColor(dClass) {
    if (dClass === "First Class") {
      return "#2DD4A0";
    }
    if (dClass === "Upper Second") {
      return "#4DA6FF";
    }
    if (dClass === "Lower Second") {
      return "#F5A623";
    }
    return "#FF5C5C";
  }

  function countUpAnimation(node, targetValue) {
    if (!node) {
      return;
    }
    const start = Number(node.dataset.value || 0);
    const end = Number(targetValue || 0);
    const duration = 320;
    const startTime = performance.now();

    function step(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = start + (end - start) * progress;
      node.textContent = formatGPA(current);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        node.dataset.value = String(end);
      }
    }

    window.requestAnimationFrame(step);
  }

  function downloadJSON(filename, data) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  function confirmDialog(message) {
    return Promise.resolve(window.confirm(message));
  }

  async function hashPIN(pin) {
    const encoded = new TextEncoder().encode(pin);
    const buffer = await crypto.subtle.digest("SHA-256", encoded);
    return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }

  function openResourceDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(RESOURCE_DB.name, RESOURCE_DB.version);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(RESOURCE_DB.store)) {
          db.createObjectStore(RESOURCE_DB.store);
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error("Could not open resources database."));
    });
  }

  async function saveResourceBlob(id, file) {
    const db = await openResourceDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(RESOURCE_DB.store, "readwrite");
      tx.objectStore(RESOURCE_DB.store).put(file, id);
      tx.oncomplete = () => {
        db.close();
        resolve();
      };
      tx.onerror = () => {
        db.close();
        reject(tx.error || new Error("Could not save resource file."));
      };
    });
  }

  async function getResourceBlob(id) {
    const db = await openResourceDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(RESOURCE_DB.store, "readonly");
      const request = tx.objectStore(RESOURCE_DB.store).get(id);
      request.onsuccess = () => {
        db.close();
        resolve(request.result || null);
      };
      request.onerror = () => {
        db.close();
        reject(request.error || new Error("Could not read resource file."));
      };
    });
  }

  async function deleteResourceBlob(id) {
    const db = await openResourceDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(RESOURCE_DB.store, "readwrite");
      tx.objectStore(RESOURCE_DB.store).delete(id);
      tx.oncomplete = () => {
        db.close();
        resolve();
      };
      tx.onerror = () => {
        db.close();
        reject(tx.error || new Error("Could not delete resource file."));
      };
    });
  }

  async function clearResourceBlobs() {
    const db = await openResourceDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(RESOURCE_DB.store, "readwrite");
      tx.objectStore(RESOURCE_DB.store).clear();
      tx.oncomplete = () => {
        db.close();
        resolve();
      };
      tx.onerror = () => {
        db.close();
        reject(tx.error || new Error("Could not clear resource files."));
      };
    });
  }

  function gradeOptions(selected, forecastOnly = false) {
    return GRADE_LIST
      .filter((g) => forecastOnly ? g !== "" : true)
      .map((g) => `<option value="${g}" ${g === selected ? "selected" : ""}>${g || "—"}</option>`)
      .join("");
  }

  function gradeSelectClass(value) {
    if (value === "B+") {
      return "grade-Bplus";
    }
    if (value === "C+") {
      return "grade-Cplus";
    }
    if (value === "D+") {
      return "grade-Dplus";
    }
    return value ? `grade-${value}` : "";
  }

  function completedCU() {
    let units = 0;
    SEM_ORDER.forEach((semKey) => {
      CURRICULUM[semKey].courses.forEach((course) => {
        const grade = state.grades[semKey][course.code] || "";
        if (GRADE_MAP.hasOwnProperty(grade)) {
          units += course.cu;
        }
      });
    });
    return units;
  }

  function semesterUnits(semKey) {
    return CURRICULUM[semKey].courses.reduce((sum, c) => sum + c.cu, 0);
  }

  function completedSemesters() {
    const list = [];
    SEM_ORDER.forEach((key) => {
      const has = CURRICULUM[key].courses.some((course) => GRADE_MAP.hasOwnProperty(state.grades[key][course.code] || ""));
      if (has) {
        list.push({ key, gpa: semesterGPA(key) });
      }
    });
    return list;
  }

  function highestSemester() {
    const all = SEM_ORDER.map((semKey) => ({ semKey, gpa: semesterGPA(semKey) }));
    return all.reduce((best, cur) => cur.gpa > best.gpa ? cur : best, { semKey: SEM_ORDER[0] || "N/A", gpa: 0 });
  }

  function lowestSemester() {
    const done = completedSemesters();
    if (!done.length) {
      return { semKey: "N/A", gpa: 0 };
    }
    const mapped = done.map((row) => ({ semKey: row.key, gpa: row.gpa }));
    return mapped.reduce((worst, cur) => cur.gpa < worst.gpa ? cur : worst, mapped[0]);
  }

  function semesterWithMostUnits() {
    const all = SEM_ORDER.map((semKey) => ({ semKey, units: semesterUnits(semKey) }));
    return all.reduce((best, cur) => cur.units > best.units ? cur : best, all[0]);
  }

  function scenarioForSemester(semKey, grade) {
    const copy = deepClone(state.grades);
    CURRICULUM[semKey].courses.forEach((course) => {
      copy[semKey][course.code] = grade;
    });
    return overallCGPA(copy);
  }

  function futureSemesters() {
    const idx = SEM_ORDER.indexOf(state.currentSem);
    return SEM_ORDER.slice(idx + 1);
  }

  function futureCoursesForSem(semKey) {
    if (!CURRICULUM[semKey]) {
      return [];
    }
    return CURRICULUM[semKey].courses || [];
  }

  function futureSemOptions(selected) {
    return futureSemesters().map((sem) => `<option value="${sem}" ${sem === selected ? "selected" : ""}>${sem}</option>`).join("");
  }

  function requiredLetter(points) {
    if (!Number.isFinite(points)) {
      return "Not feasible";
    }
    if (points <= 0) {
      return "D";
    }
    if (points > 5) {
      return "Not feasible";
    }
    const sorted = Object.entries(GRADE_MAP).sort((a, b) => b[1] - a[1]);
    const found = sorted.reverse().find((entry) => entry[1] >= points);
    return found ? found[0] : "A";
  }

  function feasibilityColor(points) {
    if (!Number.isFinite(points) || points > 5) {
      return "text-negative";
    }
    if (points > 4.0) {
      return "text-warn";
    }
    return "text-positive";
  }

  function degreeBannerClass(name) {
    if (name === "First Class") {
      return "degree-first";
    }
    if (name === "Upper Second") {
      return "degree-upper";
    }
    if (name === "Lower Second") {
      return "degree-lower";
    }
    return "degree-pass";
  }

  function dashboardBannerMessage(dClass, cgpa) {
    const name = state.name || "Student";
    if (dClass === "First Class") {
      return `Outstanding work, ${name}. You're on track for First Class Honours.`;
    }
    if (dClass === "Upper Second") {
      return `Great progress, ${name}. You're ${formatGPA(Math.max(0, 4.4 - cgpa))} points from First Class.`;
    }
    if (dClass === "Lower Second") {
      return `Keep pushing, ${name}. ${formatGPA(Math.max(0, 3.6 - cgpa))} points separates you from Upper Second.`;
    }
    return `${name}, your target is within reach. Focus on your heaviest courses.`;
  }

  function metricCard(label, value, mono = true) {
    return `
      <article class="metric-card">
        <p class="metric-label">${label}</p>
        <p class="metric-value ${mono ? "mono-number" : ""}">${value}</p>
      </article>
    `;
  }

  function classBadgeClass(name) {
    if (name === "First Class") {
      return "badge-first";
    }
    if (name === "Upper Second") {
      return "badge-upper";
    }
    if (name === "Lower Second") {
      return "badge-lower";
    }
    return "badge-pass";
  }

  function routeRender() {
    const page = document.getElementById("page-content");
    if (!page) {
      return;
    }
    page.style.opacity = "0";
    window.setTimeout(() => {
      page.style.opacity = "1";
      if (RUNTIME.page === "dashboard") {
        renderDashboard();
      }
      if (RUNTIME.page === "grades") {
        renderSemesterTable();
      }
      if (RUNTIME.page === "forecast") {
        renderForecast();
      }
      if (RUNTIME.page === "resources") {
        renderResources();
      }
      if (RUNTIME.page === "insights") {
        renderInsights();
      }
      if (RUNTIME.page === "timetable") {
        renderTimetable();
      }
      if (RUNTIME.page === "settings") {
        renderSettings();
      }
      syncActiveNav();
    }, 150);
    renderTopBar();
  }

  function syncActiveNav() {
    const mobileMorePanel = document.getElementById("mobile-more-panel");
    const moreOpen = mobileMorePanel && !mobileMorePanel.classList.contains("hidden");
    const isLowFrequencyPage = ["resources", "insights", "settings"].includes(RUNTIME.page);

    document.querySelectorAll(".nav-item").forEach((item) => {
      item.classList.toggle("active", item.dataset.page === RUNTIME.page);
    });
    document.querySelectorAll(".mobile-tab").forEach((item) => {
      if (item.dataset.page === "more") {
        item.classList.toggle("active", moreOpen || isLowFrequencyPage);
        return;
      }
      item.classList.toggle("active", item.dataset.page === RUNTIME.page);
    });
  }

  function safeStorageSet(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (_err) {
      // Ignore quota or private-mode storage errors.
    }
  }

  function getOrCreateUserId() {
    let found = localStorage.getItem(STORAGE_KEYS.userId);
    if (found) {
      return found;
    }
    found = `${pick(ADJECTIVES)}-${pick(ANIMALS)}-${Math.floor(1000 + Math.random() * 9000)}`;
    safeStorageSet(STORAGE_KEYS.userId, found);
    return found;
  }

  function pick(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function escapeHtml(value) {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };
    return String(value).replace(/[&<>"']/g, (char) => map[char]);
  }

  async function importFromInput(input) {
    const file = input.files && input.files[0];
    if (!file) {
      return;
    }
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      if (!parsed || !parsed.grades || !parsed.currentSem) {
        showToast("Invalid file.", "error");
        return;
      }

      const nextProgram = resolveProgramKey(parsed.program);
      const clean = defaultState(nextProgram);
      syncProgramContext(nextProgram);

      state = {
        ...clean,
        ...parsed,
        program: nextProgram,
        userId: parsed.userId || state.userId || getOrCreateUserId(),
        grades: {
          ...clean.grades,
          ...(parsed.grades || {})
        },
        forecast: Array.isArray(parsed.forecast) ? parsed.forecast : []
      };

      state.currentSem = SEM_ORDER.includes(state.currentSem) ? state.currentSem : SEM_ORDER[0];
      RUNTIME.timetableSem = state.currentSem;

      SEM_ORDER.forEach((semKey) => {
        CURRICULUM[semKey].courses.forEach((course) => {
          const value = state.grades[semKey][course.code];
          state.grades[semKey][course.code] = GRADE_LIST.includes(value) ? value : "";
        });
      });

      state.forecast = state.forecast
        .filter((row) => row && SEM_ORDER.includes(row.semKey) && GRADE_MAP.hasOwnProperty(row.grade))
        .filter((row) => CURRICULUM[row.semKey].courses.some((course) => course.code === row.courseCode))
        .map((row) => ({
          id: row.id || `forecast_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
          semKey: row.semKey,
          courseCode: row.courseCode,
          grade: row.grade
        }));

      saveState();
      showToast("Import successful.", "success");
      routeRender();
    } catch (_err) {
      showToast("Import failed.", "error");
    }
  }

  function generateRecoveryPhrase() {
    const words = [];
    for (let i = 0; i < 12; i += 1) {
      words.push(pick(WORDLIST));
    }
    return words.join(" ");
  }

  async function onboardingFlow() {
    const overlay = document.getElementById("onboarding-overlay");
    if (!overlay) {
      return;
    }

    overlay.classList.remove("hidden");

    let step = 1;
    let tempProgram = resolveProgramKey(state && state.program);
    let tempName = "";
    let tempSem = PROGRAMS[tempProgram].semOrder[0];
    let tempPin = "";
    const tempUserId = getOrCreateUserId();
    const phrase = generateRecoveryPhrase();

    function draw() {
      if (step === 1) {
        overlay.innerHTML = `
          <div class="modal-card">
            <h2>Choose your program</h2>
            <p>Select your degree first so we load the right course units and semesters.</p>
            <div class="pill-row onboard-sem-grid">
              ${Object.values(PROGRAMS).map((program) => `<button class="pill ${program.key === tempProgram ? "active" : ""}" data-program="${program.key}">${program.shortName}</button>`).join("")}
            </div>
            <div class="mt-12"><button class="btn btn-primary" data-step="next-1">Continue →</button></div>
          </div>
        `;
      }

      if (step === 2) {
        overlay.innerHTML = `
          <div class="modal-card">
            <h2>Welcome to Grade Tracker</h2>
            <p>Program selected: ${PROGRAMS[tempProgram].displayName}</p>
            <label>What's your first name?</label>
            <input id="onboard-name" type="text" maxlength="30" value="${escapeHtml(tempName)}">
            <div class="mt-12"><button class="btn btn-primary" data-step="next-2">Continue →</button></div>
          </div>
        `;
      }

      if (step === 3) {
        overlay.innerHTML = `
          <div class="modal-card">
            <h2>Which semester are you currently in?</h2>
            <div class="pill-row onboard-sem-grid">
              ${PROGRAMS[tempProgram].semOrder.map((sem) => `<button class="pill ${sem === tempSem ? "active" : ""}" data-sem="${sem}">${sem}</button>`).join("")}
            </div>
            <div class="mt-12"><button class="btn btn-primary" data-step="next-3">Continue →</button></div>
          </div>
        `;
      }

      if (step === 4) {
        overlay.innerHTML = `
          <div class="modal-card">
            <h2>Set a 4-digit PIN to protect your data</h2>
            <p>Your data never leaves this device.</p>
            <label>PIN</label>
            <input id="onboard-pin" type="password" maxlength="4" inputmode="numeric">
            <label>Confirm PIN</label>
            <input id="onboard-pin-confirm" type="password" maxlength="4" inputmode="numeric">
            <p>Your anonymous ID: ${tempUserId}</p>
            <p>${phrase}</p>
            <label class="onboard-check-row" for="onboard-phrase-check">
              <input id="onboard-phrase-check" class="onboard-check-input" type="checkbox">
              <span>I've saved my recovery phrase</span>
            </label>
            <p>To continue, you must check the white box above.</p>
            <div class="mt-12"><button id="onboard-start" class="btn btn-primary" data-step="finish" disabled>Get started →</button></div>
          </div>
        `;
      }
    }

    draw();

    overlay.addEventListener("click", async (event) => {
      const btn = event.target.closest("button[data-step]");
      const semBtn = event.target.closest("button[data-sem]");
      const programBtn = event.target.closest("button[data-program]");

      if (programBtn) {
        tempProgram = resolveProgramKey(programBtn.dataset.program);
        tempSem = PROGRAMS[tempProgram].semOrder[0];
        draw();
        return;
      }

      if (semBtn) {
        tempSem = semBtn.dataset.sem;
        draw();
        return;
      }
      if (!btn) {
        return;
      }

      if (btn.dataset.step === "next-1") {
        step = 2;
        draw();
      }

      if (btn.dataset.step === "next-2") {
        const input = document.getElementById("onboard-name");
        if (!input || !input.value.trim()) {
          showToast("Please enter your first name.", "error");
          return;
        }
        tempName = input.value.trim();
        step = 3;
        draw();
      }

      if (btn.dataset.step === "next-3") {
        step = 4;
        draw();
        const checkbox = document.getElementById("onboard-phrase-check");
        const pin = document.getElementById("onboard-pin");
        const confirm = document.getElementById("onboard-pin-confirm");
        const startBtn = document.getElementById("onboard-start");
        const checkReady = () => {
          const ok = checkbox.checked && /^\d{4}$/.test(pin.value) && pin.value === confirm.value;
          startBtn.disabled = !ok;
          if (ok) {
            tempPin = pin.value;
          }
        };
        checkbox.addEventListener("change", checkReady);
        pin.addEventListener("input", checkReady);
        confirm.addEventListener("input", checkReady);
      }

      if (btn.dataset.step === "finish") {
        if (!/^\d{4}$/.test(tempPin)) {
          showToast("PIN must be exactly 4 digits.", "error");
          return;
        }

        const fresh = defaultState(tempProgram);
        state = {
          ...fresh,
          name: tempName,
          currentSem: tempSem,
          userId: tempUserId,
          recoveryPhrase: phrase,
          pin: await hashPIN(tempPin),
          recoveryHash: await hashPIN(phrase)
        };
        syncProgramContext(state.program);
        saveState();

        overlay.classList.add("hidden");
        overlay.innerHTML = "";
        showPinOverlay();
      }
    }, { once: false });
  }

  function showPinOverlay() {
    const overlay = document.getElementById("pin-overlay");
    const app = document.getElementById("app");
    if (!overlay || !app) {
      return;
    }
    if (!state.pin) {
      overlay.classList.add("hidden");
      app.classList.remove("hidden");
      return;
    }

    RUNTIME.pinBuffer = "";
    RUNTIME.failedPinAttempts = 0;

    function draw(message = "Enter PIN") {
      overlay.classList.remove("hidden");
      app.classList.add("hidden");

      overlay.innerHTML = `
        <div class="modal-card">
          <h2>${getActiveProgram().shortName} Grade Tracker</h2>
          <p>${message}</p>
          <div class="pin-dots">
            ${[0, 1, 2, 3].map((i) => `<span class="pin-dot ${i < RUNTIME.pinBuffer.length ? "filled" : ""}"></span>`).join("")}
          </div>
          <div class="numpad">
            ${[1,2,3,4,5,6,7,8,9,"←",0,"Clear"].map((v) => `<button class="btn btn-secondary" data-key="${v}">${v}</button>`).join("")}
          </div>
          <div id="pin-recovery-zone" class="mt-12 ${RUNTIME.failedPinAttempts >= 3 ? "" : "hidden"}">
            <p>Use recovery phrase</p>
            <input id="recover-phrase" placeholder="Enter 12-word phrase">
            <div class="field-grid mt-8">
              <input id="recover-new-pin" type="password" maxlength="4" placeholder="New PIN">
              <input id="recover-confirm-pin" type="password" maxlength="4" placeholder="Confirm new PIN">
            </div>
            <div class="mt-8"><button class="btn btn-primary btn-sm" data-key="recover">Reset with phrase</button></div>
          </div>
        </div>
      `;
    }

    draw();

    overlay.onclick = async (event) => {
      const keyBtn = event.target.closest("button[data-key]");
      if (!keyBtn) {
        return;
      }
      const key = keyBtn.dataset.key;

      if (key === "Clear") {
        RUNTIME.pinBuffer = "";
        draw();
        return;
      }
      if (key === "←") {
        RUNTIME.pinBuffer = RUNTIME.pinBuffer.slice(0, -1);
        draw();
        return;
      }

      if (key === "recover") {
        const phraseInput = document.getElementById("recover-phrase");
        const newPinInput = document.getElementById("recover-new-pin");
        const confirmInput = document.getElementById("recover-confirm-pin");
        if (!phraseInput || !newPinInput || !confirmInput) {
          return;
        }
        const phrase = phraseInput.value.trim().toLowerCase().replace(/\s+/g, " ");
        const phraseHash = await hashPIN(phrase);
        if (phraseHash !== state.recoveryHash) {
          showToast("Recovery phrase is incorrect.", "error");
          return;
        }
        if (!/^\d{4}$/.test(newPinInput.value) || newPinInput.value !== confirmInput.value) {
          showToast("New PIN must be 4 digits and match confirmation.", "error");
          return;
        }
        state.pin = await hashPIN(newPinInput.value);
        saveState();
        overlay.classList.add("hidden");
        app.classList.remove("hidden");
        showToast("PIN reset successful.", "success");
        return;
      }

      if (/^\d$/.test(key) && RUNTIME.pinBuffer.length < 4) {
        RUNTIME.pinBuffer += key;
      }

      if (RUNTIME.pinBuffer.length === 4) {
        const hash = await hashPIN(RUNTIME.pinBuffer);
        if (hash === state.pin) {
          overlay.classList.add("hidden");
          app.classList.remove("hidden");
          return;
        }
        RUNTIME.failedPinAttempts += 1;
        RUNTIME.pinBuffer = "";
        draw("Incorrect PIN. Try again.");
      } else {
        draw();
      }
    };
  }

  // ╔══════════════════════════════════════════╗
  // ║  INIT                                    ║
  // ╚══════════════════════════════════════════╝
  document.addEventListener("DOMContentLoaded", async () => {
    loadState();
    initChart();
    bindNav();
    bindGradeInputs();
    bindForecastEvents();
    bindSettingsEvents();
    bindUtilEvents();

    if (!state.name) {
      await onboardingFlow();
    }

    const app = document.getElementById("app");
    if (app) {
      app.classList.remove("hidden");
    }

    renderAll();
    routeRender();

    if (state.pin) {
      showPinOverlay();
    }
  });
})();