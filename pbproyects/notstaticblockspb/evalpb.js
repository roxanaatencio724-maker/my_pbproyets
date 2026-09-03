// Made with PenguinBuilder v4.2.0
// use PenguinBuilder at "https://penguinbuilder.github.io"
(async function(Scratch) {
    const blocks = [];
    const menus = {};

    class Extension {
        getInfo() {
            return {
                "id": "evalpb",
                "name": "eval",
                "color1": "#66e6fc",
                "blocks": blocks,
                "menus": menus,
            }
        }
    }

    var evalpb_string;

    blocks.push({
        opcode: "evalpb_Block_evalreporterID",
        blockType: Scratch.BlockType.REPORTER,
        text: "eval[a]",
        arguments: {
            "a": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ``
            },

        },
        disableMonitor: false
    });
    Extension.prototype["evalpb_Block_evalreporterID"] = async function(args, util) {
        evalpb_string = args["a"];
        return eval(evalpb_string);
    };

    Scratch.extensions.register(new Extension());
})(Scratch);