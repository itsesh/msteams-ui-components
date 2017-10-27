class ToggleExample extends React.Component {
  constructor() {
    super();
    this.onToggle = this.onToggle.bind(this);
    this.state = { toggle: false };
  }

  onToggle() {
    this.setState(Object.assign({}, this.state, { toggle: !this.state.toggle }));
  }

  render() {
    return <div>
      <Toggle checked={this.state.toggle} onChange={this.onToggle} />
    </div>;
  }
}