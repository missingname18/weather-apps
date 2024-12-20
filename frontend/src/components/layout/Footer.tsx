

const Footer = () => {
  return (
    <footer style={{
      position: "fixed",
      bottom: 0,
      color: "white",
      width: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      padding: "1rem",
    }}>
      <h3>© 2023 O-Weather Apps</h3>
      <div>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> | 
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
        <a href="mailto:support@oweatherapps.com">Email</a>
      </div>
    </footer>
  )
}

export default Footer;