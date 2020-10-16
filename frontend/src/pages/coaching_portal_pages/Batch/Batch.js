import React from 'react'
import {Container,Row,} from 'react-bootstrap'
import { Link } from "react-router-dom";
import MenuButton from "../../../components/MenuButton";


function BranchandBatch() {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Branch and Batch </h1>
      <Container>
        <Row style={{ justifyContent:'flex-end', textAlign: "center" }}>
         
          
          <Link to="./createNewBatchForm">
            {/* {item.icon} */}
            <span>
              <MenuButton title={"Create new Batch"} />
            </span>
          </Link>
         

          
        </Row>
        <Row>
          <h1>Batch Info</h1>
        </Row>
      </Container>
            
        </div>
    )
}

export default BranchandBatch
