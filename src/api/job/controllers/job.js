'use strict';


/* job controller */


const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::job.job');


/* dublinhospitalityjobs@protonmail.com */




/* module.exports = {

    send: async (ctx) => {
        let options = ctx.request.body;

        try {
            //Send email to the user
            await strapi.plugins['email'].services.email.send({
                to: options.to,
                from: 'dublinhospitalityjobs@protonmail.com',
                subject: options.subject,
                html: options.html
            });
            ctx.send({ ok: true })
        } catch (err) {
            return ctx.badRequest(null, err);

        }

    }
} */