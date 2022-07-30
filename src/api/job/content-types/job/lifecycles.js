module.exports = {
    async afterCreate(event) {
        const { result } = event;

        try {
            await strapi.plugins['email'].services.email.send({
                to: `${result.email}`,
                from: "noreply@protonmail.com",
                bcc: "saavedra.mauro92@gmail.com",
                subject: "Dublin Hospitality Jobs -We have received your message/job position",
                html: `<h1> Thanks ${result.email}! We have received your job </h1>
                <h2> it will be reviewed and posted within 24 hs if not issue was found. </h2>
                <hr> </hr>
                <br> </br>
                <h3>${result.title}</h3>
                <p>${result.description} </p>

                <span> Please do not reply to this email address </span>

                `

            })


        } catch (err) {
            console.log(err);
        }
    }
}

