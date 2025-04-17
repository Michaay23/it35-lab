import React from 'react';
import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';

const Favorites: React.FC = () => {
  const cards = [
    {
      title: "Remember why you started",
      img: "https://images.unsplash.com/photo-1564410267841-915d8e4d71ea?w=600&auto=format&fit=crop&q=60",
      content: "Stay motivated and focused on your goals."
    },
    {
      title: "If you never know failure, you will never know success",
      img: "https://images.unsplash.com/photo-1605514449459-5a9cfa0b9955?w=600&auto=format&fit=crop&q=60",
      content: "Embrace challenges as learning experiences."
    },
    {
      title: "Wake Up, Kick Ass, Be Kind, Repeat",
      img: "https://images.unsplash.com/photo-1577640256262-8488aa247e17?w=600&auto=format&fit=crop&q=60",
      content: "Consistency and kindness go a long way."
    }
  ]; 

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Inspiration</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding" style={{ 
        background: 'linear-gradient(to right, #fdfbfb, #ebedee)', 
        minHeight: '100vh' 
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          padding: '16px'
        }}>
          {cards.map((card, index) => (
            <IonCard 
              key={index}
              style={{
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                background: 'rgba(255, 255, 255, 0.8)',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease',
                overflow: 'hidden'
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img 
                alt={card.title} 
                src={card.img} 
                style={{ 
                  width: '100%', 
                  height: '180px', 
                  objectFit: 'cover' 
                }} 
              />
              <IonCardHeader>
                <IonCardTitle style={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  color: '#333'
                }}>
                  {card.title}
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent style={{ color: '#555', fontSize: '0.95rem' }}>
                {card.content}
              </IonCardContent>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
