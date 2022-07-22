module.exports = {
    async afterCreate(event) {
        const { result } = event;

        try {
            await strapi.plugins['email'].services.email.send({
                to: `${result.email}`,
                from: "dublinhospitalityjobs@protonmail.com",
                subject: "You Have a new job app",
                text: `${result.title}+ ${result.description}`
            })

        } catch (err) {
            console.log(err);
        }
    }
}