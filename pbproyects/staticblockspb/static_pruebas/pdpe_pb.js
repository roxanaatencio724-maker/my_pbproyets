// Made with PenguinBuilder v4.2.0
// use PenguinBuilder at "https://penguinbuilder.github.io"
(async function(Scratch) {
    const blocks = [];
    const menus = {};

    class Extension {
        getInfo() {
            return {
                "id": "pdpepb",
                "name": "pruebadepilcroweval",
                "color1": "#6eab41",
                "blocks": blocks,
                "menus": menus,
            }
        }
    }

    blocks.push({
        opcode: "pdpepb_Block_pruebaID",
        blockType: Scratch.BlockType.REPORTER,
        text: "prueba",
        arguments: {

        },
        disableMonitor: false
    });
    Extension.prototype["pdpepb_Block_pruebaID"] = async function(args, util) {
        return eval('console.log("prueba exitosa")');
    };

    Scratch.extensions.register(new Extension());
})(Scratch);