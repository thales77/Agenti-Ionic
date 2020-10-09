import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonLabel, IonCard, IonIcon, IonButton, IonCardContent, IonList } from '@ionic/react';
import arraySort from 'array-sort';
import ClientInfoCard from '../components/ClientInfoCard';
import './ClientPage.css';


const ClientPage: React.FC = () => {

  const [text, setText] = useState<string>();
  const [clientList, setClientList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const sortData = (data: JSON) => {
    return arraySort(data, (a, b) => a.name.localeCompare(b.name), {
      reverse: sort,
    });
  };

  useEffect(() => {
    const fetchClients = async () => {
      setLoading(true);
      try {
        const clients = await fetch("http://localhost:8080/clients.json");
        setClientList(sortData(clients));
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
  }, [text]);


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
