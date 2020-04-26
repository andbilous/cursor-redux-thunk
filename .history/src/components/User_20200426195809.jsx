import React from 'react';

const User = (props) => {
  avatar: "https://scontent.fiev22-2.fna.fbcdn.net/v/t1.0-9/12540707_1021018771274839_7272974277184200398_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=BhI_QAqxlaUAX88XqYe&_nc_ht=scontent.fiev22-2.fna&oh=f95fb2eba193d7f4c8885aa5705ca8e8&oe=5EC5B8DA"
id: 1
name: "Anakin Skywalker"
username: "@dartvader"
  return (
<div style={styles.container}>
    <section style={styles.header}>
      <img style={styles.logo} src={props.avatar}/>
      <div style={styles.userContent}>
        <div style={styles.title}>
           <span style={styles.name}>{props.name}</span>
          <span>{props.author.nickname}</span> */}
          <i className="fa fa-check"></i>
        {/* <span>{props.date}</span> */}
          </div>
        <p style={styles.content}>{props.content}</p>
        <img src={props.image} style={styles.image}/>
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