
import React, { Component } from 'react';
import { Text, FlatList,Dimensions,TouchableOpacity, View, Image, StyleSheet, ScrollView } from 'react-native';

var {height, width } = Dimensions.get('window');
// http://newsapi.org/v2/top-headlines?country=us&apiKey=7a59606d27fa42019248a65242b6840c

// http://3.23.27.30/services/get/?&_from=1&_to=5
class App extends Component {
  state = { articles: [] };
  componentDidMount() {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json'); 
     
    fetch('http://3.23.27.30/services/get/?&_from=1&_to=5',{ method: 'GET'})
    .then( (res) => res.json())
    .then( (data) => {
      // const { articles } = data
      console.log(data);
      this.setState({articles: data});

      
    }).catch( error => {
      console.log('erre',error);
    });
  }

  // <figure className="image">
              
  // </figure>
  // <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
  mostrar() {
    return (

      <ScrollView>
        <View style={{ flex: 1,backgroundColor:'#f2f2f2' }}>

          
      
        </View>
        <View style={{width: width, borderRadius: 20, 
          paddingVertical:10,
          top: 10,
          alignItems: 'center',
          backgroundColor:'white'}}>
          
          <FlatList
            numColumns={2}
            data={this.state.articles}
            renderItem= {({ item }) =>  this._renderItem(item) }


            keyExtractor = { (item,index) => index.toString() }
            />
          <View style={{height:20}} />
        </View>
      </ScrollView>

    );
    
  }
  

  _renderItem(item) {
    return(
      <TouchableOpacity style={styles.divFood}>
        <View>
          <Image
            style={styles.imageFood}
            resizeMode="contain"
            source={{
            uri: item.image
            }}  />
          
          <View style={{height:((width/2)-20)-90, backgroundColor:'transparent', width:((width/2)-20)-10}} />
            <Text style={{fontWeight:'bold',fontSize:15,textAlign:'center'}}>
              {item.producto}
            </Text>
          <Text style={{fontSize:12,color:"green"}}> S/. {item.price}</Text>
      
        </View>
      </TouchableOpacity>
    )
  }

  mostrar2() {
    console.log('prueba2', this.state.articles);
    
  }
  render() {
    // console.log('asdsa', this.state.articles[0]);
    
    return (
      <View >
        <Text> Lista </Text>
      
        
        {this.mostrar()}
       
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  divCategorie: {
    backgroundColor: '#78f599',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
  },
  titleCatg: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  divFood:{
    width:(width/2)-20,
    padding:10,
    borderRadius:10,
    marginTop:55,
    marginBottom:5,
    marginLeft:10,
    alignItems:'center',
    elevation:8,
    shadowOpacity:0.3,
    shadowRadius:50,
    backgroundColor:'white',
  },
  imageFood: {
    width:((width/2)-25)-10,
    height:((width/2)-25)-30,
    backgroundColor:'transparent',
    position:'absolute',
    top:-45
  },
});


