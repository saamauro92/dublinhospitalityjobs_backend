module.exports = {
    async afterCreate(event) {
        const { result } = event;

        try {
            await strapi.plugins['email'].services.email.send({
                to: `${result.email}`,
                from: "dublinhospitalityjobs@protonmail.com",
                subject: "Dublin Hospitality Jobs -We have received your message/job position",
                text: `${result.promo.length > 0 ? "Thank you <br></br> We have received your job position available. <br> </br> Post will be reviewed and posted within 24 hs. " : "Thank you <br></br> We have received your job position available. <br> </br> Please complete your payment in the following link (LINK) <br> </br> Post will be reviewed and posted within 24 hs. "}`


            })

        } catch (err) {
            console.log(err);
        }
    }
}

