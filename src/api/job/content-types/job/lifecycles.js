module.exports = {
    async afterCreate(event) {
        const { result } = event;

        try {
            await strapi.plugins['email'].services.email.send({
                to: `${result.email}`,
                from: "dublinhospitalityjobs@protonmail.com",
                subject: "Dublin Hospitality Jobs -We have received your message/job position",
                text: `Thanks ${result.email}! We have received your job, it will be reviewed and posted within 24 hs if not issue was found. `

            })

        } catch (err) {
            console.log(err);
        }
    }
}

