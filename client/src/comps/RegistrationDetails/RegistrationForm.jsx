import { useEffect, useState } from "react";
import "./RegistrationForm.css";

import { initialFormData } from "./RegistrationData";
import ProfilePhoto from "../ProfilePhoto";

function Registration() {
  const [formData, setFormData] = useState({});

  console.log(formData);

  useEffect(() => {
    setFormData(initialFormData);
  }, []);

  return (
    <div>
      <h1>Registration Page</h1>
      <form className="registrationForm">
        {/* Personal Information */}
        <fieldset>
          <legend>Personal Information</legend>

          {/* Pupil Names */}
          <article>
            <div className="form-group">
              <article>
                <label>First Name:</label>
                <input type="text" placeholder="First Name" />
              </article>
              <article>
                <label>Last Name:</label>
                <input type="text" placeholder="Last Name" />
              </article>
            </div>{" "}
            <article>
              <label>Other Names:</label>
              <input type="text" placeholder="Other Names" />
            </article>
          </article>

          {/* Gender */}
          <div className="checkbox-group">
            <label htmlFor="sex">Sex</label>
            <input type="checkbox" name="sex" value="male" />
            <input type="checkbox" name="sex" value="female" />
          </div>
          <hr />

          {/* Sex and Date of Birth */}
          <article className="form-group">
            <div>
              <label htmlFor="sex">Date of Birth</label>
              <input type="date" />
            </div>
            {/* Place of Birth */}
            <div>
              <label htmlFor="sex">Place of Birth</label>
              <input type="text" placeholder="Freetown" />
            </div>
          </article>

          {/* Address */}
          <article>
            <label>Current Address</label>
            <input
              type="text"
              placeholder="81c Fort Street, Off Circular Road, Freetown"
            />
          </article>

          {/* Profile photo */}
          <ProfilePhoto />
        </fieldset>

        {/* School Information */}
        <fieldset>
          <legend>School Information</legend>
          <article>
            <label>Last School Attended: (If Applicable)</label>
            <input type="text" placeholder="Enter text" />
          </article>
          <article className="form-group">
            <label>Pupil to be admitted into: (Choose One)</label>
            <select>
              <option disabled>Choose One</option>
              <option value="daycare">Daycare</option>
              <option value="n1">Nursery 1</option>
              <option value="n2">Nursery 2</option>
              <option value="n3">Reception</option>
              <option value="p1">Prep 1</option>
              <option value="p2">Prep 2</option>
              <option value="p3">Prep 3</option>
              <option value="p4">Prep 4</option>
              <option value="p5">Prep 5</option>
              <option value="p6">Prep 6</option>
              <option value="j1">JSS 1</option>
              <option value="j2">JSS 2</option>
              <option value="j3">JSS 3</option>
            </select>
          </article>
        </fieldset>

        <fieldset>
          <legend>Health Issues</legend>
          <article>
            <div>
              <label>Most Common Ailment</label>
              <input type="text" placeholder="Example illness..." />
            </div>
            <div className="checkbox-group">
              <label>
                Will you allow your child to participate in any national
                immunization programme in School?
              </label>
              <div className="checkbox-group">
                <label htmlFor="yes">Yes</label>
                <input type="checkbox" value="yes" name="yes" />
                <label htmlFor="no">No</label>
                <input type="checkbox" value="no" name="no" />
              </div>
            </div>
          </article>
        </fieldset>

        {/* Parent / Guardian Information */}
        <fieldset>
          <legend>Parents&apos; / Guardian Information</legend>

          {/* Father's Information */}
          <article>
            <h3>Father&apos;s / Guardian&apos;s</h3>

            <div>
              <label>Name:</label>
              <input type="text" placeholder="Enter Full Name" />
            </div>
            <div>
              <label>Address:</label>
              <input type="text" placeholder="Enter Address" />
            </div>
            <div>
              <label>Place of Work:</label>
              <input type="text" placeholder="Enter workplace" />
            </div>
            <div className="form-group">
              <div>
                <label>Email Address:</label>
                <input type="email" placeholder="someone@example.com" />
              </div>
              <div>
                <label>Tel Nos</label>
                <input type="tel" />
              </div>
            </div>
          </article>

          {/* Mother's Information */}
          <article>
            <h3>Mother&apos;s / Guardian&apos;s</h3>

            <div>
              <label>Name:</label>
              <input type="text" placeholder="Enter Mother's Full Name" />
            </div>
            <div>
              <label>Address:</label>
              <input type="text" placeholder="Enter Full Adress" />
            </div>
            <div>
              <label>Place of Work:</label>
              <input type="text" placeholder="Enter workplace" />
            </div>
            <div className="form-group">
              <div>
                <label>Email Address:</label>
                <input type="email" placeholder="Enter email" />
              </div>
              <div>
                <label>Tel Nos</label>
                <input type="text" placeholder="076521548" />
              </div>
            </div>
          </article>

          {/* Emergency Contact Information */}
          <article>
            <h3>Emergency Contact (If different from above)</h3>

            <div>
              <label>Name:</label>
              <input type="text" />
            </div>
            <div>
              <label>Address:</label>
              <input type="text" />
            </div>
            <div>
              <label>Place of Work:</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <div>
                <label>Email Address:</label>
                <input type="email" />
              </div>
              <div>
                <label>Tel Nos</label>
                <input type="text" />
              </div>
            </div>
          </article>
        </fieldset>

        {/* Payment of School Fees and Charges */}
        <fieldset>
          <article>
            <legend>Payment of School Fees and Charges</legend>
            <h5>
              Person directly responsible for paying the child&apos;s school
              fees and charges
            </h5>

            <div>
              <label>Name:</label>
              <input type="text" />
            </div>
            <div>
              <label>Address:</label>
              <input type="text" />
            </div>

            {/*  */}
            <div>
              <label>Place of Work:</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <div>
                <label>Email Address:</label>
                <input type="email" />
              </div>
              <div>
                <label>Tel Nos</label>
                <input type="text" />
              </div>
            </div>
          </article>
        </fieldset>

        {/* Registration Info */}
        <fieldset>
          <legend>Complete Form Data</legend>
          <article>
            <div>
              <label>Registration done by</label>
              <input type="text" />
            </div>
            <div className="checkbox-group">
              <label>Signed</label>
              <input type="checkbox" />
            </div>
            <div>
              <label>School Authority</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <div>
                <label>Tel Nos</label>
                <input type="text" />
              </div>
              <div>
                <label>Registration Date</label>
                <input type="date" />
              </div>
            </div>
          </article>
        </fieldset>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Registration;
