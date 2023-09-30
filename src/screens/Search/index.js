import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './style';
import SEARCH_ICON from '../../assets/icons/search.svg';
import FILTER_ICON from '../../assets/icons/filter.svg';
import ListHobbySearch from '../../components/ListHobbySearch';
import Logo from '../../components/Logo';

const Search = () => {
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
          <TouchableOpacity>
            <FILTER_ICON />
          </TouchableOpacity>
        </View>
        {/* List hobby search */}
        <View style={styles.cardListHobby}>
          <ListHobbySearch />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Search;
