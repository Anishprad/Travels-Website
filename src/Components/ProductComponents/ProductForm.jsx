import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faEnvelope, faMessage, faPhone, faTicket, faUser } from '@fortawesome/free-solid-svg-icons'
import { toast, ToastContainer } from 'react-toastify'

const ProductForm = () => {
    const formPackage = [
        {
            id: 1,
            name: "Name",
            icon: faUser,
            type: "text"
        },
        {
            id: 2,
            name: "Email",
            icon: faEnvelope,
            type: "email"
        },
        {
            id: 3,
            name: "Confirm Email",
            icon: faEnvelope,
            type: "email"
        },
        {
            id: 4,
            name: "Phone",
            icon: faPhone,
            type: "number"
        },
        {
            id: 5,
            name: "dd-mm-yy",   
            icon: faCalendar,
            type: "calendar"
        },
        {
            id: 6,
            name: "Number of Ticket",
            icon: faTicket,
            type: "text"
        },
        {
            id: 7,
            name: "Message",
            icon: faMessage,
            type: "textarea"
        },
    ]
    const handleBookNowClick = (event) => {
        event.preventDefault();
        toast.success("You have been booked.");
    };

    return (
        <form action="submit/form" className='flex flex-col gap-1' method='post'>
            {formPackage.map((item, index) => {
                return (
                    <div className='relative' key={index}>
                        <input type={item.type} className='font-medium text-sm bgcolor placeholder-white w-44 h-12 pl-10' placeholder={item.name} />
                        <p className='absolute top-3 left-4'><FontAwesomeIcon icon={item.icon} /></p>
                    </div>
                )
            })}
            <button className='bg-white text-black capitalize h-14'>Check availability</button>
            <button className='bg-white text-black capitalize h-14' onClick={()=>handleBookNowClick()}>Book Now</button>
            <ToastContainer/>
        </form>

    )
}

export default ProductForm