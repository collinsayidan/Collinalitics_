export const projectData = {
  "analytics-dashboard": {
    title: "Revenue Intelligence Dashboard",
    image: "/projects/analytics.png",
    tech: ["Power BI", "SQL", "DAX"],
    description: `
Project Overview:
Developed a dynamic Power BI dashboard that consolidated data from multiple sources to provide actionable insights into revenue streams, customer behavior, and sales performance. The dashboard featured interactive visualizations, drill-down capabilities, and automated data refreshes to ensure up-to-date information for decision-makers.

Challenge:
Leadership lacked real-time visibility into revenue performance across regions, products, and customer segments. Reporting was manual, inconsistent, and required multiple spreadsheets, making it difficult to identify trends or take timely action.

Role:
Lead Analytics Consultant responsible for data modeling, DAX measure development, dashboard design, and stakeholder alignment.

Data Sources:
• SQL Server (fact tables, dimension tables)
• CRM exports (customer attributes)
• Finance spreadsheets (targets, budgets)

Tools & Technologies:
Power BI, SQL, DAX, Power Query, Data Modeling (Star Schema)

Process:
1. Data Collection
   - Connected to SQL Server and imported fact_sales, dim_customer, dim_product, and dim_region.
   - Standardized CRM and finance spreadsheets using Power Query.

2. Data Cleaning
   - Resolved inconsistent customer IDs across systems.
   - Removed duplicate transactions and corrected date hierarchies.
   - Normalized product categories for consistent reporting.

3. Data Modeling
   - Designed a clean star schema with relationships based on surrogate keys.
   - Built reusable DAX measures for revenue, YoY growth, retention, and customer lifetime value.

4. Analysis
   - Identified top-performing regions and underperforming product lines.
   - Segmented customers by revenue contribution and churn risk.
   - Analyzed seasonality and promotional impact.

5. Visualization
   - Designed an interactive Power BI dashboard with drill-throughs, bookmarks, and KPI cards.
   - Created a clean, executive-friendly layout with consistent color coding and typography.

Key Insights:
• 62% of total revenue came from only 18% of customers (Pareto pattern).
• Region C underperformed due to a 14% decline in repeat purchases.
• Seasonal dips in Q3 were linked to supply chain delays.
• High-value customers showed strong retention but low engagement in new product lines.

Business Impact:
• Reduced reporting time from 6 hours per week to under 10 minutes.
• Enabled leadership to make data-driven decisions during monthly reviews.
• Identified £1.2M in potential revenue recovery opportunities.
• Improved visibility led to a 9% increase in quarterly revenue forecasting accuracy.
`,
    gallery: [
      "/projects/analytics-1.png",
      "/projects/analytics-2.png",
      "/projects/analytics-3.png",
    ],
    video: undefined,
  },

  "system-automation": {
    title: "Data Pipeline Automation",
    image: "/projects/automation.png",
    tech: ["Python", "Bash", "Azure"],
    description: `
Business Problem:
The reporting team relied on manual data extraction, transformation, and loading processes across multiple systems. These tasks were time‑consuming, error‑prone, and often caused delays in weekly and monthly reporting cycles.

Role:
System Engineer and Automation Lead responsible for designing, scripting, and deploying automated workflows that improved data reliability and reduced manual workload.

Data Sources:
• SQL Server (transactional data)
• CSV/Excel files from shared drives
• API endpoints for external data
• Azure Blob Storage

Tools & Technologies:
Python, Bash, Azure Functions, Azure Storage, Cron Jobs, SQL, Logging & Monitoring

Process:
1. Data Collection
   - Automated extraction from SQL Server using scheduled Python scripts.
   - Pulled external data via REST APIs with authentication tokens.
   - Ingested CSV/Excel files from shared drives into Azure Blob Storage.

2. Data Cleaning
   - Standardized inconsistent column names and data types.
   - Implemented validation rules for missing values and schema mismatches.
   - Logged anomalies for review by the analytics team.

3. Workflow Automation
   - Built a modular Python ETL pipeline with reusable functions.
   - Scheduled daily and hourly jobs using Cron and Azure Functions.
   - Added retry logic, error handling, and notification alerts.

4. Integration
   - Loaded cleaned data into SQL tables for Power BI consumption.
   - Synced processed files to Azure Storage for archival.
   - Integrated with existing reporting workflows without downtime.

5. Monitoring & Reliability
   - Implemented logging for each pipeline stage.
   - Added email/Teams alerts for failures or unusual patterns.
   - Created dashboards to track pipeline health and performance.

Key Insights:
• 70% of manual workload was caused by repetitive file handling and SQL exports.
• Inconsistent file formats were the main source of reporting delays.
• API data had the highest failure rate due to token expiration and rate limits.

Business Impact:
• Reduced manual data preparation time by 70%.
• Improved data freshness from weekly to daily.
• Eliminated recurring reporting errors caused by manual processes.
• Increased reliability of downstream dashboards and analytics.
• Freed up the analytics team to focus on insights instead of data wrangling.
`,
    gallery: [
      "/projects/automation-1.png",
      "/projects/automation-2.png",
    ],
    video: undefined,
  },

  "customer-churn-prediction": {
    title: "Customer Churn Prediction Model",
    image: "/projects/churn.png",
    tech: ["Python", "Pandas", "Scikit-Learn"],
    description: `
Business Problem:
The company experienced a rising churn rate but lacked a reliable way to identify at-risk customers early. Existing retention strategies were reactive, generic, and costly, resulting in lost revenue and inefficient marketing spend.

Role:
Data Analyst & Machine Learning Practitioner responsible for data preparation, feature engineering, model development, evaluation, and insight communication.

Data Sources:
• Customer demographics
• Transaction history
• Engagement metrics (logins, activity frequency)
• Support interactions
• Subscription lifecycle data

Tools & Technologies:
Python, Pandas, NumPy, Scikit-Learn, Matplotlib, Seaborn, Jupyter Notebook

Process:
1. Data Collection
   - Imported structured customer datasets from SQL and CSV files.
   - Merged multiple tables into a unified analytical dataset.

2. Data Cleaning
   - Handled missing values using median and mode imputation.
   - Removed duplicate customer records.
   - Normalized skewed numerical features.

3. Feature Engineering
   - Created new variables such as:
     • Tenure length
     • Average monthly spend
     • Days since last login
     • Support ticket frequency
   - Encoded categorical variables using one-hot encoding.
   - Scaled numerical features for model stability.

4. Modeling
   - Tested multiple algorithms: Logistic Regression, Random Forest, XGBoost.
   - Selected Random Forest for best balance of accuracy and interpretability.
   - Tuned hyperparameters using GridSearchCV.

5. Evaluation
   - Achieved:
     • 86% accuracy
     • 0.91 precision for identifying churners
     • 0.88 recall
   - Used confusion matrix, ROC curve, and feature importance analysis.

Key Insights:
• Low engagement in the first 30 days was the strongest predictor of churn.
• Customers with 3+ support tickets in a month were 2.4x more likely to churn.
• High-value customers churned less frequently but required targeted onboarding.
• Tenure under 90 days showed the highest churn probability.

Business Impact:
• Enabled proactive retention campaigns targeting high-risk customers.
• Reduced churn by an estimated 12% in pilot testing.
• Improved marketing efficiency by focusing incentives on the right segments.
• Provided leadership with a predictive framework for long-term customer strategy.
`,
    gallery: [
      "/projects/churn-1.png",
      "/projects/churn-2.png",
    ],
    video: undefined,
  },

  "marketing-performance-analytics": {
  title: "Marketing Performance Analytics",
  image: "/projects/marketing.png",
  tech: ["Power BI", "SQL", "Python"],
  description: `
Project Overview:
Developed a unified analytics solution that consolidated marketing spend, campaign performance, and customer engagement metrics across multiple channels.

Challenge:
Marketing teams lacked a single source of truth for campaign ROI, attribution, and engagement trends.

Role:
Analytics Consultant responsible for data modeling, ETL integration, dashboard design, and insight delivery.

Data Sources:
• Google Analytics
• Meta Ads Manager
• Email automation exports
• SQL Server (customer & transaction data)

Tools & Technologies:
Power BI, SQL, Python, Power Query, API Integration

Process:
1. Data Integration
   - Connected to Google Analytics and Meta Ads APIs.
   - Automated ingestion of email campaign performance.
   - Joined marketing data with customer purchase behavior.

2. Data Modeling
   - Built a star schema for campaign, channel, spend, and conversions.
   - Created DAX measures for CAC, ROAS, attribution, and funnel metrics.

3. Visualization
   - Designed a multi-page dashboard with channel comparisons, funnel drop-offs, and ROI insights.

Key Insights:
• Email campaigns delivered the highest ROAS.
• Paid social had strong reach but weak conversion.
• Multi-touch attribution revealed hidden high-value channels.

Business Impact:
• Improved marketing ROI visibility.
• Enabled data-driven budget allocation.
• Increased campaign efficiency by 18%.
`,
  gallery: [
    "/projects/marketing-1.png",
    "/projects/marketing-2.png",
  ],
  video: undefined,
},

} as const;

export type ProjectSlug = keyof typeof projectData;

export const projectSlugs = Object.keys(projectData) as ProjectSlug[];
