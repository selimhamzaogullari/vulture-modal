# Vulture-modal

![Built with JavaScript](https://img.shields.io/badge/Built%20with-JavaScript-red?style=for-the-badge&logo=javascript)

[![vulture-modal-js](https://img.shields.io/badge/vulture--modal--js-1.0.0-brightgreen.svg)](https://www.npmjs.com/package/vulture-modal)

Vulture-modal is a minimalist and easy-to-use modal plugin written in pure JavaScript.

## Demo

It is still under development.

## Features

* Multiple Modals
* Customizable (write your custom html in content)

## Installation

* Run the below command to add Vulture-modal to your exisitng or new project.

```
npm i vulture-modal
```

or

```
yarn add vulture-modal
```

* Import Vulture-modal into your module to start using it.

```
import VultureModal from 'Vulture'
```

### Adding Vulture-modal to HTML page using the traditional method

And the script at the bottom of the page

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vulture-modal.js"></script>
```

## Documentation

```javascript
VultureModal.init({
  id: 'vulture-id',
  position: 'center',
  headerText: '🎉 Vulture Modal',
  contentText: '🦅 Vulture Content',
  footer: true,
  confirmButtonText: 'Confirm',
  cancelButtonText: 'Cancel',
  onShow: id => console.info(`${id} modal opened!`),
  onClose: id => console.info(`${id} modal closed!`)
})
```

> Different ids should be used for each modal.

After the modal is init you can show and close it as follows.

```javascript
VultureModal.show('vulture-id') // Show modal
VultureModal.close('vulture-id') // Close modal
```

> You should write the id of the modal you are initing inside the show and close functions.

## API

| Option Key        | type                      | Usage                                                    | Defaults             |
|-------------------|---------------------------|----------------------------------------------------------|----------------------|
| id                | string                    | The id of the modal to be created                        | "vulture-id"         |
| position          | "center", "left", "right" | To show the modal on center or left or right             | "center"             |
| headerText        | string                    | Text to be displayed on the modal                        | "🎉 Vulture Modal"   |
| contentText       | string                    | Text to be displayed in the content                      | "🦅 Vulture Content" |
| footer            | boolean                   | To show the confirm and cancel button under the modal    | true                 |
| confirmButtonText | string                    | Change your confirm button text (Only if footer is true) | "Confirm"            |
| cancelButtonText  | string                    | Change your cancel button text (Only if footer is true)  | "Cancel"             |
| onShow            | Function                  | Invoked when the modal is opened                         |                      |
| onClose           | Function                  | Invoked when the modal is closed                         |                      |

## License

MIT © [Selim Hamzaoğulları](https://github.com/selimhamzaogullari)
