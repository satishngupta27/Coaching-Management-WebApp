import React from 'react'

function BranchandBatch() {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Branch and Batch </h1>
      <Container>
        <Row style={{ justifyContent:'flex-end', textAlign: "center" }}>
          <Link to="./academics/addNotes">
            {/* {item.icon} */}
            <span>
              <MenuButton title={"Create new Branch"} />
            </span>
          </Link>
          
          <Link to="./Student_Info/updateStudent">
            {/* {item.icon} */}
            <span>
              <MenuButton title={"Create new Batch"} />
            </span>
          </Link>
         

          
        </Row>
        <Row>
          <h1>notes here</h1>
        </Row>
      </Container>
            
        </div>
    )
}

export default BranchandBatch
