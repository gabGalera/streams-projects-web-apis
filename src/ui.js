import ComponentsBuilder from "./componentsBuilder.js";

function renderUi() {
  const components = new ComponentsBuilder()
    .setScreen({
      title: "Mastering Node.js Streams",
    })
    .setLayoutComponent()
    .build();

  components.screen.render();
}

export { renderUi };