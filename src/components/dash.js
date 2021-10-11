import React from "react";
import "../css/style.css";
import { Table } from 'reactstrap';
import { fetchData, postData } from "../services/request";
import 'rsuite/styles/index.less';
export default class DashBoard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            allEmployees:[],
            activeRecord:null
        }
    }
componentDidMount(){
    fetchData("get-all-employees","").then((response)=>{
        if(response.status === true){
            this.setState({allEmployees:response.response})
        }
    }).catch(()=>{

    })
}
 getId = (e) =>{
    var id = e.target.getAttribute("id");
    this.setState({activeRecord:id})
}
professional_qualifications = (e) =>{
    e.preventDefault();
    var correction = e.target.correction.value;
    postData("update-professional-qualifications",{"correction":correction,"user_id":this.state.activeRecord}).then((response)=>{
        if(response.status === true && response.validation_error === false){
            document.getElementById("success-one").style.display = "block";
            document.getElementById("success-one").innerHTML = response.message;
            setTimeout(() => {
                document.getElementById("success-one").style.display = "none"; 
                window.location.reload();   
            }, 3000);
        }else if(response.status === false && response.validation_error === false){
            document.getElementById("danger-one").style.display = "block";
            document.getElementById("danger-one").innerHTML = response.message;
            setTimeout(() => {
                document.getElementById("danger-one").style.display = "none"; 
            }, 3000);
        }else if((response.status === false || response.status === true) && response.validation_error === true){
               
                document.getElementById("success-one").style.display = "block";
                document.getElementById("success-one").innerHTML = "Please fill in a value and make sure it is a valid value";
                setTimeout(() => {
                    document.getElementById("success-one").style.display = "none";    
                }, 3000);
        }
    }).catch(()=>{
        document.getElementById("success-one").style.display = "block";
        document.getElementById("success-one").innerHTML = "Error Connectiong to Server";
        setTimeout(() => {
            document.getElementById("success-one").style.display = "none";    
        }, 3000);
    })
}
education_degree = (e) =>{
    e.preventDefault();
    var correction = e.target.correction.value;
    postData("update-education",{"correction":correction,"user_id":this.state.activeRecord}).then((response)=>{
        if(response.status === true && response.validation_error === false){
            document.getElementById("success-two").style.display = "block";
            document.getElementById("success-two").innerHTML = response.message;
            setTimeout(() => {
                document.getElementById("success-two").style.display = "none";    
                window.location.reload();
            }, 3000);
        }else if(response.status === false && response.validation_error === false){
            document.getElementById("danger-two").style.display = "block";
            document.getElementById("danger-two").innerHTML = response.message;
            setTimeout(() => {
                document.getElementById("danger-two").style.display = "none"; 
            }, 3000);
        }else if((response.status === false || response.status === true) && response.validation_error === true){
               
                document.getElementById("success-two").style.display = "block";
                document.getElementById("success-two").innerHTML = "Please fill in a value and make sure it is a valid value";
                setTimeout(() => {
                    document.getElementById("success-two").style.display = "none";    
                }, 3000);
        }
    }).catch(()=>{
        document.getElementById("success-two").style.display = "block";
        document.getElementById("success-two").innerHTML = "Error Connectiong to Server";
        setTimeout(() => {
            document.getElementById("success-two").style.display = "none";    
        }, 3000);
    })
}
date_of_birth = (e) =>{
    e.preventDefault();
    var correction = e.target.correction.value;
    postData("update-dob",{"correction":correction,"user_id":this.state.activeRecord}).then((response)=>{
        if(response.status === true && response.validation_error === false){
            document.getElementById("success-three").style.display = "block";
            document.getElementById("success-three").innerHTML = response.message;
            setTimeout(() => {
                document.getElementById("success-three").style.display = "none"; 
                window.location.reload();   
            }, 3000);
        }else if(response.status === false && response.validation_error === false){
            document.getElementById("danger-three").style.display = "block";
            document.getElementById("danger-three").innerHTML = response.message;
            setTimeout(() => {
                document.getElementById("danger-three").style.display = "none"; 
            }, 3000);
        }else if((response.status === false || response.status === true) && response.validation_error === true){
               
                document.getElementById("success-three").style.display = "block";
                document.getElementById("success-three").innerHTML = "Please fill in a value and make sure it is a valid value";
                setTimeout(() => {
                    document.getElementById("success-three").style.display = "none";    
                }, 3000);
        }
    }).catch(()=>{
        document.getElementById("success-three").style.display = "block";
        document.getElementById("success-three").innerHTML = "Error Connectiong to Server";
        setTimeout(() => {
            document.getElementById("success-three").style.display = "none";    
        }, 3000);
    })
}
home_address = (e) =>{
    e.preventDefault();
    var correction = e.target.correction.value;
    postData("update-home-address",{"correction":correction,"user_id":this.state.activeRecord}).then((response)=>{
        if(response.status === true && response.validation_error === false){
            document.getElementById("success-four").style.display = "block";
            document.getElementById("success-four").innerHTML = response.message;
            setTimeout(() => {
                document.getElementById("success-four").style.display = "none";    
                window.location.reload();
            }, 3000);
        }else if(response.status === false && response.validation_error === false){
            document.getElementById("danger-four").style.display = "block";
            document.getElementById("danger-four").innerHTML = response.message;
            setTimeout(() => {
                document.getElementById("danger-four").style.display = "none"; 
            }, 3000);
        }else if((response.status === false || response.status === true) && response.validation_error === true){
               
                document.getElementById("success-four").style.display = "block";
                document.getElementById("success-four").innerHTML = "Please fill in a value and make sure it is a valid value";
                setTimeout(() => {
                    document.getElementById("success-four").style.display = "none";    
                }, 3000);
        }
    }).catch(()=>{
        document.getElementById("success-four").style.display = "block";
        document.getElementById("success-four").innerHTML = "Error Connectiong to Server";
        setTimeout(() => {
            document.getElementById("success-four").style.display = "none";    
        }, 3000);
    })
}
phone_number = (e) =>{
    e.preventDefault();
    var correction = e.target.correction.value;
    postData("update-phone-number",{"correction":correction,"user_id":this.state.activeRecord}).then((response)=>{
        if(response.status === true && response.validation_error === false){
            document.getElementById("success-five").style.display = "block";
            document.getElementById("success-five").innerHTML = response.message;
            setTimeout(() => {
                document.getElementById("success-five").style.display = "none";    
                window.location.reload();
            }, 3000);
        }else if(response.status === false && response.validation_error === false){
            document.getElementById("danger-five").style.display = "block";
            document.getElementById("danger-five").innerHTML = response.message;
            setTimeout(() => {
                document.getElementById("danger-five").style.display = "none"; 
            }, 3000);
        }else if((response.status === false || response.status === true) && response.validation_error === true){
               
                document.getElementById("success-five").style.display = "block";
                document.getElementById("success-five").innerHTML = "Please fill in a value and make sure it is a valid value";
                setTimeout(() => {
                    document.getElementById("success-five").style.display = "none";    
                }, 3000);
        }
    }).catch(()=>{
        document.getElementById("success-five").style.display = "block";
        document.getElementById("success-five").innerHTML = "Error Connectiong to Server";
        setTimeout(() => {
            document.getElementById("success-five").style.display = "none";    
        }, 3000);
    })
}
next_of_kin = (e) =>{
    e.preventDefault();
    var correction = e.target.correction.value;
    postData("update-nok",{"correction":correction,"user_id":this.state.activeRecord}).then((response)=>{
        if(response.status === true && response.validation_error === false){
            document.getElementById("success-seven").style.display = "block";
            document.getElementById("success-seven").innerHTML = response.message;
            setTimeout(() => {
                document.getElementById("success-seven").style.display = "none";   
                window.location.reload(); 
            }, 3000);
        }else if(response.status === false && response.validation_error === false){
            document.getElementById("danger-seven").style.display = "block";
            document.getElementById("danger-seven").innerHTML = response.message;
            setTimeout(() => {
                document.getElementById("danger-seven").style.display = "none"; 
            }, 3000);
        }else if((response.status === false || response.status === true) && response.validation_error === true){
               
                document.getElementById("success-seven").style.display = "block";
                document.getElementById("success-seven").innerHTML = "Please fill in a value and make sure it is a valid value";
                setTimeout(() => {
                    document.getElementById("success-seven").style.display = "none";    
                }, 3000);
        }
    }).catch(()=>{
        document.getElementById("success-seven").style.display = "block";
        document.getElementById("success-seven").innerHTML = "Error Connectiong to Server";
        setTimeout(() => {
            document.getElementById("success-seven").style.display = "none";    
        }, 3000);
    })
}
fullname = (e) =>{
    e.preventDefault();
    var correction = e.target.correction.value;
    postData("update-fullname",{"correction":correction,"user_id":this.state.activeRecord}).then((response)=>{
        if(response.status === true && response.validation_error === false){
            document.getElementById("success-eight").style.display = "block";
            document.getElementById("success-eight").innerHTML = response.message;
            setTimeout(() => {
                document.getElementById("success-eight").style.display = "none";
                window.location.reload();    
            }, 3000);
        }else if(response.status === false && response.validation_error === false){
            document.getElementById("danger-eight").style.display = "block";
            document.getElementById("danger-eight").innerHTML = response.message;
            setTimeout(() => {
                document.getElementById("danger-eight").style.display = "none"; 
            }, 3000);
        }else if((response.status === false || response.status === true) && response.validation_error === true){
               
                document.getElementById("success-eight").style.display = "block";
                document.getElementById("success-eight").innerHTML = "Please fill in a value and make sure it is a valid value";
                setTimeout(() => {
                    document.getElementById("success-eight").style.display = "none";    
                }, 3000);
        }
    }).catch(()=>{
        document.getElementById("success-eight").style.display = "block";
        document.getElementById("success-eight").innerHTML = "Error Connectiong to Server";
        setTimeout(() => {
            document.getElementById("success-eight").style.display = "none";    
        }, 3000);
    })
}

