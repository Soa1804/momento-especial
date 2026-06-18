tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-container": "#d23636",
        "on-secondary-container": "#7a4a54",
        "secondary-fixed": "#ffd9df",
        "tertiary-fixed": "#eae0e1",
        "on-secondary": "#ffffff",
        "inverse-surface": "#382e2e",
        "surface-dim": "#e7d6d6",
        "on-secondary-fixed-variant": "#663a43",
        "on-tertiary-fixed": "#1f1a1b",
        "surface-container-low": "#fff0f0",
        "on-background": "#221919",
        "surface-container-highest": "#f0dfde",
        "surface-container": "#fceae9",
        "outline-variant": "#e3bebb",
        "primary": "#af1a21",
        "on-primary-fixed": "#410004",
        "inverse-on-surface": "#feedec",
        "on-tertiary-container": "#fff6f6",
        "secondary-fixed-dim": "#f4b6c1",
        "on-tertiary-fixed-variant": "#4b4546",
        "tertiary-fixed-dim": "#cdc4c5",
        "inverse-primary": "#ffb3ad",
        "tertiary-container": "#777071",
        "outline": "#8f706d",
        "primary-fixed-dim": "#ffb3ad",
        "surface": "#fff8f7",
        "on-tertiary": "#ffffff",
        "background": "#fff8f7",
        "on-secondary-fixed": "#330f19",
        "on-primary-fixed-variant": "#930012",
        "surface-tint": "#b72126",
        "on-error": "#ffffff",
        "surface-bright": "#fff8f7",
        "on-error-container": "#93000a",
        "on-primary-container": "#fff5f4",
        "error": "#ba1a1a",
        "surface-container-high": "#f6e4e4",
        "secondary-container": "#fdbec9",
        "on-primary": "#ffffff",
        "surface-variant": "#f0dfde",
        "surface-container-lowest": "#ffffff",
        "secondary": "#81515a",
        "on-surface": "#221919",
        "error-container": "#ffdad6",
        "on-surface-variant": "#5a403e",
        "tertiary": "#5e5859",
        "primary-fixed": "#ffdad7"
      },

      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "1.5rem",
        full: "9999px"
      },

      spacing: {
        "container-padding": "24px",
        "section-gap": "80px",
        "stack-md": "24px",
        "stack-sm": "12px",
        "base": "8px"
      },

      fontFamily: {
        "body-lg": ["Plus Jakarta Sans"],
        "display-lg-mobile": ["Playfair Display"],
        "body-md": ["Plus Jakarta Sans"],
        "headline-md": ["Playfair Display"],
        "display-lg": ["Playfair Display"],
        "label-bold": ["Plus Jakarta Sans"]
      },

      fontSize: {
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "display-lg-mobile": ["40px", { lineHeight: "48px", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "headline-md": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "display-lg": ["56px", { lineHeight: "64px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "label-bold": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "700" }]
      }
    }
  }
};