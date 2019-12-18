const app = require('./app')

const PORT = process.env.PORT
app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`)
})
