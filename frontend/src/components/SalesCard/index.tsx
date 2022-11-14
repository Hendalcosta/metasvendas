import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {
    return (
        <div className="meta-sales-card">
            <h2 className="sales-title">Vendas</h2>
            <div>
                <div className="meta-form-input-container">
                    <input className="meta-form-input" type="text" />
                </div>
                <div className="meta-form-input-container">
                    <input className="meta-form-input" type="text" />
                </div>
            </div>

            <div>
                <table className="meta-sales-table">
                    <thead>
                        <tr>
                            <th className="show-at-992px">ID</th>
                            <th className="show-at-576px">Data</th>
                            <th>Vendedor</th>
                            <th className="show-at-992px">Visitas</th>
                            <th className="show-at-992px">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show-at-992px">#196</td>
                            <td className="show-at-576px">05/10/2022</td>
                            <td>Urza</td>
                            <th className="show-at-992px">20</th>
                            <th className="show-at-992px">11</th>
                            <td>R$ 5245.00</td>
                            <td>
                                <div className="meta-notfication-button-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show-at-992px">#197</td>
                            <td className="show-at-576px">23/10/2022</td>
                            <td>Mishra</td>
                            <th className="show-at-992px">32</th>
                            <th className="show-at-992px">16</th>
                            <td>R$ 7457.00</td>
                            <td>
                                <div className="meta-notfication-button-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show-at-992px">#198</td>
                            <td className="show-at-576px">25/07/2022</td>
                            <td>Tocasia</td>
                            <th className="show-at-992px">62</th>
                            <th className="show-at-992px">30</th>
                            <td>R$ 1188.00</td>
                            <td>
                                <div className="meta-notfication-button-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default SalesCard