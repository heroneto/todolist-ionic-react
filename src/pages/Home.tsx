import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import './Home.css';
import { trash } from 'ionicons/icons';
import { v4 as uuidv4 } from 'uuid';



type taskListProps = {
  id: string,
  name: string
}

const Home: React.FC = () => {
  const [taskName, setTaskName] = useState<string>('')
  const [taskList, setTaksList] = useState<taskListProps[]>([])

  const onSubmitTask = () => {
    setTaksList(values => [...values, {
      id: uuidv4(),
      name: taskName
    }])
  }

  const onRemoveTask = (id: string) => {
    setTaksList(values => values.filter(task => task.id !== id))
  }

  return (
    <IonPage>
      <IonHeader >
        <IonToolbar >
          <IonTitle >Lista de tarefas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonItem>
          <IonLabel position='stacked'>Nome da tarefa</IonLabel>
          <IonInput type='text' value={taskName} onIonChange={e => setTaskName(e.detail.value ? e.detail.value.toString() : '')} />
        </IonItem>
        <IonButton onClick={onSubmitTask} expand='full' >Adicionar</IonButton>
        <IonList>
          <IonText>Tarefas</IonText>
          {taskList.map(task => {
            return (
              <IonItem key={task.id}>
                <IonLabel>{task.name}</IonLabel>
                <IonButton onClick={() => onRemoveTask(task.id)} fill='clear'>
                  <IonIcon icon={trash} />
                </IonButton>
              </IonItem>
            )
          })}

        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
