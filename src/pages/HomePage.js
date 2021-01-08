import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Czym jest teoria strun?",
        author: 'Jan Nowak',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus eros eget pellentesque rutrum. Vivamus ultricies hendrerit nisi id feugiat. Sed nisi nisl, molestie a malesuada ut, cursus a lectus. Proin sed dignissim neque, in efficitur lectus. Cras rhoncus pharetra porta. Aenean congue commodo nisi non semper. Phasellus pretium dui a nisi faucibus aliquam. Fusce vitae augue ut eros interdum sollicitudin. Nunc eros dolor, cursus eu nibh ut, consequat facilisis massa. Donec pretium, enim non tincidunt viverra, urna odio posuere augue, sit amet iaculis justo arcu a nisl. Morbi viverra laoreet lorem id tempor. Duis condimentum pretium ipsum."
    },
    {
        id: 2,
        title: "Czym jest paradoks Fermiego?",
        author: 'Anna Kwiatkowska',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus eros eget pellentesque rutrum. Vivamus ultricies hendrerit nisi id feugiat. Sed nisi nisl, molestie a malesuada ut, cursus a lectus. Proin sed dignissim neque, in efficitur lectus. Cras rhoncus pharetra porta. Aenean congue commodo nisi non semper. Phasellus pretium dui a nisi faucibus aliquam. Fusce vitae augue ut eros interdum sollicitudin. Nunc eros dolor, cursus eu nibh ut, consequat facilisis massa. Donec pretium, enim non tincidunt viverra, urna odio posuere augue, sit amet iaculis justo arcu a nisl. Morbi viverra laoreet lorem id tempor. Duis condimentum pretium ipsum."
    },
    {
        id: 3,
        title: "Ciemna materia i ciemna energia.",
        author: 'Jan Kowalski',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus eros eget pellentesque rutrum. Vivamus ultricies hendrerit nisi id feugiat. Sed nisi nisl, molestie a malesuada ut, cursus a lectus. Proin sed dignissim neque, in efficitur lectus. Cras rhoncus pharetra porta. Aenean congue commodo nisi non semper. Phasellus pretium dui a nisi faucibus aliquam. Fusce vitae augue ut eros interdum sollicitudin. Nunc eros dolor, cursus eu nibh ut, consequat facilisis massa. Donec pretium, enim non tincidunt viverra, urna odio posuere augue, sit amet iaculis justo arcu a nisl. Morbi viverra laoreet lorem id tempor. Duis condimentum pretium ipsum."
    }
]
const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article}/>
    ))
    return ( 
        <div className="home">
            {artList}
        </div>
     );
}
 
export default HomePage;
























// import React from 'react';
// import Article from '../components/Article';

// const articles = [
//     {
//         id: 1,
//         title: "Czym jest teoria strun",
//         author: "Jan Nowak",
//         text: "1111Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque amet, vitae consequatur exercitationem ratione voluptatibus repudiandae alias deleniti culpa illo suscipit quia sint temporibus illum commodi itaque ea ab ipsum?"
//     },
//     {
//         id: 2,
//         title: "Czym jest paradoks fermiego?",
//         author: "Ania Kwiatkowska",
//         text: "2222Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque accusantium sapiente perspiciatis id ipsam necessitatibus recusandae unde dolores error sunt officiis ad, voluptatum veniam, blanditiis nam in totam esse."
//     },
//     {
//         id: 3,
//         title: "Ciemna materia i ciemna energia?",
//         author: "Jan Kowalski",
//         text: "4444Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque accusantium sapiente perspiciatis id ipsam necessitatibus recusandae unde dolores error sunt officiis ad, voluptatum veniam, blanditiis nam in totam esse."
//     }
// ]

// const HomePage = () => {

//     const artList = articles.map(article => (
//         <Article key={article.id} {...article} />
//     ))
//     return (
//         <div className="home">
//             {artList}
//         </div>
//     );
// }

// export default HomePage;