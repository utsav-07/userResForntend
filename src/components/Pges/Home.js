import React, { useState } from 'react'

/**
* @author
* @function Home
**/

function Home(props) {



  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [branch, setBranch] = useState(null);


  const onNameChnage = (event) => {
    setName(event.target.value)
  }

  const onEmailChnage = (event) => {
    setEmail(event.target.value)
  }

  const onBranchChnage = (event) => {
    setBranch(event.target.value)
  }

  const submitForm = () => (




    console.log(name),
    console.log(email, branch),

    fetch('http://localhost:3001/submitForm', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        email: email,
        branch: branch
      })
    }).then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        if (responseData != 'unable to submit') {
          alert('form submitted')
        }
        else {
          alert(responseData)
        }
      })
      .catch(error => console.warn(error))




  )



  return (
    <>


      <article className={props.dark ? "mw6 center  br3 pa3 pa4-ns mv3 ba b--black-10 dark-Mode" : "mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10"} >
        <main className="pa4 black-80">
          <div className="measure ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">YOUR DETAILS</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">NAME</label>
                <input
                  className="pa2 input-reset ba bg-transparent  hover-black w-100" type="text" name="name" id="name"
                  onChange={onNameChnage}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent  hover-black w-100" type="email" name="email-address" id="email-address"
                  onChange={onEmailChnage}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="branch">branch</label>
                <input className=" pa2 input-reset ba bg-transparent  hover-black w-100" type="text" name="branch" id="branch"
                  onChange={onBranchChnage}
                />
              </div>

            </fieldset>
            <div className="">
              <input
                onClick={submitForm}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="submitt"

              />
            </div>

          </div>
        </main>

      </article>
      hi
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      utsav
    </>
  )

}

export default Home