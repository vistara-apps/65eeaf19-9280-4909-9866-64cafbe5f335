# BetBase - Peer-to-Peer Sports Betting Base Mini App

A football peer-to-peer betting app built for Base Wallet users, allowing easy bet creation and discovery using Base blockchain.

## Features

- **Bet Creation**: Create custom peer-to-peer bets for football matches
- **Bet Discovery**: Browse and join available bets from other users
- **Smart Contract Integration**: Automated bet execution on Base blockchain
- **Wallet Integration**: Seamless Base Wallet connectivity
- **Real-time Updates**: Live bet status and settlement tracking

## Getting Started

### Prerequisites

- Node.js 18+ 
- Base Wallet or compatible Web3 wallet
- OnchainKit API Key

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Add your OnchainKit API key to `.env.local`:
   ```
   NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_api_key_here
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

### Environment Setup

Get your OnchainKit API key from [Coinbase Developer Portal](https://portal.cdp.coinbase.com/).

## Architecture

### Data Models

- **User**: Wallet-based user identification
- **Bet**: Peer-to-peer betting contracts with stakes and outcomes  
- **Match**: Football match data for bet contexts

### Key Components

- `BetCard`: Display individual bet information
- `CreateBetModal`: Interface for creating new bets
- `BetFeedItem`: Feed item with join functionality
- `StatsCard`: Display betting statistics

### Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Blockchain**: Base network via OnchainKit
- **Wallet**: Wagmi + Base Wallet integration

## Usage

1. **Connect Wallet**: Use Base Wallet to connect
2. **Browse Bets**: View available bets in the feed
3. **Create Bet**: Set match, outcome, and stake amount
4. **Join Bets**: Match stakes with other users
5. **Settlement**: Automated payouts via smart contracts

## Smart Contract Integration

Currently using mock data. To integrate with actual smart contracts:

1. Deploy betting contracts to Base network
2. Update `useBets` hook with contract interactions
3. Implement oracle for match result verification
4. Add transaction signing for bet creation/joining

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details
