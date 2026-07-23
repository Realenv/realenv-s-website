import HumanLanguagesBadges from "@/app/components/humanlanguagesbadges";
import Link from "next/link";

export default function Empty (){
    return (
    <>
        <div className="flex flex-col">
            <HumanLanguagesBadges includeBtns={false}/>
        </div>
        <div className="articleSection">
            <div className="hero-style" id="french">
                <h3>French</h3>
                <div>
                    <h4>Current level</h4>
                    <p>level C1 indeed it is my native language, I speak it at home without any difficulty, good grammar, good syntax, and I can express myself on a lot of themes</p>
                </div>
                <div>
                    <h4>Wanted level</h4>
                    <p>No much more than this level, it is more than sufficient.</p>
                </div>
            </div>
            <div className="hero-style" id="english">
                <h3>English</h3>
                <div>
                    <h4>Current level</h4>
                    <p>B1 because I read articles about coding and watch videos a lot of times, but I d'ont speak it</p>
                </div>
                <div>
                    <h4>Wanted level</h4>
                    <p>B1/C1 because it is needed for work and internationalization</p>
                </div>
            </div>
            <div className="hero-style" id="arabic">
                <h3>Arabic</h3>
                <div>
                    <h4>Current level</h4>
                    <p>B2 because it is my country's language, so I learn it at school, and I speak it a bit, I write some texts, and I read just also a bit, this is the problematic situation I have, just all a bit, not an expert</p>
                </div>
                <div>
                    <h4>Wanted level</h4>
                    <p>C1 for ideological reasons & professional reasons</p>
                </div>
            </div>
            <div className="hero-style" id="russian">
                <h3>Russian</h3>
                <div>
                    <h4>Current level</h4>
                    <p>A1/pre-A1, Just begining in russian since a year of that, I learned the Alphabet some words, but I do not speak it with anyone this time, I am learning the TRKI 1</p>
                </div>
                <div>
                    <h4>Wanted level</h4>
                    <p>C1 because I would like to go to the MSU Moscow University, so it is very important to me to learn this language and reach a good level of communication & writing</p>
                </div>
            </div>
            <div className="hero-style" id="chinese">
                <h3>Chinese</h3>
                <div>
                    <h4>Current level</h4>
                    <p>pre-A1, I am learning the HSK3.0 initial band 1 vocabulary list, because it is the largest recognized one to get a strong base in chinese</p>
                </div>
                <div>
                    <h4>Wanted level</h4>
                    <p>B1/B2 just for speaking & writing some basics clear-syntax texts to chinese business mens & suppliers</p>
                </div>
            </div>
        </div>
    </>
    );
}