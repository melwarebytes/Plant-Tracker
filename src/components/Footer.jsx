export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Merull Shah. All rights reserved.</p>
      <p>
        <a href="https://github.com/melwarebytes" target="_blank" rel="noopener noreferrer">GitHub</a>
        {' | '}
        <a href="https://www.linkedin.com/in/merull-shah-03b2a1353" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
    </footer>
  );
}
