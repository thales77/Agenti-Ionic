import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonLabel, IonCard, IonIcon, IonButton, IonCardContent, IonList } from '@ionic/react';
import ClientInfoCard from '../components/ClientInfoCard';
import data from '../data/clients.json';
import './ClientPage.css';


const ClientPage: React.FC = () => {

  const [text, setText] = useState<string>();
  const [clientList, setClientList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchClients = async () => {
      setLoading(true);
      try {
//        const data: any = await fetch('API');
        setClientList(JSON.parse(data));
        setLoading(false);
        console.log(clientList);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.log('error');
      }
    }
    fetchClients();
  }, [text, clientList]);


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
