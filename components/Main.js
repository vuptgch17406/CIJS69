import ConversationList from "./ConversationList.js";
import Title from "./Title.js";
import MessageList from "./MessageList.js";
import MessageInput from "./MessageInput.js";
export default class Main {
  $conversationList;
  $title;
  $messageList;
  $messageInput;
  constructor() {
    this.$conversationList = new ConversationList((conversation) => {
      this.setActiveConversation(conversation);
    });
    this.$title = new Title("No data", 0);
    this.$messageList = new MessageList();
    this.$messageInput = new MessageInput();
  }

  setActiveConversation = (conversation) => {
    this.$title.setActiveConversation(conversation);
    this.$messageList.setActiveConversation(conversation);
    this.$messageList.setActiveConversation(conversation);
  };

  render(container) {
    const mainContainer = document.createElement("div");
    mainContainer.setAttribute("class", "w-screen h-screen flex bg-gray-400");

    const content = document.createElement("div");
    content.setAttribute("class", "flex flex-col w-full h-full px-24 bg-white");
    // content.textContent = "Content";
    this.$title.render(content);
    this.$messageList.render(content);
    this.$messageInput.render(content);

    this.$conversationList.render(mainContainer);
    mainContainer.appendChild(content);

    container.appendChild(mainContainer);
  }
}
