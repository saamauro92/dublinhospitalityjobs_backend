module.exports = ({ env }) => ({
    slugify: {
        enabled: true,
        config: {
            contentTypes: {
                job: {
                    field: 'slug',
                    references: 'title',
                },
            },
        },
    },
    email: {
        config: {
            provider: 'sendgrid',
            providerOptions: {
                apiKey: env('SENDGRID_API_KEY'),
            },
            settings: {
                defaultFrom: 'dublinhospitalityjobs@protonmail.com',
                defaultReplyTo: 'dublinhospitalityjobs@protonmail.com',
            },
        },
    },

});