// marital_status = (e) =>{
//     e.preventDefault();
//     var correction = e.target.correction.value;
//     postData("update-marital-status",{"correction":correction,"user_id":this.state.activeRecord}).then((response)=>{
//         if(response.status === true && response.validation_error === false){
//             document.getElementById("success-eight").style.display = "block";
//             document.getElementById("success-eight").innerHTML = response.message;
//             setTimeout(() => {
//                 document.getElementById("success-eight").style.display = "none";
//                 window.location.reload();    
//             }, 3000);
//         }else if(response.status === false && response.validation_error === false){
//             document.getElementById("danger-eight").style.display = "block";
//             document.getElementById("danger-eight").innerHTML = response.message;
//             setTimeout(() => {
//                 document.getElementById("danger-eight").style.display = "none"; 
//             }, 3000);
//         }else if((response.status === false || response.status === true) && response.validation_error === true){
               
//                 document.getElementById("success-eight").style.display = "block";
//                 document.getElementById("success-eight").innerHTML = "Please fill in a value and make sure it is a valid value";
//                 setTimeout(() => {
//                     document.getElementById("success-eight").style.display = "none";    
//                 }, 3000);
//         }
//     }).catch(()=>{
//         document.getElementById("success-eight").style.display = "block";
//         document.getElementById("success-eight").innerHTML = "Error Connectiong to Server";
//         setTimeout(() => {
//             document.getElementById("success-eight").style.display = "none";    
//         }, 3000);
//     })
// }

