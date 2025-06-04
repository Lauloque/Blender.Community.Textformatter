![License](https://img.shields.io/badge/license-GPL--3.0-blue.svg?style=for-the-badge) ![Contributors](https://img.shields.io/github/contributors/L0Lock/Blender.Community.Textformatter.svg?style=for-the-badge)

# Blender.Community.Textformatter

A userscript that enhances text formatting on [Blender.Community](https://blender.community/) by allowing quick insertion of **keyboard shortcuts, mouse buttons, and other UI elements** using simple text selection and hotkeys.

Credits of the original stackexchange script to CoDEmanX and iKlsR: [Button to insert &lt;kbd&gt;&lt;kbd&sol;&gt; for users - Blender Meta Stack Exchange](https://blender.meta.stackexchange.com/questions/388/button-to-insert-kbd-kbd-for-users).  
Blender.Community adaptation made by Lauloque

## 🛠 Features

- Better *Italic* and **Bold** formatting with <kbd>&#9096; Ctrl</kbd><kbd>I</kbd> and <kbd>&#9096; Ctrl</kbd><kbd>B</kbd>
- Converts `edit` into `[edit](./edit)`, a clickable link for a post's author to edit their own post.
- Automatically formats keyboard shortcuts  
  E.G. `ctrl alt s` converts to `[[&#9096; Ctrl]] [[&#9095; Alt]] [[S]]` and looks like this: <kbd>&#9096; Ctrl</kbd><kbd>&#9095; Alt</kbd><kbd>s</kbd>);  
  Supports function keys, navigation keys, mouse buttons, and OS keys;
- Works in all textareas on Blender.Community, including Right Click Select.

## 📥 Installation

1. Install a userscript manager:
   - **[Tampermonkey](https://www.tampermonkey.net/)** (Recommended)
   - **[Violentmonkey](https://violentmonkey.github.io/)** (Alternative)
2. Click **[this link](https://raw.githubusercontent.com/L0Lock/Blender.Community.Textformatter/main/blender_community_textformatter.user.js)** to install the script.
3. Done! The script will now automatically format text when you **select words and press `Ctrl+Y`**.

> [!WARNING]  
> Why not the infamous [Greasemonkey](https://www.greasespot.net/) script manager?
> 
> While Greasemonkey was popular for its pioneering features in customizing web pages since the early 2000s ;
> The major (and breaking) API changes in 2015 and way slower updates, lead to limited support for features like the safe mode `@grant none` and certain DOM manipulations. Many userscripts don't fonction on Greasemonkey without major rewrites, and Greasemonkey's updates are infrequent. Hence many authors recommend against using it.

---

## 📝 How to Use

1. **Select the text you want to format** inside a Blender.Community textarea.
2. **Press <kbd>&#9096; Ctrl</kbd><kbd>Y</kbd>** to apply formatting.
3. The text will be replaced with properly formatted elements.

---

## 🔄 Updates & Contributions

This script will automatically update when a new version is released. To manually check for updates:
- Go to your userscript manager (Tampermonkey/Violentmonkey).
- Click on **"Check for Updates"**.

Want to contribute? Fork the repository on GitHub:  
🔗 [Blender.Community.Textformatter](https://github.com/L0Lock/Blender.Community.Textformatter)

---

## 📋 Formatting Rules

The script transforms selected text into special formatting elements. Below is a list of all supported conversions, along with a preview of the end result.

### **🖥 Keyboard Keys**
| Input        | Output                     | Preview                              |
|--------------|----------------------------|--------------------------------------|
| `ctrl`       | `[[&#9096; Ctrl]]`          | <kbd>&#9096; Ctrl</kbd>              |
| `alt`        | `[[&#9095; Alt]]`           | <kbd>&#9095; Alt</kbd>               |
| `shift`      | `[[&#8679; Shift]]`         | <kbd>&#8679; Shift</kbd>             |
| `tab`        | `[[&#8633; Tab]]`           | <kbd>&#8633; Tab</kbd>               |
| `capslock`   | `[[&#8682; Caps Lock]]`     | <kbd>&#8682; Caps Lock</kbd>         |
| `delete`     | `[[&#8998; Delete]]`        | <kbd>&#8998; Delete</kbd>            |
| `enter`      | `[[&#9166; Enter]]`         | <kbd>&#9166; Enter</kbd>             |
| `backspace`  | `[[&#10229; Backspace]]`    | <kbd>&#10229; Backspace</kbd>        |
| `printscreen`| `[[&#9113; Print Screen]]`  | <kbd>&#9113; Print Screen</kbd>      |

### **⏩ Function Keys**
| Input        | Output                     | Preview                              |
|--------------|----------------------------|--------------------------------------|
| `f1`         | `[[F1]]`                   | <kbd>F1</kbd>                        |
| `f2`         | `[[F2]]`                   | <kbd>F2</kbd>                        |
| `f3`         | `[[F3]]`                   | <kbd>F3</kbd>                        |
| `f4`         | `[[F4]]`                   | <kbd>F4</kbd>                        |
| `f5`         | `[[F5]]`                   | <kbd>F5</kbd>                        |
| `f6`         | `[[F6]]`                   | <kbd>F6</kbd>                        |
| `f7`         | `[[F7]]`                   | <kbd>F7</kbd>                        |
| `f8`         | `[[F8]]`                   | <kbd>F8</kbd>                        |
| `f9`         | `[[F9]]`                   | <kbd>F9</kbd>                        |
| `f10`        | `[[F10]]`                  | <kbd>F10</kbd>                       |
| `f11`        | `[[F11]]`                  | <kbd>F11</kbd>                       |
| `f12`        | `[[F12]]`                  | <kbd>F12</kbd>                       |

### **🖱 Mouse Buttons**
| Input        | Output                     | Preview                              |
|--------------|----------------------------|--------------------------------------|
| `lmb`        | `[[Left 🖱️]]`              | <kbd>Left 🖱️</kbd>                   |
| `rmb`        | `[[Right 🖱️]]`             | <kbd>Right 🖱️</kbd>                  |
| `mmb`        | `[[Middle 🖱️]]`            | <kbd>Middle 🖱️</kbd>                 |
| `wheel`      | `[[Wheel 🖱️]]`             | <kbd>Wheel 🖱️</kbd>                  |

### **🖥 OS Keys**
| Input        | Output                     | Preview                              |
|--------------|----------------------------|--------------------------------------|
| `win`        | `[[&#x1F9F0; Win]]`         | <kbd>&#x1F9F0; Win</kbd>             |
| `super`      | `[[&#8984; Super]]`         | <kbd>&#8984; Super</kbd>             |
| `meta`       | `[[&#9670; Meta]]`          | <kbd>&#9670; Meta</kbd>              |
| `command`    | `[[&#8984;Cmd]]`            | <kbd>&#8984;Cmd</kbd>                |
| `option`     | `[[&#8997; Opt]]`           | <kbd>&#8997; Opt</kbd>               |

### **🔼 Navigation Keys**
| Input        | Output                     | Preview                              |
|--------------|----------------------------|--------------------------------------|
| `up`         | `[[&#8593; Up Arrow]]`      | <kbd>&#8593; Up Arrow</kbd>          |
| `down`       | `[[&#8595; Down Arrow]]`    | <kbd>&#8595; Down Arrow</kbd>        |
| `left`       | `[[&#8592; Left Arrow]]`    | <kbd>&#8592; Left Arrow</kbd>        |
| `right`      | `[[&#8594; Right Arrow]]`   | <kbd>&#8594; Right Arrow</kbd>       |
| `pageup`     | `[[&#8670; Page Up]]`       | <kbd>&#8670; Page Up</kbd>           |
| `pagedown`   | `[[&#8671; Page Down]]`     | <kbd>&#8671; Page Down</kbd>         |

### **📌 Special Formatting**
| Input        | Output                     | Preview                              |
|--------------|----------------------------|--------------------------------------|
| `edit`       | `[edit](./edit)`            | [edit](./edit)                       |
| `a b c`      | `[[A]] [[B]] [[C]]`         | <kbd>A</kbd> <kbd>B</kbd> <kbd>C</kbd> _(Single letters are capitalized)_ |
