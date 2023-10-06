import ComponentsBuilder from "./componentsBuilder.js";
let components;

function addMessageOnTop(msg) {
  const table = components.table;
  const { content } = table.items.shift();
  const items = table.items.map((item) => item.content);
  table.clearItems();

  table.addItem(content);

  table.addItem(msg);

  items.forEach((item) => {
    table.addItem(item);
  });

  components.screen.render();
}

function log(msg) {
  addMessageOnTop(msg);
}

function renderUi() {
  components = new ComponentsBuilder()
    .setScreen({
      title: "Mastering Node.js Streams",
    })
    .setLayoutComponent()
    .setFormComponent({
      onStart: () => {
        addMessageOnTop("Hey!!" + Date.now());
      },
      onCancel: () => {},
    })
    .setDataTableComponent()
    .build();

  components.screen.render();
}

export { renderUi, log };
