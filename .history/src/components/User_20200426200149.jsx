import React from 'react';

const User = (props) => {
  return (
<div>
    <section style={styles.header}>
      <img style={styles.logo} src={props.avatar}/>
      <div >
        <div style={styles.title}>
           <span style={styles.name}>{props.con}</span>
          <span>{props.username}</span>
          </div>
        </div>
    </section>
    </div>
  ) 
}
const styles = {
  container:{
    marginTop:'10%',
    borderRadius: '10%',
    backgroundColor:'grey',
    paddingTop:'10px',
    width: '30%',
    height: '70vh',
    position:'absolute',
    top: '5%',
    left: '40%',
    display:'flex',
    flexDirection: 'column'
  },
  title:{
    width: '300px',
    display:'flex',
    justifyContent:'space-between'
  },
  userContent:{
    marginLeft: '10px',
    display:'flex',
    flexDirection: 'column'
  },
  logo:{
    width:'70px',
    height: '70px',
    borderRadius: '50%'
  },
  image:{
    width:'90%',
    height: '200px',
    borderRadius: '10%',
    marginTop:'10px'
  },
  header:{
      display: 'flex'
  },
  name:{
    color:'white'
  },
  content: {
    color: 'white'
  }
}

export default User;