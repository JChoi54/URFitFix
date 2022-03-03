import Head from "next/head";
import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";

export default function CheckIn() {
  function createUserElement(id, name) {
    const checkInList = document.getElementById("checkinlist");

    const name_el = document.createElement("div");
    name_el.classList.add("fullname");
    name_el.id = id;

    //actions div
    const name_actions_el = document.createElement("div");
    name_actions_el.classList.add("nameactions");

    //create edit button
    const name_edit_el = document.createElement("button");
    name_edit_el.classList.add("edit");
    name_edit_el.innerText = "Edit";

    //create delete button
    const name_delete_el = document.createElement("button");
    name_delete_el.classList.add("delete");
    name_delete_el.innerText = "Check Out";

    name_actions_el.appendChild(name_delete_el);
    name_actions_el.appendChild(name_edit_el);

    name_el.appendChild(name_actions_el);

    const name_input_el = document.createElement("input");
    name_input_el.classList.add("text");
    name_input_el.type = "text";
    name_input_el.value = name;
    name_input_el.setAttribute("readonly", "readonly");

    //name content div
    const name_content_el = document.createElement("div");
    name_content_el.classList.add("namecontent");

    name_el.appendChild(name_content_el);

    name_content_el.appendChild(name_input_el);
    checkInList.appendChild(name_el);

    //edit button function
    name_edit_el.addEventListener("click", (e) => {
      if (name_edit_el.innerText.toLowerCase() == "edit") {
        name_edit_el.innerText = "Save";
        name_input_el.removeAttribute("readonly");
        name_input_el.focus();
      } else {
        fetch("/api/update", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: name_el.id,
            name: name_input_el.value,
          }),
        })
          .then(async (r) => {
            name_edit_el.innerText = "Edit";
            name_input_el.setAttribute("readonly", "readonly");
          })
          .catch((e) => {
            console.error(e);
          });
      }
    });

    //delete button function
    name_delete_el.addEventListener("click", (e) => {
      fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: name_el.id,
        }),
      })
        .then(async (r) => {
          checkInList.removeChild(name_el);
        })
        .catch((e) => {
          console.error(e);
        });
    });

    console.log(name_el);
  }

  useEffect(() => {
    // Retrieve current users from backend
    fetch("/api/checkin")
      .then(async (res) => {
        let gym_users = await res.json();
        let users = gym_users?.users;

        if (users != null) {
          for (let i = 0; i < users.length; i++) {
            createUserElement(users[i].id, users[i].name);
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });

    const checkInButton = document.getElementById("checkinbutton");
    const fname = document.getElementById("firstName");
    const lname = document.getElementById("lastName");

    checkInButton.addEventListener("click", () => {
      if (fname.value && lname.value) {
        fetch("/api/checkin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: fname.value + " " + lname.value,
          }),
        })
          .then(async (r) => {
            let user = await r.json();
            createUserElement(user.id, user.name);

            //clear input fields
            fname.value = "";
            lname.value = "";
          })
          .catch((e) => {
            console.error(e);
          });
      }
    });
  }, []);

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Check-In</title>
        <link rel="icon" type="image/x-icon" href="./public/images/logo.png" />
      </Head>

      <main className="checkin">
        <NavBar />
        <section className="container-fluid checkin-body">
          <div className="row checkin-content">
            <div className="col-6">
              <h1>Current Occupants:</h1>
              <div className="checkin-list" id="checkinlist"></div>
            </div>
            <div className="col-6">
              <div className="checkin-form">
                {/* <label htmlFor="firstName" className="form-label">
                  First Name
                </label> */}
                <input
                  type="†ext"
                  className="form-control"
                  id="firstName"
                  placeholder="First Name"
                />
              </div>
              <div className="mb-3">
                {/* <label htmlFor="lastName" className="form-label">
                  Last Name
                </label> */}
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Last Name"
                />
              </div>
              <button
                id="checkinbutton"
                className="btn btn-primary checkin-button"
              >
                Check-In
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
