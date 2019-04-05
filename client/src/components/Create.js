import React, { Component } from "react";
import "./Login.css";
import Nav from "./Nav";
import Header from "./Header";

const axios = require("axios");


class Create extends Component{

    state={
        title: "",
        body: "",
        userID: "",
       
        
    }
    componentDidMount(){
        this.setState({userID: this.props.userID});
      }
    

    saveProject =(event)=>{
      
      event.preventDefault();
      const input = document.querySelectorAll("input");
      console.log(event.target.childNodes);
      console.log(input[0].value);
      const input1 = input[0].value;
      const input2 = input[1].value;
      
        axios.post("/create/"+ this.state.userID,{title: input1, body: input2}).then(res=> 
       console.log(res)).catch(err=>console.log(err));
      }

    render(){
        
     
    
        return(
    
          <section id="main">
            <Nav/>
            <Header/>
          <div className="container">
        
              <div className="row">
                  
                  <div className="col-md-4 col-md-offset-4">
                  <form id="create" method="POST" className="well" onSubmit={(event)=> (this.saveProject(event))}>
                    
                      <div className="form-group">
                      
                        <label>Title of Project</label>
                        <input 
                        type="text" 
                        name="title" 
                        className="form-control"
                        ></input>
                      </div>
                      <div className="textarea form-group">
                          <label>Body of Project</label>
                          <input id="textarea"
                          style={{height: 300}}
                          type="text" 
                          name="body"
                          className="textarea form-control"  
                          placeholder=""
                          ></input>
                        </div>
                        <button onClick={this.saveProject} type="submit" className="btn btn-default">Create Project</button>
    
                        
                          className="form-control"  
                          
                        
                          ></input>
                        </div>
                        <button  type="submit" className="btn btn-secondary btn-block">Create Project</button>
                        
    
    
                    </form>
                                
                  </div>
              </div>
          </div>
          <div style={{height: "200px"}}></div>
      </section>
      
      );
      }

}

export default Create;