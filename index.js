const express = require('express');
const app = express();


const characters = [
    {
        image: '',
        traits: '',
        tags: '',
        fullName: 'Robert Downey Jr',
        firstName: 'Robert'
    },
  {
        image: '',
        traits: '',
        tags: '',
        fullName: 'Ben Affleck',
        firstName: 'ben'
    },
{
        image: '',
        traits: '',
        tags: '',
        fullName: 'salman khan',
        firstName: 'salman'
    },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'johnny deep',
      firstName: 'johnny'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Tom cruise',
      firstName: 'tom'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Leonardo DiCaprio',
      firstName: 'Leonardo'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'tom hanks',
      lastName: 'hanks'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'hugh jackman',
      firstName: 'hugh'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'will Smith',
      firstName: 'will'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'christian bale',
      firstName: 'christian'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'keanu reevs',
      firstName: 'keanu'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'vin diesel',
      firstName: 'vin'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Denzel Washington',
      firstName: 'denzel'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'nicolas cage',
      firstName: 'nicolas'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'brad pitt',
      firstName: 'brad'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Matt damon',
      firstName: ''
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'tom hardy',
      firstName: 'tom'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Dwayne Johnson',
      firstName: 'dwayne'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'henry cavill',
      firstName: 'henry'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'jason momoa',
      firstName: 'jason'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'ezra miller',
      firstName: 'ezra'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'ray fisher',
      firstName: 'ray'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'chris evans',
      firstName: 'chris'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Chris Hemsworth',
      firstName: 'Chris'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Chris Pratt',
      firstName: 'chris'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'mark ruffalo',
      firstName: 'mark'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Anthony Mackie',
      firstName: 'anthony'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Don Cheadle',
      firstName: 'don'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Jeremy Renner',
      firstName: 'jeremy'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Paul Rudd',
      firstName: 'paul'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Sebastian Stan',
      firstName: 'sebastian'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Tom Holland',
      firstName: 'tom'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Bradley Cooper',
      firstName: 'bradley'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Chadwick Boseman',
      firstName: 'Chadwick'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Dave Bautista',
      firstName: 'dave'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Benedict Cumberbatch',
      firstName: 'benedict'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Anthony Mackie',
      firstName: 'anthony'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Sebastian Stan',
      firstName: 'stan'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Simu Liu',
      firstName: 'simu'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Ryan Reynolds',
      firstName: 'ryan'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Hugh Jackman',
      firstName: 'huge'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Natasha Romanoff',
      firstName: 'natasha'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Antony Starr',
      firstName: 'antony'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Karl Urban',
      firstName: 'karl'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Jack Quaid',
      firstName: 'jack'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Giancarlo Esposito',
      firstName: 'giancarlo'
  }, 
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Paul Walker',
      firstName: 'paul'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Jason Stath',
      firstName: 'jason'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'ludacris',
      firstName: 'luda'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Gal Gadot',
      firstName: 'gal'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'lucas black',
      firstName: 'lucas'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'jhon cena',
      firstName: 'jhon'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Alan Ritchson',
      firstName: 'alan'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Jensen Ackles',
      firstName: 'jensen'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Chace Crawford',
      firstName: 'chace'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Jessie T. Usher',
      firstName: 'jessie'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Lee Jung-jae',
      firstName: 'lee'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Park Hae-soo',
      firstName: 'park'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Álvaro Morte',
      firstName: 'alvaro'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Pedro Alonso',
      firstName: 'pedro'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Miguel Herrán',
      firstName: 'miguel'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Jaime Lorente',
      firstName: 'jaime'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'amir khan',
      firstName: 'amir'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'akshay Kumar',
      firstName: 'akshay'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'ajay devgn',
      firstName: 'ajay'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'amjad khan',
      firstName: 'amjad'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'amitabh bachchan',
      firstName: 'amitabh'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'akshaye khanna',
      firstName: 'akshaye'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'ranbir sing',
      firstName: 'ranbir'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Ranbir Kapoor',
      firstName: 'ranbir'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'arshad warsi',
      firstName: 'arshad'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Ayushmann Khurrana',
      firstName: 'ayushman'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Ashish Vidyarthi',
      firstName: 'ashish'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Anil Kapoor',
      firstName: 'anil'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'amrish pri',
      firstName: 'amrish'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'boman irani',
      firstName: 'boman'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Chiranjeevi',
      firstName: 'chiran'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Chunky Pandey',
      firstName: 'chunky'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Dharmendra sing',
      firstName: 'dharmendra'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Farhan akhtar',
      firstName: 'farhan'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'kapil sharma',
      firstName: 'kapil'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Hrithik Roshan',
      firstName: 'Hrithik'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Irrfan Khan',
      firstName: 'irrfan'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Jackie Shroff',
      firstName: 'jackie'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Johny Lever',
      firstName: 'johny'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Kamal Haasan',
      firstName: 'kamal'
  }, 
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'kader khan',
      firstName: 'kader'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Kay Kay Menon',
      firstName: 'kay'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Kapil Sharma',
      firstName: 'kapil'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Krushna Abhishek',
      firstName: 'krushna'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Mithun Chakraborty',
      firstName: 'mithun'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Mukul Dev',
      firstName: 'mukul'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Nagarjuna Akkineni',
      firstName: 'nagarjuna'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Nawazuddin Siddiqui',
      firstName: 'nawazuddin'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Pankaj Tripathi',
      firstName: 'pankaj'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Paresh Rawal',
      firstName: 'paresh'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Prakash Raj',
      firstName: 'prakash'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Prabhu Deva',
      firstName: 'prabu'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Venkata Satyanarayana Prabhas Raju Uppalapati',
      firstName: 'prabhas'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Bobby Deol',
      firstName: 'bobby'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'shahrukh khan',
      firstName: 'sharukh'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Shivaji Rao Gaikwad',
      firstName: 'Rajinikanth'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'rishi kapoor',
      firstName: 'rishi'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Riteish Deshmukh',
      firstName: 'riteish'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Rajpal Naurang Yadav',
      firstName: 'rajpal'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Shakti Kapoor',
      firstName: 'shakti'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Saif Ali Khan',
      firstName: 'saif'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Sharman Joshi',
      firstName: 'sharman'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Sunny Deol',
      firstName: 'sunny'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Sanjay Dutt',
      firstName: 'sanjay'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Suniel Shetty',
      firstName: 'suniel'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Tiger Shroff',
      firstName: 'tiger'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Varun Dhawan',
      firstName: 'varun'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Venkatesh Daggubati',
      firstName: 'venkatesh'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Yashpal Sharma',
      firstName: 'yashpal'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'NTR Junior',
      firstName: 'ntr'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Allu Arjun',
      firstName: 'allu'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'vijay sethupathi',
      firstName: 'vijay'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'vijay thalapathy',
      firstName: 'vijay'
  },
  {
      image: '',
      traits: '',
      tags: 'aukat dikha diya',
      fullName: 'Suriya Sivakumar',
      firstName: 'suriya'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Venkatesh Prabhu Kasthuri Raja dhanush',
      lastName: 'dhanush'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Ram Charan',
      firstName: 'ram'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Ajith Kumar',
      firstName: 'ajith'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Kennedy John Victor Vikram',
      lastName: 'vikram'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Dulquer Salmaan',
      firstName: 'dulquer'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Pawan Kalyan',
      firstName: 'pawan'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Rana Daggubati',
      firstName: 'rana'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Naveen Kumar Gowda yash',
      lastName: 'yash'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Fahadh Faasil',
      firstName: 'fahadh faasil'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Karthik Sivakumar',
      firstName: 'karthik'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'ravi teja',
      firstName: 'ravi'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Naveen Babu Ghanta aka Nani',
      firstName: 'nani'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Nandamuri Balakrishna',
      firstName: 'nandamuri'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'R. Madhavan',
      lastName: 'Madhavan'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Naga Chaitanya',
      firstName: 'naga'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Deepak Adhikari dev',
      lastName: 'dev'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Jeetendra Madnani',
      firstName: 'jeet'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Bryan Cranston',
      firstName: 'bryan'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Aaron Paul',
      firstName: 'Aaron'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Dean Norris',
      firstName: 'dean'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Jonathan Banks',
      firstName: 'jonathan'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Bob Odenkirk',
      firstName: 'bob'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'zack Snyder',
      firstName: 'zack'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Tom Hanks',
      firstName: 'tom'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Samuel L. Jackson',
      firstName: 'samuel'
  },
  {
      image: '',
      traits: '',
      tags: '',
      fullName: 'Robert Pattinson',
      firstName: 'robert'
  },
  {
    image: '',
    traits: '',
    tags: '',
    fullName: 'Arthur Fleck',
    firstName: 'arthur'
  },
  {
    image: '',
    traits: '',
    tags: '',
    fullName: 'Al Pacino',
    firstName: 'al'
  },
  {
    image: '',
    traits: '',
    tags: '',
    fullName: 'Michael Caine',
    firstName: 'michael'
  },
  {
    image: '',
    traits: '',
    tags: '',
    fullName: 'Cillian Murphy',
    firstName: 'cillian'
  },
  {
    image: '',
    traits: '',
    tags: '',
    fullName: 'Jackie Chan',
    firstName: 'jackie'
  },
  {
    image: '',
    traits: '',
    tags: '',
    fullName: 'Chris Tucker',
    firstName: 'chris'
  },
  {
        image: '',
        traits: '',
        tags: '',
        fullName: 'Jacob Batalon',
        firstName: 'jacob'
    },
 {
        image: '',
        traits: '',
        tags: '',
        fullName: 'Tobey Maguire',
        firstName: 'tobey'
    },
 {
        image: '',
        traits: '',
        tags: '',
        fullName: 'Willem Dafoe',
        firstName: 'willem'
    },
  {
        image: '',
        traits: '',
        tags: '',
        fullName: 'J. K. Simmons',
        firstName: 'jk'
    },
 {
        image: '',
        traits: '',
        tags: '',
        fullName: 'Benedict Cumberbatch',
        firstName: 'bendict'
    },
 {
        image: '',
        traits: '',
        tags: '',
        fullName: 'Andrew Garfield',
        firstName: 'andrew'
    },
  {
        image: '',
        traits: '',
        tags: '',
        fullName: 'Matthew McConaughey',
        firstName: 'matthew'
    },
 {
        image: '',
        traits: '',
        tags: '',
        fullName: 'Tom Ellis',
        firstName: 'tom'
    },
 {
        image: '',
        traits: '',
        tags: '',
        fullName: 'Kevin Alejandro',
        firstName: 'kevin'
    },
  {
        image: '',
        traits: '',
        tags: '',
        fullName: 'D.B. Woodside',
        lastName: 'woodside'
    },
 {
        image: '',
        traits: '',
        tags: '',
        fullName: 'Dennis Haysbert',
        firstName: 'dennis'
    },
 {
        image: 'https://i.ibb.co/cXY7VRv/423568496.jpg',
        traits: '',
        tags: 'coder',
        fullName: 'kshitiz',
        firstName: 'cutiz'
    },
  ];


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let remainingCharacters = shuffle([...characters]); 


app.get('/kshitiz', (req, res) => {
    if (remainingCharacters.length === 0) {

        remainingCharacters = shuffle([...characters]);
    }

    const randomIndex = Math.floor(Math.random() * remainingCharacters.length);
    const randomCharacter = remainingCharacters[randomIndex];
    remainingCharacters.splice(randomIndex, 1);
    res.json(randomCharacter);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
