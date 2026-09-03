// Made with PenguinBuilder v4.2.0
// use PenguinBuilder at "https://penguinbuilder.github.io"
(async function(Scratch) {
    const blocks = [];
    const menus = {};

    class Extension {
        getInfo() {
            return {
                "id": "statichelloworldpb",
                "name": "StaticHelloworld",
                "color1": "#0088ff",
                "blocks": blocks,
                "menus": menus,
            }
        }
    }

    blocks.push({
        opcode: "statichelloworldpb_Block_StaticHW_ID",
        blockType: Scratch.BlockType.COMMAND,
        text: "StaticHelloworld",
        arguments: {

        },
        disableMonitor: false
    });
    Extension.prototype["statichelloworldpb_Block_StaticHW_ID"] = async function(args, util) {
        alert('Hello, World!');

    };

    Scratch.extensions.register(new Extension());
})(Scratch);