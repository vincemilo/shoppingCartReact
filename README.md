# Shopping Cart

Shopping cart simulation using React, React Router, with testing via Vitest and React Testing Library.

## Features

- Able to add products to cart
- Products pulled from FakeStore API
- Update quantity in cart

### Process

- Creating basic skeleton and routes and tested basic functionality navigation
- Created API call to fetch either multiple products for general product page or individual product for the individual product page as needed
- Realized I needed to move cart and item count further upstream to keep track of cart buttons on products and individual product page
- Created a clickHandler to add or update the cart appropriately
- Created custom useFetch hook to clean up product(s) components
- Figured out I needed to pass entire item to cart rather than just id and quantity in order to get totals, image, etc.
- Testing of product component was very obtuse until I discovered useFetch could just be regular mocked and didn't need to be an API mock
