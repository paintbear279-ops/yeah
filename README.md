# Secure Ethereum Website

A responsive, modern website for Secure Ethereum - A Smarter Standard for Global Crypto Payments.

## Project Structure

```
eth/
├── index.html          # Home page
├── tutorial.html       # Tutorial page with network setup instructions
├── cashout.html        # Cash Out page with form
├── assets.html         # Assets page showing available digital assets
├── terms.html          # Terms and Conditions page
├── styles.css          # Main stylesheet with responsive design
├── script.js           # JavaScript for interactivity
├── images/             # Image assets directory
└── README.md           # This file
```

## Features

- **Fully Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Navigation Menu**: Sticky header with mobile hamburger menu
- **Multiple Pages**: 
  - Home: Hero section, features, and call-to-action
  - Tutorial: Network setup instructions and privacy information
  - Cash Out: Multi-step process with form
  - Assets: Showcase of available digital assets
  - Terms: Comprehensive terms and conditions
- **Interactive Elements**: Form validation, smooth scrolling, scroll animations
- **Newsletter Subscription**: Footer newsletter signup form

## Image Assets Required

Place the following images in the `images/` directory:

- `logo-white.png` - White logo for navigation
- `footerlogo.png` - Footer logo
- `01.png` - Hero image on home page
- `slide01.png` - Various slide images
- `slider02.png` - Slider images
- `slider03.png` - Additional slider image
- `full.png` - Full control section image
- `icon01.png` - Feature icons
- `check.png` - Checkmark icon
- `lock.png` - Lock icon for steps
- `coinville.png` - Coinville asset icon
- `juniper.png` - Juniper asset icon
- `bitforest.png` - Bitforest asset icon
- `almo.png` - ALMO asset icon
- `shareit.png` - Shareit asset icon
- `lightbolt.png` - Lightbolt asset icon

## Usage

1. Open `index.html` in a web browser
2. Navigate between pages using the menu
3. All pages are fully functional with form validation and interactive elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --dark-bg: #0f172a;
    /* ... */
}
```

### Content

Edit the HTML files directly to update text content, add new sections, or modify existing ones.

## Notes

- This is a static website (no backend required)
- Forms currently show alerts on submission (can be connected to a backend)
- All images are referenced but need to be added to the `images/` folder
- The website uses modern CSS features (Grid, Flexbox, CSS Variables)

