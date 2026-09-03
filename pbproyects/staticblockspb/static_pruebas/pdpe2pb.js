// Made with PenguinBuilder v4.2.0
// use PenguinBuilder at "https://penguinbuilder.github.io"
(async function(Scratch) {
    const blocks = [];
    const menus = {};

    class Extension {
        getInfo() {
            return {
                "id": "pdpe2pb",
                "name": "pruebadepilcroweval2",
                "color1": "#6eab41",
                "blocks": blocks,
                "menus": menus,
            }
        }
    }

    blocks.push({
        opcode: "pdpe2pb_Block_pruebaID",
        blockType: Scratch.BlockType.REPORTER,
        text: "prueba",
        arguments: {

        },
        disableMonitor: false
    });
    Extension.prototype["pdpe2pb_Block_pruebaID"] = async function(args, util) {
        return 'exitoso!';
    };

    Scratch.extensions.register(new Extension());
})(Scratch);