# Goat DAIPP Template

A template ready to quickly launch your AI application by integrating Goat plugins and other essential dependencies. This project uses [pnpm](https://pnpm.io/) for package management and is built on [Next.js 15](https://nextjs.org/) to create modern and scalable web applications.

## Features

- **Quick Start**: Get your app running in minutes with a preconfigured setup.
- **AI Integration**: Incorporate artificial intelligence capabilities using plugins like [@ai-sdk/openai] and [@goat-sdk/plugin-modespray].
- **Web3 Support**: Connect to wallets and use adapters to interact with blockchains, thanks to [@goat-sdk/wallet-viem], [wagmi], and [@rainbow-me/rainbowkit].
- **Optimization and Quality**: Configured with ESLint, Biome, and TailwindCSS to ensure clean code and a modern design.

## Technologies Used

- **Next.js 15**: A React framework for full-stack applications.
- **pnpm**: Efficient package management.
- **React and React-DOM**: Libraries for building user interfaces.
- **TypeScript**: Static typing for increased robustness.
- **Goat Plugins**: Modules to integrate specific AI and Web3 functionalities.

### Key Dependencies

```json
{
  "dependencies": {
    "@ai-sdk/openai": "^1.2.0",
    "@goat-sdk/adapter-vercel-ai": "^0.2.9",
    "@goat-sdk/plugin-modespray": "^0.1.7",
    "@goat-sdk/wallet-viem": "^0.2.11",
    "@rainbow-me/rainbowkit": "^2.2.4",
    "@tanstack/react-query": "^5.55.3",
    "ai": "^4.1.50",
    "next": "15.2.1",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "viem": "2.23.3",
    "wagmi": "^2.14.11"
  },
  "devDependencies": {
    "@biomejs/biome": "1.9.4",
    "@eslint/eslintrc": "^3",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "15.2.1",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/goat-daipp-template.git
   cd goat-daipp-template
   ```

2. **Install Dependencies**

   Using pnpm:

   ```bash
   pnpm install
   ```

   *(If you prefer npm or yarn, those can be used as well, but pnpm is recommended for this template.)*

## Usage

### Development

Start the development server to see your application in action:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser and start editing the `app/page.tsx` file to see real-time updates.

### Build and Production

To generate the production build:

```bash
pnpm build
```

Then, to start the app in production mode:

```bash
pnpm start
```

## Example Usage

The template includes a simple example of AI integration using Goat plugins. Check out the example component in `app/page.tsx`, which demonstrates how to interact with the AI SDK and Goat plugins to perform queries and display responses in real time.

## Customization

- **Plugins**: You can add or configure more Goat plugins by modifying the corresponding configuration file (for example, in `modespray.plugin.ts` or other custom modules).
- **Styling**: The project uses TailwindCSS. Customize your design by modifying the `tailwind.config.js` file and your component styles.

## Contribution

Contributions are welcome! If you want to contribute improvements or report any issues, please open an [issue](https://github.com/your-username/goat-daipp-template/issues) or submit a pull request.

## License

This project is distributed under the [MIT](./LICENSE) license.
