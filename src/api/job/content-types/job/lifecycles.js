module.exports = {
    async afterCreate(event) {
        const { result } = event;

        try {
            await strapi.plugins['email'].services.email.send({
                to: "saa.mauro92@gmail.com",
                from: "saa.mauro92@gmail.com",
                subject: "You Have a new job app",
                text: `${result.title}+ ${result.description}`
            })

        } catch (err) {
            console.log(err);
        }
    }
}