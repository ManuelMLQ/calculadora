import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

/*Los grid*/
import { IonCol, IonGrid, IonRow } from '@ionic/react';

/*Botones*/
import { IonButton } from '@ionic/react';



const Tab1: React.FC = () => {
  const [ text, setText ] = React.useState("0") 

  return(
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Tab 1</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonGrid>
        <IonRow>
          <IonCol><p id="result">{text}</p></IonCol>
        </IonRow>
        <IonRow>
          <IonCol><IonButton color="primary" onClick={ () => text==="0"? setText("7") : setText(text + "7") }>7</IonButton></IonCol>
          <IonCol><IonButton color="primary" onClick={ () => text==="0"? setText("8") : setText(text + "8") }>8</IonButton></IonCol>
          <IonCol><IonButton color="primary" onClick={ () => text==="0"? setText("9") : setText(text + "9") }>9</IonButton></IonCol>
          <IonCol><IonButton color="secondary" onClick={ () => text==="0"? setText("-") : setText(text + "-") }>-</IonButton></IonCol>
        </IonRow>
        <IonRow>
          <IonCol><IonButton color="primary" onClick={ () => text==="0"? setText("4") : setText(text + "4") }>4</IonButton></IonCol>
          <IonCol><IonButton color="primary" onClick={ () => text==="0"? setText("5") : setText(text + "5") }>5</IonButton></IonCol>
          <IonCol><IonButton color="primary" onClick={ () => text==="0"? setText("6") : setText(text + "6") }>6</IonButton></IonCol>
          <IonCol><IonButton color="secondary" onClick={ () => text==="0"? setText("+") : setText(text + "+") }>+</IonButton></IonCol>
        </IonRow>
        <IonRow>
          <IonCol><IonButton color="primary" onClick={ () => text==="0"? setText("1") : setText(text + "1") }>1</IonButton></IonCol>
          <IonCol><IonButton color="primary" onClick={ () => text==="0"? setText("2") : setText(text + "2") }>2</IonButton></IonCol>
          <IonCol><IonButton color="primary" onClick={ () => text==="0"? setText("3") : setText(text + "3") }>3</IonButton></IonCol>
          <IonCol><IonButton color="secondary" onClick={ () => text==="0"? setText("*") : setText(text + "*") }>*</IonButton></IonCol>
        </IonRow>
        <IonRow>
          <IonCol></IonCol>
          <IonCol size="6"><IonButton color="primary" onClick={ () => text==="0"? setText("0") : setText(text + "0") }>0</IonButton></IonCol>
          <IonCol><IonButton color="secondary" onClick={ () => text==="0"? setText("/") : setText(text + "/") }>/</IonButton></IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="9"><IonButton color="danger" onClick={ () => setText("0") }>Borrar</IonButton></IonCol>
          <IonCol><IonButton color="secondary">=</IonButton></IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
  );
};

export default Tab1;
