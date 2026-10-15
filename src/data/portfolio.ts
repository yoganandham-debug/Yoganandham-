import type {
  PersonalInfo,
  SnapshotMetric,
  SkillCategoryGroup,
  ProjectCaseStudy,
  WorkflowStep,
  EducationItem,
  CertificationItem,
  ExperienceItem,
  CodingProfile,
  AchievementItem
} from '../types';

export const personalInfo: PersonalInfo = {
  name: "YOGHANANDHAM E",
  title: "Data Analyst",
  targetRoles: [
    "Data Analyst",
    "Junior Data Analyst",
    "BI Analyst",
    "Reporting Analyst",
    "Data Visualization Analyst"
  ],
  dynamicTitles: [
    "Data Analyst",
    "Business Intelligence Practitioner",
    "SQL & Python Analytics Enthusiast",
    "Data Visualization & KPI Designer"
  ],
  location: "Ranipet, Tamil Nadu, India",
  phone: "+91-6374146626",
  email: "yoganandhame23@gmail.com",
  linkedin: "https://linkedin.com/in/yourname",
  github: "https://github.com/yourusername",
  availability: "Immediate",
  relocation: "Yes (Open to Relocation)",
  languages: ["English", "Tamil"],
  summary:
    "Detail-oriented and analytical fresher with a strong foundation in statistics, SQL, and data visualization, seeking a Data Analyst role. Skilled in transforming raw data into actionable insights using Excel, SQL, Python, and Power BI/Tableau. Completed academic and self-driven projects involving data cleaning, exploratory data analysis, and dashboard design. Strong problem-solving ability with a keen interest in business intelligence and data-driven decision making.",
  careerObjective:
    "To leverage structured data analysis, relational query optimization, and business intelligence dashboards to help organizations uncover operational trends, optimize KPIs, and drive evidence-backed decision making."
};

export const snapshotMetrics: SnapshotMetric[] = [
  {
    id: "records",
    label: "Records Analyzed",
    value: "50,000+",
    subtext: "Retail sales transaction data processed",
    iconName: "Database",
    accent: "cyan"
  },
  {
    id: "accuracy",
    label: "Model Accuracy",
    value: "82%",
    subtext: "Logistic regression churn baseline model",
    iconName: "Target",
    accent: "emerald"
  },
  {
    id: "inventory",
    label: "Inventory Impact",
    value: "12%",
    subtext: "Planning accuracy optimization uncovered",
    iconName: "TrendingUp",
    accent: "amber"
  },
  {
    id: "leetcode",
    label: "LeetCode Solved",
    value: "200+",
    subtext: "Problems mastered in SQL & Python",
    iconName: "Code2",
    accent: "indigo"
  },
  {
    id: "certifications",
    label: "Certifications",
    value: "02",
    subtext: "TATA GenAI Analytics & Coursera SQL",
    iconName: "Award",
    accent: "cyan"
  },
  {
    id: "internship",
    label: "Internship",
    value: "IIT Bombay",
    subtext: "SINE EduPyramids Tech Incubation",
    iconName: "Building2",
    accent: "blue"
  }
];

