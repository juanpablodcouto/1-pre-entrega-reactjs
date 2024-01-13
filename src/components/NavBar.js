import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>E-COMMERCE YERBA BUENA</h3>
            <div>
                <button>Running</button>
                <button>Ciclismo</button>
                <button>Senderismo</button>
            </div>
            <CartWidget />
        </nav>

    )
}

export default NavBar