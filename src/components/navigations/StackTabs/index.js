/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginOrRegister from '../../../screens/LoginOrRegister';
import Onboarding from '../../../screens/Onboarding';
import ForgotPassword from '../../../screens/ForgotPassword';
import VerificationCode from '../../../screens/VerificationCode';
import ResetPassword from '../../../screens/ResetPassword';
import ChooseHobby from '../../../screens/ChooseHobby';
import ViewStory from '../../../screens/ViewStory';
import Home from '../../../screens/Home';
import TabViewer from '../../TabViewer';

const Stack = createNativeStackNavigator();
export default function StackTabs() {
  return (
    <Stack.Navigator
      initialRouteName="TabViewer"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="LoginOrRegister" component={LoginOrRegister} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="VerificationCode" component={VerificationCode} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="ChooseHobby" component={ChooseHobby} />
      <Stack.Screen name="TabViewer" component={TabViewer} />
      <Stack.Screen name="ViewStory" component={ViewStory} />
    </Stack.Navigator>
  );
}
