// Made with PenguinBuilder v4.2.0
// use PenguinBuilder at "https://penguinbuilder.github.io"
(async function(Scratch) {
    const blocks = [];
    const menus = {};

    class Extension {
        getInfo() {
            return {
                "id": "convertidordetipospb",
                "name": "ConvertidorDeTipos",
                "color1": "#5461d3",
                "blocks": blocks,
                "menus": menus,
            }
        }
    }

    var convertidordetipospb_a0, convertidordetipospb_b0, convertidordetipospb_c0;

    blocks.push({
        opcode: "convertidordetipospb_Block_ConvertidorDeNumber",
        blockType: Scratch.BlockType.REPORTER,
        text: "ConvertidorNumber[b]",
        arguments: {
            "b": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ``
            },

        },
        disableMonitor: false
    });
    Extension.prototype["convertidordetipospb_Block_ConvertidorDeNumber"] = async function(args, util) {
        convertidordetipospb_b0 = args["b"];
        return eval((['Number(', JSON.stringify(convertidordetipospb_b0), ')'].join('')));
    };

    blocks.push({
        opcode: "convertidordetipospb_Block_ConvertidorDeString",
        blockType: Scratch.BlockType.REPORTER,
        text: "ConvertidorString[a]",
        arguments: {
            "a": {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ``
            },

        },
        disableMonitor: false
    });
    Extension.prototype["convertidordetipospb_Block_ConvertidorDeString"] = async function(args, util) {
        convertidordetipospb_a0 = args["a"];
        return String(convertidordetipospb_a0);
    };

    blocks.push({
        opcode: "convertidordetipospb_Block_ConvertidorDeBoolean",
        blockType: Scratch.BlockType.BOOLEAN,
        text: "ConvertidorBoolean[c]",
        arguments: {
            "c": {
                type: Scratch.ArgumentType.REPORTER,
                defaultValue: ``
            },

        },
        disableMonitor: false
    });
    Extension.prototype["convertidordetipospb_Block_ConvertidorDeBoolean"] = async function(args, util) {
        convertidordetipospb_c0 = args["c"];
        return String(convertidordetipospb_c0).toLowerCase() === "true"
    };

    Scratch.extensions.register(new Extension());
})(Scratch);