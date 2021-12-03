import ConversationList from "./ConversationList.js";

export default class Main {
  $conversationList;

  constructor() {
    this.$conversationList = new ConversationList();
  }

  render(container) {
    const mainContainer = document.createElement("div");
    mainContainer.setAttribute(
      "class",
      "w-screen h-screen flex mx-auto bg-gray-400"
    );

    const content = document.createElement("div");
    content.textContent = "Content";

    this.$conversationList.render(mainContainer);
    mainContainer.appendChild(content);

    container.appendChild(mainContainer);
  }
}
