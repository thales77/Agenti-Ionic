import React from 'react';
import { IonItem, IonLabel, IonCard, IonIcon, IonButton, IonCardContent } from '@ionic/react';
import { personCircleOutline } from 'ionicons/icons';
import './ClientInfoCard.css';



const ClientInfoCard: React.FC = () => {
  return (
    <IonCard>
            <IonItem>
              <IonIcon icon={personCircleOutline} slot="start" />
              <IonLabel><i>007519</i> <b>Boemio Giovanni e figli</b></IonLabel>
              <IonButton fill="outline" slot="end">View</IonButton>
            </IonItem>
            <IonCardContent>
              <p>Partita Iva: 35655181151</p>
              <p>Indirizzo: Via sannitica 34/</p>
              <p>Fatturato €23.000/</p>
            </IonCardContent>
          </IonCard>
  );
};

export default ClientInfoCard;