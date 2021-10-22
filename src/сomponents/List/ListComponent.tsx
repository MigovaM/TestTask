import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
// import {
//   NativeBaseProvider,
//   Box,
//   HStack,
//   VStack,
//   Text,
//   Pressable,
//   Image,
// } from 'native-base';
import {IEvent} from '../../services/interfaces/index.interfaces';

interface ListComponentProps {
  goToDetails(): void;
  events: IEvent[];
}

const ListComponent = ({
  goToDetails,
  events,
}: ListComponentProps): JSX.Element => {
  const renderItem = ({item}: IEvent) => {
    return (
      <TouchableOpacity onPress={goToDetails}>
          <Text>{item.actor.display_login}</Text>
      </TouchableOpacity>
    );
  };

  return <FlatList data={events} renderItem={renderItem} />;
};

export default ListComponent;
