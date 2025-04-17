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
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Feed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '16px',
          padding: '16px'
        }}>
          {cards.map((card, index) => (
            <IonCard key={index} style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
              <img alt={card.title} src={card.img} style={{ width: '100%', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}/>
              <IonCardHeader>
                <IonCardTitle>{card.title}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>{card.content}</IonCardContent>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;