export const skillCategories: SkillCategoryGroup[] = [
  {
    id: "languages-query",
    title: "Languages & Query Tools",
    iconName: "FileCode",
    skills: [
      {
        name: "SQL",
        level: "Intermediate",
        category: "Query Language",
        iconName: "Database",
        description: "Joins, complex subqueries, window functions, and data aggregation across relational schemas.",
        tags: ["Joins", "Subqueries", "Window Functions", "Aggregation"]
      },
      {
        name: "Python",
        level: "Intermediate",
        category: "Programming",
        iconName: "Terminal",
        description: "Data manipulation and computational analytics utilizing Pandas and NumPy.",
        tags: ["Pandas", "NumPy", "EDA", "Automation"]
      },
      {
        name: "Excel",
        level: "Intermediate",
        category: "Spreadsheet Analytics",
        iconName: "Sheet",
        description: "Advanced analytics with VLOOKUP, Pivot Tables, summary metrics, and automation Macros.",
        tags: ["VLOOKUP", "Pivot Tables", "Macros", "Data Cleanup"]
      }
    ]
  },
  {
    id: "visualization",
    title: "Visualization & BI Tools",
    iconName: "BarChart3",
    skills: [
      {
        name: "Power BI",
        level: "Working Knowledge",
        category: "Business Intelligence",
        iconName: "PieChart",
        description: "Interactive dashboard creation, KPI tracking, revenue trends, and customer segmentation visuals.",
        tags: ["Interactive Dashboards", "KPI Cards", "Segmentation"]
      },
      {
        name: "Tableau",
        level: "Working Knowledge",
        category: "Data Visualization",
        iconName: "AreaChart",
        description: "Visual exploration, dynamic charts, regional breakdowns, and executive presentation storytelling.",
        tags: ["Worksheets", "Dashboards", "Visual Storytelling"]
      },
      {
        name: "Matplotlib & Seaborn",
        level: "Working Knowledge",
        category: "Statistical Graphics",
        iconName: "LineChart",
        description: "Python-based exploratory graphs, distribution plots, correlation matrices, and categorical visualizations.",
        tags: ["Distribution Plots", "Heatmaps", "Scatter Plots"]
      }
    ]
  },
  {
    id: "databases",
    title: "Databases & Storage",
    iconName: "Server",
    skills: [
      {
        name: "MySQL",
        level: "Working Knowledge",
        category: "RDBMS",
        iconName: "HardDrive",
        description: "Relational database schema querying, indexing concepts, and dataset ingestion.",
        tags: ["Relational Schema", "DML", "DQL"]
      },
      {
        name: "PostgreSQL",
        level: "Working Knowledge",
        category: "RDBMS",
        iconName: "Server",
        description: "Analytical queries, data filtering, multi-table joins, and structured data handling.",
        tags: ["Analytical Queries", "ACID", "Complex Joins"]
      },
      {
        name: "MS SQL Server",
        level: "Working Knowledge",
        category: "Enterprise Database",
        iconName: "Boxes",
        description: "T-SQL operations, data aggregation, and extraction for business reporting pipelines.",
        tags: ["T-SQL", "Stored Data", "Reporting"]
      }
    ]
  },
  {
    id: "concepts",
    title: "Core Analytical Concepts",
    iconName: "Cpu",
    skills: [
      {
        name: "Statistics & Probability",
        level: "Working Knowledge",
        category: "Mathematics",
        iconName: "Calculator",
        description: "Descriptive metrics, variance, distribution analysis, and baseline probability modeling.",
        tags: ["Descriptive Stats", "Distributions", "Probability"]
      },
      {
        name: "Data Cleaning & EDA",
        level: "Intermediate",
        category: "Data Wrangling",
        iconName: "Filter",
        description: "Handling missing values, outlier detection, deduplication, and categorical encoding.",
        tags: ["Missing Values", "Outliers", "Encoding"]
      },
      {
        name: "A/B Testing & Hypothesis",
        level: "Working Knowledge",
        category: "Experimentation",
        iconName: "GitCompare",
        description: "Comparative testing logic, statistical significance concepts, and test group evaluation.",
        tags: ["Controlled Experiments", "Significance", "Variant Analysis"]
      },
      {
        name: "Data Modeling & KPI Reporting",
        level: "Working Knowledge",
        category: "BI Foundations",
        iconName: "Activity",
        description: "Structuring metric hierarchies, building executive KPI scorecards, and tracking business health.",
        tags: ["Dimensional Modeling", "Executive Scorecards", "KPIs"]
      }
    ]
  },
  {
    id: "tools",
    title: "Ecosystem & Other Tools",
    iconName: "Wrench",
    skills: [
      {
        name: "Jupyter Notebook",
        level: "Intermediate",
        category: "Environment",
        iconName: "BookOpen",
        description: "Interactive exploratory data analysis, documentation, and step-by-step model validation.",
        tags: ["Notebooks", "Markdown", "Reproducible Research"]
      },
      {
        name: "Google Sheets",
        level: "Intermediate",
        category: "Cloud Sheets",
        iconName: "Layers",
        description: "Collaborative data compilation, formulas, pivot summarization, and cloud reporting.",
        tags: ["Cloud Reporting", "Formulas", "Collaboration"]
      },
      {
        name: "Git & GitHub",
        level: "Working Knowledge",
        category: "Version Control",
        iconName: "GitBranch",
        description: "Version tracking, repository management, reproducible project code, and analytics sharing.",
        tags: ["Version Control", "Repositories", "Documentation"]
      },
      {
        name: "Scikit-Learn",
        level: "Familiar",
        category: "Machine Learning",
        iconName: "Boxes",
        description: "Implementation of baseline predictive algorithms (Logistic Regression) and accuracy evaluation.",
        tags: ["Logistic Regression", "Train/Test Split", "Model Metrics"]
      }
    ]
  }
];

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    id: "retail-sales-dashboard",
    title: "Retail Sales Performance Dashboard",
    category: "Business Intelligence & SQL Analytics",
    tools: ["Power BI", "SQL", "Excel"],
    dataset: "Retail Enterprise Transaction Dataset (50,000+ Records)",
    recordsAnalyzed: "50,000+ Records",
    businessProblem:
      "Retail managers required visibility into regional revenue distributions, volatile profit margins, and underperforming product categories to eliminate inventory overstocking and stockouts.",
    process: [
      "Extracted and aggregated 50,000+ transaction records from relational tables via SQL",
      "Applied advanced SQL constructs including window functions, multi-table joins, and subqueries",
      "Transformed and preprocessed the transactional fields inside Excel using pivot summaries",
      "Engineered an interactive Power BI dashboard featuring dynamic KPI tiles and drill-downs",
      "Identified regional demand bottlenecks and delivered actionable inventory optimization strategies"
    ],
    keyFeatures: [
      "Interactive Power BI Dashboard with real-time KPI scorecards",
      "Revenue and profit margin tracking segmented by geographical region",
      "Product category breakdown highlighting top-quartile margin contributors",
      "Customer segmentation metrics for targeted merchandising strategies",
      "Optimized SQL extraction queries ensuring minimal query latency"
    ],
    keyInsights: [
      "Sales revenue concentrated heavily in top regional hubs, requiring localized stock buffers",
      "Specific high-volume product categories were experiencing margin erosion due to unoptimized discounts",
      "Identified critical inventory misalignments that, when corrected, support a 12% improvement in inventory planning accuracy"
    ],
    outcome:
      "Delivered an intuitive executive dashboard that empowers store managers to audit category profitability and directly supports a 12% boost in inventory planning accuracy.",
    accuracyOrImpact: "12% Improvement in Inventory Planning Accuracy",
    githubUrl: "https://github.com/yourusername",
    dashboardAvailable: true
  },
  {
    id: "customer-churn-analysis",
    title: "Customer Churn Analysis & Driver Prediction",
    category: "Predictive Analytics & Exploratory Data Analysis",
    tools: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
    dataset: "Telecom Customer Behavior Dataset",
    recordsAnalyzed: "Customer Behavioral Records",
    businessProblem:
      "Telecom leadership faced subscriber turnover without clear understanding of what contractual or usage behaviors were accelerating customer departure.",
    process: [
      "Ingested raw customer telecom dataset into Python environment via Pandas",
      "Conducted extensive data cleaning: handled missing values, resolved outliers, and encoded categorical features",
      "Conducted thorough Exploratory Data Analysis (EDA) to map correlations between tenure, contract type, and churn",
      "Crafted intuitive Matplotlib visualizations tailored to communicate findings to non-technical stakeholders",
      "Trained and evaluated a Logistic Regression baseline model to test churn predictability"
    ],
    keyFeatures: [
      "End-to-end data preprocessing pipeline with categorical encoding and outlier management",
      "Correlation analysis pinpointing key customer dissatisfaction and attrition drivers",
      "Stakeholder-friendly visualizations detailing churn distributions across tenure brackets",
      "Baseline classification model achieving 82% classification accuracy"
    ],
    keyInsights: [
      "Month-to-month contract holders exhibited significantly higher churn risk compared to annual subscribers",
      "Tenure length and customer support ticket frequency served as prime early-warning indicators",
      "Baseline logistic regression achieved 82% accuracy, proving behavioral attributes reliably distinguish at-risk customers"
    ],
    outcome:
      "Successfully translated complex behavioral variables into actionable retention levers, achieving 82% baseline model accuracy for subscriber churn classification.",
    accuracyOrImpact: "82% Classification Accuracy",
    githubUrl: "https://github.com/yourusername",
    dashboardAvailable: true
  }
];

