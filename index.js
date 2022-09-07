const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("welcome to the first node job")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server is now listening on port ${PORT}`))