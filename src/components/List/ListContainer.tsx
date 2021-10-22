import React, {useRef, useCallback} from 'react';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import ListComponent from './ListComponent';
import {RootState} from '../../store';
import {getEventsRequest} from '../../store/actions/actions';
import {IEvent} from '../../services/interfaces/index.interfaces';
import {TIME} from '../../constants/';

const ListContainer = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const events = useSelector((state: RootState) => state.events.events);
  const isLoading = useSelector((state: RootState) => state.events.isLoading);
  const refreshTime = useRef(new Date());

  const intervalCallback = useCallback(() => {
    dispatch(getEventsRequest());
    refreshTime.current = new Date();
  }, [dispatch]);

  useFocusEffect(
    useCallback(() => {
      dispatch(getEventsRequest());
      refreshTime.current = new Date();

      const interval = setInterval(intervalCallback, TIME.MINUTE);

      return () => {
        clearInterval(interval);
      };
    }, [dispatch, intervalCallback]),
  );

  const pullToRefreshHandler = () => {
    const isAllowedToRefresh =
      Math.abs(+new Date() - +refreshTime.current) > TIME.FIFTEEN_SECONDS;
    if (isAllowedToRefresh) {
      dispatch(getEventsRequest());
      refreshTime.current = new Date();
    }
  };

  const goToDetails = (item: IEvent) => {
    navigation.navigate('details', {item});
  };

  return (
    <ListComponent
      refreshing={isLoading}
      pullToRefreshHandler={pullToRefreshHandler}
      goToDetails={goToDetails}
      events={events}
    />
  );
};

export default ListContainer;
