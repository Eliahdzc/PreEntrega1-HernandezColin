import CartWidget from "../CartWidget/CartWidget"
import Logo from "../Logo/Logo"
import '../NavBar/NavBar.css'

const NavBar = () => {
  return (
    <div className="nav">
        <Logo />
        <ul className="barra">
            <li className="lista">Pasteles</li>
            <li className="lista">Cupcakes</li>
            <li className="lista">Brownies</li>
            <li className="lista">Pays</li>
            <li className="lista">Galletas</li>
        </ul>
        <CartWidget />


    </div>
  )
}

export default NavBar