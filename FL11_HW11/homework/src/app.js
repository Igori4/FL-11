let rootNode = document.getElementById('root');

class ToDoCatList {
  constructor({ element }) {
    this._element = element;
    this._state = [];
    this.render();
    this._initForm();
    this._initList();
  }

  _initForm() {
    this._form = new Form({
      element: document.querySelector('[data-component="form"]'),
      state: this._state
    })
  }

  _initList() {
    this._list = new List({
      element: document.querySelector('[data-component="list"]'),
      state: this._state
    })
  }

  setAction(action) {
    this._state = [...this._state, action];

  }

  getActions() {
    console.log(this._state);
    return this._state;
  }



  render() {
    this._element.innerHTML = `
      <div class="todoApp">
        <h1>TODO Cat List</h1>
        <div class="todoForm" data-component="form" >

        </div>
        <div class="todoList" data-component="list">

        </div>
      </div>
    `
  }
}

class Form extends ToDoCatList {
  constructor( options ) {
    super(options)
    this._element = options.element;
    this._state = options.state;
    this.render();
    this.hendlerAction();
    this.hendlerSubmit()
  }

  hendlerAction() {
    document.querySelector('[name="newAction"]').addEventListener('keydown', (event) => {
      let target = event.target;
      if (event.keyCode === 13) {
        this.setAction(target.value.trim());
        target.value = '';
        this.getActions()
      }
    })
  }

  hendlerSubmit() {
    document.querySelector('.form').addEventListener('submit', (event) => {
      event.preventDefault();
    })
  }

  render() {
    this._element.innerHTML = `
      <form class="form">
        <input name="newAction" placeholder="Add new action">
      </form>
    `
  }
}

class List extends ToDoCatList {
  constructor( options ) {
    super(options)
    this._element = options.element;
    this._state = options.state;
    this.render();
  }

  render() {
    this._element.innerHTML = `
      <ul class="list">
        ${this._state.map(item => `<li>${item}</li>`)}
      </ul>
    `
  }
}

const todoCatList = new ToDoCatList({
  element: rootNode
})



