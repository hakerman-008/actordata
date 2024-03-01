const express = require('express');
const app = express();


const characters = [
    {
        image: 'https://i.ibb.co/xgPLJPF/download-6.jpg',
        traits: '',
        tags: '',
        fullName: 'Robert Downey Jr',
        firstName: 'Robert'
    },
  {
        image: 'https://i.ibb.co/0J1XF2N/Fashion-Beans-Archives-Fashion-Beans.jpg',
        traits: '',
        tags: '',
        fullName: 'Ben Affleck',
        firstName: 'ben'
    },
{
        image: 'https://i.ibb.co/3W1kYK8/download-7.jpg',
        traits: '',
        tags: '',
        fullName: 'salman khan',
        firstName: 'salman'
    },
  {
      image: 'https://i.ibb.co/17qMyx8/Johnny-Depp-Net-worth-2023.jpg',
      traits: '',
      tags: '',
      fullName: 'johnny deep',
      firstName: 'johnny'
  },
  {
      image: 'https://i.ibb.co/jMXKPbN/Tom-Cruise-reveals-Top-Gun-sequel-was-never-expected-to-happen-Here-s-why.jpg',
      traits: '',
      tags: '',
      fullName: 'Tom cruise',
      firstName: 'tom'
  },
  {
      image: 'https://i.ibb.co/sPtYdk6/download-8.jpg',
      traits: '',
      tags: '',
      fullName: 'Leonardo DiCaprio',
      firstName: 'Leonardo'
  },
  {
      image: 'https://i.ibb.co/ZxK8V3Q/Actor-who-played-Forrest-Gump-couldn-t-afford-to-go-to-the-Oscars.jpg',
      traits: '',
      tags: '',
      fullName: 'tom hanks',
      lastName: 'hanks'
  },
  {
      image: 'https://i.ibb.co/zNSpytk/download-9.jpg',
      traits: '',
      tags: '',
      fullName: 'hugh jackman',
      firstName: 'hugh'
  },
  {
      image: 'https://i.ibb.co/3WrY3j6/Will-Smith.jpg',
      traits: '',
      tags: '',
      fullName: 'will Smith',
      firstName: 'will'
  },
  {
      image: 'https://i.ibb.co/F6nHJp3/download-10.jpg',
      traits: '',
      tags: '',
      fullName: 'christian bale',
      firstName: 'christian'
  },
  {
      image: 'https://i.ibb.co/jTq1wJJ/download-11.jpg',
      traits: '',
      tags: '',
      fullName: 'keanu reevs',
      firstName: 'keanu'
  },
  {
      image: 'https://i.ibb.co/FgqZptG/Vin-Diesel-Stays-Confusingly-Cryptic-on-Marvel-s-Interesting-Plans.jpg',
      traits: '',
      tags: '',
      fullName: 'vin diesel',
      firstName: 'vin'
  },
  {
      image: 'https://i.ibb.co/9vwZfyB/Denzel-Washington-Photos-and-Premium-High-Res-Pictures.jpg',
      traits: '',
      tags: '',
      fullName: 'Denzel Washington',
      firstName: 'denzel'
  },
  {
      image: 'https://i.ibb.co/TBgMKZc/Nicolas-Cage-s-USS-Indy-movie-is-abysmal.jpg',
      traits: '',
      tags: '',
      fullName: 'nicolas cage',
      firstName: 'nicolas'
  },
  {
      image: 'https://i.ibb.co/bPrBwCN/Inside-Brad-Pitt-s-Big-Return-and-Why-He-s-Very-Excited-About-Life-Now.jpg',
      traits: '',
      tags: '',
      fullName: 'brad pitt',
      firstName: 'brad'
  },
  {
      image: 'https://i.ibb.co/0VTpKLc/matt-damon.jpg',
      traits: '',
      tags: '',
      fullName: 'Matt damon',
      firstName: ''
  },
  {
      image: 'https://i.ibb.co/D797Y3z/download-12.jpg',
      traits: '',
      tags: '',
      fullName: 'tom hardy',
      firstName: 'tom'
  },
  {
      image: 'https://i.ibb.co/LDKBx1Y/download-13.jpg',
      traits: '',
      tags: '',
      fullName: 'Dwayne Johnson',
      firstName: 'dwayne'
  },
  {
      image: 'https://i.ibb.co/7nv1Mcg/download-14.jpg',
      traits: '',
      tags: '',
      fullName: 'henry cavill',
      firstName: 'henry'
  },
  {
      image: 'https://i.ibb.co/Ksdmgg9/Jason-Momoa-Aquaman-Tattoos-from-Justice-League.jpg',
      traits: '',
      tags: '',
      fullName: 'jason momoa',
      firstName: 'jason'
  },
  {
      image: 'https://i.ibb.co/58XV7bC/Actor-Ezra-Miller.jpg',
      traits: '',
      tags: '',
      fullName: 'ezra miller',
      firstName: 'ezra'
  },
  {
      image: 'https://i.ibb.co/djsrHzk/RAY-FISHER-for-The-Laterals-2019-ph-Aaron-Smith.jpg',
      traits: '',
      tags: '',
      fullName: 'ray fisher',
      firstName: 'ray'
  },
  {
      image: 'https://i.ibb.co/r5LJkyR/Steve-Rogers-icons.jpg',
      traits: '',
      tags: '',
      fullName: 'chris evans',
      firstName: 'chris'
  },
  {
      image: 'https://i.ibb.co/1qCgZYG/We-Need-To-Talk-About-Chris-Hemsworth-s-Left-Hand.jpg',
      traits: '',
      tags: '',
      fullName: 'Chris Hemsworth',
      firstName: 'Chris'
  },
  {
      image: 'https://i.ibb.co/N9Fjbtz/Cover-Story-Chris-Pratt-s-Call-to-Stardom.jpg',
      traits: '',
      tags: '',
      fullName: 'Chris Pratt',
      firstName: 'chris'
  },
  {
      image: 'https://i.ibb.co/RchQJq4/Mark-Ruffalo.jpg',
      traits: '',
      tags: '',
      fullName: 'mark ruffalo',
      firstName: 'mark'
  },
  {
      image: 'https://i.ibb.co/hmXdx2C/download-15.jpg',
      traits: '',
      tags: '',
      fullName: 'Anthony Mackie',
      firstName: 'anthony'
  },
  {
      image: 'https://i.ibb.co/Mhm2yDx/Basilio-Zabini.jpg',
      traits: '',
      tags: '',
      fullName: 'Don Cheadle',
      firstName: 'don'
  },
  {
      image: 'https://i.ibb.co/p0QwkCB/Jeremy-Renner-Says-Snowplow-Accident-Gave-Him-This-Shocking-Superpower.jpg',
      traits: '',
      tags: '',
      fullName: 'Jeremy Renner',
      firstName: 'jeremy'
  },
  {
      image: 'https://i.ibb.co/xz32Dv8/Scott-Lang-Marvel.jpg',
      traits: '',
      tags: '',
      fullName: 'Paul Rudd',
      firstName: 'paul'
  },
  {
      image: 'https://i.ibb.co/Xt6G1VK/Baby-Seb.jpg',
      traits: '',
      tags: '',
      fullName: 'Sebastian Stan',
      firstName: 'sebastian'
  },
  {
      image: 'https://i.ibb.co/dB46gQq/peter-parker-wallpaper.jpg',
      traits: '',
      tags: '',
      fullName: 'Tom Holland',
      firstName: 'tom'
  },
  {
      image: 'https://i.ibb.co/bLvq4xs/Bradley-Cooper.jpg',
      traits: '',
      tags: '',
      fullName: 'Bradley Cooper',
      firstName: 'bradley'
  },
  {
      image: 'https://i.ibb.co/BzzsnRj/T-Challa-Udaku-Marvel-1.jpg',
      traits: '',
      tags: '',
      fullName: 'Chadwick Boseman',
      firstName: 'Chadwick'
  },
  {
      image: 'https://i.ibb.co/jZK0TrY/HAPPY-51st-BIRTHDAY-to-DAVE-BAUTISTA-1-18-20-American-actor-retired-professional-wrestler-former-mix.jpg',
      traits: '',
      tags: '',
      fullName: 'Dave Bautista',
      firstName: 'dave'
  },
  {
      image: 'https://i.ibb.co/FxF9RKW/stephen-strange-wallpaper.jpg',
      traits: '',
      tags: '',
      fullName: 'Benedict Cumberbatch',
      firstName: 'benedict'
  },
  {
      image: 'https://i.ibb.co/BzHVTgG/Simu-Liu-on-His-Journey-from-Scared-Asian-Guy-to-Marvel-Superhero.jpg',
      traits: '',
      tags: '',
      fullName: 'Simu Liu',
      firstName: 'simu'
  },
  {
      image: 'https://i.ibb.co/fCcF6SB/Justin-Timberlake-et-Jessica-Biel-stars-des-Critics-Choice-Awards-Elle.jpg',
      traits: '',
      tags: '',
      fullName: 'Ryan Reynolds',
      firstName: 'ryan'
  },
  {
      image: 'https://i.ibb.co/qF6PKCf/scarlett-johansson.jpg',
      traits: '',
      tags: '',
      fullName: 'Natasha Romanoff',
      firstName: 'natasha'
  },
  {
      image: 'https://i.ibb.co/W5tXQxR/INDOWIN88-Situs-Slot-online-yang-Gacor-Terkenal-Sering-Kasih-Maxwin.jpg',
      traits: '',
      tags: '',
      fullName: 'Antony Starr',
      firstName: 'antony'
  },
  {
      image: 'https://i.ibb.co/wKXvZCT/X-It-s-what-s-happening.jpg',
      traits: '',
      tags: '',
      fullName: 'Karl Urban',
      firstName: 'karl'
  },
  {
      image: 'https://i.ibb.co/SRPWF0F/download-16.jpg',
      traits: '',
      tags: '',
      fullName: 'Jack Quaid',
      firstName: 'jack'
  },
  {
      image: 'https://i.ibb.co/b56GdXG/Giancarlo-Esposito.jpg',
      traits: '',
      tags: '',
      fullName: 'Giancarlo Esposito',
      firstName: 'giancarlo'
  }, 
  {
      image: 'https://i.ibb.co/TTK2FRw/image.jpg',
      traits: '',
      tags: '',
      fullName: 'Paul Walker',
      firstName: 'paul'
  },
  {
      image: 'https://i.ibb.co/j67WPQK/download-17.jpg',
      traits: '',
      tags: '',
      fullName: 'Jason Stath',
      firstName: 'jason'
  },
  {
      image: 'https://i.ibb.co/j420Q1p/Ludacris-Net-worth-2023.jpg',
      traits: '',
      tags: '',
      fullName: 'ludacris',
      firstName: 'luda'
  },
  {
      image: 'https://i.ibb.co/SnTQmwy/download-18.jpg',
      traits: '',
      tags: '',
      fullName: 'Gal Gadot',
      firstName: 'gal'
  },
  {
      image: 'https://i.ibb.co/SnTQmwy/download-18.jpg',
      traits: '',
      tags: '',
      fullName: 'lucas black',
      firstName: 'lucas'
  },
  {
      image: 'https://i.ibb.co/HNy2d68/Bet-You-Can-t-Get-Through-These-John-Cena-Pictures-Without-Drooling-Just-a-Little.jpg',
      traits: '',
      tags: '',
      fullName: 'jhon cena',
      firstName: 'jhon'
  },
  {
      image: 'https://i.ibb.co/C9DjCy3/Alan-Ritchson-habla-de-la-temporada-3-de-Reacher.jpg',
      traits: '',
      tags: '',
      fullName: 'Alan Ritchson',
      firstName: 'alan'
  },
  {
      image: 'https://i.ibb.co/hfZ97Zy/download-19.jpg',
      traits: '',
      tags: '',
      fullName: 'Jensen Ackles',
      firstName: 'jensen'
  },
  {
      image: 'https://i.ibb.co/Jk5Jf4H/henry-ballentine-magnolia-parks-universe-by-jessa-haistings-fc-chace-crawford.jpg',
      traits: '',
      tags: '',
      fullName: 'Chace Crawford',
      firstName: 'chace'
  },
  {
      image: 'https://i.ibb.co/c311PMV/jessie-usher-photography.jpg',
      traits: '',
      tags: '',
      fullName: 'Jessie T. Usher',
      firstName: 'jessie'
  },
  {
      image: 'https://i.ibb.co/cgxFqQC/Lee-Jung-jae.jpg',
      traits: '',
      tags: '',
      fullName: 'Lee Jung-jae',
      firstName: 'lee'
  },
  {
      image: 'https://i.ibb.co/7RyGrPD/Squid-Game-Actor-Park-Hae-Soo-Welcome-His-First-Child.jpg',
      traits: '',
      tags: '',
      fullName: 'Park Hae-soo',
      firstName: 'park'
  },
  {
      image: 'https://i.ibb.co/zQRn717/Alvaro-morte.jpg',
      traits: '',
      tags: '',
      fullName: 'Álvaro Morte',
      firstName: 'alvaro'
  },
  {
      image: 'https://i.ibb.co/pL3GWZK/Montre-Berlin-Netflix.jpg',
      traits: '',
      tags: '',
      fullName: 'Pedro Alonso',
      firstName: 'pedro'
  },
  {
      image: 'https://i.ibb.co/BGg3ynx/download-20.jpg',
      traits: '',
      tags: '',
      fullName: 'Miguel Herrán',
      firstName: 'miguel'
  },
  {
      image: 'https://i.ibb.co/yBv3SKr/Jaime-Lorente-27-anos-1991.jpg',
      traits: '',
      tags: '',
      fullName: 'Jaime Lorente',
      firstName: 'jaime'
  },
  {
      image: 'https://i.ibb.co/bLrxHtD/Aamir-Khan-Aamir-Khan.jpg',
      traits: '',
      tags: '',
      fullName: 'amir khan',
      firstName: 'amir'
  },
  {
      image: 'https://i.ibb.co/KjD2Nf1/Akshay-Kumar-filmfare-Photographed-by-Abhay-Singh-Film-Fare-Photoshoot-Fashion-Style-Bollywood-India.jpg',
      traits: '',
      tags: '',
      fullName: 'akshay Kumar',
      firstName: 'akshay'
  },
  {
      image: 'https://i.ibb.co/87Wt75z/Ajay-Devgn.jpg',
      traits: '',
      tags: '',
      fullName: 'ajay devgn',
      firstName: 'ajay'
  },
  {
      image: 'https://i.ibb.co/5h7SDJD/Amjad-Khan.jpg',
      traits: '',
      tags: '',
      fullName: 'amjad khan',
      firstName: 'amjad'
  },
  {
      image: 'https://i.ibb.co/rsmQxVF/12-Bollywood-Actors-Who-Faced-Struggles-Before-Proving-Dreams-Do-Come-True.jpg',
      traits: '',
      tags: '',
      fullName: 'amitabh bachchan',
      firstName: 'amitabh'
  },
  {
      image: 'https://i.ibb.co/K9tJBL2/download-21.jpg',
      traits: '',
      tags: '',
      fullName: 'akshaye khanna',
      firstName: 'akshaye'
  },
  {
      image: 'https://i.ibb.co/MRvH6j9/The-10-Best-Beard-Styles-Of-2020-Inspired-By-Bollywood.jpg',
      traits: '',
      tags: '',
      fullName: 'ranbir sing',
      firstName: 'ranbir'
  },
  {
      image: 'https://i.ibb.co/w64bFL2/download-22.jpg',
      traits: '',
      tags: '',
      fullName: 'Ranbir Kapoor',
      firstName: 'ranbir'
  },
  {
      image: 'https://i.ibb.co/LZRxgYV/A-very-Happy-Birthday-to-the-Circuit-aka-Arshad-Warsi-who-has-done-brilliant-acting-in-the-bollywood.jpg',
      traits: '',
      tags: '',
      fullName: 'arshad warsi',
      firstName: 'arshad'
  },
  {
      image: 'https://i.ibb.co/1RL9WD9/Happy-Birthday-Ayushmann.jpg',
      traits: '',
      tags: '',
      fullName: 'Ayushmann Khurrana',
      firstName: 'ayushman'
  },
  {
      image: 'https://i.ibb.co/xJ4D2YL/Jaipur-Ashish-Vidyarthi-during-a-programme-Gallery-Social-News-XYZ.jpg',
      traits: '',
      tags: '',
      fullName: 'Ashish Vidyarthi',
      firstName: 'ashish'
  },
  {
      image: 'https://i.ibb.co/tPy7Ffz/download-23.jpg',
      traits: '',
      tags: '',
      fullName: 'Anil Kapoor',
      firstName: 'anil'
  },
  {
      image: 'https://i.ibb.co/g60fcPW/download-24.jpg',
      traits: '',
      tags: '',
      fullName: 'amrish puri',
      firstName: 'amrish'
  },
  {
      image: 'https://i.ibb.co/ng9Vctp/Boman-Irani.jpg',
      traits: '',
      tags: '',
      fullName: 'boman irani',
      firstName: 'boman'
  },
  {
      image: 'https://i.ibb.co/BGJ0LF1/HBDMEGASTARCHIRANJEEVI-Megastar-Chiranjeevi-Boss-Gangleader-Chiranjeevi-HD-wallpapers.jpg',
      traits: '',
      tags: '',
      fullName: 'Chiranjeevi',
      firstName: 'chiran'
  },
  {
      image: 'https://i.ibb.co/2dbcJr2/Chunky-Pandey.jpg',
      traits: '',
      tags: '',
      fullName: 'Chunky Pandey',
      firstName: 'chunky'
  },
  {
      image: 'https://i.ibb.co/M8x8cVN/Dharmendra-or-Dharam-Singh-Deol.jpg',
      traits: '',
      tags: '',
      fullName: 'Dharmendra sing',
      firstName: 'dharmendra'
  },
  {
      image: 'https://i.ibb.co/YXW3RjK/Farhan-Akhtar-Amitabh-Bahchan-s-Wazir-movie-will-release-on-2nd-October-2015.jpg',
      traits: '',
      tags: '',
      fullName: 'Farhan akhtar',
      firstName: 'farhan'
  },
  {
      image: 'https://i.ibb.co/NtR6CXq/34a3259a6e166afae40438a5740d4348.jpg',
      traits: '',
      tags: '',
      fullName: 'kapil sharma',
      firstName: 'kapil'
  },
  {
      image: 'https://i.ibb.co/ctnSrg1/Hrithik-Roshan-attends-the-European-Premiere-of-Kites-at-Odeon-West.jpg',
      traits: '',
      tags: '',
      fullName: 'Hrithik Roshan',
      firstName: 'Hrithik'
  },
  {
      image: 'https://i.ibb.co/sHbMR5R/Irrfan-Khan-Made-Us-All-Feel-Like-We-Had-a-Story-to-Tell.jpg',
      traits: '',
      tags: '',
      fullName: 'Irrfan Khan',
      firstName: 'irrfan'
  },
  {
      image: 'https://i.ibb.co/ZTR3B4S/Jackie-Shroff-narrates-Hall-of-Fame-light-and-sound-show-in-Leh-on-Martyrs-039-Day.jpg',
      traits: '',
      tags: '',
      fullName: 'Jackie Shroff',
      firstName: 'jackie'
  },
  {
      image: 'https://i.ibb.co/qMSHM7y/Happy-Birthday-Johny-Lever-14-08-Tell-us-which-are-your-favorite-films-of-him.jpg',
      traits: '',
      tags: '',
      fullName: 'Johny Lever',
      firstName: 'johny'
  },
  {
      image: 'https://i.ibb.co/pvkbtnG/G-Venket-Ram-Photography-Bigg-Boss-Kamal-Haasan.jpg',
      traits: '',
      tags: '',
      fullName: 'Kamal Haasan',
      firstName: 'kamal'
  }, 
  {
      image: 'https://i.ibb.co/W0K7JNn/download-25.jpg',
      traits: '',
      tags: '',
      fullName: 'Mithun Chakraborty',
      firstName: 'mithun'
  },
  {
      image: 'https://i.ibb.co/VmJw3VT/EXCLUSIVE-Aaliya-Siddiqui-recalls-good-old-days-with-ex-husband-Nawazuddin-Siddiqui-He-d-borrow.jpg',
      traits: '',
      tags: '',
      fullName: 'Nawazuddin Siddiqui',
      firstName: 'nawazuddin'
  },
  {
      image: 'https://i.ibb.co/23LsbP0/0e7ee710179d7ca2a35ffa98ac7ecb79.jpg',
      traits: '',
      tags: '',
      fullName: 'Pankaj Tripathi',
      firstName: 'pankaj'
  },
  {
      image: 'https://i.ibb.co/kQQrcQL/2a54ffeea426d838ef627d3cb6905b79.jpg',
      traits: '',
      tags: '',
      fullName: 'Paresh Rawal',
      firstName: 'paresh'
  },
  {
      image: 'https://i.ibb.co/wzF6RNr/Prakash-Raj-s-Life-Divorce-From-First-Wife-Death-Of-His-5-Year-Old-Son-And-Second-Marriage-At-45.jpg',
      traits: '',
      tags: '',
      fullName: 'Prakash Raj',
      firstName: 'prakash'
  },
  {
      image: 'https://i.ibb.co/prhJmq1/Prabhu-Deva-In-Troy-Costa-Screen-Awards-2013-troycosta-menswear.jpg',
      traits: '',
      tags: '',
      fullName: 'Prabhu Deva',
      firstName: 'prabu'
  },
  {
      image: 'https://i.ibb.co/KjXy2f2/Prabhas.jpg',
      traits: '',
      tags: '',
      fullName: 'Venkata Satyanarayana Prabhas Raju Uppalapati',
      firstName: 'prabhas'
  },
  {
      image: 'https://i.ibb.co/4KZsMZT/Bobby-Deol-turned-alcoholic-during-low-phase-of-career.jpg',
      traits: '',
      tags: '',
      fullName: 'Bobby Deol',
      firstName: 'bobby'
  },
  {
      image: 'https://i.ibb.co/x5cS011/shahrukh-khan-pathan.jpg',
      traits: '',
      tags: '',
      fullName: 'shahrukh khan',
      firstName: 'sharukh'
  },
  {
      image: 'https://i.ibb.co/MR3ccNs/download-26.jpg',
      traits: '',
      tags: '',
      fullName: 'Shivaji Rao Gaikwad',
      firstName: 'Rajinikanth'
  },
  {
      image: 'https://i.ibb.co/smd0PJv/Rishi-Kapoor.jpg',
      traits: '',
      tags: '',
      fullName: 'rishi kapoor',
      firstName: 'rishi'
  },
  {
      image: 'https://i.ibb.co/QmC7FLG/download-27.jpg',
      traits: '',
      tags: '',
      fullName: 'Riteish Deshmukh',
      firstName: 'riteish'
  },
  {
      image: 'https://i.ibb.co/2vthxp0/Saif-Ali-Khan-the-top-cop-in-Vikram-Vedha-look-out-now.jpg',
      traits: '',
      tags: '',
      fullName: 'Saif Ali Khan',
      firstName: 'saif'
  },
  {
      image: 'https://i.ibb.co/Df7rnvP/sharman-joshi-in-taarak.jpg',
      traits: '',
      tags: '',
      fullName: 'Sharman Joshi',
      firstName: 'sharman'
  },
  {
      image: 'https://i.ibb.co/jHp5Khv/download-28.jpg',
      traits: '',
      tags: '',
      fullName: 'Sunny Deol',
      firstName: 'sunny'
  },
  {
      image: 'https://i.ibb.co/KxjCtKG/e35523238ad51729b96e20860d3fdf72.jpga',
      traits: '',
      tags: '',
      fullName: 'Sanjay Dutt',
      firstName: 'sanjay'
  },
  {
      image: 'https://i.ibb.co/M1ybStF/Suniel-Shetty-to-make-his-OTT-debut-with-Invisible-Woman.jpg',
      traits: '',
      tags: '',
      fullName: 'Suniel Shetty',
      firstName: 'suniel'
  },
  {
      image: 'https://i.ibb.co/yYmgMy7/Tiger-Shroff.jpg',
      traits: '',
      tags: '',
      fullName: 'Tiger Shroff',
      firstName: 'tiger'
  },
  {
      image: 'https://i.ibb.co/GvZGQ8j/download-29.jpg',
      traits: '',
      tags: '',
      fullName: 'Varun Dhawan',
      firstName: 'varun'
  },
  {
      image: 'https://i.ibb.co/1spL92v/Vega-Entertainment-Wishes-a-Very-Happy-Birthday-to-Actor-Daggubati-Venkatesh-Daggubati-Venkatesh-Act.jpg',
      traits: '',
      tags: '',
      fullName: 'Venkatesh Daggubati',
      firstName: 'venkatesh'
  },
  {
      image: 'https://i.ibb.co/WVTSZ9h/Jr-NTR-1.jpg',
      traits: '',
      tags: '',
      fullName: 'NTR Junior',
      firstName: 'ntr'
  },
  {
      image: 'https://i.ibb.co/LC7TZ7c/download-30.jpg',
      traits: '',
      tags: '',
      fullName: 'Allu Arjun',
      firstName: 'allu'
  },
  {
      image: 'https://i.ibb.co/SPdcMxS/download-31.jpg',
      traits: '',
      tags: '',
      fullName: 'vijay sethupathi',
      firstName: 'vijay'
  },
  {
      image: 'https://i.ibb.co/Xj28JMz/36bf035cd846fea751460f40255d6eb5.jpg',
      traits: '',
      tags: '',
      fullName: 'vijay thalapathy',
      firstName: 'vijay'
  },
  {
      image: 'https://i.ibb.co/h2gGHb9/Suriya.jpg',
      traits: '',
      tags: '',
      fullName: 'Suriya Sivakumar',
      firstName: 'suriya'
  },
  {
      image: 'https://i.ibb.co/q5SwdYZ/Maari-dhanush-mass-hd-still.jpg',
      traits: '',
      tags: '',
      fullName: 'Venkatesh Prabhu Kasthuri Raja dhanush',
      lastName: 'dhanush'
  },
  {
      image: 'https://i.ibb.co/5F401zm/RRR-Movie-hd-wallpaper-rrr-ramcharan-Ram-Charan-hd-wallpaper.jpg',
      traits: '',
      tags: '',
      fullName: 'Ram Charan',
      firstName: 'ram'
  },
  {
      image: 'https://i.ibb.co/BzHbM57/Ajith-image-thunivu-pics.jpg',
      traits: '',
      tags: '',
      fullName: 'Ajith Kumar',
      firstName: 'ajith'
  },
 {
        image: 'https://i.ibb.co/HBh3YB9/90-Legendary-Tollywood-Telugu-Cinema-Heroes-1957-2023.jpg',
        traits: '',
        tags: '',
        fullName: 'vijay deverkonda',
        firstName: 'vijay'
    },
 {
        image: 'https://i.ibb.co/cXY7VRv/423568496.jpg',
        traits: '',
        tags: '',
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
