const express = require("express")
var cors = require("cors")
const app = express()
const port = 5000

let data = [
  {
    productName: "Product A",
    productDescription: "This is the description",
    isActive: "✅",
    price: 8,
    offerPrice: 9,
    offerStartAt: new Date(2018, 11, 24, 10, 33, 30, 0),
    offerEndAt: new Date(2019, 11, 24, 10, 33, 30, 0),
    createdAt: new Date(2018, 10, 24, 10, 33, 30, 0),
    updatedAt: Date.parse("2016-07-19T20:23:01.804Z")
  },
  {
    productName: "Product B",
    productDescription: "This is the description",
    isActive: "✅",
    price: 8,
    offerPrice: 9,
    offerStartAt: new Date(2020, 11, 24, 10, 33, 30, 0),
    offerEndAt: new Date(2029, 11, 24, 10, 33, 30, 0),
    createdAt: new Date(2028, 10, 24, 10, 33, 30, 0),
    updatedAt: Date.parse("2016-07-19T20:23:01.804Z")
  },
  {
    productName: "Product C",
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
    productName: "Product D",
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
    productName: "Product E",
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
    productName: "Product F",
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
    productName: "Product G",
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
    productName: "Product H",
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
    productName: "Product I",
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
    productName: "Product J",
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
    productName: "Product K",
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
    productName: "Product L",
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
    productName: "Product M",
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
    productName: "Product N",
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
    productName: "Product O",
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
    productName: "Product P",
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
    productName: "Product Q",
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
    productName: "Product R",
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
    productName: "Product S",
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
    productName: "Product T",
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
    productName: "Product U",
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
    productName: "Product V",
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
    productName: "Product W",
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
    productName: "Product X",
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
    productName: "Product Y",
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
    productName: "Product Z",
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

app.listen(process.env.PORT || port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
)