export const analyticsWorkflow: WorkflowStep[] = [
  {
    step: 1,
    title: "Frame & Understand",
    action: "Business Problem Definition",
    description: "Clarify organizational objectives, identify key stakeholder questions, and define measurable KPIs before writing any queries.",
    tools: ["Stakeholder Alignment", "KPI Scoping"],
    deliverable: "Problem Statement & KPI Definition"
  },
  {
    step: 2,
    title: "Extract & Ingest",
    action: "Data Collection & Querying",
    description: "Extract structured data from relational databases using optimized SQL queries, joins, and aggregations.",
    tools: ["SQL", "PostgreSQL", "MySQL", "MS SQL Server"],
    deliverable: "Raw Data Extraction & Query Logs"
  },
  {
    step: 3,
    title: "Cleanse & Validate",
    action: "Data Preprocessing",
    description: "Handle missing values, isolate outliers, resolve deduplication, and execute categorical encoding for consistency.",
    tools: ["Python (Pandas)", "Excel", "Data Validation"],
    deliverable: "Cleaned, Analysis-Ready Dataset"
  },
  {
    step: 4,
    title: "Explore & Formulate",
    action: "Exploratory Data Analysis (EDA)",
    description: "Calculate descriptive statistics, detect distribution skews, and test exploratory hypotheses across customer or sales cohorts.",
    tools: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
    deliverable: "Correlation Matrix & Trend Charts"
  },
  {
    step: 5,
    title: "Model & Evaluate",
    action: "Analytical & Predictive Modeling",
    description: "Apply statistical baselines and classification models (e.g., Logistic Regression) to validate outcome predictability.",
    tools: ["Scikit-learn", "Statistical Modeling"],
    deliverable: "Evaluated Model & Accuracy Metrics"
  },
  {
    step: 6,
    title: "Design & Visualize",
    action: "Interactive Dashboard Development",
    description: "Build intuitive, interactive dashboards with executive KPI cards, drill-downs, and clean visual hierarchies.",
    tools: ["Power BI", "Tableau", "Excel Charts"],
    deliverable: "Interactive BI Dashboard"
  },
  {
    step: 7,
    title: "Synthesize & Impact",
    action: "Business Storytelling & Action",
    description: "Synthesize findings into high-impact business recommendations that directly guide inventory, retention, or growth decisions.",
    tools: ["Executive Presentations", "KPI Reporting"],
    deliverable: "Actionable Insights & ROI Impact"
  }
];

