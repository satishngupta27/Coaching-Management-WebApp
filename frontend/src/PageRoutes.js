import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//imports pages for teacher
import StudyMaterialType from "./pages/coaching_portal_pages/StudyMaterial/studyMaterialType";
import MyStudyMaterialType from "./pages/Student_portal_pages/MyStudyMaterial/MystudyMaterialType";
import SubjectWise from "./pages/coaching_portal_pages/StudyMaterial/SubjectWise";
import Assignment from "./pages/coaching_portal_pages/Assignment/Assignment";
import AssignmentInfo from "./pages/coaching_portal_pages/Assignment/AssignmentInfo";

import Attendence from "./pages/coaching_portal_pages/Attendence/Attendence";
import CreateNewsSubjectForm from "./pages/coaching_portal_pages/StudyMaterial/CreateNewSubjectForm";
import CreateAssignmentForm from "./pages/coaching_portal_pages/Assignment/CreateAssignmentForm";
import CreateNewBatchForm from "./pages/coaching_portal_pages/Batch/CreateNewBatchForm";
import UploadNotesForm from "./pages/coaching_portal_pages/StudyMaterial/UploadNotesForm";
import Dashboard from "./pages/coaching_portal_pages/Dashboard/Dashboard";
import Batches from "./pages/coaching_portal_pages/Batch/Batch";
import Student_Info from "./pages/coaching_portal_pages/Student-info/Student_Info";
import AddStudent from "./pages/coaching_portal_pages/Student-info/AddStudent";
import ViewAllStudent from "./pages/coaching_portal_pages/Student-info/ViewAllStudent";
import EditStudent from "./pages/coaching_portal_pages/Student-info/EditStudent";
import StudentProfile from "./pages/coaching_portal_pages/Student-info/StudentProfile";
import Notes from "./pages/coaching_portal_pages/StudyMaterial/Notes";
import AddAnswers from "./pages/coaching_portal_pages/StudentDoubt/addAnswers";
import StudentDoubt from "./pages/coaching_portal_pages/StudentDoubt/Student_Doubt";

//imports pages for students
import MyDoubt from "./pages/Student_portal_pages/MyDoubt/MyDoubt";
import MyProfile from "./pages/Student_portal_pages/MyProfile/MyProfile";
import MyAssignment from "./pages/Student_portal_pages/MyAssignment/MyAssignment";
import MyStudyMaterial from "./pages/Student_portal_pages/MyStudyMaterial/MyStudyMaterial";
import SubmitAssignment from "./pages/Student_portal_pages/MyAssignment/SubmitAssignment";
import MyDashboard from "./pages/Student_portal_pages/MyDashboard/MyDashboard";
import AskDoubt from "./pages/Student_portal_pages/MyDoubt/AskDoubtForm";

function PageRoutes(props) {
  const [userId, setUserId] = useState(props.id);
  
  //const userId = props.userId;
  useEffect(() => {
    
    setUserId(props.userId);
  }, [userId]);

  console.log("page routers uid", userId);
  if (!props.isStudent) {
    return (
      <Router>
        <Navbar isStudent={props.isStudent} />
        <Switch>
          {/* routes for teachers */}
          <Route path="/" exact>
            <Dashboard id={userId} />
          </Route> 
          {/* <Route path="/" exact component={Dashboard} /> */}
          <Route
            path="/studymaterialType"
            exact
            component={StudyMaterialType}
          />
          <Route
            path="/createNewSubjectForm"
            exact
            component={CreateNewsSubjectForm}
          />
          <Route
            path="/createAssignmentForm"
            exact
            component={CreateAssignmentForm}
          />
          <Route
            path="/createNewBatchForm"
            exact
            component={CreateNewBatchForm}
          />
          <Route path="/attendence" exact component={Attendence} />
          <Route path="/uploadNotesForm" exact component={UploadNotesForm} />
          <Route path="/subjectwise" exact component={SubjectWise} />
          <Route path="/notes" exact component={Notes} />
          <Route path="/batches" exact component={Batches} />
          <Route path="/assignment" exact component={Assignment} />
          <Route path="/assignment/:id" exact component={AssignmentInfo} />
          <Route path="/student_Info" exact component={Student_Info} />
          <Route path="/student_Info/addStudent" exact component={AddStudent} />
          <Route path="/studentDoubt/:id" exact component={AddAnswers} />
          <Route path="/studentDoubt" exact component={StudentDoubt} />
          <Route
            path="/student_Info/viewAllStudent"
            exact
            component={ViewAllStudent}
          />
          <Route
            path="/student_Info/editStudent/:id"
            exact
            component={EditStudent}
          />
          <Route
            path="/student_Info/studentprofile/:id"
            exact
            component={StudentProfile}
          />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  } else {
    return (
      <Router>
        <Navbar isStudent={props.isStudent} />
        <Switch>
          {/* routes for student */}
          <Route path="/myDashboard" exact>
            <MyDashboard id={userId} />
          </Route> 
          {/* <Route path="/myDashboard" exact component={MyDashboard} /> */}
          <Route path="/myStudyMaterial" exact component={MyStudyMaterial} />
          <Route
            path="/myStudyMaterialType"
            exact
            component={MyStudyMaterialType}
          />
          <Route path="/myAssignment" exact component={MyAssignment} />
          <Route path="/myAssignment/:id" exact component={SubmitAssignment} />
          <Route path="/myDoubt" exact component={MyDoubt} />
          <Route path="/myDoubt/askDoubt" exact component={AskDoubt} />
          <Route
            path="/myProfile"
            exact
            component={MyProfile}
            userId={userId}
          />
          <Route path="/notes" exact component={Notes} />
          <Redirect to='/myDashboard'/>
          
          
        </Switch>
      </Router>
    );
  }
}

export default PageRoutes;
