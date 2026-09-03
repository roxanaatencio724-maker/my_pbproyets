// Made with PenguinBuilder v4.2.0
// use PenguinBuilder at "https://penguinbuilder.github.io"
(async function(Scratch) {
    const blocks = [];
    const menus = {};

    if (!Scratch.extensions.unsandboxed) {
        throw new Error('Console must run unsandboxed');
    }

    class Extension {
        getInfo() {
            return {
                "id": "consolepb",
                "name": "Console",
                "color1": "#0088ff",
                "blocks": blocks,
                "menus": menus,
            }
        }
    }

    blocks.push({
        opcode: "consolepb_Block_console",
        blockType: Scratch.BlockType.COMMAND,
        text: "console.[a] text [b]",
        arguments: {
            "a": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ``
            },
            "b": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ``
            },

        },
        disableMonitor: false
    });
    Extension.prototype["consolepb_Block_console"] = async function(args, util) {
        const consolepb_a = args["a"];
        const consolepb_b = args["b"];
        switch (consolepb_a) {
            case ('log'): {
                console.log(consolepb_b);
                break;

            }
            case ('warn'): {
                console.warn(consolepb_b);
                break;

            }
            case ('error'): {
                console.error(consolepb_b);
                break;

            }
            case ('info'): {
                console.info(consolepb_b);
                break;
            }
            case ('clear'): {
                console.clear();
                break;
            }
            default: {
                alert('el comando no es correcto');

            }
        }
        return;
    };
    Scratch.extensions.register(new Extension());
})(Scratch);