import { NodePlopAPI } from "plop";

export default function (plop: NodePlopAPI) {
  plop.setGenerator("controller", {
    description: "application controller logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "controller name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/pages/{{name}}.tsx",
        templateFile: "plop-templates/controller.hbs",
      },
    ],
  });
}
