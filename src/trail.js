import React from 'react';
import ReactDom from 'react-dom';

class ContactList extends React.Component {
  render() {
    const people = [{ name: 'Michael' }, { name: 'John' }, { name: 'Ryan' }];
    return (
      <ol>
        {people.map(person => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ol>
    );
  }
}
// const people = [
//     { name: 'Michael' },
//     { name: 'John' },
//     { name: 'Ryan' }
// ]

// const element = <ol>
//     {
//         people.map(
//             person => (
//                 <li key={person.name}>{person.name}</li>
//             )
//         )
//     }
// </ol>

ReactDom.render(
  //element,
  <ContactList />,
  document.getElementById('root')
);
