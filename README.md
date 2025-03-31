# Smart Kitchen AI

An AI-powered kitchen management system that helps restaurants optimize their operations using computer vision, predictive analytics, and intelligent inventory management.

## Features

- **Computer Vision**: Real-time inventory tracking and waste detection using AI
- **AI Prediction**: Sales forecasting and inventory optimization
- **Menu Optimization**: Recipe recommendations and cost analysis
- **Waste Analysis**: Waste tracking and reduction strategies
- **Inventory Management**: Smart stock tracking and alerts
- **Analytics Dashboard**: Comprehensive insights and reporting

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- AWS Account (for computer vision features)
- OpenAI API Key (for recipe generation)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/smart-kitchen-ai.git
cd smart-kitchen-ai
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your configuration:
```env
PORT=3000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/smart-kitchen-ai
JWT_SECRET=your-secret-key-here
JWT_EXPIRES_IN=30d
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
AWS_REGION=your-aws-region
OPENAI_API_KEY=your-openai-api-key
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
```

4. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/signin` - Sign in user
- `GET /api/auth/me` - Get current user

### User Management
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `PUT /api/users/change-password` - Change password
- `DELETE /api/users/account` - Delete account

### Recipes
- `GET /api/recipes` - Get all recipes
- `GET /api/recipes/:id` - Get single recipe
- `POST /api/recipes` - Create recipe
- `PUT /api/recipes/:id` - Update recipe
- `DELETE /api/recipes/:id` - Delete recipe

### Inventory
- `GET /api/inventory` - Get all inventory items
- `GET /api/inventory/:id` - Get single inventory item
- `POST /api/inventory` - Create inventory item
- `PUT /api/inventory/:id` - Update inventory item
- `DELETE /api/inventory/:id` - Delete inventory item
- `PATCH /api/inventory/:id/stock` - Update stock level
- `GET /api/inventory/low-stock` - Get low stock items

### Analytics
- `GET /api/analytics/sales` - Get sales analytics
- `GET /api/analytics/waste` - Get waste analytics
- `GET /api/analytics/inventory` - Get inventory analytics
- `GET /api/analytics/recipes` - Get recipe performance analytics
- `GET /api/analytics/costs` - Get cost analytics
- `GET /api/analytics/summary` - Get summary analytics
- `POST /api/analytics` - Create analytics entry

## Testing

Run the test suite:
```bash
npm test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Support

For support, email support@smartkitchenai.com or create an issue in the repository. 