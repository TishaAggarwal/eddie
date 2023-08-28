import React from 'react';
import { useState } from 'react';
import homeImage from './images/home.png';
import './Sidebar.css';

const Sidebar = () => {

  const namesList = [ 
    { name: 'Dashboard', icon: require('./images/dashboard.png') },
    { name: 'Admin', icon: require('./images/Admin.png') },
    { name: 'Academics', icon: require('./images/Academics.png') },
    { name: 'Study Material', icon: require('./images/profile2user.png') },
    { name: 'Student', icon: require('./images/Student.png') },
    { name: 'Examination', icon: require('./images/Examination.png') },
    { name: 'HR', icon: require('./images/HR.png') },
    { name: 'Leaves', icon: require('./images/Inscription.png') },
    { name: 'Accounts', icon: require('./images/accounts.png') },
    { name: 'Utilities', icon: require('./images/Communicate.png') },
    { name: 'Reports', icon: require('./images/Graph.png') },
    { name: 'Settings', icon: require('./images/Settings.png') },
    { name: 'Modules', icon: require('./images/modules.png') },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (name) => {
    setSelectedItem(name);
  };

  return (
    
    <div className='sidebar'>
    <div  className='div80'
      style={{
        width: '970px',
        height: '77px',
        left: '350px',
        top:'100px',
        borderRadius: '10px',
        backgroundColor: '#215D4F',
        position: 'absolute',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 10px',
        color: '#D9D9D9',
      }}
    >
       <h3 style={{marginRight:'550px'}}>Create an ID Card</h3>
      <img src={homeImage} alt="Home" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
      <span style={{ color: '#D9D9D9', marginRight: '5px' }}>&gt;</span>
      <span style={{ color: '#D9D9D9' }}>Settings</span>
     
          <span style={{ color: '#D9D9D9', margin: '0 5px' }}>&gt;</span>
          <span style={{ color: '#CB8461' }}>General Settings</span>
      
    </div>

<div className='title'
        style={{
          width: '880px',
          height: '45px',  // Adjust the height as needed
          left: '400px',
          border:'1px solid black',
          borderRadius: '10px',  // Rounded corners only at the bottom
          position: 'absolute',
          zIndex: 1,
          top: '250px',  // Position below the upper rectangle
        }}
      > 
      <p style={{marginTop:'-40px', fontWeight:'500',fontSize:'15px'}}>ID Card Title</p>
      </div>

      <div className='title'
        style={{
          width: '880px',
          height: '45px',  // Adjust the height as needed
          left: '400px',
          border:'1px solid black',
          borderRadius: '10px',  // Rounded corners only at the bottom
          position: 'absolute',
          zIndex: 1,
          top: '370px',  // Position below the upper rectangle
        }}
      > 
      <p style={{marginTop:'-40px', fontWeight:'500',fontSize:'15px'}}>Applicable User</p>
      </div>

      <div className='title'
        style={{
          width: '880px',
          height: '45px',  // Adjust the height as needed
          left: '400px',
          border:'1px solid black',
          borderRadius: '10px',  // Rounded corners only at the bottom
          position: 'absolute',
          zIndex: 1,
          top: '510px',  // Position below the upper rectangle
        }}
      > 
      <p style={{marginTop:'-40px', fontWeight:'500',fontSize:'15px'}}>Background Image</p>
      <div className='title'
        style={{
          width: '108px',
          height: '33px',  // Adjust the height as needed
          left: '767px',
          borderRadius: '10px',  // Rounded corners only at the bottom
          backgroundColor: '#215D4F',
          position: 'absolute',
          zIndex: 1,
          top: '6px',  // Position below the upper rectangle
        }}
      >
         <p style={{color:'white', marginLeft:'30px',marginTop:'5px'}}>Browse</p>
      </div>
      </div>

      <div className='title'
        style={{
          width: '880px',
          height: '45px',  // Adjust the height as needed
          left: '400px',
          border:'1px solid black',
          borderRadius: '10px',  // Rounded corners only at the bottom
          position: 'absolute',
          zIndex: 1,
          top: '640px',  // Position below the upper rectangle
        }}
      > 
      <p style={{marginTop:'-40px', fontWeight:'500',fontSize:'15px'}}>Profile Image</p>
      <div
        style={{
          width: '108px',
          height: '33px',  // Adjust the height as needed
          left: '767px',
          borderRadius: '10px',  // Rounded corners only at the bottom
          backgroundColor: '#215D4F',
          position: 'absolute',
          zIndex: 1,
          top: '6px',  // Position below the upper rectangle
        }}
      >
         <p style={{color:'white', marginLeft:'30px',marginTop:'5px'}}>Browse</p>
      </div>
      </div>

      <div className='title'
        style={{
          width: '880px',
          height: '45px',  // Adjust the height as needed
          left: '400px',
          border:'1px solid black',
          borderRadius: '10px',  // Rounded corners only at the bottom
          position: 'absolute',
          zIndex: 1,
          top: '760px',  // Position below the upper rectangle
        }}
      > 
      <p style={{marginTop:'-40px', fontWeight:'500',fontSize:'15px'}}>Logo</p>
      </div>

      <div className='title'
        style={{
          width: '880px',
          height: '45px',  // Adjust the height as needed
          left: '400px',
          border:'1px solid black',
          borderRadius: '10px',  // Rounded corners only at the bottom
          position: 'absolute',
          zIndex: 1,
          top: '870px',  // Position below the upper rectangle
        }}
      > 
      <p style={{marginTop:'-40px', fontWeight:'500',fontSize:'15px'}}>Signature</p>
      </div>

      <div className='title'
        style={{
          width: '19px',
          height: '19px',  // Adjust the height as needed
          left: '400px',
          backgroundColor:'#215D4F',
          border:'1px solid black',
          borderRadius: '20px',  // Rounded corners only at the bottom
          position: 'absolute',
          zIndex: 1,
          top: '970px',  // Position below the upper rectangle
        }}
      > 
      <p style={{marginLeft:'25px',marginTop:'-1px', fontWeight:'500',fontSize:'15px'}}>Name</p>
      </div>
      <div className='title'
        style={{
          width: '19px',
          height: '19px',  // Adjust the height as needed
          left: '400px',
          backgroundColor:'#215D4F',
          border:'1px solid black',
          borderRadius: '20px',  // Rounded corners only at the bottom
          position: 'absolute',
          zIndex: 1,
          top: '1015px',  // Position below the upper rectangle
        }}
      > 
      <p style={{marginLeft:'25px',marginTop:'-1px', fontWeight:'500',fontSize:'15px'}}>Admission.No</p>
      </div>

      <div className='title'
        style={{
          width: '19px',
          height: '19px',  // Adjust the height as needed
          left: '400px',
          backgroundColor:'#215D4F',
          border:'1px solid black',
          borderRadius: '20px',  // Rounded corners only at the bottom
          position: 'absolute',
          zIndex: 1,
          top: '1047px',  // Position below the upper rectangle
        }}
      > 
      <p style={{marginLeft:'25px',marginTop:'-1px', fontWeight:'500',fontSize:'15px'}}>Class</p>
      </div>

      <div className='title'
        style={{
          width: '19px',
          height: '19px',  // Adjust the height as needed
          left: '400px',
          border:'1px solid black',
          borderRadius: '20px',  // Rounded corners only at the bottom
          position: 'absolute',
          zIndex: 1,
          top: '1070px',  // Position below the upper rectangle
        }}
      > 
      <p style={{marginLeft:'25px',marginTop:'-1px', fontWeight:'500',fontSize:'15px'}}>Father'sName</p>
      </div>

      <div className='title'
        style={{
          width: '19px',
          height: '19px',  // Adjust the height as needed
          left: '400px',
          border:'1px solid black',
          borderRadius: '20px',  // Rounded corners only at the bottom
          position: 'absolute',
          zIndex: 1,
          top: '1110px',  // Position below the upper rectangle
        }}
      > 
      <p style={{marginLeft:'25px',marginTop:'-1px', fontWeight:'500',fontSize:'15px'}}>Mother'sName</p>
      </div>

      <div className='title'
        style={{
          width: '19px',
          height: '19px',  // Adjust the height as needed
          left: '400px',
          border:'1px solid black',
          borderRadius: '20px',  // Rounded corners only at the bottom
          position: 'absolute',
          zIndex: 1,
          top: '1140px',  // Position below the upper rectangle
        }}
      > 
      <p style={{marginLeft:'25px',marginTop:'-1px', fontWeight:'500',fontSize:'15px'}}>BloodGroup</p>
      </div>

      <div className='title'
        style={{
          width: '19px',
          height: '19px',  // Adjust the height as needed
          left: '400px',
          border:'1px solid black',
          borderRadius: '20px',  // Rounded corners only at the bottom
          position: 'absolute',
          zIndex: 1,
          top: '1170px',  // Position below the upper rectangle
        }}
      > 
      <p style={{marginLeft:'25px',marginTop:'-1px', fontWeight:'500',fontSize:'15px'}}>Address</p>
      </div>   

        <div className='title'
        style={{
          width: '19px',
          height: '19px',  // Adjust the height as needed
          left: '400px',
          border:'1px solid black',
          borderRadius: '20px',  // Rounded corners only at the bottom
          position: 'absolute',
          zIndex: 1,
          top: '1200px',  // Position below the upper rectangle
        }}
      > 
      <p style={{marginLeft:'25px',marginTop:'-1px', fontWeight:'500',fontSize:'15px'}}>DOB</p>
      </div>   
      
      <div className='title'
        style={{
          width: '140px',
          height: '38px',  // Adjust the height as needed
          left: '767px',
          borderRadius: '20px',  // Rounded corners only at the bottom
          backgroundColor: '#215D4F',
          position: 'absolute',
          zIndex: 1,
          top: '1230px',  // Position below the upper rectangle
        }}
      >
         <p style={{color:'white', marginLeft:'50px',marginTop:'5px'}}>Save</p>
      </div>

      <div className='title'
        style={{
          width: '980px',
          height: '1180px',  // Adjust the height as needed
          left: '355px',
          border:'2px solid #215D4F',
          borderRadius: '15px',  // Rounded corners only at the bottom
          position: 'absolute',
          zIndex: 1,
          top: '190px',  // Position below the upper rectangle
        }}
      >
      </div>
     

<div  className='div1' style={{ backgroundColor: '#215D4F', width: '310px', height: '1838px', position: 'relative' }}>
<div style={{marginTop:'10px'}}>
      <h2 style={{ color: 'white', position: 'relative', zIndex: 2 }}>
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          style={{ position: 'absolute', top: '100%', left: '60px', transform: 'translate(-50%, -50%)', zIndex: 1, opacity: '0.4' }}
        >
          <ellipse cx="30" cy="30" rx="30" ry="30" fill="#FFFFFF" />
        </svg>
        <span style={{ position: 'relative', left: '30px', top:'20px'}}>Admin Panel</span>

        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          style={{ position: 'absolute', top: '100%',left:'90px', transform: 'translate(-50%, -50%)', zIndex: 1, opacity: '0.4' }}
        >
          <ellipse cx="30" cy="30" rx="30" ry="30" fill="#FFFFFF" />
        </svg>
      </h2>
      <ul style={{ listStyle: 'none', padding:0 }}>
        {namesList.map((item) => (
          <li
            key={item.name}
            onClick={() => handleItemClick(item.name)}
            style={{
              borderRadius:'7px',
              width:'150px',
              height:'25px',
             marginTop:'70px',
            paddingInline:'50px',
              color: selectedItem === item.name ? '#000000' : '#D9D9D9',
              backgroundColor: selectedItem === item.name ? 'rgba(255, 255, 255, 0.4)' : 'transparent',
              cursor: 'pointer',
            }}
          >
            <img src={item.icon} alt={item.name} style={{ width: '20px', height: '20px', marginRight: '10px' }} />
            {item.name}
          </li>
        ))}
      </ul>
      <img  src={require('./images/man.png')} alt="Man" className='man'/>
      </div>
    </div>
   
    </div>
  );
};

export default Sidebar;