export const educationHistory: EducationItem[] = [
  {
    degree: "Master of Computer Science (M.Sc)",
    institution: "Sri Sankara Arts and Science College",
    location: "Kanchipuram, Tamil Nadu",
    period: "2021 - 2024",
    cgpa: "7.1",
    scale: "10",
    degreeType: "Postgraduate",
    highlights: [
      "Advanced computational logic, relational database theory, and data structures",
      "Hands-on academic projects in algorithmic data manipulation and applied computing",
      "Completed degree with cumulative 7.1 / 10 CGPA"
    ]
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Sri Sankara Arts and Science College",
    location: "Kanchipuram, Tamil Nadu",
    period: "2024 - 2026",
    cgpa: "7.5",
    scale: "10",
    degreeType: "Undergraduate",
    highlights: [
      "Rigorous foundations in computer applications, programming paradigms, and database management",
      "Practical coursework in software logic, database querying, and statistics",
      "Maintained strong academic record with 7.5 / 10 CGPA"
    ]
  }
];

export const certifications: CertificationItem[] = [
  {
    id: "tata-genai",
    title: "TATA GenAI Powered Data Analytics Job Simulation",
    organization: "TATA / Forage",
    type: "Industry Simulation Certification",
    topics: [
      "Data Analytics Simulation",
      "GenAI Applications in Analytics",
      "Business Intelligence Problem Solving",
      "Executive Insight Delivery"
    ],
    credentialNote: "Completed job simulation focused on data analytics workflows and enterprise insights"
  },
  {
    id: "coursera-sql",
    title: "SQL for Data Science",
    organization: "Coursera",
    type: "Professional Course Certification",
    topics: [
      "Relational Database Querying",
      "Filtering, Sorting & Calculating Data",
      "Subqueries & Multiple Table Joins",
      "Data Aggregation & Analysis"
    ],
    credentialNote: "Comprehensive verification of SQL data manipulation, table joins, and analytical queries"
  }
];

