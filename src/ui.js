import ComponentsBuilder from "./componentsBuilder.js";

function renderUi() {
  const components = new ComponentsBuilder()
    .setScreen({
      title: "Mastering Node.js Streams",
    })
    .setLayoutComponent()
    .setFormComponent({
      onStart: () => console.log("started!"),
      onCancel: () => console.log("stopped!"),
    })
    .setDataTableComponent()
    .build();

  components.screen.render();
}

export { renderUi };
