// Made with PenguinBuilder v4.2.0
// use PenguinBuilder at "https://penguinbuilder.github.io"
(async function(Scratch) {
    const blocks = [];
    const menus = {};

    class Extension {
        getInfo() {
            return {
                "id": "solodevuelve1pb",
                "name": "solo devuelve 1",
                "color1": "#0088ff",
                "blocks": blocks,
                "menus": menus,
            }
        }
    }

    blocks.push({
        opcode: "solodevuelve1pb_Block_solodevuelve1ID",
        blockType: Scratch.BlockType.REPORTER,
        text: "solo devuelve 1",
        arguments: {

        },
        disableMonitor: false
    });
    Extension.prototype["solodevuelve1pb_Block_solodevuelve1ID"] = async function(args, util) {
        return 1;
    };

    Scratch.extensions.register(new Extension());
})(Scratch);