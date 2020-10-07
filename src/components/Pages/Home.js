import React from "react";


function Home() {
    return (
        <>
        <Header />
        <div className="container-sm">
        <div className="row">
            <div className="col">
                <h1>Robert "R.J." Gassner</h1>
                <img className="float-left" src="http://placekitten.com/150/150"
                    alt="Placeholder as I do not have any professional headshots" />

                <p>
                            A former K-12 music educator, musicologist, and retail worker, Robert Gassner brings a wide variety
                            of skills to web development. He holds a certificate in full stack web development from the
                            University of Arizona School of Continuing and Professional Education (October 2020), Two Bachelors
                            Degrees (Bachelor of Music: Instrumental Music Education, Bachelor of Science: Music History and
                            Literature) from the Lionel Hampton School of Music at the University of Idaho (May 2014), and a
                            Master of Music (Music History and Literature) from the University of Northern Colorado (May 2019).
                            His work experience has been varied, including teaching stints at both the k-12 and higher education
                            levels, as well as serving as the editorial assistant for a peer reviewed journal, and even three
                            years experience working in the grocery industry. Drawing on these experiences, "R.J.," as he is
                            known to virtually everyone, is a highly collaborative individual with excellent abilities in
                            written
                            and spoken communication, presentation, and time management. He also functions well as an
                            individual, and is not afraid to get down and dirty with research and/or analysis.
                </p>

                <p>In the coding world, R.J.'s focus is in web development, though he maintains interests in other areas
                        such as game development. As a musicologist, his research focused on the intersectons of music with
                        politics, diplomacy, and war. His masters thesis "A Topical and Narrative Analysis of Napoleonic Era
                        Battle Pieces" examined music composed during or shortly after the Napoleonic Wars, and analyzed not
                        only the common musical language used by different composers (called "topics" in the musicological
                        world), but also looked at the narrative each composer presented, comparing them to what actually
                        occured. He has also conducted original research on music in the French Revolution (Specifically
                        F.J. Gossec's 1790 Te Deum), and Jean Mouton's "Missa Ecce quam bonum" as it pertains to the heretic
                        fryer Girolamo Savonarola. As a Graduate Student, he served as the editorial assistant for the
                        Journal of Musicological Research. As an educator, he specializes in concert band and music history,
                        and has taught at the Yamhill-Carlton School
                        district in Oregon, and Laramie County Community College in Wyoming. His musical interest include
                        Basie, von Bingen, Borodin, Cicconia, Ellington, Glazunov, Glière, Gossec, Grainger, Janequin,
                        Kenton, Ticheli, Schütz, and Stravinksy, among others.
                </p>

            </div>
        </div>
        <div className="row" id="personal-info">
            <p>When not working, R.J. participates a variety of activities. He enjoys reading, especially about
                    history; He is fascinated by things such as geopolitics and diplomacy, and thus makes an effort to
                    keep up with current events and world news. He is a gamer, and enjoys not only playing, but
                    collecting video games on a variety of systems. He is a passionate fan of the pro sports teams of his
                    home town of Portland, OR, especially the Portland Timbers of Major League Soccer. His other, though
                    admittedly more causal, sporting interests include the Green Bay Packers, New York Mets, and Cardiff
                    City FC, among others.
                R.J. also enjoys outdoor activites, including camping, swimming, and simply exploring new places.</p>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <h1 id="resumeHead">Resume</h1>
            <iframe src="../../public/Assets/CV.pdf" width="100%" height = "500px"></iframe>
        </div>
    </div>
    <Footer />
    </>
        
    );
};


export default Home;