module.exports = ({ env }) => ({
    // ...
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
    // ...
});