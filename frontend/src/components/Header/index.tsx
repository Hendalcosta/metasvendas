import logo from '../../assets/img/MetasLogo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="meta-sales-logo-container">
                <img src={logo} alt="Meta de Vendas" />
                <h1> Meta de Vendas</h1>
                <p>Desenvolvido por

                    <a href="https://github.com/Hendalcosta"> Henderson Alves Costa</a>
                </p>
            </div>
        </header>


    )

}

export default Header;