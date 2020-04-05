import React,{useState} from 'react';
import {View, TextInput, Button, Modal} from 'react-native';

const InsertGoal  = (props) =>{
    const [entered, setEnteredGoal] = useState("");
    const inputHandler = (entered) => {
        setEnteredGoal(entered);
      }
    return (
        <Modal visible={props.visible} animationType='slide'>
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center',padding:10 }}>
        <TextInput
          placeholder="Course Goal"
          style={{ borderWidth: 1, width: '80%',marginBottom:10 }}
          onChangeText={inputHandler}
          value={entered}
        />
        <Button title="ADD" onPress={props.addGoalhandler.bind(this,entered)} />
      </View>
      </Modal>
    );
}

export default InsertGoal;