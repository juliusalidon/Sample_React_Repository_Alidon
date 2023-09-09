import Image1 from "../images/2nd.jpg";
import Image2 from "../images/3rd.jpg";
import Image3 from "../images/4th.jpg";
import Image4 from "../images/5th.jpg";
import Image5 from "../images/6th.jpg";
import Image6 from "../images/7th.jpg";
import GridItems from "../components/GridItems";

const Home = () => {
    return ( 
        <>
            <h1 className="text-warning">Top 5 Animes of the Week:</h1>
            <div className="row">
                <GridItems name="Dragon Ball Z" imageFile={Image1} desc="Dragon Ball Z[c] is a Japanese anime television series produced by Toei Animation. Part of the Dragon Ball media franchise, it is the sequel to the 1986 Dragon Ball anime series and adapts the latter 325 chapters of the original Dragon Ball manga series created by Akira Toriyama. The series aired in Japan on Fuji TV from April 1989 to January 1996 and was later dubbed for broadcast in at least 81 countries worldwide.[6]

                Dragon Ball Z continues the adventures of Goku in his adult life as he and his companions defend the Earth against villains including aliens (Vegeta, Frieza), androids (Cell), and magical creatures (Majin Buu). At the same time, the story parallels the life of his son, Gohan, as well as the development of his rivals, Piccolo and Vegeta.

                Due to the success of the anime in the United States, the manga chapters making up its story were initially released by Viz Media under the Dragon Ball Z title. The anime's popularity has also spawned numerous media and merchandise that has come to represent the majority of content within the Dragon Ball franchise. Dragon Ball Z remains a cultural icon through numerous adaptations and re-releases, including a remastered broadcast titled Dragon Ball Z Kai.[d]

                Dragon Ball Z has since been followed by two sequel series: Dragon Ball GT (1996–1997) and Dragon Ball Super (2015–2018)."></GridItems>
                <GridItems name="One Piece" imageFile={Image2} desc="The world of One Piece is populated by humans and other races such as dwarves (more akin to faeries in size), giants, merfolk, fish-men, long-limbed tribes, long-necked people known as the Snakeneck Tribe, and animal people (known as Minks). The world is governed by an intercontinental organization known as the World Government, consisting of dozens of member countries. The Navy is the sea military branch of the World Government that protects the known seas from pirates and other criminals. There is also Cipher Pol which is a group of agencies within the World Government that are their secret police. While pirates are major opponents against the Government, the ones who really challenge their rule are the Revolutionary Army who seeks to overthrow them. The central tension of the series pits the World Government and their forces against pirates. The series regularly emphasizes moral ambiguity over the label pirate, which includes cruel villains, but also any individuals that do not submit to the World Government's authoritarian—and often morally ambiguous—rule. The One Piece world also has supernormal characteristics like Devil Fruits[Jp 1], which are mysterious fruits that grant whoever eats them transformative powers. Another supernatural power is Haki[Jp 2], which grants its users enhanced willpower, observation, and fighting abilities, and it is one of the only effective methods of inflicting bodily harm on certain Devil Fruit users.

                The world itself consists of two vast oceans divided by a massive mountain range called the Red Line[Jp 3]. Within the oceans is a second global phenomenon known as the Grand Line[Jp 4], which is a sea that runs perpendicular to the Red Line and is bounded by the Calm Belt[Jp 5], strips of calm ocean infested with huge ship-eating monsters known as Sea Kings[Jp 6]. These geographical barriers divide the world into four seas: North Blue[Jp 7], East Blue[Jp 8], West Blue[Jp 9], and South Blue[Jp 10]. Passage between the four seas, and the Grand Line, is therefore difficult. Unique and mystical features enable transport between the seas, such as the use of Sea Prism Stone[Jp 11] employed by government ships to mask their presence as they traverse the Calm Belt, or the Reverse Mountain[Jp 12] where water from the four seas flows uphill before merging into a rapidly flowing and dangerous canal that enters the Grand Line. The Grand Line itself is split into two separate halves with the Red Line between being Paradise[Jp 13] and the New World[Jp 14]"></GridItems>
                <GridItems name="Naruto" imageFile={Image3} desc="Lorem Ipsum"></GridItems>
                <GridItems name="Bleach" imageFile={Image4} desc="Lorem Ipsum"></GridItems>
                <GridItems name="Yuyu Hakusho" imageFile={Image5} desc="Lorem Ipsum"></GridItems>
                <GridItems name="Slam Dunk" imageFile={Image6} desc="Lorem Ipsum"></GridItems>
            </div>       
            </>
     );
}
 
export default Home;