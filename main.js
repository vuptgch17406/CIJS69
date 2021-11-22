class Register {
  $labelEl;
  $inputEl;
  $div;

  constructor(type, placeholder, textLabel, textBtn) {
    this.$div = document.createElement("div");
    this.$div.className = "mx-96 my-7"
    
    this.$labelEl = document.createElement("label");
    this.$labelEl.innerText = textLabel;
    this.$labelEl.className = "text-red-500"

    this.$inputEl = document.createElement("input");
    this.$inputEl.type = type;
    this.$inputEl.placeholder = placeholder;
    this.$inputEl.value = textBtn;
    this.$inputEl.className = "border border-solid  w-full rounded-sm cursor-pointer"

    
  }

  render() {
    this.$div.appendChild(this.$labelEl);
    this.$div.appendChild(this.$inputEl);

    return this.$div;
  }
}
let nameInput = new Register("name", "Enter your name", "Full Name: ","");
document.getElementById("root").appendChild(nameInput.render());

let emailInput = new Register("email", "Email your email","Email: ","");
document.getElementById("root").appendChild(emailInput.render());

let passwordInput = new Register("password", "Enter your password","Password: ","");
document.getElementById("root").appendChild(passwordInput.render());

let cfPasswordInput = new Register("password", "Confirm your password","Confirm Password","");
document.getElementById("root").appendChild(cfPasswordInput.render());

let btnInput = new Register("button", "", "", "Submit");
document.getElementById("root").appendChild(btnInput.render());