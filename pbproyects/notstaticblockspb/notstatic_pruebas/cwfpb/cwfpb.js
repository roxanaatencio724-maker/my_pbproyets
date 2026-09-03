// Made with PenguinBuilder v4.2.0
// use PenguinBuilder at "https://penguinbuilder.github.io"
(async function(Scratch) {
    const blocks = [];
    const menus = {};

    class Extension {
        getInfo() {
            return {
                "id": "cwfpb",
                "name": "cwf1",
                "color1": "#0088ff",
                "blocks": blocks,
                "menus": menus,
            }
        }
    }

    var cwfpb_a, cwfpb_b;

    // Describe this function...
    async function cwfpb_console_a_b_(cwfpb_a, cwfpb_b) {
        switch (cwfpb_a) {
            case ('log'): {
                console.log(cwfpb_b);
                break;

            }
            case ('warn'): {
                console.warn(cwfpb_b);
                break;

            }
            case ('error'): {
                console.error(cwfpb_b);
                break;

            }
            case ('info'): {
                console.info(cwfpb_b);
                break;

            }
            case ('clear'): {
                eval('console.clear()');
                break;

            }
            default: {
                alert('el comando no es correcto');
                break;

            }
        }
    }

    blocks.push({
        opcode: "cwfpb_Block_consoleID",
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
    Extension.prototype["cwfpb_Block_consoleID"] = async function(args, util) {
        cwfpb_console_a_b_(args["a"], args["b"]);

    };

    Scratch.extensions.register(new Extension());
})(Scratch);