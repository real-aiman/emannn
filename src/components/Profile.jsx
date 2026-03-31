import emanImg from '../assets/eman.png';

export default function Profile() {
  return (
    <img 
      src={emanImg} 
      alt="Aiman Shafiq Photo" 
      style={{ 
        width: '180px', 
        height: '200px', 
        objectFit: 'cover', 
        display: 'block' 
      }} 
    />
  );
}