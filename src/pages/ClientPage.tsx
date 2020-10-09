import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonLabel, IonCard, IonIcon, IonButton, IonCardContent, IonList } from '@ionic/react';
import ClientInfoCard from '../components/ClientInfoCard';
import './ClientPage.css';


const ClientPage: React.FC = () => {

  const [text, setText] = useState<string>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Clienti</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem>
          <IonLabel position="floating">Cerca cliente</IonLabel>
          <IonInput value={text} onIonChange={e => setText(e.detail.value!)}></IonInput>
        </IonItem>
        <IonList>
          <ClientInfoCard />
          <ClientInfoCard />
          <ClientInfoCard />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ClientPage;
