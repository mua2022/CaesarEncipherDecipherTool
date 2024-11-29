# Caesar Encipher Decipher Tool

A simple, intuitive web-based Caesar cipher encryption and decryption tool. This tool lets you encrypt and decrypt text using the classic Caesar cipher technique, directly in your browser.

---

## Features
- **Encryption and Decryption**: Supports both encryption and decryption modes.
- **Shift Customization**: Allows you to specify a shift value for the cipher.
- **Preserves Formatting**: Keeps uppercase and lowercase letters distinct, while leaving non-alphabetic characters unchanged.
- **Responsive Design**: Works on desktop, tablet, and mobile devices.

---

## How It Works
1. **Encryption**:
   - Shifts each letter forward by the given shift value.
   - Example: `Hello` with a shift of `3` becomes `Khoor`.

2. **Decryption**:
   - Reverses the shift by using the negative of the given shift value.
   - Example: `Khoor` with a shift of `3` becomes `Hello`.

3. **Alphabet Handling**:
   - Uppercase and lowercase letters are preserved.
   - Non-alphabetic characters (e.g., spaces, punctuation) remain unchanged.

---

## Usage
1. **Enter Text**: Type the text you want to encrypt or decrypt in the text area.
2. **Specify Shift Value**: Input an integer value for the shift.
3. **Select Mode**: Choose between "Encrypt" or "Decrypt" by clicking the respective button.
4. **View Output**: The resulting text will appear below.

---

## Example
### Encryption:
- **Input**: `Hello, World!`
- **Shift**: `3`
- **Output**: `Khoor, Zruog!`

### Decryption:
- **Input**: `Khoor, Zruog!`
- **Shift**: `3`
- **Output**: `Hello, World!`

---

## Setup Instructions
This tool is hosted on GitHub Pages. You can also run it locally:

1. **Clone the Repository**:
   
  ` git clone https://github.com/mua2022/CaesarEncipherDecipherTool.git `

   `cd CaesarEncipherDecipherTool`
2. **Open Locally**
- Open `index.html` in any modern web browser.

---

## GitHub Pages Hosting
- Enable GitHub Pages in your repository settings to host the tool online.

---

## Technologies Used
- **HTML**: For the structure of the tool.
- **CSS**: For styling and layout.
- **JavaScript**: For Caesar cipher logic and interactivity.

---

## Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests.

## License
This project is licensed under the [MIT License](LICENSE).

---

## Contact
For any issues or suggestions, please open an issue in the [GitHub repository](https://github.com/mua2022/CaesarEncipherDecipherTool).
