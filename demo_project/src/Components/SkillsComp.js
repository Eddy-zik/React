import React from 'react'
import html from "./html-5-svgrepo-com.svg"
import css from "./css-3-svgrepo-com.svg"
import javascript from "./javascript-svgrepo-com.svg"
import git from "./git-svgrepo-com.svg"
import react from "./react-svgrepo-com.svg"


export default function SkillsComp() {
  return (
    <div className='SkillsComp'>
        {/* paragraph of skills */}
      <caption> My Skills
        <p>grthyjutkjhrygbvfbgehyrjuthyrgteth</p>
      </caption>
      {/*  svg of Lang */}
      <section> 
        <div> <img src={html} width={100} height={200}/>
        <p>HTML</p>
        <p>90%</p>
        <input typeof='password' type='password' />
        </div>
        
        <div> <img src={css} width={100} height={200}/>
        <p>CSS</p>
        <p>85%</p>
        <input typeof='password' type='password' />
        </div>
        <div> <img src={javascript} width={100} height={200}/>
        <p>Javascript</p>
        <p>70%</p>
        <input typeof='password' type='password' />
        </div>
        <div> <img src={git} width={100} height={200}/>
        <p>Git/Git Hub</p>
        <p>80%</p>
        <input typeof='password' type='password' />
        </div>
        <div> <img src={react} width={100} height={200}/>
        <p>React JS</p>
        <p>75%</p>
        <input typeof='password' type='password' />
        </div>
      </section>
    </div>
  )
}
