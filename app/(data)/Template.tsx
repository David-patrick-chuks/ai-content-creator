export default [
    {
        name: 'Blog Title',
        desc: 'An AI tool that generate blog title depends on yout blog information',
        category : 'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4693/4693065.png',
        aiPromt: 'Give me 5 blog topic idea in bullet wise only based on give niche and outline topic and give me result in Rich Text Editor format',
        slug:'generate-blog-title',
        form: [
            {
                label:'Enter Your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label:'Enter blog outline',
                field: 'textarea',
                name: 'outline',
               
            }
        ]

    },
    {
        name: 'Blog Content',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category : 'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/10473/10473279.png',
        aiPromt: 'Generate Blog Content based on  niche and outline topic and give me result in Rich Text Editor format',
        slug:'generate-blog-content',
        form: [
            {
                label:'Enter Your blog topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label:'Enter blog outline here',
                field: 'textarea',
                name: 'outline',
               
            }
        ]

    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category : 'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4922/4922073.png',
        aiPromt: 'Generate Blog Content based on  niche and outline topic and give me result in Rich Text Editor format',
        slug:'generate-blog-topic',
        form: [
            {
                label:'Enter Your Niche',
                field: 'input',
                name: 'niche',
                required: true
            }
        ]

    },
    {
        name: 'Youtube SEO Title',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category : 'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/15302/15302398.png',
        aiPromt: 'Generate Blog Content based on  niche and outline topic and give me result in Rich Text Editor format',
        slug:'youtube-seo-title',
        form: [
            {
                label:'Enter Your Youtube video topic keyword',
                field: 'input',
                name: 'keywords',
                required: true
            },
            {
                label:'Enter Youtube description outline here',
                field: 'textarea',
                name: 'keywords',
            },
        ]

    },
]