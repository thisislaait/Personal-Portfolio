import Img_One from '../assets/images/avatar1.png';
import Img_Two from '../assets/images/avatar2.png';
import Img_Three from '../assets/images/avatar3.png';
import { FiInstagram, FiX, FiGithub, FiLinkedin } from 'react-icons/fi'

const navList = [
    {
      id: 1,
      title: 'Join the trybe', 
      sub_title: 'Know Me', 
      route: '/about',
      img: Img_One,
      
    },
    {
      id: 2,
      title: 'Loyalty Rewards', 
      sub_title: 'Projects', 
      route: '/portfolio',
      img: Img_Two,
      
    },

    {
      id: 3,
      title: 'Support', 
      sub_title: 'Lets Work', 
      route: '/',
      img: Img_Three,
      
    },
    {
      id: 4,
      title: 'Join the trybe', 
      sub_title: 'Know Me', 
      route: '/about',
      img: Img_One,
      
    },
    {
      id: 5,
      title: 'Loyalty Rewards', 
      sub_title: 'Projects', 
      route: '/portfolio',
      img: Img_Two,
      
    },

    {
      id: 6,
      title: 'Support', 
      sub_title: 'Lets Work', 
      route: '/',
      img: Img_Three,
      
    },
    {
      id: 7,
      title: 'Facebook', 
      sub_title: 'Meta', 
      route: '/',
      icon: <FiGithub />,
      
    },
    {
      id: 8,
      title: 'Support', 
      sub_title: 'LinkedIn', 
      route: '/',
      icon: <FiLinkedin />,
      
    },
    {
      id: 9,
      title: 'Support', 
      sub_title: 'X', 
      route: '/',
      icon: <FiX />,
      
    },
    
    ];
    
    export default navList;