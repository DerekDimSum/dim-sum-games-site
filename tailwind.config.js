/**
 * Tailwind build config for the static site.
 * Rebuild after editing markup:
 *   ./tailwindcss -i tailwind.input.css -o styles.css --minify
 * (Get the CLI: github.com/tailwindlabs/tailwindcss/releases — tailwindcss-linux-x64)
 */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: { ink: '#1c1917', coral: '#f2836f' },
      fontFamily: {
        display: ['"Baloo 2"', 'system-ui', 'sans-serif'],
        body: ['"Nunito"', 'system-ui', 'sans-serif'],
      },
    },
  },
};
