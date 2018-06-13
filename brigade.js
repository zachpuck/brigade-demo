const { events } = require("brigadier")

events.on("push", (e, project) => {
    console.log("received push for commit " + e.commit)

    // create a new job
    let node = new Job("test-runner")

    // We want our job to run the stock Docker Python 3 image
    node.image = "python:3"

    // Now we want it to run these commands in order:
    node.tasks = [
        "cd /src/app",
        "pip install -r requirements.txt",
        "cd /src/",
        "python setup.py test"
    ]

    // We're done configuring, so we run the job

    node.run()
})