export const experienceList: ExperienceItem[] = [
  {
    role: "Analytics & Software Intern",
    organization: "EduPyramids, SINE, IIT Bombay",
    division: "Society for Innovation and Entrepreneurship (SINE)",
    period: "Sep 2025 - Nov 2025",
    type: "Internship",
    responsibilities: [
      "Contributed to Java Business Application components and backend logic",
      "Worked with Python 3.4.3 for structured computational scripting and data processing tasks",
      "Engaged in technical requirements analysis and workflow implementations under IIT Bombay incubator mentorship"
    ],
    technologies: ["Python 3.4.3", "Java Business Application", "Problem Solving"]
  }
];

export const codingProfiles: CodingProfile[] = [
  {
    platform: "LeetCode",
    username: "200+ Solved",
    highlight: "SQL & Python Problem Solving",
    metrics: "200+ Problems",
    details: "Consistent problem solving in SQL queries, data transformations, and Python programming logic.",
    url: "https://leetcode.com",
    icon: "Code"
  },
  {
    platform: "GitHub",
    username: "yourusername",
    highlight: "Code Repositories & Analytics Projects",
    metrics: "Project Codebase",
    details: "Repositories documenting SQL scripts, Python EDA notebooks, and dashboard documentation.",
    url: "https://github.com/yourusername",
    icon: "GitBranch"
  },
  {
    platform: "LinkedIn",
    username: "yourname",
    highlight: "Professional Analytics Network",
    metrics: "Connected",
    details: "Engaging with data professionals, BI leaders, and sharing analytical case studies.",
    url: "https://linkedin.com/in/yourname",
    icon: "Linkedin"
  }
];

export const achievements: AchievementItem[] = [
  {
    title: "Inter-College Data Analytics Hackathon",
    subtitle: "Participant & Analytics Competitor",
    date: "March 2026",
    description: "Competed in high-intensity inter-collegiate analytics hackathon, tackling timed real-world dataset challenges and delivering visual insights.",
    category: "Hackathon",
    icon: "Trophy"
  },
  {
    title: "200+ LeetCode Milestone",
    subtitle: "SQL & Python Algorithmic Proficiency",
    date: "Continuous Practice",
    description: "Solved over 200 coding problems strengthening proficiency in complex SQL joins, window functions, and algorithmic Python.",
    category: "Coding",
    icon: "Target"
  },
  {
    title: "Active Member - College Analytics Club",
    subtitle: "Sri Sankara Arts and Science College",
    date: "Academic Term",
    description: "Active participant in peer workshops, analytics discussions, and collaborative dashboard development sessions.",
    category: "Community",
    icon: "Users"
  }
];

// Realistic project visual data for Interactive Visualization Showcase
// Reflects the Retail Sales Dashboard (50,000+ records) and Customer Churn Model (82% accuracy)
export const showcaseVisualData = {
  retailRegionalData: [
    { region: "South Zone", revenue: 42000, profit: 9200, margin: "21.9%" },
    { region: "North Zone", revenue: 38500, profit: 7900, margin: "20.5%" },
    { region: "West Zone", revenue: 31200, profit: 5800, margin: "18.6%" },
    { region: "East Zone", revenue: 26800, profit: 4600, margin: "17.2%" },
    { region: "Central Zone", revenue: 19500, profit: 3100, margin: "15.9%" }
  ],
  retailCategoryData: [
    { category: "Electronics", salesShare: 38, inventoryTurnover: 8.4 },
    { category: "Apparel & Fashion", salesShare: 27, inventoryTurnover: 6.9 },
    { category: "Home & Kitchen", salesShare: 20, inventoryTurnover: 5.8 },
    { category: "Office Supplies", salesShare: 15, inventoryTurnover: 4.2 }
  ],
  churnDriverData: [
    { factor: "Month-to-Month Contract", importance: 88, riskLevel: "High Risk" },
    { factor: "Tenure < 12 Months", importance: 76, riskLevel: "High Risk" },
    { factor: "Electronic Check Billing", importance: 62, riskLevel: "Medium Risk" },
    { factor: "High Support Ticket Count", importance: 58, riskLevel: "Medium Risk" },
    { factor: "Lack of Tech Support", importance: 49, riskLevel: "Moderate" }
  ],
  churnModelConfusionData: [
    { metric: "Baseline Accuracy", value: 82, benchmark: 70 },
    { metric: "Precision (Churn)", value: 78, benchmark: 65 },
    { metric: "Recall (At-Risk)", value: 84, benchmark: 68 },
    { metric: "ROC-AUC Score", value: 85, benchmark: 72 }
  ]
};
