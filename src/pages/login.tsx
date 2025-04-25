import {  
  IonAlert,
  IonAvatar,
  IonButton,
  IonContent, 
  IonIcon, 
  IonInput, 
  IonInputPasswordToggle,  
  IonPage,  
  IonToast,  
  useIonRouter
} from '@ionic/react';
import { logoIonic } from 'ionicons/icons';
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({ message, isOpen, onClose }) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onClose}
      header="Notification"
      message={message}
      buttons={['OK']}
    />
  );
};

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const doLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setAlertMessage(error.message);
      setShowAlert(true);
      return;
    }

    setShowToast(true);
    setTimeout(() => {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }, 300);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding" style={{ background: '#f7f7f7', minHeight: '100vh' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            textAlign: 'center',
            padding: '0 20px', // Ensure padding for mobile
          }}
        >
          <IonAvatar
  style={{
    width: '100px', // Adjusted for smaller size
    height: '100px', // Adjusted for smaller size
    borderRadius: '50%',
    overflow: 'hidden',
    marginBottom: '30px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '50px', // Adjust the font size to fit the emoji
  }}
>
  👤
</IonAvatar>


          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333', marginBottom: '30px' }}>
            Welcome Back!
          </h1>

          <IonInput
            label="Email"
            labelPlacement="floating"
            fill="outline"
            type="email"
            placeholder="Enter your email"
            value={email}
            onIonChange={e => setEmail(e.detail.value!)}
            style={{
              marginBottom: '20px',
              width: '100%',
              maxWidth: '400px',
              fontSize: '1.2rem',
              padding: '12px',
              borderRadius: '10px',
              backgroundColor: '#fff',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
            }}
          />
          <IonInput
            label="Password"
            labelPlacement="floating"
            fill="outline"
            type="password"
            placeholder="Enter your password"
            value={password}
            onIonChange={e => setPassword(e.detail.value!)}
            style={{
              marginBottom: '30px',
              width: '100%',
              maxWidth: '400px',
              fontSize: '1.2rem',
              padding: '12px',
              borderRadius: '10px',
              backgroundColor: '#fff',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
            }}
          >
            <IonInputPasswordToggle slot="end" />
          </IonInput>

          <IonButton
            onClick={doLogin}
            expand="full"
            shape="round"
            style={{
              backgroundColor: '#3b82f6',
              color: '#fff',
              padding: '15px 0',
              fontSize: '1.2rem',
              borderRadius: '12px',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
            }}
          >
            Log In
          </IonButton>

          <IonButton
            routerLink="/it35-lab/Register"
            expand="full"
            fill="clear"
            shape="round"
            style={{
              fontSize: '1rem',
              color: '#3b82f6',
              padding: '15px 0',
              marginTop: '20px',
              borderRadius: '12px',
            }}
          >
            Don't have an account? Sign up
          </IonButton>

          {/* Reusable AlertBox Component */}
          <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />

          {/* IonToast for success message */}
          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message="Login successful! Redirecting..."
            duration={1500}
            position="top"
            color="primary"
            style={{
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
