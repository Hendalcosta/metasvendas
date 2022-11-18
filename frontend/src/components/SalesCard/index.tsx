import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sale } from "../../models/sale";
import { BASE_URL } from "../../utils/request";
import NotificationButton from '../NotificationButton';
import './styles.css';

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date()

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [sales, setSales] = useState<Sale[]>([])

    useEffect(() => {

        const dMin = minDate.toISOString().slice(0, 10);
        const dMax = maxDate.toISOString().slice(0, 10);

        axios.get(`${BASE_URL}/sales?minDate=${dMin}&maxDate=${dMax}`)
            .then(response => {
                setSales(response.data.content);
            })
    }, [minDate, maxDate]);


    return (
        <div className="meta-sales-card">
            <h2 className="sales-title">Vendas</h2>
            <div>
                <div className="meta-form-input-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="meta-form-input"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="meta-form-input-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="meta-form-input"
                        dateFormat="dd/MM/yyyy"
                    />
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
                        {sales.map(sale => {
                            return (
                                <tr key={sale.id}>
                                    <td className="show-at-992px">{sale.id}</td>
                                    <td className="show-at-576px">{new Date(sale.date).toLocaleDateString()}</td>
                                    <td>{sale.sellerName}</td>
                                    <th className="show-at-992px">{sale.visited}</th>
                                    <th className="show-at-992px">{sale.deals}</th>
                                    <td>{sale.amount.toFixed(2)}</td>
                                    <td>
                                        <div className="meta-notfication-button-container">
                                            <NotificationButton />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default SalesCard;