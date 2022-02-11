
import { Row, Col, Card } from 'react-bootstrap';
import '../styles/blog.css';
import { BiChevronRight } from "react-icons/bi"


type Props = {};

const data = [
  {
    time: "May 27, 2021",
    comments: "12 Comments",
    title: "Important of getting a notifications",
    para:"Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur."
  },
  {
    time: "May 27, 2021",
    comments: "12 Comments",
    title: "Important of getting a notifications",
    para:"Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur."
  },
  {
    time: "May 27, 2021",
    comments: "12 Comments",
    title: "Important of getting a notifications",
    para:"Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur."
  }
]

const Blog = (props: Props) => {
  return (
  <div className="container" style={{paddingBottom: "80px"}}>
        <Row className="blog__heading" >
           <h1>Blog Posts</h1>
            <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.</p>
           </Row>
          <Row className="blog__cards">
             {
               data.map((item) => {
                 return(
                   <>
                   <Card style={{ width: '20rem', border: 'none' }}>
                      <Card.Img variant="top" src="images/post_2.jpg" style={{borderRadius: '10px'}}/>
                      <Card.Body>
                        <Card.Title style={{fontSize:"1rem", color: '#7a7a7a'}}>{item.time} . {item.comments}</Card.Title>
                        <Card.Title style={{fontWeight:"700"}}>{item.title}</Card.Title>
                        <Card.Text>
                          {item.para}
                        </Card.Text>
                        <h6 style={{color:'orange'}}>Read More<BiChevronRight /></h6>
                      </Card.Body>
                    </Card>
                   </>
                 )
               })
             }
       </Row>
  </div>
  );
};

export default Blog;

