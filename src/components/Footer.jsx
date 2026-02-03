const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-base-300 text-neutral-content p-4 md:p-6">
      <div className="max-w-6xl mx-auto flex  items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <div>
            <p className="text-sm md:text-base font-medium">DevTinder</p>
            <p className="text-xs md:text-sm opacity-80">
              © {year} • All rights reserved
            </p>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <a
            href="https://github.com/Rahul0356"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.51 11.51 0 013.003-.404c1.018.004 2.043.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.921.43.37.823 1.103.823 2.222v3.293c0 .319.216.694.825.576C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z" />
            </svg>
          </a>
          <a
            href="https://x.com/KumarRahul36001"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            title="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M17.657 6.343a1 1 0 0 0-1.414 0L12 10.586 7.757 6.343A1 1 0 0 0 6.343 7.757L10.586 12 6.343 16.243a1 1 0 1 0 1.414 1.414L12 13.414l4.243 4.243a1 1 0 0 0 1.414-1.414L13.414 12l4.243-4.243a1 1 0 0 0 0-1.414z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/rahul-kumar-6bb129245/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path
                d="M19 0h-14c-2.761 0-5 
                       2.239-5 5v14c0 2.761 2.239 5 
                       5 5h14c2.762 0 5-2.239 
                       5-5v-14c0-2.761-2.238-5-5-5zm-11 
                       19h-3v-9h3v9zm-1.5-10.286c-.966 
                       0-1.75-.784-1.75-1.75s.784-1.75 
                       1.75-1.75 1.75.784 1.75 
                       1.75-.784 1.75-1.75 
                       1.75zm13.5 10.286h-3v-4.5c0-1.121
                       -.879-2-2-2s-2 .879-2 
                       2v4.5h-3v-9h3v1.229c.673-.996 
                       1.907-1.229 3-1.229 2.206 
                       0 4 1.794 4 4v5z"
              />
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
