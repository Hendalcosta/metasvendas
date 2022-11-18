import axios from 'axios';
import icon from '../../assets/img/IconNotification.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';

type Props = {
    saleId: number;
}

function handleClick (id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            console.log("sucesso")
        })
}

function NotificationButton({saleId} : Props) {
    return (
        <div className="meta-notfication-button" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notificar"/>
        </div>
    )

}

export default NotificationButton;
