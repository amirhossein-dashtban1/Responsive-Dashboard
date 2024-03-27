/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			dark: {
				primaryAction: "#666",
				primary: "#121C24",
				primaryBorder: "#33405C",
				primaryButton: "#F5C754",
				secondaryButton: "#E3E8F2",
				primaryButtonText: "#141C24",
				secondaryButtonText: "#F7FAFA",
				primaryChart: "#8A9EBF",
				primaryText: "#F7FAFA",
				secondaryText: "#8A9EBF",
			},
			light: {
				primaryAction: "#E3E8F2",
				primary: "#D4DBE8",
				primaryBorder: "#F5C754",
				primaryButton: "#E3E8F2",
				secondaryButton: "#141C24",
				primaryButtonText: "#141C24",
				secondaryButtonText: "#0F1622",
				primaryChart: "#141C24",
				primaryText: "#000",
				secondaryText: "#8A9EBF",
			},
		},

		screens: {
			xsm: "320px",

			sm: "550px",

			md: "768px",

			lg: "1024px",

			xlg: "1440px",
		},
	},
	plugins: [],
};
