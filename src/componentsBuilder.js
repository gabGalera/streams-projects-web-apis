import blessed from "blessed";

export default class ComponentsBuilder {
  screen;
  layout;
  form;
  setScreen({ title }) {
    this.screen = blessed.screen({
      smartCSR: true,
      title,
    });

    this.screen.key(["escape", "q", "C-c"], () => process.exit(0));
    return this;
  }
  setLayoutComponent() {
    this.layout = blessed.layout({
      parent: this.screen,
      width: "100%",
      height: "100%",
    });

    return this;
  }
  setFormComponent({ onStart, onEnd }) {
    const form = blessed.form({
      parent: this.screen,
      keys: true,
      bottom: 0,
      height: "20%",
    });
    const start = blessed.button({
      parent: form,
      mouse: true,
      keys: true,
      shrink: true,
      padding: {
        left: 1,
        right: 1,
      },
      left: "40%",
      name: "submit",
      content: "submit",
      style: {
        bg: "white",
        focus: {
          bg: "green",
        },
      },
    });
  }
  build() {
    return {
      screen: this.screen,
    };
  }
}