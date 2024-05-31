module.exports = ({
    name,
    email,
    phone,
    linkedin,
    github,
    role,
    about_yourself,
    company,
    your_role,
    project1,
    desc1,
    project2,
    desc2,
    college,
    time,
    degree,
    skills
  })=> { return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
  background: rgb(204,204,204); 
}
page {
  background: white;
  display: block;
  margin: 0 auto;
  margin-bottom: 0.5cm;
  box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);
}
page[size="A4"] {  
  width: 21cm;
  height: 29.7cm; 
}


.container {
            width: 80%;
            margin: auto;
            overflow: hidden;
            padding: 10px;
            background: #fff;
        }
        header, section, footer {
            margin-bottom: 0px;
        }
        header {
            text-align: center;
            /* background: #333; */
            color: black;
            padding: 10px 0;
        }
        header h1 {
            margin: 0;
            font-size: 2em;
        }
        .contact-info {
            display: flex;
            flex-wrap: wrap;
            text-align: center;
            margin: 20px 0;
        }
        .contact-info p {
            margin: 5px 0;
            padding: 2px
        }
        section h2 {
            margin-bottom: 10px;
            color: #333;
        }
        .job, .education, .skill {
            margin-bottom: 10px;
        }
        .job h3, .education h3 {
            margin: 5px 0;
            color: #333;
        }
        .job span, .education span {
            font-style: italic;
            color: #666;
        }
        footer {
            text-align: center;
            color: #666;
            font-size: 0.8em;
        }
        @media print {
  page {
    background: white;
    margin: auto;
    box-shadow: 0;
  }
}
    </style>
</head>
<body>
    <!-- <div> -->
       
        <page size="A4">
            <div class="container">
                          <header>
                              <h1>${name}</h1>
                          </header>
                          <div class="contact-info">
                              <span>Email: ${email} ||</span>
                              <span>Phone: ${phone} ||</span>
                              <span>LinkedIn: ${linkedin} ||</span>
                              <span>GitHub: ${github} ||</span>
                          </div>
                          <section>
                              <h2>${role}</h2>
                              <p style="margin-top: 0px;">${about_yourself}</p>
                          </section>
                          <section>
                              <h2>Work Experience</h2>
                              <div class="job">
                                  <h3>${company}</h3>
                                  <p>${your_role}</p>
                                  
                              </div>
                              
                          </section>
                          <section>
                              <h2>Projects</h2>
                              <h3 style="margin-bottom: 0px;">${project1}</h3>
                              <p style="margin-top: 0px;">${desc1}</p>
                              <h3 style="margin-bottom: 0px;">${project2}</h3>
                              <p style="margin-top: 0px;">${desc2}</p>
                          </section>
                          <section>
                              <h2>Education</h2>
                              <div class="education">
                                  <h3>${college}</h3>
                                  <p>${time}</p>
                                  <p>${degree}</p>
                              </div>
                          </section>
                          <section>
                              <h2>Skills</h2>
                              <p>
                                  ${skills}
                              </p>
                          </section>
                          
                      </div>
                  </div>
          </page>
</body>
</html>`
  }

