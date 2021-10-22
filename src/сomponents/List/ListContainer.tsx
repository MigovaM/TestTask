import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import ListComponent from './ListComponent';
import {RootState} from '../../services/store';
import {getEventsRequest} from '../../services/store/actions/actions';

const ListContainer = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const events = useSelector((state: RootState) => state.evenst.events);
  // const isLoading = useSelector((state: RootState) => state.events.isLoading);

  useEffect(() => {
    dispatch(getEventsRequest());
  }, []);

  const goToDetails = () => {
    navigation.navigate('details');
  };

  return <ListComponent goToDetails={goToDetails} events={events} />;
};

export default ListContainer;
