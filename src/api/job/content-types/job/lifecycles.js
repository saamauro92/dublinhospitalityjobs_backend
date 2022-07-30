module.exports = {
    async afterCreate(event) {
        const { result } = event;

        try {
            await strapi.plugins['email'].services.email.send({
                to: `${result.email}`,
                from: "dublinhospitalityjobs@protonmail.com",
                bcc: "dublinhospitalityjobs@protonmail.com",
                subject: "Dublin Hospitality Jobs -We have received your message/job position",
                html: `<h1> Thanks ${result.email}! We have received your job </h1>
                <p> it will be reviewed and posted within 24 hs if not issue was found. </p>
                <hr> </hr>
                <br> </br>
                ${result.description}

                `

            })


        } catch (err) {
            console.log(err);
        }
    }
}

