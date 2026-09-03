// Made with PenguinBuilder v4.2.0
// use PenguinBuilder at "https://penguinbuilder.github.io"
(async function(Scratch) {
    const blocks = [];
    const menus = {};

    class Extension {
        getInfo() {
            return {
                "id": "iteradorpb",
                "name": "Iterador",
                "color1": "#0088ff",
                "blocks": blocks,
                "menus": menus,
            }
        }
    }

    var iteradorpb_i, iteradorpb_a;

    blocks.push({
        opcode: "iteradorpb_Block_Iterador",
        blockType: Scratch.BlockType.COMMAND,
        text: "Iterar [a] veces",
        arguments: {
            "a": {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: ``
            },

        },
        disableMonitor: false
    });
    Extension.prototype["iteradorpb_Block_Iterador"] = async function(args, util) {
        iteradorpb_i = 1;
        iteradorpb_a = args["a"];
        while (iteradorpb_i <= iteradorpb_a) {
            console.log(iteradorpb_i);
            iteradorpb_i = (typeof iteradorpb_i === 'number' ? iteradorpb_i : 0) + 1;
        }

    };

    Scratch.extensions.register(new Extension());
})(Scratch);