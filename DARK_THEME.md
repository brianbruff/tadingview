# TradingView Demo - Dark Theme Implementation

## Features

### 🌙 Dark Theme Support
- **Toggle Button**: Click the Dark/Light button in the top-right corner of the header
- **System Preference Detection**: Automatically detects your system's preferred color scheme
- **Persistent Settings**: Theme preference is saved in localStorage
- **Smooth Transitions**: All UI elements transition smoothly between themes

### Theme Details

#### Light Theme
- Clean, professional appearance with white backgrounds
- Blue accent colors (#1976d2)
- Light gray containers and borders
- High contrast for readability

#### Dark Theme
- Dark backgrounds (#121212, #1e1e1e)
- Lighter blue accents (#2196f3)
- Reduced eye strain for low-light environments
- Maintains excellent contrast ratios

### Components with Dark Theme Support
- ✅ Header/Toolbar with theme toggle
- ✅ Chat container and messages
- ✅ TradingView charts with theme-aware backgrounds
- ✅ Bot message cards
- ✅ Typing indicators
- ✅ Control panels and completion screens

### Technical Implementation
- **CSS Custom Properties**: Uses CSS variables for consistent theming
- **Theme Service**: Angular service for theme state management
- **Reactive Design**: Components automatically update when theme changes
- **Chart Integration**: TradingView charts adapt to theme changes
- **Material Design**: Compatible with Angular Material components

### Usage
1. Open the application
2. Look for the theme toggle button in the top-right corner
3. Click to switch between light and dark themes
4. Your preference will be automatically saved

The dark theme provides a modern, professional appearance that's easier on the eyes, especially during extended trading analysis sessions.
