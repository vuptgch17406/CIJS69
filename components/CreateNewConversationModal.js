export default class CreateNewConversationModal {
  $modalContainer;

  _visible = false;

  constructor() {
    this.$modalContainer = document.createElement("div");
    this.$modalContainer.setAttribute(
      "class",
      "modal fixed w-64 hidden h-64 top-1/2 left-1/2 bg-red-400"
    );

    this.$modalContainer.textContent = "Modal container";
  }

  opentModal() {
    this._visible = !this._visible;
    if (this._visible) {
      this.$modalContainer.classList.remove("hidden");
      this.$modalContainer.classList.add("block");
    } else {
      this.$modalContainer.classList.remove("block");
      this.$modalContainer.classList.add("hidden");
    }
  }

  render(conversationListContainer) {
    conversationListContainer.appendChild(this.$modalContainer);
  }
}
