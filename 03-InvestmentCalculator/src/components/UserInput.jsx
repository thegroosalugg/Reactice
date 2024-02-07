function InputField({ label, value, input }) {
  return (
    <p>
      <label>{label}</label>
      <input
        type="number"
        required
        value={value}
        onChange={(event) => input(event.target.value)} // this data is always collected as a string
      />
    </p>
  );
}

export default function UserInput({userInput, handleChange}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <InputField
          label={"initialInvestment"}
          value={userInput.initialInvestment}
          input={(newValue) => handleChange("initialInvestment", newValue)}
        />
        <InputField
          label={"annualInvestment"}
          value={userInput.annualInvestment}
          input={(newValue) => handleChange("annualInvestment", newValue)}
        />
      </div>
      <div className="input-group">
        <InputField
          label={"expectedReturn"}
          value={userInput.expectedReturn}
          input={(newValue) => handleChange("expectedReturn", newValue)}
        />
        <InputField
          label={"duration"}
          value={userInput.duration}
          input={(newValue) => handleChange("duration", newValue)}
        />
      </div>
    </section>
  );
}
