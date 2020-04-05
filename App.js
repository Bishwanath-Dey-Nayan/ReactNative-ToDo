import React, { useState } from 'react';
import { StyleSheet, Text, View,FlatList, TouchableOpacity, Modal, Button } from 'react-native';
import InsertGoal from './Component/AddGoal';

export default function App() {
 
  const [courseGoal, setCourseGoals] = useState([]);
  const [isModalOpen,setModal] = useState(false);

  
  const handleModal = () =>
  {
    setModal(true);
  }
  const addGoalhandler = title => {
    console.log()
    // setCourseGoals([...courseGoal], entered);
    setCourseGoals(currentgoal => [
      ...currentgoal,
      {
        key:Math.random().toString(),
        value:title
    }])

    setModal(false);
  };

  const handleDelete = (goalId) =>
  {
    setCourseGoals(currentgoal => 
      {
        return currentgoal.filter(goal => goal.key !==goalId)
      })
  } 

  return (
    <View style={{ padding: 50 }}>
      <Button title="ADD Goal" onPress={handleModal}/>
      <InsertGoal  addGoalhandler={addGoalhandler} visible={isModalOpen}/>
      <FlatList
        keyExtractor={(item,index) => item.key}
        data={courseGoal}
        renderItem={itemData =>
        (
          <TouchableOpacity onPress={() => handleDelete(itemData.item.key)}>
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
          </TouchableOpacity>
        )}
      />


      {/* <View
     style={{backgroundColor:'red',
     flex:1,
    justifyContent:'center',
    alignItems:'center'

  }}
     >

       <Text>
         1
       </Text>
     </View>


     <View
     style={{backgroundColor:'blue',
     flex:1,
    justifyContent:'center',
    alignItems:'center'

  }}
     >

       <Text>
         2
       </Text>
     </View>

     <View
     style={{backgroundColor:'green',
     flex:2,
    justifyContent:'center',
    alignItems:'center'

  }}
     >

       <Text>
         3
       </Text>
     </View> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    padding: 10,
    backgroundColor: '#cccc',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10
  }

});
