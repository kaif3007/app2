import React, {useState} from "react";

export default function About() {
    const [mystyle, setmystyle] = useState(
        {
            color:'black',
            backgroundColor:'white'
        }
    )
  return (
    <div className="container my-5" style={mystyle}>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne mt-3">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>A text utility app made for counting the words and characters.
                You can also convert your text into uppercase from lowercase and lowercase from uppercase.
                This app can be use for removing extra spaces and clear your all text in one click.
                <br/>Free for all.</strong> 

            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}
