const { events } = require("brigadier")

events.on("push", (e, project) => {
    console.log("received push for commit " + e.commit)
})