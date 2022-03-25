module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "application component logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.tsx",
        templateFile: "templates/index.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/stories.tsx",
        templateFile: "templates/stories.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/styles.module.scss",
        templateFile: "templates/styles.module.scss.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/test.tsx",
        templateFile: "templates/test.tsx.hbs",
      },
    ],
  });
}
