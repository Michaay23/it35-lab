import React, { useState } from 'react';  
import {
    IonButton,
    IonContent,
    IonHeader,
    IonInput,
    IonInputPasswordToggle,
    IonPage,
    IonTitle,
    IonToolbar,
    IonModal,
    IonText,
    IonItem,
    IonLabel,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonAvatar,  
} from '@ionic/react';
import { supabase } from '../utils/supabaseClient';
import bcrypt from 'bcryptjs';

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showVerificationModal, setShowVerificationModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleOpenVerificationModal = () => {

        if (!email.endsWith("@nbsc.edu.ph")) {
            alert("Only @nbsc.edu.ph emails are allowed to register.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        setShowVerificationModal(true);
    };

    const doRegister = async () => {
        setShowVerificationModal(false);

        const {data, error} = await supabase.auth.signUp({
            email,
            password,
        });

        if (error){
            alert("Account creation failed:" + error.message);
            return;
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const {error: insertError} = await supabase.from('users').insert([{
            username,
            user_email: email,
            user_password: hashedPassword,
        }]);

        if (insertError){
            alert("Failed to save user data:" + insertError.message);
            return;
        }

        setShowSuccessModal(true);
    };

    return (
        <IonPage>
            <IonContent className='ion-padding' style={{background: '#f7f7f7'}}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                    textAlign: 'center',
                    padding: '0 20px',
                }}>
                    <IonAvatar style={{
                        width: '100px',
                        height: '100px',
                        marginBottom: '20px',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                    }}>
                        <IonLabel style={{fontSize: '60px', color: '#3b82f6'}}>👤</IonLabel>
                    </IonAvatar>

                    <h1 style={{fontSize: '2rem', color: '#333', fontWeight: 'bold', marginBottom: '20px'}}>
                        Create Your Account
                    </h1>

                    <IonInput
                        style={{marginTop: '20px', width: '100%', maxWidth: '400px'}}
                        label="Username"
                        labelPlacement="stacked"
                        fill="outline"
                        type="text"
                        placeholder="Enter a unique username"
                        value={username}
                        onIonChange={e => setUsername(e.detail.value!)}
                    />
                    <IonInput
                        style={{marginTop: '15px', width: '100%', maxWidth: '400px'}}
                        label="Email"
                        labelPlacement="stacked"
                        fill="outline"
                        type="email"
                        placeholder="youremail@nbsc.edu.ph"
                        value={email}
                        onIonChange={e => setEmail(e.detail.value!)}
                    />
                    <IonInput
                        style={{marginTop: '15px', width: '100%', maxWidth: '400px'}}
                        label="Password"
                        labelPlacement="stacked"
                        fill="outline"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onIonChange={e => setPassword(e.detail.value!)}
                    >
                        <IonInputPasswordToggle slot="end" />
                    </IonInput>
                    <IonInput
                        style={{marginTop: '15px', width: '100%', maxWidth: '400px'}}
                        label="Confirm Password"
                        labelPlacement="stacked"
                        fill="outline"
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onIonChange={e => setConfirmPassword(e.detail.value!)}
                    >
                        <IonInputPasswordToggle slot="end" />
                    </IonInput>

                    <IonButton
                        style={{marginTop: '20px', width: '100%', maxWidth: '400px'}}
                        onClick={handleOpenVerificationModal}
                        expand="full"
                        shape="round"
                    >
                        Register
                    </IonButton>

                    <IonButton
                        routerLink="/it35-lab"
                        expand="full"
                        fill="clear"
                        shape="round"
                        style={{marginTop: '15px', width: '100%', maxWidth: '400px'}}
                    >
                        Already have an account? Signin
                    </IonButton>

                    {/* Verification Modal */}
                    <IonModal isOpen={showVerificationModal} onDidDismiss={() => setShowVerificationModal(false)}>
                        <IonToolbar className="ion-text-center" color="primary">
                            <IonTitle>Confirm Registration</IonTitle>
                        </IonToolbar>
                        <IonContent className="ion-padding">
                            <IonCard style={{marginTop: '20px'}}>
                                <IonCardHeader>
                                    <IonCardTitle><h3>User Registration Details</h3></IonCardTitle>
                                    <hr />
                                    <IonCardSubtitle>Username</IonCardSubtitle>
                                    <IonCardTitle>{username}</IonCardTitle>
                                    <IonCardSubtitle>Email</IonCardSubtitle>
                                    <IonCardTitle>{email}</IonCardTitle>
                                </IonCardHeader>
                                <div style={{display: 'flex', justifyContent: 'flex-end', marginRight: '5px'}}>
                                    <IonButton fill="clear" onClick={() => setShowVerificationModal(false)}>Cancel</IonButton>
                                    <IonButton color="primary" onClick={doRegister}>Confirm</IonButton>
                                </div>
                            </IonCard>
                        </IonContent>
                    </IonModal>

                    {/* Success Modal */}
                    <IonModal isOpen={showSuccessModal} onDidDismiss={() => setShowSuccessModal(false)} color="primary">
                        <IonContent className="ion-padding" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100vh',
                            textAlign: 'center',
                            marginTop: '35%',
                        }}>
                            <IonTitle>Registration Successful 🎉</IonTitle>
                            <IonText>
                                <p>Your account has been created successfully.</p>
                                <p>Please check your email address.</p>
                            </IonText>
                            <IonButton routerLink="/it35-lab" routerDirection="back" color="primary">
                                Go to Login
                            </IonButton>
                        </IonContent>
                    </IonModal>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Register;
