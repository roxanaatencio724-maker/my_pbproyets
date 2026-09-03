// Made with PenguinBuilder v4.2.0
// use PenguinBuilder at "https://penguinbuilder.github.io"
(async function(Scratch) {
    const blocks = [];
    const menus = {};

    class Extension {
        getInfo() {
            return {
                "id": "staticconfirmpb",
                "name": "StaticConfirm",
                "color1": "#a7d67a",
                "blocks": blocks,
                "menus": menus,
            }
        }
    }

    blocks.push({
        opcode: "staticconfirmpb_Block_StaticConfirm",
        blockType: Scratch.BlockType.COMMAND,
        text: "StaticConfirm",
        arguments: {

        },
        disableMonitor: false
    });
    Extension.prototype["staticconfirmpb_Block_StaticConfirm"] = async function(args, util) {
        if (confirm('accept?')) {
            console.log('You accept');
        } else {
            console.log('You not accept');
        }

    };

    Scratch.extensions.register(new Extension());
})(Scratch);