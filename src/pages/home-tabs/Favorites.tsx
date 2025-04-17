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

          {/* Hope */}
          <IonAccordion value="verse5">
            <IonItem slot="header" color="dark">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>
                Hope - Jeremiah 29:11
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p style={{ fontStyle: 'italic' }}>
                “For I know the plans I have for you,” declares the Lord, “plans to prosper you 
                and not to harm you, plans to give you hope and a future.”
              </p>
            </div>
          </IonAccordion>

          {/* Love */}
          <IonAccordion value="verse6">
            <IonItem slot="header" color="danger">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>
                Love - 1 Corinthians 13:4-5
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p style={{ fontStyle: 'italic' }}>
                “Love is patient, love is kind. It does not envy, it does not boast, it is not proud. 
                It does not dishonor others, it is not self-seeking, it is not easily angered, 
                it keeps no record of wrongs.”
              </p>
            </div>
          </IonAccordion>

          {/* Comfort */}
          <IonAccordion value="verse7">
            <IonItem slot="header" color="tertiary">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>
                Comfort - Psalm 23:4
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p style={{ fontStyle: 'italic' }}>
                “Even though I walk through the darkest valley, I will fear no evil, 
                for you are with me; your rod and your staff, they comfort me.”
              </p>
            </div>
          </IonAccordion>

          {/* Faith */}
          <IonAccordion value="verse8">
            <IonItem slot="header" color="secondary">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>
                Faith - Hebrews 11:1
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p style={{ fontStyle: 'italic' }}>
                “Now faith is confidence in what we hope for and assurance about what we do not see.”
              </p>
            </div>
          </IonAccordion>

          {/* Trust */}
          <IonAccordion value="verse9">
             <IonItem slot="header" color="success">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>
                Trust - Psalm 56:3
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p style={{ fontStyle: 'italic' }}>
                “When I am afraid, I put my trust in you.”
              </p>
            </div>
          </IonAccordion>

          {/* Joy */}
          <IonAccordion value="verse10">
            <IonItem slot="header" color="warning">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>
                 Joy - Nehemiah 8:10
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p style={{ fontStyle: 'italic' }}>
                “Do not grieve, for the joy of the Lord is your strength.”
              </p>
            </div>
          </IonAccordion>

         </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
}

export default Favorites;
