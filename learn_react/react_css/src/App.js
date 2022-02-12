import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className='App'>
    <div className='navbar'>
    <ul className='ul'>
  <li className='li'><img style={{width:'80px',height:'80px',paddingRight:'100px',paddingLeft:'20px'}} src='https://t4.ftcdn.net/jpg/03/35/98/45/360_F_335984544_im2SjLS6UfXCdOpjw8Lhp7rs7k9zCfWl.jpg' /></li>
  <li className='col li'>Patients</li>
  <li className='li'><a><b>Calender</b></a></li>
  <li className='li'><a><b>Users</b></a></li>
  <li className='li'><a><b>Billing</b></a></li>
  <li className='li' style={{float:'right'}}><img style={{marginTop:'10px',borderRadius:'50%'}} src='https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-consider-format.jpg?auto=webp&format=jpg&width=33' /></li>
</ul>
    </div>
    <br /><br /><br /><br />
    <div class="sidenav">
      <span style={{paddingLeft:'7px'}}><b>Patients</b></span>
      <div style={{backgroundColor:'white',color:'gray',height:'30px',margin:'10px',paddingLeft:'5px'}}>Search patients</div>
      <div style={{backgroundColor:'rgb(17, 156, 211)',color:'white',height:'60px',margin:'9px',marginTop:'10px'}}>
        <img style={{float:'left',paddingLeft:'10px',borderRadius:'50%',marginTop:'5px'}} src='https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-consider-format.jpg?auto=webp&format=jpg&width=50' />
        <div style={{paddingLeft:'30%'}}>Sara Smith</div>
        <div style={{paddingLeft:'30%', fontSize:'12px'}}>15 Aug 2020</div>
      </div>
      <div style={{backgroundColor:'white',color:'black',height:'60px',margin:'9px',marginTop:'10px'}}>
        <img style={{float:'left',paddingLeft:'10px',borderRadius:'100%',marginTop:'5px',width:'40px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_dO0LimM5bWp1mXzNKBosWGcXctZOmog9g&usqp=CAU' />
        <div style={{paddingLeft:'30%'}}>James Johnson</div>
        <div style={{paddingLeft:'30%', fontSize:'12px'}}>No Clearance</div>
      </div>
      <div style={{backgroundColor:'white',color:'black',height:'60px',margin:'9px',marginTop:'10px'}}>
        <img style={{float:'left',paddingLeft:'10px',marginTop:'5px',borderRadius:'50%',marginTop:'5px',width:'40px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7yoW4jRKUA7W7zgmVRf0SzjoSZA5KS61q7w&usqp=CAU' />
        <div style={{paddingLeft:'30%'}}>Patrice Page</div>
        <div style={{paddingLeft:'30%', fontSize:'12px'}}>19 Aug 2020</div>
      </div>
      <div style={{backgroundColor:'white',color:'black',height:'60px',margin:'9px',marginTop:'10px'}}>
        <img style={{float:'left',paddingLeft:'10px',borderRadius:'100%',width:'30px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-fN3m3angfs5CX3_nGk3eoqchN54aL7M2w&usqp=CAU' />
        <div style={{paddingLeft:'30%'}}>Derek Diamon</div>
        <div style={{paddingLeft:'30%', fontSize:'12px'}}>21 Aug 2020</div>
      </div>
</div>

<div class="main">
 <div style={{backgroundColor:'#FAFAFA',height:'300px'}}>
   <span style={{fontSize:'15px',marginBottom:'20px',paddingLeft:'40px'}}><b>Patients Information</b></span>
   <span style={{fontSize:'12px',marginBottom:'20px',float:'right'}}>Last Updated:<b>10:25 AM, today ...</b></span>
   <div style={{marginTop:'20px', paddingLeft:'30px'}}>
     <img style={{width:'90px',height:'90px', float:'left',borderRadius:'100%'}} src='https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-consider-format.jpg?auto=webp&format=jpg&width=1200' />
     <div style={{paddingLeft:'120px',fontSize:'20px'}}><b>Sara Smith</b></div>
     <div style={{marginTop:'-15px'}}>
       <div>
   <ul>
      <li style={{paddingLeft:'80px',fontSize:'14px',marginTop:'5px',listStyleType: 'none'}}>Phone:<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;302-857-9685</b></li>
      <li style={{paddingLeft:'80px',fontSize:'14px',marginTop:'5px',listStyleType: 'none'}}>Email:<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sarasmith@gmail.com</b></li>
      <li style={{paddingLeft:'80px',fontSize:'14px',marginTop:'5px',listStyleType: 'none'}}>Gender:<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Female</b></li>
      <li style={{paddingLeft:'80px',fontSize:'14px',marginTop:'5px',listStyleType: 'none'}}>Age:<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;45</b></li>
      
      
    </ul>
    </div>
    <div>
   <ul>
      <li style={{fontSize:'14px',marginTop:'5px',listStyleType: 'none',paddingLeft:'30%',marginTop:'-120px'}}>Surgery Type:<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rotator Cuff Repair</b></li>
      <li style={{fontSize:'14px',marginTop:'5px',listStyleType: 'none',paddingLeft:'30%'}}>Surgery Date:<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15 Aug 2020</b></li>
      <li style={{fontSize:'14px',marginTop:'5px',listStyleType: 'none',paddingLeft:'30%'}}>Height(cm):<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;163</b></li>
      <li style={{fontSize:'14px',marginTop:'5px',listStyleType: 'none',paddingLeft:'30%'}}>Weight(lb):<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;110</b></li>
      <li style={{fontSize:'14px',marginTop:'5px',listStyleType: 'none',paddingLeft:'30%'}}>BMI:<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19</b></li>
      
    </ul>
    </div>
    <div>
   <ul>
   <li style={{fontSize:'14px',marginTop:'5px',listStyleType: 'none',paddingLeft:'56%',marginTop:'-140px'}}>Anesthesiologist:<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dr.Christina Hardway</b></li>
      <li style={{fontSize:'14px',marginTop:'5px',listStyleType: 'none',paddingLeft:'56%'}}>Anesthesiologist Phone:<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;301-896-8745</b></li>
      <li style={{fontSize:'14px',marginTop:'5px',listStyleType: 'none',paddingLeft:'56%'}}>Anesthesiologist Email:<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;christina@h3a.com</b></li>
     
     
      
    </ul>
    </div>
    
    </div>
    
   </div>
   
 
 <div style={{wordSpacing:'-2px',paddingLeft:'50px',marginTop:'95px'}}>
   <span style={{backgroundColor:'white',display:'inline-block',whiteSpace:'break-spaces',fontSize:'13px',height:'55px',color:'rgb(61, 177, 223)',textAlign:'center',width:'100px'}}>
    <b> List of prior<br />
     Surgeries</b>
     </span>&nbsp;
     <span style={{backgroundColor:'white',display:'inline-block',whiteSpace:'break-spaces',fontSize:'13px',height:'44px',textAlign:'center',width:'100px'}}>
     List of Medical<br />
     Diagnosis
     </span>&nbsp;
     <span style={{backgroundColor:'white',display:'inline-block',whiteSpace:'break-spaces',fontSize:'13px',height:'44px',textAlign:'center',width:'100px'}}>
     List of<br />
     Medications
     </span>&nbsp;
     <span style={{backgroundColor:'white',display:'inline-block',whiteSpace:'break-spaces',fontSize:'13px',height:'44px',textAlign:'center',width:'100px'}}>
    Airway<br />
     Evaluation
     </span>&nbsp;
     <span style={{backgroundColor:'white',display:'inline-block',whiteSpace:'break-spaces',fontSize:'13px',height:'44px',textAlign:'center'}}>
     Anesthesia Clearance and<br />
     Recommendations
     </span>&nbsp;
 </div>
</div>
</div>
</div><br />
<div style={{paddingLeft:'19%'}}>
  <div style={{backgroundColor:'rgba(212, 231, 238, 0.952)',width:'30%',height:'25px',paddingLeft:'15px',fontSize:'14px'}}>First Time Surgery</div>
  <div style={{backgroundColor:'#e5e5e5',width:'30%',height:'25px',paddingLeft:'15px',fontSize:'14px'}}>No</div>
</div><br />
<div style={{paddingLeft:'19%'}}>
  <div style={{backgroundColor:'rgba(212, 231, 238, 0.952)',width:'30%',height:'25px',paddingLeft:'15px',fontSize:'14px'}}>Family History of Surgical Complications?</div>
  <div style={{backgroundColor:'#e5e5e5',width:'30%',height:'25px',paddingLeft:'15px',fontSize:'14px'}}>Yes</div>
</div><br />
<div style={{paddingLeft:'19%'}}>
  <div style={{backgroundColor:'rgba(212, 231, 238, 0.952)',width:'30%',height:'25px',paddingLeft:'15px',fontSize:'14px'}}>If Yes,please provide more details.</div>
  <div style={{backgroundColor:'#e5e5e5',width:'30%',height:'75px',paddingLeft:'15px',fontSize:'14px',whiteSpace:'break-spaces'}}>No<br />judscj</div>
</div><br />
  <span style={{paddingLeft:'19%',fontSize:'14px'}}>Previous Surgeries</span><br />
  <table style={{paddingLeft:'19%'}}>
    <tr>
      <td style={{backgroundColor:'rgba(212, 231, 238, 0.952)',height:'35px',paddingLeft:'15px',fontSize:'14px'}}>Surgery Type</td>
      <td style={{backgroundColor:'rgba(212, 231, 238, 0.952)',height:'35px',paddingLeft:'15px',fontSize:'14px'}}> Date</td>
      <td style={{backgroundColor:'rgba(212, 231, 238, 0.952)',height:'35px',paddingLeft:'15px',fontSize:'14px'}}>Anesthesia Type</td>
      <td style={{backgroundColor:'rgba(212, 231, 238, 0.952)',height:'35px',paddingLeft:'15px',fontSize:'14px'}}>Surgical Complications</td>
      <td style={{backgroundColor:'rgba(212, 231, 238, 0.952)',height:'35px',paddingLeft:'15px',fontSize:'14px',whiteSpace:'break-spaces'}}>Anesthetic Complications (nausea,<br />vomiting,difficult intubation</td>
    </tr>
    <tr>
      <td style={{backgroundColor:'#e5e5e5',height:'35px',paddingLeft:'15px',fontSize:'14px'}}>Shoulder reconstruction</td>
      <td style={{backgroundColor:'#e5e5e5',height:'35px',paddingLeft:'15px',fontSize:'14px'}}> January 2008</td>
      <td style={{backgroundColor:'#e5e5e5',height:'35px',paddingLeft:'15px',fontSize:'14px'}}>General "Breathing Tube"</td>
      <td style={{backgroundColor:'#e5e5e5',height:'35px',paddingLeft:'15px',fontSize:'14px'}}>No</td>
      <td style={{backgroundColor:'#e5e5e5',height:'35px',paddingLeft:'15px',fontSize:'14px'}}>No</td>
    </tr>
  </table><br />
  <div style={{paddingLeft:'19%',height:'70px'}}>
  <span style={{backgroundColor:'rgb(61, 177, 223)',color:'white'}}>+ Add Surgery</span>
  </div>
    </>
  );
}

export default App;
