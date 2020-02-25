/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Form,
  Item,
  Label,
  Input,
  Button,
  Left,
  Body,
  Thumbnail,
  Right,
} from 'native-base';

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NativeRouter, Route, Link} from 'react-router-native';


const data = [
  {
    title: 'My First Lead ',
    description: 'This is the description of my first lead',
    expectedAmount: 1234.98,
  },
  {
    title: 'My First Lead ',
    description: 'This is the description of my first lead',
    expectedAmount: 1234.98,
  },
  {
    title: 'My First Lead ',
    description: 'This is the description of my first lead',
    expectedAmount: 1234.98,
  },
  {
    title: 'My First Lead ',
    description: 'This is the description of my first lead',
    expectedAmount: 1234.98,
  },
];

const LeadList: () => React$Node = () => {
  return (
    <List>
      {data.map(lead => (
        <ListItem avatar>
          <Left>
            <Thumbnail
              source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ7nyMIkkLmU4f5LuQBVS-Dk5HHe_LvCtB-R6RbVo6C1D4eASs&s'}}/>
          </Left>
          <Body>
            <Text>{lead.title}</Text>
            <Text note>{lead.description}</Text>
          </Body>
          <Right>
            <Text note>$ {lead.expectedAmount}</Text>
          </Right>
        </ListItem>
      ))}
    </List>
  );
};

const Home = () => <Text>HOME</Text>;
const CreateLead = () => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [expectedAmount, setExpectedAmount] = React.useState(0);

  const createLead = () => {
    const lead = {
      title,
      description,
      expectedAmount,
    };
    data.push(lead);
  };

  return (
    <View style={{backgroundColor: 'red', flex: 1}}>
      <Form>
        <Item stackedLabel>
          <Label>Title</Label>
          <Input value={title} onChangeText={(val) => setTitle(val)}/>
        </Item>
        <Item stackedLabel last>
          <Label>Description</Label>
          <Input value={description} onChangeText={(val) => setDescription(val)}/>
        </Item>
        <Item stackedLabel>
          <Label>Expected Amount:</Label>
          <Input value={expectedAmount} onChangeText={(val) => setExpectedAmount(val)}/>
        </Item>
        <Button full onPress={createLead}>
          <Text>Create</Text>
        </Button>
      </Form>
    </View>
  );
};

const App: () => React$Node = () => {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Home</Text>
          </Link>
          <Link
            to="/lead-list"
            underlayColor="#f0f4f7"
            style={styles.navItem}
          >
            <Text>Lead List</Text>
          </Link>
          <Link
            to="/create-lead"
            underlayColor="#f0f4f7"
            style={styles.navItem}
          >
            <Text>Create Lead</Text>
          </Link>
        </View>

        <Route exact path="/" component={Home}/>
        <Route path="/lead-list" component={LeadList}/>
        <Route path="/create-lead" component={CreateLead}/>
      </View>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: 'center',
    fontSize: 15,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
