# Frui - Modern Trading Application

Frui is a sleek, responsive, and modern trading application interface built with React and Vite. It features a dark-themed UI optimized for mobile and desktop, real-time market data visualization, and a seamless user experience with smooth animations.

## 🚀 Features

- **Market Overview**: Browse various market categories (Forex, Crypto, Indices, etc.) with real-time price updates and color-coded changes.
- **Advanced Charting**: Interactive financial charts powered by Chart.js with time-frame selection (1H, 4H, 1D, 1W).
- **Trading Interface**: Intuitive Buy/Sell controls with live account statistics (Balance, Equity, Margin).
- **User Profile**: Comprehensive user dashboard showing account verification status, profit/loss stats, and settings.
- **Responsive Design**: Fully responsive layout that adapts perfectly from mobile devices to large desktop screens.
- **Smooth Animations**: Subtle, professional-grade animations for transitions and interactions using `tailwindcss-animate`.
- **Search & Filter**: robust filtering system to quickly find currency pairs or assets.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charting**: [Chart.js](https://www.chartjs.org/) & [React Chartjs 2](https://react-chartjs-2.js.org/)
- **Animations**: [Tailwindcss Animate](https://github.com/jamiebuilds/tailwindcss-animate)

## 📦 Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/frui.git
    cd frui
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
src/
├── assets/          # Static assets (images, svgs)
├── components/      # Reusable UI components
│   ├── BottomNav.jsx    # Mobile-first navigation bar
│   ├── CurrencyPair.jsx # Flag icons component
│   ├── Header.jsx       # Top app bar with menu/filter
│   ├── Home.jsx         # Main dashboard view
│   ├── MarketItem.jsx   # Individual market row component
│   ├── Trade.jsx        # Trading view with charts
│   ├── Profile.jsx      # User settings and stats
│   └── ...
├── data/            # Mock data for development
│   └── mockData.js
├── App.jsx          # Main application entry point
└── index.css        # Global styles and Tailwind directives
```

## 🎨 UI/UX Highlights

- **Dark Mode**: The application is built with a "dark-first" approach, using a sophisticated palette of Zinc and Black.
- **Micro-interactions**: Buttons, list items, and tabs feature subtle scale and fade effects on hover and click.
- **Glassmorphism**: Used selectively in overlays and menus for a modern feel.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
