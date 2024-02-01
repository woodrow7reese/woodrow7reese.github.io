const Proposal = () => (
    <div>
        <div className="mb-12 font-semibold">
            <h2>Woodrow Reese - Group 2</h2>
            <h2>CS615 - UI Design</h2>
        </div>

        <div className="flex-col">
            <h2 className="font-bold">
              Proposal:
            </h2>
        
            <div className="mx-12">
                <p>
                  Alice is new to rock climbing and wants to document her progress.
                  For each climb, she documents the following:
                </p>
                <ol className="ml-12 my-4 list-decimal">
                  <li>
                    The professional rated difficulty of the climb (V0-V10)
                  </li>

                  <li>
                    Her personal rating of the difficulty of the climb
                  </li>

                  <li>
                    Her strategy and thoughts about the climb
                  </li>

                  <li>
                    Whether she completed or failed the climb
                  </li>
                </ol>

                Alice also records her climbs on her phone and her session time
                <br/>
                Alice finds that her notes are confusing at times, and it is tedious to try
                to match her notes to her recordings, which are stored in her camera roll. 
                The redundance of searching through her notes and matching it with a video is
                discouraging her from documenting her progress.
                She wants a way to do all of these things on her phone, and in one place. 
                Each documentation should be ordered by session.  

            </div>
        </div>
    </div>
      
)

export default Proposal