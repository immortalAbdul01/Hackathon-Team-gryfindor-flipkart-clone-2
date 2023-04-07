# Flipkart Clone

This is a Flipkart clone built during a hackathon using Next.js, Redux, Tailwind CSS, Stripe payments, and Google authentication with NextAuth.

## Getting Started

### Prerequisites

You will need to have Node.js installed on your computer to run this project. You can download and install it from the official website: https://nodejs.org/en/download/

### Installation

1. Clone this repository: `git clone https://github.com/yourusername/flipkart-clone.git`
2. Navigate to the project directory: `cd flipkart-clone`
3. Install the dependencies: `npm install`
4. Create a `.env.local` file in the root directory and add the following variables:

NEXTAUTH_URL=http://localhost:3000

STRIPE_SECRET_KEY=your_stripe_secret_key

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret

5. Replace `your_stripe_secret_key` with your Stripe API secret key, and `your_google_client_id` and `your_google_client_secret` with your Google OAuth2 client ID and client secret respectively.
6. Start the development server: `npm run dev`
7. Open your browser and go to `http://localhost:3000`

## Features

This Flipkart clone has the following features:

- Home page with products categories, top picks, and deals of the day
- User authentication with Google OAuth2 using NextAuth
- Shopping cart with checkout using Stripe payments


## Technologies Used

This Flipkart clone uses the following technologies:

- Next.js: A framework for building server-side rendered React applications
- Redux: A predictable state container for JavaScript applications
- Tailwind CSS: A utility-first CSS framework for rapid UI development
- Stripe: A payment processing platform for online businesses
- NextAuth: An authentication library for Next.js applications supporting various authentication providers

## Contributors

This Flipkart clone was built during a hackathon by:

- Abdul Khan(https://github.com/immortalAbdul01)
- Sushant Joshi (https://github.com)

## License

This project yet be Licensed
