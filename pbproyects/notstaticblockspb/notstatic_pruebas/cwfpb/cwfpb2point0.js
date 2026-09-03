// Made with PenguinBuilder v4.2.0
// use PenguinBuilder at "https://penguinbuilder.github.io"
(async function(Scratch) {
    const blocks = [];
    const menus = {};

    class Extension {
        getInfo() {
            return {
                "id": "cwfpb2point0",
                "name": "cwf2",
                "color1": "#0088ff",
                "blocks": blocks,
                "menus": menus,
            }
        }
    }

    var cwfpb2point0_a, cwfpb2point0_b, cwfpb2point0_x, cwfpb2point0_y;

    // Describe this function...
    async function cwfpb2point0_console_a_b_(cwfpb2point0_a, cwfpb2point0_b) {
        switch (cwfpb2point0_a) {
            case ('log'): {
                console.log(cwfpb2point0_b);
                break;

            }
            case ('warn'): {
                console.warn(cwfpb2point0_b);
                break;

            }
            case ('error'): {
                console.error(cwfpb2point0_b);
                break;

            }
            case ('info'): {
                console.info(cwfpb2point0_b);
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
    }

    blocks.push({
        opcode: "cwfpb2point0_Block_cwf2.0consoleID",
        blockType: Scratch.BlockType.COMMAND,
        text: "console",
        arguments: {

        },
        disableMonitor: false
    });
    Extension.prototype["cwfpb2point0_Block_cwf2.0consoleID"] = async function(args, util) {
        cwfpb2point0_x = prompt('cual es el metodo de consola que vas a utilizar (los metodos disponibles son log, warn, error, info y clear)');
        cwfpb2point0_y = prompt('cual es el mensaje que vas a poner');
        cwfpb2point0_console_a_b_(cwfpb2point0_x, cwfpb2point0_y);

    };

    Scratch.extensions.register(new Extension());
})(Scratch);