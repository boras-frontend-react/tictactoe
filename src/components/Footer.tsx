const Footer = () => (
  <footer className="border-t-accent border-t-4 shadow-md">
    <span className="flex justify-center items-center gap-2 text-sm p-4">
      © {new Date().getFullYear()}
      <a
        href="https://tombenrex.me"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-colors"
      >
        tombenrex
      </a>
      |
      <a
        href="https://github.com/boras-frontend-react"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-colors"
        aria-label="GitHub"
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.303-5.466-1.333-5.466-5.933 0-1.31.468-2.38 1.236-3.22-.123-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3-.403c1.02.005 2.046.138 3 .403 2.292-1.552 3.297-1.23 3.297-1.23.656 1.652.243 2.873.12 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.807 5.625-5.48 5.922.43.37.823 1.1.823 2.222v3.293c0 .32.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12z"
          />
        </svg>
      </a>
    </span>
  </footer>
);

export default Footer;
