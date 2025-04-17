import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel
} from '@ionic/react';
import React from 'react';

function Favorites() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Bible Reflections</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" color="light">
        <IonAccordionGroup>

          {/* Encouragement */}
          <IonAccordion value="verse1">
            <IonItem slot="header" color="primary">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>
                Encouragement - Isaiah 41:10
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p style={{ fontStyle: 'italic' }}>
                “So do not fear, for I am with you; do not be dismayed, for I am your God. 
                I will strengthen you and help you; I will uphold you with my righteous right hand.”
              </p>
            </div>
          </IonAccordion>

          {/* Strength */}
          <IonAccordion value="verse2">
            <IonItem slot="header" color="success">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>
                Strength - Philippians 4:13
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p style={{ fontStyle: 'italic' }}>
                “I can do all things through Christ who strengthens me.”
              </p>
            </div>
          </IonAccordion>

          {/* Peace */}
          <IonAccordion value="verse3">
            <IonItem slot="header" color="warning">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>
                Peace - John 14:27
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p style={{ fontStyle: 'italic' }}>
                “Peace I leave with you; my peace I give you. I do not give to you as the world gives. 
                Do not let your hearts be troubled and do not be afraid.”
              </p>
            </div>
          </IonAccordion>

          {/* Guidance */}
          <IonAccordion value="verse4">
            <IonItem slot="header" color="medium">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>
                Guidance - Proverbs 3:5-6
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p style={{ fontStyle: 'italic' }}>
                “Trust in the Lord with all your heart and lean not on your own understanding; 
                in all your ways submit to him, and he will make your paths straight.”
              </p>
            </div>
          </IonAccordion>

        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
}

export default Favorites;
