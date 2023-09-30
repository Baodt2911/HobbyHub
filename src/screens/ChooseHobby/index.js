import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import ButtonCustom from '../../components/Button';
import List_Hobbies from '../../utils/listHobbies';
import ItemHobby from '../../components/ItemHobby';
const ChooseHobby = () => {
  const [hobbies, setHobbies] = useState([]);
  console.log('hobbies: ', hobbies);
  const onSelectHobby = item => {
    if (hobbies.length >= 3) {
      return;
    }
    setHobbies([...hobbies, item]);
  };
  const onRemoveSelected = itemRemove => {
    const newHobbies = hobbies.filter(item => item !== itemRemove);
    setHobbies(newHobbies);
  };
  return (
    <View style={styles.container}>
      {/* Btn SKIP */}
      <TouchableOpacity style={styles.btnSkip}>
        <Text style={styles.txtBtnSkip}>SKIP</Text>
      </TouchableOpacity>
      <Text style={styles.title}>
        Select up to 3 hobbies to match with others.
      </Text>
      {/* Card List Hobbies */}
      <View style={styles.cardHobbies}>
        {List_Hobbies.map(item => {
          if (hobbies.includes(item.name_hobby)) {
            return (
              <ItemHobby
                key={item.id}
                name_hobby={item.name_hobby}
                onRemoveSelected={onRemoveSelected}
                isSelected={true}
              />
            );
          }
          return (
            <ItemHobby
              key={item.id}
              name_hobby={item.name_hobby}
              onSelectHobby={onSelectHobby}
            />
          );
        })}
      </View>
      {/* Button Finish */}
      <ButtonCustom
        title="Finished"
        style={styles.btnFinish}
        styleText={styles.txtBtnFinish}
        disabled={!hobbies}
      />
    </View>
  );
};

export default ChooseHobby;
