const express = require("express")
var cors = require("cors")
const app = express()
const port = 5000

let data = [
  {
    productName: "Product A",
    productDescription: "This is the description",
    isActive: "✅",
    price: 100,
    offerPrice: 94,
    offerStartAt: new Date(2018, 11, 24, 10, 33, 30, 0),
    offerEndAt: new Date(2019, 11, 24, 10, 33, 30, 0),
    createdAt: new Date(2018, 10, 24, 10, 33, 30, 0),
    updatedAt: new Date(2018, 10, 24, 10, 33, 30, 0)
  },
  {
    productName: "Product B",
    productDescription: "This is the description",
    isActive: "✅",
    price: 120,
    offerPrice: 92,
    offerStartAt: new Date(2020, 11, 24, 10, 33, 30, 0),
    offerEndAt: new Date(2029, 11, 24, 10, 33, 30, 0),
    createdAt: new Date(2028, 10, 24, 10, 33, 30, 0),
    updatedAt: new Date(2018, 10, 24, 10, 33, 30, 0)
  },
  {
    productName: "Product C",
    productDescription: "This is the description",
    isActive: "✅",
    price: 193,
    offerPrice: 190,
    offerStartAt: new Date(2010, 11, 24, 10, 33, 30, 0),
    offerEndAt: new Date(2010, 11, 14, 9, 35, 20, 0),
    createdAt: new Date(2008, 10, 24, 10, 33, 30, 0),
    updatedAt: new Date(2018, 12, 25, 11, 29, 35, 0)
  },
  {
    productName: "Product D",
    productDescription: "This is the description",
    isActive: "❌",
    price: 128,
    offerPrice: 89,
    offerStartAt: new Date(2011, 11, 24, 10, 33, 30, 0),
    offerEndAt: new Date(2011, 11, 14, 9, 35, 20, 0),
    createdAt: new Date(2009, 10, 24, 10, 33, 30, 0),
    updatedAt: new Date(2019, 12, 25, 11, 29, 35, 0)
  },
  {
    productName: "Product E",
    productDescription: "This is the description",
    isActive: "❌",
    price: 185,
    offerPrice: 159,
    offerStartAt: new Date(2010, 11, 24, 12, 33, 30, 0),
    offerEndAt: new Date(2010, 11, 14, 9, 35, 20, 0),
    createdAt: new Date(2008, 10, 24, 12, 33, 30, 0),
    updatedAt: new Date(2017, 12, 25, 11, 29, 35, 0)
  },
  {
    productName: "Product F",
    productDescription: "This is the description",
    isActive: "✅",
    price: 183,
    offerPrice: 176,
    offerStartAt: new Date(2012, 11, 24, 10, 33, 30, 0),
    offerEndAt: new Date(2014, 11, 14, 9, 35, 20, 0),
    createdAt: new Date(2006, 10, 24, 8, 33, 30, 0),
    updatedAt: new Date(2017, 12, 25, 10, 29, 35, 0)
  },
  {
    productName: "Product G",
    productDescription: "This is the description",
    isActive: "❌",
    price: 865,
    offerPrice: 797,
    offerStartAt: new Date(2010, 12, 24, 10, 33, 30, 0),
    offerEndAt: new Date(2010, 12, 14, 9, 35, 20, 0),
    createdAt: new Date(2008, 11, 24, 10, 33, 30, 0),
    updatedAt: new Date(2018, 11, 25, 11, 29, 35, 0)
  },
  {
    productName: "Product H",
    productDescription: "This is the description",
    isActive: "❌",
    price: 18,
    offerPrice: 9,
    offerStartAt: new Date(2005, 11, 24, 10, 33, 30, 0),
    offerEndAt: new Date(2006, 11, 14, 9, 35, 20, 0),
    createdAt: new Date(2008, 10, 24, 10, 33, 30, 0),
    updatedAt: new Date(2009, 12, 25, 12, 29, 35, 0)
  },
  {
    productName: "Product I",
    productDescription: "This is the description",
    isActive: "✅",
    price: 86,
    offerPrice: 49,
    offerStartAt: new Date(2010, 12, 24, 10, 33, 30, 0),
    offerEndAt: new Date(2010, 11, 12, 9, 35, 20, 0),
    createdAt: new Date(2008, 10, 24, 12, 33, 30, 0),
    updatedAt: new Date(2018, 12, 25, 11, 12, 35, 0)
  },
  {
    productName: "Product J",
    productDescription: "This is the description",
    isActive: "✅",
    price: 56,
    offerPrice: 50,
    offerStartAt: new Date(2010, 11, 24, 10, 33, 30, 0),
    offerEndAt: new Date(2010, 11, 9, 9, 35, 20, 0),
    createdAt: new Date(2008, 10, 24, 9, 33, 30, 0),
    updatedAt: new Date(2018, 12, 25, 11, 9, 35, 0)
  },
  {
    productName: "Product K",
    productDescription: "This is the description",
    isActive: "❌",
    price: 182,
    offerPrice: 180,
    offerStartAt: new Date(2010, 4, 24, 10, 33, 30, 0),
    offerEndAt: new Date(2010, 11, 4, 9, 35, 20, 0),
    createdAt: new Date(2008, 10, 24, 10, 33, 30, 0),
    updatedAt: new Date(2018, 12, 25, 11, 4, 35, 0)
  },
  {
    productName: "Product L",
    productDescription: "This is the description",
    isActive: "✅",
    price: 8,
    offerPrice: 9,
    offerStartAt: new Date(2010, 11, 24, 10, 33, 30, 0),
    offerEndAt: new Date(2010, 11, 14, 9, 35, 20, 0),
    createdAt: new Date(2008, 10, 24, 10, 33, 30, 0),
    updatedAt: new Date(2018, 12, 25, 11, 29, 35, 0)
  },
  {
    productName: "Product M",
    productDescription: "This is the description",
    isActive: "✅",
    price: 8,
    offerPrice: 9,
    offerStartAt: new Date(2010, 11, 24, 10, 33, 30, 0),
    offerEndAt: new Date(2010, 11, 14, 9, 35, 20, 0),
    createdAt: new Date(2008, 10, 24, 10, 33, 30, 0),
    updatedAt: new Date(2018, 12, 25, 11, 29, 35, 0)
  },
  {
    productName: "Product N",
    productDescription: "This is the description",
    isActive: "✅",
    price: 8,
    offerPrice: 9,
    offerStartAt: new Date(2010, 11, 24, 10, 33, 30, 0),
    offerEndAt: new Date(2010, 11, 14, 9, 35, 20, 0),
    createdAt: new Date(2008, 10, 24, 10, 33, 30, 0),
    updatedAt: new Date(2018, 12, 25, 11, 29, 35, 0)
  },
  {
    productName: "Product O",
    productDescription: "This is the description",
    isActive: "❌",
    price: 8,
    offerPrice: 9,
    offerStartAt: new Date(2010, 11, 24, 10, 33, 30, 0),
    offerEndAt: new Date(2010, 11, 14, 9, 35, 20, 0),
    createdAt: new Date(2008, 10, 24, 10, 33, 30, 0),
    updatedAt: new Date(2018, 12, 25, 11, 29, 35, 0)
  },
  {
    productName: "Product P",
    productDescription: "This is the description",
    isActive: "❌",
    price: 8,
    offerPrice: 9,
    offerStartAt: new Date(2010, 11, 24, 10, 33, 30, 0),
    offerEndAt: new Date(2010, 11, 14, 9, 35, 20, 0),
    createdAt: new Date(2008, 10, 24, 10, 33, 30, 0),
    updatedAt: new Date(2018, 12, 25, 11, 29, 35, 0)
  },
  {
    productName: "Product Q",
    productDescription: "This is the description",
    isActive: "❌",
    price: 8,
    offerPrice: 9,
    offerStartAt: new Date(2010, 11, 24, 10, 33, 30, 0),
    offerEndAt: new Date(2010, 11, 14, 9, 35, 20, 0),
    createdAt: new Date(2008, 10, 24, 10, 33, 30, 0),
    updatedAt: new Date(2018, 12, 25, 11, 29, 35, 0)
  },
  {
    productName: "Product R",
    productDescription: "This is the description",
    isActive: "❌",
    price: 8,
    offerPrice: 9,
    offerStartAt: new Date(2010, 11, 24, 10, 33, 30, 0),
    offerEndAt: new Date(2010, 11, 14, 9, 35, 20, 0),
    createdAt: new Date(2008, 10, 24, 10, 33, 30, 0),
    updatedAt: new Date(2018, 12, 25, 11, 29, 35, 0)
  },
  {
    productName: "Product S",
    productDescription: "This is the description",
    isActive: "✅",
    price: 8,
    offerPrice: 9,
    offerStartAt: new Date(2010, 11, 24, 10, 33, 30, 0),
    offerEndAt: new Date(2010, 11, 14, 9, 35, 20, 0),
    createdAt: new Date(2008, 10, 24, 10, 33, 30, 0),
    updatedAt: new Date(2018, 12, 25, 11, 29, 35, 0)
  },
  {
    productName: "Product T",
    productDescription: "This is the description",
    isActive: "❌",
    price: 8,
    offerPrice: 9,
    offerStartAt: new Date(2010, 11, 24, 10, 33, 30, 0),
    offerEndAt: new Date(2010, 11, 14, 9, 35, 20, 0),
    createdAt: new Date(2008, 10, 24, 10, 33, 30, 0),
    updatedAt: new Date(2018, 12, 25, 11, 29, 35, 0)
  },
  {
    productName: "Product U",
    productDescription: "This is the description",
    isActive: "❌",
    price: 8,
    offerPrice: 9,
    offerStartAt: new Date(2010, 11, 24, 10, 33, 30, 0),
    offerEndAt: new Date(2010, 11, 14, 9, 35, 20, 0),
    createdAt: new Date(2008, 10, 24, 10, 33, 30, 0),
    updatedAt: new Date(2018, 12, 25, 11, 29, 35, 0)
  },
  {
    productName: "Product V",
    productDescription: "This is the description",
    isActive: "✅",
    price: 8,
    offerPrice: 9,
    offerStartAt: new Date(2010, 11, 24, 10, 33, 30, 0),
    offerEndAt: new Date(2010, 11, 14, 9, 35, 20, 0),
    createdAt: new Date(2008, 10, 24, 10, 33, 30, 0),
    updatedAt: new Date(2018, 12, 25, 11, 29, 35, 0)
  },
  {
    productName: "Product W",
    productDescription: "This is the description",
    isActive: "✅",
    price: 184,
    offerPrice: 94,
    offerStartAt: new Date(2010, 5, 24, 10, 33, 30, 0),
    offerEndAt: new Date(2010, 11, 5, 9, 35, 20, 0),
    createdAt: new Date(2008, 5, 24, 10, 33, 30, 0),
    updatedAt: new Date(2018, 5, 25, 11, 29, 35, 0)
  },
  {
    productName: "Product X",
    productDescription: "This is the description",
    isActive: "❌",
    price: 58,
    offerPrice: 49,
    offerStartAt: new Date(2010, 7, 24, 10, 33, 30, 0),
    offerEndAt: new Date(2010, 11, 7, 9, 35, 20, 0),
    createdAt: new Date(2008, 10, 24, 7, 33, 30, 0),
    updatedAt: new Date(2018, 12, 25, 11, 7, 35, 0)
  },
  {
    productName: "Product Y",
    productDescription: "This is the description",
    isActive: "❌",
    price: 866,
    offerPrice: 669,
    offerStartAt: new Date(2016, 11, 24, 10, 33, 30, 0),
    offerEndAt: new Date(2016, 11, 14, 9, 35, 20, 0),
    createdAt: new Date(2016, 10, 24, 10, 33, 30, 0),
    updatedAt: new Date(2017, 12, 25, 11, 29, 35, 0)
  },
  {
    productName: "Product Z",
    productDescription: "This is the description",
    isActive: "✅",
    price: 865,
    offerPrice: 697,
    offerStartAt: new Date(2010, 11, 11, 10, 33, 30, 0),
    offerEndAt: new Date(2010, 11, 14, 9, 11, 20, 0),
    createdAt: new Date(2008, 10, 24, 10, 33, 11, 0),
    updatedAt: new Date(2018, 12, 25, 11, 29, 35, 0)
  }
]

app.use(cors())

app.get("/", (req, res) => res.json(data))

app.listen(process.env.PORT || port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
)
