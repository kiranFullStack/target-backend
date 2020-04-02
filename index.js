const express = require("express")
var cors = require("cors")
const app = express()
const port = 5000

let data = [
  {
    productName: "Cupcake",
    productDescription: "This is the description",
    isActive: "✅",
    price: 8,
    offerPrice: 9,
    offerStartAt: 90,
    offerEndAt: 90,
    createdAt: 80,
    updatedAt: 80
  },
  {
    productName: "Cupcake2",
    productDescription: "This is the description",
    isActive: "✅",
    price: 8,
    offerPrice: 9,
    offerStartAt: 90,
    offerEndAt: 90,
    createdAt: 80,
    updatedAt: 80
  },
  {
    productName: "Cupcake3",
    productDescription: "This is the description",
    isActive: "✅",
    price: 8,
    offerPrice: 9,
    offerStartAt: 90,
    offerEndAt: 90,
    createdAt: 80,
    updatedAt: 80
  },
  {
    productName: "Cupcake4",
    productDescription: "This is the description",
    isActive: "❌",
    price: 8,
    offerPrice: 9,
    offerStartAt: 90,
    offerEndAt: 90,
    createdAt: 80,
    updatedAt: 80
  },
  {
    productName: "Cupcake5",
    productDescription: "This is the description",
    isActive: "❌",
    price: 8,
    offerPrice: 9,
    offerStartAt: 90,
    offerEndAt: 90,
    createdAt: 80,
    updatedAt: 80
  }
]

app.use(cors())

app.get("/", (req, res) => res.json(data))

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
)
