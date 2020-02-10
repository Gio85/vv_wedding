import React from 'react'

export const RsvpForm = ({ handleSubmit, bindFirstName, bindLastName, bindEmail, bindIsComing, bindFoodAllergies, bindNumberOfGuests }) => {
  return (
    <div className="rsvpForm is-half">
      <h3 className="h3Form">Please kindly respond by the 1st of May</h3>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">First Name</label>
          <div className="control is-medium">
            <input className="input" type="text" placeholder="First Name" name="firstName" {...bindFirstName} required />
          </div>
        </div>

        <div className="field">
          <label className="label">Last Name</label>
          <div className="control is-medium">
            <input className="input" type="text" placeholder="Last Name" name="lastName" {...bindLastName} required />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="email" placeholder="Email input" name="email" {...bindEmail} required />
          </div>
        </div>

        <div className="control">
          <label className="label">Will you be attending?</label>
          <label className="radio">
            <input type="radio" name="isComing" {...bindIsComing} value="yes" checked /> Bags are packed!
          </label>
          <label className="radio">
            <input type="radio" name="isComing" {...bindIsComing} value="no" /> Will be thinking of you at home
          </label>
        </div>

        <div className="field">
          <div className="control">
            <label className="label">Number of guests attending</label>
            <div className="select is-info is-rounded">
              <select name="numberOfGuests" {...bindNumberOfGuests}>
                <option disabled>Please choose accordingly</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Food Allergies</label>
          <div className="control is-medium">
            <textarea className="textarea" placeholder="Textarea" name="foodAllergies" {...bindFoodAllergies} required />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}
