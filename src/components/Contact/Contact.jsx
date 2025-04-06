import styles from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa';

const Contact = ({ data: {id, name,number }, onDelete }) => {    
    return (
        <div className={styles.contact}>            
            <p><FaUser />{name}</p>
            <p><FaPhone />{number}</p>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>        
    );
};

export default Contact;
