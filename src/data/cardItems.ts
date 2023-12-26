import CardItem from "../models/CardItem";
import search_doctor from '../assets/card_images/search_doctor.svg'
import online_pharmacy from '../assets/card_images/online_pharmacy.svg'
import consultation from '../assets/card_images/consultation.svg'
import details_info from '../assets/card_images/details_info.svg'
import emergency_care from '../assets/card_images/emergency_care.svg'
import tracking from '../assets/card_images/tracking.svg'

const cardItems: CardItem[] = [
    {
        image: search_doctor,
        title: 'Search doctor',
        description: 'Choose your doctor from thousands of specialist, general, and trusted hospitals'
    },
    {
        image: online_pharmacy,
        title: 'Online pharmacy',
        description: 'Buy  your medicines with our mobile application with a simple delivery system'
    },
    {
        image: consultation,
        title: 'Consultation',
        description: 'Free consultation with our trusted doctors and get the best recomendations'
    },
    {
        image: details_info,
        title: 'Details info',
        description: 'Free consultation with our trusted doctors and get the best recomendations'
    },
    {
        image: emergency_care,
        title: 'Emergency care',
        description: 'You can get 24/7 urgent care for yourself or your children and your lovely family'
    },
    {
        image: tracking,
        title: 'Tracking',
        description: 'Track and save your medical history and health data '
    },
];

export default cardItems;