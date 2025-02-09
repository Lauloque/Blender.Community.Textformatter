// ==UserScript==
// @name        Blender.Community.Textformatter
// @namespace   https://github.com/L0Lock/Blender.Community.Textformatter
// @version     1.0.2
// @description A userscript to quickly format text in Blender.Community posts and comments
// @author      L0Lock
// @match       https://blender.community/*
// @grant       GM_setValue
// @grant       GM_getValue
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @updateURL   https://raw.githubusercontent.com/L0Lock/Blender.Community.Textformatter/main/blender_community_textformatter.user.js
// @downloadURL https://raw.githubusercontent.com/L0Lock/Blender.Community.Textformatter/main/blender_community_textformatter.user.js
// ==/UserScript==

// Credits of the original stackexchange script to CoDEmanX and iKlsR
// See https://blender.meta.stackexchange.com/q/388/599 for discussion
// Blender.Community adaptation made by Lauloque


// Calls to GM functions must be outside of injected code, so put them here
function toggle_extra_markdown() {
    console.log("checkbox click, was", GM_getValue("extra_markdown", 1));

    if (GM_getValue("extra_markdown", 1) == 1) {
        GM_setValue("extra_markdown", 0);
    } else {
        GM_setValue("extra_markdown", 1);
    }
}

function get_prefs() {
    return GM_getValue("extra_markdown", 1);
}

// Main script
function main() {
    var pref_extra_markdown = 0;
    console.log("Initializing Blender Community Text Formatter.");

    function startInjection() {
        // Define keyboard shortcut event handler (Ctrl+Y)
        $(document).on('keydown', "textarea", function (e) {
            if (e.ctrlKey && (e.which === 89)) {
                // Ctrl+Y for redo
                e.stopImmediatePropagation();
                insertTextTag(this);
            }
        });
    }

    function insertTextTag(txta) {
        if (txta.selectionStart == null) return;

        var start = txta.selectionStart;
        var end = txta.selectionEnd;
        var chars = txta.value;
        console.log("chars: " + chars);

        var pre = chars.slice(0, start);
        var post = chars.slice(end);
        var sel = start != end ? chars.slice(start, end) : "";

        // **1. Split the selection into words**
        sel = sel.match(/\S+/g) || []; // Match non-whitespace sequences

        var formattedText = [];

        for (var word of sel) {
            let lowerWord = word.toLowerCase();

            if (lowerWord === "edit") {
                // **2. Handle "edit" separately**
                formattedText.push("[edit](./edit)");
            } else {
                // **3. Handle keyboard and mouse keys**
                let replacement = word; // Default: keep original

                switch (lowerWord) {
                        // Modifier Keys
                    case "control":
                    case "ctrl": replacement = "&#9096; Ctrl"; break;
                    case "shift": replacement = "&#8679; Shift"; break;
                    case "alt": replacement = "&#9095; Alt"; break;
                    case "caps":
                    case "capslock": replacement = "&#8682; Caps Lock"; break;

                        // OS Keys
                    case "win":
                    case "windows":
                    case "windowskey":
                    case "winkey": replacement = "🪟 Win"; break;
                    case "super":
                    case "linux":
                    case "linuxkey":
                    case "tuxkey": replacement = "&#8984; Super"; break;
                    case "meta": replacement = "&#9670; Meta"; break;
                    case "command":
                    case "cmd": replacement = "&#8984; Cmd"; break;
                    case "option":
                    case "opt": replacement = "&#8997; Opt"; break;

                        // Function Keys
                    case "f1": case "f2": case "f3": case "f4":
                    case "f5": case "f6": case "f7": case "f8":
                    case "f9": case "f10": case "f11": case "f12":
                        replacement = lowerWord.toUpperCase();
                        break;

                        // Navigation & Special Keys
                    case "tab": replacement = "&#8633; Tab"; break;
                    case "delete":
                    case "del": replacement = "&#8998; Delete"; break;
                    case "enter":
                    case "return": replacement = "&#9166; Enter"; break;
                    case "backspace": replacement = "&#10229; Backspace"; break;
                    case "pageup":
                    case "pgup": replacement = "&#8670; Page Up"; break;
                    case "pagedown":
                    case "pgdn": replacement = "&#8671; Page Down"; break;
                    case "printscreen": replacement = "&#9113; Print Screen"; break;

                        // Arrow Keys
                    case "up": replacement = "&#8593; Up Arrow"; break;
                    case "left": replacement = "&#8592; Left Arrow"; break;
                    case "right": replacement = "&#8594; Right Arrow"; break;
                    case "down": replacement = "&#8595; Down Arrow"; break;

                        // Mouse Buttons
                    case "lmb": replacement = "Left 🖱️"; break;
                    case "rmb": replacement = "Right 🖱️"; break;
                    case "mmb": replacement = "Middle 🖱️"; break;
                    case "wheel":
                    case "scrollwheel":
                    case "mousewheel":
                    case "mw": replacement = "Wheel 🖱️"; break;
                }

                // **4. Capitalize single letters**
                if (replacement.length === 1) {
                    replacement = replacement.toUpperCase();
                }

                formattedText.push("[[" + replacement + "]]"); // Wrap keys in `[[ ]]`
            }
        }

        // **5. Reconstruct and insert formatted text**
        txta.value = pre + formattedText.join(" ") + post;
        txta.selectionStart = txta.selectionEnd = pre.length + formattedText.join(" ").length;

        $(txta).focus();
    }

    startInjection();
}

main();
