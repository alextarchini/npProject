# AlexArt: Artisanal E-Shop

## ✅ Features
![Mock-Up](https://github.com/alextarchini/npProject/blob/master/mockUp.png)
- Sessions system: registration(passport), login, log out
- USer interactions: e-shop, interactive shipping cart (linked with session)
- UX: Talking chatbot (voice recognition) ► /play secret  💬 
- online payment with Stripe
## 👉Styling:
Graphic chart:
 - color chart:  #bootstrap green success(#5cb85c), bootstrap blue primary action (#0275d8), black-grayish(#333), white(#fff);
 ![Graphic Chart](https://github.com/alextarchini/npProject/blob/master/colorChart.png)
- typography: Sans
- navbar: bootstrap grayish black: Bootstrap class="bg-inverse"
Mockup of the site: ["Site MockUp"](https://www.figma.com/file/GJgoTpWRY6JlTgsFexo45S/Figma-Basics?node-id=0%3A286)
## 🚩 Techno used
- **Front :** Bootstrap, Express Generator (hbs - handlebars)
 - **Back :** NodeJs, MongoDB, Stripe (payment API).
## 💻 Data Schemas (dynamic): 
- users:
  email: { type: String, required: true },
  password: { type: String, required: true },
- sessions (Passport): 
 _id, expires, session {cookie}
- products: 
  imagePath: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true }
- orders: 
  user: { type: Schema.Types.ObjectId, ref: "User" },
  cart: { type: Object, required: true },
  address: { type: String, required: true },
  name: { type: String, required: true },
  paymentId: { type: String, required: true }
## 🔑 Installed Dependencies: 
    "bcrypt-nodejs": "0.0.3",
    "body-parser": "^1.19.0",
    "connect-flash": "^0.1.1",
    "connect-mongo": "^3.2.0",
    "cookie-parser": "~1.4.4",
    "csurf": "^1.10.0",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "express-handlebars": "^3.1.0",
    "express-router": "0.0.1",
    "express-session": "^1.17.0",
    "express-validator": "^5.3.1",
    "hbs": "~4.0.4",
    "http-errors": "~1.6.3",
    "mongoose": "^5.8.1",
    "morgan": "~1.9.1",
    "nodemon": "^2.0.2",
    "passport": "^0.4.1",
    "passport-local": "^1.0.0",
    "serve-favicon": "^2.5.0",
    "stripe": "^7.14.0"

## 👍 To start: 
simply run "npm start". Enjoy!
