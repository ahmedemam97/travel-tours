import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function WhatsAppBtn() {
    return (
        <a
            href="https://wa.me/+201002500976"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp_float"
        >
            <FontAwesomeIcon icon={faWhatsapp} />
        </a>
    );
}

export default WhatsAppBtn;