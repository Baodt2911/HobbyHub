import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import SEARCH_ICON from '../../assets/icons/search.svg';
import FILTER_ICON from '../../assets/icons/filter.svg';
import ListHobbySearch from '../../components/ListHobbySearch';
import Logo from '../../components/Logo';
import Skeleton from '../../utils/Skeleton';
import FilterSearch from '../../components/FilterSearch';

const Search = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [searchType, setSearchType] = useState('general');
  const onOpenFilterSearch = () => {
    setIsOpenFilter(!isOpenFilter);
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {/* Logo */}
        <View style={styles.logo}>
          <Logo />
        </View>
        {/* Search */}
        <View style={styles.search}>
          {/* ICON Search */}
          <SEARCH_ICON />
          <TextInput
            style={styles.search_input}
            placeholder="Search here"
            placeholderTextColor={'#3b3b3b4d'}
          />
          {/* Button Filter */}
          <TouchableOpacity onPress={onOpenFilterSearch}>
            <FILTER_ICON />
          </TouchableOpacity>
        </View>
        {/* Card Filter  */}
        {isOpenFilter && (
          <FilterSearch
            isOpen={isOpenFilter}
            searchType={searchType}
            onChangeSearchType={setSearchType}
          />
        )}
        {/* List hobby search */}
        {!isOpenFilter && (
          <View style={styles.cardListHobby}>
            <ListHobbySearch />
          </View>
        )}
        {/* Content */}
        <ScrollView>
          {/* <Skeleton width={50} height={50} style={{borderRadius: 100}} /> */}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Search;
