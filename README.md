# Udhaarii

Udhaarii is a web application designed to help you ask for financial support from your friends when you are in need. Built with Next.js, MongoDB, and Razorpay, Udhaarii makes it easy to manage and receive payments securely.

## Features

- **User Authentication**: Secure login and registration using NextAuth.
- **Profile Management**: Users can update their profile information including profile picture and cover picture.
- **Payment Integration**: Seamless payment processing with Razorpay.
- **Donation Tracking**: Track donations and display top supporters.
- **Responsive Design**: Fully responsive design for an optimal user experience on all devices.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **MongoDB**: A NoSQL database for storing user and payment information.
- **Razorpay**: A payment gateway for processing donations.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Toastify**: For displaying notifications.

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Razorpay Account

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/udhaarii.git
   cd udhaarii
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:

   ```bash
   # GitHub OAuth (if required in your project)
   GITHUB_ID="your_github_id"
   GITHUB_SECRET="your_github_secret"

   # Razorpay Credentials
   KEY_ID="your_razorpay_key_id"
   KEY_SECRET="your_razorpay_key_secret"

   # MongoDB Configuration
   MONGO_URI="your_mongodb_uri"

   # Next.js Public URL
   NEXT_PUBLIC_URL="http://localhost:3000"
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. **Register/Login**: Create an account or log in using your credentials.
2. **Update Profile**: Go to the dashboard to update your profile information.
3. **Request Donations**: Share your profile link with friends to request donations.
4. **Make Payments**: Friends can make payments through the payment page.
5. **Track Donations**: View the list of top supporters and track the total amount raised.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

## Contact

For any questions or feedback, please contact [yourname@example.com](mailto:yourname@example.com).
