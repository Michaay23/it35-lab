import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/react';

import React from 'react';

function Search() {
  const funnyQuotes = [
    {
      title: "Procrastination Level: Expert",
      subtitle: "“Due tomorrow? Do tomorrow.”",
      content: "They say never put off what you can do today... so I scheduled it for next week instead.",
      color: "medium",
      button: "Relatable",
    },
    {
      title: "Final Exam Vibes",
      subtitle: "“I studied everything… except what was on the test.”",
      content: "At this point, I'm just praying the professor curves the grade to match my vibes.",
      color: "warning",
      button: "I Feel That",
    },
    {
      title: "Coffee & Deadlines",
      subtitle: "“Powered by caffeine and panic.”",
      content: "My sleep schedule is like my GPA—barely hanging on, but still technically alive.",
      color: "tertiary",
      button: "Caffeine First",
    },
    {
      title: "Group Work Reality",
      subtitle: "“We’re all getting the same grade, right?”",
      content: "There's always that one person in the group who disappears like my will to study.",
      color: "danger",
      button: "Tag That One Person",
    },
    {
      title: "Zoom University",
      subtitle: "“You're muted.”",
      content: "The most repeated phrase of 2020... and every online class since.",
      color: "primary",
      button: "Still Muted",
    },
    {
      title: "Study Plan vs Reality",
      subtitle: "“Made a study plan. Ignored it.”",
      content: "The plan looked good on paper, but Netflix had other ideas.",
      color: "success",
      button: "Oops",
    },
    {
      title: "Me in Math Class",
      subtitle: "“I know numbers, just not these ones.”",
      content: "Why does math keep introducing letters? This isn't English class.",
      color: "light",
      button: "Too Real",
    },
    {
      title: "The 'Break' That Never Ends",
      subtitle: "“I'll just take a 5-minute break…”",
      content: "3 hours later: watching cat videos and questioning life choices.",
      color: "medium",
      button: "Guilty",
    },
    {
      title: "Alarm Roulette",
      subtitle: "“I set 7 alarms. Slept through all of them.”",
      content: "At this point, I think my alarm is in on the sabotage.",
      color: "tertiary",
      button: "Snooze King",
    },
    {
      title: "The Exam Face",
      subtitle: "“That moment when nothing looks familiar.”",
      content: "You flip the paper and realize you may have studied for the wrong class.",
      color: "warning",
      button: "Panic Mode",
    },
    {
      title: "Class Participation",
      subtitle: "“I was mentally present.”",
      content: "Physically there, mentally planning lunch. Does that count?",
      color: "success",
      button: "Still Counts",
    },
    {
      title: "Tuition Thoughts",
      subtitle: "“Paid how much for this stress?”",
      content: "Every breakdown comes with a receipt.",
      color: "danger",
      button: "College Life",
    },
    {
      title: "Lecture Notes",
      subtitle: "“Illegible handwriting, but it’s mine.”",
      content: "Deciphering my own notes is harder than the subject itself.",
      color: "primary",
      button: "Decode This",
    },
    {
      title: "Essay Time",
      subtitle: "“Word count: 500. Words I have: 12.”",
      content: "It's amazing how creative I can get when stretching a sentence.",
      color: "light",
      button: "Add Fluff",
    },
    {
      title: "Graduation Motivation",
      subtitle: "“Just trying to pass, not become Einstein.”",
      content: "They said shoot for the stars... I’m aiming for a passing grade.",
      color: "medium",
      button: "A for Effort",
    },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Student Humor</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" color="light">
        {funnyQuotes.map((quote, index) => (
          <IonCard color="light" key={index}>
            <IonCardHeader>
              <IonCardTitle>{quote.title}</IonCardTitle>
              <IonCardSubtitle>{quote.subtitle}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>{quote.content}</IonCardContent>
            <IonButton expand="block" fill="outline" color={quote.color}>
              {quote.button}
            </IonButton>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
}

export default Search;
