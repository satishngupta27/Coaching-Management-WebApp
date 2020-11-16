import React,{useState} from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../../components/FormComponents/FormikControl";
import "../Student-info/AddStudent.css";
import axios from 'axios';


function UploadNotesForm() {
  const [file, setFile] = useState(null);
  const notesTypedropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' }
  ]
  const initialValues = {
    ChapterName: "",
    TopicName: "",
    WrittenBy:"",
    notesTypedropdownOptions:"",
    
    //videoLink:""
  };
  const validationSchema = Yup.object({
    ChapterName: Yup.string().required("Required"),
    TopicName: Yup.string().required("Required"),
    WrittenBy:Yup.string().required("Required"),
    notesTypedropdownOptions:Yup.string().required("Required"),
    
   // videoLink:Yup.string()
  });

  // const handleImage = event => {
    
  //   if (event.target.files[0]) {
  //     console.log(event.target.files[0])
       
  //   }
    //setImageUploadButtonName(event.target.files[0].name);
   
//};
  const onSubmit = (values) => {
    let formData = new FormData();
   
    formData.append("file",file[0]);
   
   

    console.log("Form data", values);
    //console.log("Saved data", JSON.parse(JSON.stringify(values.content)));
   
    formData.append("ChapterName",values.ChapterName)
    formData.append("TopicName",values.TopicName)
    formData.append("WrittenBy",values.WrittenBy)
    formData.append("notesTypedropdownOptions",values.notesTypedropdownOptions)
   
   
    axios.post('http://localhost:8000/studyMaterials',formData,{
      headers: {
        'Content-Type': 'multipart/form-data',
      }}
      ).then(res=>{
        console.log(res.data)
      }).catch(err=>{
        console.log(err)
      })
     
  

   
    

  };

  return (
    <div className="AddStudent">
      <h1 style={{ textAlign: "center" }}>Upload notes</h1>
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              <FormikControl
                control="input"
                type="text"
                label="Chapter Name"
                name="ChapterName"
              />
              <FormikControl
                control="input"
                type="text"
                label="Topic Name"
                name="TopicName"
              />
              <FormikControl
                control="input"
                type="text"
                label="Written by"
                name="WrittenBy"
              />
              <FormikControl
            control='select'
            label='Select contentType'
            name='notesTypedropdownOptions'
            options={notesTypedropdownOptions}
          />
          
              <input className="form-group" type='file'  onChange={
                (event)=>setFile(event.target.files)
              }/>

              <Row style={{ justifyContent: "right" }}>
                <button type="submit" className="btn btn-primary">
                  Upload
                </button>
              </Row>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
}

export default UploadNotesForm;
