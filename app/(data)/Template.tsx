export default [
    {
        "name": "Blog Title",
        "desc": "An AI tool that generates blog titles based on your blog information.",
        "category": "Blog",
        "icon": "https://cdn-icons-png.flaticon.com/128/4693/4693065.png",
        "aiPromt": "Give me 5 blog topic ideas in bullet points only based on the given niche and outline topic and provide the result in Rich Text Editor format.",
        "slug": "generate-blog-title",
        "form": [
            {
                "label": "Enter Your Blog Niche",
                "field": "input",
                "name": "niche",
                "required": true
            },
            {
                "label": "Enter Blog Outline",
                "field": "textarea",
                "name": "outline"
            }
        ]
    },
    {
        "name": "Social Media Post",
        "desc": "An AI tool that generates engaging social media posts.",
        "category": "Social Media",
        "icon": "https://cdn-icons-png.flaticon.com/128/733/733547.png",
        "aiPromt": "Generate 5 social media post ideas in bullet points based on the provided product or service details. Provide the result in Rich Text Editor format.",
        "slug": "generate-social-media-post",
        "form": [
            {
                "label": "Enter Product/Service Details",
                "field": "textarea",
                "name": "details",
                "required": true
            },
            {
                "label": "Target Audience",
                "field": "input",
                "name": "audience"
            }
        ]
    },
    {
        "name": "Email Newsletter",
        "desc": "An AI tool that creates captivating email newsletters tailored to your needs.",
        "category": "Email",
        "icon": "https://cdn-icons-png.flaticon.com/128/888/888853.png",
        "aiPromt": "Generate an email newsletter based on the provided topic and audience. Provide the result in Rich Text Editor format.",
        "slug": "generate-email-newsletter",
        "form": [
            {
                "label": "Enter Topic",
                "field": "input",
                "name": "topic",
                "required": true
            },
            {
                "label": "Target Audience",
                "field": "input",
                "name": "audience",
                
            }
        ]
    },
    {
        "name": "Product Description",
        "desc": "An AI tool that generates detailed product descriptions.",
        "category": "E-commerce",
        "icon": "https://cdn-icons-png.flaticon.com/128/1091/1091028.png",
        "aiPromt": "Generate 3 product descriptions in bullet points based on the given product details. Provide the result in Rich Text Editor format.",
        "slug": "generate-product-description",
        "form": [
            {
                "label": "Enter Product Name",
                "field": "input",
                "name": "product_name",
                "required": true
            },
            {
                "label": "Enter Product Features",
                "field": "textarea",
                "name": "product_features",
                
            }
        ]
    },
    {
        "name": "Ad Copy",
        "desc": "An AI tool that crafts compelling ad copies tailored to your advertisement needs.",
        "category": "Advertising",
        "icon": "https://cdn-icons-png.flaticon.com/128/3421/3421515.png",
        "aiPromt": "Generate 3 ad copies in bullet points based on the provided product/service and target audience. Provide the result in Rich Text Editor format.",
        "slug": "generate-ad-copy",
        "form": [
            {
                "label": "Enter Product/Service",
                "field": "input",
                "name": "product_service",
                "required": true
            },
            {
                "label": "Target Audience",
                "field": "input",
                "name": "audience"
            }
        ]
    },
    {
        "name": "SEO Meta Descriptions",
        "desc": "An AI tool that creates SEO-friendly meta descriptions for your webpages.",
        "category": "SEO",
        "icon": "https://cdn-icons-png.flaticon.com/128/1242/1242735.png",
        "aiPromt": "Generate 3 SEO meta descriptions in bullet points based on the provided page title and keywords. Provide the result in Rich Text Editor format.",
        "slug": "generate-seo-meta-descriptions",
        "form": [
            {
                "label": "Enter Page Title",
                "field": "input",
                "name": "page_title",
                "required": true
            },
            {
                "label": "Enter Keywords",
                "field": "textarea",
                "name": "keywords"
            }
        ]
    }
    ,{
        "name": "YouTube SEO Keywords",
        "desc": "An AI tool that generates SEO keywords for your YouTube videos.",
        "category": "SEO",
        "icon": "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
        "aiPromt": "Generate 10 SEO keywords in bullet points based on the provided video topic and description. Provide the result in Rich Text Editor format.",
        "slug": "generate-youtube-seo-keywords",
        "form": [
            {
                "label": "Enter Video Topic",
                "field": "input",
                "name": "video_topic",
                "required": true
            },
            {
                "label": "Enter Video Description",
                "field": "textarea",
                "name": "video_description"
            }
        ]
    },
    {
        "name": "Instagram Keywords",
        "desc": "An AI tool that generates relevant keywords for Instagram posts.",
        "category": "Social Media",
        "icon": "https://cdn-icons-png.flaticon.com/128/1384/1384063.png",
        "aiPromt": "Generate 10 Instagram keywords in bullet points based on the provided post content and target audience. Provide the result in Rich Text Editor format.",
        "slug": "generate-instagram-keywords",
        "form": [
            {
                "label": "Enter Post Content",
                "field": "textarea",
                "name": "post_content",
                "required": true
            },
            {
                "label": "Enter Target Audience",
                "field": "input",
                "name": "target_audience"
            }
        ]
    },
    {
        "name": "Landing Page Copy",
        "desc": "An AI tool that generates high-converting landing page copy.",
        "category": "Web",
        "icon": "https://cdn-icons-png.flaticon.com/128/4306/4306787.png",
        "aiPromt": "Generate landing page copy in bullet points based on the provided product/service details and target audience. Provide the result in Rich Text Editor format.",
        "slug": "generate-landing-page-copy",
        "form": [
            {
                "label": "Enter Product/Service Details",
                "field": "textarea",
                "name": "details",
                "required": true
            },
            {
                "label": "Target Audience",
                "field": "input",
                "name": "audience"
            }
        ]
    },
    {
        "name": "Facebook Ad Headlines",
        "desc": "An AI tool that generates attention-grabbing headlines for Facebook ads.",
        "category": "Advertising",
        "icon": "https://cdn-icons-png.flaticon.com/128/124/124010.png",
        "aiPromt": "Generate 5 Facebook ad headlines in bullet points based on the provided product/service and target audience. Provide the result in Rich Text Editor format.",
        "slug": "generate-facebook-ad-headlines",
        "form": [
            {
                "label": "Enter Product/Service",
                "field": "input",
                "name": "product_service",
                "required": true
            },
            {
                "label": "Target Audience",
                "field": "input",
                "name": "audience"
            }
        ]
    },
    {
        "name": "Twitter Posts",
        "desc": "An AI tool that generates engaging Twitter posts based on your inputs.",
        "category": "Social Media",
        "icon": "https://cdn-icons-png.flaticon.com/128/124/124021.png",
        "aiPromt": "Generate 5 Twitter posts in bullet points based on the provided topic and target audience. Provide the result in Rich Text Editor format.",
        "slug": "generate-twitter-posts",
        "form": [
            {
                "label": "Enter Topic",
                "field": "input",
                "name": "topic",
                "required": true
            },
            {
                "label": "Target Audience",
                "field": "input",
                "name": "audience"
            }
        ]
    },
    {
        "name": "LinkedIn Post Ideas",
        "desc": "An AI tool that generates professional LinkedIn post ideas.",
        "category": "Social Media",
        "icon": "https://cdn-icons-png.flaticon.com/128/174/174857.png",
        "aiPromt": "Generate 5 LinkedIn post ideas in bullet points based on the provided topic and target audience. Provide the result in Rich Text Editor format.",
        "slug": "generate-linkedin-post-ideas",
        "form": [
            {
                "label": "Enter Topic",
                "field": "input",
                "name": "topic",
                "required": true
            },
            {
                "label": "Target Audience",
                "field": "input",
                "name": "audience"
            }
        ]
    },
    {
        "name": "Pinterest Pins",
        "desc": "An AI tool that generates most creative Pinterest pin ideas.",
        "category": "Social Media",
        "icon": "https://cdn-icons-png.flaticon.com/128/174/174863.png",
        "aiPromt": "Generate 5 Pinterest pin ideas in bullet points based on the provided topic and target audience. Provide the result in Rich Text Editor format.",
        "slug": "generate-pinterest-pins",
        "form": [
            {
                "label": "Enter Topic",
                "field": "input",
                "name": "topic",
                "required": true
            },
            {
                "label": "Target Audience",
                "field": "input",
                "name": "audience"
            }
        ]
    },
    {
        "name": "Quora Answers",
        "desc": "An AI tool that generates insightful answers for Quora questions.",
        "category": "Social Media",
        "icon": "https://cdn-icons-png.flaticon.com/128/733/733585.png",
        "aiPromt": "Generate 3 Quora answers in bullet points based on the provided question and context. Provide the result in Rich Text Editor format.",
        "slug": "generate-quora-answers",
        "form": [
            {
                "label": "Enter Quora Question",
                "field": "textarea",
                "name": "question",
                "required": true
            },
            {
                "label": "Provide Context",
                "field": "textarea",
                "name": "context"
            }
        ]
    },
    {
        "name": "Reddit Posts",
        "desc": "An AI tool that generates engaging Reddit posts based on your inputs.",
        "category": "Social Media",
        "icon": "https://cdn-icons-png.flaticon.com/128/2111/2111589.png",
        "aiPromt": "Generate 5 Reddit post ideas in bullet points based on the provided topic and target audience. Provide the result in Rich Text Editor format.",
        "slug": "generate-reddit-posts",
        "form": [
            {
                "label": "Enter Topic",
                "field": "input",
                "name": "topic",
                "required": true
            },
            {
                "label": "Target Audience",
                "field": "input",
                "name": "audience"
            }
        ]
    }
    ,
    {
        "name": "TikTok Content Ideas",
        "desc": "An AI tool that generates creative content ideas for TikTok.",
        "category": "Social Media",
        "icon": "https://cdn-icons-png.flaticon.com/128/3046/3046122.png",
        "aiPromt": "Generate 5 TikTok content ideas in bullet points based on the provided topic and target audience. Provide the result in Rich Text Editor format.",
        "slug": "generate-tiktok-content-ideas",
        "form": [
            {
                "label": "Enter Topic",
                "field": "input",
                "name": "topic",
                "required": true
            },
            {
                "label": "Target Audience",
                "field": "input",
                "name": "audience"
            }
        ]
    },
    {
        "name": "Podcast Episode Ideas",
        "desc": "An AI tool that generates engaging podcast episode ideas.",
        "category": "Podcast",
        "icon": "https://cdn-icons-png.flaticon.com/128/891/891462.png",
        "aiPromt": "Generate 5 podcast episode ideas in bullet points based on the provided topic and target audience. Provide the result in Rich Text Editor format.",
        "slug": "generate-podcast-episode-ideas",
        "form": [
            {
                "label": "Enter Topic",
                "field": "input",
                "name": "topic",
                "required": true
            },
            {
                "label": "Target Audience",
                "field": "input",
                "name": "audience"
            }
        ]
    },
    {
        "name": "Webinar Topics",
        "desc": "An AI tool that generates well engaging webinar topic ideas.",
        "category": "Webinar",
        "icon": "https://cdn-icons-png.flaticon.com/128/1086/1086933.png",
        "aiPromt": "Generate 5 webinar topic ideas in bullet points based on the provided theme and target audience. Provide the result in Rich Text Editor format.",
        "slug": "generate-webinar-topics",
        "form": [
            {
                "label": "Enter Theme",
                "field": "input",
                "name": "theme",
                "required": true
            },
            {
                "label": "Target Audience",
                "field": "input",
                "name": "audience"
            }
        ]
    },
    {
        "name": "E-book Title Ideas",
        "desc": "An AI tool that generates captivating title ideas for your e-book.",
        "category": "E-book",
        "icon": "https://cdn-icons-png.flaticon.com/128/2097/2097274.png",
        "aiPromt": "Generate 5 e-book title ideas in bullet points based on the provided topic and target audience. Provide the result in Rich Text Editor format.",
        "slug": "generate-ebook-title-ideas",
        "form": [
            {
                "label": "Enter Topic",
                "field": "input",
                "name": "topic",
                "required": true
            },
            {
                "label": "Target Audience",
                "field": "input",
                "name": "audience"
            }
        ]
    },
    {
        "name": "Whitepaper Topics",
        "desc": "An AI tool that generates comprehensive whitepaper topic ideas.",
        "category": "Whitepaper",
        "icon": "https://cdn-icons-png.flaticon.com/128/1063/1063614.png",
        "aiPromt": "Generate 5 whitepaper topic ideas in bullet points based on the provided industry and target audience. Provide the result in Rich Text Editor format.",
        "slug": "generate-whitepaper-topics",
        "form": [
            {
                "label": "Enter Industry",
                "field": "input",
                "name": "industry",
                "required": true
            },
            {
                "label": "Target Audience",
                "field": "input",
                "name": "audience"
            }
        ]
    },
    {
        "name": "Press Release",
        "desc": "An AI tool that generates professional press releases based on your inputs.",
        "category": "Press",
        "icon": "https://cdn-icons-png.flaticon.com/128/1043/1043483.png",
        "aiPromt": "Generate a press release in bullet points based on the provided event details and company information. Provide the result in Rich Text Editor format.",
        "slug": "generate-press-release",
        "form": [
            {
                "label": "Enter Event Details",
                "field": "textarea",
                "name": "event_details",
                "required": true
            },
            {
                "label": "Enter Company Information",
                "field": "textarea",
                "name": "company_info"
            }
        ]
    },
    {
        "name": "Job Description",
        "desc": "An AI tool that generates detailed job descriptions based on your inputs.",
        "category": "HR",
        "icon": "https://cdn-icons-png.flaticon.com/128/1184/1184635.png",
        "aiPromt": "Generate a job description in bullet points based on the provided job title and requirements. Provide the result in Rich Text Editor format.",
        "slug": "generate-job-description",
        "form": [
            {
                "label": "Enter Job Title",
                "field": "input",
                "name": "job_title",
                "required": true
            },
            {
                "label": "Enter Job Requirements",
                "field": "textarea",
                "name": "job_requirements",
                "required": true
            }
        ]
    }
]