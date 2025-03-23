import { FaAngleDown } from "react-icons/fa6"
import { FiCheck } from "react-icons/fi"


const PLANS = [
    {
        title: "Basic",
        desc: "Free with fixed limits, or $0 / month and pay as you go",
        buttonText: "Buy now"
    },
    {
        title: "Pro",
        desc: "$19/month per member",
        buttonText: "Buy now"
    },
    {
        title: "Enterprice",
        desc: "Custom pricing",
        buttonText: "Contact Sales"
    },
]

const FEATURES = [
    {
        title: "Scale as you grow",
        features: [
            {
                title: "Members",
                desc: "Trigger deploys on Netlify or log into the Netlify platform UI. Sites connected to public repos will not have membership requirements for deploys.",
                listings: [
                    {
                        isIcon: false,
                        isNull: false,
                        info: "Limited to 1 free member, with free & unlimited Git Contributors",
                        additionalInfo: null
                    },
                    {
                        isIcon: false,
                        isNull: false,
                        info: "$19 /month per member, including active Git Contributors",
                        additionalInfo: null
                    },
                    {
                        isIcon: false,
                        isNull: false,
                        info: "Custom",
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Reviewers",
                desc: "Provide feedback with collaborative Deploy Previews.",
                listings: [
                    {
                        isIcon: false,
                        isNull: false,
                        info: "Unlimited",
                        additionalInfo: null
                    },
                    {
                        isIcon: false,
                        isNull: false,
                        info: "Unlimited",
                        additionalInfo: null
                    },
                    {
                        isIcon: false,
                        isNull: false,
                        info: "Unlimited",
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Concurrent builds",
                desc: "Run more than one build at the same time so that new commits to a project are built even if existing builds aren’t yet finished.",
                listings: [
                    {
                        isIcon: false,
                        isNull: false,
                        info: "1",
                        additionalInfo: null
                    },
                    {
                        isIcon: false,
                        isNull: false,
                        info: "3",
                        additionalInfo: "(then $40 each)"
                    },
                    {
                        isIcon: false,
                        isNull: false,
                        info: "Custom",
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Bandwidth",
                desc: null,
                listings: [
                    {
                        isIcon: false,
                        isNull: false,
                        info: "100GB /month",
                        additionalInfo: "(Starter only: then $55 per 100GB)"
                    },
                    {
                        isIcon: false,
                        isNull: false,
                        info: "1TB /month",
                        additionalInfo: "(then $55 per 100GB)"
                    },
                    {
                        isIcon: false,
                        isNull: false,
                        info: "Custom",
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Build minutes",
                desc: "The time it takes Netlify to build your site — to run site generators, compile JavaScript, and perform other tasks.",
                listings: [
                    {
                        isIcon: false,
                        isNull: false,
                        info: "300 minutes /month",
                        additionalInfo: "(Starter only: then $7 per 500)"
                    },
                    {
                        isIcon: false,
                        isNull: false,
                        info: "25k minutes /month",
                        additionalInfo: "(then $7 per 500)"
                    },
                    {
                        isIcon: false,
                        isNull: false,
                        info: "Custom",
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Websites",
                desc: "The number of your websites that Netlify will support with a single workflow for hosting, continuous integration, and deployment pipeline.",
                listings: [
                    {
                        isIcon: false,
                        isNull: false,
                        info: "500 sites",
                        additionalInfo: null
                    },
                    {
                        isIcon: false,
                        isNull: false,
                        info: "500 sites",
                        additionalInfo: null
                    },
                    {
                        isIcon: false,
                        isNull: false,
                        info: "Custom",
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Serverless functions",
                desc: "Deploy serverless functions directly within Netlify. They’re version-controlled, built, and deployed along with the rest of your Netlify site.",
                listings: [
                    {
                        isIcon: false,
                        isNull: false,
                        info: "125k per site /month",
                        additionalInfo: "(Starter only: $25+ when exceeded)"
                    },
                    {
                        isIcon: false,
                        isNull: false,
                        info: "125k per site /month",
                        additionalInfo: "($25+ when exceeded)"
                    },
                    {
                        isIcon: false,
                        isNull: false,
                        info: "Custom",
                        additionalInfo: null
                    },
                ]
            },
            {
            title: "Edge functions",
            desc: "Run JavaScript in a dedicated runtime in the Netlify Edge.",
            listings: [
                {
                    isIcon: false,
                    isNull: false,
                    info: "1M /month",
                    additionalInfo: "(Starter only: $2/m when exceeded)"
                },
                {
                    isIcon: false,
                    isNull: false,
                    info: "2M /month",
                    additionalInfo: "($2/m when exceeded)"
                },
                {
                    isIcon: false,
                    isNull: false,
                    info: "Custom",
                    additionalInfo: null
                },
            ]
            },
            {
                title: "Forms",
                desc: "Add a simple attribute to any HTML form to start receiving submissions in your Netlify site admin panel, without JavaScript or any backend coding.",
                listings: [
                    {
                        isIcon: false,
                        isNull: false,
                        info: "100 per site /month",
                        additionalInfo: "(Starter only: $19+ when exceeded)"
                    },
                    {
                        isIcon: false,
                        isNull: false,
                        info: "100 per site /month",
                        additionalInfo: "($19+ when exceeded)"
                    },
                    {
                        isIcon: false,
                        isNull: false,
                        info: "Custom",
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Site analytics",
                desc: "Data captured directly from our servers, presented simply and beautifully.",
                listings: [
                    {
                        isIcon: false,
                        isNull: false,
                        info: "$9 per site /month",
                        additionalInfo: "(Available for Starter only)"
                    },
                    {
                        isIcon: false,
                        isNull: false,
                        info: "$9 per site /month",
                        additionalInfo: null
                    },
                    {
                        isIcon: false,
                        isNull: false,
                        info: "Custom",
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Real user metrics",
                desc: "Understand site performance based on user-centric Web Vitals that rely on real user interactions with your production site.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: false,
                        isNull: false,
                        info: "7-day history",
                        additionalInfo: null
                    },
                    {
                        isIcon: false,
                        isNull: false,
                        info: "Custom",
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Log Drains",
                desc: "Export site traffic, function, and edge function logs from Netlify’s CDN to third-party monitoring services for analysis, alerting, and data persistence.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: false,
                        isNull: false,
                        info: "Unlimited",
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Fortified bandwidth",
                desc: "Enhanced performance and comprehensive security with Rate Limiting, Traffic Rules, DDoS protection and Managed Rulesets",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: "(Add-on)"
                    },
                ]
            },
        ]
    },
    {
        title: "Build sites grow",
        features: [
            {
                title: "Visual editor",
                desc: "Autonomously perform content and website updates faster than ever before with an intuitive visual editor.",
                listings: [
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "One-click rollbacks",
                desc: "Instantly roll back your production environment to a previous version of your site.",
                listings: [
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Extensions",
                desc: "Add powerful capabilities to every build. Click to install from a catalog of community extensions or create your own.",
                listings: [
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Scope environment variables per deploy context",
                desc: "Customize environment variables for different deploy contexts, i.e. staging vs. production.",
                listings: [
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Scope environment variables per feature",
                desc: "Limit where environment variables can be used, such as builds, functions, or post processing.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Shared environment variables",
                desc: "Set team-level variables that are shared by all sites owned by the team. These can be overridden by settings at the site level.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Lighthouse scores on deploys list",
                desc: "Easily compare Lighthouse scores for each deploy on the deploys list in the Netlify UI.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Custom deployment options for functions",
                desc: "Increase execution limits, increase memory, or set a custom AWS region.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Background Functions",
                desc: "Execute long-running asynchronous functions for up to 15 minutes.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Slack & email deploy notifications",
                desc: "Notify a Slack channel or send an email when a deploy succeeds, fails, or hits other milestones. This is in addition to webhook, Zapier, & Git notifications available on all plans.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Priority build environmentSlack & email deploy notifications",
                desc: "5x faster processing power (10vCPUs), 6x more memory (36GB), and 4x higher concurrency than the standard build environment.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
        ]
    },
    {
        title: "Deploy & host instantly",
        features: [
            {
                title: "Global edge deployments",
                desc: "Globally distributed CDN designed for fast, low latency Jamstack sites and web apps.",
                listings: [
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Instant cache invalidation",
                desc: "Once a build is uploaded for your website or web app, the changes in the build are instantly pushed to our global CDN and go live immediately.",
                listings: [
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Visitor access control",
                desc: "Set granular access to your site, or to specific pages. We use JSON Web Tokens (JWT), roles, and redirect rules to grant access to those sections. And it all happens at the CDN level.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "99.99% uptime SLA",
                desc: null,
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
        ]
    },
    {
        title: "Develop locally",
        features: [
            {
                title: "Netlify CLI & dev server",
                desc: "Deploy sites and configure continuous deployment from the command line on your local machine.",
                listings: [
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Live share your dev environment",
                desc: "Share your development server to a live URL over HTTPS.",
                listings: [
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
        ]
    },
    {
        title: "Collaborate across larger teams",
        features: [
            {
                title: "SSD Software Development Kit",
                desc: "Improve developer productivity with streamlined integrations, gain the flexibility you need to build a composable architecture that scales, and accelerate your time-to-market.",
                listings: [
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Branch and pull request previews",
                desc: "Deploy a live preview of your site, enable reviewers to leave high-quality, visual feedback, and sync feedback to the pull request and productivity tools.",
                listings: [
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Team management",
                desc: "Set up teams of Netlify users to collaborate on specific sites. Each Netlify user can be a member of multiple teams.",
                listings: [
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Two-factor authentication (2FA)",
                desc: "Use one time passwords from your favorite authentication apps to secure access to your Netlify account.",
                listings: [
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Netlify access control",
                desc: "Set roles and permissions for every member of your team, what sites they can access and what they can do.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Multiple owners",
                desc: "Give more people the ability to add team members, set user permissions, transfer sites, and more.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Audit logs",
                desc: "A log of Netlify actions made by members of your team so you can keep track of what changes were made, when, and by whom.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: false,
                        isNull: false,
                        info: "7-day history",
                        additionalInfo: null
                    },
                    {
                        isIcon: false,
                        isNull: false,
                        info: "Full history",
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Deploy retention policy",
                desc: "Preserve deploys older than 90 days for reference or one-click rollbacks.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: false,
                        isNull: false,
                        info: "Retention policies up to 365 days",
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "SAML single sign-on",
                desc: "Integrate your existing SSO provider to authenticate users to the Netlify UI.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Billing Admin role",
                desc: "Integrate your existing SSO provider to authenticate users to the Netlify UI.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
        ]
    },
    {
        title: "Manage users & teams more securely",
        features: [
            {
                title: "Org-level SSO",
                desc: "Enable SAML to be implemented only once across all teams.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: "(Add-on)"
                    },
                ]
            },
            {
                title: "SCIM",
                desc: "Empower Netlify admins to automatically provision access and assign permissions in buckets in a secure environment.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: "(Add-on)"
                    },
                ]
            },
            {
                title: "Site-level access control",
                desc: "Provision custom permission settings for each user.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: "(Add-on)"
                    },
                ]
            },
            {
                title: "Self-serve team creation",
                desc: "Provide complete autonomy for creating, deleting, editing, and managing teams.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: "(Add-on)"
                    },
                ]
            },
        ]
    },
    {
        title: "Security & Compliance",
        features: [
            {
                title: "Functions log retention",
                desc: "Logs to help you observe and troubleshoot serverless functions.",
                listings: [
                    {
                        isIcon: false,
                        isNull: false,
                        info: "24-hour history",
                        additionalInfo: null
                    },
                    {
                        isIcon: false,
                        isNull: false,
                        info: "7-day history",
                        additionalInfo: null
                    },
                    {
                        isIcon: false,
                        isNull: false,
                        info: "Full history",
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Edge Functions log retention",
                desc: "Logs to help you observe and troubleshoot edge functions.",
                listings: [
                    {
                        isIcon: false,
                        isNull: false,
                        info: "24-hour history",
                        additionalInfo: null
                    },
                    {
                        isIcon: false,
                        isNull: false,
                        info: "7-day history",
                        additionalInfo: null
                    },
                    {
                        isIcon: false,
                        isNull: false,
                        info: "Full history",
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Secrets controller",
                desc: "Environment variable values can be marked as secret, applying a strict access policy to them and enabling sophisticated secrets scanning of code and build output.",
                listings: [
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Support for organization-owned private repositories",
                desc: "Connect Netlify to your private GitHub repositories owned by organization accounts.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Password-protected websites",
                desc: "Site-wide protection, where only visitors with a valid password have access.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Basic authentication headers",
                desc: "Use custom HTTP headers to password protect paths of your site or specific branch previews.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Web application firewall",
                desc: "Shield your applications from malicious traffic with an intelligent WAF managed by Netlify that automatically blocks common attack patterns, SQL injections, and zero-day vulnerabilities.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Rate limiting",
                desc: "Maintain control over your traffic with customizable rate limiting rules that automatically detect and manage excessive requests, ensuring reliable performance and protection against denial of service attempts.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "HIPAA",
                desc: "Ensure data security, privacy and regulatory adherence with Netlify's HIPAA compliant service offering.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: "(Add-on)"
                    },
                ]
            },
            {
                title: "SOC 2",
                desc: "Deploy with confidence on Netlify's SOC 2 certified platform, providing independently audited security controls for your build processes, deployments, and hosting infrastructure.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Security scorecard",
                desc: "Improve your team’s security and reduce your vulnerabilities with actionable insights on using Netlify and applying security best practices.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Support for GitHub Enterprise Server or self-managed GitLab and Bitbucket",
                desc: "Connect Netlify to your publicly accessible repositories in GitHub Enterprise Server or self-managed GitLab, or connect to private repositories in Bitbucket Data Center and Server.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Password-protected private deploys",
                desc: "Non-production deploy password protection (including deploy previews and branch deploys), where only visitors with a valid password have access.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Team login-protected sites and deploys",
                desc: "Site-wide or non-production deploy protection, where only visitors within your Netlify team have access (including SSO authentication).",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Private connectivity",
                desc: "Ensure secure network connectivity while accessing Netlify’s full suite of features",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: "(Add-on)"
                    },
                ]
            },
        ]
    },
    {
        title: "Get support",
        features: [
            {
                title: "Community forum",
                desc: "Get questions answered quickly from our Netlify-staffed and community-supported forum and knowledge base.",
                listings: [
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "Email technical support",
                desc: "Get help directly from the Netlify team.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
            {
                title: "24×7×365 support with SLA",
                desc: "Production support, with anytime access to the Netlify support engineers who can help resolve issues and answer questions quickly.",
                listings: [
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: true,
                        info: null,
                        additionalInfo: null
                    },
                    {
                        isIcon: true,
                        isNull: false,
                        info: null,
                        additionalInfo: null
                    },
                ]
            },
        ]
    },
    {
        title: "Scale as you grow",
        features: [
            {
                title: "Members",
                desc: "Trigger deploys on Netlify or log into the Netlify platform UI. Sites connected to public repos will not have membership requirements for deploys.",
                listings: [
                    {
                        isIcon: false,
                        isNull: false,
                        info: "Limited to 1 free member, with free & unlimited Git Contributors",
                        additionalInfo: null
                    },
                    {
                        isIcon: false,
                        isNull: false,
                        info: "$19 /month per member, including active Git Contributors",
                        additionalInfo: null
                    },
                    {
                        isIcon: false,
                        isNull: false,
                        info: "Custom",
                        additionalInfo: null
                    },
                ]
            },
        ]
    },
]

export default function Features() {

    return (
        <section id="features">
            <div className="mx-auto max-w-[var(--max-width)] min-h-screen pt-30 pb-20">
                <div className="mb-20 flex flex-col items-center justify-center text-center gap-6">
                    <h3 className="text-sm font-semibold text-blue-800 uppercase">Our features</h3>
                    <h2 className="mt-2 text-4xl text-gray-900">SSD's solution features list</h2>
                    <p className="text-base text-gray-800 leading-[1.8rem]">A currated list of the features that will be available for each price plan.</p>
                </div>
                <div className="sticky top-[calc(var(--header-large-height)_-_8px)] border border-b-0 border-gray-200 rounded-t-xl grid grid-cols-4 overflow-hidden">
                    <span className="bg-gray-100"></span>
                    {
                        PLANS.map(({ title, desc, buttonText }) => (
                            <div className="h-44 flex flex-col justify-between gap-4 bg-white border-l border-gray-200 p-4">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-2xl font-semibold text-blue-600">{title}</h3>
                                    <p className="text-sm text-gray-800">{desc}</p>
                                </div>
                                <button className="flex items-center justify-center h-10 rounded-md bg-blue-500 text-white hover:bg-blue-600">
                                    <span className="text-sm">{buttonText}</span>
                                </button>
                            </div>
                        ))
                    }
                </div>
                {
                    FEATURES.map(({ title, features }, index, arr) => (
                        <>
                            <div key={title} className="sticky top-[calc(var(--header-large-height)_+_168px)] h-12 bg-dark-blue flex items-center px-3">
                                <span className="text-lg text-white">{title}</span>
                            </div>
                            <ul key={index} className={`${index == arr.length - 1 ? 'overflow-hidden rounded-b-xl border-b' : ''} border-x border-gray-200 flex flex-col`}>
                                {
                                    features.map(({ title, desc, listings }) => (
                                        <li key={title} className="border-t first:border-t-0 border-gray-200 grid grid-cols-4">
                                            <div className="p-4 pt-6 bg-gray-100 flex flex-col gap-4">
                                                <button className="flex items-center justify-between gap-4">
                                                    <span className="text-left text-base font-semibold text-gray-900">{title}</span>
                                                    {desc ? <FaAngleDown size={14} className="min-w-[16px]" /> : null}
                                                </button>
                                                <p className="hidden text-sm text-gray-500">{desc}</p>
                                            </div>
                                            {
                                                listings.map(({ isIcon, isNull, info, additionalInfo }, subIndex) => (
                                                    <li key={subIndex} className="border-l border-gray-200 p-4 pt-6 bg-white flex flex-col items-center justify-center gap-1">
                                                        { 
                                                            isIcon ? 
                                                                isNull ? 
                                                                    <span className="block w-3 aspect-square rounded-full bg-gray-300"></span> :
                                                                    <FiCheck size={28} className="text-green-400" /> :
                                                                <p className="text-center text-base text-gray-800">{info}</p>
                                                        }
                                                        { additionalInfo ? <span className="text-center text-gray-600 text-sm">{additionalInfo}</span> : null}
                                                    </li>
                                                ))
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                        </>
                    ))
                }
            </div>
        </section>
    )
}