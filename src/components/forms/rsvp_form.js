import React from 'react';

export const RsvpForm = ({
    handleSubmit,
    bindFirstName,
    bindLastName,
    bindEmail,
    bindIsComing,
    bindFoodAllergies,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="field">
                <label className="label">First Name</label>
                <div className="control">
                    <input
                        className="input"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        {...bindFirstName}
                        required
                    />
                </div>
            </div>

            <div className="field">
                <label className="label">Last Name</label>
                <div className="control">
                    <input
                        className="input"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        {...bindLastName}
                        required
                    />
                </div>
            </div>

            <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                    <input
                        className="input"
                        type="email"
                        placeholder="Email input"
                        name="email"
                        {...bindEmail}
                        required
                    />
                </div>
            </div>

            <div className="control">
                <label className="label">Will you be attending?</label>
                <label className="radio">
                    <input
                        type="radio"
                        name="isComing"
                        {...bindIsComing}
                        value="yes"
                        checked
                    />
                    Joyfully accepts
                </label>
                <label className="radio">
                    <input
                        type="radio"
                        name="isComing"
                        {...bindIsComing}
                        value="no"
                    />
                    Regretfully declines
                </label>
            </div>

            <div className="field">
                <label className="label">Food Allergies</label>
                <div className="control">
                    <textarea
                        className="textarea"
                        placeholder="Textarea"
                        name="foodAllergies"
                        {...bindFoodAllergies}
                        required
                    />
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>
            </div>
        </form>
    );
};
