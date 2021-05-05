import './App.css';
import Films from "./cpmponents/component1";

const films = [
    {
        title: 'Shameless',
        description: 'Shameless is an American comedy-drama television series developed by John Wells that ran on Showtime from January 9,\n' +
            '2011 to April 11, 2021. It is an adaptation of Paul Abbott\'s British series of the same name and features an ensemble cast\n' +
            'led by William H. Macy and Emmy Rossum. The show is set on the South Side of Chicago. With the premiere of the ninth season on September 9, 2018,' +
            ' Shameless became the longest-running original scripted series in Showtime\'s history. In January 2019, the series was renewed for a tenth season,' +
            ' which premiered on November 10, 2019. In January 2020, the series was renewed for its eleventh and final season, which was scheduled to premiere in mid-2020,' +
            ' but was delayed due to the COVID-19 pandemic; it instead premiered on December 6, 2020.' +
            ' On December 14, 2020, Showtime announced that they are airing a clip show series during Season 11, Shameless: Hall of Shame, containing new scenes juxtaposed with clips ' +
            'from the show to summarize the characters\' journeys during the prior 10 seasons.',
        image: 'https://cdn.ananasposter.ru/image/cache/catalog/poster/film/90/3642-1000x830.jpg '
    },
    {
        title: 'Chilling Adventures of Sabrina',
        description: 'Chilling Adventures of Sabrina is an American supernatural horror streaming television ' +
            'series developed by Roberto Aguirre-Sacasa for Netflix, based on the Archie comic book series of the same name. ' +
            'The series is produced by Warner Bros. Television, in association with Berlanti Productions and Archie Comics. ' +
            'Aguirre-Sacasa and Greg Berlanti serve as executive producers, alongside Sarah Schechter, Jon Goldwater, and Lee Toland Krieger.',
        image: 'https://geekculture.co/wp-content/uploads/2018/09/chilling-adventures-of-sabrina-poster.jpg'
    },
    {
        title: 'The 100',
        description: 'The 100 (pronounced The Hundred) is an American post-apocalyptic science fiction drama television series that premiered on March 19, 2014, on The CW and ended on September 30, 2020. The series, developed by Jason Rothenberg, ' +
            'is loosely based on the novel series of the same name by Kass Morgan.Ninety-seven years after a devastating nuclear apocalypse wipes out almost all life on Earth, thousands of people now live in a space station orbiting Earth, which they call the Ark.' +
            ' Three generations have been born in space, but when life-support systems on the Ark begin to fail, one hundred juvenile detainees are sent to Earth in a last attempt to determine whether it is habitable, or at least save resources for the remaining residents of the Ark.',
        image: 'https://static.wikia.nocookie.net/thehundred/images/0/0d/The-100-poster.png/revision/latest?cb=20140410034446'
    }

];

const App = () => {
    return (
        <div>
            {films.map(oneFilm => {
                return <Films oneFilm={oneFilm}/>
            })}
        </div>
    )
}

export default App;