file_import = (e) =>{
    e.preventDefault();
    var correction = e.target.select_file.files[0];
    postData("syncfile",{"select_file":correction}).then((response)=>{
        if(response.status === true && response.validation_error === false){
            document.getElementById("success-file").style.display = "block";
            document.getElementById("success-file").innerHTML = response.message;
            setTimeout(() => {
                document.getElementById("success-file").style.display = "none";
                window.location.reload();    
            }, 3000);
        }else if(response.status === false && response.validation_error === false){
            document.getElementById("danger-file").style.display = "block";
            document.getElementById("danger-file").innerHTML = response.message;
            setTimeout(() => {
                document.getElementById("danger-file").style.display = "none"; 
            }, 3000);
        }else if((response.status === false || response.status === true) && response.validation_error === true){
               
                document.getElementById("success-file").style.display = "block";
                document.getElementById("success-file").innerHTML = "Please fill in a value and make sure it is a valid value";
                setTimeout(() => {
                    document.getElementById("success-file").style.display = "none";    
                }, 3000);
        }
    }).catch(()=>{
        document.getElementById("success-file").style.display = "block";
        document.getElementById("success-file").innerHTML = "Error Connectiong to Server";
        setTimeout(() => {
            document.getElementById("success-file").style.display = "none";    
        }, 3000);
    })
}
marital_status = (e) =>{
    e.preventDefault();
    var correction = e.target.correction.value;
    postData("update-marital-status",{"correction":correction,"user_id":this.state.activeRecord}).then((response)=>{
        if(response.status === true && response.validation_error === false){
            document.getElementById("success-six").style.display = "block";
            document.getElementById("success-six").innerHTML = response.message;
            setTimeout(() => {
                document.getElementById("success-six").style.display = "none"; 
                window.location.reload();   
            }, 3000);
        }else if(response.status === false && response.validation_error === false){
            document.getElementById("danger-six").style.display = "block";
            document.getElementById("danger-six").innerHTML = response.message;
            setTimeout(() => {
                document.getElementById("danger-six").style.display = "none"; 
            }, 3000);
        }else if((response.status === false || response.status === true) && response.validation_error === true){
               
                document.getElementById("success-six").style.display = "block";
                document.getElementById("success-six").innerHTML = "Please fill in a value and make sure it is a valid value";
                setTimeout(() => {
                    document.getElementById("success-six").style.display = "none";    
                }, 3000);
        }
    }).catch(()=>{
        document.getElementById("success-six").style.display = "block";
        document.getElementById("success-six").innerHTML = "Error Connectiong to Server";
        setTimeout(() => {
            document.getElementById("success-six").style.display = "none";    
        }, 3000);
    })
}

    render(){
        var allEmployees = this.state.allEmployees.map((item,key)=>{
            return <tr>
                <td>{item.pro_Qualifications}</td>
                <td>{item.education_degree}</td>
                <td>{item.DOB}</td>
                <td>{item.home_address}</td>
                <td>{item.phone_no}</td>
                <td>{item.next_of_kin}</td>
                <td>{item.fullname}</td>
                <td>{item.marital_status}</td>
                <td>{<button id={item.id} onClick={this.getId} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>}</td>
            </tr>
        })
        return(
            <div>
                <br/><h3 style={{textAlign:"center"}}>Manage Employee Records</h3><br/>
                <form onSubmit={this.file_import} style={{width:"80%",margin:"auto"}}>
                    <small>IMPORT EMPLOYEE RECORDS VIA EXCEL FILE</small>
                    <input type="file" className="form-control" enctype="multipart/form-data" name="select_file"/>
                    <br/><br/>
                    <div className="alert alert-primary" id="danger-file"></div>
            <div className="alert alert-primary" id="success-file"></div>
                    <button className="btn btn-success">Import</button>
                </form>
<div className="container">
    <div className='sub-container'>
    <br/>
<Table striped style={{textAlign:"left"}}>
      <thead>
        <tr>
          <th>Professional qualifications </th>
          <th>Education Degree</th>
          <th>Date of Birth</th>
          <th>Home Address</th>
          <th>Phone Number</th>
          <th>Next of kin</th>
          <th>Fullname</th>
          <th>Marital Status</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
          {allEmployees}
      </tbody>
    </Table>
    <br/>
    </div>
</div>
<div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Record</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <div className="row">
<div className="col-md-6">
<form onSubmit={this.professional_qualifications}>
            <small>Edit Professional Qualifications</small>
            <input name="correction" type="text" className="form-control" placeholder="Modify Professional Qualifications"/><br/>
            <div className="alert alert-primary" id="danger-one"></div>
            <div className="alert alert-primary" id="success-one"></div>
            <button className="btn btn-primary edit-btn">Save</button>
        </form>
</div>
<div className="col-md-6">
<form onSubmit={this.education_degree}>
            <small>Edit Education Degree</small>
            <input name="correction" type="text" className="form-control" placeholder="Education Degree"/><br/>
            <div className="alert alert-primary" id="danger-two"></div>
            <div className="alert alert-primary" id="success-two"></div>
            <button className="btn btn-primary edit-btn">Save</button>
        </form>
</div>
          </div>


          <div className="row">
<div className="col-md-6">
<form onSubmit={this.date_of_birth}>
            <small>Edit Date of birth</small>
            <input type="text" name="correction" className="form-control" placeholder="Date of birth"/><br/>
            <div className="alert alert-primary" id="danger-three"></div>
            <div className="alert alert-primary" id="success-three"></div>
            <button className="btn btn-primary edit-btn">Save</button>
        </form>
</div>
<div className="col-md-6">
<form onSubmit={this.home_address}>
            <small>Edit Home Address</small>
            <input name="correction" type="text" className="form-control" placeholder="Home Address"/><br/>
            <div className="alert alert-primary" id="danger-four"></div>
            <div className="alert alert-primary" id="success-four"></div>
            <button className="btn btn-primary edit-btn">Save</button>
        </form>
</div>
          </div>


          <div className="row">
<div className="col-md-6">
<form onSubmit={this.phone_number}>
            <small>Edit Phone Number</small>
            <input name="correction" type="text" className="form-control" placeholder="Phone Number"/><br/>
            <div className="alert alert-primary" id="danger-five"></div>
            <div className="alert alert-primary" id="success-five"></div>
            <button className="btn btn-primary edit-btn">Save</button>
        </form>
</div>
<div className="col-md-6">
<form onSubmit={this.marital_status}>
            <small>Edit Marital Staus</small>
            <input name="correction" type="text" className="form-control" placeholder="Marital Status"/><br/>
            <div className="alert alert-primary" id="danger-six"></div>
            <div className="alert alert-primary" id="success-six"></div>
            <button className="btn btn-primary edit-btn">Save</button>
        </form>
</div>
          </div>


          <div className="row">
<div className="col-md-6">
<form onSubmit={this.next_of_kin}>
            <small>Edit Next of kin</small>
            <input name="correction" type="text" className="form-control" placeholder="Next of kin"/><br/>
            <div className="alert alert-primary" id="danger-seven"></div>
            <div className="alert alert-primary" id="success-seven"></div>
            <button className="btn btn-primary edit-btn">Save</button>
        </form>
</div>
<div className="col-md-6">
<form onSubmit={this.fullname}>
            <small>Edit Fullname</small>
            <input name="correction" type="text" className="form-control" placeholder="Fullname"/><br/>
            <div className="alert alert-primary" id="danger-eight"></div>
            <div className="alert alert-primary" id="success-eight"></div>
            <button className="btn btn-primary edit-btn">Save</button>
        </form>
</div>
          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary edit-btn">Save changes</button>
      </div>
    </div>
  </div>
</div>
            </div>
        )
    }
}