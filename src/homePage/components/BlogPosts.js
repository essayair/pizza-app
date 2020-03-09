import React from "react";

function BlogPosts() {
  return (
    <div className="content blogPost">
        <div className="blogPost-content">
        <h1>Latest News & Recipes</h1>

            <div className="blogPostContainer">
                
                <div>
                    <div className="imgBackground">
                    <img src="" alt="" />
                    </div>
                    <span>January 22, 2015 </span>
                    <h4>Perfect Pizza Using Baking Steel Broiler Method</h4>

                    <p>
                    Investigationes demonstraverunt lectores legere me lius quod ii
                    legunt saepius. Claritas est etiam processus dynamicus, qui
                    sequitur mutationem consuetudium lectorum.
                    </p>
                    <button className="blogButton">READ MORE</button>
                </div>

                <div>
                    <div className="imgBackground">
                    <img src="" alt="" />
                    </div>
                    <span>December 18, 2014 </span>
                    <h4>Green Onion and Burrata Cheese Pizza Recipe</h4>

                    <p>
                    Investigationes demonstraverunt lectores legere me lius quod ii
                    legunt saepius. Claritas est etiam processus dynamicus, qui
                    sequitur mutationem consuetudium lectorum.
                    </p>
                    <button className="blogButton">READ MORE</button>
                </div>


                <div>
                    <div className="imgBackground">
                    <img src="" alt="" />
                    </div>
                    <span>December 10, 2014 </span>
                    <h4>Brussels Sprouts, Pepper and Bacon Hot Pizza Recipes</h4>

                    <p>
                    Investigationes demonstraverunt lectores legere me lius quod ii
                    legunt saepius. Claritas est etiam processus dynamicus, qui
                    sequitur mutationem consuetudium lectorum.
                    </p>
                    <button className="blogButton">READ MORE</button>
                </div>

            </div>
        </div>
    </div>
  );
}

export default BlogPosts;
