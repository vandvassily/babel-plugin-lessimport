const babel = require("@babel/core");
const types = require("@babel/types");

const visitor = {
  ImportDeclaration(path, options) {
    // 引入的组件名
    const { specifiers, source } = path.node;
    const name = source.value;

    // 目标组件库名称
    const { libraryName } = options.opts;

    if (
      name === libraryName &&
      !types.isImportDefaultSpecifier(specifiers[0]) &&
      !types.isImportNamespaceSpecifier(specifiers[0])
    ) {
      const declarations = specifiers.map((spec) => {
        //创建importImportDeclaration节点
        return types.ImportDeclaration(
          [types.importDefaultSpecifier(spec.local)],
          types.StringLiteral(`${source.value}/${spec.local.name}`)
        );
      });
      path.replaceWithMultiple(declarations);
    }
  },
};

module.exports = function () {
  return { visitor };
};
