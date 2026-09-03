// Made with PenguinBuilder v4.2.0
// use PenguinBuilder at "https://penguinbuilder.github.io"
(async function(Scratch) {
    const blocks = [];
    const menus = {};

    class Extension {
        getInfo() {
            return {
                "id": "powerpenguinbuilder",
                "name": "PowerPenguinbuilder",
                "color1": "#9dff61",
                "blocks": blocks,
                "menus": menus,
            }
        }
    }

    blocks.push({
        opcode: "powerpenguinbuilder_Block_power",
        blockType: Scratch.BlockType.REPORTER,
        text: "power[x][y]",
        arguments: {
            "x": {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: ``
            },
            "y": {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: ``
            },

        },
        disableMonitor: false
    });
    Extension.prototype["powerpenguinbuilder_Block_power"] = async function(args, util) {
        if (!(args["y"] == 0) || !(args["x"] == 1)) {
            return Math.pow(args["x"], args["y"]);
        } else {
            return 1;
        }

    };

    Scratch.extensions.register(new Extension());
})(Scratch);