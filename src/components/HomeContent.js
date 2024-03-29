import React from 'react';
import { Table, Container } from 'react-bootstrap';

function HomeContent() {
  return (
    <Container
      id="homeCont"
      className="h-100 justify-content-center align-self-center mt-4 pb-2 mb-2"
      style={{ backgroundColor: '#fcfbf7' }}
    >
      <h1
        className="display-4 mt-4"
        style={{
          color: '#bfa552',
          fontSize: '3rem',
          fontWeight: '450',
          textShadow: '1.5px 1.5px black',
        }}
      >
        Welcome to Vector Electrical and Controls Corp.
      </h1>
      <hr id="breakStyle" />
      <p>
        We know that you have a choice of electrical contractors in the area and
        we appreciate your consideration. Our hope is that you'll feel confident
        in our ability to meet all of your expectations and know that our
        customers are always our number one focus.
      </p>
      <p>
        Please take a moment to browse through our site to learn more about our
        company and how we can show you the Vector Electrical and Controls
        difference. If you have any questions or comments, please feel free to
        contact us. We look forward to hearing from you soon and thank you for
        your consideration.
      </p>
      <p>
        Please see our service areas and associated licensing numbers below.
      </p>
      <Table responsive="sm" className="mt-4">
        <thead>
          <tr>
            <th
              style={{
                borderColor: '#8c1414',
                borderTop: '2px solid #8c1414',
                borderBottom: '2px solid #8c1414',
                color: '#bfa552',
                fontSize: '1.25rem',
              }}
            >
              State
            </th>
            <th
              style={{
                borderColor: '#8c1414',
                borderTop: '2px solid #8c1414',
                borderBottom: '2px solid #8c1414',
                color: '#bfa552',
                fontSize: '1.25rem',
              }}
            >
              Master's License #
            </th>
            <th
              style={{
                borderColor: '#8c1414',
                borderTop: '2px solid #8c1414',
                borderBottom: '2px solid #8c1414',
                color: '#bfa552',
                fontSize: '1.25rem',
              }}
            >
              Journeyman's License #
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>New Hampshire</td>
            <td>3768M</td>
            <td>--</td>
          </tr>
          <tr>
            <td style={{ borderTop: '1px solid #d2d4d6' }}>Massachusetts</td>
            <td style={{ borderTop: '1px solid #d2d4d6' }}>9490A</td>
            <td style={{ borderTop: '1px solid #d2d4d6' }}>24704E</td>
          </tr>
          <tr>
            <td style={{ borderColor: '#d2d4d6' }}>Maine</td>
            <td style={{ borderColor: '#d2d4d6' }}>MS60016718</td>
            <td style={{ borderColor: '#d2d4d6' }}>--</td>
          </tr>
          <tr>
            <td style={{ borderColor: '#d2d4d6' }}>Vermont</td>
            <td style={{ borderColor: '#d2d4d6' }}>EM-3420</td>
            <td style={{ borderColor: '#d2d4d6' }}>--</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default HomeContent;
