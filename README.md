


# Video Feed App

Welcome to the Video Feed App! This is a TikTok-ish vertical video feed built with Expo (not yet migrated to React Native CLI). It's not going to change the world, but hey, it works and you can scroll, like, mute, and even sign in with Google.

## Features
- Scroll through videos like you have nothing better to do
- Google Sign-In (Firebase-powered, sometimes moody)
- Profile page that shows your info so you feel important


## Getting Started

### Prerequisites
- Node.js (LTS)
- Expo CLI (`npm install -g expo-cli`)
- Android Studio (for Android) or Xcode (for iOS)
- A Firebase project with Google Sign-In enabled
- A sense of humor (optional, but recommended)

### Installation
1. Clone this beautiful mess:
   ```sh
   git clone https://github.com/insaneodyssey26/Video-feed-app.git
   cd Video-feed-app
   ```
2. Install the stuff:
   ```sh
   npm install
   ```
3. Add your Firebase config to a `.env` file (see `.gitignore` for what not to commit).
4. Run it:
   ```sh
   npx expo start
   ```

## Folder Structure
- `app/` - Screens and navigation
- `components/` - UI bits and pieces
- `assets/` - Images, fonts, and other stuff
- `constants/` - Colors and other constants
- `hooks/` - Custom hooks (because React devs love hooks)


## Notes
- This project is currently Expo-based. Migration to React Native CLI is planned, but not done yet.
- API keys and secrets are gitignored, so don’t even try.
- If something breaks, blame the internet. Or Google. Or me.

## License
MIT (because sharing is caring)
