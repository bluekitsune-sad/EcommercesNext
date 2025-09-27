ecommerce-practice/
├── app/
│ ├── layout.jsx # Root layout (nav/footer)
│ ├── page.jsx # Homepage
│ ├── shop/
│ │ ├── page.jsx # Product listing
│ │ └── [id]/page.jsx # Product detail page (dynamic route)
│ ├── cart/page.jsx # Cart page
│ ├── checkout/page.jsx # Checkout page
│ └── api/
│ └── products/route.js # Example API route
│
├── components/ # Reusable components
│ ├── Navbar.jsx
│ ├── Footer.jsx
│ ├── ProductCard.jsx
│ ├── CartItem.jsx
│ └── Button.jsx
│
├── lib/ # Utilities/helpers
│ └── products.js # Fake product data (mock DB)
│
├── public/ # Static assets
│ └── images/ # Product images
│
├── styles/
│ └── globals.css
│
├── .gitignore
├── package.json
└── next.config.js

later on

add
error page
notFound page
loading page
