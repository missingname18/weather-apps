
const Navbar : React.FC = () => {
  return (
    <nav style={
      {
        display: 'flex',
        margin: 'auto',
        alignItems: "center",
        justifyContent: "space-between",
        width: '80%',
      }
    }>
      <img src="/logo.svg" alt="" style={
        {
          width: '100px',
          height: '100px',
        }
      } />
      <h2
      style={
        {
          fontSize: '1rem',
          fontWeight: 'bold',
          color: 'white'
        }
      }
      >V1</h2>
    </nav>
  )
}

export default Navbar
